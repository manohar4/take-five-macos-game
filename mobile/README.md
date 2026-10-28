# Take 5 Friends mobile shell

This Expo app displays the existing Take 5 Friends game in a native WebView. The game stays hosted at `https://take-five-friends-game.onrender.com/`, so mobile builds use the same screens, rules, and rooms as the website. An internet connection is needed to load and play.

## Preview on a phone

Install Expo Go on the iOS or Android device, then run:

```sh
npm install
npm start
```

Scan the QR code from Expo Go while the computer and phone are on the same network.

## Cloud builds

Create or sign in to an Expo account, then run:

```sh
npx eas-cli@latest login
npm run eas:preview
```

The preview profile creates an installable Android APK and an iOS internal build. An Apple Developer account and registered device are needed to install an iOS internal build. To create App Store / Google Play release artifacts, run `npm run eas:build`. Store submission is a separate command and is not performed by these build scripts.

`app.json` points to the current Render URL. Override it by setting `EXPO_PUBLIC_GAME_URL` if the game moves to another host.
