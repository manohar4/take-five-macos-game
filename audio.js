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
const players = new Set();
const soundCache = new Map();

function getContext() {
  if (context) return context;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  context = new AudioContextClass();
  ambientGain = context.createGain();
  ambientGain.gain.value = 0;
  ambientGain.connect(context.destination);
  const chord = [196, 246.94, 293.66, 392];
  chord.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const voiceGain = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    voiceGain.gain.value = index === 0 ? 0.12 : 0.075;
    oscillator.connect(voiceGain);
    voiceGain.connect(ambientGain);
    oscillator.start();
  });
  return context;
}

function updateAmbience() {
  if (!enabled || !ambientDesired || !context || !ambientGain) return;
  ambientGain.gain.cancelScheduledValues(context.currentTime);
  ambientGain.gain.setTargetAtTime(0.18, context.currentTime, 2.8);
}

export function unlockAudio() {
  if (!enabled) return;
  const audioContext = getContext();
  if (audioContext?.state === 'suspended') audioContext.resume().catch(() => {});
  updateAmbience();
}

export function setAmbient(active) {
  ambientDesired = active;
  if (!context || !ambientGain) return;
  ambientGain.gain.cancelScheduledValues(context.currentTime);
  ambientGain.gain.setTargetAtTime(enabled && active ? 0.18 : 0, context.currentTime, active ? 2.8 : 0.35);
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
    if (context && ambientGain) {
      ambientGain.gain.cancelScheduledValues(context.currentTime);
      ambientGain.gain.setTargetAtTime(0, context.currentTime, 0.12);
    }
  }
  return enabled;
}
