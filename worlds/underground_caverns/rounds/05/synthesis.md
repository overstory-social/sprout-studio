# Synthesis

**Legibility:** legible. Every report recognized a faithful, re-dressed Zork. Players read it as a treasure hunt into the trophy case, beneath a house whose trap door is barred behind you, with the edges of the unbuilt Empire fenced off in the world's own voice, and with the troll, the chimney's rule and the maze as Zork's puzzles. Two players inferred that the skeleton key fits the Clearing's grating, which is the v3 loop intent describes, though nobody closed it. Notes: goal-seeker-1 filed no report, and its run stops at turn 73 with no leave step, so what it understood comes from its transcript only. Its route to the remains was exactly intent's (west, south, east, up) in four moves, and its score checks look like play from memory of Zork despite the instruction. Each persona had one run, and the task labels every persona as played by fable, so no difference between models can be drawn from this round.

- casual-1 (partly): The old white-house adventure under renovation: lamp, sword, trap door, kill the troll; the east way is literally unfinished and the west is a looping maze.
- explorer-1 (yes): Zork's opening territory rewritten with a dry narrator: scavenge treasures (the egg, the painting) home to a trophy case that 'expects to be filled', past a self-barring trap door, a troll, a looping maze and a one-thing chimney, with the edges fenced off by the Management.
- goal-seeker-1 (partly): No report filed. From the transcript: Zork played for points, straight to the troll, through the hole to the remains, taking the key and the coins, then lost in the maze looking for a way out.
- newcomer-1 (yes): Getting one beautiful thing home when the way you came is shut: a trophy case that wants filling, a barred trap door, a painting, the chimney loop, and a maze that is a trap of sameness.
- parser-breaker-1 (yes): A reworked Zork in a dry, weary voice: house, barred trap door, a troll who eats anything, a small underground loop, and a tight maze with a dead adventurer where the game makes you work.
- prose-reader-1 (yes): A trimmed slice of the white-house adventure, roped off with polite notices: a treasure hunt into a trophy case, with a locked grating 'the key in the maze is plainly for', and writing that keeps pointing at absent people who were here before.

## Points

### P1 · design · high · 6/6

The Maze eats the 150-turn budget, and v3's new ending is never reached. All six runs went west into the maze. Three found the remains: goal-seeker in 4 moves, prose-reader in 4, parser-breaker after about 90 turns. Those three all held the skeleton key, and none found the Grating Room. Goal-seeker had the key and the coins by turn 30 and spent the next 43 turns circling until its run ended. Metrics agree: grating_room, Maze 8 to 13 and Dead Ends 3 and 4 were never reached, and the unlock verb and every grating handler went unused. Most of the jump in unread lines (0.08 to 0.11) and in repetition (3 to 12) is the maze's 'You can't go that way.', its identical room text and marker drops. Three runs hit the turn cap mid-maze or with the grating just uncovered. The newcomer quit, exhausted, at turn 104. Goals: the goal-seeker (highest score) did not reach it: it got 45 of 70, and the maze and its missing Grating Room were what stopped it. The explorer (egg in the case) reached it at turn 71 and reached 55 points by turn 135. The newcomer (treasure kept safe) reached it with the painting in the case at turn 69.

**Recommendation:** Keep the maze as Zork has it. Raising the turn cap for this world is the director's call (the brief's budget sets it). As built, a run that also wants the egg and the painting cannot reach v3's 'done' in 150 turns. Until it changes, record in intent.md that the grating from below, the key and the leaves falling are covered only by grating.json and coins.json.

Evidence: goal-seeker-1 turn 27 ("take key -> Taken. (score 45 at move 27, then 43 turns of maze without the Grating Room)"); goal-seeker-1 turn 73 ("go northeast -> You can't go that way. (run ends in Maze 5)"); prose-reader-1 turn 150 ("Turn cap landed with the key in my pocket and the grating still locked above me somewhere."); parser-breaker-1 turn 83 ("Thirty-odd turns of bare 'Maze' and 'Dead End' with nothing found"); parser-breaker-1 turn 149 ("I was mid-maze, holding the coins and the skeleton key, still hunting for whatever that key opens."); explorer-1 turn 150 ("Moved the leaves, a grating is revealed -- and the very next three lines bounced off the 150-turn cap."); newcomer-1 turn 104 ("after thirty-odd turns of a maze where every room reads identically ... I ran out of ways to find anything new"); casual-1 turn 29 ("two markers deep in a maze ... when it told me I'd used all 30 turns")

### P2 · design · low · 5/6

The maze reads as a maze, and Zork's way of solving it works. Five runs dropped things to mark rooms and read their markers again. Three noticed the one-way tunnel warning. Several complained that rooms are identical, that entrances don't run both ways, and that the warning comes only after the move. All of that is Zork's own maze, joined as dungeon.zil joins it. I checked Maze 1's self-loop, Dead End 1's single south exit and Maze 5's exits against the transcripts. The cost was what players gave up as markers: the explorer used the knife, axe, garlic and lunch, and the prose-reader its only sack.

**Recommendation:** Keep as built. Don't add exits lists or differences between rooms: rooms all alike are the puzzle, and players found the classic answer to it without help.

Evidence: casual-1 turn 28 ("My leaflet was sitting there ... Actually useful: the markers work."); newcomer-1 turn 84 ("My leaflet marker was exactly where I'd dropped it, so the trick worked."); newcomer-1 turn 88 ("One-way drop, warning only once I'd already gone through."); goal-seeker-1 turn 61 ("go south -> Maze / A small leaflet is on the ground."); explorer-1 turn 94 ("I burned the knife, axe, garlic and lunch as breadcrumbs (turns 94-101)"); prose-reader-1 turn 143 ("Entered the dead end from the west, could not go back west."); parser-breaker-1 turn 66 ("Came into the dead end heading east, and west wouldn't take me back out.")

### P3 · world-bug · medium · 2/6

Talking to or asking the troll prints two refusals in a row: Thing's 'You can't talk to the troll!' and then the troll's own 'The troll isn't much of a conversationalist.' troll.sprout overrides `as target for talk` and `as target for ask` without declaring `without ... from Thing`, as it already does for greet, so both parts run. Both players had just been greeted with the troll's bow, and read the stacked refusal as the game taking it back.

**Recommendation:** In troll.sprout, add `without as target for talk from Thing` and `without as target for ask from Thing`, so only the troll's line is said. Add a test that asking the troll gives exactly one line.

Evidence: newcomer-1 turn 22 ("You can't talk to the troll! / The troll isn't much of a conversationalist."); prose-reader-1 turn 46 ("two refusals stacked on top of each other ... The bow at 45 had promised more."); prose-reader-1 turn 47 ("ask the troll about the trap door -> same two lines")

### P4 · world-bug · low · 2/6

'go down the stairs' and 'climb down the chimney' get the stock 'You can't do that!'. The climb_down verb's 'go down [target]' form catches the sentence, and neither the staircase nor the Kitchen's chimney flue answers it. A plain 'go down' right after worked. Zork's Santa joke for the Kitchen chimney, which intent lists, is not reached by 'climb down chimney'.

**Recommendation:** Give the trap door's staircase (the living_room and cellar stairs) `as target for climb_down` / `climb_up` that go the way the stairs lead. Give the kitchen chimney_flue Zork's chimney answer for climb_down as well as climb.

Evidence: newcomer-1 turn 18 ("go down the stairs -> You can't do that!"); parser-breaker-1 turn 14 ("climb down the chimney -> You can't do that!")

### P5 · world-bug · low · 2/6

A bare 'listen' is not a sentence: the listen verb only has 'listen to/for [target]', and it was never reached. Forest rooms keep mentioning a songbird, and the maze invites listening, so both players who tried it got 'That sentence isn't one I recognize.'

**Recommendation:** Add a bare 'listen' form that answers in Zork's voice, for example the songbird where it sings and Zork's default elsewhere, so the line is at least read.

Evidence: explorer-1 turn 60 ("'listen' isn't a recognized sentence even though the room keeps telling me I hear a songbird."); parser-breaker-1 turn 85 ("listen -> That sentence isn't one I recognize.")

### P6 · language-gap · medium · 1/6

In Maze 5, 'take bag' with the brown sack in hand answered 'You already have that!' and did not take the leather bag of coins. The player lost a turn and came close to missing the treasure. This is the same gap friction 59 logs for the two lanterns: Sprout's parser never asks which one, and prefers what is nearest. Zork's TAKE syntax prefers things not already held, so it would have taken the coins. The prose-reader had dropped its sack in the maze first, and 'take the bag' worked.

**Recommendation:** Add the bag/sack case to friction 59. Ask Sprout for a way for a verb to say which things it prefers (take prefers things not held), or for the parser to ask. Until then, consider whether the sack needs to answer to 'bag' at all, given that the coins are in the slice.

Evidence: goal-seeker-1 turn 26 ("take bag -> You already have that!"); prose-reader-1 turn 131 ("take the bag -> Taken. (sack already dropped in Maze 1)")

### P7 · world-bug · low · 1/6

After a death, the trap door no longer crashes shut behind the visitor. The prose-reader, killed by the troll, opened the trap door from above and went down twice, at turns 69 and 118, with no crash and no barring. Intent says whoever opens it from above and goes down hears it crash shut again, and the parser-breaker (turn 116) and newcomer, who never died, did hear it. Zork's own cellar bars the door only once (TOUCHBIT). Also, the sword's glow outlived the death: the sword was scattered to the Clearing, and on being carried north it announced 'Your sword is no longer glowing.' above ground.

**Recommendation:** Decide between intent's rule (it bars on every descent) and Zork's (it bars once), and make death leave the door as the chosen rule says. Clear the sword's glow when the death handler scatters belongings. Add a death-then-descend test.

Evidence: prose-reader-1 turn 69 ("down -> Cellar (no crash, no barring)"); prose-reader-1 turn 118 ("down -> Cellar / Your sword is glowing with a faint blue glow."); prose-reader-1 turn 96 ("north -> Forest ... Your sword is no longer glowing."); parser-breaker-1 turn 116 ("go down -> The trap door crashes shut, and you hear someone barring it.")

### P8 · world-bug · low · 2/6

Examining the boarded front door gives only 'The door is closed.', not a word about the boards, although the room's first line calls it boarded. west_of_house.boards exists but was never reached. Both players set it against the mailbox's care. The brief asks that every thing a description names answer with a description of its own.

**Recommendation:** Give the front door a description in Zork's voice that names the boards, and keep 'The door is closed.' as its second line.

Evidence: explorer-1 turn 5 ("'examine door' only said 'The door is closed' when the room calls it boarded"); prose-reader-1 turn 6 ("Examining the boarded front door gave only 'The door is closed.'")

### P9 · world-bug · low · 2/6

'look into the chasm', 'search the walls' and 'search the dead end' all get the generic 'You can't look inside a <thing>.' The chasm is the place's best-loved line (P13), and players who tried to peer into it hit a container refusal.

**Recommendation:** Give the chasm a look_in answer (its examine line, or a new line in Zork's voice). Consider making search on walls and dead ends answer with their examine text.

Evidence: parser-breaker-1 turn 100 ("'look into the chasm' -> 'You can't look inside a chasm.' A bottomless chasm I can't even peer at."); newcomer-1 turn 51 ("'look into the chasm' answered 'You can't look inside a chasm.'"); newcomer-1 turn 104 ("'search the walls' answered 'You can't look inside a surrounding wall.'")

### P10 · engine-bug · low · 1/6

The parser misread 'drop the leaflet here' as naming a thing called 'here' and answered 'You can't see any such thing.', though the leaflet was in hand. The same sentence without 'here' worked two turns later.

**Recommendation:** File with Sprout: a trailing 'here' (or 'on the ground', 'on the floor') after drop and put should be ignored, or answered as unknown, not not_here.

Evidence: newcomer-1 turn 29 ("drop the leaflet here -> You can't see any such thing.")

### P11 · language-gap · low · 1/6

Zork's way of addressing an actor, 'troll, hello', is not understood, although 'hello troll' is. The explorer wanted to speak to the troll before and after disarming him.

**Recommendation:** Log in friction.md alongside 51 (a comma does not join two commands) and ask Sprout for '<actor>, <command>' addressing. No world change is needed.

Evidence: explorer-1 turn 81 ("'troll, hello' not recognized")

### P12 · design · low · 3/6

Some natural phrasings fall through to 'That sentence isn't one I recognize.': 'what am I carrying?', 'what do I have', 'keep going around the house', 'climb over rope' at the canyon sign, and 'exits'. Zork knows none of them either, but the canyon rope is new prose that invites the attempt, and the explorer wanted a refusal in character.

**Recommendation:** Give the canyon rope climb/climb over/duck under answers in the Frobozz voice. Leave inventory synonyms and 'exits' out, as Zork does.

Evidence: newcomer-1 turn 30 ("'what am I carrying?' and 'what do I have' both not recognized"); newcomer-1 turn 5 ("'keep going around the house' was not recognized"); explorer-1 turn 48 ("'climb over rope' not understood. I wanted to at least be told off for trying."); parser-breaker-1 turn 67 ("exits -> That sentence isn't one I recognize.")

### P13 · design · low · 6/6

The round-4 additions and the new prose work. The chimney's rule, stated in its refusal, was understood and solved on the first try by every player who met it. The barred trap door was the hook in all six runs. The Management's note and the canyon sign read as jokes inside the world, not as walls. The new maze prose (the skeleton, the rusty knife's edge, the dead lantern, 'had one idea, and saw it through') was quoted as the best writing in the place. Prose ratings were 4 to 5 in all five reports.

**Recommendation:** Keep as built.

Evidence: explorer-1 turn 126 ("A rule stated as a description. I understood the constraint instantly"); newcomer-1 turn 57 ("Clear rule, clear choice; the painting had to be the one thing."); parser-breaker-1 turn 106 ("I solved it in one move because of it."); prose-reader-1 turn 81 ("The chimney refusal told me exactly the rule"); casual-1 turn 14 ("Trap door slammed and barred behind me ... Good hook."); parser-breaker-1 turn 139 ("It's the game admitting what the maze is for."); goal-seeker-1 turn 33 ("examine rusty knife -> ... That is not a thing rust usually overlooks.")

### P14 · design · low · 1/6

'Done.' when a treasure goes into the case feels flat to the prose-reader, as the one bare line at the moment the game exists for. It is Zork's own answer. The room's 'Your collection of treasures consists of:' list does the celebrating, and the explorer and newcomer quoted it as the moment of success.

**Recommendation:** Keep Zork's 'Done.' The brief allows a little spice, so a following line from the case in its 'expects to be filled' voice is an option, not a need.

Evidence: prose-reader-1 turn 68 ("Putting the first treasure in the case: 'Done.' No ceremony at all"); newcomer-1 turn 69 ("Your collection of treasures consists of: A painting -- The moment I knew I'd done what I came to do.")

### P15 · design · medium · 1/6

Darkness was met at last, once and harmlessly: the parser-breaker climbed to the Attic without a lit lamp and got the dark-place line and the grue warning. It was the first time in 30 runs. Nobody met the grue (its handler never ran) or let the lamp go out in the maze. Nobody touched the skeleton (banish never ran) or turned the rusty knife on anything. Nothing was dropped from the tree (fall and landed never ran). Nobody threw anything at the troll, woke him, or put the egg at risk. The parser-breaker took the rusty knife but had already dropped the sword, so the pulse was correctly not shown.

**Recommendation:** Carry these into round 6's watch list. They remain covered only by maze_dark.json, skeleton.json and the tree tests.

Evidence: parser-breaker-1 turn 15 ("go up -> You have moved into a dark place. / It is pitch black. You are likely to be eaten by a grue."); parser-breaker-1 turn 141 ("take the bag and the key and the knife -> ... Rusty knife: Taken.")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.08 | 0.11 |
| reading.refusedRate | 0 | 0.01 |
| faults | 0 | 0 |
| repetition | 3 | 12 |
| reach.places.never | 1 | 10 |
| reach.objects.never | 85 | 121 |
| reach.verbs.never | 54 | 43 |
| reach.handlers.never | 8 | 17 |
| reach.passages.never | 381 | 392 |
