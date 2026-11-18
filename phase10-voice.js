const defaultICE=[{urls:'stun:stun.cloudflare.com:3478'}];

export function voiceChat(room,seat,output,change){
 const available=!!(navigator.mediaDevices?.getUserMedia&&window.RTCPeerConnection);
 let stream,muted=false,busy=false,closed=false,version=0,iceServers=defaultICE;
 const peers=new Map();
 function status(text){change({available,joined:!!stream,muted,busy,text});}
 function remove(id){
  const peer=peers.get(id);if(!peer)return;
  peers.delete(id);peer.pc.close();peer.audio.remove();
 }
 function report(){
  if(!stream)return;
  const connected=[...peers.values()].filter(p=>p.pc.connectionState==='connected').length;
  status(connected?connected+' connected in voice':peers.size?'Connecting voice…':'Waiting for others to join voice');
 }
 function send(id,signal){room.sendVoice({voice:'signal',to:id,signal});}
 async function offer(id,peer,restart=false){
  if(peer.making||peer.pc.signalingState!=='stable')return;
  peer.making=true;
  try{
   await peer.pc.setLocalDescription(await peer.pc.createOffer(restart?{iceRestart:true}:undefined));
   if(peers.get(id)===peer)send(id,{kind:'offer',description:peer.pc.localDescription});
  }finally{peer.making=false;}
 }
 function add(id){
  if(peers.has(id))return peers.get(id);
  const pc=new RTCPeerConnection({iceServers}),audio=document.createElement('audio');
  audio.autoplay=true;audio.setAttribute('playsinline','');output.append(audio);
  const peer={pc,audio,candidates:[],queue:Promise.resolve(),making:false,restarted:false};
  peers.set(id,peer);
  for(const track of stream.getAudioTracks())pc.addTrack(track,stream);
  pc.onicecandidate=e=>{if(e.candidate)send(id,{kind:'ice',candidate:e.candidate.toJSON()});};
  pc.ontrack=e=>{
   audio.srcObject=e.streams[0]??new MediaStream([e.track]);
   audio.play().catch(()=>status('Tap Enable audio to hear voice chat.'));
  };
  pc.onconnectionstatechange=()=>{
   if(peers.get(id)!==peer)return;
   if(pc.connectionState==='connected')peer.restarted=false;
   if(pc.connectionState==='failed'){
    if(peer.restarted){status('Voice could not connect. Try rejoining voice.');return;}
    peer.restarted=true;
    if(seat<id)offer(id,peer,true).catch(()=>status('Voice reconnect failed.'));
    else send(id,{kind:'restart'});
   }else report();
  };
  return peer;
 }
 function receive(data){
  if(!stream||closed)return;
  if(data.voice==='connected'){room.sendVoice({voice:'join'});return;}
  if(data.voice==='disconnected'){for(const id of peers.keys())remove(id);status('Voice reconnecting…');return;}
  if(data.voice==='replaced'){leave();status('Voice moved to another tab.');return;}
  if(data.voice==='roster'){
   const ids=new Map(data.seats.filter(p=>Number.isInteger(p.seat)&&p.seat!==seat).map(p=>[p.seat,p.session]));
   for(const [id,peer] of peers)if(ids.get(id)!==peer.session)remove(id);
   for(const [id,session] of ids)if(!peers.has(id)){
    const peer=add(id);peer.session=session;if(seat<id)offer(id,peer).catch(()=>status('Voice could not connect.'));
   }
   report();return;
  }
  if(data.voice!=='signal'||!peers.has(data.from))return;
  const id=data.from,peer=peers.get(id),{pc}=peer,s=data.signal;
  peer.queue=peer.queue.then(async()=>{
   if(peers.get(id)!==peer)return;
   if(s.kind==='restart'&&seat<id){await offer(id,peer,true);return;}
   if(s.kind==='ice'){
    if(pc.remoteDescription)await pc.addIceCandidate(s.candidate);
    else if(peer.candidates.length<80)peer.candidates.push(s.candidate);
    return;
   }
   if(s.kind==='offer'&&seat>id||s.kind==='answer'&&seat<id){
    await pc.setRemoteDescription(s.description);
    for(const candidate of peer.candidates.splice(0))await pc.addIceCandidate(candidate).catch(()=>{});
    if(s.kind==='offer'){
     await pc.setLocalDescription(await pc.createAnswer());
     send(id,{kind:'answer',description:pc.localDescription});
    }
   }
  }).catch(()=>{if(peers.get(id)===peer)status('Voice could not connect. Try rejoining voice.');});
 }
 function leave(){
  version++;busy=false;
  if(stream)room.sendVoice({voice:'leave'});
  room.listenVoice(null);
  stream?.getTracks().forEach(track=>track.stop());stream=null;muted=false;
  for(const id of peers.keys())remove(id);
  status('');
 }
 status('');
 return {available,async join(){
  if(!available||busy||stream||closed)return;
  const attempt=++version;busy=true;status('Requesting microphone…');
  try{
   const captured=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true},video:false});
   if(closed||attempt!==version){captured.getTracks().forEach(t=>t.stop());return;}
   stream=captured;
   const config=await room.voiceICE().catch(()=>null);
   if(closed||attempt!==version)return;
   iceServers=config?.iceServers??defaultICE;busy=false;status('Joining voice…');room.listenVoice(receive);
  }catch{if(!closed&&attempt===version){leave();status('Microphone unavailable. Check browser permissions.');}}
 },leave,mute(){
  if(!stream)return;
  muted=!muted;for(const track of stream.getAudioTracks())track.enabled=!muted;
  status(muted?'Microphone muted':'Microphone on');
 },enableAudio(){for(const {audio} of peers.values())audio.play().catch(()=>{});report();},destroy(){closed=true;leave();}};
}
