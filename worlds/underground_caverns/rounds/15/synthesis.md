# Synthesis

**Legibility:** legible. All six read the world as the white-house treasure hunt with a trophy case to fill, changed in specific ways, which is what intent.md describes: a faithful port of Zork. Three runs singled out the author's examine layer, as intent expects. Several misread faithful Zork features as changes: the Round Room cave-ins and TOUCHBIT (the trap door barred again) were taken as alterations, not as the original. Nobody saw the endgame. Goals: goal-seeker (score) did not reach it, ending at 154/350 at the 400-turn cap; P1's single-item ferrying, a death to the thief (-10, so 350 was out of reach), the bat and the coal mine stood in the way. Explorer (egg in the case) reached it at turn 17 with the egg whole, then played on to the Dome. Newcomer (find treasure and keep it safe) reached it: the painting and the bar in the case, 65 points, by turn 107. Models: every persona except casual was opus; casual was fable. The difference showed as pace, not reading. The fable casual run typed short, plain commands, examined almost nothing, spent 6 of its 30 turns on the troll, and was cut off holding the trident. The opus runs examined heavily (prose-reader most of all), planned around stated rules (the chimney, the narrow passage), and quoted the author's lines. Within the opus runs, play differed by persona (the parser-breaker's contrary sentences, the goal-seeker's logistics) rather than by model.

- explorer-1 (yes): A reworked white-house treasure hunt: break into the house, gather treasures above and below ground for a waiting trophy case, with witty descriptions that hint at puzzles.
- goal-seeker-1 (yes): A treasure hunt under the white house whose real puzzle is logistics: the barred trap door, the one-item chimney and the death-scatter decide how treasure gets back to the case.
- casual-1 (partly): A classic dungeon crawl that someone has 'shaken': a barred trap door, caved-in passages, a rumbling mirror.
- newcomer-1 (yes): A trophy case on top of a large underground world with strange rooms (echo, mirror, chimney); the challenge is getting finds back to the surface.
- parser-breaker-1 (yes): Zork's bones, a treasure hunt with a troll, a thief, a dam, and a house that keeps shutting its trap door, which notices and explains more than expected.
- prose-reader-1 (yes): An emptied underground empire looted for a patient trophy case; much of the writing is about objects that have outlived their people and purposes.

## Points

### P1 · design · high · 4/6

The trap door bars again after every chimney climb (Zork's TOUCHBIT), and the chimney takes only the lamp and one thing. Together they made ferrying treasure one item per round trip the main activity of every long run. Nobody learned that coming up by another way (grating, prayer, canyon, Strange Passage) leaves the trap door open. In four runs the trap door was barred again on every descent from the house. Every one of those descents came after a chimney climb or a death, so the world behaved as intent.md says. The rule that would have helped was never visible to anyone. Prose-reader did come up by prayer (turn ~205) and by Canyon View, but never went down the trap door again, so 'stays open' has still not been exercised in play.

**Recommendation:** Keep TOUCHBIT, but give the rule a voice. For example, an examine line on the trap door or the Cellar's 'locked from above' could hint that whoever bars it does so only behind someone who came in through the house. Or the first non-chimney return could note the trap door left unbarred. Also add a sprout test: come up by prayer or Canyon View, open the trap door, go down, and check it stays open.

Evidence: goal-seeker-1 turn 70 ("The chimney has room for you, your lamp and one thing more, and not an inch besides."); newcomer-1 turn 97 ("Went back down and the trap door got barred again. I had to use the chimney twice."); parser-breaker-1 turn 111 ("The trap door crashes shut, and you hear someone barring it."); parser-breaker-1 turn 179 ("Opened the trap door from above, went down, and it crashed shut and got barred again. No way to stop it."); prose-reader-1 turn 146; prose-reader-1 turn 155; prose-reader-1 turn 164 ("Every trip down the trap door it crashed shut and was barred again.")

### P2 · design · medium · 6/6

None of v8's new endgame was reached in play: the map at 350, the secret path, the Stone Barrow. Neither were the Maze, the Cyclops, the Treasure Room, the river or the Machine Room. The best score was 164 (prose-reader, who chose to stop) and 154 (goal-seeker, at the 400-turn cap). reach.places.never rose from 27 to 41, and among the new misses are stone_barrow, inside_barrow and every maze room. P1's ferrying used up the turn budget.

**Recommendation:** Cover the 350 ending (the map, West of House's path, the barrow's closing) with sprout test scripts, because blind play will not get there under these caps. If the director wants the endgame playtested, consider a run that starts mid-game.

Evidence: goal-seeker-1 turn 400 ("My last confirmed score was 154 of 350"); prose-reader-1 turn 276 ("the rest felt like a long haul of carrying things back and forth"); parser-breaker-1 turn 200 ("I'd stopped finding new things faster than I was walking back and forth.")

### P3 · engine-bug · medium · 2/6

Several ordinary phrasings fail where a close variant works. 'drop everything except X' is not understood, but 'drop all except X' works. 'push open the trap door' and 'slide down the slide' answer not_here. A trailing adverb ('politely', 'anyway') turns the sentence into not_here. 'go back east' is unknown. 'hello troll, can we talk?' greets, then also answers 'You can't see any such thing.' for the second clause. reading.unreadRate fell from 0.13 to 0.07, so this is better than last round, and what is left is mostly these near-misses.

**Recommendation:** File in Sprout: 'everything' as a synonym of 'all'; leading 'push open'/'pull open' read as open; trailing adverbs dropped; 'go back <dir>' read as the direction; a comma-joined second clause that isn't a command should not be answered with not_here. Where the world can do it itself, give the slide a 'slide down' synonym of its down exit.

Evidence: newcomer-1 turn 87 ("drop everything except the lantern and the painting -> You can't see any such thing."); parser-breaker-1 turn 103 ("drop all except lantern and painting (works)"); newcomer-1 turn 72 ("push open the trap door -> You can't see any such thing."); newcomer-1 turn 66 ("slide down the slide -> You can't see any such thing."); newcomer-1 turn 20 ("The troll bows his head to you in greeting. / You can't see any such thing."); parser-breaker-1 turn 1 ("knock on the boarded door politely -> You can't see any such thing."); parser-breaker-1 turn 46 ("jump into the chasm anyway"); newcomer-1 turn 35 ("go back east -> That sentence isn't one I recognize.")

### P4 · engine-bug · low · 1/6

'drop all' also drops what is inside an open sack the player is holding. Each item is dropped on its own after the sack itself. At turn 103 the lunch came out of the sack. At turn 173, the manual, tube and matchbook that had just been put in the sack (turn 155, 'Done.' three times) were dropped one by one after 'Brown sack: Dropped.'

**Recommendation:** Check Zork's HELD/ALL search. If DROP ALL there reaches only the top level, this is the engine's 'all' expansion including the contents of held containers, and it is an issue for Sprout. If Zork does the same, reclassify it as faithful.

Evidence: parser-breaker-1 turn 103 ("Brown sack: Dropped. ... Lunch: Dropped."); parser-breaker-1 turn 155 ("put manual, tube, matchbook and screwdriver in the sack -> Done. Done. Done. There's no room."); parser-breaker-1 turn 173 ("Brown sack: Dropped. ... ZORK owner's manual: Dropped. Tube: Dropped. Matchbook: Dropped.")

### P5 · world-bug · low · 1/6

'look down' On the Rainbow gives the stock 'You see the floor, where you left it.', on a rainbow over a 450-foot fall. Intent gives look down a real answer at the Dome, the chasm and the canyon, but not here.

**Recommendation:** Give On the Rainbow (and Aragain Falls) a look-down answer showing the drop, in the Dome and canyon's voice.

Evidence: prose-reader-1 turn 251 ("You see the floor, where you left it.")

### P6 · design · low · 2/6

The troll fight is the round's biggest repetition: the same attack line typed 6 times (casual) and 5 times (explorer). The fight uses Zork's own tables. For the casual player it took a fifth of a 30-turn budget and nearly ended the run.

**Recommendation:** No retune, since these are Zork's tables. Only check that the miss and stagger lines vary enough that the repeats read as a fight rather than a loop.

Evidence: casual-1 turn 15 ("Six turns of 'attack troll with sword' is a lot for an impatient person"); explorer-1 turn 26; prose-reader-1 turn 36 ("died to the troll")

### P7 · design · low · 2/6

The Round Room's original text ('several of them have unfortunately been blocked by cave-ins') does not say which passages are open, so players guessed directions.

**Recommendation:** Keep Zork's room text word for word. If the cave-in can be examined, its examine answer could name the open ways in the author's voice.

Evidence: casual-1 turn 22 ("Round Room 'passages in all directions' but several caved in, and it doesn't say which."); prose-reader-1 turn 127 ("I wished the Round Room listed its open exits.")

### P8 · design · low · 2/6

The mirror swap reads as intended for some players and not others. The newcomer worked out that it moved them but then looped round the Mirror Rooms. The casual player could not tell that anything had happened.

**Recommendation:** No change. Intent makes the rumble the only clue. Watch whether anyone drops a marker before rubbing.

Evidence: casual-1 turn 26 ("Something happened and I don't know what."); newcomer-1 turn 52 ("I was somewhere else, but the room looked exactly the same.")

### P9 · design · low · 2/6

The coal mine and the thief are punishing, as in Zork. The goal-seeker spent about 35 turns mapping the mine by dropping items (the round's longest repeated answer: 'You can't go that way.' 7 times running, turns ~284-318). Before that, with the garlic still in the sack, the bat carried them off. Earlier the thief killed them in one exchange (turn 28), and he stripped the prose-reader of everything but the lamp.

**Recommendation:** Faithful; leave. The thief's 'clear from his aspect' line is the only warning before a fight, and it is Zork's.

Evidence: goal-seeker-1 turn 28 ("The thief killed me in one exchange"); goal-seeker-1 turn 284; goal-seeker-1 turn 318; prose-reader-1 turn 184 ("the thief robbed me of everything except the lamp, in one move")

### P10 · design · low · 3/6

The v8 mechanics that were reached all worked, and the author's lines were the most quoted. The goal-seeker exorcised Hades in Zork's order and against its clock: bell, candles retaken and lit with a match, book, 'Begone, fiends!'. They took the skull, and it scored in the case. The lamp's 'a bit dimmer' warning fired in two runs. The death-scatter line ('somebody tidy has put the lamp back') was quoted as a favourite by three runs, and two of them went and recovered their things as it described.

**Recommendation:** Keep. Still to watch: death as a spirit after the Altar (not met), the bottle refilled at the water, small things put through the grating, and the lamp burning out.

Evidence: goal-seeker-1 turn 128 ("The bell suddenly becomes red hot and falls to the ground."); goal-seeker-1 turn 132 (""Begone, fiends!""); goal-seeker-1 turn 134; prose-reader-1 turn 248 ("The lamp appears a bit dimmer."); parser-breaker-1 turn 57; goal-seeker-1 turn 66 ("The platinum bar I lost when I died had 'rolled' into the Studio")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.13 | 0.07 |
| reading.refusedRate | 0.01 | 0.01 |
| faults | 0 | 0 |
| repetition | 31 | 20 |
| reach.places.never | 27 | 41 |
| reach.objects.never | 519 | 549 |
| reach.verbs.never | 61 | 64 |
| reach.handlers.never | 50 | 82 |
| reach.passages.never | 1530 | 1692 |
