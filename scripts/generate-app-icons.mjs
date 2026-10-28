import { readFile, writeFile } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const appIcon = await readFile('assets/app-icon.svg', 'utf8');
const bullhead = await readFile('assets/bullhead.svg', 'utf8');
const path = bullhead.match(/<path\s+fill="([^"]+)"\s+d="([^"]+)"/);
if (!path) throw new Error('Could not find the bullhead path for the app icon.');

const foreground = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="${path[1]}" transform="translate(66 108) scale(1.48)" d="${path[2]}"/></svg>`;
const iconMarkup = [...appIcon.matchAll(/<path\s+fill="([^"]+)"\s+d="([^"]+)"\s*\/>/g)]
  .map(([, fill, d]) => `<path fill="${fill}" d="${d}"/>`).join('');
const splashSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="2732" height="2732" viewBox="0 0 2732 2732"><rect width="2732" height="2732" fill="#0e5731"/><g transform="translate(962 962) scale(1.58)"><circle cx="256" cy="256" r="198" fill="#ffd84e"/>${iconMarkup}</g></svg>`;
const render = (svg, width) => new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng();
const appPng = render(appIcon, 1024);
const foregroundPng = render(foreground, 512);
const splashPng = render(splashSvg, 2732);

await writeFile('ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png', appPng);
await Promise.all([
  writeFile('mobile/assets/icon.png', appPng),
  writeFile('mobile/assets/splash-icon.png', appPng),
  writeFile('mobile/assets/android-icon-foreground.png', foregroundPng),
]);
for (const file of ['splash-2732x2732.png', 'splash-2732x2732-1.png', 'splash-2732x2732-2.png']) {
  await writeFile(`ios/App/App/Assets.xcassets/Splash.imageset/${file}`, splashPng);
}

for (const [density, pixels] of [['mdpi', 48], ['hdpi', 72], ['xhdpi', 96], ['xxhdpi', 144], ['xxxhdpi', 192]]) {
  const folder = `android/app/src/main/res/mipmap-${density}`;
  await Promise.all([
    sharp(appPng).resize(pixels, pixels).png().toFile(`${folder}/ic_launcher.png`),
    sharp(appPng).resize(pixels, pixels).png().toFile(`${folder}/ic_launcher_round.png`),
    sharp(foregroundPng).resize(pixels, pixels).png().toFile(`${folder}/ic_launcher_foreground.png`),
  ]);
}

const splashTargets = [
  ['drawable/splash.png', 480, 320],
  ['drawable-port-mdpi/splash.png', 320, 480],
  ['drawable-port-hdpi/splash.png', 480, 800],
  ['drawable-port-xhdpi/splash.png', 720, 1280],
  ['drawable-port-xxhdpi/splash.png', 960, 1600],
  ['drawable-port-xxxhdpi/splash.png', 1280, 1920],
  ['drawable-land-mdpi/splash.png', 480, 320],
  ['drawable-land-hdpi/splash.png', 800, 480],
  ['drawable-land-xhdpi/splash.png', 1280, 720],
  ['drawable-land-xxhdpi/splash.png', 1600, 960],
  ['drawable-land-xxxhdpi/splash.png', 1920, 1280],
];
await Promise.all(splashTargets.map(async ([file, width, height]) => {
  await sharp(splashPng).resize(width, height, { fit: 'contain', background: '#0e5731' }).flatten({ background: '#0e5731' }).png().toFile(`android/app/src/main/res/${file}`);
}));
