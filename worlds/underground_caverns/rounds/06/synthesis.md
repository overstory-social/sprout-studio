# Synthesis

**Legibility:** partly. Every player understood the arc intent.md describes: a treasure hunt in and under the white house, the trophy case as the goal, the barred trap door, the troll, the maze and the dead adventurer, the Gallery, and the chimney's rule as the way home. None understood that there is a second way home through the grating, and none reached it. Told it was 'a changed version', most players looked for the change and found it in the author's additions rather than in Zork's own lines: the Management's note, 'somebody tidy', the cleared crawlway and the scuffed dust. Four of the six then read the world as being about an unseen caretaker, which intent.md never mentions (P2). Goals: the explorer met theirs ('egg into the trophy case') at turn 36 and went on to 70 points. The newcomer met theirs ('find some treasure and keep it safe') at turn 45, with the painting in the case, and by turn 133 had all three treasures cased (70 points) and the case closed, although their own report says 'not reached'. The goal-seeker ('as high a score as you can') had 65 of 70 at turn 135, with the egg in hand and not yet cased. What stood in the way was the run stopping at 136 without a report (P11), after spending turns on a second chimney trip and on fetching the key. Model differences: the brief says every persona was played by fable this round, so all six runs used the same model and the round offers no contrast between models. The persona differences are what one would expect: the prose-reader examined everything, the parser-breaker probed phrasing and the knife, the casual player stopped at 30 turns.

- explorer-1 (yes): A trimmed, rewritten slice of the white house and its caverns: bring the egg to a trophy case that 'expects to be filled', go down a self-barring trap door, past a troll and a small maze with a dead adventurer's coins, and find the narrow chimney home; the unfinished passages read as an honest, deliberate cut of a larger place. Goal met at turn 36, then 70 points by turn 146.
- goal-seeker-1 (partly): No report was filed. From the transcript, a straight Zork score run: score checked after each treasure, painting then coins up the chimney, a return for the key, then the egg; 65 points when the run stopped at turn 136.
- newcomer-1 (partly): A treasure hunt around and under a boarded-up house, half 'under renovation' by a Management that bars the trap door behind you, so the only way home with loot is a chimney that fits you, a lamp and one thing more. Goal met (all three treasures cased and the case closed by turn 133); they had planned to use the key on the grating from above, which the world refuses by design.
- casual-1 (partly): The Zork opening with an underground being edited or renovated while you walk through it: treasure-hunting under a house quietly being rebuilt around you, with the Management's notes as the sign of change.
- prose-reader-1 (partly): The old white house rewritten in a dry, careful voice, with a new presence threaded through it: a tidy Management that clears crawlways, bars doors, returns your lamp after death and pins notes on unfinished passages. 'The story is about them.'
- parser-breaker-1 (partly): The classic white-house game retold with dry, morbid wit: the familiar errands, and a maze 'openly uninterested in you' whose objects are small essays on adventurers who never came back up; being one more luckless adventurer, told with affection.

## Points

### P1 · design · high · 5/6

The second way home has gone unused for a second round. Nobody reached the Grating Room, and nobody used the skeleton key in its lock or saw the leaves fall through, so after 36 runs the Grating Room and the key in the grating are still unmet. The engine counts back this up: maze_6 to maze_15, dead_end_3 and 4 and grating_room were never reached, and the grating_room grate_unlock/grate_open and GratingBelow gate_open handlers never fired. The grating also turns out to be unnecessary. Two runs reached the 70-point ceiling with two chimney trips (explorer at turn 146, newcomer with all three treasures cased by turn 131), so the grating's one advantage, carrying everything at once, never came up. Three of the four players who took the key wanted a lock for it and found none: explorer tried the barred trap door, goal-seeker tried the gothic door, and newcomer planned to unlock the grating from above, which the world refuses by design. Every key-holder but goal-seeker then dropped the key in the Studio to fit up the chimney, and goal-seeker went back down for it.

**Recommendation:** The cap is no longer what stops players: 70 points fits in about 130 turns. What stops them is that nothing points from the key to a lock below. Keeping to Zork, options are: (a) accept that the grating is Zork's secret and leave it covered by grating.json and coins.json, saying so in intent.md; or (b) let the key's authored examine text, which is already the author's voice, hint at a skull-and-crossbones lock 'somewhere below'. Option (b) still leaves the rooms joined as dungeon.zil joins them. Also check that a key used on the grating from the Clearing gives Zork's 'can't reach the lock' answer, since newcomer was walking straight into that. A director-steered run with a goal like 'find another way out of the maze' would test the room directly.

Evidence: explorer-1 turn 118 ("unlock trap door with skeleton key -> It doesn't seem to work."); explorer-1 turn 127 ("Skeleton key: Dropped. (to fit the chimney)"); explorer-1 turn 146 ("Your score is 70 (total of 350 points), in 115 moves."); goal-seeker-1 turn 117 ("unlock gothic door with key -> It doesn't seem to work."); newcomer-1 turn 109 ("drop the skeleton key (in the Studio, before the chimney)"); newcomer-1 turn 142 ("open the grating -> The grating is locked."); parser-breaker-1 turn 149 ("Forty-odd turns in the maze and nearly every path looped me back to the leaflet at the entrance. I never found the grating or a second way out."); prose-reader-1 turn 150 ("The turn cap landed while I was still lost in the maze")

### P2 · design · medium · 4/6

Players read the world as being about an unseen caretaker ('The Management', 'somebody tidy'), and that idea is not in intent.md. Zork supplies only one of the hints, 'someone barring' the trap door. The author's own non-Zork lines add the rest: the Management's note on the unbuilt passage, the crawlway that 'someone has cleared lately', the trap door's dust 'scuffed by somebody's comings and goings', and the death line's 'somebody tidy has put the lamp back'. Four reports made this caretaker what the world is about, three players wished they could follow it, and nothing in the world ever pays it off.

**Recommendation:** Decide whether the caretaker is wanted. If faithfulness is the yardstick, cut the 'someone/somebody' wording from the crawlway, the trap door's dust and the death line, so that Zork's barring is the only hint left. Keep the Management note: the brief asks edges to refuse in Zork's voice, and players enjoy it. If the caretaker stays, record it in intent.md as a deliberate addition, because players will keep chasing it.

Evidence: prose-reader-1 turn 52 ("somebody is working down here, and the story is about them."); prose-reader-1 turn 94 ("'Somebody tidy' — the first time the unseen caretaker was named, even sideways."); prose-reader-1 turn 121 ("I wanted to know who they were more than I wanted any treasure."); newcomer-1 turn 47 ("Made the barring feel like a person, not a mechanism."); newcomer-1 turn 55 ("Barred in again. I'd half hoped it was a one-time thing."); casual-1 turn 21 ("First sign this isn't plain Zork... made me want to know what else was changed."); explorer-1 turn 48 ("The world admitting its own edges with a joke rather than a blank wall")

### P3 · engine-bug · medium · 2/6

When a recognised verb is followed by a preposition it does not take, the parser treats the rest of the sentence as the object's name. It then answers 'You can't see any such thing.' even though the thing is in plain sight. 'squeeze through the window' (with the window just opened), 'climb down into the chasm' (standing at its edge, after examining it), 'walk around to the back of the house' and 'feel around for a grue' all got not_here. 'tie the rope to the chasm' got a proper answer one turn after 'tie the rope to the edge of the chasm' did not. Players read the visibility claim as the world pretending not to understand.

**Recommendation:** File this with Sprout: when a verb matches but its object phrase begins with a preposition the verb's patterns don't take, the answer should be 'That sentence isn't one I recognize.', not not_here. In the world, consider Zork-compatible patterns for the verbs it already declares: `squeeze through` as THROUGH/enter, `climb down into` the chasm giving the chasm's own refusal, `walk around to` as walk around.

Evidence: parser-breaker-1 turn 12 ("squeeze through the window -> You can't see any such thing."); parser-breaker-1 turn 16 ("feel around for a grue -> You can't see any such thing."); newcomer-1 turn 3 ("walk around to the back of the house -> You can't see any such thing."); newcomer-1 turn 66 ("climb down into the chasm -> You can't see any such thing."); newcomer-1 turn 65 ("Felt like it was pretending not to understand.")

### P4 · world-bug · low · 2/6

Some names the room text uses are not things the world will answer to. 'examine the forest path' Behind House gets not_here: behind_house.path is never reached, so it does not answer to 'forest path'. 'examine the field' at West of House gets not_here too. A bare 'smell' is not recognised, although the world declares a smell verb, which was never reached in any run.

**Recommendation:** Add 'forest' as an adjective on the Behind House path, and on the other rooms' paths where the description calls them a forest path. Give the bare `smell` Zork's 'What do you want to smell?' prompt, or the room's answer, as `listen` now has. Leave the field as Zork leaves it, unless the director wants it.

Evidence: prose-reader-1 turn 8 ("examine the field -> You can't see any such thing."); prose-reader-1 turn 14 ("examine the forest path -> You can't see any such thing."); parser-breaker-1 turn 50 ("smell -> That sentence isn't one I recognize.")

### P5 · design · low · 5/6

The chimney's rule works as a puzzle: every player who reached the Studio read the refusal and went up with the lamp and one thing. That one thing was the painting for explorer, newcomer, prose-reader and parser-breaker, and the painting first, then the coins, for goal-seeker. The cost is a run of one-at-a-time drops: prose-reader dropped seven things singly and newcomer five, which shows up in the repetition count.

**Recommendation:** Keep it. Check whether Sprout reads `drop all but the painting and the lamp` (or `except`). If it does, nothing changes. If it doesn't, log it in friction.md, since that is the sentence a player wants at the chimney.

Evidence: explorer-1 turn 128 ("Fair rule, clearly stated, but it meant a second full trip underground for the painting."); newcomer-1 turn 36 ("A refusal that told me exactly how to fix it."); prose-reader-1 turn 68 ("room for you, a light to climb by and one thing more, and not an inch besides."); parser-breaker-1 turn 97 ("A restriction stated so exactly that I knew what to drop without guessing."); goal-seeker-1 turn 83 ("drop sword, coins, key, and paper")

### P6 · design · low · 5/6

Every player who went down a second time found the trap door barred again: explorer, newcomer, goal-seeker twice, parser-breaker, and prose-reader twice, once after a chimney climb and once after a death. Every return trip was by the chimney or by dying, so the re-barring (TOUCHBIT, as in intent.md) fired every time. Players read the stairs as a one-way door and the chimney as the only way home. That is Zork's design, and it answers the round's watch item on whether a death and a second descent read as Zork's barred trap door.

**Recommendation:** Keep it as built. It reads as intended. Drop it from next round's watch list.

Evidence: explorer-1 turn 136 ("Went down the trap door again and it barred itself again. So the chimney is the only way home every time."); newcomer-1 turn 55 ("Barred in again."); goal-seeker-1 turn 107 ("The trap door crashes shut, and you hear someone barring it."); parser-breaker-1 turn 88 ("The trap door crashes shut, and you hear someone barring it."); prose-reader-1 turn 114 ("The trap door crashes shut, and you hear someone barring it. (after a death)")

### P7 · design · low · 4/6

The maze in BRIEF mode is Zork's, and it tires readers. Re-entering a room prints only 'Maze'. Because the skeleton is part of Maze 5's description, BRIEF hides it on a return visit, and parser-breaker briefly thought it had gone. Dead ends that do not lead back the way you came in (Zork's one-way joins) read as unfair. Players solved the maze Zork's way, with markers: four runs reached the remains, at turns 33 to 88.

**Recommendation:** Keep the maze as dungeon.zil joins it, as round 5 decided. No change is needed for faithfulness. Note the BRIEF-hidden skeleton in intent.md as Zork's own behaviour.

Evidence: casual-1 turn 23 ("Maze: 'Maze' and nothing else when I moved."); prose-reader-1 turn 135 ("identical rooms, blocked directions, and no prose to reward the lingering."); parser-breaker-1 turn 116 ("On a brief re-entry the skeleton was not listed and I thought it had gone"); newcomer-1 turn 85 ("Came east into a dead end, can't go west back out."); explorer-1 turn 84 ("An unlisted 'up' from one maze room opened onto the skeleton")

### P8 · design · low · 6/6

The troll's blows now come from him, and nobody found them wrong. His swings land on his own turns: 'The troll's swing almost knocks you over' came in the half-minute after an examine or a gift. Knockouts, disarms and recoveries read as Zork's. The fight still plays as dice. Casual needed five swings, and prose-reader lost their head to the troll's first counter-blow and called it 'dice rather than skill'. The other four won in one to three swings. Parser-breaker fed the troll garlic first, and nobody threw anything at him, woke him, or saw him come round (the come_round handler never fired).

**Recommendation:** Keep Zork's tables, as the director decided. The round-6 watch item ('does the fight read as his?') is answered yes. Carry throwing at him, waking him and the come-round to the watch list.

Evidence: casual-1 turn 18 ("Troll fight is dice: miss, knocked to knees, 'still recovering', five swings."); prose-reader-1 turn 94 ("The troll neatly removes your head."); parser-breaker-1 turn 32 ("The troll... gleefully eats it."); newcomer-1 turn 20 ("One swing and the troll's out cold. I felt dangerous."); explorer-1 turn 43 ("Three thrusts and the troll's head came off"); goal-seeker-1 turn 17 ("attack troll with sword (one blow, troll dead)")

### P9 · design · low · 6/6

The examine texts the author wrote are what players valued most, and gaps in them stand out. The chasm line was quoted by four of six players, the skeleton, the knife, the dead lantern and the trophy case by several. Parser-breaker gave the prose 5 for exactly these lines. Where Zork's default answer shows through, the prose-reader noticed: the lunch and garlic get 'nothing special', inside a sack with its own sentence.

**Recommendation:** intent.md promises word-for-word Zork room text. The examine layer is the author's own voice and plainly what players come for. Say so in intent.md. Optionally give the lunch and garlic a sentence each, as the sack has.

Evidence: explorer-1 turn 120 ("The chasm drops away from your feet into a dark that your lamp does not so much light as annoy."); newcomer-1 turn 64 ("best line of the night."); parser-breaker-1 turn 60 ("The rust has not touched the edge. That is not a thing rust usually overlooks."); prose-reader-1 turn 24 ("There's nothing special about the lunch."); casual-1 turn 29 ("Most of the paintings have been stolen by vandals with exceptional taste.")

### P10 · design · low · 5/6

Status of the watch list. Met this round: the rusty knife turned on something (parser-breaker stabbed the skeleton and the knife slit their throat; the knife's spend handler fired), the knife's pulse on the sword, the one-way tunnels' warning (seen three times; explorer understood it only after taking it), stairs climbed by name, comma chaining, a gift to the troll, and darkness in the attic, twice, both times backed out of harmlessly. Still unmet: the grue (handler never fired), the skeleton's ghost and banishing, anything dropped from the tree (fall/landed never fired), the egg broken, the troll woken or thrown at, and the Grating Room.

**Recommendation:** Take the knife, stairs, commas and tunnel warning off the watch list; they read as intended. Carry the grue, the ghost, the tree drop, the broken egg, waking or throwing at the troll, and the grating. They are still covered only by sprout test scripts.

Evidence: parser-breaker-1 turn 64 ("The knife seems to sing as it savagely slits your throat."); parser-breaker-1 turn 59 ("your sword gives a single pulse of blinding blue light."); explorer-1 turn 72 ("A one-way 'down' with a warning I would not be able to get back up; I did not understand the warning until I tried."); newcomer-1 turn 18 ("go down the stairs"); newcomer-1 turn 50 ("go up the stairs"); goal-seeker-1 turn 83 ("drop sword, coins, key, and paper"); explorer-1 turn 10 ("You have moved into a dark place. / It is pitch black. You are likely to be eaten by a grue."); parser-breaker-1 turn 15 ("It is pitch black. You are likely to be eaten by a grue.")

### P11 · engine-bug · low · 1/6

The goal-seeker run stopped at 136 typed lines with no leave step and no report. Its last line was 'go down' from Up a Tree, with the egg in hand and 65 of 70 points. This is the studio's playtest harness, not Sprout or the world: the engine logged no faults. The goal-seeker therefore has no report and no ratings, and is judged here only from its transcript and metrics.

**Recommendation:** Check the workflow's playtester step for goal-seeker-1: why it ended before the cap and why no report was written. Re-run the goal-seeker if the director wants its report this round.

Evidence: goal-seeker-1 turn 135 ("Your score is 65 (total of 350 points), in 106 moves."); goal-seeker-1 turn 136 ("go down -> Forest Path (run ends; no leave, no report)")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.11 | 0.12 |
| reading.refusedRate | 0.01 | 0.01 |
| faults | 0 | 0 |
| repetition | 12 | 19 |
| reach.places.never | 10 | 15 |
| reach.objects.never | 121 | 118 |
| reach.verbs.never | 43 | 52 |
| reach.handlers.never | 17 | 17 |
| reach.passages.never | 392 | 424 |
