import {PHASES,goal,newGame,nextRound,canDraw,drawCard,findPhase,lay,hits,hit,skipTargets,discard,botTurn,passBlocked} from './phase10.js';
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

export function mountPhase10(root,{name,exit}){
 root.innerHTML=`<section class="p10-world"><canvas class="p10-scene" aria-hidden="true"></canvas>
 <div class="p10-content"></div><dialog class="p10-guide"><div class="p10-guide-title"><h2>Table guide</h2>${action('close-guide','Close')}</div>
 <p>Draw one card from either pile. Lay your whole phase when you can. Starting on your next turn after laying your phase, you can add matching cards to any phase on the table. Drop one card on the discard pile to end your turn. You can also select one card, then activate the pile.</p>
 <p><b>★ Star:</b> stands for a number or color. A phase needs at least one numbered card. A played Star stays where it was assigned.</p>
 <p><b>Skip:</b> discard it and choose an eligible opponent to miss their turn. You can’t draw a discarded Skip.</p>
 <p>Empty your hand to end the round. Anyone who laid their phase moves forward. Cards still in hand cost 5 points (1–9), 10 (10–12), 15 (Skip), or 25 (Star). When multiple players finish Phase 10 together, the lowest total wins; a tie goes to a playoff.</p>
 <ol>${PHASES.map((_,i)=>`<li>${goal(i+1)}</li>`).join('')}</ol><a href="${rules}" target="_blank" rel="noopener">Mattel’s full instructions ↗</a><a href="https://www.mastgeneralstore.com/products/mattel-phase-10-card-game" target="_blank" rel="noopener">Classic deck photo ↗</a><details><summary>See the classic cards</summary><img class="p10-reference" src="${deckPhoto}" loading="lazy" width="480" height="480" alt="Classic numbered Phase 10 cards with colored bands alongside Wild and Skip cards."></details></dialog></section>`;
 const content=root.querySelector('.p10-content'),guide=root.querySelector('dialog');
 const scenery=playground(root.querySelector('canvas'));scenery.seats(['fox','bear','frog'].map(avatar=>({avatar,count:6})));
 let g,selected=[],seat='player',count=3,timer,message='',picker='',disposed=false,shownCards=new Set(),shownRound=null,skipCardId=null;
 const ready=()=>g?.players[g.current]?.human&&g.step==='play';
 const me=()=>g?.players.find(p=>p.human);
 const persist=()=>{try{sessionStorage.setItem('phase10-playground-v1',JSON.stringify(g));}catch{}};
 function setup(){
  scenery.table(null);
  content.innerHTML=`<div class="p10-bar">${action('exit','← Games')}${action('guide','How to play')}</div><div class="p10-setup"><small>THE CLUBHOUSE • SOLO TABLE</small><h1>Phase 10</h1><p>Ten challenges. One card at a time.</p>
  <div class="p10-avatars" role="group" aria-label="Choose your character">${avatars.map((a,i)=>action('avatar:'+a,avatar(a)+`<b>${labels[i]}</b>`,false,`aria-pressed="${a===seat}"`)).join('')}</div>
  <label>Computer opponents <select aria-label="Computer opponents">${[1,2,3,4,5].map(n=>`<option value="${n}" ${n===count?'selected':''}>${n}</option>`).join('')}</select></label>
  <div class="p10-setup-actions">${action('start','Deal the cards',false,'class="p10-gold"')}${saved()?action('continue','Resume match'):''}</div></div>`;
 }
 function saved(){try{const match=JSON.parse(sessionStorage.getItem('phase10-playground-v1'));return match?.players?.length?match:null;}catch{return null;}}
 function render(){
  if(disposed||!g)return;
  clearTimeout(timer);persist();
  const player=me(),active=g.players[g.current],mine=active?.human,playing=ready(),canPick=mine&&g.step==='draw';
  const opponents=g.players.filter(p=>!p.human);scenery.seats(opponents.map(p=>({avatar:p.avatar,count:p.hand.length})));
  if(g.step==='round'){
   scenery.table(null);
   content.innerHTML=`<div class="p10-bar">${action('exit','← Games')}${action('guide','Guide')}</div>
   <div class="p10-round"><small>ROUND ${g.round}</small><div class="p10-medal" aria-hidden="true">${g.winner?'★':'✦'}</div>
   <h1>${g.winner?esc(g.winner)+' wins!':esc(g.summary.out)+' went out!'}</h1><p>${g.tiebreak&&!g.winner?'Tied finalists replay Phase 10.':'Fewer penalty points is better.'}</p>
   ${tableMelds(g.summary.table??g.players)}
   <ul>${g.summary.results.map(r=>`<li><b>${esc(r.name)}</b><span>${r.completed?'Phase complete':'Phase unchanged'} · +${r.penalty}</span><strong>${r.score} pts</strong></li>`).join('')}</ul>
   ${g.winner?action('restart','New match',false,'class="p10-gold"'):action('next','Deal next round',false,'class="p10-gold"')}</div>`;
   return;
  }
  const hand=[...(player?.hand??[])].sort((a,b)=>a.kind.localeCompare(b.kind)||(a.value??0)-(b.value??0)||String(a.color).localeCompare(String(b.color)));
  const one=selected.length===1?hand.find(c=>c.id===selected[0]):null;
  const destinations=one&&playing?hits(g,one.id):[];
  const top=g.discard.at(-1);
  const required=player&&!player.melds.length?PHASES[player.phase-1].reduce((n,[,size])=>n+size,0):0;
  const preview=playing&&required>0&&selected.length===required?findPhase(player.phase,hand.filter(c=>selected.includes(c.id))):null;
  const focus=document.activeElement?.dataset.p10,scroll=content.scrollTop;
  const turnText=mine?(canPick?'Your turn · draw a card':player.laidThisTurn?'Phase laid · hitting unlocks next turn':player.melds.length?'Add to a phase or drop a card':'Build your phase or drop a card'):active?.name+' is playing…';
  if(shownRound!==g.round){shownCards=new Set();shownRound=g.round;}
  const seatScroll=content.querySelector('.p10-opponents')?.scrollLeft??0;
  const prompt=message||(playing?'Drop a card on the discard pile.':g.message);
  content.innerHTML=`<div class="p10-bar p10-match-bar"><small>${g.tiebreak?'PLAYOFF':'ROUND '+g.round}</small><b>PHASE 10</b>${action('menu','☰',false,'aria-label="Game menu"')}</div>
  <div class="p10-opponents" aria-label="Opponents and completed phases">${opponents.map(p=>`<div class="p10-opponent ${p===active?'active':''}"><div class="p10-seat-label">${avatar(p.avatar)}<b>${esc(p.name)}</b><small>P${p.phase} · ${p.hand.length} cards${p.skip?' · Skip':''}</small><small>${p.score} pts</small></div>
    ${p.melds.length?`<div class="p10-seat-melds">${p.melds.map((m,i)=>meldGroup(p,m,i,destinations)).join('')}</div>`:''}</div>`).join('')}</div>
  <div class="p10-table">
    <div class="p10-goal"><div><small>${g.tiebreak?'PLAYOFF':'ROUND '+g.round}</small><h1>${player?'Phase '+player.phase:'Finalists'}</h1></div><strong>${player?goal(player.phase):'Watching the playoff'}</strong></div>
    <div class="p10-piles ${canPick?'is-drawing':''}">
      ${action('draw',`<span class="p10-back" aria-hidden="true">PHASE <b>10</b></span><strong>Draw pile</strong><small>${g.draw.length} cards</small>`,!canPick||!canDraw(g,'draw'))}
      ${action('discard-draw',`${top?face(top):'<span class="p10-empty">Empty</span>'}<strong>Discard pile</strong><small>${top?esc(description(top)):'No card'}</small>`,!(canPick&&canDraw(g,'discard')||playing&&one),'data-discard-pile'+(playing&&one?` aria-label="Discard ${description(one)}" title="Discard selected card"`:''))}
    </div>
    ${player?`<section class="p10-phase-slots" aria-label="Your phase">
     <header><b>Your phase</b><small>${player.melds.length?'Laid on the felt':preview?'Ready to lay':'Build all groups'}</small></header>
     <div class="p10-slot-grid">${PHASES[player.phase-1].map(([kind,size],i)=>`<div class="p10-slot ${player.melds[i]?'is-laid':preview?'is-preview':''}"><strong>${kind==='color'?size+' of one color':(kind==='set'?'Set':'Run')+' of '+size}</strong>
      ${player.melds[i]?meldGroup(player,player.melds[i],i,destinations):preview?meldGroup(player,preview[i],i,[],true):`<div class="p10-slot-ghosts" aria-hidden="true">${Array.from({length:size},()=>'<i></i>').join('')}</div>`}</div>`).join('')}</div>
     ${preview?`<div class="p10-lay-ready">${action('lay','Lay phase',false,'class="p10-gold"')}</div>`:''}
    </section>`:''}
    ${canPick&&!canDraw(g,'draw')&&!canDraw(g,'discard')?`<div class="p10-table-tools">${action('pass','Pass turn')}</div>`:''}
    <div class="p10-turn" role="status"><strong>${esc(turnText)}</strong><small>${esc(prompt)}</small></div>
  </div>
  <div class="p10-dock">
    <div class="p10-hand-head"><div>${player?avatar(player.avatar):''}<b>${player?'Your hand':'Spectating'}</b><small>${player?player.score+' pts':''}</small></div></div>
    <div class="p10-held-hand p10-grip-${player?.avatar??'player'} ${hand.length?'has-cards':''}"><div class="p10-hand" role="group" aria-label="Your cards" style="--intervals:${Math.max(1,hand.length-1)}">${hand.map((c,i)=>{
      const offset=i-(hand.length-1)/2,edge=offset/Math.max(1,(hand.length-1)/2),picked=selected.includes(c.id);
      const corner=c.kind==='star'?'★':c.kind==='skip'?'⊘':'';
      return action('card:'+c.id,face(c)+(corner?`<span class="p10-fan-mark" aria-hidden="true">${corner}</span>`:''),!playing,
        `aria-label="${description(c)}" aria-pressed="${picked}" style="--seat-offset:${offset};--fan-angle:${edge*11}deg;--fan-drop:${edge*edge*12}px;--fan-order:${i+1}"`);
    }).join('')}</div></div>
  </div>
  ${picker==='menu'?`<div class="p10-scrim" data-p10="close"><section class="p10-sheet" role="dialog" aria-label="Game menu"><div class="p10-guide-title"><h2>Game menu</h2>${action('close','Close')}</div>
   ${action('sound',isSoundEnabled()?'Mute sound':'Enable sound')}${action('guide','How to play')}${action('exit','Back to games')}</section></div>`:''}
  ${picker==='skip'?`<div class="p10-scrim" data-p10="close"><section class="p10-sheet" role="dialog" aria-label="Choose an opponent">
   <div class="p10-guide-title"><h2>Who skips a turn?</h2>${action('close','Close')}</div>
   ${skipTargets(g).map(p=>action('skip:'+p.id,esc(p.name))).join('')}
  </section></div>`:''}`;
  content.scrollTop=scroll;
  scenery.table(content.querySelector('.p10-table'));
  content.querySelector('.p10-opponents').scrollLeft=seatScroll;
  for(const el of content.querySelectorAll('[data-laid-card]'))shownCards.add(el.dataset.laidCard);
  if(picker)content.querySelector('.p10-sheet button')?.focus({preventScroll:true});
  else if(focus)Array.from(content.querySelectorAll('button')).find(b=>b.dataset.p10===focus&&!b.disabled)?.focus({preventScroll:true});
  if(!mine)timer=setTimeout(()=>{if(disposed)return;botTurn(g);playSound(g.winner?'finish':'land');render();},780);
 }
 function tableMelds(players,destinations=[]){
  const groups=players.filter(p=>p.melds.length);
  return `<section class="p10-felt-melds" aria-label="Completed phases"><header>ON THE TABLE <span>${groups.length?groups.length+' completed':'No phases laid yet'}</span></header>
   ${groups.length?`<div class="p10-table-melds" tabindex="0" aria-label="Face-up cards">${groups.map(p=>`<div class="p10-table-player"><strong>${p.human?'You':esc(p.name)}</strong>
    ${p.melds.map((m,i)=>meldGroup(p,m,i,destinations)).join('')}</div>`).join('')}</div>`:'<div class="p10-table-melds" hidden></div>'}</section>`;
 }
 function meldGroup(p,m,index,destinations,preview=false){
  const targets=destinations.filter(t=>t.player===p.id&&t.index===index);
  return `<div class="p10-table-group ${targets.length?'can-hit':''}"><div class="p10-meld-meta"><span>${esc(meldTitle(m))}</span>${targets.map(t=>action(`hit:${t.player}:${t.index}:${t.side??''}`,t.side?'Add '+(t.side==='low'?m.low-1:m.high+1):'Add card')).join('')}</div>
    <div class="p10-laid-cards">${m.cards.map((card,i)=>{
     const assigned=card.kind==='star'?(m.kind==='run'?m.low+i:m.kind==='set'?m.value:m.color):null;
     return `<span class="p10-laid-card ${!preview&&!shownCards.has(String(card.id))?'new':''}" ${preview?'':`data-laid-card="${card.id}"`} role="img" aria-label="${description(card)}${assigned?' as '+assigned:''}">${face(card)}${assigned?`<small>${assigned}</small>`:''}</span>`;
    }).join('')}</div></div>`;
 }
 function meldTitle(m){return m.kind==='set'?'Set of '+m.value:m.kind==='color'?m.color+' group':m.low+'–'+m.high+' run';}
 function onClick(e){
  const target=e.target.closest('[data-p10]');if(!target||target.disabled||target.matches('.p10-scrim')&&e.target!==target)return;
  const [key,raw,index,side]=target.dataset.p10.split(':'),id=Number(raw);
  if(key==='exit'){exit();return;}
  if(key==='menu'){picker='menu';render();return;}
  if(key==='guide'){if(picker==='menu'){picker='';render();}guide.showModal();return;}
  if(key==='close-guide'){guide.close();return;}
  if(key==='sound'){root.dispatchEvent(new CustomEvent('phase10-sound'));render();return;}
  if(key==='avatar'){seat=raw;setup();playSound('select');return;}
  if(key==='start'||key==='continue'){
   count=Number(content.querySelector('select').value);g=key==='continue'?saved():newGame(name||'You',seat,count);
   if(!g)return;selected=[];message='';picker='';shownRound=null;shownCards.clear();playSound('deal');render();return;
  }
  if(key==='restart'){g=null;try{sessionStorage.removeItem('phase10-playground-v1');}catch{}setup();return;}
  if(!g)return;
  const player=me(),c=selected.length===1?player?.hand.find(c=>c.id===selected[0]):null;
  message='';let cue='tap';
  if(key==='next'){nextRound(g);selected=[];picker='';cue='deal';}
  else if(key==='close'){picker='';skipCardId=null;}
  else if(g.players[g.current]?.human){
   if(key==='discard-draw'&&ready()&&c){attemptDiscard(c.id);return;}
   if(key==='draw'||key==='discard-draw'){if(drawCard(g,key==='draw'?'draw':'discard')){selected=[];cue='card';}}
   if(key==='pass')passBlocked(g);
   if(key==='card'&&ready()){selected=selected.includes(id)?selected.filter(n=>n!==id):[...selected,id];cue='select';}
   if(key==='lay'&&selected.length&&lay(g,selected)){selected=[];cue='finish';}
   if(key==='hit'&&c&&hit(g,c.id,{player:id,index:Number(index),side:side||undefined})){selected=[];picker='';cue='land';}
   if(key==='skip'&&picker==='skip'&&skipCardId!==null&&discard(g,skipCardId,id)){selected=[];picker='';skipCardId=null;cue='card';}
  }
  playSound(g.winner?(g.winner===player?.name?'win':'finish'):cue);render();
 }
 function attemptDiscard(id){
  if(!ready()||picker)return;
  const card=me().hand.find(c=>c.id===id);if(!card)return;
  message='';
  if(card.kind==='skip'&&skipTargets(g).length){skipCardId=id;picker='skip';}
  else if(discard(g,id)){selected=[];playSound(g.winner?'win':'card');}
  render();
 }

 const world=root.querySelector('.p10-world');
 let drag=null,dragFrame=0,suppressClick=false;
 function discardTargetAt(x,y){return document.elementFromPoint(x,y)?.closest('[data-discard-pile]');}
 function dragTick(){
  if(!drag?.ghost)return;
  const rect=content.getBoundingClientRect();
  if(drag.y<rect.top+55)content.scrollTop-=9;
  else if(drag.y>rect.bottom-55)content.scrollTop+=9;
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
 content.addEventListener('change',e=>{if(e.target.matches('select'))count=Number(e.target.value);});
 world.addEventListener('click',guardDragClick,true);
 world.addEventListener('click',onClick);
 world.addEventListener('pointerdown',onPointerDown);
 world.addEventListener('pointermove',onPointerMove);
 for(const type of ['pointerup','pointercancel','lostpointercapture'])world.addEventListener(type,endDrag);
 world.addEventListener('keydown',onKey);
 setup();
 return ()=>{disposed=true;clearTimeout(timer);endDrag();world.remove();if(guide.open)guide.close();scenery.destroy();};
}
