import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
const browser=await chromium.launch({executablePath:'/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',headless:true,args:['--enable-webgl','--use-gl=angle']});
await mkdir('artifacts/clubhouse',{recursive:true});
try {
  for(const [width,height] of [[390,844],[430,932]]) {
    const page=await browser.newPage({viewport:{width,height}});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.goto(process.env.GAME_URL||'http://127.0.0.1:5173/');
    await page.locator('[data-game-action="play"][data-game-id="take-5"]').first().click();
    await page.locator('#botsTab').click();
    await page.locator('#startBots').click();
    await page.locator('.clubhouse-scene').waitFor();
    await page.waitForTimeout(700);
    assert.equal(await page.locator('.rows .row-lane').count(),4);
    assert.equal(await page.locator('.hand-card').count(),10);
    const first=page.locator('.hand-card').first();
    await first.click();
    assert.equal(await page.locator('.hand-card.selected').count(),1);
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
    assert.equal(overflow,false,'page must not overflow horizontally');
    const button=await page.locator('#playCard').boundingBox();
    assert(button && button.y+button.height<=height,'Play must remain visible');
    for(const c of await page.locator('.hand-card').all()) {
      const bounds=await c.boundingBox();
      assert(bounds.y+bounds.height<=height,'Hand card must remain above the bottom edge');
    }
    assert.equal(errors.length,0,errors.join('\n'));
    await page.screenshot({path:`artifacts/clubhouse/${width}x${height}.png`});
    await page.locator('#playCard').click();
    await page.waitForTimeout(4500);
    assert.equal(await page.locator('.hand-card').count(),9,'Playing a card advances the hand');
    console.log(`${width}x${height}: four rows, ten cards, selection, Play visibility and overflow passed`);
    await page.close();
  }
} finally {await browser.close();}
