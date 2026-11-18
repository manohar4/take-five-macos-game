import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

export function playground(canvas){
 let r;
 try{r=new T.WebGLRenderer({canvas,antialias:true,alpha:true});}catch{return {table(){},destroy(){}};}
 r.setPixelRatio(Math.min(devicePixelRatio,1.7));r.toneMapping=T.ACESFilmicToneMapping;r.toneMappingExposure=1.55;
 const scene=new T.Scene();scene.background=new T.Color('#153a4a');scene.fog=new T.Fog('#236271',18,36);
 const camera=new T.PerspectiveCamera(36,1,.1,50);camera.position.set(0,8.6,12.3);camera.lookAt(0,1.2,0);
 scene.add(new T.HemisphereLight('#ffe5bd','#57403f',1.7));
 const key=new T.DirectionalLight('#ffdc9a',3.5);key.position.set(-4,8,3);scene.add(key);
 const fill=new T.DirectionalLight('#88b8ff',.92);fill.position.set(4,3,-6);scene.add(fill);
 const mat=color=>new T.MeshStandardMaterial({color,roughness:.58});
 const wood=mat('#8c4b34'),rim=mat('#f2ad61'),felt=mat('#116c70'),inner=mat('#21777a'),dark=mat('#162943');
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
 // A stylized canopy around the table: cool distant trunks and golden leaf tips.
 box(30,11,.4,mat('#246574'),0,3,-8.4);
 const trunks=['#2b6570','#2d7c76','#37857f','#427e64'].map(mat);
 const leaves=['#508c58','#276e60','#419d75','#b3c46f'].map(mat);
 for(let i=0;i<11;i++){
  const x=(i-5)*1.24,base=-7.6+(i%3)*.36;
  const trunk=box(.38+(i%3)*.10,10,.46,trunks[i%4],x,3.1,base);
  trunk.rotation.z=Math.sin(i*2)*.25;
 }
 for(const sign of [-1,1]){
  for(let i=0;i<8;i++){
   const branch=ball(leaves[i%4],sign*(3.2+(i%3)*.48),3.6+(i%4)*.68,-4.8-(i%3)*.43,1.25,.16,.45);
   branch.rotation.z=sign*(.25-(i%4)*.19);
  }
  for(let i=0;i<4;i++){
   const leaf=ball(leaves[i],sign*(3.9+i*.18),.24+i*.19,-3.9,.49,.22,.31);
   leaf.rotation.z=sign*(.3+i*.18);
  }
 }
 oval(3.5,.48,wood,-.26);oval(3.47,.17,rim,.06);oval(3.23,.1,felt,.18);oval(3,.025,inner,.24);
 function release(root){
  const materials=new Set(),geometry=new Set();
  root.traverse(o=>{if(o.geometry)geometry.add(o.geometry);if(o.material)materials.add(o.material);});
  geometry.forEach(g=>g.dispose());
  materials.forEach(m=>m.dispose());
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
   const firstMeld=seats?.querySelector('.p10-seat-inspect');
   const top=(firstMeld?.getBoundingClientRect().top??rect.top)-origin.top;
   if(top<h&&rect.bottom>origin.top){
    const footprint={left:3,right:w-3,top:Math.max(-20,top-8),bottom:Math.min(h+32,rect.bottom-origin.top+7)};
    deckSlab(footprint,.27,rail,0,22);
    deckSlab(footprint,.075,edge,2,20,.29);
    deckSlab(footprint,.035,felt,7,17,.31);
    for(const element of layout.parentElement.querySelectorAll('.p10-piles .p10-back,.p10-piles .p10-face,[data-laid-card] .p10-face,.p10-seat-preview .p10-face')){
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
 return {table(element){
  if(layout)observer.unobserve(layout);
  layout=element;
  if(layout)observer.observe(layout);
  canvas.parentElement.classList.toggle('has-world-table',!!layout);
  requestRender();
 },destroy(){cancelAnimationFrame(frame);observer.disconnect();panel?.removeEventListener('scroll',requestRender,true);release(scene);[rail,edge,stock].forEach(m=>m.dispose());r.dispose();}};
}
