import {voiceChat} from './phase10-voice.js';
import {createCommentary} from './phase10-commentary.js';
import {PHASES,goal,newGame,nextRound,canDraw,drawCard,findPhase,runPlacements,placeWildRuns,lay,hits,hit,skipTargets,discard,botTurn,passBlocked} from './phase10.js';
import {onlineAPI,onlineRoom,normalizeCode,validCode,createToken,newCode,rememberSeat,savedSeat,recentRoom,inviteURL} from './phase10-online.js';
import {playground} from './phase10-scene.js';
import {playSound,isSoundEnabled} from './audio.js';
import './phase10-playground.css';

const deckPhoto=new URL('./assets/phase10/classic-deck-reference.jpg',import.meta.url).href;
const rules='https://service.mattel.com/instruction_sheets/W4729-Eng.pdf';
const avatars=['player','fox','bear','frog'];
const labels=['Adventurer','Fox','Bear','Frog'];
const assets=import.meta.glob('./assets/phase10/card-*.png',{eager:true,query:'?url',import:'default'});
const portraits=import.meta.glob('./assets/3d/avatar-*.png',{eager:true,query:'?url',import:'default'});
const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const description=c=>c.kind==='number'?c.color+' '+c.value:c.kind==='star'?'Star, Wild card':'Skip card';
const avatar=(name)=>`<img alt="" src="${portraits['./assets/3d/avatar-'+name+'.png']}">`;
function face(c){
 const file=c.kind==='number'?c.color:c.kind==='star'?'wild':'skip';
 const art=assets['./assets/phase10/card-'+file+'.png'];
 return `<span class="p10-face p10-${file}" aria-hidden="true"><img src="${art}" alt="" draggable="false">${c.kind==='number'?`<i>${c.value}</i><b>${c.value}</b><i>${c.value}</i>`:''}</span>`;
}
const action=(key,text,disabled=false,extra='')=>`<button type="button" data-p10="${key}" ${disabled?'disabled':''} ${extra}>${text}</button>`;

export function mountPhase10(root,{name,exit,invite}){
 root.innerHTML=`<section class="p10-world"><canvas class="p10-scene" aria-hidden="true"></canvas>
 <div class="p10-content"></div><div data-voice-output></div><div class="p10-network-status" role="status" hidden></div><dialog class="p10-guide"><div class="p10-guide-title"><h2>Table guide</h2>${action('close-guide','Close')}</div>
 <p>Draw one card from either pile. Lay your whole phase when you can. Starting on your next turn after laying your phase, you can add matching cards to any phase on the table. Drop one card on the discard pile to end your turn. You can also select one card, then activate the pile.</p>
 <p><b>★ Star:</b> stands for a number or color. A phase needs at least one numbered card. A played Star stays where it was assigned.</p>
 <p><b>Skip:</b> discard it and choose an eligible opponent to miss their turn. You can’t draw a discarded Skip.</p>
 <p>Empty your hand to end the round. Anyone who laid their phase moves forward. Cards still in hand cost 5 points (1–9), 10 (10–12), 15 (Skip), or 25 (Star). When multiple players finish Phase 10 together, the lowest total wins; a tie goes to a playoff.</p>
 <ol>${PHASES.map((_,i)=>`<li>${goal(i+1)}</li>`).join('')}</ol><a href="${rules}" target="_blank" rel="noopener">Mattel’s full instructions ↗</a><a href="https://www.mastgeneralstore.com/products/mattel-phase-10-card-game" target="_blank" rel="noopener">Classic deck photo ↗</a><details><summary>See the classic cards</summary><img class="p10-reference" src="${deckPhoto}" loading="lazy" width="480" height="480" alt="Classic numbered Phase 10 cards with colored bands alongside Wild and Skip cards."></details></dialog></section>`;
 const content=root.querySelector('.p10-content'),guide=root.querySelector('dialog');
 const scenery=playground(root.querySelector('canvas'));
 const commentary=createCommentary();
 let g,selected=[],runStarts={},seat='player',count=3,timer,message='',picker='',disposed=false,shownCards=new Set(),shownRound=null,skipCardId=null;
 let remote=null,room=null,code='',connecting=false,sending=false,refreshing=false,onlineMode=!!invite,entryName=name||'',entryCode=invite||'';
 const voiceOutput=root.querySelector('[data-voice-output]');
 let voice=null,voiceState={available:false,joined:false,muted:false,busy:false,roster:[]};
 function voiceStatus(id){
  const state=id===room?.seat?(voiceState.joined?voiceState:null):voiceState.roster.find(p=>p.seat===id);
  return !state?'Voice off':state.muted?'Muted':state.speaking?'Talking':'Mic on';
 }
 function micButton(){
  if(!voiceState.available)return '';
  const label=voiceState.busy?'Connecting…':!voiceState.joined?'Join voice':voiceState.muted?'Unmute':'Mute';
  return action('voice-toggle',label,voiceState.busy,`class="p10-direct-mic" aria-label="${voiceState.joined?(voiceState.muted?'Unmute microphone':'Mute microphone'):'Join voice chat'}" aria-pressed="${voiceState.joined&&!voiceState.muted}"`);
 }
 function voiceBadge(id){
  return `<span class="p10-profile-voice" data-voice-seat="${id}">${voiceStatus(id)}</span>`;
 }
 function voicePanel(state){
  voiceState=state;
  for(const el of content.querySelectorAll('[data-voice-seat]')){
   el.textContent=voiceStatus(Number(el.dataset.voiceSeat));el.classList.toggle('is-talking',el.textContent==='Talking');
  }
  for(const el of content.querySelectorAll('[data-p10="voice-toggle"]')){
   el.disabled=state.busy;
   el.textContent=state.busy?'Connecting…':!state.joined?'Join voice':state.muted?'Unmute':'Mute';
   el.setAttribute('aria-pressed',String(state.joined&&!state.muted));
  }
  if(state.text&&/unavailable|could not|failed|Enable audio/.test(state.text))setStatus(state.text);
 }
 const notice=root.querySelector('.p10-network-status');
 const setStatus=text=>{notice.hidden=!text;notice.textContent=text||'';};
 const ready=()=>!sending&&g?.players[g.current]?.human&&g.step==='play';
 const me=()=>g?.players.find(p=>p.human);
 const persist=()=>{if(remote)return;try{sessionStorage.setItem('phase10-playground-v1',JSON.stringify(g));}catch{}};
 function setup(){
  commentary.reset();
  content.classList.remove('p10-live');
  scenery.table(null);
  content.innerHTML=`<div class="p10-bar">${action('exit','← Games')}${action('guide','How to play')}</div><div class="p10-setup"><small>THE CLUBHOUSE</small><h1>Phase 10</h1><p>Ten challenges. One card at a time.</p>
  <div class="p10-avatars" role="group" aria-label="Choose your character">${avatars.map((a,i)=>action('avatar:'+a,avatar(a)+`<b>${labels[i]}</b>`,false,`aria-pressed="${a===seat}"`)).join('')}</div>
  <div class="p10-mode-choice">${action('solo-mode','Solo',false,`aria-pressed="${!onlineMode}"`)}${action('online-mode','Play with friends',false,`aria-pressed="${onlineMode}"`)}</div>
  ${onlineMode?`<label>Your name <input data-entry="name" maxlength="20" autocomplete="nickname" value="${esc(entryName)}"></label>
  <label>Invite code <input data-entry="code" maxlength="20" inputmode="numeric" autocomplete="off" placeholder="0000" value="${esc(entryCode)}"></label>
  <div class="p10-setup-actions">${action('create-room','Create private table',!onlineAPI||connecting,'class="p10-gold"')}${action('join-room','Join table',!onlineAPI||connecting)}${recentRoom()?action('resume-room','Rejoin last table',!onlineAPI||connecting):''}</div>
  ${onlineAPI?'':'<p>Online play is not configured on this site yet.</p>'}`:
  `<label>Computer opponents <select aria-label="Computer opponents">${[1,2,3,4,5].map(n=>`<option value="${n}" ${n===count?'selected':''}>${n}</option>`).join('')}</select></label>
  <div class="p10-setup-actions">${action('start','Deal the cards',false,'class="p10-gold"')}${saved()?action('continue','Resume solo match'):''}</div>`}</div>`;

 }
 function lobby(){
  content.classList.remove('p10-live');scenery.table(null);
  content.innerHTML=`<div class="p10-bar">${action('exit','← Games')}${action('guide','Guide')}</div>
   <div class="p10-setup p10-lobby"><small>PRIVATE TABLE</small><h1>Play with friends</h1><p>Share the invite. Anyone with the link can take an open seat.</p>
   <label>Invite code <output>${code}</output></label>
   ${action('share-room','Share invite link',refreshing)}
   ${micButton()}
   ${room.host&&room.seats.length===1?action('refresh-invite','Refresh invite code',refreshing):''}
   <ul>${room.seats.map(p=>`<li>${avatar(p.avatar)}<b>${esc(p.name)}</b><small>${p.id===room.seat?'You':''}</small>${voiceBadge(p.id)}</li>`).join('')}</ul>
   ${room.host?action('start-room',room.seats.length<2?'Waiting for at least 2 players':'Deal the cards',room.seats.length<2||sending,'class="p10-gold"'):'<p>Waiting for the host to deal.</p>'}</div>`;
 }
 function backToSetup(){
  voice?.destroy();voice=null;voiceState={available:false,joined:false,muted:false,busy:false,roster:[]};
  remote?.close();remote=null;room=null;g=null;connecting=false;sending=false;picker='';setStatus('');
  const url=new URL(location.href);url.searchParams.delete('phase10room');history.replaceState({},'',url.href);
  setup();
 }
 async function openRoom(op,requested,retries=0){
  if(!onlineAPI||connecting||remote)return;
  const selectedCode=normalizeCode(requested);
  if(!validCode(selectedCode)){setStatus('Enter the four-digit invite code.');return;}
  const token=(op!=='create'&&savedSeat(selectedCode))||createToken();code=selectedCode;
  if(op!=='state'&&!entryName.trim()){setStatus('Enter your name to take a seat.');return;}
  connecting=true;setup();setStatus(op==='create'?'Opening your table…':'Connecting to your table…');
  const connection=onlineRoom(code,token,{update(view){
   if(disposed||remote!==connection)return;
   if(!room||view.revision!==room.revision){endDrag();selected=[];runStarts={};picker='';skipCardId=null;}
   room=view;g=view.game;
   if(!voice)voice=voiceChat(connection,view.seat,voiceOutput,voicePanel);
   if(g)render();else lobby();
  },status(text,terminal){
   if(disposed||remote!==connection||refreshing)return;
   if(terminal){backToSetup();setStatus(text);}else setStatus(text);
  }});
  remote=connection;
  try{
   await connection.request(op,op==='state'?null:{name:entryName,avatar:seat});
   if(disposed||remote!==connection)return;
   rememberSeat(code,token);
   const url=new URL(location.href);url.searchParams.set('phase10room',code);history.replaceState({},'',url.href);
   connection.start();
  }catch(e){
   if(disposed||remote!==connection)return;
   connection.close();remote=null;
   if(op==='create'&&e.status===409&&retries<7){queueMicrotask(()=>openRoom('create',newCode(),retries+1));return;}
   setup();setStatus(e.message);
  }finally{
   if(!disposed){connecting=false;if(!remote)setup();}
  }
 }
 async function sendMove(type,payload={},cue='card'){
  if(!remote||sending)return;
  const connection=remote;sending=true;setStatus('Saving move…');
  try{const result=await connection.move(type,payload);if(!disposed&&remote===connection)playSound(result.game?.winner?'finish':cue);}
  catch(error){if(!disposed&&remote===connection)setStatus(error.message);}
  finally{if(!disposed&&remote===connection){sending=false;if(g)render();else if(room)lobby();}}
 }
 async function refreshInvite(){
  if(refreshing||sending||!remote||!room?.host||room.seats.length!==1||g)return;
  const original=remote,host=room.seats[0];
  let replacement,token,nextCode;
  refreshing=true;lobby();setStatus('Refreshing invite…');
  try{
   for(let attempt=0;attempt<8;attempt++){
    nextCode=newCode();token=createToken();
    replacement=onlineRoom(nextCode,token,{update(){},status(){}});
    try{await replacement.request('create',{name:host.name,avatar:host.avatar});break;}
    catch(error){replacement.close();replacement=null;if(error.status!==409||attempt===7)throw error;}
   }
   if(disposed||remote!==original)return;
   await original.move('retire-invite',{});
   if(disposed||remote!==original)return;
   replacement.close();replacement=null;
   rememberSeat(nextCode,token);
   backToSetup();
   await openRoom('state',nextCode);
   if(remote&&room)setStatus('Invite refreshed. Share the new code.');
  }catch(error){
   if(!disposed&&remote===original)setStatus(error.message);
  }finally{
   if(replacement){try{await replacement.move('retire-invite',{});}catch{}replacement.close();}
   refreshing=false;
   if(!disposed&&room&&!g)lobby();
  }
 }
 async function shareRoom(){
  const url=inviteURL(code);
  try{if(navigator.share)await navigator.share({title:'Join my Phase 10 table',url});
   else{await navigator.clipboard.writeText(url);setStatus('Invite link copied.');}
  }catch(e){if(e.name!=='AbortError')window.prompt('Copy this invite link:',url);}
 }
 function saved(){try{const match=JSON.parse(sessionStorage.getItem('phase10-playground-v1'));return match?.players?.length?match:null;}catch{return null;}}
 function render(){
  if(disposed||!g)return;
  clearTimeout(timer);persist();commentary.observe(g);
  const player=me(),active=g.players[g.current],mine=active?.human,playing=ready(),canPick=mine&&g.step==='draw';
  const opponents=g.players.filter(p=>!p.human);
  if(g.step==='round'){
   content.classList.remove('p10-live');
   scenery.table(null);
   content.innerHTML=`<div class="p10-bar">${action('exit','← Games')}${action('guide','Guide')}</div>
   <div class="p10-round"><small>ROUND ${g.round}</small><div class="p10-medal" aria-hidden="true">${g.winner?'★':'✦'}</div>
   <h1>${g.winner?esc(g.winner)+' wins!':esc(g.summary.out)+' went out!'}</h1><p>${g.tiebreak&&!g.winner?'Tied finalists replay Phase 10.':'Fewer penalty points is better.'}</p>
   ${tableMelds(g.summary.table??g.players)}
   <ul>${g.summary.results.map(r=>`<li><b>${esc(r.name)}</b><span>${r.completed?'Phase complete':'Phase unchanged'} · +${r.penalty}</span><strong>${r.score} pts</strong></li>`).join('')}</ul>
   ${g.winner?(remote?action('leave-room','Back to Phase 10'):action('restart','New match',false,'class="p10-gold"')):action('next','Deal next round',sending,'class="p10-gold"')}</div>`;
   return;
  }
  const hand=[...(player?.hand??[])].sort((a,b)=>a.kind.localeCompare(b.kind)||(a.value??0)-(b.value??0)||String(a.color).localeCompare(String(b.color)));
  const one=selected.length===1?hand.find(c=>c.id===selected[0]):null;
  const destinations=one&&playing?hits(g,one.id):[];
  const top=g.discard.at(-1);
  const required=player&&!player.melds.length?PHASES[player.phase-1].reduce((n,[,size])=>n+size,0):0;
  const basePreview=playing&&required>0&&selected.length===required?findPhase(player.phase,hand.filter(c=>selected.includes(c.id))):null;
  const preview=basePreview&&placeWildRuns(basePreview,runStarts);
  const focus=document.activeElement?.dataset.p10;
  content.classList.add('p10-live');
  const turnText=mine?(canPick?'Your turn · draw a card':player.laidThisTurn?'Phase laid · hitting unlocks next turn':player.melds.length?'Add to a phase or drop a card':'Build your phase or drop a card'):active?.name+' is playing…';
  if(shownRound!==g.round){shownCards=new Set();shownRound=g.round;}
  const inspected=picker.startsWith('melds:')?g.players.find(p=>p.id===Number(picker.split(':')[1])):null;
  const prompt=message||(playing?'Drop a card on the discard pile.':g.message);
  content.innerHTML=`<div class="p10-bar p10-match-bar"><small>${g.tiebreak?'PLAYOFF':'ROUND '+g.round}</small><b>PHASE 10</b>${action('menu','☰',false,'aria-label="Game menu"')}</div>
  <div class="p10-opponents ${opponents.length>3?'is-crowded':''}" aria-label="Opponents and completed phases">${opponents.map(p=>seatPanel(p,p===active,destinations)).join('')}</div>
  <div class="p10-table">
    <div class="p10-piles ${canPick?'is-drawing':''}">
      ${action('draw','<span class="p10-back" aria-hidden="true">PHASE <b>10</b></span>',!canPick||!canDraw(g,'draw'),`aria-label="Draw pile, ${g.drawCount??g.draw.length} cards"`)}
      ${action('discard-draw',top?face(top):'<span class="p10-empty" aria-hidden="true">—</span>',!(canPick&&canDraw(g,'discard')||playing&&one),`data-discard-pile aria-label="${playing&&one?'Discard '+description(one):'Discard pile, '+(top?description(top):'empty')}"`)}
    </div>
    ${player?`<section class="p10-phase-slots" aria-label="Your phase">
     ${preview?`<div class="p10-lay-ready">${action('lay','Lay phase',false,'class="p10-gold"')}</div>`:''}
     <div class="p10-slot-grid">${PHASES[player.phase-1].map(([kind,size],i)=>`<div class="p10-slot ${player.melds[i]?'is-laid':preview?'is-preview':''}"><strong>${kind==='color'?size+' of one color':(kind==='set'?'Set':'Run')+' of '+size}</strong>
      ${preview?runPicker(basePreview[i],i,preview[i].low):''}
      ${player.melds[i]?meldGroup(player,player.melds[i],i,destinations,false,true):preview?meldGroup(player,preview[i],i,[],true,true):`<div class="p10-slot-ghosts" aria-hidden="true">${Array.from({length:size},()=>'<i></i>').join('')}</div>`}</div>`).join('')}</div>
    </section>`:''}
    ${canPick&&!canDraw(g,'draw')&&!canDraw(g,'discard')?`<div class="p10-table-tools">${action('pass','Pass turn')}</div>`:''}
    <div class="p10-sr-status" role="status">${esc(turnText)}. ${esc(prompt)}</div>
  </div>
  <div class="p10-dock">
    <div class="p10-hand-head ${mine?'is-active':''}"><div>${player?avatar(player.avatar):''}<b>${player?'Your hand':'Spectating'}</b>${player?`<small class="p10-hand-phase" aria-label="Phase ${player.phase}">P-${player.phase}</small><small>${player.score} pts</small>`:''}</div>${remote?micButton():''}${mine?'<span class="p10-turn-badge">Your turn</span>':''}</div>
    ${remote?voiceBadge(room.seat):''}
    <div class="p10-held-hand p10-grip-${player?.avatar??'player'} ${hand.length?'has-cards':''}"><div class="p10-hand" role="group" aria-label="Your cards" style="--intervals:${Math.max(1,hand.length-1)}">${hand.map((c,i)=>{
      const offset=i-(hand.length-1)/2,edge=offset/Math.max(1,(hand.length-1)/2),picked=selected.includes(c.id);
      const corner=c.kind==='star'?'★':'';
      return action('card:'+c.id,face(c)+(corner?`<span class="p10-fan-mark" aria-hidden="true">${corner}</span>`:''),!playing,
        `aria-label="${description(c)}" aria-pressed="${picked}" style="--seat-offset:${offset};--fan-angle:${edge*11}deg;--fan-drop:${edge*edge*12}px;--fan-order:${i+1}"`);
    }).join('')}</div></div>
  </div>
  ${inspected?`<div class="p10-scrim" data-p10="close"><section class="p10-sheet" role="dialog" aria-label="Completed phase"><div class="p10-guide-title"><h2>${inspected.human?'Your phase':esc(inspected.name)+'’s phase'}</h2>${action('close','Close')}</div>
   ${inspected.melds.map((m,i)=>meldGroup(inspected,m,i,destinations)).join('')}</section></div>`:''}
  ${picker==='menu'?`<div class="p10-scrim" data-p10="close"><section class="p10-sheet" role="dialog" aria-label="Game menu"><div class="p10-guide-title"><h2>Game menu</h2>${action('close','Close')}</div>
   ${voiceState.joined?action('voice-leave','Leave voice'):''}${voiceState.joined?action('voice-audio','Enable voice audio'):''}${action('sound',isSoundEnabled()?'Mute sound':'Enable sound')}${commentary.available?action('commentary',commentary.enabled()?'Commentary: on':'Commentary: off',false,`aria-pressed="${commentary.enabled()}"`):''}${action('guide','How to play')}${action('exit','Back to games')}</section></div>`:''}
  ${picker==='skip'?`<div class="p10-scrim" data-p10="close"><section class="p10-sheet" role="dialog" aria-label="Choose an opponent">
   <div class="p10-guide-title"><h2>Who skips a turn?</h2>${action('close','Close')}</div>
   ${skipTargets(g).map(p=>action('skip:'+p.id,esc(p.name))).join('')}
  </section></div>`:''}`;
  scenery.table(content.querySelector('.p10-table'));
  for(const el of content.querySelectorAll('[data-laid-card]'))shownCards.add(el.dataset.laidCard);
  if(picker)content.querySelector('.p10-sheet button')?.focus({preventScroll:true});
  else if(focus)Array.from(content.querySelectorAll('button')).find(b=>b.dataset.p10===focus&&!b.disabled)?.focus({preventScroll:true});
  if(!remote&&!mine)timer=setTimeout(()=>{if(disposed)return;botTurn(g);playSound(g.winner?'finish':'land');render();},780);
 }
 function tableMelds(players,destinations=[]){
  const groups=players.filter(p=>p.melds.length);
  return `<section class="p10-felt-melds" aria-label="Completed phases"><header>ON THE TABLE <span>${groups.length?groups.length+' completed':'No phases laid yet'}</span></header>
   ${groups.length?`<div class="p10-table-melds" tabindex="0" aria-label="Face-up cards">${groups.map(p=>`<div class="p10-table-player"><strong>${p.human?'You':esc(p.name)}</strong>
    ${p.melds.map((m,i)=>meldGroup(p,m,i,destinations)).join('')}</div>`).join('')}</div>`:'<div class="p10-table-melds" hidden></div>'}</section>`;
 }
 function runPicker(base,index,low){
  const placements=runPlacements(base);
  if(placements.length<2)return '';
  return `<label class="p10-run-picker"><span>Place Wild</span><select data-run-slot="${index}" aria-label="Choose Wild placement for the run">${placements.map(m=>{
   const wilds=m.cards.flatMap((c,i)=>c.kind==='star'?[m.low+i]:[]);
   return `<option value="${m.low}" ${m.low===low?'selected':''}>${m.low}–${m.high} · Wild ${wilds.join(', ')}</option>`;
  }).join('')}</select></label>`;
 }
 function meldGroup(p,m,index,destinations,preview=false,compact=false){
  const targets=destinations.filter(t=>t.player===p.id&&t.index===index);
  return `<div class="p10-table-group ${targets.length?'can-hit':''}"><div class="p10-meld-meta"><span>${esc(meldTitle(m))}</span>${compact&&(targets.length||m.cards.length>9)?action('melds:'+p.id,targets.length?'Add card':'View all '+m.cards.length,false,'class="p10-slot-inspect"'):targets.map(t=>action(`hit:${t.player}:${t.index}:${t.side??''}`,t.side?'Add '+(t.side==='low'?m.low-1:m.high+1):'Add card')).join('')}</div>
    <div class="p10-laid-cards">${(compact?m.cards.slice(0,9):m.cards).map((card,i)=>{
     const assigned=card.kind==='star'?(m.kind==='run'?m.low+i:m.kind==='set'?m.value:m.color):null;
     return `<span class="p10-laid-card ${!preview&&!shownCards.has(String(card.id))?'new':''}" ${preview?'':`data-laid-card="${card.id}"`} role="img" aria-label="${description(card)}${assigned?' as '+assigned:''}">${face(card)}${assigned?`<small>${assigned}</small>`:''}</span>`;
    }).join('')}</div></div>`;
 }
 function seatPanel(p,active,destinations){
  const count=p.handCount??p.hand.length,groups=PHASES[p.phase-1]??[];
  const canAdd=destinations.some(t=>t.player===p.id);
  const slots=`<span class="p10-seat-groups">${groups.map(([kind,size],index)=>{
   const meld=p.melds[index];
   const label=kind==='color'?size+' of one color':(kind==='set'?'Set':'Run')+' of '+size;
   return `<span class="p10-seat-slot ${meld?'is-laid':''}"><span>${label}</span>${meld?`<span class="p10-seat-preview">${meld.cards.slice(0,3).map(face).join('')}${meld.cards.length>3?`<small class="p10-seat-more">+${meld.cards.length-3}</small>`:''}</span>`:''}</span>`;
  }).join('')}</span>`;
  return `<div class="p10-opponent ${active?'active':''}">
   <div class="p10-seat-label"><div class="p10-seat-medallion">${avatar(p.avatar)}<span class="p10-seat-count" aria-label="${count} cards in hand">${count}</span></div><b>${esc(p.name)}</b><small class="p10-seat-score">${p.score} pts${p.skip?' · Skip':''}</small>${remote?voiceBadge(p.id):''}</div>
   ${p.melds.length?action('melds:'+p.id,slots,false,'class="p10-seat-inspect'+(canAdd?' can-hit':'')+'" aria-label="Inspect '+esc(p.name)+'’s phase'+(canAdd?' and add a card':'')+'"'):slots}
   <span class="p10-seat-ribbon">${active?`<span class="p10-seat-playing" aria-label="${esc(p.name)}’s turn">Playing</span>`:'PHASE '+p.phase}</span></div>`;
 }
 function meldTitle(m){return m.kind==='set'?'Set of '+m.value:m.kind==='color'?m.color+' group':m.low+'–'+m.high+' run';}
 function onClick(e){
  const target=e.target.closest('[data-p10]');if(!target||target.disabled||target.matches('.p10-scrim')&&e.target!==target)return;
  const [key,raw,index,side]=target.dataset.p10.split(':'),id=Number(raw);
  if(key==='exit'){exit();return;}
  if(key==='online-mode'||key==='solo-mode'){if(connecting)return;onlineMode=key==='online-mode';setStatus('');setup();return;}
  if(key==='create-room'){openRoom('create',newCode());return;}
  if(key==='join-room'){openRoom('join',entryCode);return;}
  if(key==='resume-room'){const saved=recentRoom();if(saved&&savedSeat(saved))openRoom('state',saved);return;}
  if(key==='start-room'){sendMove('start',{},'deal');return;}
  if(key==='refresh-invite'){refreshInvite();return;}
  if(key==='share-room'){shareRoom();return;}
  if(key==='leave-room'){backToSetup();return;}
  if(key==='melds'){picker='melds:'+id;render();return;}
  if(key==='menu'){picker='menu';render();return;}
  if(key==='guide'){if(picker==='menu'){picker='';render();}guide.showModal();return;}
  if(key==='close-guide'){guide.close();return;}
  if(key==='voice-toggle'){if(voiceState.joined)voice?.mute();else void voice?.join();return;}
  if(key==='voice-audio'){voice?.enableAudio();return;}
  if(key==='voice-leave'){voice?.leave();return;}
  if(key==='commentary'){commentary.toggle(g);render();return;}
  if(key==='sound'){root.dispatchEvent(new CustomEvent('phase10-sound'));render();return;}
  if(key==='avatar'){seat=raw;setup();playSound('select');return;}
  if(key==='start'||key==='continue'){
   count=Number(content.querySelector('select').value);g=key==='continue'?saved():newGame(name||'You',seat,count);
   if(!g)return;selected=[];runStarts={};message='';picker='';shownRound=null;shownCards.clear();playSound('deal');render();return;
  }
  if(key==='restart'){g=null;try{sessionStorage.removeItem('phase10-playground-v1');}catch{}setup();return;}
  if(!g)return;
  const player=me(),c=selected.length===1?player?.hand.find(c=>c.id===selected[0]):null;
  if(remote){
   if(key==='close'){picker='';skipCardId=null;render();return;}
   if(key==='next'){sendMove('next',{},'deal');return;}
   if(sending||!g.players[g.current]?.human)return;
   if(key==='discard-draw'&&ready()&&c){attemptDiscard(c.id);return;}
   if(key==='draw'||key==='discard-draw'){sendMove('draw',{pile:key==='draw'?'draw':'discard'});return;}
   if(key==='pass'){sendMove('pass');return;}
   if(key==='lay'){sendMove('lay',{cards:selected,runStarts},'finish');return;}
   if(key==='hit'&&c){sendMove('hit',{card:c.id,target:{player:id,index:Number(index),side:side||undefined}},'land');return;}
   if(key==='skip'&&skipCardId!==null){sendMove('discard',{card:skipCardId,target:id});return;}
   if(key==='card'&&ready()){runStarts={};selected=selected.includes(id)?selected.filter(n=>n!==id):[...selected,id];playSound('select');render();}
   return;
  }
  message='';let cue='tap';
  if(key==='next'){nextRound(g);selected=[];runStarts={};picker='';cue='deal';}
  else if(key==='close'){picker='';skipCardId=null;}
  else if(g.players[g.current]?.human){
   if(key==='discard-draw'&&ready()&&c){attemptDiscard(c.id);return;}
   if(key==='draw'||key==='discard-draw'){if(drawCard(g,key==='draw'?'draw':'discard')){selected=[];runStarts={};cue='card';}}
   if(key==='pass')passBlocked(g);
   if(key==='card'&&ready()){runStarts={};selected=selected.includes(id)?selected.filter(n=>n!==id):[...selected,id];cue='select';}
   if(key==='lay'&&selected.length&&lay(g,selected,runStarts)){selected=[];runStarts={};cue='finish';}
   if(key==='hit'&&c&&hit(g,c.id,{player:id,index:Number(index),side:side||undefined})){selected=[];runStarts={};picker='';cue='land';}
   if(key==='skip'&&picker==='skip'&&skipCardId!==null&&discard(g,skipCardId,id)){selected=[];runStarts={};picker='';skipCardId=null;cue='card';}
  }
  playSound(g.winner?(g.winner===player?.name?'win':'finish'):cue);render();
 }
 function attemptDiscard(id){
  if(!ready()||picker)return;
  const card=me().hand.find(c=>c.id===id);if(!card)return;
  message='';
  const targets=card.kind==='skip'?skipTargets(g):[];
  if(targets.length>1){skipCardId=id;picker='skip';}
  else if(remote){sendMove('discard',{card:id,target:targets[0]?.id});return;}
  else if(discard(g,id,targets[0]?.id)){selected=[];runStarts={};playSound(g.winner?'win':'card');}
  render();
 }

 const world=root.querySelector('.p10-world');
 let drag=null,dragFrame=0,suppressClick=false;
 function discardTargetAt(x,y){return document.elementFromPoint(x,y)?.closest('[data-discard-pile]');}
 function dragTick(){
  if(!drag?.ghost)return;
  drag.pile.classList.toggle('drop-hover',discardTargetAt(drag.x,drag.y)===drag.pile);
  dragFrame=requestAnimationFrame(dragTick);
 }
 function onPointerDown(e){
  if(!e.isPrimary||e.button!==0)return;
  suppressClick=false;
  if(drag||picker||!ready())return;
  const button=e.target.closest('.p10-hand button:not(:disabled)');
  if(!button)return;
  const pile=content.querySelector('[data-discard-pile]');
  if(!pile)return;
  drag={pointer:e.pointerId,button,pile,id:Number(button.dataset.p10.split(':')[1]),x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY};
  button.setPointerCapture(e.pointerId);
 }
 function onPointerMove(e){
  if(!drag||drag.pointer!==e.pointerId)return;
  drag.x=e.clientX;drag.y=e.clientY;
  if(!drag.ghost&&Math.hypot(drag.x-drag.startX,drag.y-drag.startY)<8)return;
  if(!drag.ghost){
   const face=drag.button.querySelector('.p10-face');
   drag.ghost=face.cloneNode(true);drag.ghost.classList.add('p10-drag-card');
   drag.ghost.style.width=face.offsetWidth+'px';document.body.append(drag.ghost);
   drag.button.classList.add('is-dragging');drag.pile.classList.add('drop-ready');
   dragTick();
  }
  drag.ghost.style.left=drag.x+'px';drag.ghost.style.top=drag.y+'px';
 }
 function endDrag(e){
  if(!drag||e&&drag.pointer!==e.pointerId)return;
  const {button,pile,ghost,id,pointer}=drag;
  const dropped=ghost&&e?.type==='pointerup'&&discardTargetAt(e.clientX,e.clientY)===pile;
  if(ghost)suppressClick=true;
  drag=null;cancelAnimationFrame(dragFrame);
  ghost?.remove();button.classList.remove('is-dragging');pile.classList.remove('drop-ready','drop-hover');
  if(button.hasPointerCapture(pointer))button.releasePointerCapture(pointer);
  if(dropped)attemptDiscard(id);
 }
 function guardDragClick(e){
  if(!suppressClick||e.detail===0)return;
  suppressClick=false;e.preventDefault();e.stopImmediatePropagation();
 }
 function onKey(e){if(e.key==='Escape'&&drag){e.preventDefault();endDrag();}}
 content.addEventListener('input',e=>{if(e.target.dataset.entry==='name')entryName=e.target.value;else if(e.target.dataset.entry==='code')entryCode=e.target.value;});
 content.addEventListener('change',e=>{if(e.target.matches('[data-run-slot]')){const index=e.target.dataset.runSlot;runStarts[index]=Number(e.target.value);render();content.querySelector('[data-run-slot="'+index+'"]')?.focus({preventScroll:true});}
  else if(e.target.matches('select'))count=Number(e.target.value);});
 world.addEventListener('click',guardDragClick,true);
 world.addEventListener('click',onClick);
 world.addEventListener('pointerdown',onPointerDown);
 world.addEventListener('pointermove',onPointerMove);
 for(const type of ['pointerup','pointercancel','lostpointercapture'])world.addEventListener(type,endDrag);
 world.addEventListener('keydown',onKey);
 setup();
 if(invite&&onlineAPI&&savedSeat(normalizeCode(invite)))openRoom('state',invite);
 return ()=>{disposed=true;voice?.destroy();commentary.destroy();remote?.close();clearTimeout(timer);endDrag();world.remove();if(guide.open)guide.close();scenery.destroy();};
}
