import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',headless:true});
try{for(const [width,height]of [[390,844],[430,932]]){
 const page=await browser.newPage({viewport:{width,height}});await page.addInitScript(()=>{window.completedReveals=0;window.addEventListener('clubhouse-reveal',e=>{if(e.detail.phase==='complete')window.completedReveals++;});});
 await page.goto('http://127.0.0.1:5173/');await page.locator('[data-game-action="play"][data-game-id="take-5"]').first().click();await page.locator('#botsTab').click({force:true});await page.locator('#startBots').click();
 for(let turn=0;turn<3;turn++){
  await page.waitForFunction(n=>{const raw=document.querySelector('.clubhouse-scene')?.dataset.handLayout;return raw&&JSON.parse(raw).length===n;},10-turn);
  await page.waitForTimeout(400);
  const layout=JSON.parse(await page.locator('.clubhouse-scene').getAttribute('data-hand-layout'));
  for(let i=1;i<layout.length;i++){assert(Math.abs(layout[i].x-layout[i-1].x-.16)<.0001);assert(Math.abs(layout[i].z-layout[i-1].z-.04)<.0001);}
  const targets=JSON.parse(await page.locator('.clubhouse-scene').getAttribute('data-hand-targets'));await page.mouse.click(targets[4].x,targets[4].y);await page.locator('#playCard').click();
  for(let i=0;i<65;i++){if(await page.evaluate(t=>window.completedReveals>=t,turn+1))break;const choice=page.locator('.row-choice-option').first();if(await choice.isVisible())await choice.click();await page.waitForTimeout(250);}
  assert.equal(await page.evaluate(()=>window.completedReveals),turn+1);await page.waitForTimeout(300);
 }
 await page.screenshot({path:`artifacts/clubhouse/hand-after-three-${width}.png`});console.log(`${width}x${height}: even spacing and strict depth order across three played cards passed`);await page.close();
}}finally{await browser.close();}
