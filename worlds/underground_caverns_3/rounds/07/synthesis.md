# Synthesis

**Legibility:** partly. The two runs that played deep read the world as the intent has it. The opus run got all of it: a final test set by an old man, his things gathered across his ruined empire, a lake you cross by letting go, a duel won by not finishing it, and a face under the hood that is your own. The explorer got the gather-his-things structure. The five shorter runs got only the frame (a dream, an old man, "seek me when worthy") and the cliff man, and the casual player left after nine lines with no goal it could name. The melancholy and the 'win by not winning' arc reach only players who get as far as the duel and the lake.

- casual-1 (partly): A classic cave adventure: a dream, a lantern, empty passages, a sunlit cliff; told to seek a silver-haired man when worthy, with no way to learn how.
- newcomer-1 (partly): A returning hero on a final test; a trickster up the cliff steals the chest, and a hooded swordsman blocks the way.
- parser-breaker-1 (partly): A dreamlike cave where you must prove yourself worthy to an old man, and a hooded double who shadows you and turns out to have your face.
- prose-reader-1 (partly): A Zork-like final test: an endless stair, a sword in a rock, a sunlit cliff and an amused, unseen watcher above a ledge with a locked chest.
- goal-seeker-1 (partly): A dream-wizard says to seek him when worthy; you gather bread and a staff, wake an old man, and open a secret stair you are not yet ready to go down.
- explorer-1 (yes): An old man at the foot of the stair waits for you to prove yourself by gathering what he carries (amulet, staff, ring, book, key), past a cliff thief, a hooded duellist, a sailor, a freezing lake, a teleporting table, a time machine and the Royal Puzzle.
- goal-seeker-1-opus (yes): An ageless old man's final test: collect the things he carries in your dream (the amulet from the lake, the staff from the cliff crook, a ring smuggled out of the past, the puzzle's book, and the hood and cloak of a shadow with your own face), then go down to him; a story about letting go.

## Points

### P1 · world-bug · high · 5/7

Round 7's new cue at the Cliff, "Among the trees, unless you are mistaken, something that is not a tree is keeping very still", names a thing that does not answer `examine`. Four of the seven runs typed it straight back and got "You can't see any such thing.", and a fifth (casual) asked for it in its wishes. That breaks the brief's rule that every thing a description names can be examined, on the first scene most players reach. `look among the trees` was read as a bare `look`. `examine trees` does answer, but with "There seems to be nobody there, but it's hard to tell.", which is a different object from the cue.

**Recommendation:** While the man is unmet, give the Cliff a thing of its own that answers to the cue's words ("thing", "something", "shape", "figure", "watcher", "not a tree"). Have `examine` / `look at` give the original's "nobody there, but it's hard to tell" plus a sentence about it slipping back among the trunks. Make `look among`/`behind the trees` an intent over it. Remove the thing when the man shows himself, as the cue already stops.

Evidence: explorer-1 turn 9 ("examine something that is not a tree -> You can't see any such thing."); prose-reader-1 turn 11 ("examine the thing among the trees -> You can't see any such thing."); newcomer-1 turn 9 ("examine the thing that is not a tree -> You can't see any such thing."); goal-seeker-1-opus turn 7 ("examine the thing among the trees -> You can't see any such thing."); goal-seeker-1-opus turn 8 ("look among the trees -> (look)"); casual-1 turn 6 ("wished: a reason to ... look at the still figure among the trees")

### P2 · engine-bug · high · 1/7

The round's one fault: `help` typed in the Room in a Puzzle faulted with BudgetExhausted ("one turn may say 8000 characters to any one person"). The engine said "Something in this world has gone wrong" and the explorer's run ended there. `help` is Sprout's own verb, imported from 'sprout'. In a square holding the puzzle's many per-square things its output overruns the turn budget. The brief requires no fault in any run.

**Recommendation:** File it in overstory-social/sprout: the stdlib `help` should bound or summarise its own output rather than fault. Until Sprout fixes it, the world can answer `help` itself in the puzzle squares, or everywhere, with a short in-voice line (Zork's parser has no HELP verb). Also add a test that runs `help` in a puzzle square and in the Jewel Room. Log it in friction.md.

Evidence: explorer-1 turn 294 ("the command faulted, BudgetExhausted: output: one turn may say 8000 characters to any one person.")

### P3 · world-bug · medium · 1/7

The cracked rock at the Great Door, added in round 7, invites a verb that it then refuses. `examine rock` ends "a good shake would settle the matter", and `shake rock` is refused by the parser with "You can't shake the cracked rock." because shake is typed by kinds the rock does not compose. The goal-seeker took the line as an instruction: it tried shake and push, then spent its last eight lines striking, waving and touching the rock and door with the staff, and quit stuck. The quake (moves 70-140) had not come yet. Two of those lines (`strike rock with staff`, `shake rock with staff`) got "You can't see any such thing." for a rock in plain view.

**Recommendation:** Reword the line so the shake is the earth's ("a good shake of the earth would settle the matter"). Have the cracked rock compose whatever kind `shake` (and `hit`/`strike` with an instrument) is typed by, and answer in the same voice as its `push` line: it is waiting for something a good deal bigger than you. The parser's "can't see" for an excluded instrument phrase is the verb-typing rule giving a false answer; log it in friction.md beside 38.

Evidence: goal-seeker-1 turn 66 ("The door is for ever; the rock, by the look of it, is not, and a good shake would settle the matter."); goal-seeker-1 turn 67 ("shake rock -> You can't shake the cracked rock."); goal-seeker-1 turn 111 ("strike rock with staff -> You can't see any such thing."); goal-seeker-1 turn 118 ("pray (last line; report: 'I could not work out what the staff or the cracked rock wanted')")

### P4 · design · medium · 3/7

The table sends visitors into the dark, and nothing at the Vista says to take a light. Three runs touched the table with empty hands, having left their lights on the shore as the lake taught them, and arrived blind. The goal-seeker landed blind in the Timber Room and never saw view II, so it never learned the can existed. The opus run saw the can in view II, arrived in a dark Room 8, could not take or feel for it, and never got the repellent. The explorer did the same on its second trip. The torch on the Vista's wall is the light meant to go, and only the explorer's first trip carried it. The lake lessons now land so well that players arrive with nothing in their hands.

**Recommendation:** Keep Room 8 and the Timber Room dark, and keep the odds. When the visitor carries no light, add a sentence to the table's lean toward the hand: the places it shows are underground and have no sun of their own, and the flame on the wall beside it is the one light in the room that has not been near the water. Optionally make `feel around`/`grope for` in a dark Room 8 answer that the can is somewhere in the corner and the dark keeps it, so the lesson is the light and not the parser.

Evidence: goal-seeker-1 turn 50 ("touch table -> It is pitch black. You are likely to be eaten by a grue."); goal-seeker-1-opus turn 137 ("touch table (view II) -> It is pitch black."); goal-seeker-1-opus turn 139 ("feel around for the can -> You can't see any such thing."); explorer-1 turn 187 ("touch table (view II, no light) -> It is pitch black."); explorer-1 turn 141 ("touch table carrying the torch -> Room 8 ... A spray can is in the corner.")

### P5 · design · medium · 3/7

The repellent chain is still uncrossed. The metrics have the Key Room, Dark Place 2, the Aqueduct, the High Arch and the Water Slide all unreached, and only one run got the can. The explorer sprayed at the Vista instead of the Western Shore, spent a move on `drop all` at the shore, took the "much less pungent" line on the Southern Shore as a warning, stepped into the lair and straight back out, and later sprayed an empty can underwater. The opus run lost the chain to the dark Room 8 (P4). The goal-seeker never saw the can. The five-move budget is the intent's own secret, but nobody this round got near enough to spend it.

**Recommendation:** Keep the five moves. Add one clause to the can's small print saying where to start: an application lasts about as long as it takes to get from the water's edge to the top of a slope, so be at the edge with your hands already empty. Have the Southern Shore's "less pungent" line, when moves remain, say it is still enough for the climb if you do not dawdle, so the warning reads as a hurry-up rather than a retreat.

Evidence: explorer-1 turn 144 ("spray can on me (at the Scenic Vista)"); explorer-1 turn 146 ("drop all (Western Shore)"); explorer-1 turn 148 ("That horrible smell is much less pungent now."); explorer-1 turn 150 ("north (back out of the lair)"); explorer-1 turn 161 ("The repellent is all gone."); goal-seeker-1-opus turn 138 ("take can -> You can't see any such thing.")

### P6 · design · low · 1/7

The ship's window still eats a `wait`. The opus player was idling on the shore. It read the arrival line (hand cupped to his ear, the ship not slowing) and typed `wait` again, and the ship sailed. It named this as an unrecoverable miss. The explorer met the ship and greeted it in its one command. A bare `wait` is not one of the near-calls that hold the ship once.

**Recommendation:** Keep the original's one command. If more reach is wanted, let a `wait` in the window hold the ship once, as the near-calls do, answered with the sailor leaning further toward the shore. Log it with the other hold-once departures in friction.md. Otherwise leave it: the ship that passes once is the brief's showcase.

Evidence: goal-seeker-1-opus turn 32 ("He has a hand cupped to one ear ... and the ship is not slowing down."); goal-seeker-1-opus turn 33 ("wait -> The boat sails silently through the mist ... He had been listening for something ... and it was not said."); explorer-1 turn 32 ("say hello to sailor -> ... Please accept this gift.")

### P7 · engine-bug · low · 3/7

The parser still gives false or doubled answers to compound lines (friction 38). "hello, who is up there?" got the shout's full answer and then "That sentence isn't one I recognize." in the same turn. "look among the trees" became a bare look. "pull the sword out of the rock with the lantern" silently dropped everything after "sword".

**Recommendation:** Add these lines to friction 38 and the Sprout issue: a comma-split remainder after a line that was answered should not add an unrecognised notice. At the ledge, make `who is up there` a phrase of the shout as `who is there` already is.

Evidence: newcomer-1 turn 13 (""Hello yourself," says a voice ... / That sentence isn't one I recognize."); goal-seeker-1-opus turn 8 ("look among the trees -> (look)"); parser-breaker-1 turn 4 ("(pull the sword)")

### P8 · world-bug · low · 2/7

Small gaps. `examine walls` in the first puzzle square is "You can't see any such thing." although its description names marble and sandstone walls. `wear can` answered only "Taken." and the can was not worn, so it went to the bottom on the next move. `tug rope` is not a sentence the parser knows, though `pull rope` is.

**Recommendation:** Make "walls" a word of the puzzle's four walls, answered with the square's own wall description. Have `wear` on a thing that is not wearable refuse with Zork's "You can't wear the X." after any implicit take. Make `tug` a phrase of `pull`.

Evidence: explorer-1 turn 233 ("examine walls -> You can't see any such thing."); explorer-1 turn 156 ("wear can -> Taken."); explorer-1 turn 158 ("The shock of entering the frigid water has made you drop all your possessions"); goal-seeker-1-opus turn 14 ("tug rope -> That sentence isn't one I recognize.")

### P9 · design · low · 4/7

Round 7's ledge and lake changes landed, and the engine's counts agree. Every run that reached the lake dropped everything on the shore first. No lamp or torch went under: the lamp_under, lamp_dark_under, torch_under and bread_under passages are all unreached. Three runs waited out the nine ledge beats and got the staff, and the opus player quoted the pacing beat as a highlight. The newcomer left after one beat, although the beat said the ledge is where the man will look.

**Recommendation:** Keep both as they are. Do not add further ledge beats: the newcomer's departure is the original's MAN-SEEN working, and it was told.

Evidence: goal-seeker-1 turn 38 ("drop all (Lake Shore)"); explorer-1 turn 124 ("drop all (Lake Shore)"); goal-seeker-1-opus turn 44 ("drop all (Lake Shore)"); goal-seeker-1-opus turn 22 ("Footsteps, going away from the brink and coming back to it ..."); goal-seeker-1 turn 102 ("climb rope (after eleven waits; staff had)"); newcomer-1 turn 16 ("scramble down the cliff (after one wait)")

### P10 · design · low · 4/7

The deadly traps are working as the original's traps, and the players called them fair or their own fault rather than bugs. The explorer killed the figure two strokes after the waiting line, and its hood and cloak were gone for the remaining 200 lines. The parser-breaker and the opus run took the hood. The altar killed two runs after the "content to be looked at" image. 777 at the Technology Museum and a guard in 776 each killed once. The old man's third-visit line was quoted as a fair warning, one move before the opus run's fourth death.

**Recommendation:** Keep all of them, and keep the odds. The one thing to consider is the opus player's wish for an audible cue before a guard comes in. `listen` already answers with the voices, so the guards' clock could add a line about footsteps nearing the door on the move before a guard enters, if the original's I-GUARDS allows it. Log it if it departs.

Evidence: explorer-1 turn 82 ("The hooded figure, fatally wounded, slumps to the ground."); parser-breaker-1 turn 16 ("lower hood -> You slowly remove the hood ..."); goal-seeker-1-opus turn 114 ("touch table (view IV) -> Sacrificial Altar ... You have died"); explorer-1 turn 116 ("set dial 777, push button -> ... you become numb and then paralyzed and then dead."); goal-seeker-1-opus turn 234 ("A particularly vicious-looking guard enters the room and sees you."); goal-seeker-1-opus turn 455 ("I do not think there is a fourth in me.")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.09 | 0.09 |
| reading.refusedRate | 0.01 | 0 |
| faults | 0 | 1 |
| repetition | 30 | 39 |
| reach.places.never | 52 | 25 |
| reach.objects.never | 639 | 642 |
| reach.verbs.never | 75 | 70 |
| reach.handlers.never | 59 | 15 |
| reach.passages.never | 1924 | 1932 |
