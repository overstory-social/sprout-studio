# Synthesis

**Legibility:** legible. Every run that filed a report read the world as a Zork II-style treasure hunt under the Great Underground Empire, with a meddling Wizard who has the treasures south of the ravine. That is the intent's arc and the hook's framing. The long opus runs also named the chain of object puzzles (riddle, bucket, Bank walls, dragon and glacier, balloon, safe), which is the intent's 'done' list. Short runs saw only the opening, but what they took from it is right. newcomer-1 filed no report, having left after 14 commands, and is left out below.

- casual-1 (yes): A Zork II-style trip: lamp and sword, a teasing Wizard, a garden, and recovering the treasures he hoarded south of the ravine.
- prose-reader-1 (yes): A retelling of Zork II territory, where the Wizard hints that the treasures lie south, behind a stone door that asks a question and a room that will not keep still.
- parser-breaker-1 (yes): A Zork-style cavern adventure where a Wizard has hoarded the Empire's treasures south of a ravine.
- explorer-1 (yes): A Zork II trip with a cranky spell-casting Wizard, treasures south of the ravine, and a map of garden, carousel, dragon, bank and glass maze.
- goal-seeker-1 (yes): A Zork-like empire where the Wizard's hint sets the goal: collect the treasures, pearls first behind a questioning stone door.
- goal-seeker-1-opus (yes): The Wizard's leftovers from the Great Underground Empire: get the loot back through a chain of old-school object puzzles (riddle, bucket, Bank walls of light, dragon and glacier, balloon, safe), with just enough hints.
- newcomer-1-opus (yes): A tongue-in-cheek treasure hunt in the old Empire: a cranky Wizard hid the treasures and throws half-finished spells, and the place is a big puzzle box of riddle, bucket, key and mat, and a robot to order about.

## Points

### P1 · design · high · 4/8

Goal and replays. goal-seeker-1 (sonnet) did not reach the goal: it got through the Bank and into the Oddly-angled Rooms, never found the Riddle Room, and quit stuck at turn 59. The Carousel's draw sent it north to the Menhir Room (t38), and from there it went down the Stairway into the maze (t41-59). goal-seeker-1-opus, on the same seed, got much further. It reached a game-over ending (the third death, 115 of 400, 291 moves) after the riddle, the pearl, the well, the Bank loot, the drowned dragon, the ruby, the zorkmid, the stamp and the crown. Four things cost it: the cake and pool trap (death 1, t91), the dragon's arithmetic (death 2, t191), Filch taking the Bank loot (t170), and a three-move wait inside the Dusty Room's collapse window (death 3, t288). newcomer-1 (sonnet) left after 14 commands at the gazebo and filed no report. newcomer-1-opus played about 270 turns: the blue sphere by mat and opener, the riddle, the pearl, the well, the robot, the triangular button and the red sphere. Then the Eat-Me cake stranded it, it drowned in the pool and quit. Its blockers were parser phrasing, Carousel draws, Float and Freeze dead time, and the cake trap. Neither opus run reached Room 8, the lair, the Kennel or the bases.

**Recommendation:** Treat the opus replays as the map of what a determined player meets. On both seeds the sonnet run stopped in the first or second hub (the garden, the Carousel, the maze) and the opus run went on until a hard trap stopped it. Fix the hubs (P2, P3) for the short runs and the traps (P5, P6, P7) for the long ones.

Evidence: goal-seeker-1 turn 38 ("go north -> You're not sure which direction is which. ... Menhir Room"); goal-seeker-1 turn 59; goal-seeker-1-opus turn 288 ("Your score is 115 (total of 400 points), in 291 moves."); newcomer-1 turn 14 ("take the matchbook and look at the unicorn (then leaves, no report filed)"); newcomer-1-opus turn 254 ("eat the green cake -> Posts Room")

### P2 · design · high · 6/8

The Carousel is still where short runs end, for the third round running. casual-1 and prose-reader-1 quit on the move they entered it and never tried an exit, so round 5's first-throw line never fired for them. Four longer runs call it a slot machine. The hook names 'a room that will not keep still', and players recognise it and stop.

**Recommendation:** Move the reason to keep going into the first description, not the first throw. On the first visit, say in the narrator's voice that the floor turns and every passage still leads somewhere, so trying is the way through. Consider giving the Riddle Room's passage a tell on that first visit as well, since the hook promises that door.

Evidence: casual-1 turn 18 ("go west -> Carousel Room (last command)"); prose-reader-1 turn 21 ("go west -> Carousel Room (last command)"); explorer-1 turn 25 ("You have been thrown out of here enough times now to have noticed that the passages are not quite identical after all"); goal-seeker-1 turn 13; goal-seeker-1-opus turn 58 ("The random carousel turned every trip into a slot machine."); newcomer-1-opus turn 93

### P3 · design · high · 3/8

Every run that entered the Oddly-angled Rooms bogged down there, and two quit there. None of the eight runs ever saw the 'Babe Flathead' tell: three took or saw the club and none examined it. The windows read 'flickering dimly' almost everywhere. In brief mode the room at the foot of the stair looks like the others, so players typed 'up' over and over: 12 'go up' no_way lines across three runs, 8 of them in explorer-1. diamond_9 was never reached and the bases were never run.

**Recommendation:** Put the burned name where players will see it without examining: in the club's room line or its 'Taken.' (for example 'a wooden club with something burned into the handle'). Let the stair room's brief entry keep its stairway line. Make the window grades more distinct, so dim, brighter and dark read as a count.

Evidence: goal-seeker-1 turn 43 ("take club and window -> Wooden club: Taken. (never examined)"); goal-seeker-1 turn 48 ("go up -> You can't go that way."); explorer-1 turn 85; explorer-1 turn 87 ("examine window"); goal-seeker-1-opus turn 24 ("take club -> Taken."); goal-seeker-1-opus turn 32 ("look -> ... A marble stairway leads upward. (absent from the brief entry a move before)")

### P4 · world-bug · medium · 2/8

In the Oddly-angled Rooms a 'no way' draw prints 'There is no way to go in that direction.' and then a room heading, as if the player had moved. In goal-seeker-1-opus the newspaper it had just dropped was in the room re-described, so it had not moved. Players could not tell whether they had moved. The engine's repetition counter caught this answer three times.

**Recommendation:** If the draw leaves the player where they are, print only the refusal, or say in voice that the floor turned them back into the same room. Print a room heading only when the player has moved.

Evidence: goal-seeker-1 turn 51 ("There is no way to go in that direction. / Oddly-angled Room / ... window which is dark."); goal-seeker-1-opus turn 28 ("There is no way to go in that direction. / Oddly-angled Room / ... There is a newspaper here.")

### P5 · design · high · 2/8

Both runs that reached the Tea Room were stranded by the cakes, and both drowned in the pool. In goal-seeker-1-opus the load limit refused the red cake, so it shrank carrying only the blue one, with the red cake out of reach on the roof. In newcomer-1-opus the player ate Eat-Me holding no cake and had no way back. In each case the pool killed in one command with no warning beyond 'deeper than it looks'. For newcomer-1-opus that death scattered three treasures and ended the run.

**Recommendation:** Keep Zork's trap but give it a tell before it costs. Have the Eat-Me cake's read or close-up, or the Tea Room's table, suggest that a visitor who means to come back brings a cake. Have the pool's close-up say plainly that it is deeper than a swimmer. Round 5's Posts Room line comes only after the mistake.

Evidence: goal-seeker-1-opus turn 81 ("Cake frosted with orange letters: Your load is too heavy. Cake frosted with red letters: Your load is too heavy."); goal-seeker-1-opus turn 84 ("Cake frosted with red letters: You're holding too many things already!"); goal-seeker-1-opus turn 91 ("You enter the pool, thrash around for a good while, and then drown."); newcomer-1-opus turn 254; newcomer-1-opus turn 266 ("swim in the pool -> ... drown. Sad, but true.")

### P6 · design · medium · 2/8

Treasures sent to the Wizard's stash, by a death or by Filch, disappear without any line saying where they went. The stash cannot be reached until round 7. goal-seeker-1-opus lost the pearl when it drowned and the portrait and bills to Filch thirty moves after cracking the Bank. newcomer-1-opus lost the blue sphere, the pearl and the red sphere in one drowning. Both reports name this as the moment their momentum broke.

**Recommendation:** Add one line in voice saying the treasures went somewhere the Wizard keeps things, on the face's return speech and after Filch's count. A player who knows they are kept is not robbed of a goal. The round-7 Trophy Room then pays it off.

Evidence: goal-seeker-1-opus turn 170 ("Several things you are carrying have disappeared!"); goal-seeker-1-opus turn 93 ("inventory -> A lamp (providing light)"); newcomer-1-opus turn 266

### P7 · design · medium · 1/8

The crown death on the last life came from a wait. 'wait' is three moves, so it used most of the five-move window between the blast and the collapse. Fuse lit at t284, blast at t285, 'wait' at t286 (three moves), 'go south' t287, 'take crown' t288, and the rock fell. 'The walls seem ready to collapse' came only on the move before.

**Recommendation:** While a countdown the player started is running, have 'wait' say it will pass three moves, or let it pass one. Or show the Dusty Room's 'ready to collapse' line on the blast move, so the window is visible from its start.

Evidence: goal-seeker-1-opus turn 284 ("With a matchbook??!? / The string starts to burn."); goal-seeker-1-opus turn 286 ("wait -> Time passes... (passes: 90 seconds)"); goal-seeker-1-opus turn 288 ("The room trembles and 5000 tons of rock fall on you")

### P8 · world-bug · medium · 1/8

The dragon stopped following without a line. The player kicked it twice and it followed to the Stone Bridge and the Cool Room. When the player went west into the Ice Room it neither followed nor was heard turning back, and back in the Cool Room it was gone. The round-4 'interest runs out' line did fire on the second attempt (t184), so the first attempt took a silent path.

**Recommendation:** Trace the dragon's follow from the Cool Room westward at anger 4 after two cooling moves. Either it should follow into the Ice Room, as the intent's arithmetic says, or the turn-back line should fire.

Evidence: goal-seeker-1-opus turn 176 ("Cool Room / A huge red dragon is lying on the rocks here, watching. / The dragon follows you"); goal-seeker-1-opus turn 177 ("go west -> Ice Room (no dragon, no line)"); goal-seeker-1-opus turn 179 ("go east -> Cool Room (dragon gone)"); goal-seeker-1-opus turn 184 ("Somewhere behind you the dragon's interest runs out")

### P9 · world-bug · medium · 2/8

A default refusal is printed and then the action succeeds anyway, so two contradictory lines appear for one command. 'open purple book' prints 'You must tell me how to do that' and then reveals the stamp. 'light string with match' prints 'With a matchbook??!?' and then the string burns. 'look in the pool' prints 'You can't look inside a pool of tears.' and then the custom line. In parser-breaker-1 the noun 'match' resolved to the matchbook and the burn was refused outright.

**Recommendation:** Find where the stock open, burn-with and look-in answers run before the world's own handlers rather than instead of them, and make the handler stop the default. Let a lit match answer to 'match' as the instrument, ahead of the matchbook.

Evidence: goal-seeker-1-opus turn 267 ("You must tell me how to do that to a purple book. / Opening the purple book reveals a Flathead stamp."); goal-seeker-1-opus turn 284 ("With a matchbook??!? / The string starts to burn."); newcomer-1-opus turn 258 ("You can't look inside a pool of tears. / Through the water, which is not clear, you can make out something hazy"); parser-breaker-1 turn 28 ("burn the newspaper with a match -> With a matchbook??!?")

### P10 · engine-bug · medium · 2/8

When the parser cannot read a particle, an adverb or an instrument phrase, it answers 'You can't see any such thing.', even when the object is in plain view. 'push the menhir with the sword' got that answer in the Menhir Room with the menhir described. Other examples: 'take the sword too', 'open the lid on the keyhole', 'pull the place mat back', 'wait for the floating to stop'. A player reads these as missing objects, not as wording.

**Recommendation:** File it in Sprout as an issue. When the noun phrase resolves but a trailing word or an unsupported 'with' clause does not, name the word the parser did not understand instead of denying the object is there.

Evidence: parser-breaker-1 turn 2 ("take the sword and polish it with the lantern -> You can't see any such thing."); parser-breaker-1 turn 35 ("push the menhir with the sword -> You can't see any such thing."); newcomer-1-opus turn 5 ("take the sword too -> You can't see any such thing."); newcomer-1-opus turn 59 ("open the lid on the keyhole -> You can't see any such thing."); newcomer-1-opus turn 65 ("pull the place mat back -> You can't see any such thing.")

### P11 · world-bug · low · 2/8

Some nouns the prose offers do not resolve. 'the hazy something' the Pool Room shows cannot be examined, and 'the room' is not a noun anywhere.

**Recommendation:** Give 'hazy something' as a name to the pool's sunken package, answered with the pool's close-up. Give each room a 'room' name answered with its description, or log the gap in friction.md if a place cannot carry one.

Evidence: goal-seeker-1-opus turn 89 ("examine hazy something -> You can't see any such thing."); newcomer-1-opus turn 257 ("look at the hazy something -> You can't see any such thing."); goal-seeker-1 turn 31 ("examine room -> You can't see any such thing."); newcomer-1-opus turn 123 ("examine the room -> You can't see any such thing.")

### P12 · world-bug · low · 1/8

The riddle accepted bare 'a well' and 'say well' but laughed at 'answer \'a well\'' typed with quotation marks.

**Recommendation:** Strip quotation marks and a leading article from the answer before comparing, for 'answer' as for 'say'.

Evidence: goal-seeker-1-opus turn 40 ("answer 'a well' (in double quotes) -> A hollow laugh seems to come from the stone door."); goal-seeker-1-opus turn 41 ("say well -> There is a deafening clap of thunder"); newcomer-1-opus turn 112 ("a well -> There is a deafening clap of thunder")

### P13 · world-bug · low · 1/8

'unlock the door' with no instrument, said while holding only the rusty iron key, got 'You'll need a key for that, and the right one.'

**Recommendation:** When exactly one key is held, and it is the right one, use it as the implied instrument.

Evidence: newcomer-1-opus turn 73 ("take the key and unlock the door -> Taken. / You'll need a key for that, and the right one."); newcomer-1-opus turn 74 ("unlock the door with the iron key -> The door is now unlocked.")

### P14 · world-bug · low · 1/8

The robot's stand-in in the Tea Room answers a look with the order line 'The robot is not here to hear you', even though the player only looked.

**Recommendation:** Give the stand-in a look answer of its own (the robot is not here; it is in the Low Room) and keep the voice line for talk and orders.

Evidence: newcomer-1-opus turn 185 ("look at the robot -> The robot is not here to hear you.")

### P15 · design · medium · 2/8

Spells that refuse every command took long stretches of the long runs. In newcomer-1-opus, Float ran 960 seconds in the Riddle Room, with six 'flapping your arms' refusals and about 15 commands spent. Freeze ran 660 seconds, about 9 commands. Freeze's refusal tells the player to wait; Float's does not.

**Recommendation:** Give Float's movement refusal the same pointer to 'wait' that Freeze's has. Consider drawing durations for the refusing spells from the short end of Zork's range.

Evidence: newcomer-1-opus turn 152 ("I suppose you plan to do that by flapping your arms?"); newcomer-1-opus turn 162 ("wait for the floating to stop -> You can't see any such thing."); newcomer-1-opus turn 206 ("You are frozen solid. You might as well wait it out"); goal-seeker-1-opus turn 137

### P16 · design · low · 1/8

The never-reached figures rose mostly because the world grew, not because players reached less. Declared places went from 48 to 74, objects from 489 to 709, handlers from 156 to 216 and passages from 1294 to 1650. Absolute reach was about flat: 351 passages reached against 362, 78 objects against 95. Only goal-seeker-1-opus reached the third quarter's balloon, ledges, Library and Dusty Room. room_8, dragon_lair, kennel and diamond_9 were reached by nobody.

**Recommendation:** Read this round's reach deltas as ratios, not counts. Third-quarter content depends on a single run getting past the Carousel and the cakes, so P2 and P5 are what will move these figures.

Evidence: goal-seeker-1-opus turn 217 ("Dragons are smart, but sometimes naive, and this one has never seen ice before."); goal-seeker-1-opus turn 262 ("land"); goal-seeker-1-opus turn 288

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.08 | 0.11 |
| reading.refusedRate | 0.02 | 0.03 |
| faults | 0 | 0 |
| repetition | 19 | 30 |
| reach.places.never | 2 | 5 |
| reach.objects.never | 394 | 631 |
| reach.verbs.never | 56 | 62 |
| reach.handlers.never | 28 | 65 |
| reach.passages.never | 932 | 1299 |
