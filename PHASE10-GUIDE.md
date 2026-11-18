# Phase 10 Clubhouse

## Rules and deck

The mode follows Mattel’s [classic W4729 instructions](https://service.mattel.com/instruction_sheets/W4729-Eng.pdf). It supports one local player and 1–5 computer opponents. The deck has 96 number cards (1–12, twice per color), eight Wild Stars and four Skips. Everyone starts with ten cards and works through the ten phases in order. The player after the dealer starts; the dealer rotates between hands.

Draw one card. Lay the entire current phase together. House rule: starting on your next turn after laying a phase, you may add matching cards to your own melds or anyone else’s. A run can grow at either end, but an assigned Star cannot change its value after it lands. Discard one card to end your turn. A discarded Skip cannot be drawn and does not count toward a phase; it lets you choose an eligible opponent. A skipped player gets a normal turn before being targeted again.

The round ends when someone empties their hand. Anyone who laid their phase advances; everyone else repeats theirs. Score only cards still held: 5 points for 1–9, 10 for 10–12, 15 for Skip and 25 for Star. Completing Phase 10 is the goal. If multiple players finish together, use their total penalties, then a Phase 10 playoff if still tied.

## Mobile play guidelines

- **One decision at a time.** Highlight the two draw piles first. After drawing, show Lay phase only for a valid selection. Show hit options on matching table groups. Drag a card onto the discard pile or select one card and activate the pile.
- **Keep all cards readable.** Use the classic white face, broad colors and corner numerals. The hand follows Take 5’s overlapping arc, with corner ranks left visible and selected cards raised. The spacing adapts when drawing or discarding changes the hand size. Number cards stay ordered by value.
- **Make special cards unmistakable.** Use the supplied Star and Skip art. Announce “Star, Wild card” and “Skip card” to assistive technology. Show a dedicated opponent picker for Skip and show the exact meld and end value for a hit.
- **Show progress at the table.** Show outlined slots for each group in your current phase. A valid selection previews in the slots and stays face up after laying. Opponent meld previews sit below their seat labels. Open a seat to inspect the full phase or add a card, keeping the main match on one screen. Put the ten-phase reference in an in-game guide. Pause between hands for the score and advancement recap.
- **Keep 3D responsive.** Use a single Three.js canvas for the room, felt table and seated characters, and use native HTML controls for keyboard and touch. Project the responsive play area onto the Three.js felt and render shallow card stacks below the readable faces. Update the projection when the table changes, resizes, or scrolls. Provide a CSS background if WebGL is unavailable.
- **Avoid accidental exits or lost progress.** Save the match to the current tab’s session storage and offer Resume match from setup.
- **Device acceptance checklist.** Exercise 320×568, 390×844 and 430×932, plus Safari installed mode. Check draw, hand selection, Star assignment, skips, hit targets, scoring and replay. Repeat with five bots, larger text, reduced motion, and WebGL disabled.

## Card art references

The numbered cards follow the classic deck shown in the [Phase 10 product gallery](https://www.mastgeneralstore.com/products/mattel-phase-10-card-game). Play uses the project’s local high-resolution number backgrounds and the previously supplied Star and Skip face art so turns do not depend on third-party image hosts.

The product-gallery photo is included as an expandable reference in the in-game guide. The playable deck uses separate local assets, so it stays sharp at hand size and works without contacting the retailer.
