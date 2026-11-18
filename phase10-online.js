import {isNativeApp,publicGameUrl} from './native-app.js';
const configured=import.meta.env.VITE_PHASE10_API;
export const onlineAPI=configured||(['localhost','127.0.0.1'].includes(location.hostname)&&location.protocol==='http:'?'http://127.0.0.1:8787':'');
export const normalizeCode=code=>String(code??'').replace(/[\s-]/g,'').toUpperCase();
const hex=n=>Array.from(crypto.getRandomValues(new Uint8Array(n)),b=>b.toString(16).padStart(2,'0')).join('');
export const validCode=code=>/^(?:[0-9]{4}|[A-F0-9]{12})$/.test(code);
export function newCode(){
 const random=new Uint16Array(1);
 do{crypto.getRandomValues(random);}while(random[0]>=60000);
 return String(random[0]%10000).padStart(4,'0');
}
const seatKey='phase10-online-seat:';
export function savedSeat(code){try{return localStorage.getItem(seatKey+code)}catch{return null}}
export function recentRoom(){try{return localStorage.getItem('phase10-recent-room')}catch{return null}}
export function rememberSeat(code,token){
 try{localStorage.setItem(seatKey+code,token);localStorage.setItem('phase10-recent-room',code);}catch{}
}
export function inviteURL(code){
 const url=isNativeApp?new URL(publicGameUrl):new URL(location.pathname,location.origin);
 url.searchParams.set('phase10room',code);return url.href;
}
export class OnlineError extends Error{
 constructor(message,status){super(message);this.status=status;}
}
export function onlineRoom(code,token,{update,status}){
 let socket,timer,poll,closed=false,requestInFlight=null,revision=-1,wanted=-1,retry=500,lastEvent=0;
 const base=onlineAPI.replace(/\/$/,'')+'/v1/rooms/'+code+'/';
 async function request(op,payload){
  let res;
  try{res=await fetch(base+op,{headers:{Authorization:'Bearer '+token,...(payload?{'Content-Type':'application/json'}:{})},
   method:payload?'POST':'GET',body:payload?JSON.stringify(payload):undefined,signal:AbortSignal.timeout(6500),cache:'no-store'});}
  catch{throw new OnlineError('Cannot reach the table. Reconnecting…',0);}
  const data=await res.json().catch(()=>({}));
  if(!res.ok)throw new OnlineError(data.error||'The table is unavailable.',res.status);
  if(!closed){
   if(data.revision>revision){revision=data.revision;update(data);}
   status('');
  }
  return data;
 }
 function sync(){
  if(closed)return Promise.resolve();
  if(requestInFlight)return requestInFlight;
  let synced=false;
  requestInFlight=request('state').then(()=>{synced=true;}).catch(e=>{
   if(closed)return;
   if([401,403,404,410].includes(e.status)){status(e.message,true);close();}
   else status(e.message);
  }).finally(()=>{requestInFlight=null;if(synced&&wanted>revision)sync();});
  return requestInFlight;
 }
 function connect(){
  if(closed||socket&&socket.readyState<=1)return;
  try{socket=new WebSocket(base.replace(/^http/,'ws')+'events',['phase10','seat.'+token]);}
  catch{schedule();return;}
  const ws=socket;
  ws.onopen=()=>{retry=500;lastEvent=Date.now();sync();};
  ws.onmessage=e=>{
   lastEvent=Date.now();if(e.data==='pong')return;
   try{const data=JSON.parse(e.data);if(Number.isSafeInteger(data.revision)&&data.revision>revision){wanted=Math.max(wanted,data.revision);sync();}}catch{}
  };
  ws.onerror=()=>ws.close();
  ws.onclose=()=>{if(closed||socket!==ws)return;socket=null;sync();schedule();};
 }
 function schedule(){
  clearTimeout(timer);if(closed)return;
  timer=setTimeout(connect,retry+Math.random()*250);retry=Math.min(10000,retry*2);
 }
 function wake(){
  if(closed||document.hidden)return;
  sync();if(socket?.readyState===1&&Date.now()-lastEvent>25000){socket.close();socket=null;}connect();
 }
 function close(){
  closed=true;clearTimeout(timer);clearInterval(poll);socket?.close();
  window.removeEventListener('online',wake);window.removeEventListener('pageshow',wake);
  document.removeEventListener('visibilitychange',wake);
 }
 return {request,close,start(){
  window.addEventListener('online',wake);window.addEventListener('pageshow',wake);
  document.addEventListener('visibilitychange',wake);
  poll=setInterval(()=>{
   if(document.hidden||closed)return;
   sync();if(socket?.readyState===1){if(Date.now()-lastEvent>25000){socket.close();socket=null;connect();}else socket.send('ping');}
   else connect();
  },6000);connect();
 },async move(type,payload){
  const args={...payload,type,id:hex(16),revision};
  for(let tries=0;;tries++)try{return await request('move',args)}catch(e){
   if(closed||e.status&&e.status!==503||tries>=2){sync();throw e;}
   status('Reconnecting… your move will be checked.');
   await new Promise(resolve=>setTimeout(resolve,450*2**tries));
  }
 }};
}
export const createToken=()=>hex(32);
