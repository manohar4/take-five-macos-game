export const games = [
  {
    id: 'take-5',
    name: 'Take 5',
    category: 'Card game',
    status: 'available',
    route: 'take-5',
    description: 'A clever card game where every move counts. Avoid the bulls!',
    featuredDescription: 'Think ahead, play your cards, and avoid collecting the bulls!',
    artwork: 'take5'
  },
  {
    id: 'phase-10',
    name: 'Phase 10',
    category: 'Card game',
    status: 'available',
    route: 'phase-10',
    description: 'Build sets, make runs, and race through all ten phases.',
    artwork: 'phase10'
  },
  {
    id: 'splendor',
    name: 'Splendor',
    category: 'Strategy game',
    status: 'coming-soon',
    route: null,
    description: 'Collect precious gems, build your empire, and earn prestige.',
    artwork: 'splendor'
  }
];

const tileArt={
  'take-5':'<i class="arcade-card take-one">16</i><i class="arcade-card take-two">55</i><i class="arcade-card take-three">22</i>',
  'phase-10':'<i class="arcade-card phase-one">7</i><i class="arcade-card phase-two">8</i><i class="arcade-card phase-three">9</i>',
  splendor:'<span class="arcade-gem">◆</span>'
};

export function GameLibrary(){
  const playable=games.filter(game=>game.status==='available');
  const upcoming=games.filter(game=>game.status!=='available');
  return playable.map(game=>`<button type="button" class="arcade-tile arcade-${game.id}" data-game-action="play" data-game-id="${game.id}" aria-label="Play ${game.name}">
    <span class="arcade-art" aria-hidden="true">${tileArt[game.id]}</span>
    <span class="arcade-title">${game.name}</span><span class="arcade-play" aria-hidden="true">Play</span>
  </button>`).join('')+upcoming.map(game=>`<p class="arcade-soon"><span aria-hidden="true">${tileArt[game.id]}</span> ${game.name} <small>Coming soon</small></p>`).join('');
}
