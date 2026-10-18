# Take 5!

A browser version of the Take 5 / 6 nimmt! card game. It has solo play against bots and private-hand online rooms.

## Play locally

Serve this folder over HTTP (the page uses ES modules, so opening `index.html` directly as a file will not work):

```sh
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Play online with friends

Publish these static files to any HTTPS static host, then open the hosted page, choose **Host online**, and share the invite link. Friends open the link, choose a name, and join the room. The host starts the game after at least one other player has joined. The game uses PeerJS for WebRTC signaling and sends game data directly between the host and players. An internet connection and a host browser tab that stays open are required. No game account or application server is required.

Online rooms currently support up to 10 total players, including optional bots. Room invites use a 4-digit code. The host owns the game state; each player only receives their own hand. The room code is not a password, so share it only with the people you want at the table.

## Deploy on Render

This is a static site and needs no build step. The included `render.yaml` configures a Render Static Site that publishes the repository root. Push this folder to a GitHub, GitLab, or Bitbucket repository, then create a new Blueprint on Render from that repo. Render will publish the site and redeploy on pushes to the connected branch.

## Rules in this version

- Each player receives 10 cards. Four cards seed the rows.
- Everyone selects one card each turn. Played cards are resolved in ascending order.
- A card goes after the closest smaller card. If it is smaller than every row, its player takes a row and starts it again.
- Adding the sixth card to a row means taking the five cards already there; the new card starts the row.
- Bullheads add to a player's score: most cards are worth 1, multiples of 5 are worth 2, multiples of 10 are worth 3, multiples of 11 are worth 5, and 55 is worth 7.
- A hand lasts 10 turns. The game ends after a hand when a player has at least 66 bullheads; the lowest total wins.
