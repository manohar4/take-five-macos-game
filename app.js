import { clearNativeControls, mountNativeControls } from './rn-controls.js';
import { isSoundEnabled, playSound, setAmbient, toggleSound, unlockAudio } from './audio.js';
import { isNativeApp, publicGameUrl } from './native-app.js';
import { games, featuredGame, GameLibrary, gameArtwork, gameStatusBadge } from './games.js';
import { MEMOJIS, PHASES, cardPoints, isSkip, isWild, phase10Game, phaseIsValid } from './phase10.js';

const app = document.querySelector('#app');
const rulesDialog = document.querySelector('#rulesDialog');
const params = new URLSearchParams(location.search);
const hostSaveKey = 'take5-host-save';
const guestSessionKey = 'take5-guest-session';
const state = {
  screen: 'home', mode: 'online', tab: 'rooms', name: localStorage.getItem('take5-name') || '',
  peer: null, host: false, connection: null, connections: new Map(), clientId: null,
  roomId: '', players: [], game: null, selected: null, busy: false, toastTimer: null,
  botCount: 3, roundFlashTimer: null, submittedTurn: false,
  animating: false, replay: null, replayKey: null, revealOrigins: {}, stageSeen: new Set(), stageTurnKey: null,
  countdownTimer: null, countdownInterval: null, reconnectTimer: null, peerReconnectTimer: null, disconnectAdvanceTimer: null, resumeToken: null, recoveringGuest: false, reactionCooldowns: new Map(), screenTransition: false, phase10: null, phase10Avatar: '🧑🏻'
};

document.addEventListener('pointerdown', unlockAudio, { passive: true });
document.addEventListener('keydown', unlockAudio);
function resumeRoomConnection(){if(!state.peer)return;if(state.peer.disconnected){try{state.peer.reconnect()}catch{watchPeerSignalRetry(state.peer);}}if(!state.host&&state.roomId){const peer=state.peer;if(state.connection?.open)state.connection.send({type:'sync'});else{state.connection=null;clearTimeout(state.reconnectTimer);connectGuestToRoom(state.roomId,peer);}}}
window.addEventListener('online',resumeRoomConnection);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)resumeRoomConnection();});

document.querySelector('#homeLink').addEventListener('click', e => { e.preventDefault(); renderHome(); });
mountNativeControls(rulesDialog);
bindPress('.dialog-close', () => rulesDialog.close());
if (params.get('room')) { const invite=params.get('room'); state.tab = 'rooms'; state.roomPrefill = /^\d{4}$/.test(invite) ? invite : (invite.match(/^take5-(\d{4})$/)?.[1] || ''); }
const savedHostRoom=readStored(hostSaveKey);
const savedGuestRoom=readStored(guestSessionKey);
const resumeCode=state.roomPrefill || savedGuestRoom?.roomId || '';
const shouldResumeGuest=!!savedGuestRoom&&(!state.roomPrefill||savedGuestRoom.roomId===state.roomPrefill);
if(savedHostRoom&&(state.roomPrefill===savedHostRoom.roomId||(!state.roomPrefill&&!shouldResumeGuest))){renderHome();resumeHostRoom(savedHostRoom);}
else {renderHome();if(resumeCode&&savedGuestRoom?.roomId===resumeCode){state.resumeToken=savedGuestRoom.token;state.recoveringGuest=true;joinRoom(resumeCode);}}

function readStored(key){try{return JSON.parse(localStorage.getItem(key)||'null')}catch{return null}}
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function renderMarkup(container, markup, { nativeControls = true } = {}) {
  const animate = state.screenTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  clearNativeControls(container);
  container.innerHTML = markup;
  if (nativeControls) {
    try { mountNativeControls(container); }
    catch (error) { console.error('Could not mount React Native Web controls.', error); }
  }
  if (animate) {
    container.animate([{ opacity: 0, transform: 'translateY(10px) scale(.992)' }, { opacity: 1, transform: 'translateY(0) scale(1)' }], { duration: 300, easing: 'cubic-bezier(.2,.78,.25,1)' });
    state.screenTransition = false;
  }
}
function bindPress(target, handler) {
  const elements = typeof target === 'string' ? document.querySelectorAll(target) : [target];
  elements.forEach(element => {
    if (!element) return;
    const respond = event => { playSound('tap'); handler(event, element); };
    element.addEventListener('rnpress', respond);
    element.addEventListener('click', event => {
      if (!element.closest('.rn-control-root')) respond(event);
    });
  });
}
function soundButtonMarkup() { const enabled=isSoundEnabled();return `<button class="icon-button sound-toggle" id="soundToggle" aria-label="${enabled?'Mute sound':'Enable sound'}" aria-pressed="${enabled}" title="${enabled?'Mute sound':'Enable sound'}"><span class="sound-toggle-glyph" aria-hidden="true">♪</span><span class="sound-toggle-state" aria-hidden="true">${enabled?'':'×'}</span></button>`; }
function bindSoundToggle() { bindPress('#soundToggle',()=>{toggleSound();renderTopbar();}); }
function bulls(n) { return n === 55 ? 7 : n % 11 === 0 ? 5 : n % 10 === 0 ? 3 : n % 5 === 0 ? 2 : 1; }
function cardClass(n) { return n === 55 ? 'double' : n % 11 === 0 ? 'double' : n % 10 === 0 ? 'tens' : n % 5 === 0 ? 'multiple-5' : ''; }
function cardTone(n) { return ({1:'one-bull',2:'two-bulls',3:'three-bulls',5:'five-bulls',7:'seven-bulls'})[bulls(n)]; }
function bullIconMarkup() { return '<span class="bull-icon" aria-hidden="true"><img class="bull-icon-art" src="assets/bullhead.svg" alt="" draggable="false"></span>'; }
function bullMarks(n) { return `<span class="bull-marks" aria-label="${bulls(n)} bullheads">${Array.from({length:bulls(n)},()=>'<i class="bull-head" aria-hidden="true"></i>').join('')}</span>`; }
function cardFace(n, extraClass='') { const tone=cardTone(n), value=escapeHtml(n), digits=String(n).length; return `<span class="card-face ${extraClass} tone-${tone} value-${digits}-digits" aria-hidden="true"><img class="card-art" src="assets/cards/card-${tone}.png" alt="" draggable="false"><span class="card-corner top-left">${value}</span><span class="card-corner top-right">${value}</span>${bullMarks(n)}<span class="card-value-outline">${value}</span><span class="card-value">${value}</span><span class="card-bottom-meta"><span class="card-corner bottom-left">${value}</span>${bullMarks(n)}<span class="card-corner bottom-right">${value}</span></span></span>`; }
function playerAvatar(player,index) { return player.human ? ['🧑🏻','👩🏽','🧔🏼','👩🏻','🧑🏾','👩🏼','🧑🏽','👨🏾','👩🏻','🧑🏼'][index%10] : ['🦊','🐻','🐸','🐼','🐯','🐵','🐰','🦝','🦁'][Math.max(0,index-1)%9]; }
function randomDeck() { return Array.from({length:104}, (_,i)=>i+1).sort(()=>Math.random()-.5); }
function setName() { state.name = document.querySelector('#playerName')?.value.trim() || 'You'; localStorage.setItem('take5-name', state.name); }
function renderTopbar() {
  const brand = document.querySelector('#homeLink');
  const roster = document.querySelector('#headerRoster');
  const right = document.querySelector('#topbarRight');
  const isPlatformHome = state.screen === 'home';
  const live = ['lobby','game','result'].includes(state.screen);
  if (brand) brand.innerHTML = `<span class="brand-mark">CG</span><span>Card <span class="brand-dot">Games</span></span>`;
  if (isPlatformHome) {
    roster.innerHTML = '';
    renderMarkup(right, `<div class="platform-profile" aria-label="Player profile"><span class="platform-avatar">${escapeHtml((state.name || 'P').slice(0, 1).toUpperCase())}</span><span class="platform-profile-copy"><b>${escapeHtml(state.name || 'Player')}</b><small>Ready to play</small></span></div>`, { nativeControls: false });
    bindPress('[data-platform-nav]',(_,button)=>{
      const action=button.dataset.platformNav;
      if(action==='take5')renderTakeFiveHome();
      else if(action==='games')document.querySelector('#games')?.scrollIntoView({behavior:'smooth',block:'start'});
      else window.scrollTo({top:0,behavior:'smooth'});
    });
    return;
  }
  const players = state.screen === 'lobby' ? state.players : (state.game?.players || state.players);
  const gameActive = !!state.game && ['game','result'].includes(state.screen);
  if (roster) roster.innerHTML = live ? players.map((p, index) => {
    const isMe = p.id === state.clientId;
    const cardCount = p.hand?.length || 0;
    const cardLabel = gameActive ? `${cardCount} cards` : (p.human ? (p.ready ? 'READY' : 'ONLINE') : 'BOT');
    return `<div class="header-player ${isMe?'is-you':''} ${p.ready?'is-ready':''}" data-player-id="${escapeHtml(p.id)}"><span class="header-avatar">${playerAvatar(p,index)}</span><span class="header-player-copy"><b>${escapeHtml(p.name)}${isMe?' · you':''}</b><small>${cardLabel}</small></span>${gameActive?`<span class="header-player-score bull-counter-badge" aria-label="${p.total||0} bullheads"><strong>${p.total||0}</strong>${bullIconMarkup()}</span><span class="opponent-cards" aria-label="${cardCount} cards in hand">${Array.from({length:Math.min(4,cardCount)},(_,j)=>`<i style="--i:${j}"></i>`).join('')}</span>`:`<i class="header-player-status ${p.online===false?'is-offline':''}"></i>`}</div>`;
  }).join('') : '';
  if (!right) return;
  if (!live) {
    renderMarkup(right, `<span class="top-note"><span class="online-dot"></span> the table is open</span>${soundButtonMarkup()}<button class="icon-button" id="rulesButton" aria-label="How to play" title="How to play">?</button>`);
    bindSoundToggle();
    bindPress('#rulesButton', () => rulesDialog.showModal());
    return;
  }
  const online = state.mode?.startsWith('online') || state.screen === 'lobby';
  const menuItems = [];
  menuItems.push(`<button class="menu-action" data-menu-action="toggle-sound"><span class="menu-action-icon">${isSoundEnabled()?'♫':'♪'}</span><span>${isSoundEnabled()?'Sound on':'Sound off'}</span></button>`);
  if (state.screen === 'game' && online) menuItems.push(`<div class="menu-reaction-section"><button class="menu-action menu-reaction-toggle" data-menu-action="toggle-reactions" aria-expanded="false"><span class="menu-action-icon">☺</span><span>Send a reaction</span><span class="menu-action-chevron" aria-hidden="true">⌄</span></button><div class="menu-reaction-picker" role="group" aria-label="Choose a reaction" hidden>${roomReactions.map(emoji=>`<button class="menu-reaction-option" type="button" role="menuitem" data-reaction="${emoji}" aria-label="Send ${emoji} reaction">${emoji}</button>`).join('')}</div></div>`);
  if (online && state.roomId) {
    menuItems.push(`<button class="menu-action" data-menu-action="sync-room"><span class="menu-action-icon">⟳</span><span>Refresh room sync</span></button>`);
    menuItems.push(`<button class="menu-action" data-menu-action="copy-invite"><span class="menu-action-icon">↗</span><span>Copy invite link</span></button>`);
    menuItems.push(`<button class="menu-action" data-menu-action="copy-code"><span class="menu-action-icon">#</span><span>Copy room code</span></button>`);
  }
  if (state.screen === 'lobby' && state.host) menuItems.push(`<button class="menu-action" data-menu-action="start-game"><span class="menu-action-icon">▶</span><span>Start game</span></button>`);
  if (state.screen === 'game' && (!online || state.host)) menuItems.push(`<button class="menu-action" data-menu-action="new-game"><span class="menu-action-icon">⟳</span><span>Start new game</span></button>`);
  if (state.screen === 'result') menuItems.push(`<button class="menu-action" data-menu-action="new-game"><span class="menu-action-icon">⟳</span><span>Play again</span></button>`);
  menuItems.push(`<button class="menu-action" data-menu-action="rules"><span class="menu-action-icon">?</span><span>How to play</span></button>`);
  if (online) menuItems.push(`<button class="menu-action is-danger" data-menu-action="leave"><span class="menu-action-icon">↩</span><span>Leave game</span></button>`);
  else if (state.screen === 'game' || state.screen === 'result') menuItems.push(`<button class="menu-action is-danger" data-menu-action="leave"><span class="menu-action-icon">↩</span><span>Leave game</span></button>`);
  renderMarkup(right, `<div class="menu-shell"><button class="menu-trigger" id="gameMenuToggle" aria-label="Game menu" aria-haspopup="menu" aria-expanded="false" title="Game menu"><span class="menu-icon" aria-hidden="true"></span></button><div class="game-menu-panel is-hidden" id="gameMenuPanel" role="menu">${menuItems.join('')}</div></div>`);
  bindPress('#gameMenuToggle', (_, button) => {
    const panel = document.querySelector('#gameMenuPanel');
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    panel.classList.toggle('is-hidden', !open);
    button.closest('.menu-shell')?.classList.toggle('is-open', open);
  });
  bindPress('.menu-action', (_, button) => {
    const action = button.dataset.menuAction;
    const panel = document.querySelector('#gameMenuPanel');
    if (action === 'toggle-reactions') {
      const picker=button.nextElementSibling;const open=button.getAttribute('aria-expanded')!=='true';
      button.setAttribute('aria-expanded',String(open));picker.hidden=!open;button.closest('.menu-reaction-section')?.classList.toggle('is-expanded',open);return;
    }
    if (panel) panel.classList.add('is-hidden');
    document.querySelector('#gameMenuToggle')?.setAttribute('aria-expanded','false');
    document.querySelector('.menu-shell')?.classList.remove('is-open');
    if (action === 'copy-invite') copyInvite();
    else if (action === 'copy-code') copyText(state.roomId, 'Room code copied');
    else if (action === 'sync-room') refreshRoomSync();
    else if (action === 'toggle-sound') { toggleSound(); renderTopbar(); }
    else if (action === 'rules') rulesDialog.showModal();
    else if (action === 'leave') leaveToHome();
    else if (action === 'start-game') startOnlineGame();
    else if (action === 'new-game') {
      if (online && state.host) state.players.forEach(player => { player.score = 0; player.total = 0; });
      if (online && !state.host) return say('Ask the host to start another game.');
      if (online) startOnlineGame(); else startLocal();
    }
  });
  bindPress('.menu-reaction-option',(_,button)=>sendReaction(button.dataset.reaction));
}
function renderHome() {
  cleanupPeer(); document.body.classList.remove('match-mode','lobby-mode','take5-entry-mode'); document.body.classList.add('home-mode','platform-home'); state.screen='home'; state.game=null; state.selected=null;setAmbient(true);
  try {
    if (!featuredGame || typeof GameLibrary !== 'function') throw new Error('The game registry is unavailable.');
    renderTopbar();
    renderMarkup(app, `<section class="platform-homepage">
      <section class="platform-welcome" aria-labelledby="platformWelcomeTitle"><div><h1 id="platformWelcomeTitle">Ready to play?</h1><p>Pick your game. Bring your friends. Let the fun begin.</p></div><span class="platform-online"><i></i> Games ready</span></section>
      <section class="platform-featured" data-game-tile="play" data-game-id="${featuredGame.id}" role="button" tabindex="0" aria-label="Play ${escapeHtml(featuredGame.name)}" aria-labelledby="featuredTitle"><div class="featured-art">${gameArtwork(featuredGame)}</div><div class="featured-copy"><div class="featured-meta"><span>Featured game</span>${gameStatusBadge(featuredGame)}</div><h2 id="featuredTitle">${escapeHtml(featuredGame.name)}</h2><p>${featuredGame.featuredDescription}</p><button class="platform-primary" data-game-action="play" data-game-id="${featuredGame.id}">Play now <span>→</span></button></div><div class="featured-detail"><span>2–10 players</span><span>10 cards each</span><span>15 min</span></div></section>
      <section class="platform-library" id="games" aria-labelledby="gamesTitle"><div class="section-heading"><div><span>Game library</span><h2 id="gamesTitle">Your Game Collection</h2><p>Choose a game and start playing.</p></div></div><div class="game-library-grid">${GameLibrary()}</div></section>
    </section>`, { nativeControls: false });
    bindPress('[data-game-action]',(_,button)=>{if(button.dataset.gameAction==='play')launchGame(button.dataset.gameId);else say(`${button.dataset.gameId==='phase-10'?'Phase 10':'Splendor'} is coming soon.`);});
    document.querySelectorAll('[data-game-tile="play"]').forEach(tile => {
      tile.addEventListener('click', event => { if (!event.target.closest('[data-game-action]')) launchGame(tile.dataset.gameId || featuredGame.id); });
      tile.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); launchGame(tile.dataset.gameId || featuredGame.id); } });
    });
  } catch (error) {
    console.error('Could not render the Card Games lobby.', error);
    renderMarkup(app, `<section class="platform-fallback" role="alert"><span>Card Games</span><h1>We couldn’t load the game lobby.</h1><p>${escapeHtml(error.message || 'Please try again.')}</p><button class="platform-primary" id="retryLobby">Try again <span>↻</span></button></section>`, { nativeControls: false });
    bindPress('#retryLobby', renderHome);
  }
}
function launchGame(gameId) {
  const game = games.find(item => item.id === gameId);
  if (!game || game.status !== 'available') return say('This game is coming soon.');
  if (game.route === 'phase-10') renderPhase10Setup();
  else renderTakeFiveHome();
}
function renderPhase10Setup() {
  cleanupPeer(); state.phase10=null; state.screen='phase10-setup'; document.body.classList.remove('match-mode','platform-home','lobby-mode'); document.body.classList.add('home-mode','phase10-mode'); setAmbient(false); renderTopbar();
  renderMarkup(app, `<section class="phase10-setup"><div class="phase10-setup-art"><div class="p10-floating-card p10-card-blue">7</div><div class="p10-floating-card p10-card-green">8</div><div class="p10-floating-card p10-card-red">10</div></div><div class="phase10-setup-copy"><span class="phase10-kicker">Phase 10 · local table</span><h1>Choose your player</h1><p>Pick a Memoji, build your phase, and be first through all ten challenges.</p><div class="memoji-grid" role="group" aria-label="Choose your Memoji">${MEMOJIS.map(avatar=>`<button class="memoji-choice ${avatar===state.phase10Avatar?'is-selected':''}" data-phase-avatar="${avatar}" aria-pressed="${avatar===state.phase10Avatar}">${avatar}</button>`).join('')}</div><button class="phase10-play" id="startPhase10">Start game <span>→</span></button><button class="phase10-back" id="backToLobby">Back to games</button></div></section>`, { nativeControls:false });
  bindPress('[data-phase-avatar]',(_,button)=>{state.phase10Avatar=button.dataset.phaseAvatar;renderPhase10Setup();});
  bindPress('#startPhase10',()=>{state.phase10=phase10Game(state.name,state.phase10Avatar);state.screen='phase10';renderPhase10();});
  bindPress('#backToLobby',renderHome);
}
function phase10CardMarkup(item, selected=false) {
  const special=isWild(item)?'wild':isSkip(item)?'skip':''; const label=isWild(item)?'★':isSkip(item)?'⊘':item.value;
  const corner=special==='wild'?'W':special==='skip'?'S':item.value;
  return `<button class="phase10-card ${special} ${item.color||''} ${selected?'is-selected':''}" data-phase-card="${item.id}" aria-label="${isWild(item)?'Wild card':isSkip(item)?'Skip card':`${item.color} ${item.value}`}" ${state.phase10?.turn!=='play'?'aria-disabled="true"':''}><span class="phase10-card-band phase10-card-band-top"><b>${corner}</b><b>${corner}</b></span><strong class="phase10-card-value">${label}</strong><span class="phase10-card-band phase10-card-band-bottom"><b>${corner}</b><b>${corner}</b></span><i>${special==='wild'?'WILD':special==='skip'?'SKIP':item.color}</i></button>`;
}
function phase10RequiredCount(phase){return [6,7,8,7,8,9,8,7,7,8][phase-1]||6;}
function combinations(items,size,start=0,picked=[],result=[]){if(picked.length===size){result.push(picked);return result;}for(let i=start;i<=items.length-(size-picked.length);i++)combinations(items,size,i+1,picked.concat(items[i]),result);return result;}
function phase10BotLay(player){const size=phase10RequiredCount(player.phase);const found=combinations(player.hand,size).find(cards=>phaseIsValid(player.phase,cards));if(!found)return false;const ids=new Set(found.map(item=>item.id));player.phaseCards=found;player.hand=player.hand.filter(item=>!ids.has(item.id));player.laid=true;return true;}
function renderPhase10() {
  const g=state.phase10; if(!g)return renderPhase10Setup(); document.body.classList.remove('home-mode','platform-home','match-mode');document.body.classList.add('phase10-mode');state.screen='phase10';renderTopbar();
  const me=g.players[0], active=g.players[g.current]; const discard=g.discardPile.at(-1); const selected=new Set(g.selected); const isMine=g.current===0;
  renderMarkup(app, `<section class="phase10-board"><header class="phase10-board-head"><div><span class="phase10-kicker">Round ${g.round}</span><h1>Phase ${me.phase}<small>${PHASES[me.phase-1]}</small></h1></div><div class="phase10-message ${isMine?'is-your-turn':''}">${escapeHtml(g.message)}</div><button class="phase10-exit" id="exitPhase10">Exit game</button></header><section class="phase10-opponents">${g.players.slice(1).map((player,index)=>`<article class="phase10-player ${g.current===index+1?'is-active':''}"><span class="phase10-avatar">${player.avatar}</span><div><b>${player.name}</b><small>Phase ${player.phase} · ${player.hand.length} cards</small></div><strong>${player.score}</strong>${player.laid?'<i class="phase10-done">✓</i>':''}</article>`).join('')}</section><main class="phase10-table"><div class="phase10-goal"><span>Your goal</span><strong>Phase ${me.phase}</strong><p>${PHASES[me.phase-1]}</p>${me.laid?'<b>Phase complete ✓</b>':''}</div><div class="phase10-decks"><button class="phase10-deck draw" id="phaseDraw" ${!isMine||g.turn!=='draw'?'aria-disabled="true"':''}><span>✦</span><small>Draw</small><i>${g.drawPile.length}</i></button><button class="phase10-deck discard ${discard?.color||''} ${isWild(discard)?'wild':''} ${isSkip(discard)?'skip':''}" id="phaseDiscardDraw" ${!isMine||g.turn!=='draw'?'aria-disabled="true"':''}><span>${isWild(discard)?'★':isSkip(discard)?'⊘':discard?.value}</span><small>Discard</small></button></div><div class="phase10-actions"><button id="phaseLay" ${!isMine||g.turn!=='play'||me.laid?'aria-disabled="true"':''}>Lay phase</button><button id="phaseDiscard" ${!isMine||g.turn!=='play'||g.selected.length!==1?'aria-disabled="true"':''}>Discard selected</button></div></main><section class="phase10-hand-wrap"><div class="phase10-hand-heading"><span>${me.avatar}</span><div><b>Your hand</b><small>${me.hand.length} cards · select cards to lay or discard</small></div></div><div class="phase10-hand">${me.hand.map(item=>phase10CardMarkup(item,selected.has(item.id))).join('')}</div></section></section>`, {nativeControls:false});
  bindPress('[data-phase-card]',(_,button)=>{if(g.current!==0||g.turn!=='play')return;const id=button.dataset.phaseCard;g.selected=g.selected.includes(id)?g.selected.filter(value=>value!==id):g.selected.concat(id);renderPhase10();});
  bindPress('#phaseDraw',()=>phase10Draw(false));bindPress('#phaseDiscardDraw',()=>phase10Draw(true));bindPress('#phaseLay',phase10Lay);bindPress('#phaseDiscard',phase10Discard);bindPress('#exitPhase10',renderHome);
}
function phase10Draw(fromDiscard){const g=state.phase10,player=g?.players[0];if(!g||g.current!==0||g.turn!=='draw')return;const item=fromDiscard?g.discardPile.pop():g.drawPile.pop();if(!item)return;player.hand.push(item);g.turn='play';g.message='Lay your phase or discard one card.';renderPhase10();}
function phase10Lay(){const g=state.phase10,player=g?.players[0];if(!g||g.current!==0||g.turn!=='play'||player.laid)return;const cards=player.hand.filter(item=>g.selected.includes(item.id));if(!phaseIsValid(player.phase,cards)){g.message=`Those cards do not complete Phase ${player.phase}: ${PHASES[player.phase-1]}.`;renderPhase10();return;}const ids=new Set(cards.map(item=>item.id));player.phaseCards=cards;player.hand=player.hand.filter(item=>!ids.has(item.id));player.laid=true;g.selected=[];g.message='Phase complete! Discard one card to end your turn.';renderPhase10();}
function phase10Discard(){const g=state.phase10,player=g?.players[0];if(!g||g.current!==0||g.turn!=='play'||g.selected.length!==1)return;const id=g.selected[0],index=player.hand.findIndex(item=>item.id===id);if(index<0)return;const [discard]=player.hand.splice(index,1);g.discardPile.push(discard);g.selected=[];if(isSkip(discard))g.skipped=1;phase10EndTurn();}
function phase10EndTurn(){const g=state.phase10,player=g.players[g.current];if(player.hand.length===0)return phase10FinishRound(player);g.current=(g.current+1)%g.players.length;if(g.skipped===g.current){g.message=`${g.players[g.current].name} was skipped!`;g.skipped=null;g.current=(g.current+1)%g.players.length;}g.turn='draw';if(g.current===0){g.message='Your turn: draw a card.';renderPhase10();}else{g.message=`${g.players[g.current].name} is thinking…`;renderPhase10();window.setTimeout(phase10BotTurn,650);}}
function phase10BotTurn(){const g=state.phase10;if(!g||g.current===0||g.finished)return;const player=g.players[g.current];const drawn=g.drawPile.pop();if(drawn)player.hand.push(drawn);phase10BotLay(player);const candidates=player.hand.filter(item=>!isWild(item)&&!isSkip(item));const discard=(candidates.length?candidates:player.hand)[Math.floor(Math.random()*(candidates.length?candidates.length:player.hand.length))];if(discard){player.hand.splice(player.hand.indexOf(discard),1);g.discardPile.push(discard);if(isSkip(discard))g.skipped=(g.current+1)%g.players.length;}phase10EndTurn();}
function phase10FinishRound(winner){const g=state.phase10;g.players.forEach(player=>{if(player!==winner)player.score+=player.hand.reduce((total,item)=>total+cardPoints(item),0);});winner.phase+=1;if(winner.phase>10){g.finished=true;g.message=`${winner.name} completed all ten phases!`;renderPhase10();return;}const next=phase10Game(state.name,state.phase10Avatar);next.players.forEach((player,index)=>{player.phase=g.players[index].phase;player.score=g.players[index].score;});next.round=g.round+1;next.message=`${winner.name} went out. New round!`;state.phase10=next;renderPhase10();}
function renderTakeFiveHome() {
  cleanupPeer(); document.body.classList.remove('match-mode','lobby-mode','platform-home'); document.body.classList.add('home-mode','take5-entry-mode'); state.screen='take5-home'; state.game=null; state.selected=null;setAmbient(true);
  renderTopbar();
  const nameValue = escapeHtml(state.name);
  renderMarkup(app, `<section class="landing">
    <div class="hero-copy"><div class="eyebrow">A LITTLE GAME. A LOT OF BULL.</div><h1>Take a card.<br /><em>Take five.</em></h1><p>Pick a number. Keep your cool. Try not to collect a whole row of bulls. That’s the game.</p>
      <div class="hero-points"><span><i class="tiny-star">✳</i> 2–10 players</span><span><i class="tiny-star">✳</i> 10 cards each</span><span><i class="tiny-star">✳</i> maximum mischief</span></div>
    <div class="table-scene" aria-hidden="true"><div class="scene-felt"></div><div class="scene-card c1"><strong>12</strong>${bullIconMarkup()}</div><div class="scene-card c2"><strong>38</strong>${bullIconMarkup()}</div><div class="scene-card c3"><strong>64</strong>${bullIconMarkup()}</div><div class="scene-card c4"><strong>91</strong>${bullIconMarkup()}</div><div class="decor-cow">🐮</div><div class="scene-caption">a very serious card table</div></div>
    </div>
    <section class="setup-card" aria-label="Start a game">
      <div class="setup-tabs" role="tablist" aria-label="Game type">
        <button class="setup-tab ${state.tab==='rooms'?'active':''}" id="roomsTab" data-tab="rooms" role="tab" aria-controls="roomsPanel" aria-selected="${state.tab==='rooms'}">Create / join room</button>
        <button class="setup-tab ${state.tab==='bots'?'active':''}" id="botsTab" data-tab="bots" role="tab" aria-controls="botsPanel" aria-selected="${state.tab==='bots'}">Play with bots</button>
      </div>
      <div class="mode-content mode-panel ${state.tab==='rooms'?'active':''}" id="roomsPanel" data-panel="rooms" role="tabpanel" aria-labelledby="roomsTab">
        <div class="room-panel-intro"><span class="panel-kicker">ONLINE TABLE</span><h2>Play with friends</h2><p>Join a room with a code, or create a table and invite your friends.</p></div>
        <label class="field-label" for="roomPlayerName">Your name</label>
        <input class="text-field" id="roomPlayerName" maxlength="18" placeholder="e.g. Alex" autocomplete="name" value="${nameValue}" />
        <section class="room-path join-path" aria-labelledby="joinRoomHeading">
          <div class="room-path-heading"><span class="room-path-step">01</span><div><h3 id="joinRoomHeading">Join a room</h3><p>Enter the four-digit code from your friend.</p></div></div>
          <label class="field-label" for="roomCode">Room code</label>
          <div class="join-room-controls"><input class="text-field room-code-input" id="roomCode" type="text" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" placeholder="1234" aria-describedby="roomCodeHint" value="${escapeHtml(state.roomPrefill||'')}" autocomplete="one-time-code" /><button class="primary-button action-button join-room-button" id="joinRoom">Join room</button></div>
          <span class="field-hint" id="roomCodeHint">Use the code shared by the host.</span>
        </section>
        <div class="room-divider"><span>OR CREATE YOUR OWN</span></div>
        <section class="room-path create-path" aria-labelledby="createRoomHeading">
          <div class="room-path-heading"><span class="room-path-step">02</span><div><h3 id="createRoomHeading">Create a room</h3><p>Open a table, then invite friends or add bots.</p></div></div>
          <button class="primary-button action-button" id="hostRoom">Create room</button>
        </section>
        <div class="inline-error" role="status" aria-live="polite"></div>
      </div>
      <div class="mode-content mode-panel ${state.tab==='bots'?'active':''}" id="botsPanel" data-panel="bots" role="tabpanel" aria-labelledby="botsTab">
        <div class="room-panel-intro"><span class="panel-kicker">SOLO TABLE</span><h2>A table of your own</h2><p>Practice your poker face. The bots are suspiciously confident.</p></div>
        <label class="field-label" for="playerName">Your name</label>
        <input class="text-field" id="playerName" maxlength="18" placeholder="e.g. Alex" autocomplete="name" value="${nameValue}" />
        <div class="row-fields"><div><label class="field-label" for="botCount">Opponents</label><select class="select-field" id="botCount">${[1,2,3,4,5,6,7,8,9].map(n=>`<option value="${n}" ${state.botCount===n?'selected':''}>${n} ${n===1?'bot':'bots'}</option>`).join('')}</select></div><div><label class="field-label" for="botStyle">Bot style</label><select class="select-field" id="botStyle"><option value="clever">Clever</option><option value="chaotic">Chaotic</option></select></div></div>
        <button class="primary-button action-button" id="startBots">Shuffle up</button>
      </div>
    </section>
  </section>`);
  bindPress('.setup-tab',(_,b)=>{state.tab=b.dataset.tab;renderTakeFiveHome()});
  document.querySelector('#botCount')?.addEventListener('change',e=>state.botCount=+e.target.value);
  bindPress('#startBots',()=>{setNameFrom('#playerName');startLocal()});
  bindPress('#hostRoom',()=>{setNameFrom('#roomPlayerName');hostRoom()});
  bindPress('#joinRoom',()=>{setNameFrom('#roomPlayerName');joinRoom(document.querySelector('#roomCode').value.trim())});
  document.querySelector('#roomCode')?.addEventListener('input',e=>{e.target.value=e.target.value.replace(/\D/g,'').slice(0,4)});
  document.querySelector('#roomCode')?.addEventListener('keydown',e=>{if(e.key==='Enter')document.querySelector('#joinRoom')?.dispatchEvent(new CustomEvent('rnpress',{bubbles:true}))});
}
function setNameFrom(sel) { state.name=document.querySelector(sel)?.value.trim()||'Player'; localStorage.setItem('take5-name',state.name); }
function showError(message) { const el=document.querySelector(`[data-panel="${state.tab}"] .inline-error`); if(el)el.textContent=message; }
function say(message) { clearTimeout(state.toastTimer); document.querySelector('.toast')?.remove(); const el=document.createElement('div'); el.className='toast';el.textContent=message;document.body.append(el);state.toastTimer=setTimeout(()=>el.remove(),2600); }
const roomReactions = ['😂','😮','😭','👏','❤️','🐂'];
function showReaction(reaction) {
  if (state.screen !== 'game' || !roomReactions.includes(reaction.emoji)) return;
  const player = Array.from(document.querySelectorAll('.header-player[data-player-id]')).find(el => el.dataset.playerId === reaction.playerId);
  const anchor = player?.getBoundingClientRect();
  const bubble = document.createElement('div');
  bubble.className = 'room-reaction-float';
  bubble.style.left = `${anchor ? anchor.left + anchor.width / 2 : innerWidth / 2}px`;
  bubble.style.top = `${anchor ? anchor.bottom - 4 : innerHeight * .45}px`;
  bubble.innerHTML = `<span>${reaction.emoji}</span><small>${escapeHtml(reaction.name || 'Player')}</small>`;
  document.body.append(bubble);
  setTimeout(() => bubble.remove(), 1700);
}
function relayReaction(reaction, excludeId = null) {
  state.connections.forEach((connection, id) => {
    if (id !== excludeId && connection.open) { try { connection.send(reaction); } catch {} }
  });
}
function sendReaction(emoji) {
  if (!state.mode?.startsWith('online') || state.screen !== 'game' || !roomReactions.includes(emoji)) return;
  const now=Date.now();if(now-(state.reactionCooldowns.get(state.clientId)||0)<650)return;state.reactionCooldowns.set(state.clientId,now);
  const reaction = { type:'reaction', playerId:state.clientId, name:state.name || 'Player', emoji };
  showReaction(reaction);
  document.querySelector('#gameMenuPanel')?.classList.add('is-hidden');
  document.querySelector('#gameMenuToggle')?.setAttribute('aria-expanded','false');
  document.querySelector('.menu-shell')?.classList.remove('is-open');
  document.querySelectorAll('.hand-reaction-picker').forEach(picker=>{picker.hidden=true;});document.querySelectorAll('.hand-reaction-trigger').forEach(button=>button.setAttribute('aria-expanded','false'));document.querySelectorAll('.hand-reaction-control').forEach(control=>control.classList.remove('is-expanded'));
  if (state.host) relayReaction(reaction);
  else if (state.connection?.open) state.connection.send({ type:'reaction', emoji });
}
function makePlayers(botCount, online=false) {
  const players=[{id:'self',name:state.name||'You',human:true,online:true,score:0,total:0,hand:[]}];
  for(let i=0;i<botCount;i++)players.push({id:`bot${i+1}`,name:['Milo','Nora','Pip','June','Otto','Bea','Finn','Kit','Lou'][i],human:false,online:true,score:0,total:0,hand:[]});
  return players;
}
function dealHand(players) { const deck=randomDeck();players.forEach(p=>p.hand=deck.splice(0,10).sort((a,b)=>a-b));return deck.splice(0,4).map(n=>[n]); }
function startLocal() {
  playSound('deal');setAmbient(false);clearTimeout(state.countdownTimer);clearInterval(state.countdownInterval);const bots=+(document.querySelector('#botCount')?.value||state.botCount||3);state.botCount=bots;state.submittedTurn=false;state.animating=false;state.replay=null;state.replayKey=null;state.revealOrigins={};state.stageSeen=new Set();state.stageTurnKey=null;
  const players=makePlayers(bots); state.game={players,rows:dealHand(players),turn:1,round:1,tieOffset:0,phase:'choosing',selections:{},lastReveal:null,mode:'local',botStyle:document.querySelector('#botStyle')?.value||'clever'};
  state.mode='local';state.screen='game';state.selected=null;state.screenTransition=true;renderGame();
}
function newRound(game) { game.round++;game.turn=1;game.tieOffset=(game.tieOffset+1)%game.players.length;game.rows=dealHand(game.players);game.phase='choosing';game.selections={};game.lastReveal=null;delete game.pendingRowChoice; }

function cpuChoice(player, game) {
  const hand=player.hand;let best=hand[0],bestCost=Infinity;
  for(const card of hand){
    const candidates=game.rows.map((row,i)=>({i,top:row.at(-1),distance:card-row.at(-1),heads:row.reduce((s,n)=>s+bulls(n),0)})).filter(x=>card>x.top).sort((a,b)=>b.top-a.top);
    let cost;
    if(!candidates.length)cost=26+game.rows.reduce((a,r)=>a+r.reduce((s,n)=>s+bulls(n),0),0)*1.1+card/104;
    else {const lane=candidates[0];cost=lane.heads*2.1+(lane.distance<4?1.3:0)+(lane.i===3?-.3:0);if(game.rows[lane.i].length>=5)cost+=7;if(game.rows[lane.i].length>=4)cost+=2.5;cost+=card/500;}
    if(game.botStyle==='chaotic')cost+=(Math.random()-.5)*9;
    if(cost<bestCost){bestCost=cost;best=card;}
  }
  return best;
}
function submitLocal(card) {
  const game=state.game;if(state.animating||!game||game.phase!=='choosing'||!game.players[0].hand.includes(card))return;playSound('card');
  const origin=document.querySelector(`.hand-card[data-card="${card}"]`)?.getBoundingClientRect();if(origin)state.revealOrigins.self={left:origin.left,top:origin.top,width:origin.width,height:origin.height};
  state.selected=card;game.players.slice(1).forEach(p=>game.selections[p.id]=cpuChoice(p,game));game.selections.self=card;game.phase='countdown';game.countdownAt=Date.now()+3000;
  state.selected=null;renderGame();startCountdown(game,false);
}
function resolveTurn(game, chosenRowIndex) {
  const order=game.players.map((_,i)=>(i+game.tieOffset)%game.players.length);
  const selected=game.players.map(p=>({p,card:game.selections[p.id]})).sort((a,b)=>a.card-b.card||order.indexOf(game.players.indexOf(a.p))-order.indexOf(game.players.indexOf(b.p)));
  const first=selected.find(item=>item.p.hand.includes(item.card));
  if(first){
    const hasLowerRow=game.rows.some(row=>first.card>row.at(-1));
    if(!hasLowerRow&&first.p.human&&chosenRowIndex==null){game.pendingRowChoice={playerId:first.p.id,card:first.card};game.phase='row-choice';return true;}
  }
  const reveals=[];
  for(const {p,card} of selected){const at=p.hand.indexOf(card);if(at<0)continue;p.hand.splice(at,1);let candidates=game.rows.map((row,i)=>({i,top:row.at(-1)})).filter(x=>card>x.top).sort((a,b)=>b.top-a.top);let rowIndex,penalty=0,tookRow=false;
    if(!candidates.length){
      const usesChoice=chosenRowIndex!=null&&p.id===game.pendingRowChoice?.playerId;
      rowIndex=usesChoice?chosenRowIndex:game.rows.reduce((i,row,j)=>row.reduce((s,n)=>s+bulls(n),0)<game.rows[i].reduce((s,n)=>s+bulls(n),0)?j:i,0);
      if(!Number.isInteger(rowIndex)||rowIndex<0||rowIndex>=game.rows.length){p.hand.splice(at,0,card);return true;}
      penalty=game.rows[rowIndex].reduce((s,n)=>s+bulls(n),0);p.score+=penalty;p.total+=penalty;tookRow=true;game.rows[rowIndex]=[card];
    }
    else {rowIndex=candidates[0].i;if(game.rows[rowIndex].length===5){penalty=game.rows[rowIndex].slice(0,5).reduce((s,n)=>s+bulls(n),0);p.score+=penalty;p.total+=penalty;tookRow=true;game.rows[rowIndex]=[card];}else game.rows[rowIndex].push(card);}
    reveals.push({playerId:p.id,name:p.name,card,rowIndex,penalty,tookRow});
  }
  game.lastReveal=reveals;game.selections={};delete game.pendingRowChoice;game.tieOffset=(game.tieOffset+1)%game.players.length;state.selected=null;state.submittedTurn=false;
  if(game.players.every(p=>p.hand.length===0)){
    const high=game.players.some(p=>p.total>=66);
    if(high){game.phase='finished';state.screen='result';}
    else game.phase='round-break';
  }else {game.turn++;game.phase='choosing';}
  return false;
}

async function getPeerLib(){return import('https://esm.sh/peerjs@1.5.5?bundle');}
function randomRoomCode(){const values=new Uint16Array(1);crypto.getRandomValues(values);return String(values[0]%10000).padStart(4,'0');}
function roomResumeToken(roomId){let session=readStored(guestSessionKey);if(session?.roomId!==roomId||!session.token){session={roomId,token:crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}`};localStorage.setItem(guestSessionKey,JSON.stringify(session));}state.resumeToken=session.token;return session.token;}
function saveHostRoom(){if(!state.host||!state.roomId)return;try{localStorage.setItem(hostSaveKey,JSON.stringify({roomId:state.roomId,name:state.name,screen:state.screen,players:state.players,game:state.game}));}catch{say('Could not save a recovery copy of this room on this device.');}}
function watchHostConnection(peer,conn){if(state.peer!==peer)return;conn.on('open',()=>{});conn.on('data',data=>hostMessage(conn,data));conn.on('close',()=>{if(state.peer!==peer||state.connections.get(conn.peer)!==conn)return;const p=state.players.find(x=>x.id===conn.peer);if(p)p.online=false;state.connections.delete(conn.peer);saveHostRoom();if(state.game?.phase==='choosing'){completeTurnIfReady();broadcast();}else if(state.game?.phase==='row-choice'){if(state.game.pendingRowChoice?.playerId===p?.id)scheduleOfflineTurnFallback();broadcast();}else if(state.screen==='lobby')broadcastLobby();});}
function watchPeerSignal(peer){peer.on('disconnected',()=>{if(state.peer===peer)watchPeerSignalRetry(peer,1200);});peer.on('open',()=>clearTimeout(state.peerReconnectTimer));}
function watchPeerSignalRetry(peer,delay=3000){if(state.peer!==peer)return;clearTimeout(state.peerReconnectTimer);state.peerReconnectTimer=setTimeout(()=>{if(state.peer!==peer||!peer.disconnected)return;try{peer.reconnect()}catch{}if(state.peer===peer&&peer.disconnected)watchPeerSignalRetry(peer,4000);},delay);}
async function hostRoom(){
  if(state.busy)return;state.busy=true;showError('Opening your room…');
  try{const {Peer}=await getPeerLib();let attempts=0;const openPeer=()=>{const code=randomRoomCode();const peer=new Peer(`take5-${code}`);state.peer=peer;state.host=true;watchPeerSignal(peer);
    peer.on('open',id=>{if(state.peer!==peer)return;localStorage.removeItem(guestSessionKey);state.roomId=code;state.clientId=id;state.players=[{id,name:state.name,human:true,online:true,score:0,total:0,hand:[]}];state.screen='lobby';state.mode='online-host';state.busy=false;state.screenTransition=true;history.replaceState({},'',`?room=${encodeURIComponent(code)}`);renderLobby();saveHostRoom();});
    peer.on('connection',conn=>watchHostConnection(peer,conn));
    peer.on('error',err=>{if(state.peer!==peer)return;if(err.type==='unavailable-id'&&attempts<8){attempts++;peer.destroy();state.peer=null;setTimeout(openPeer,120);return;}state.busy=false;if(state.screen==='home')showError(err.type==='unavailable-id'?'Could not reserve a room code. Try again.':'Room connection failed. Check your internet and try again.');else say('Room connection hiccup.');});
  };openPeer();
  }catch(e){state.busy=false;showError('Online rooms need an internet connection. Please try again.');}
}
async function resumeHostRoom(saved){
  if(!saved?.roomId||!/^\d{4}$/.test(saved.roomId))return renderHome();
  state.busy=true;state.name=saved.name||state.name;showError('Restoring your room…');
  try{const {Peer}=await getPeerLib();let attempts=0;const openPeer=()=>{const peer=new Peer(`take5-${saved.roomId}`);state.peer=peer;state.host=true;watchPeerSignal(peer);
    peer.on('open',id=>{if(state.peer!==peer)return;setAmbient(false);state.roomId=saved.roomId;state.clientId=id;state.game=saved.game||null;state.players=state.game?.players||saved.players||[];if(state.game)state.players=state.game.players;state.mode='online-host';state.screen=state.game?(state.game.phase==='finished'?'result':'game'):'lobby';state.busy=false;state.screenTransition=true;state.selected=null;state.submittedTurn=false;state.animating=false;state.replay=null;state.replayKey=null;state.revealOrigins={};history.replaceState({},'',`?room=${encodeURIComponent(saved.roomId)}`);if(state.screen==='lobby')renderLobby();else if(state.screen==='result')renderResult();else{renderGame();if(state.game.phase==='countdown')startCountdown(state.game,true);}saveHostRoom();});
    peer.on('connection',conn=>watchHostConnection(peer,conn));
    peer.on('error',err=>{if(state.peer!==peer)return;if(err.type==='unavailable-id'&&attempts<25){attempts++;peer.destroy();state.peer=null;setTimeout(openPeer,Math.min(1800,180+attempts*120));return;}state.busy=false;if(attempts>=25){showError('This room is still active in another tab. Close that tab, then refresh to restore it.');}else{showError('Could not reconnect to your room. Refresh to try again.');}peer.destroy();state.peer=null;state.host=false;});
  };openPeer();}catch{state.busy=false;state.host=false;showError('Could not restore the room. Check your connection and refresh to try again.');}
}
function hostMessage(conn,data){if(!data||typeof data!=='object')return;if(data.type==='hello'){
    const token=typeof data.resumeToken==='string'?data.resumeToken.slice(0,100):'';
    const player=state.players.find(p=>p.id===conn.peer||(token&&p.resumeToken===token));
    if(player){const previousId=player.id;const stale=state.connections.get(previousId);if(stale&&stale!==conn){state.connections.delete(previousId);try{stale.close()}catch{}}player.id=conn.peer;player.online=true;if(state.game&&previousId!==conn.peer){if(Object.hasOwn(state.game.selections||{},previousId)){state.game.selections[conn.peer]=state.game.selections[previousId];delete state.game.selections[previousId];}if(state.game.pendingRowChoice?.playerId===previousId)state.game.pendingRowChoice.playerId=conn.peer;if(state.game.lastReveal)state.game.lastReveal=state.game.lastReveal.map(item=>item.playerId===previousId?{...item,playerId:conn.peer}:item);}state.connections.set(conn.peer,conn);conn.send({type:'welcome',id:conn.peer,roomId:state.roomId});if(state.game){clearTimeout(state.disconnectAdvanceTimer);state.disconnectAdvanceTimer=null;conn.send(playerView(conn.peer));completeTurnIfReady();saveHostRoom();broadcast();}else broadcastLobby();return;}
    if(state.game){conn.send({type:'error',message:'This game is already in progress. Rejoin using your original invite link.'});conn.close();return;}
    if(state.players.length>=10){conn.send({type:'error',message:'This table is full (10 players max).'});conn.close();return;}
    const newPlayer={id:conn.peer,name:String(data.name||'Player').slice(0,18),resumeToken:token||undefined,human:true,online:true,ready:false,score:0,total:0,hand:[]};state.players.push(newPlayer);state.connections.set(conn.peer,conn);conn.send({type:'welcome',id:conn.peer,roomId:state.roomId});if(state.screen==='lobby')broadcastLobby();return;
  }
  if(data.type==='sync'){if(state.connections.get(conn.peer)!==conn)return;conn.send({type:'welcome',id:conn.peer,roomId:state.roomId});if(state.game)conn.send(playerView(conn.peer));else conn.send({type:'lobby',players:state.players.map(({id,name,online,human,ready})=>({id,name,online,human,ready})),roomId:state.roomId});return;}
  if(data.type==='ready'&&state.screen==='lobby'){const player=state.players.find(p=>p.id===conn.peer);if(!player)return;player.ready=!!data.ready;broadcastLobby();return;}
  if(data.type==='reaction'){
    const player=state.players.find(p=>p.id===conn.peer);const now=Date.now();
    if(state.screen!=='game'||!player?.human||!player.online||!roomReactions.includes(data.emoji)||now-(state.reactionCooldowns.get(conn.peer)||0)<650)return;
    state.reactionCooldowns.set(conn.peer,now);
    const reaction={type:'reaction',playerId:conn.peer,name:player.name,emoji:data.emoji};
    showReaction(reaction);relayReaction(reaction,conn.peer);return;
  }
  if(data.type==='pick'&&state.game&&state.game.phase==='choosing'&&!state.animating){
    const player=state.players.find(p=>p.id===conn.peer);if(!player||!player.hand.includes(+data.card)||state.game.selections[conn.peer])return;
    state.game.selections[conn.peer]=+data.card;
    completeTurnIfReady();broadcast();
  }
  if(data.type==='choose-row'&&state.game?.phase==='row-choice'){
    const pending=state.game.pendingRowChoice;
    if(!pending||pending.playerId!==conn.peer||!Number.isInteger(+data.rowIndex))return;
    resolveRowChoice(+data.rowIndex);
  }
}
function completeTurnIfReady(){const g=state.game;if(state.animating||!g||g.phase!=='choosing')return;const missingOnline=g.players.some(p=>p.human&&p.online&&!g.selections[p.id]);if(missingOnline)return;const missingOffline=g.players.some(p=>p.human&&!p.online&&!g.selections[p.id]);if(missingOffline){scheduleOfflineTurnFallback();return;}clearTimeout(state.disconnectAdvanceTimer);state.disconnectAdvanceTimer=null;g.players.filter(p=>!p.human&&!g.selections[p.id]).forEach(p=>g.selections[p.id]=cpuChoice(p,g));g.phase='countdown';g.countdownAt=Date.now()+3000;startCountdown(g,true);}
function scheduleOfflineTurnFallback(){if(state.disconnectAdvanceTimer)return;state.disconnectAdvanceTimer=setTimeout(()=>{state.disconnectAdvanceTimer=null;const g=state.game;if(!g)return;if(g.phase==='choosing'){g.players.filter(p=>p.human&&!p.online&&!g.selections[p.id]).forEach(p=>g.selections[p.id]=cpuChoice(p,g));completeTurnIfReady();broadcast();}else if(g.phase==='row-choice'&&g.pendingRowChoice){const rows=g.rows;const index=rows.map((row,i)=>({i,penalty:row.reduce((sum,n)=>sum+bulls(n),0)})).sort((a,b)=>a.penalty-b.penalty||a.i-b.i)[0]?.i??0;resolveRowChoice(index);}},20000);}
function broadcastLobby(){saveHostRoom();const msg={type:'lobby',players:state.players.map(({id,name,online,human,ready})=>({id,name,online,human,ready})),roomId:state.roomId};state.connections.forEach(c=>{try{c.send(msg)}catch{}});renderLobby();}
function playerView(id){const g=state.game;if(!g)return null;return {type:'game',viewer:id,game:{...g,players:g.players.map(p=>{const {resumeToken,...view}=p;return {...view,hand:p.id===id?p.hand:undefined};}),readyPlayers:Object.keys(g.selections),selections:g.phase==='row-choice'?{...g.selections}:{},mode:'online'}};}
function broadcast(){if(state.screen==='lobby'){broadcastLobby();return;}saveHostRoom();state.connections.forEach((c,id)=>{try{c.send(playerView(id))}catch{}});if(state.clientId)renderGame();}
function refreshRoomSync(){if(!state.roomId){say('This room is not connected.');return;}if(state.host){if(state.screen==='lobby')broadcastLobby();else broadcast();say('Room state refreshed for everyone.');return;}const peer=state.peer;if(state.connection?.open){state.connection.send({type:'sync'});say('Refreshing room sync…');return;}if(peer){state.recoveringGuest=true;state.connection=null;clearTimeout(state.reconnectTimer);if(peer.disconnected){try{peer.reconnect()}catch{watchPeerSignalRetry(peer);}}connectGuestToRoom(state.roomId,peer);say('Reconnecting to the room…');return;}state.resumeToken=readStored(guestSessionKey)?.token||state.resumeToken;state.busy=false;joinRoom(state.roomId);}
function startOnlineGame(){if(!state.host||state.players.filter(p=>p.human&&p.online).length<1)return;playSound('deal');setAmbient(false);clearTimeout(state.countdownTimer);clearInterval(state.countdownInterval);let add=+(document.querySelector('#lobbyBots')?.value||0);if(state.players.filter(p=>p.human&&p.online).length===1&&!state.players.some(p=>!p.human)&&add===0)add=1;for(let i=0;i<add&&state.players.length<10;i++){const ix=state.players.filter(p=>!p.human).length;state.players.push({id:`bot${ix+1}`,name:['Milo','Nora','Pip','June','Otto','Bea','Finn','Kit','Lou'][ix],human:false,online:true,score:0,total:0,hand:[]});}state.game={players:state.players,rows:dealHand(state.players),turn:1,round:1,tieOffset:0,phase:'choosing',selections:{},lastReveal:null,mode:'online'};state.submittedTurn=false;state.animating=false;state.replay=null;state.replayKey=null;state.revealOrigins={};state.stageSeen=new Set();state.stageTurnKey=null;state.screen='game';state.mode='online-host';state.screenTransition=true;broadcast();}
function connectGuestToRoom(roomId,peer,attempt=0){
  if(state.peer!==peer||state.host)return;
  if(state.connection&&state.connection.open)return;
  let conn;
  try{conn=peer.connect(`take5-${roomId}`,{reliable:true});}catch{scheduleGuestReconnect(roomId,peer,attempt);return;}
  state.connection=conn;let welcomed=false;let welcomeTimer=setTimeout(()=>{if(!welcomed&&state.connection===conn)conn.close();},10000);
  conn.on('open',()=>{if(state.peer===peer)conn.send({type:'hello',name:state.name,resumeToken:state.resumeToken});});
  conn.on('data',data=>{if(data?.type==='welcome'){welcomed=true;clearTimeout(welcomeTimer);state.recoveringGuest=false;}clientMessage(data);});
  conn.on('error',()=>conn.close());
  conn.on('close',()=>{clearTimeout(welcomeTimer);if(state.connection!==conn||state.peer!==peer)return;scheduleGuestReconnect(roomId,peer,attempt);});
}
function scheduleGuestReconnect(roomId,peer,attempt){
  if(state.peer!==peer||state.host)return;
  if(!state.recoveringGuest&&state.screen!=='game'&&state.screen!=='lobby'){state.busy=false;showError('Could not reach that room. Check the code and try again.');return;}
  state.recoveringGuest=true;clearTimeout(state.reconnectTimer);state.reconnectTimer=setTimeout(()=>connectGuestToRoom(roomId,peer,attempt+1),Math.min(8000,700*Math.pow(2,Math.min(attempt,3))));
}
function joinRoom(roomId){if(state.busy)return;if(!/^\d{4}$/.test(roomId)){showError('Enter the 4-digit room code.');return;}state.busy=true;state.roomId=roomId;roomResumeToken(roomId);showError('Finding your table…');getPeerLib().then(({Peer})=>{const peer=new Peer();state.peer=peer;state.host=false;watchPeerSignal(peer);peer.on('open',()=>connectGuestToRoom(roomId,peer));peer.on('error',err=>{if(err.type==='peer-unavailable'&&state.recoveringGuest){scheduleGuestReconnect(roomId,peer,0);return;}if(state.screen==='home'&&!state.recoveringGuest){state.busy=false;showError(err.type==='peer-unavailable'?'Room not found. Check the code and try again.':'Could not connect. Check your internet and try again.');}});}).catch(()=>{state.busy=false;showError('Online rooms need an internet connection. Please try again.');});}
function clientMessage(data){if(data?.type==='reaction'){showReaction(data);}else if(data?.type==='welcome'){state.clientId=data.id;state.roomId=data.roomId;state.busy=false;state.mode='online-guest';if(!state.game)state.screen='lobby';localStorage.setItem(guestSessionKey,JSON.stringify({roomId:data.roomId,token:state.resumeToken}));if(!state.game)renderLobby();}else if(data?.type==='lobby'){state.players=data.players;state.roomId=data.roomId;if(state.screen!=='game')state.screen='lobby';renderLobby();}else if(data?.type==='game'){const previous=state.game;const changedTurn=previous&&(previous.turn!==data.game.turn||previous.round!==data.game.round);state.game=data.game;state.players=data.game.players;state.clientId=data.viewer;state.mode='online-guest';state.screen=data.game.phase==='finished'?'result':'game';if(changedTurn){state.selected=null;state.submittedTurn=false;}state.submittedTurn=!!data.game.readyPlayers?.includes(data.viewer);state.recoveringGuest=false;renderGame();}else if(data?.type==='error'){state.busy=false;say(data.message);}}
function sendPick(card){if(state.animating||state.game?.phase!=='choosing')return;playSound('card');const origin=document.querySelector(`.hand-card[data-card="${card}"]`)?.getBoundingClientRect();if(origin)state.revealOrigins[state.clientId]={left:origin.left,top:origin.top,width:origin.width,height:origin.height};if(state.host){if(state.game.selections[state.clientId])return;state.game.selections[state.clientId]=card;completeTurnIfReady();broadcast();}else if(state.connection?.open){state.connection.send({type:'pick',card});state.selected=card;state.submittedTurn=true;renderGame();}}

function resolveRowChoice(rowIndex){
  const game=state.game,pending=game?.pendingRowChoice;
  if(!game||!pending||rowIndex<0||rowIndex>=game.rows.length)return;
  clearTimeout(state.disconnectAdvanceTimer);state.disconnectAdvanceTimer=null;
  const viewerId=state.mode==='local'?game.players[0]?.id:state.clientId;
  const isMine=pending.playerId===viewerId;
  if(!isMine&&!state.host)return;
  resolveTurn(game,rowIndex);
  if(state.host)broadcast();else renderGame();
}
function chooseRow(rowIndex){
  playSound('row');
  const game=state.game,pending=game?.pendingRowChoice;
  const viewerId=state.mode==='local'?game?.players[0]?.id:state.clientId;
  if(!pending||pending.playerId!==viewerId)return;
  if(state.mode==='local'||state.host)resolveRowChoice(rowIndex);
  else if(state.connection?.open)state.connection.send({type:'choose-row',rowIndex});
}

function renderLobby(){setAmbient(false);document.body.classList.remove('home-mode');document.body.classList.add('match-mode','lobby-mode');state.screen='lobby';const joined=state.players.filter(p=>p.online!==false).length;const me=state.players.find(p=>p.id===state.clientId);const guestReady=!!me?.ready;const code=escapeHtml(state.roomId);renderTopbar();
  renderMarkup(app,`<section class="game-layout lobby-layout"><div class="lobby-row"><strong>ROOM CODE</strong><span class="room-code">${code}</span><span class="lobby-wait">${joined<2?'Waiting for friends, or start a practice game now.':`${joined} players connected`}</span></div><div class="tabletop"><div class="tabletop-head"><span>THE TABLE</span><strong>2–10 PLAYERS</strong></div><div class="row-empty">${joined<2?'Share the invite link, or start now and a bot will join your table.':'Players are here. The host can start the game.'}</div></div><div class="game-bottom lobby-bottom"><div></div><aside class="turn-side"><div class="turn-state">READY TO PLAY</div><p class="turn-message">${joined<2?'Start now and play with one bot, or wait for friends to join.':'Everyone is here. Deal the cards!'}</p>${state.host?`<label class="field-label" for="lobbyBots">Bots to add</label><select class="select-field" id="lobbyBots"><option value="0">No bots</option><option value="1">1 bot</option><option value="2">2 bots</option><option value="3">3 bots</option></select><button class="primary-button lobby-start" id="beginOnline">Start game ↗</button>`:`<button class="primary-button lobby-start lobby-ready" id="toggleReady">${guestReady?'Ready ✓':'Ready up'}</button><div class="turn-help">${guestReady?'You’re ready. Waiting for the host…':'Tap Ready when you’re set to play.'}</div>`}</aside></div></section>`);
  bindPress('#beginOnline',startOnlineGame);bindPress('#toggleReady',()=>{const next=!guestReady;state.players=state.players.map(p=>p.id===state.clientId?{...p,ready:next}:p);state.connection?.send({type:'ready',ready:next});renderLobby();});
}
function copyText(text,msg){navigator.clipboard?.writeText(text).then(()=>say(msg)).catch(()=>say('Could not copy. Select the room code to copy it.'));}
function copyInvite(){const base=isNativeApp?publicGameUrl:`${location.origin}${location.pathname}`;const url=`${base}?room=${encodeURIComponent(state.roomId)}`;copyText(url,'Invite link copied');}

function cardBackMarkup(){return `<div class="card-back-design"><span class="back-emblem">${bullIconMarkup()}</span><b>TAKE<br>5</b><span class="back-stars">✦　✦　✦</span></div>`;}
function startCountdown(game,hostTimer){clearTimeout(state.countdownTimer);state.countdownTimer=setTimeout(()=>{if(state.game!==game||game.phase!=='countdown')return;clearInterval(state.countdownInterval);state.countdownInterval=null;game.phase='choosing';delete game.countdownAt;resolveTurn(game);if(game.phase==='finished')state.screen='result';if(hostTimer)broadcast();else renderGame();},Math.max(0,(game.countdownAt||Date.now()+3000)-Date.now()));}
function updateCountdownDisplay(game){clearInterval(state.countdownInterval);state.countdownInterval=null;if(game.phase!=='countdown')return;const update=()=>{const el=app.querySelector('[data-countdown]');if(!el)return;const left=Math.max(0,(game.countdownAt-Date.now())/1000);el.textContent=left>0?String(Math.ceil(left)):'REVEAL';};update();state.countdownInterval=setInterval(update,100);}
function animateStagedCards(){const cards=Array.from(app.querySelectorAll('.stage-card-back'));if(!cards.length)return;const motions=[];for(const card of cards){const id=card.dataset.stagePlayer;if(state.stageSeen.has(id))continue;state.stageSeen.add(id);const playerNode=Array.from(document.querySelectorAll('[data-player-id]')).find(node=>node.dataset.playerId===id);const origin=state.revealOrigins[id]||playerNode?.querySelector('.opponent-cards')?.getBoundingClientRect()||playerNode?.getBoundingClientRect();const target=card.getBoundingClientRect();if(!origin){card.classList.remove('stage-pending');continue;}const flyer=document.createElement('div');flyer.className='flying-back';flyer.innerHTML=cardBackMarkup();document.body.append(flyer);const from={x:origin.left+origin.width/2,y:origin.top+origin.height/2};const to={x:target.left+target.width/2,y:target.top+target.height/2};flyer.style.left=`${from.x}px`;flyer.style.top=`${from.y}px`;const motion=(async()=>{try{await flyer.animate([{left:`${from.x}px`,top:`${from.y}px`,transform:'translate(-50%,-50%) scale(.5) rotate(-7deg)'},{left:`${to.x}px`,top:`${to.y}px`,transform:'translate(-50%,-50%) scale(1) rotate(0deg)'}],{duration:330,easing:'cubic-bezier(.18,.75,.25,1)',fill:'forwards'}).finished;}catch{}flyer.remove();card.classList.remove('stage-pending');})();motions.push(motion);}Promise.all(motions);}

function prepareRevealReplay(game){if(!game.lastReveal?.length)return;const key=`${game.round}:${game.turn}:${game.lastReveal.map(item=>`${item.playerId}-${item.card}`).join(',')}`;if(key===state.replayKey)return;state.replayKey=key;state.replay={key,reveals:game.lastReveal.map(item=>({...item})),seen:new Set(),active:true,running:false};state.revealOrigins=state.revealOrigins||{};state.animating=true;}
function wait(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
async function runRevealAnimation(){const replay=state.replay;if(!replay?.active||replay.running)return;playSound('deal');replay.running=true;state.animating=true;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;const duration=reduced?180:500;await wait(reduced?150:720);
  for(const item of replay.reveals){if(state.replay!==replay||state.screen==='home')break;const row=app.querySelector(`.row-lane[data-row-index="${item.rowIndex}"]`);const target=app.querySelector(`.playing-card[data-row-index="${item.rowIndex}"][data-card-number="${item.card}"]`);const destination=target||row?.querySelector('.row-cards');let source=state.revealOrigins?.[item.playerId];if(!source){const sourceNode=Array.from(document.querySelectorAll('[data-player-id]')).find(node=>node.dataset.playerId===item.playerId);source=sourceNode?.querySelector('.opponent-cards')?.getBoundingClientRect()||sourceNode?.getBoundingClientRect()||app.querySelector('.hand-area')?.getBoundingClientRect();}if(!source||!destination){replay.seen.add(item.card);target?.classList.remove('reveal-pending');continue;}
    const from={x:source.left+source.width/2,y:source.top+source.height/2};const rect=destination.getBoundingClientRect();const to={x:rect.left+rect.width/2,y:rect.top+rect.height/2};const flyer=document.createElement('div');flyer.className='flying-card';flyer.innerHTML=cardFace(item.card);document.body.append(flyer);flyer.style.left=`${from.x}px`;flyer.style.top=`${from.y}px`;
    try{await flyer.animate([{left:`${from.x}px`,top:`${from.y}px`,transform:'translate(-50%,-50%) scale(.62) rotate(-5deg)'},{left:`${(from.x+to.x)/2}px`,top:`${(from.y+to.y)/2-24}px`,transform:'translate(-50%,-50%) scale(.86) rotate(2deg)'},{left:`${to.x}px`,top:`${to.y}px`,transform:'translate(-50%,-50%) scale(1) rotate(0deg)'}],{duration,easing:'cubic-bezier(.2,.78,.24,1)',fill:'forwards'}).finished;}catch{}
    flyer.remove();if(state.replay!==replay)break;replay.seen.add(item.card);target?.classList.remove('reveal-pending');row?.classList.add('card-landed');setTimeout(()=>row?.classList.remove('card-landed'),360);await wait(reduced?40:130);
  }
  if(state.replay!==replay)return;replay.active=false;replay.running=false;state.animating=false;state.revealOrigins={};if(state.game?.phase==='finished'){state.screen='result';renderResult();}else if(state.game?.phase==='round-break'){newRound(state.game);state.stageSeen=new Set();state.stageTurnKey=null;if(state.host)broadcast();else renderGame();}else renderGame();
}

function renderGame(){if(!state.game)return;const g=state.game;prepareRevealReplay(g);if(state.screen==='result'&&!state.replay?.active){renderResult();return;}document.body.classList.remove('home-mode','lobby-mode');document.body.classList.add('match-mode');state.screen='game';renderTopbar();const me=g.players.find(p=>p.id===state.clientId)||g.players[0];const hand=me?.hand||[];const choosing=g.phase==='choosing';const online=state.mode?.startsWith('online');const readyPlayers=g.readyPlayers||Object.keys(g.selections||{});const submitted=online&&(!!g.selections?.[state.clientId]||readyPlayers.includes(state.clientId)||state.submittedTurn);const remaining=me?.hand?.length??0;const stageKey=`${g.round}:${g.turn}`;if(state.stageTurnKey!==stageKey){state.stageTurnKey=stageKey;state.stageSeen=new Set();}const stageIds=new Set(readyPlayers);if(online&&submitted)stageIds.add(state.clientId);const stagePlayers=g.players.filter(p=>stageIds.has(p.id));const ownPicked=g.selections?.[me.id]??(submitted?state.selected:null);const visibleHand=ownPicked==null?hand:hand.filter(n=>n!==ownPicked);const pendingKeys=new Set(state.replay?.active?state.replay.reveals.filter(item=>!state.replay.seen.has(item.card)).map(item=>`${item.rowIndex}:${item.card}`):[]);const rowChoice=g.phase==='row-choice'?g.pendingRowChoice:null;const choosingRow=!!rowChoice&&rowChoice.playerId===me.id;const choicePlayer=rowChoice?g.players.find(p=>p.id===rowChoice.playerId):null;
  renderMarkup(app,`<section class="game-layout">
  <div class="tabletop"><div class="tabletop-head"><span>✦ THE MEADOW TABLE ✦</span><strong>ROUND ${g.round} <span>·</span> TURN ${Math.min(g.turn,10)} OF 10</strong></div><div class="rows">${g.rows.map((row,i)=>{const total=row.reduce((s,n)=>s+bulls(n),0);return `<div class="row-lane ${g.lastReveal?.some(x=>x.rowIndex===i&&x.playerId===me.id&&x.tookRow)?'target':''}" data-row-index="${i}"><div class="row-label"><span>ROW ${i+1}</span></div><b class="row-total bull-counter-badge" aria-label="${total} bullheads"><strong>${total}</strong>${bullIconMarkup()}</b><div class="row-cards">${row.map(n=>`<div class="playing-card ${pendingKeys.has(`${i}:${n}`)?'reveal-pending':''}" data-row-index="${i}" data-card-number="${n}" aria-label="${n}, ${bulls(n)} bullheads">${cardFace(n)}</div>`).join('')}</div></div>`;}).join('')}</div></div>
  <div class="stage-zone ${stagePlayers.length?'has-cards':''} ${g.phase==='countdown'?'countdown-active':''}">${stagePlayers.map(p=>{const playedCard=g.selections?.[p.id]??(p.id===rowChoice?.playerId?rowChoice.card:null);return rowChoice&&Number.isInteger(playedCard)?`<div class="stage-reveal-card" data-stage-player="${escapeHtml(p.id)}" aria-label="${escapeHtml(p.name)} played ${playedCard}">${cardFace(playedCard)}<small>${escapeHtml(p.name)} · ${playedCard}</small></div>`:`<div class="stage-card-back ${state.stageSeen.has(p.id)?'':'stage-pending'}" data-stage-player="${escapeHtml(p.id)}">${cardBackMarkup()}<small>${escapeHtml(p.name)}</small></div>`;}).join('')}${g.phase==='countdown'?'<div class="reveal-countdown"><span>REVEALING IN</span><strong data-countdown>3</strong></div>':''}</div>
  ${state.replay?.active?`<div class="reveal-bay">${state.replay.reveals.map(item=>`<div class="reveal-card"><div class="reveal-flip"><div class="reveal-side reveal-back">${cardBackMarkup()}</div><div class="reveal-side reveal-front">${cardFace(item.card)}</div></div><small>${escapeHtml(g.players.find(p=>p.id===item.playerId)?.name||item.name||'Player')}</small></div>`).join('')}</div>`:''}
  ${rowChoice?`<section class="row-choice-bay ${choosingRow?'is-your-choice':'is-waiting'}" aria-labelledby="rowChoiceTitle" aria-live="polite">
    <div class="row-choice-header">
      <div class="row-choice-card">${cardFace(rowChoice.card)}</div>
      <div class="row-choice-copy"><span class="row-choice-eyebrow">${choosingRow?'YOUR LOW CARD':'ROW CHOICE'}</span><h2 id="rowChoiceTitle">${choosingRow?'Choose a row to collect':`#${escapeHtml(choicePlayer?.name||'Player')} waiting for a row choice`}</h2><p>${choosingRow?'Pick the row of bullheads you want to take.':`${escapeHtml(choicePlayer?.name||'The player')} is choosing which row to collect.`}</p></div>
    </div>
    <div class="row-choice-options" role="group" aria-label="Choose a row">
      ${g.rows.map((row,i)=>{const penalty=row.reduce((sum,n)=>sum+bulls(n),0);return `<button class="row-choice-option" data-row-choice="${i}" aria-label="Row ${i+1}, take ${penalty} ${penalty===1?'bullhead':'bullheads'}" ${choosingRow?'':'disabled'}><span class="row-choice-option-top"><b>ROW ${String(i+1).padStart(2,'0')}</b><strong class="row-choice-penalty bull-counter-badge" aria-hidden="true"><span>${penalty}</span>${bullIconMarkup()}</strong></span><span class="row-choice-preview" aria-hidden="true">${row.map(n=>`<i>${n}</i>`).join('')}</span><span class="row-choice-action">${choosingRow?'Take row':'Waiting'} <b aria-hidden="true">→</b></span></button>`;}).join('')}
    </div>
  </section>`:''}
  <div class="game-bottom"><section class="hand-area" data-player-id="${escapeHtml(me.id)}"><div class="hand-heading"><h2><span class="your-avatar">${playerAvatar(me,0)}</span> Your hand <span class="my-score" aria-label="Your score: ${me.total||0} bullheads"><b>${me.total||0}</b>${bullIconMarkup()}</span>${online?`<span class="hand-reaction-control"><button type="button" class="hand-reaction-trigger" aria-label="Open reactions" aria-expanded="false">☺</button><span class="hand-reaction-picker" role="group" aria-label="Choose a reaction" hidden>${roomReactions.map(emoji=>`<button type="button" class="hand-reaction-option" data-reaction="${emoji}" aria-label="Send ${emoji} reaction">${emoji}</button>`).join('')}</span></span>`:''}</h2><span>${submitted?'PICK LOCKED IN':'PICK YOUR CARD'}</span></div><div class="hand" role="group" aria-label="Your cards">${visibleHand.map((n,i)=>`<button class="hand-card ${state.selected===n?'selected':''}" style="--hand-index:${i}" data-card="${n}" aria-label="Card ${n}, ${bulls(n)} bullheads${state.selected===n?', selected':''}" aria-pressed="${state.selected===n}" ${!choosing||submitted||state.animating?'disabled':''}>${cardFace(n)}</button>`).join('')}</div></section><aside class="turn-side"><div class="turn-state ${submitted?'done':online?'waiting':''}">${submitted?'PICK LOCKED IN':online?'EVERYONE PICKS AT ONCE':'YOUR TURN'}</div><p class="turn-message">${submitted?(online?'Waiting for the other players…':'Your card is away. Let’s see where it lands.'):'Pick a card and dodge those bullheads.'}</p><button id="playCard" class="primary-button play-button" ${state.selected===null||submitted||!choosing||state.animating?'disabled':''}>Play card <span>↗</span></button><div class="turn-help">${state.lastReveal?.length?renderLastReveal(g.lastReveal,me.id):'Lowest bigger card wins the row.'}</div></aside></div></section>`);
  bindPress('[data-card]',(_,btn)=>{if(btn.getAttribute('aria-disabled')==='true')return;state.selected=+btn.dataset.card;renderGame();});
  bindPress('#playCard',()=>{if(state.selected!=null&&!state.animating){if(state.mode==='local')submitLocal(state.selected);else sendPick(state.selected)}});bindPress('[data-row-choice]',(_,button)=>chooseRow(+button.dataset.rowChoice));bindPress('.hand-reaction-trigger',(_,button)=>{const picker=button.nextElementSibling;const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));picker.hidden=!open;button.closest('.hand-reaction-control')?.classList.toggle('is-expanded',open);});bindPress('.hand-reaction-option',(_,button)=>sendReaction(button.dataset.reaction));if(g.phase==='countdown')updateCountdownDisplay(g);else{clearInterval(state.countdownInterval);state.countdownInterval=null;}animateStagedCards();if(state.replay?.active)runRevealAnimation();
}
function renderLastReveal(reveal,myId){const mine=reveal.find(x=>x.playerId===myId);if(!mine)return reveal.map(x=>`${escapeHtml(x.name)} played ${x.card}${x.penalty?` and took ${x.penalty} bulls`:''}`).join(' · ');return `${mine.penalty?`You took ${mine.penalty} bullheads.`:`Your ${mine.card} landed in row ${mine.rowIndex+1}.`} ${reveal.length>1?reveal.filter(x=>x.playerId!==myId).map(x=>`${escapeHtml(x.name)} ${x.penalty?`took ${x.penalty} bulls`:`played ${x.card}`}`).join(' · '):''}`;}
function renderResult(){document.body.classList.add('match-mode');state.screen='result';renderTopbar();const ordered=state.game.players.slice().sort((a,b)=>a.total-b.total);const winner=ordered[0];renderMarkup(app,`<section class="result-screen"><div class="result-mark">🏆</div><div class="eyebrow">THAT’S A WRAP</div><h1>${winner.id===state.clientId?'You kept your cool!':`${escapeHtml(winner.name)} takes it!`}</h1><p>Fewest bullheads at the table. A suspiciously good run.</p><div class="final-scores">${ordered.map((p,i)=>`<div class="final-score"><span>${i===0?'✳ ':''}${escapeHtml(p.name)}${p.id===state.clientId?' (you)':''}</span><b aria-label="${p.total} bullheads">${p.total}${bullIconMarkup()}</b></div>`).join('')}</div><button class="primary-button lobby-start" id="playAgain">Play again ↗</button><button class="pill-button" id="backHome">Back to table</button></section>`);bindPress('#playAgain',()=>{const online=state.mode.startsWith('online');if(online){if(state.host){state.players.forEach(p=>{p.score=0;p.total=0});startOnlineGame();}else say('Ask the host to start another game.');}else startLocal();});bindPress('#backHome',leaveToHome);}
function cleanupPeer(){if(state.peer){try{state.peer.destroy()}catch{}}clearTimeout(state.countdownTimer);clearInterval(state.countdownInterval);clearTimeout(state.reconnectTimer);clearTimeout(state.peerReconnectTimer);clearTimeout(state.disconnectAdvanceTimer);document.querySelectorAll('.flying-card,.flying-back').forEach(node=>node.remove());state.animating=false;state.replay=null;state.replayKey=null;state.revealOrigins={};state.stageSeen=new Set();state.stageTurnKey=null;state.reactionCooldowns.clear();state.recoveringGuest=false;state.resumeToken=null;state.peer=null;state.connection=null;state.connections.clear();state.host=false;state.clientId=null;state.roomId='';state.players=[];history.replaceState({},'',location.pathname);}
function leaveToHome(){if(state.host)localStorage.removeItem(hostSaveKey);localStorage.removeItem(guestSessionKey);cleanupPeer();state.screen='home';state.game=null;state.selected=null;state.tab='rooms';state.screenTransition=true;renderHome();}
