import {isSoundEnabled} from './audio.js';

const preference='phase10-commentary';
export function createCommentary(){
 const speech=window.speechSynthesis;
 let enabled=true,previous=null,active=null,events=[],turn='';
 try{enabled=localStorage.getItem(preference)!=='off';}catch{}
 const available=!!speech&&typeof SpeechSynthesisUtterance==='function';
 const audible=()=>available&&enabled&&isSoundEnabled()&&!document.hidden;
 function stop(){
  const speaking=active;active=null;events=[];turn='';
  if(speaking)speech.cancel();
 }
 function pump(){
  if(!audible()||active)return;
  const line=events.shift()||turn;if(!line)return;
  if(line===turn)turn='';
  const voice=new SpeechSynthesisUtterance(line);
  voice.lang='en';voice.rate=1.03;active=voice;
  voice.onend=voice.onerror=()=>{if(active===voice){active=null;pump();}};
  try{speech.speak(voice);}catch{active=null;}
 }
 function turnLine(player){
  return player.name==='You'?"It's your turn.":player.human?
   player.name+", it's your turn.":player.name+"'s turn.";
 }
 function observe(g){
  const current=g.players[g.current];
  const roundDone=g.step==='round';
  const players=roundDone?(g.summary?.table??g.players):g.players;
  const now={round:g.round,step:g.step,seat:current?.id,laid:new Set(players.filter(p=>p.melds.length).map(p=>p.id))};
  const before=previous;previous=now;
  if(!audible()){stop();return;}
  const sameRound=before?.round===now.round;
  if(sameRound){
   for(const p of players)if(now.laid.has(p.id)&&!before.laid.has(p.id)){
    const phase=g.players.find(seat=>seat.id===p.id)?.phase;
    const number=!roundDone&&phase?' phase '+phase:' a phase';
    events.push(p.name==='You'?'You laid your phase.':p.name+' laid'+number+'.');
   }
  }
  if(roundDone){
   turn='';
   if(sameRound&&before.step!=='round')events.push(g.winner?g.winner+' wins the match!':g.summary.out+' went out. Round complete.');
  }else if(current&&(!sameRound||before.seat!==now.seat||before.step==='play'&&now.step==='draw')){
   // Keep the latest turn cue if the bots move faster than the voice.
   turn=turnLine(current);
  }
  pump();
 }
 function toggle(g){
  enabled=!enabled;
  try{localStorage.setItem(preference,enabled?'on':'off');}catch{}
  if(!enabled)stop();
  else if(audible()&&g?.step!=='round'&&g?.players[g.current]){turn=turnLine(g.players[g.current]);pump();}
 }
 function onVisibility(){
  if(document.hidden)stop();
 }
 document.addEventListener('visibilitychange',onVisibility);
 return {available,enabled:()=>enabled,observe,toggle,
  reset(){stop();previous=null;},
  destroy(){stop();document.removeEventListener('visibilitychange',onVisibility);}
 };
}
