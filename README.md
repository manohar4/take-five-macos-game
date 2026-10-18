# Take 5!

A browser version of the Take 5 / 6 nimmt! card game. It has solo play against bots and private-hand online rooms.

## Play locally

Install the dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

Then open the local URL printed by Vite (usually <http://localhost:5173>). The game buttons and icons use React Native Web.

## Play online with friends

Publish the built `dist/` folder to a static HTTPS host, then open the hosted page, choose **Host online**, and share the invite link. Friends open the link, choose a name, and join the room. The host can start alone; a bot joins automatically if no other player has joined. The game uses PeerJS for WebRTC signaling and sends game data directly between the host and players. An internet connection and a host browser tab that stays open are required. No game account or application server is required.

Online rooms currently support up to 10 total players, including optional bots. Room invites use a 4-digit code. The host owns the game state; each player only receives their own hand. The room code is not a password, so share it only with the people you want at the table.

## Deploy on Render

The included `render.yaml` configures a Render Static Site. Render installs the locked npm dependencies, builds with Vite, copies the card assets, and publishes `dist/`. Push to the connected GitHub branch and Render will redeploy automatically.

## Rules in this version

- Each player receives 10 cards. Four cards seed the rows.
- Everyone selects one card each turn. Played cards are resolved in ascending order.
- A card goes after the closest smaller card. If it is smaller than every row, its player takes a row and starts it again.
- Adding the sixth card to a row means taking the five cards already there; the new card starts the row.
- Bullheads add to a player's score: most cards are worth 1, multiples of 5 are worth 2, multiples of 10 are worth 3, multiples of 11 are worth 5, and 55 is worth 7.
- A hand lasts 10 turns. The game ends after a hand when a player has at least 66 bullheads; the lowest total wins.
