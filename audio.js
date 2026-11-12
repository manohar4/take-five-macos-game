const preferenceKey='take5-sound-enabled';
let enabled=true;
try{enabled=localStorage.getItem(preferenceKey)!=='false'}catch{}
let context,master;
const active=new Set(),buffers=new Map(),lastPlayed=new Map();
const recordings={
 select:{url:new URL('./assets/audio/card-place-1.wav',import.meta.url).href,gain:.17},
 card:{url:new URL('./assets/audio/card-place-2.wav',import.meta.url).href,gain:.32},
 deal:{url:new URL('./assets/audio/card-fan.wav',import.meta.url).href,gain:.25},
 row:{url:new URL('./assets/audio/card-fan.wav',import.meta.url).href,gain:.28},
 land:{url:new URL('./assets/audio/card-place-1.wav',import.meta.url).href,gain:.25}
};
function audioContext(){
 if(context)return context;
 try{const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;context=new C();master=context.createGain();master.gain.value=enabled ? .65 : 0;master.connect(context.destination);}catch{return null}
 return context;
}
function track(source){active.add(source);source.onended=()=>{active.delete(source);source.disconnect();};return source;}
function preload(name){
 if(buffers.has(name))return buffers.get(name);
 const ctx=audioContext(),recording=recordings[name];if(!ctx||!recording)return Promise.resolve(null);
 const promise=fetch(recording.url).then(r=>{if(!r.ok)throw Error('Audio unavailable');return r.arrayBuffer()}).then(data=>ctx.decodeAudioData(data)).catch(()=>null);
 buffers.set(name,promise);return promise;
}
// A short, rounded wooden tick for controls, rather than an electronic click.
function tap(){
 const now=context.currentTime,length=.045,buffer=context.createBuffer(1,Math.ceil(context.sampleRate*length),context.sampleRate),data=buffer.getChannelData(0);
 for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*Math.exp(-i/(data.length*.12));
 const source=track(context.createBufferSource()),filter=context.createBiquadFilter(),gain=context.createGain();source.buffer=buffer;filter.type='lowpass';filter.frequency.value=1300;gain.gain.value=.22;source.connect(filter);filter.connect(gain);gain.connect(master);source.start(now);source.onended=()=>{active.delete(source);source.disconnect();filter.disconnect();gain.disconnect();};
}
function chime(won){
 const start=context.currentTime+.02;
 const notes=won?[523.25,659.25,783.99,1046.5]:[392,523.25,659.25];
 notes.forEach((frequency,i)=>{const time=start+i*.13;
  for(const [multiple,volume] of [[1,.15],[2,.025]]){
   const oscillator=track(context.createOscillator()),envelope=context.createGain();oscillator.type='sine';oscillator.frequency.value=frequency*multiple;
   envelope.gain.setValueAtTime(0,time);envelope.gain.linearRampToValueAtTime(volume,time+.012);envelope.gain.exponentialRampToValueAtTime(.0001,time+.8);
   oscillator.connect(envelope);envelope.connect(master);oscillator.start(time);oscillator.stop(time+.85);oscillator.onended=()=>{active.delete(oscillator);oscillator.disconnect();envelope.disconnect();};
  }
 });
}
export function unlockAudio(){
 if(!enabled)return;const ctx=audioContext();if(!ctx)return;
 if(ctx.state==='suspended')ctx.resume().catch(()=>{});
 Object.keys(recordings).forEach(preload);
}
// Keep the existing screen API; the repetitive background melody is retired.
export function setAmbient(){}
export function playSound(name){
 if(!enabled||document.hidden)return;
 const ctx=audioContext();if(!ctx||ctx.state!=='running')return;
 const now=performance.now();if(now-(lastPlayed.get(name)??-Infinity)<70)return;lastPlayed.set(name,now);
 if(name==='tap'){tap();return;}
 if(name==='win'||name==='finish'){chime(name==='win');return;}
 const recording=recordings[name];if(!recording)return;
 preload(name).then(buffer=>{
  if(!buffer||!enabled||document.hidden||ctx.state!=='running'||performance.now()-now>700)return;
  const source=track(ctx.createBufferSource()),gain=ctx.createGain();source.buffer=buffer;gain.gain.value=recording.gain;source.connect(gain);gain.connect(master);source.start();source.onended=()=>{active.delete(source);source.disconnect();gain.disconnect();};
 });
}
export function isSoundEnabled(){return enabled}
export function toggleSound(){
 enabled=!enabled;try{localStorage.setItem(preferenceKey,String(enabled))}catch{}
 if(master)master.gain.setTargetAtTime(enabled ? .65 : 0,context.currentTime,.015);
 if(enabled)unlockAudio();else{active.forEach(source=>{try{source.stop()}catch{}});active.clear();}
 return enabled;
}
