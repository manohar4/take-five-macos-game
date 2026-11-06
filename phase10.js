const COLORS = ['blue', 'green', 'red', 'yellow'];

export const PHASES = [
  '2 sets of 3', '1 set of 3 + 1 run of 4', '1 set of 4 + 1 run of 4',
  '1 run of 7', '1 run of 8', '1 run of 9', '2 sets of 4',
  '7 cards of one color', '1 set of 5 + 1 set of 2', '1 set of 5 + 1 set of 3'
];

export const MEMOJIS = ['🧑🏻', '👩🏽', '🧔🏼', '👩🏻', '🧑🏾', '👩🏼', '🧑🏽', '👨🏾'];

let nextId = 0;
const card = (value, color = null) => ({ id: `phase-card-${nextId++}`, value, color });
export const isWild = item => item.value === 'wild';
export const isSkip = item => item.value === 'skip';

export function createDeck() {
  const deck = [];
  for (let copy = 0; copy < 2; copy++) COLORS.forEach(color => {
    for (let value = 1; value <= 12; value++) deck.push(card(value, color));
  });
  for (let i = 0; i < 8; i++) deck.push(card('wild'));
  for (let i = 0; i < 4; i++) deck.push(card('skip'));
  return shuffle(deck);
}

export function shuffle(items) {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function cardPoints(item) {
  if (isWild(item)) return 25;
  if (isSkip(item)) return 15;
  return item.value >= 10 ? 10 : 5;
}

function numeric(cards) { return cards.filter(item => !isWild(item) && !isSkip(item)); }
function exact(cards, count) { return cards.length === count && !cards.some(isSkip); }
export function validSet(cards, count) {
  const values = numeric(cards).map(item => item.value);
  return exact(cards, count) && values.length > 0 && values.every(value => value === values[0]);
}
export function validRun(cards, count) {
  const values = numeric(cards).map(item => item.value);
  if (!exact(cards, count) || values.length === 0 || new Set(values).size !== values.length) return false;
  const minimum = Math.min(...values), maximum = Math.max(...values);
  return maximum - minimum < count && Math.max(1, maximum - count + 1) <= Math.min(minimum, 13 - count);
}
export function validColor(cards, count) {
  const colors = numeric(cards).map(item => item.color);
  return exact(cards, count) && colors.length > 0 && colors.every(color => color === colors[0]);
}
function choose(cards, size, start = 0, picked = [], result = []) {
  if (picked.length === size) { result.push(picked); return result; }
  for (let i = start; i <= cards.length - (size - picked.length); i++) choose(cards, size, i + 1, picked.concat(i), result);
  return result;
}
function grouped(cards, firstCount, firstValidator, secondCount, secondValidator) {
  if (cards.length !== firstCount + secondCount) return false;
  return choose(cards, firstCount).some(indices => {
    const first = indices.map(index => cards[index]);
    const second = cards.filter((_, index) => !indices.includes(index));
    return firstValidator(first, firstCount) && secondValidator(second, secondCount);
  });
}
export function phaseIsValid(phase, cards) {
  switch (phase) {
    case 1: return grouped(cards, 3, validSet, 3, validSet);
    case 2: return grouped(cards, 3, validSet, 4, validRun);
    case 3: return grouped(cards, 4, validSet, 4, validRun);
    case 4: return validRun(cards, 7);
    case 5: return validRun(cards, 8);
    case 6: return validRun(cards, 9);
    case 7: return grouped(cards, 4, validSet, 4, validSet);
    case 8: return validColor(cards, 7);
    case 9: return grouped(cards, 5, validSet, 2, validSet);
    case 10: return grouped(cards, 5, validSet, 3, validSet);
    default: return false;
  }
}

export function phase10Game(playerName, avatar) {
  const drawPile = createDeck();
  const players = [
    { id: 'phase-you', name: playerName || 'You', avatar, phase: 1, score: 0, hand: [], laid: false, phaseCards: [] },
    { id: 'phase-milo', name: 'Milo', avatar: '🦊', phase: 1, score: 0, hand: [], laid: false, phaseCards: [] },
    { id: 'phase-nora', name: 'Nora', avatar: '🐻', phase: 1, score: 0, hand: [], laid: false, phaseCards: [] },
    { id: 'phase-pip', name: 'Pip', avatar: '🐸', phase: 1, score: 0, hand: [], laid: false, phaseCards: [] }
  ];
  players.forEach(player => { player.hand = drawPile.splice(0, 10); });
  return { players, drawPile, discardPile: [drawPile.pop()], current: 0, turn: 'draw', selected: [], message: 'Draw a card to begin.', round: 1, finished: false, skipped: null };
}
