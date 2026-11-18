export const COLORS=['red','blue','green','yellow'];
export const PHASES=[
 [['set',3],['set',3]],[['set',3],['run',4]],[['set',4],['run',4]],
 [['run',7]],[['run',8]],[['run',9]],[['set',4],['set',4]],
 [['color',7]],[['set',5],['set',2]],[['set',5],['set',3]]
];
export const goal=phase=>PHASES[phase-1].map(([kind,size])=>kind==='color'?size+' of one color':kind+' of '+size).join(' + ');
export const points=c=>c.kind==='star'?25:c.kind==='skip'?15:c.value>=10?10:5;
const numbered=c=>c.kind==='number';
const take=(p,cards)=>{const ids=new Set(cards.map(c=>c.id));p.hand=p.hand.filter(c=>!ids.has(c.id));};
function shuffle(cards){
 for(let i=cards.length-1;i>0;i--){const j=crypto.getRandomValues(new Uint32Array(1))[0]%(i+1);[cards[i],cards[j]]=[cards[j],cards[i]];}
 return cards;
}
export function deck(){
 const cards=COLORS.flatMap(color=>Array.from({length:24},(_,i)=>({kind:'number',color,value:i%12+1})));
 for(const [kind,n] of [['star',8],['skip',4]])for(let i=0;i<n;i++)cards.push({kind});
 return shuffle(cards.map((c,id)=>({...c,id})));
}
export function newGame(name,avatar,opponents=3){
 const players=[{name,avatar,human:true},...['Milo','Nora','Pip','June','Otto'].slice(0,opponents).map((name,i)=>({name,avatar:['fox','bear','frog','fox','bear'][i]}))]
 .map((p,id)=>({...p,id}));
 return createMatch(players);
}
export function createMatch(seats){
 const players=seats.map(p=>({...p,phase:1,score:0}));
 const g={players,dealer:players.at(-1).id,round:0,winner:null,tiebreak:false};
 nextRound(g);return g;
}
export function nextRound(g){
 const d=deck();g.round++;g.summary=null;
 const oldDealer=g.players.findIndex(p=>p.id===g.dealer);
 g.dealer=g.players[(oldDealer+1)%g.players.length].id;
 g.players.forEach(p=>{p.hand=d.splice(0,10);p.melds=[];p.laidThisTurn=false;p.skip=false;p.protected=false;});
 g.discard=[d.pop()];g.draw=d;g.current=(g.players.findIndex(p=>p.id===g.dealer)+1)%g.players.length;g.step='draw';
 g.message='A new hand is dealt.';
 if(g.discard[0].kind==='skip'){g.players[g.current].skip=true;advance(g,0);}
}
function advance(g,offset=1){
 let p;
 do{
  g.current=(g.current+offset)%g.players.length;p=g.players[g.current];offset=1;
  if(!p.skip){p.laidThisTurn=false;break;}
  p.skip=false;p.protected=true;g.message=p.name+' misses a turn.';
 }while(true);
 g.step='draw';
}
export const canDraw=(g,pile)=>g.step==='draw'&&(pile==='discard'?!!g.discard.length&&g.discard.at(-1).kind!=='skip':!!(g.drawCount??g.draw.length)||(g.discardCount??g.discard.length)>1);
export function drawCard(g,pile){
 if(!canDraw(g,pile))return false;
 if(pile==='draw'&&!g.draw.length){const top=g.discard.pop();g.draw=shuffle(g.discard);g.discard=[top];}
 g.players[g.current].hand.push(g[pile].pop());g.step='play';return true;
}
function* combinations(cards,n,start=0,picked=[]){
 if(n===0){yield picked;return;}
 for(let i=start;i<=cards.length-n;i++)yield* combinations(cards,n-1,i+1,[...picked,cards[i]]);
}
function* assignments(kind,cards){
 const natural=cards.filter(numbered),stars=cards.filter(c=>c.kind==='star');
 if(natural.length+stars.length!==cards.length)return;
 if(kind==='set'){
  const value=natural[0]?.value??1;
  if(natural.every(c=>c.value===value))yield {kind,value,cards};
 }else if(kind==='color'){
  const color=natural[0]?.color??COLORS[0];
  if(natural.every(c=>c.color===color))yield {kind,color,cards};
 }else{
  const values=new Map(natural.map(c=>[c.value,c]));
  if(values.size!==natural.length)return;
  for(let low=1;low+cards.length<=13;low++){
   if(natural.some(c=>c.value<low||c.value>=low+cards.length))continue;
   let i=0;
   yield {kind,low,high:low+cards.length-1,cards:Array.from({length:cards.length},(_,j)=>values.get(j+low)??stars[i++])};
  }
 }
}
export function findPhase(phase,hand){
 const requirements=PHASES[phase-1];
 if(!requirements)return null;
 const pool=hand.filter(c=>c.kind!=='skip').sort((a,b)=>Number(!numbered(a))-Number(!numbered(b))||a.id-b.id);
 function search(i,cards,groups,natural){
  if(i===requirements.length)return natural?groups:null;
  const [kind,size]=requirements[i];
  for(const selected of combinations(cards,size)){
   const meld=assignments(kind,selected).next().value;
   if(!meld)continue;
   const result=search(i+1,cards.filter(c=>!selected.includes(c)),[...groups,meld],natural||selected.some(numbered));
   if(result)return result;
  }
  return null;
 }
 return search(0,pool,[],false);
}
export function runPlacements(meld){
 return meld?.kind==='run'?[...assignments('run',meld.cards)]:[];
}
export function placeWildRuns(melds,starts={}){
 if(!starts||typeof starts!=='object'||Array.isArray(starts))return null;
 const adjusted=melds.slice();
 for(const [index,low] of Object.entries(starts)){
  if(!/^\d+$/.test(index)||!Number.isInteger(low))return null;
  const chosen=runPlacements(melds[index]).find(m=>m.low===low);
  if(!chosen)return null;
  adjusted[index]=chosen;
 }
 return adjusted;
}
export function lay(g,ids,starts){
 const p=g.players[g.current];
 if(g.step!=='play'||p.melds.length)return false;
 const cards=ids?p.hand.filter(c=>ids.includes(c.id)):p.hand;
 if(ids&&cards.length!==PHASES[p.phase-1].reduce((n,[,size])=>n+size,0))return false;
 const groups=findPhase(p.phase,cards);if(!groups)return false;
 const melds=placeWildRuns(groups,starts);if(!melds)return false;
 p.melds=melds;p.laidThisTurn=true;take(p,melds.flatMap(m=>m.cards));
 if(!p.hand.length)endRound(g,p);
 return true;
}
export function hits(g,id){
 const p=g.players[g.current],c=p.hand.find(c=>c.id===id);
 if(!c||c.kind==='skip'||g.step!=='play'||!p.melds.length||p.laidThisTurn)return [];
 return g.players.flatMap(target=>target.melds.flatMap((m,index)=>{
  const base={player:target.id,index};
  if(m.kind==='set')return c.kind==='star'||m.value===c.value?[base]:[];
  if(m.kind==='color')return c.kind==='star'||m.color===c.color?[base]:[];
  return ['low','high'].filter(side=>{
   const value=m[side]+(side==='low'?-1:1);
   return value>=1&&value<=12&&(c.kind==='star'||c.value===value);
  }).map(side=>({...base,side}));
 }));
}
export function hit(g,id,target){
 const match=hits(g,id).find(t=>t.player===target.player&&t.index===target.index&&t.side===target.side);
 if(!match)return false;
 const p=g.players[g.current],card=p.hand.find(c=>c.id===id),m=g.players.find(p=>p.id===match.player).melds[match.index];
 if(match.side==='low'){m.low--;m.cards.unshift(card);}
 else{if(match.side==='high')m.high++;m.cards.push(card);}
 take(p,[card]);if(!p.hand.length)endRound(g,p);return true;
}
export function skipTargets(g){
 const p=g.players[g.current];
 return g.players.filter(t=>t!==p&&!t.skip&&!t.protected);
}
export function discard(g,id,target){
 const p=g.players[g.current],card=p.hand.find(c=>c.id===id);
 if(g.step!=='play'||!card)return false;
 const targets=card.kind==='skip'?skipTargets(g):[];
 const chosen=targets.find(p=>p.id===target);
 if(targets.length&&!chosen)return false;
 if(chosen)chosen.skip=true;
 take(p,[card]);g.discard.push(card);p.protected=false;
 g.message=chosen?chosen.name+' will miss a turn.':p.name+' discarded.';
 if(!p.hand.length)endRound(g,p);else advance(g);return true;
}
function endRound(g,out){
 const results=g.players.map(p=>{
  const penalty=p.hand.reduce((sum,c)=>sum+points(c),0),completed=!!p.melds.length;
  p.score+=penalty;if(completed)p.phase++;
  return {name:p.name,penalty,score:p.score,completed};
 });
 const table=g.players.map(({id,name,human,melds})=>({id,name,human,melds}));
 const finalists=g.players.filter(p=>p.phase===11).sort((a,b)=>a.score-b.score);
 if(g.tiebreak)g.winner=out.name;
 else if(finalists.length){
  const tied=finalists.filter(p=>p.score===finalists[0].score);
  if(tied.length===1)g.winner=tied[0].name;
  else{g.tiebreak=true;g.players=tied;g.players.forEach(p=>p.phase=10);}
 }
 g.step='round';g.summary={out:out.name,results,table};
}
function discardValue(p,c){
 if(c.kind==='star')return -100;
 if(c.kind==='skip')return 25;
 return points(c)-p.hand.filter(d=>d!==c&&numbered(d)&&(d.value===c.value||PHASES[p.phase-1].some(([k])=>k==='run')&&Math.abs(d.value-c.value)===1||p.phase===8&&d.color===c.color)).length*4;
}
export function botTurn(g){
 const p=g.players[g.current],top=g.discard.at(-1);
 const want=canDraw(g,'discard')&&(top.kind==='star'||!p.melds.length&&!!findPhase(p.phase,[...p.hand,top]));
 if(!drawCard(g,want||!canDraw(g,'draw')?'discard':'draw')){
  // Both stacks can be blocked by a lone Skip; give the next seat a turn.
  g.message='No card can be drawn.';p.protected=false;advance(g);return;
 }
 if(!p.melds.length)lay(g);
 while(g.step==='play'){
  const next=p.hand.map(c=>[c,hits(g,c.id)[0]]).find(([,target])=>target);
  if(!next)break;hit(g,next[0].id,next[1]);
 }
 if(g.step==='play'){
  const card=[...p.hand].sort((a,b)=>discardValue(p,b)-discardValue(p,a))[0];
  const target=skipTargets(g).sort((a,b)=>b.phase-a.phase||a.score-b.score)[0];
  discard(g,card.id,target?.id);
 }
}
export function passBlocked(g){
 if(g.step!=='draw'||canDraw(g,'draw')||canDraw(g,'discard'))return false;
 g.players[g.current].protected=false;advance(g);return true;
}
