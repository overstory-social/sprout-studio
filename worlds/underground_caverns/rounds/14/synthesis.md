# Synthesis

**Legibility:** legible. All six runs read the world as Zork's house and underground, changed: treasures carried to a trophy case under limits on load and route, with a someone (the bar on the trap door, the tidy death, the thief) behind it. Five matched the intent. Casual, capped at 30 turns, matched only partly. Explorer, goal-seeker and prose-reader reached the v5-v7 layers (thief and egg, dam, mine and basket), and prose-reader read the slot-and-shaft puzzle exactly as the intent means it. Goals: the explorer reached theirs (egg, opened by the thief, with its canary, in the case at turn 165, 92 points). The goal-seeker did not finish: 150 points at the 250-turn cap, held back by the turn budget, Hades hauling, the book the list take dropped (P1), and the torch already in the case (P2). The newcomer reached theirs in substance (six treasures in the case, 130 points) and stopped of their own accord, though the report marks the ending 'no'. Casual (fable) had no stated goal and ran 30 turns straight through house, troll and mirror, with few examines; it guessed rather than probed. The opus runs ran long and examined much. Explorer and goal-seeker often typed ahead from Zork memory (dam things in the Round Room, explorer 46-53; the bracelet in the Shaft and Smelly Rooms, goal-seeker 208-220), and parser-breaker and prose-reader queued attacks that were lost to a death (parser-breaker 174-177, prose-reader 37-39). The fable run quoted fewer lines and rated everything 3.

- casual-1 (partly): The old white house and caves under it, changed with cave-ins and a mirror that shakes the earth; you fight past a troll into a knot of passages around a mirror room that seems to be in two places.
- explorer-1 (yes): A house over an underground world, with the egg at its heart: only the thief can open it, so you let him rob you, follow him to his lair, kill him, and bring the opened egg and its canary home to a case that 'expects to be filled'.
- goal-seeker-1 (yes): Zork's house and Great Underground with changes: treasures to the trophy case as a puzzle of routes and carrying, some old ways closed (the Altar hole, Hades), the mirrors and coal mine leading deeper, with a slot that takes only pocket-sized things.
- newcomer-1 (yes): A house on a huge cave system; you take treasures from strange places and carry them back to the trophy case, and since someone bars the trap door the real puzzle is getting home with what you carry.
- parser-breaker-1 (yes): The white house and the Great Underground Empire, altered: loot carried home past a troll, thief, maze, dam and mirror, with the changes mostly about weight and carrying (the chimney's one thing, the sword's load), and a death that tidies your belongings.
- prose-reader-1 (yes): The old house and empire with the objects talking back in a dry voice; the longest part was the coal mine, a shaft, basket and timber slot whose careful sentences say what fits and which light goes where.

## Points

### P1 · engine-bug · medium · 1/6

A list take silently dropped one item. `take bell, book, candles, lantern` in the Egyptian Room, where all four lay ('There is a black book here.'), answered for the bell, the candles and the lantern and printed nothing at all for the book. The book was neither taken nor refused. The player only found out when the Altar hole refused them, and spent turns 157-163 going back for it. Earlier in the same run `take book and candles` answered for both items, one of them with the load refusal, so the per-item answer normally works. The metrics did not count this, because a missing line is neither unread nor refused.

**Recommendation:** Replay goal-seeker-1 up to turn 156 as a `sprout test` and check whether the book's take ran and returned no line (for example a load refusal that lost its line) or was never offered to the book at all. If the world's handler produced no line, fix it there. If the item was dropped before the handler ran, file it in Sprout with the script.

Evidence: goal-seeker-1 turn 156 ("Brass bell: Taken. / Pair of candles: Taken. / Brass lantern: Taken."); goal-seeker-1 turn 163 ("take book -> Taken."); goal-seeker-1 turn 37 ("Black book: Taken. / Pair of candles: Your load is too heavy, the sword not least of it.")

### P2 · design · medium · 3/6

For the second round running, the mine's diamond went unmade: the Machine Room was never reached and the Drafty Room was never seen lit. Round 13's new lines worked. The slot refusal and the shaft's 'a light that goes down in the basket stays down' were read and understood, and prose-reader concluded outright that a second light was needed. Nobody had the torch at the shaft. Goal-seeker and newcomer had already put it in the trophy case as a treasure (turns 180 and 185). Prose-reader never went down the rope, so never had it. Prose-reader still stripped down in the Timber Room, lamp included, and walked into the dark Drafty Room knowingly. Runs that reach the mine get there around turn 190-200 of 250.

**Recommendation:** Keep the refusal and the shaft line; they now explain the puzzle. What players lack is a link from 'a second light' to 'the torch'. Consider a line in the shaft's or the Drafty Room's answer about a light that never goes out, or a line in the torch's examine about it outlasting any lamp. Then let the director decide whether a goal aimed at the mine, or a longer turn cap, is needed to test v7 at all.

Evidence: prose-reader-1 turn 148 ("a light that goes down in the basket stays down with it, and is not up here with you."); prose-reader-1 turn 192 ("What will not go through the slot between the timbers is the sapphire-encrusted bracelet, and anything else bigger than would go in a pocket."); prose-reader-1 turn 194 ("It is pitch black. You are likely to be eaten by a grue."); goal-seeker-1 turn 180 ("put torch in case -> Done."); goal-seeker-1 turn 249 ("What will not go through the slot ... is the brown sack, the screwdriver, ... the brass lantern ..."); newcomer-1 turn 185 ("put the torch in the trophy case -> Done.")

### P3 · design · medium · 3/6

The Round Room says passages lead off in all directions and some are blocked, but nothing says which ones are open. `look` repeats the room text, and `examine cave-ins` describes the rubble without naming a way through. Two players asked outright or guessed, and the explorer examined the cave-ins and still did not know.

**Recommendation:** Keep Zork's room text word for word. Have the examine layer (cave-ins, passages) name the ways still open, in the dry voice: for example, that the passages west, east, north, south and southeast are clear.

Evidence: casual-1 turn 23 ("Several of them have unfortunately been blocked by cave-ins."); newcomer-1 turn 31 ("which ways are open? -> That sentence isn't one I recognize."); explorer-1 turn 57 ("Fallen rock fills most of the passages out of the room ...")

### P4 · engine-bug · low · 2/6

When a known verb's object is not there, the parser answers 'That sentence isn't one I recognize.' instead of 'You can't see any such thing.' `climb the rope` and `pray at the altar`, both typed in the Clearing, were called unrecognized, though `climb down the rope` and `pray` both work. This teaches players that their wording is wrong when it is only the place that is wrong. It is friction 94 again.

**Recommendation:** Add these two cases to the existing Sprout issue for friction 94: the sentence matches a verb pattern and only the noun is out of scope, so the answer should be the not-here line.

Evidence: newcomer-1 turn 175 ("climb the rope -> That sentence isn't one I recognize."); parser-breaker-1 turn 185 ("pray at the altar -> That sentence isn't one I recognize.")

### P5 · language-gap · low · 3/6

Several plain phrasings went unrecognized: `go upstairs`, `go in the window` (though `climb in the window` and `enter window` work), `go back to the house`, `spare the troll` (said when the disarmed troll begged), and `gently take the egg`.

**Recommendation:** Add `go in/through/into window` as ENTER WINDOW, and `upstairs`/`downstairs` as up/down where there are stairs. Answer SPARE (and LET GO) to an NPC with a Zork-voiced line. Leave the rest: adverbs and 'go back' are outside Zork's grammar, so log them in friction.md if Sprout cannot carry them.

Evidence: prose-reader-1 turn 16 ("go upstairs -> That sentence isn't one I recognize."); prose-reader-1 turn 30 ("spare the troll -> That sentence isn't one I recognize."); newcomer-1 turn 181 ("go in the window -> That sentence isn't one I recognize."); newcomer-1 turn 9 ("go back to the house"); newcomer-1 turn 6 ("gently take the egg")

### P6 · design · low · 4/6

'Your load is too heavy, the sword not least of it.' was the line most often repeated. It works as intended: newcomer dropped the sword because of it, and parser-breaker called it 'the voice of the game'. The juggling also cost several turns in each of four runs.

**Recommendation:** Keep it. It is Zork's load, and the line points at what to drop. Nothing to change.

Evidence: goal-seeker-1 turn 46; newcomer-1 turn 69 ("drop the sword"); explorer-1 turn 72; parser-breaker-1 turn 238

### P7 · design · low · 3/6

The mirror rub still reads as a mystery to half the players who used it. Casual and parser-breaker felt the rumble and could not tell what had changed. Newcomer understood it moved them but got lost between the two identical Mirror Rooms and the two identical Caves. This is the intent's deliberate design ('the only clue is the rumble'). Both casual and parser-breaker hit their turn caps right after the rub.

**Recommendation:** Keep it as built. The players who went on through the new exits (goal-seeker, prose-reader, newcomer) solved it. Watch it next round. If it still stalls players, the examine layer of the Mirror Room's exits could do the telling.

Evidence: casual-1 turn 27 ("There is a rumble from deep within the earth and the room shakes."); casual-1 turn 30; parser-breaker-1 turn 250; newcomer-1 turn 77

### P8 · design · low · 2/6

A death's scattering cost two players something they needed afterwards. Prose-reader's sack, and the garlic in it, were lost, so the bat became a wall (carried off at turns 107 and 149). Parser-breaker never found the platinum bar again after 'rolled into some dark corner'. Both praised the death text itself.

**Recommendation:** Keep Zork's scattering. Check that the sack (a plain thing) actually lands above ground where the text says plain things go, since prose-reader found the sword outside but never the sack.

Evidence: prose-reader-1 turn 149 ("The bat grabs you by the scruff of your neck and lifts you away...."); parser-breaker-1 turn 177 ("anything of value has rolled into some dark corner in or under it")

### P9 · design · low · 1/6

The goal-seeker carried the bell, book and candles for about 30 turns toward Hades. The Altar hole (159, 173) and then the Tiny Cave's chalked slab (192) refused them, and they only learned the kit was dead weight at that point. The refusals were praised as writing. They are the intent's deliberate scope, but they come late for anyone who knows Zork.

**Recommendation:** Keep both refusals. Optionally have the black book or the candles' examine hint that the rite has no taker yet, so a player knows before carrying them.

Evidence: goal-seeker-1 turn 159 ("You decide that whatever is down there has waited this long and can wait a little longer."); goal-seeker-1 turn 192 ("CLOSED UNTIL FURTHER NOTICE. Something on the far side of the notice laughs.")

### P10 · design · low · 1/6

The thief chain was solved end to end for the first time. The thief robbed the explorer of the egg (49). The explorer read the clasp hint, got past the Cyclops with lunch and 'odysseus' (106-108), died to the thief once (111), came back through the cyclops-shaped hole, killed him in his lair (136), took the open egg (138), wound the canary in the forest for the bauble (159-160), and cased egg, chalice and bauble (165). This answers round 13's watch item, 'whether anyone follows him to the lair after a robbery'.

**Recommendation:** Keep. The only friction was the canary: it was wound in the Treasure Room, the Clearing and at Canyon View (141, 151-155) before it sang on the Forest Path, which is faithful. Optionally let the canary's examine or its tinny chirp point at the trees.

Evidence: explorer-1 turn 9 ("deft fingers, and not, one suspects, entirely honest ones."); explorer-1 turn 49 ("he quietly abstracted some valuables from your possession"); explorer-1 turn 137 ("it stands open without a scratch on it, as though it had been waiting for him."); explorer-1 turn 160

### P11 · world-bug · low · 1/6

`take all` in a room with nothing to take answered 'You already have that!' for every item in the inventory. Zork's TAKE ALL leaves out what is already held.

**Recommendation:** Leave held things out of ALL for TAKE, and answer Zork's empty-ALL line when nothing is left.

Evidence: explorer-1 turn 49 ("Leaflet: You already have that! / Jewel-encrusted egg: You already have that! / ...")

### P12 · design · low · 4/6

`score` reports 'total of 350 points', but the intent puts this slice's ceiling at 330, because the crystal skull is not built. Players quoted their score as out of 350.

**Recommendation:** Decide on purpose. Either keep Zork's 350, as the faithful line with a target this slice cannot reach, and note that in the intent, or report 330 so the score's ceiling is true.

Evidence: goal-seeker-1 turn 245 ("Your score is 150 (total of 350 points), in 217 moves."); explorer-1 turn 168; newcomer-1 turn 186; parser-breaker-1 turn 119

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.15 | 0.13 |
| reading.refusedRate | 0.01 | 0.01 |
| faults | 0 | 0 |
| repetition | 29 | 31 |
| reach.places.never | 40 | 27 |
| reach.objects.never | 530 | 519 |
| reach.verbs.never | 70 | 61 |
| reach.handlers.never | 85 | 50 |
| reach.passages.never | 1604 | 1530 |
