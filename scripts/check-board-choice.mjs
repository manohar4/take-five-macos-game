import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',headless:true});
let verified=false;
try{for(let attempt=1;attempt<=8&&!verified;attempt++){
 const page=await browser.newPage({viewport:{width:390,height:844}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173/');await page.locator('[data-game-action="play"][data-game-id="take-5"]').first().click();await page.locator('#botsTab').click({force:true});await page.locator('#botCount').selectOption('1');await page.locator('#startBots').click();
 await page.waitForFunction(()=>document.querySelector('canvas')?.dataset.presented==='true');const points=JSON.parse(await page.locator('canvas').getAttribute('data-hand-targets'));await page.mouse.click(points[0].x,points[0].y);await page.locator('#playCard').click();
 await page.waitForTimeout(2600);const mode=await page.locator('canvas').first().getAttribute('data-row-choice');if(mode!=='own'){await page.close();continue;}
 assert.equal(await page.locator('.row-choice-bay').isVisible(),false);assert.equal(await page.locator('.clubhouse-board-choice').count(),4);
 await page.screenshot({path:'artifacts/clubhouse/board-row-choice.png'});
 const rows=JSON.parse(await page.locator('canvas').getAttribute('data-row-targets'));await page.mouse.click(rows[1].x,rows[1].y);
 await page.waitForFunction(()=>document.querySelector('canvas')?.dataset.rowChoice==='none');assert.deepEqual(errors,[]);console.log('Direct row raycast selection resumes play; old panel hidden; four penalty controls visible');verified=true;
 await page.evaluate(async()=>{const {setClubhouseGame,syncClubhouse}=await import('/clubhouse.js');setClubhouseGame({players:[{id:'self',name:'You',hand:[]},{id:'other',name:'Milo',hand:[]}],rows:[[10],[20],[30],[40]],round:1,turn:9,phase:'row-choice',pendingRowChoice:{playerId:'other',card:1},selections:{other:1}},'self',false);syncClubhouse();});
 await page.waitForFunction(()=>document.querySelector('canvas')?.dataset.rowChoice==='waiting'&&document.querySelector('canvas')?.dataset.presented==='true');assert.equal(await page.locator('.clubhouse-board-choice').count(),0);assert.match(await page.locator('.clubhouse-player-label.is-picking').textContent(),/Milo.*Picking a row/);console.log('Remote chooser annotation visible; spectators cannot choose a row');await page.close();
}assert(verified,'Could not encounter a local low-card row choice');}finally{await browser.close();}
