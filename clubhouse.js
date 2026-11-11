import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// The scene is presentation only. DOM controls retain selection and room logic.
let disposeScene;
export function syncClubhouse() {
  disposeScene?.();
  disposeScene = null;
  const board = document.querySelector('.match-mode:not(.lobby-mode) .rows');
  if (!board) return;
  const host = document.querySelector('.page-shell');
  const canvas = document.createElement('canvas');
  canvas.className = 'clubhouse-scene';
  canvas.setAttribute('aria-hidden', 'true');
  host.prepend(canvas);
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:false }); }
  catch { canvas.remove(); return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#211a2a');
  const camera = new THREE.OrthographicCamera(-215,215,422,-422,.1,3000);
  camera.position.set(0,0,1200);
  scene.add(new THREE.HemisphereLight('#ffe7c1','#1c284b',2.5));
  const key = new THREE.DirectionalLight('#ffce83',3.2);
  key.position.set(-250,500,800); scene.add(key);
  const fill = new THREE.PointLight('#7895ff',120000,1800);
  fill.position.set(250,-100,400); scene.add(fill);
  const resources=[];
  function box(w,h,d,color,x,y,z,r=12) {
    const geometry=new RoundedBoxGeometry(w,h,d,3,r);
    const material=new THREE.MeshStandardMaterial({color,roughness:.6,metalness:.03});
    const mesh=new THREE.Mesh(geometry,material);
    mesh.position.set(x,y,z); scene.add(mesh); resources.push(geometry,material);
    return mesh;
  }
  let frame;
  function layout() {
    scene.children.filter(o=>o.isMesh).forEach(o=>scene.remove(o));
    resources.splice(0).forEach(r=>r.dispose());
    const rect=host.getBoundingClientRect(), b=board.getBoundingClientRect();
    const w=rect.width,h=rect.height;
    renderer.setSize(w,h,false);
    camera.left=-w/2;camera.right=w/2;camera.top=h/2;camera.bottom=-h/2;camera.updateProjectionMatrix();
    const y=h/2-(b.top-rect.top+b.height/2);
    // Paneled clubhouse wall, shelves, and softly glowing wall lamps.
    for(let i=-3;i<=3;i++) box(62,h,12,i%2?'#423043':'#39293b',i*65,0,-130,3);
    box(w,11,20,'#815536',0,h/2-110,-80,3);
    for(const x of [-w*.4,w*.4]) {
      const lamp=box(32,22,16,'#ffd185',x,h/2-76,-40,8);
      lamp.material.emissive.set('#ffb54c');lamp.material.emissiveIntensity=.8;
      box(5,35,8,'#a67845',x,h/2-95,-50,2);
    }
    const rim=box(w-10,b.height+30,30,'#925c38',0,y,-10,18);
    box(w-23,b.height+17,16,'#c08a50',0,y,7,16);
    box(w-35,b.height+4,12,'#23395c',0,y,18,14);
    rim.rotation.x=.025;
    board.querySelectorAll('.row-lane').forEach(lane=>{
      const l=lane.getBoundingClientRect();
      box(w-58,2,2,'#405277',0,h/2-(l.bottom-rect.top),26,0.6);
    });
    // Real card bodies sit below the original HTML artwork. This preserves every
    // supplied face and its numbers while adding lit thickness and beveled edges.
    board.querySelectorAll('.playing-card').forEach(card=>{
      const c=card.getBoundingClientRect();
      box(c.width+2,c.height+2,5,'#f4e7ce',c.left-rect.left+c.width/2-w/2,h/2-(c.top-rect.top+c.height/2)-2,32,3);
    });
    renderer.render(scene,camera);
  }
  frame=requestAnimationFrame(layout);
  const observer=new ResizeObserver(()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(layout);});
  observer.observe(host);
  disposeScene=()=>{cancelAnimationFrame(frame);observer.disconnect();resources.forEach(r=>r.dispose());renderer.dispose();canvas.remove();};
}
