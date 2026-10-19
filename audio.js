const preferenceKey = 'take5-sound-enabled';
const soundFiles = {
  tap: { src: 'assets/audio/click1.wav', volume: 0.12 },
  select: { src: 'assets/audio/click2.wav', volume: 0.17 },
  card: { src: 'assets/audio/click3.wav', volume: 0.2 },
  deal: { src: 'assets/audio/rollover1.wav', volume: 0.13 },
  row: { src: 'assets/audio/click1.wav', volume: 0.2 }
};

let enabled = localStorage.getItem(preferenceKey) !== 'false';
let context;
let ambientGain;
let ambientDesired = false;
let musicTimer;
const players = new Set();
const soundCache = new Map();

const homeMelody = [523.25, null, 659.25, 783.99, null, 659.25, 587.33, null, 523.25, null, 392, 523.25, null, 587.33, 523.25, null];
const musicStep = 0.42;
const musicLoop = homeMelody.length * musicStep;

function getContext() {
  if (context) return context;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  context = new AudioContextClass();
  ambientGain = context.createGain();
  ambientGain.gain.value = 0;
  ambientGain.connect(context.destination);
  return context;
}

function playNote(frequency, start, duration, volume = 0.22, type = 'sine') {
  if (!context || !ambientGain || !frequency) return;
  const oscillator = context.createOscillator();
  const envelope = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  envelope.gain.setValueAtTime(0.0001, start);
  envelope.gain.linearRampToValueAtTime(volume, start + 0.035);
  envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(envelope);
  envelope.connect(ambientGain);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

function scheduleHomeMusic() {
  if (!enabled || !ambientDesired || !context || context.state !== 'running') return;
  const startsAt = context.currentTime + 0.08;
  homeMelody.forEach((frequency, index) => {
    if (frequency) playNote(frequency, startsAt + index * musicStep, 0.3, 0.2, 'sine');
  });
  [0, 4, 8, 12].forEach((step, index) => playNote([261.63, 196, 220, 196][index], startsAt + step * musicStep, 0.6, 0.09, 'triangle'));
  musicTimer = setTimeout(() => { musicTimer = null; scheduleHomeMusic(); }, musicLoop * 1000);
}

function updateAmbience() {
  if (!enabled || !ambientDesired || !context || !ambientGain) return;
  ambientGain.gain.cancelScheduledValues(context.currentTime);
  ambientGain.gain.setTargetAtTime(0.08, context.currentTime, 1.2);
  if (!musicTimer) scheduleHomeMusic();
}

export function unlockAudio() {
  if (!enabled) return;
  const audioContext = getContext();
  if (audioContext?.state === 'suspended') audioContext.resume().catch(() => {});
  updateAmbience();
}

export function setAmbient(active) {
  ambientDesired = active;
  if (!active) { clearTimeout(musicTimer); musicTimer = null; }
  if (!context || !ambientGain) return;
  ambientGain.gain.cancelScheduledValues(context.currentTime);
  ambientGain.gain.setTargetAtTime(enabled && active ? 0.08 : 0, context.currentTime, active ? 1.2 : 0.35);
  if (enabled && active) scheduleHomeMusic();
}

export function playSound(name) {
  if (!enabled) return;
  const sound = soundFiles[name];
  if (!sound) return;
  const base = soundCache.get(name) || new Audio(sound.src);
  base.preload = 'auto';
  soundCache.set(name, base);
  const player = base.cloneNode();
  player.volume = sound.volume;
  players.add(player);
  player.addEventListener('ended', () => players.delete(player), { once: true });
  player.play().catch(() => players.delete(player));
}

export function isSoundEnabled() {
  return enabled;
}

export function toggleSound() {
  enabled = !enabled;
  localStorage.setItem(preferenceKey, String(enabled));
  if (enabled) {
    unlockAudio();
    updateAmbience();
  } else {
    players.forEach(player => { player.pause(); player.currentTime = 0; });
    players.clear();
    clearTimeout(musicTimer);
    musicTimer = null;
    if (context && ambientGain) {
      ambientGain.gain.cancelScheduledValues(context.currentTime);
      ambientGain.gain.setTargetAtTime(0, context.currentTime, 0.12);
    }
  }
  return enabled;
}
