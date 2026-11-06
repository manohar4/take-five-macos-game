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
    status: 'coming-soon',
    route: null,
    description: 'Complete challenging phases and race to be the first to finish.',
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

export const featuredGame = games.find(game => game.status === 'available');

export function gameStatusBadge(game) {
  return `<span class="game-status game-status--${game.status}">${game.status === 'available' ? 'Available now' : 'Coming soon'}</span>`;
}

export function gameArtwork(game) {
  if (game.artwork === 'take5') return `<div class="game-art game-art--take5"><span class="game-art-card game-art-card--one" aria-hidden="true"></span><span class="game-art-card game-art-card--two" aria-hidden="true"></span><span class="game-art-card game-art-card--three" aria-hidden="true"></span><span class="game-art-bull">♞</span></div>`;
  if (game.artwork === 'phase10') return `<div class="game-art game-art--phase10"><span class="phase-orb phase-orb--blue">7</span><span class="phase-orb phase-orb--red">10</span><span class="phase-orb phase-orb--gold">★</span><span class="phase-run">4 · 5 · 6 · 7</span></div>`;
  return `<div class="game-art game-art--splendor"><span class="gem gem--emerald"></span><span class="gem gem--ruby"></span><span class="gem gem--sapphire"></span><span class="splendor-crown">♛</span></div>`;
}

export function GameCard(game) {
  const available = game.status === 'available';
  return `<article class="game-card game-card--${game.id}" ${available ? `data-game-tile="play" role="button" tabindex="0" aria-label="Play ${game.name}"` : ''}>
    ${gameArtwork(game)}
    <div class="game-card-copy">
      <div class="game-card-meta"><span>${game.category}</span>${gameStatusBadge(game)}</div>
      <h3>${game.name}</h3>
      <p>${game.description}</p>
      <button class="game-card-action" data-game-action="${available ? 'play' : 'soon'}" data-game-id="${game.id}" ${available ? '' : 'aria-disabled="true"'}>${available ? 'Play now' : 'Coming soon'} <span>→</span></button>
    </div>
  </article>`;
}

export function GameLibrary() {
  return games.map(GameCard).join('');
}
