# Synthesis

**Legibility:** partly. Both players who got inside read the world exactly as intent.md describes it: a faithful Zork I opening around the white house, down through the trap door to the Cellar and the troll, ending at unbuilt passages. Four of six never saw a room because of the host's session bug (P1). Neither player who got in reached the forest, the tree, the egg, the attic or the trophy case, so the secrets intent.md hopes for (darkness as a lid, the grue, the high tree, the egg, the trophy-case score, the jokes) were never tested.

- goal-seeker-1 (yes): A Zork I opening: in through the window, take the lantern and sword, down the trap door; a troll guards the Troll Room and the world stops at unfinished passages.
- prose-reader-1 (yes): A faithful Zork I opening: the field west of the white house, the mailbox and leaflet, the kitchen window, the living room with the trophy case, lantern, sword and rug, and a trap door to the cellar.
- explorer-1 (no): Nothing; never entered the world.
- newcomer-1 (no): Nothing; could not enter.
- parser-breaker-1 (no): Nothing; could not enter.
- casual-1 (no): Nothing; never saw a room.

## Points

### P1 · engine-bug · high · 6/6

The play door's session broke for every run. Four players never got in: `arrive` answered 'You are <name> here already' while every `say` and `leave` answered '<name> is not here: arrive first', and repeating `arrive` gave the same error. The two players who did get in were dropped partway through. Prose-reader was cut off at the Cellar on turn 15. Goal-seeker got 'Arrive first.' at turn 13, arrived again and replayed the path. The world raised no fault anywhere (faults = 0). The break is in the host, not in the Sprout source.

**Recommendation:** File this against Sprout's play/mcp host. A new process must not keep an 'already here' presence that its own `say` and `leave` cannot see. Until it is fixed, this round's ratings (four runs at 1/1/5/1/1) say nothing about the world. Re-run round 1 rather than revise against these scores. Make the round workflow abort or flag a run whose first `say` after `arrive` gets 'arrive first'.

Evidence: explorer-1 turn 1 ("Say 'look' was refused with 'Ash is not here: arrive first', while arrive said Ash was already here."); newcomer-1 turn 1 ("Arriving said I was already Finch here, but saying anything said Finch was not here."); parser-breaker-1 turn 1 ("Arrive said 'You are Esme here already', but 'look' said 'Esme is not here: arrive first'... Repeated arrives gave the same error."); casual-1 turn 1 ("Arriving said I was already here, but saying anything said I was not here, and leaving said the same."); prose-reader-1 turn 15 ("The session dropped. Commands answered 'Arrive first' and leave failed too."); goal-seeker-1 turn 13 ("The session reset. 'inventory' returned 'Arrive first.' and I had to arrive again and replay.")

### P2 · engine-bug · high · 6/6

The recorded runs do not match what the players saw, so the round's metrics measure replays and not the play. The recordings for explorer, newcomer, parser-breaker and casual show a clean arrival at West of House and a clean leave. Casual's recording even has `inventory` answered with 'You are empty-handed.', but every one of those reports says the player never got in. Prose-reader's recording is a seed and nothing else, although the report quotes the leaflet, the kitchen and the trap door from 15 turns. Goal-seeker typed 34 lines by its own count; 23 were recorded. merged.json therefore counts only Bryn (23) and Cato (1). Every reach figure (30 places, 46 objects, 290 passages never reached) is inflated. The leaflet text, for one, is listed as never reached although prose-reader read it.

**Recommendation:** Fix the recorder so that it writes the turns the live session actually answered, drops and refusals included, and does not write a later clean replay. Treat this round's reach and reading figures as a floor on reach, not a measurement, and do not use them to prune prose or rooms.

Evidence: casual-1 turn 1 ("Recording: inventory -> 'You are empty-handed.'; report: 'I could never get in.'"); prose-reader-1 turn 3 ("Report quotes 'ZORK is a game of adventure, danger, and low cunning.'; runs/prose-reader-1.json holds only { "seed": 1 }; leaflet.words is in passages.never."); goal-seeker-1 turn 22 ("Report counts 34 turns with the kill at 22; the recording has 23 typed lines with the kill at line 15."); explorer-1 turn 1 ("Recording shows arrive -> 'West of House' and leave -> 'You leave...'; report says arrive was refused.")

### P3 · design · medium · 2/2

Where players did get in, the faithful port landed. Both runs that saw the world recognised it as Zork I's opening, both rated its prose 4, and both quoted original lines as highlights. The scripted beats worked as intended: the window, the rug, the trap door slamming and being barred, the sword's glow, the troll's fog and the in-world notes at unbuilt exits. This matches the brief's word-for-word constraint and the rule that an exit to unbuilt country answers with an in-world line.

**Recommendation:** Keep this as it is. With only 2 of 6 runs inside the world, confirm it in a clean re-run before treating it as consensus.

Evidence: prose-reader-1 turn 9 ("A table seems to have been used recently for the preparation of food."); prose-reader-1 turn 14 ("The trap door crashes shut, and you hear someone barring it."); goal-seeker-1 turn 19 ("Your sword has begun to glow very brightly."); goal-seeker-1 turn 23 ("The passage to the east has not been finished... "Back soon. -- The Management."")

### P4 · design · medium · 1/6

The one run that reached the end went down the trap door first and found nothing left to do. It never saw the forest, the tree, the egg, the attic or the trophy case's score. Once the door is barred the only way back is to die, so that half of the slice was closed to it. It asked for treasure and a way back up. Every forest place, up_a_tree, attic, the egg and the trophy case are unreached. P2 makes that figure unreliable, but no report mentions them either.

**Recommendation:** The barred trap door is Zork's own design, so keep it. Do not change the world on one run. Watch next round whether players who are actually inside head for the forest and the egg first. If they still dive straight down, this is a pacing finding about the slice, not a defect.

Evidence: goal-seeker-1 turn 24 ("I wanted to find treasure and bring it to the trophy case... I wanted to be able to go back up the trap door."); goal-seeker-1 turn 13 ("Recording, line 11: 'go down' straight after 'open trap door'; no forest or attic visited.")

### P5 · design · low · 1/6

The troll was too easy, and the fight read oddly. The first blow staggered him, and in the same response 'The troll slowly regains his feet.' The second blow killed him. He never swung once (the Adventurer 'struck' handler was never reached). The player called it 'too easy'. They then attacked the vanished troll twice more, which accounts for the round's repetition figure and two of its three unread lines ('You can't see any such thing.'); that answer is correct, not a misreading.

**Recommendation:** Check that the stagger recovery waits for the troll's own next turn and does not print in the same move as the stagger. Under friction 1's constant seed, confirm that the per-object counter actually varies the troll's first rolls across runs, so that a fight is not always a free two-hit kill.

Evidence: goal-seeker-1 turn 14 ("The troll is momentarily disoriented and can't fight back. / The troll slowly regains his feet."); goal-seeker-1 turn 15 ("The troll takes a fatal blow and slumps to the floor dead."); goal-seeker-1 turn 16 ("attack troll with sword -> You can't see any such thing.")

### P6 · language-gap · medium · 1/6

`take lantern and sword` was read as a single noun and answered 'You can't see any such thing.', although both objects were in plain view. The next command, `turn on lantern`, worked. Zork handles object lists. friction.md logs `take all` (entry 11) but not 'X and Y'.

**Recommendation:** Log 'X and Y' object lists in friction.md under The parser, with the spec section on parsing. If Sprout cannot split a conjunction, raise an issue there. Meanwhile the world could at least answer a phrase with 'and' in it more honestly than 'can't see'.

Evidence: goal-seeker-1 turn 9 ("I tried to take the lantern and sword in one command. It said 'You can't see any such thing', yet 'turn on lantern' then worked.")

### P7 · language-gap · low · 1/6

In the Troll Room, `go north`, a direction with no exit, was answered 'That sentence isn't one I recognize.' and counted as unread. Zork says 'You can't go that way.' This is the known friction entry 2: Sprout reads a direction with no exit as no phrase at all.

**Recommendation:** This is already logged as friction 2. Make sure it has an issue in overstory-social/sprout, since it is one of only three unread lines this round and is the parser's fault, not the player's.

Evidence: goal-seeker-1 turn 13 ("go north -> That sentence isn't one I recognize.")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | — | 0.13 |
| reading.refusedRate | — | 0 |
| faults | — | 0 |
| repetition | — | 1 |
| reach.places.never | — | 30 |
| reach.objects.never | — | 46 |
| reach.verbs.never | — | 38 |
| reach.handlers.never | — | 21 |
| reach.passages.never | — | 290 |
