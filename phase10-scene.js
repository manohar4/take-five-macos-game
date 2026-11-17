import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

export function playground(canvas){
 let r;
 try{r=new T.WebGLRenderer({canvas,antialias:true,alpha:true});}catch{return {seats(){},table(){},destroy(){}};}
 r.setPixelRatio(Math.min(devicePixelRatio,1.7));r.toneMapping=T.ACESFilmicToneMapping;r.toneMappingExposure=1.55;
 const scene=new T.Scene();scene.background=new T.Color('#23243a');scene.fog=new T.Fog('#202b49',18,36);
 const camera=new T.PerspectiveCamera(36,1,.1,50);camera.position.set(0,8.6,12.3);camera.lookAt(0,1.2,0);
 scene.add(new T.HemisphereLight('#ffe5bd','#57403f',1.7));
 const key=new T.DirectionalLight('#ffdc9a',3.5);key.position.set(-4,8,3);scene.add(key);
 const fill=new T.DirectionalLight('#88b8ff',.92);fill.position.set(4,3,-6);scene.add(fill);
 const mat=color=>new T.MeshStandardMaterial({color,roughness:.58});
 const wood=mat('#8c4b34'),rim=mat('#f2ad61'),felt=mat('#116c70'),inner=mat('#21777a'),dark=mat('#162943'),white=mat('#fff0dc'),eye=mat('#261924');
 const box=(w,h,d,m,x,y,z,parent=scene)=>{
  const result=new T.Mesh(new RoundedBoxGeometry(w,h,d,3,Math.min(.18,w/2,h/2,d/2)),m);
  result.position.set(x,y,z);parent.add(result);return result;
 };
 const ball=(m,x,y,z,a,b,c,parent=scene)=>{
  const result=new T.Mesh(new T.SphereGeometry(1,18,12),m);result.position.set(x,y,z);result.scale.set(a,b,c);parent.add(result);return result;
 };
 const showroom=new T.Group();scene.add(showroom);
 const oval=(radius,height,m,y)=>{
  const o=new T.Mesh(new T.CylinderGeometry(radius,radius,height,64),m);o.position.y=y;o.scale.z=1.14;showroom.add(o);
 };
 box(40,.28,34,wood,0,-.83,0);
 for(let x=-7;x<=7;x+=.85)box(.04,.03,22,dark,x,-.67,0);
 box(28,10,.4,mat('#303452'),0,3,-7);
 for(let x=-7;x<=7;x+=1.3)box(.045,7,.08,wood,x,2,-6.76);
 box(5,2.2,.18,wood,0,3.4,-6.7);box(4.7,1.9,.18,mat('#29446a'),0,3.4,-6.54);
 for(const side of [-1,1]){
  const lamp=mat('#ffc75c');lamp.emissive.set('#e99c40');lamp.emissiveIntensity=.7;ball(lamp,side*3.25,4.4,-4.8,.7,.3,.7);
  const pool=new T.PointLight('#ffc17b',24,9);pool.position.set(side*3.25,4.04,-4.55);scene.add(pool);
  box(.035,2,.035,rim,side*3.25,5.55,-4.8);
  for(let i=0;i<4;i++)ball(mat(['#bedc70','#70c2b3'][i%2]),side*(3.7+i*.12),-.4+i*.26,-4,.35,.2,.3);
 }
 oval(3.5,.48,wood,-.26);oval(3.47,.17,rim,.06);oval(3.23,.1,felt,.18);oval(3,.025,inner,.24);
 const figures=new T.Group();scene.add(figures);
 const palette={fox:'#ee8d34',bear:'#ae7244',frog:'#91bc47',player:'#b98563'};
 function mascot(avatar,x,scale,count){
  const body=new T.Group();figures.add(body);body.position.set(x,.14,-3.55);body.scale.setScalar(scale);
  const fur=mat(palette[avatar]||palette.player),shirt=mat(avatar==='frog'?'#d58b38':avatar==='fox'?'#166d5f':'#555b9b');
  box(1.55,1.9,.48,mat('#a65058'),0,.65,-.48,body);
  ball(shirt,0,.85,.03,.60,.70,.46,body);
  ball(fur,0,1.79,.08,.69,.58,.52,body);
  for(const s of [-1,1]){
   if(avatar==='fox'){
    const ear=new T.Mesh(new T.ConeGeometry(.24,.72,24),fur);ear.position.set(s*.48,2.3,0);ear.rotation.z=-s*.25;body.add(ear);
   }else ball(fur,s*.48,2.24,.03,.24,.25,.21,body);
   ball(white,s*.25,1.91,.51,.137,.16,.065,body);
   ball(eye,s*.24,1.90,.57,.073,.091,.034,body);
   ball(white,s*.22,1.94,.6,.024,.026,.014,body);
   const arm=ball(shirt,s*.46,.87,.37,.22,.43,.23,body);
   arm.rotation.z=s*.54;arm.rotation.x=-.35;
  }
  const visible=Math.min(count,7);
  const back=visible?mat('#235a9c'):null,line=visible?mat('#eac56f'):null;
  for(let i=0;i<visible;i++){
   const spread=i-(visible-1)/2;
   const card=new T.Group();body.add(card);card.position.set(spread*.105,1.04-Math.abs(spread)*.019,.81+i*.018);
   card.rotation.z=-spread*.135;card.rotation.x=-.15;
   box(.28,.40,.027,white,0,0,0,card);
   box(.237,.354,.009,back,0,0,.017,card);
   const mark=box(.078,.078,.008,line,0,0,.024,card);mark.rotation.z=Math.PI/4;
  }
  for(const s of [-1,1]){
   ball(fur,s*(visible ? .32 : .48),visible ? .89 : .4,visible?1.01:.59,.18,.16,.16,body);
   if(visible)ball(fur,s*.24,.97,1.1,.09,.12,.086,body);
  }
  ball(white,0,1.59,.50,.29,.17,.13,body);ball(eye,0,1.66,.62,.10,.06,.053,body);
 }
 function release(root){
  const materials=new Set(),geometry=new Set();
  root.traverse(o=>{if(o.geometry)geometry.add(o.geometry);if(o.material)materials.add(o.material);});
  geometry.forEach(g=>g.dispose());
  materials.forEach(m=>{if(root===scene||m!==white&&m!==eye)m.dispose();});
 }
 // Unproject the responsive play area onto a horizontal world plane. HTML
 // faces above it keep their original proportions and touch hit boxes.
 const board=new T.Group();scene.add(board);
 const stock=mat('#eadaba'),rail=mat('#995633'),edge=mat('#d99f65');
 const ray=new T.Raycaster(),plane=new T.Plane(new T.Vector3(0,1,0),-.25);
 let layout=null,frame=0,w=0,h=0;
 function deckSlab(bounds,depth,material,inset=0,radius=12,level=.25){
  const {left,top,right,bottom}=bounds;
  const corners=[[left+inset,top+inset],[right-inset,top+inset],[right-inset,bottom-inset],[left+inset,bottom-inset]];
  const rr=Math.max(0,Math.min(radius,(right-left-2*inset)/2,(bottom-top-2*inset)/2));
  const path=new T.Shape();
  corners.forEach(([x,y],i)=>{
   const angle=(i-2)*Math.PI/2;
   const dx=i===0||i===3?rr:-rr,dy=i<2?rr:-rr;
   for(let j=0;j<=5;j++){
    const a=angle+j*Math.PI/10;
    const px=x+dx+rr*Math.cos(a),py=y+dy+rr*Math.sin(a);
    ray.setFromCamera({x:px/w*2-1,y:1-py/h*2},camera);
    const v=ray.ray.intersectPlane(plane,new T.Vector3());
    if(!v)return;
    if(i===0&&j===0)path.moveTo(v.x,-v.z);else path.lineTo(v.x,-v.z);
   }
  });
  path.closePath();
  const slab=new T.Mesh(new T.ExtrudeGeometry(path,{depth,bevelEnabled:false,curveSegments:1}),material);
  slab.rotation.x=-Math.PI/2;slab.position.y=level-depth;board.add(slab);
 }
 function render(){
  const width=canvas.clientWidth,height=canvas.clientHeight;if(!width||!height)return;
  if(w!==width||h!==height){w=width;h=height;r.setSize(w,h,false);}
  camera.aspect=w/h;camera.zoom=Math.min(1.06,w/h*1.22);camera.updateProjectionMatrix();camera.updateMatrixWorld();
  for(const mesh of [...board.children]){mesh.geometry.dispose();board.remove(mesh);}
  showroom.visible=!layout?.isConnected;
  if(!showroom.visible){
   const origin=canvas.getBoundingClientRect(),rect=layout.getBoundingClientRect();
   const seats=layout.parentElement.querySelector('.p10-opponents');
   const firstMeld=seats?.querySelector('.p10-seat-melds');
   const top=(firstMeld?.getBoundingClientRect().top??rect.top)-origin.top;
   if(top<h&&rect.bottom>origin.top){
    const footprint={left:3,right:w-3,top:Math.max(-20,top-8),bottom:Math.min(h+32,rect.bottom-origin.top+7)};
    deckSlab(footprint,.27,rail,0,22);
    deckSlab(footprint,.075,edge,2,20,.29);
    deckSlab(footprint,.035,felt,7,17,.31);
    for(const element of layout.parentElement.querySelectorAll('.p10-piles .p10-back,.p10-piles .p10-face,[data-laid-card] .p10-face')){
     const c=element.getBoundingClientRect();
     const cx=(c.left+c.right)/2-origin.left,cy=(c.top+c.bottom)/2-origin.top;
     if(cx<12||cx>w-12||cy<footprint.top+7||cy>footprint.bottom-7)continue;
     const stack={left:c.left-origin.left-1,right:c.right-origin.left+1,top:c.top-origin.top,bottom:c.bottom-origin.top+3};
     if(element.closest('.p10-seat-melds')){
      const clip=element.closest('.p10-seat-melds').getBoundingClientRect();
      if(c.bottom>clip.bottom||c.top<clip.top||c.left<12+origin.left||c.right>origin.right-12)continue;
     }
     deckSlab(stack,element.matches('.p10-back') ? .13 : .031,stock,0,4,.34);
    }
   }
  }
  r.render(scene,camera);
 }
 function requestRender(){if(!frame)frame=requestAnimationFrame(()=>{frame=0;render();});}
 const observer=new ResizeObserver(requestRender);observer.observe(canvas);
 const panel=canvas.parentElement.querySelector('.p10-content');
 panel?.addEventListener('scroll',requestRender,{capture:true,passive:true});
 let signature='';
 return {seats(players){
  const sig=JSON.stringify(players.map(({avatar,count})=>[avatar,Math.min(count,7)]));if(sig===signature)return;signature=sig;
  release(figures);figures.clear();
  players.forEach(({avatar,count},i)=>mascot(avatar,(i-(players.length-1)/2)*Math.min(1.73,5/players.length),Math.min(1.08,3.7/players.length),count));
  render();
 },table(element){
  if(layout)observer.unobserve(layout);
  layout=element;
  if(layout)observer.observe(layout);
  canvas.parentElement.classList.toggle('has-world-table',!!layout);
  requestRender();
 },destroy(){cancelAnimationFrame(frame);observer.disconnect();panel?.removeEventListener('scroll',requestRender,true);release(scene);[rail,edge,stock].forEach(m=>m.dispose());r.dispose();}};
}
