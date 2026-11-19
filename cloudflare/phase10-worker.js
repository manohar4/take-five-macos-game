import {DurableObject} from 'cloudflare:workers';
import {createMatch,nextRound,drawCard,lay,hit,discard,passBlocked} from '../phase10.js';

const WEEK=7*24*60*60*1000;
const codePattern=/^(?:[0-9]{4}|[A-F0-9]{12})$/;
const tokenPattern=/^[a-f0-9]{64}$/;
const idPattern=/^[a-z0-9-]{16,80}$/;
const json=(data,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store'}});
const fail=(error,status=400)=>json({error},status);
const encode=bytes=>Array.from(new Uint8Array(bytes),n=>n.toString(16).padStart(2,'0')).join('');
const hash=token=>crypto.subtle.digest('SHA-256',new TextEncoder().encode(token)).then(encode);

export default {
 async fetch(request,env){
  const url=new URL(request.url),origin=request.headers.get('Origin');
  const local=['localhost','127.0.0.1'].includes(url.hostname);
  const allowed=origin&&(env.APP_ORIGINS.split(',').map(s=>s.trim()).includes(origin)||
    local&&/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin));
  if(origin&&!allowed)return fail('This site is not allowed to connect.',403);
  if(request.method==='OPTIONS')return cors(new Response(null,{status:204}),origin);
  const [,code,op]=url.pathname.match(/^\/v1\/rooms\/([0-9]{4}|[A-F0-9]{12})\/(create|join|state|move|events|voice-ice)$/)||[];
  if(!codePattern.test(code??''))return cors(fail('Unknown room endpoint.',404),origin);
  const expected=['state','events','voice-ice'].includes(op)?'GET':'POST';
  if(request.method!==expected)return cors(fail('Method not allowed.',405),origin);
  try{
   const object=env.PHASE_ROOMS.get(env.PHASE_ROOMS.idFromName(code));
   const response=await object.fetch(request);
   return response.status===101?response:cors(response,origin);
  }catch{return cors(fail('The match service is temporarily unavailable.',503),origin);}
 }
};
function cors(response,origin){
 if(!origin)return response;
 const headers=new Headers(response.headers);
 headers.set('Access-Control-Allow-Origin',origin);
 headers.set('Access-Control-Allow-Methods','GET, POST, OPTIONS');
 headers.set('Access-Control-Allow-Headers','Authorization, Content-Type');
 headers.set('Cache-Control','no-store');headers.set('Vary','Origin');
 return new Response(response.body,{status:response.status,headers});
}
function privateView(room,id){
 const game=room.game;
 return {revision:room.rev,host:room.seats[0].id===id,seat:id,expiresAt:room.expiresAt,
  seats:room.seats.map(({id,name,avatar})=>({id,name,avatar})),
  game:game&&{
   players:game.players.map(({hand,...p})=>({...p,human:p.id===id,hand:p.id===id?hand:[],handCount:hand.length})),
   current:game.current,round:game.round,winner:game.winner,tiebreak:game.tiebreak,step:game.step,message:game.message,
   drawCount:game.draw.length,discardCount:game.discard.length,discard:game.discard.slice(-1),
   summary:game.summary&&{...game.summary,table:game.summary.table.map(p=>({...p,human:p.id===id}))}
  }};
}

export class PhaseRoom extends DurableObject{
 async fetch(request){
  const op=new URL(request.url).pathname.split('/').at(-1);
  const protocols=(request.headers.get('Sec-WebSocket-Protocol')||'').split(/,\s*/);
  const token=op==='events'?protocols.find(p=>p.startsWith('seat.'))?.slice(5):
   request.headers.get('Authorization')?.match(/^Bearer ([a-f0-9]{64})$/)?.[1];
  if(!tokenPattern.test(token??''))return fail('A seat token is required.',401);
  const secret=await hash(token);
  if(op==='voice-ice'){
   const room=await this.ctx.storage.get('room');
   if(!room||room.retired||room.expiresAt<=Date.now()||!room.seats.some(p=>p.secret===secret))return fail('Voice requires an active seat.',403);
   const fallback={iceServers:[{urls:'stun:stun.cloudflare.com:3478'}]};
   if(!this.env.TURN_KEY_ID||!this.env.TURN_API_TOKEN)return json(fallback);
   try{
    const response=await fetch('https://rtc.live.cloudflare.com/v1/turn/keys/'+encodeURIComponent(this.env.TURN_KEY_ID)+'/credentials/generate-ice-servers',{
     method:'POST',headers:{Authorization:'Bearer '+this.env.TURN_API_TOKEN,'Content-Type':'application/json'},
     body:JSON.stringify({ttl:43200}),signal:AbortSignal.timeout(3000)});
    return json(response.ok?await response.json():fallback);
   }catch{return json(fallback);}
  }
  let body={};
  if(request.method==='POST'){
   if(Number(request.headers.get('Content-Length'))>4096)return fail('Request is too large.',413);
   const reader=request.body?.getReader();let size=0;const decoder=new TextDecoder();let raw='';
   if(!reader)return fail('Missing request body.');
   try{
    while(true){const {value,done}=await reader.read();if(done)break;size+=value.length;if(size>4096){await reader.cancel();return fail('Request is too large.',413);}raw+=decoder.decode(value,{stream:true});}
    body=JSON.parse(raw+decoder.decode());if(!body||typeof body!=='object'||Array.isArray(body))return fail('Invalid request.');
   }catch{return fail('Invalid request.');}
  }
  return this.ctx.blockConcurrencyWhile(async()=>{
   let room=await this.ctx.storage.get('room');
   if(room&&room.expiresAt<=Date.now()){
    if(op==='create')return fail('Room code unavailable.',409);
    return fail('This table has expired.',410);
   }
   let seat=room?.seats.find(p=>p.secret===secret);
   if(room?.retired&&!(op==='move'&&seat&&body.id===seat.lastMove)){
    return op==='create'?fail('Room code unavailable.',409):fail('This invite was replaced. Ask the host for the new code.',410);
   }
   if(op==='create'&&room&&!seat)return fail('Room code unavailable.',409);
   if(op==='create'||op==='join'){
    if(seat)return json(privateView(room,seat.id));
    if(op==='join'&&!room)return fail('Table not found. Check the invite code.',404);
    if(room?.game)return fail('This match has already started.',409);
    if(room?.seats.length>=6)return fail('This table is full.',409);
    const name=typeof body.name==='string'?body.name.trim().slice(0,20):'';
    if(!name)return fail('Enter a player name.');
    if(!room)room={seats:[],game:null,rev:0};
    seat={id:room.seats.length,name,avatar:['player','fox','bear','frog'].includes(body.avatar)?body.avatar:'player',secret,lastMove:null};
    room.seats.push(seat);await this.save(room);
    return json(privateView(room,seat.id));
   }
   if(!room)return fail('Table not found or expired.',404);
   if(!seat)return fail('This device does not have a seat at this table.',403);
   if(op==='state')return json(privateView(room,seat.id));
   if(op==='events'){
    if(request.headers.get('Upgrade')?.toLowerCase()!=='websocket'||!protocols.includes('phase10'))return fail('WebSocket required.',426);
    const [client,server]=Object.values(new WebSocketPair());
    this.ctx.acceptWebSocket(server,[String(seat.id)]);
    server.serializeAttachment({seat:seat.id,voice:false});
    server.send(JSON.stringify({revision:room.rev}));this.voiceRoster();
    return new Response(null,{status:101,webSocket:client,headers:{'Sec-WebSocket-Protocol':'phase10'}});
   }
   if(!idPattern.test(body.id??'')||!Number.isSafeInteger(body.revision))return fail('Invalid move request.');
   if(seat.lastMove===body.id)return json(privateView(room,seat.id));
   if(body.revision!==room.rev)return fail('The table changed. Please try again.',409);
   const game=room.game,host=room.seats[0]===seat;
   let ok=false;
   if(body.type==='retire-invite'&&host&&!game&&room.seats.length===1){
    room.retired=true;ok=true;
   }else if(body.type==='start'&&host&&!game&&room.seats.length>=2){
    room.game=createMatch(room.seats.map(({id,name,avatar})=>({id,name,avatar,human:true})));ok=true;
   }else if(body.type==='next'&&game?.step==='round'&&!game.winner){
    nextRound(game);ok=true;
   }else if(game&&game.step!=='round'&&game.players[game.current]?.id===seat.id){
    switch(body.type){
     case 'draw': if(['draw','discard'].includes(body.pile))ok=drawCard(game,body.pile);break;
     case 'lay': if(Array.isArray(body.cards)&&body.cards.length<=11&&body.cards.every(Number.isInteger))ok=lay(game,body.cards,body.runStarts);break;
     case 'hit': if(Number.isInteger(body.card)&&body.target&&Number.isInteger(body.target.player)&&Number.isInteger(body.target.index))ok=hit(game,body.card,body.target);break;
     case 'discard': if(Number.isInteger(body.card))ok=discard(game,body.card,body.target);break;
     case 'pass':ok=passBlocked(game);break;
    }
   }
   if(!ok)return fail('That move is not allowed right now.',422);
   seat.lastMove=body.id;await this.save(room);
   return json(privateView(room,seat.id));
  });
 }
 async save(room){
  room.rev++;room.expiresAt=Date.now()+WEEK;
  await this.ctx.storage.transaction(async storage=>{
   await storage.put('room',room);await storage.setAlarm(room.expiresAt);
  });
  const update=JSON.stringify({revision:room.rev});
  for(const socket of this.ctx.getWebSockets())try{socket.send(update);}catch{}
 }
 async alarm(){
  return this.ctx.blockConcurrencyWhile(async()=>{
   const room=await this.ctx.storage.get('room');
   if(room?.expiresAt>Date.now()){await this.ctx.storage.setAlarm(room.expiresAt);return;}
   await this.ctx.storage.deleteAll();
   for(const socket of this.ctx.getWebSockets())try{socket.close(4000,'Table expired');}catch{}
  });
 }
 voiceRoster(){
  const sockets=this.ctx.getWebSockets().filter(ws=>ws.readyState===1&&ws.deserializeAttachment()?.voice);
  const packet=JSON.stringify({voice:'roster',seats:sockets.map(ws=>{const {seat,session,muted,speaking}=ws.deserializeAttachment();return {seat,session,muted:!!muted,speaking:!!speaking};})});
  for(const ws of this.ctx.getWebSockets())try{ws.send(packet);}catch{}
 }
 webSocketMessage(socket,message){
  if(message==='ping'){socket.send('pong');return;}
  if(typeof message!=='string'||message.length>16000)return;
  const user=socket.deserializeAttachment();
  if(!user)return;
  let data;try{data=JSON.parse(message);}catch{return;}
  if(data?.voice==='join'){
   for(const ws of this.ctx.getWebSockets(String(user.seat)))if(ws!==socket){
    const old=ws.deserializeAttachment();
    if(old?.voice){ws.serializeAttachment({...old,voice:false});try{ws.send(JSON.stringify({voice:'replaced'}));}catch{}}
   }
   socket.serializeAttachment({...user,voice:true,muted:!!data.muted,speaking:false,session:user.voice?user.session:crypto.randomUUID()});this.voiceRoster();return;
  }
  if(data?.voice==='state'&&user.voice){
   if(user.lastVoiceUpdate&&Date.now()-user.lastVoiceUpdate<120)return;
   socket.serializeAttachment({...user,muted:!!data.muted,speaking:!data.muted&&!!data.speaking,lastVoiceUpdate:Date.now()});
   this.voiceRoster();return;
  }
  if(data?.voice==='leave'){socket.serializeAttachment({...user,voice:false});this.voiceRoster();return;}
  if(!user.voice||data?.voice!=='signal'||!Number.isInteger(data.to)||data.to===user.seat)return;
  const signal=data.signal;
  if(!signal||!['offer','answer','ice','restart'].includes(signal.kind))return;
  for(const ws of this.ctx.getWebSockets(String(data.to)))if(ws.deserializeAttachment()?.voice){
   try{ws.send(JSON.stringify({voice:'signal',from:user.seat,signal}));}catch{}
  }
 }
 webSocketClose(socket,code){
  const user=socket.deserializeAttachment();
  if(user?.voice){socket.serializeAttachment({...user,voice:false});this.voiceRoster();}
  try{socket.close(code===1006?1000:code);}catch{}
 }
 webSocketError(socket){this.webSocketClose(socket,1011);}

}
