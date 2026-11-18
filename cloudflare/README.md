# Phase 10 online play

The existing web app can stay on Render. The Cloudflare Worker uses one SQLite-backed Durable Object per private code. The server runs the same Phase 10 engine as solo play, checks each move against the seat and table revision, and saves the match before notifying players. WebSockets signal updates; authenticated HTTP reads provide the private view. Polling and foreground resync work without a WebSocket. The game does not need the host device after the first deal.

- 2–6 human players; no account in the game.
- New invite links use a four-digit numeric room code. Older 12-character links still work. A four-digit code can be guessed; an open seat can be claimed by anyone who knows the code.
- The host can refresh an invite before anyone joins. Refreshing retires the old code; once a guest joins, the code stays fixed.
- The browser stores a secret seat token locally. Closing the app preserves the seat; clearing site data, private browsing, or using a different device can lose access to that seat.
- Unfinished or completed tables expire after seven days without a saved change. Reading a table does not extend its life.
- Render and Worker origins must match the addresses configured in `APP_ORIGINS`. Add any custom site origin before publishing.

## Local preview

In one terminal run `npx wrangler@4 dev --port 8787`. In another run `npm run dev`. Use two browser profiles or devices with separate browser storage for different seats. Opening the same invite twice in one profile deliberately resumes the same seat.

## Production

1. Run `npx wrangler@4 login` in this directory and authorize the intended Cloudflare account.
2. Run `npx wrangler@4 deploy`. Save the HTTPS Worker URL it prints.
3. In the Render frontend service set `VITE_PHASE10_API` to that Worker URL (no path), then rebuild the frontend from this source. If building Capacitor, set the same variable at build time.
4. Check two phones on separate networks: join by invite, draw and discard, lock one phone, then reconnect to the same seat. Close the host's browser after the first deal and confirm the match is still available.

No Cloudflare credentials belong in this repository. See Cloudflare's [Durable Object WebSocket example](https://developers.cloudflare.com/durable-objects/examples/websocket-server/).

## Voice chat

Online Phase 10 offers opt-in voice in the lobby and game menu. The microphone starts only after **Join voice**, and **Leave voice** or leaving the table stops it. Closing the voice controls keeps the call connected. Audio uses WebRTC; the Worker routes connection setup only and does not record audio.

The default uses Cloudflare STUN. For networks that block direct WebRTC, create a key in Cloudflare Realtime TURN and set `TURN_KEY_ID` and `TURN_API_TOKEN` as Worker secrets using `wrangler secret put`. The authenticated Worker provides short-lived relay credentials to room seats; never put the long-lived key in Vite variables. TURN relay use can incur charges. See [Cloudflare TURN](https://developers.cloudflare.com/realtime/turn/).

Voice requires the updated frontend and Worker. First check on two browsers with separate seats and HTTPS; confirm microphone permissions, mute, leave, and reconnect.
