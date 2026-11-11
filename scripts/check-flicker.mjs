import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',headless:true});
try{for(const [width,height]of [[390,844],[430,932]]){
 const page=await browser.newPage({viewport:{width,height}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173/');await page.locator('[data-game-action="play"][data-game-id="take-5"]').first().click();await page.locator('#botsTab').click({force:true});await page.locator('#startBots').click();
 await page.waitForFunction(()=>document.querySelector('.clubhouse-scene')?.dataset.presented==='true');
 await page.evaluate(()=>{window.blankFrames=0;window.monitorFrames=true;function sample(){if(!window.monitorFrames)return;const visible=[...document.querySelectorAll('.clubhouse-scene')].some(c=>c.dataset.presented==='true'&&Number(getComputedStyle(c).opacity)>0);if(!visible)window.blankFrames++;requestAnimationFrame(sample);}requestAnimationFrame(sample);window.initialGameCanvas=document.querySelector('.clubhouse-scene');});
 for(const index of [2,4,6,3]){const targets=JSON.parse(await page.locator('.clubhouse-scene').getAttribute('data-hand-targets'));await page.mouse.click(targets[index].x,targets[index].y);await page.waitForTimeout(250);assert(await page.evaluate(()=>document.querySelector('.clubhouse-scene')===window.initialGameCanvas));}
 await page.locator('#playCard').click();
 for(let i=0;i<45;i++){const choose=page.locator('.row-choice-option').first();if(await choose.isVisible())await choose.click();await page.waitForTimeout(250);}
 assert.equal(await page.evaluate(()=>window.blankFrames),0,'Every animation frame must have a presented game canvas');
 assert.deepEqual(errors,[]);await page.evaluate(()=>window.monitorFrames=false);console.log(`${width}x${height}: selection preserves canvas; zero blank frames through Play and reveal`);await page.close();
}}finally{await browser.close();}
