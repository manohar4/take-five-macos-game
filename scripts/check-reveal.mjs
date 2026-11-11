import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',headless:true});
try{
 for(const [width,height,bots]of [[390,844,1],[390,844,2],[430,932,3]]){
  const page=await browser.newPage({viewport:{width,height}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{window.revealEvents=[];window.addEventListener('clubhouse-reveal',e=>window.revealEvents.push(e.detail));});
  await page.goto('http://127.0.0.1:5173/');await page.locator('[data-game-action="play"][data-game-id="take-5"]').first().click();await page.locator('#botsTab').click({force:true});await page.locator('#botCount').selectOption(String(bots));await page.locator('#startBots').click();
  await page.locator('.clubhouse-scene').waitFor();assert.equal(await page.locator('canvas').getAttribute('data-opponents'),String(bots));
  await page.waitForFunction(()=>Number(document.querySelector('canvas')?.dataset.textures)>=14);
  const points=JSON.parse(await page.locator('canvas').getAttribute('data-hand-targets'));await page.mouse.click(points[5].x,points[5].y);await page.locator('#playCard').click();
  const staged=await page.waitForFunction(count=>{const raw=document.querySelector('canvas')?.dataset.stagePlayers;const ids=raw?JSON.parse(raw):[];return ids.length===count?ids:null;},bots+1);assert.equal((await staged.jsonValue()).length,bots+1);
  assert.equal(await page.locator('.stage-zone').isVisible(),false);
  await page.screenshot({path:`artifacts/clubhouse/ready-${bots}.png`});
  for(let i=0;i<60;i++){if(await page.evaluate(()=>window.revealEvents.some(e=>e.phase==='complete')))break;const choose=page.locator('.row-choice-option').first();if(await choose.isVisible())await choose.click();await page.waitForTimeout(250);}
  const events=await page.evaluate(()=>window.revealEvents);assert.equal(events[0]?.phase,'flipping');const moved=events.filter(e=>e.phase==='moving').map(e=>e.card);assert.equal(moved.length,bots+1);assert.deepEqual(moved,[...moved].sort((a,b)=>a-b));assert(events.some(e=>e.phase==='complete'));
  await page.waitForTimeout(300);assert.equal(await page.locator('.hand-card').count(),9);assert.deepEqual(errors,[]);console.log(`${bots} opponents: exact character count, owner stages, flip, sorted direct placement, next turn passed`);await page.close();
 }
}finally{await browser.close();}
