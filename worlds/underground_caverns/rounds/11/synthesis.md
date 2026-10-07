# Synthesis

**Legibility:** legible. Five of six players described Zork I reworked around the new dam and river, with getting treasure home as the real puzzle. That is the v6 slice the intent names. Two (the prose-reader and, through the rubble, the goal-seeker) picked up the deliberate tidy caretaker, which the intent welcomes. The casual player, capped at 30 turns, saw only the opening and the edge of the river and read it as Zork with one new sentence. That reading is partial but not wrong. Goals: the goal-seeker (opus, highest score) did not reach the ceiling. It ran to its 250-turn cap with the emerald, trunk, bar, scarab, egg, coffin and torch in the case; the last 'score' read 100 at move 174, about 160 by my reckoning at the end. What stood in the way was one-treasure-per-trip hauling (P1), losing the painting to the thief, and running out of turns on the way to the rainbow. The explorer (opus, egg in the case) reached its goal at turn 25 and then explored. The newcomer (opus, find treasure and keep it safe) reached it: four treasures in the case, still there after its death at the Falls, score 90. Models: every persona but the casual was played by opus, so the only contrast is the casual run (fable). That run was terse and goal-directed: the standard opening, six rounds with the troll, straight east, and one examine, of the river. The opus runs played 183 to 250 turns, examined almost everything, and quoted the author's examine layer at length. The 30-turn cap limits how far the contrast goes.

- goal-seeker-1 (yes): Zork's underground reworked around the Flood Control Dam and the Frigid River: drain the reservoir, pump up the boat, collect treasure on the river, then fight the house's re-barring trap door and narrow chimney to get it all into the trophy case.
- explorer-1 (yes): A white house with an empty trophy case over a world mostly about water: a dam, a drainable reservoir, a boat toward a waterfall, a thief, and cave-ins closing off the rest; a ghost of the old game with wry new writing.
- newcomer-1 (yes): An old house over a cave system where someone bars the trap door behind you; an abandoned dam that drains a lake and a cold river to a waterfall; mostly about carrying treasures home one at a time to keep them safe in the case.
- casual-1 (partly): Zork, or something wearing Zork's clothes: the same old opening, a troll and a deafening room, and a cold river, the one place with new words.
- parser-breaker-1 (yes): The white house and the underground empire centred on Flood Control Dam #3 and the Frigid River: bubble, bolt and wrench, a drained lake with a trunk, a boat pulled toward the falls, a wordless thief, and death that tidies your belongings around the house.
- prose-reader-1 (yes): The old house and empire with the most life given to the dam and the river: a left-behind place, an unthanked dam, a river hurrying to its end, and somebody tidy going round after you stacking rubble and putting the lamp back.

## Points

### P1 · design · high · 5/6

The load limit, the chimney's lamp-and-one-thing rule and the trap door barring again after every chimney climb add up to one treasure per round trip, about ten moves each. That hauling ate the long runs. The engine logged 26 'Your load is too heavy' refusals across five runs. Four players met the chimney rule while sorting their load. Three found the sack already full with the lunch and garlic, and the goal-seeker had to eat the lunch to make room in it. The thief turned up at the chimney in three runs while the player was stuck there dropping things. Meanwhile the other ways home went unused: the Clearing, Canyon View, the Grating Room and the Strange Passage were never reached. Only the goal-seeker found a heavier way up, by praying with the coffin. Every rule here is Zork's, as the intent says. What hurts is that the way home this round added (the canyon) is invisible.

**Recommendation:** Keep Zork's weights, the chimney rule and TOUCHBIT. Make the canyon route findable from the river side instead. Something at Aragain Falls, the Shore or the rainbow ('arching away to the west') could name the canyon rim, or Canyon View's link to the Clearing could be heard of from below. Aiming a goal at another way home is the director's call. The round-10 sack change now reads as a wall that one player turned into a puzzle; keep it.

Evidence: goal-seeker-1 turn 133 ("The chimney only takes your lamp and one more thing, and the sack was too small to help. So it was one treasure per trip."); goal-seeker-1 turn 154 ("it was barred behind me again. Every trip home cost about ten moves."); goal-seeker-1 turn 244 ("Praying at the altar took me straight up to the forest still carrying the heavy coffin."); newcomer-1 turn 96 ("This one rule shaped all my trips: one treasure per climb."); explorer-1 turn 176 ("The sack wouldn't hold the scarab and emerald because the lunch and garlic filled it. I learned that under attack."); explorer-1 turn 169 ("Meanwhile the thief was stabbing me, so I had to abandon the scarab and the sack."); parser-breaker-1 turn 167 ("While I dropped the manual to fit up the chimney, the thief robbed me blind of the emerald and painting."); prose-reader-1 turn 44 ("Your load is too heavy, the sword not least of it.")

### P2 · world-bug · medium · 2/6

The thief takes a treasure off the floor of the room the player is standing in, with no message. Twice the Gallery listed the painting as the player came in, and the next command found it gone, with nothing said in between. In Zork, the thief robs the player's own room only through THIEF-VS-ADVENTURER, which always announces it ('A seedy-looking individual with a large bag just wandered through the room...'). He robs silently only in rooms the player is not in.

**Recommendation:** In the thief's robbing turn, skip floor treasures in the room the player is in, unless the robbery goes through his encounter with the player and its Zork line. Add a test with the thief arriving unseen in the Gallery while the player stands there.

Evidence: explorer-1 turn 167 ("The painting in the Gallery was there when I entered and gone on the next 'look'. No message said who took it."); prose-reader-1 turn 152 ("'examine painting' and 'take painting' both say it isn't there.")

### P3 · world-bug · medium · 3/6

WAIT passes one move (30 seconds), where Zork's V-WAIT passes three. The river's first reach takes 2 minutes, which is four moves here, so players launched, waited, looked, and decided the boat was not moving. Two of them typed 'go downstream', which went unread, and the drift's 'The flow of the river carries you downstream.' arrived on that same move, so they credited the unread command. The same single-move wait drags out the reservoir's draining.

**Recommendation:** Make WAIT what Zork's V-WAIT is: up to three moves, cut short when a clock event prints something. That way a single wait on the river reaches the next reach and the 'carries you downstream' line.

Evidence: goal-seeker-1 turn 77 ("go downstream -> That sentence isn't one I recognize. (then: The flow of the river carries you downstream.)"); goal-seeker-1 turn 76 ("On the river the boat just sat at the dam landing while I waited."); newcomer-1 turn 172 ("The boat didn't drift when I waited. Then 'go downstream' gave an error message and moved me downstream anyway."); prose-reader-1 turn 124 ("I wished I could paddle upstream or steer away from the falls.")

### P4 · design · medium · 4/6

'Upstream' and 'downstream' are never read, and the river is where players reach for them. On the last reach, one such turn was the difference between landing and going over the Falls. Zork's river answers UP with 'You cannot go upstream due to strong currents.', so the refusal exists in the source but is unreachable by the words players use.

**Recommendation:** On the river, read 'upstream' as up (Zork's strong-currents refusal) and 'downstream' as waiting for the current, or answer both in the river's voice. Check that 'go up' on the river gives Zork's line rather than the label line.

Evidence: prose-reader-1 turn 124 ("'Go upstream' wasn't understood, and that wasted turn sent me over the falls."); parser-breaker-1 turn 102 ("paddle upstream toward the dam -> That sentence isn't one I recognize."); goal-seeker-1 turn 77 ("go downstream"); newcomer-1 turn 172 ("go downstream")

### P5 · world-bug · medium · 3/6

'Read the label for the boat's instructions.' answers every direction the boat refuses, including when the boat is beached and the player only needs to get out. On the last reach it also answered 'go south' a move before the Falls, which gave the player no clue that 'east' (land) was the way. Zork's NO-GO-TELL tells a player in a vehicle 'You can't go there in a magic boat.'

**Recommendation:** When the boat is beached, answer a land way out with Zork's 'You can't go there in a magic boat.' (or tell the player to get out first). Keep the label line for open water, where it is Zork's.

Evidence: explorer-1 turn 112 ("While still in the beached boat, 'go east' and 'go up' only answered 'Read the label for the boat's instructions'"); newcomer-1 turn 185 ("go south -> Read the label for the boat's instructions. (next move: over the Falls)"); parser-breaker-1 turn 105 ("go up -> Read the label for the boat's instructions.")

### P6 · design · low · 3/6

Aragain Falls killed three players. All three called it fair or their own fault, but each lost the rest of the river. The prose-reader found the boat gone for good after the death, which is Zork's outcome too. The river's own description ('as if it had heard something about the end of it') was quoted as the warning in four runs.

**Recommendation:** Keep Zork's falls and its speeds. P3, P4 and P5 remove the turns players lost to the parser, which are what made the falls feel harsh.

Evidence: parser-breaker-1 turn 135 ("Taking the emerald from the buoy cost a turn, and the current carried me over the falls to my death with no extra warning."); newcomer-1 turn 185 ("That was my fault for typing ahead without reading."); prose-reader-1 turn 124 ("The boat seemed to be gone for good, so the river was closed to me after that.")

### P7 · language-gap · medium · 3/6

Sentences the parser cannot read are often answered 'You can't see any such thing.' rather than 'That sentence isn't one I recognize.'. Players then believe an object they can see is missing. The examples were all built around present things: the mailbox, the plastic, the shore, the bolt.

**Recommendation:** Log it in friction.md and raise it with Sprout. When leftover words fail to match, the not_here line is claiming more than the parser knows. 'all except' is a separate Sprout gap worth its own entry.

Evidence: parser-breaker-1 turn 1 ("'kick the mailbox open' got 'You can't see any such thing.' even though the mailbox was right there."); newcomer-1 turn 98 ("drop everything except the lantern and the trunk -> You can't see any such thing."); newcomer-1 turn 177 ("land on the west shore -> You can't see any such thing."); prose-reader-1 turn 63 ("turn pile over -> You can't see any such thing.")

### P8 · world-bug · low · 2/6

'eat lunch' with the lunch in the open sack the player is carrying is refused with 'You're not holding that.' Zork's V-EAT accepts food whose container is in hand.

**Recommendation:** Let EAT and DRINK accept food or water whose container is held, as V-EAT does: the lunch in a held open sack, and likewise the water in a held open bottle.

Evidence: goal-seeker-1 turn 134 ("eat lunch -> You're not holding that. (sack open, in inventory)"); newcomer-1 turn 61 ("'eat the lunch' said 'You're not holding that.' The lunch was in the sack I was carrying.")

### P9 · world-bug · low · 2/6

The folded pile's examine text (the author's) says the instructions 'go on round the back', but nothing lets a player read them. 'read plastic' answers 'How does one read a pile of plastic?', and 'turn pile over' and 'read instructions' are not understood.

**Recommendation:** Either drop the promise from the pile's description, or make the instructions a thing on the pile that answers read and turn over with a line pointing at the valve and a pump.

Evidence: parser-breaker-1 turn 73 ("read the instructions round the back -> You can't see any such thing."); parser-breaker-1 turn 76 ("turn the plastic over -> You can't see any such thing."); prose-reader-1 turn 62 ("The pile said its instructions 'go on round the back', but 'read instructions' and 'turn pile over' both got 'You can't see any such thing.'")

### P10 · world-bug · low · 1/6

At the Dam Base, 'examine dam' always describes a thin sheet of water spilling over the top, even with the gates just shut and the reservoir low. Everything else around the reservoir follows the tide.

**Recommendation:** Make the Dam Base Tidal, or move the spilling water out of the dam's examine line, so the dam seen from below follows the bolt's state.

Evidence: prose-reader-1 turn 194 ("A thin sheet of water spills over the top and patters down the face of it. (reservoir low, refilling)")

### P11 · design · low · 4/6

The cave-ins that close off unbuilt country (the Round Room's sorted rubble, Atlantis's chalked arrow) read as a mystery and invite action. Players want to dig, clear or examine them. 'examine heaps' answers 'You can't see any such thing.', and the casual player could not tell which Round Room passages were blocked. The chalked arrow was praised as a graceful edge. The 'grit still trickling... has not finished coming down' leads players to expect more.

**Recommendation:** Per the intent's 'what a barrier names answers', make the rubble and its heaps things where those refusals are given, answering examine, dig and clear in the same voice. Keep them from promising more than that someone has been here.

Evidence: prose-reader-1 turn 147 ("examine heaps -> You can't see any such thing."); goal-seeker-1 turn 119 ("I wanted to clear the sorted rubble in the Round Room's south passage, or at least find out who sorted it."); parser-breaker-1 turn 40 ("dig through the cave-ins with the knife -> You can't see any such thing."); casual-1 turn 22 ("Several of them have unfortunately been blocked by cave-ins. Which ones?")

### P12 · engine-bug · low · 5/6

The reach metric lists river_1 to river_5 as never reached, but five runs rode the river and were shown 'Frigid River, in the magic boat' at every reach. A player inside a vehicle that is itself a place is not credited with the room the vehicle is in, so reach.places.never overstates this round's gap by at least five.

**Recommendation:** Raise it with Sprout's test reporter: count the place a vehicle lies in as reached when a player rides in it. Until then, read places.never with the river reaches discounted.

Evidence: goal-seeker-1 turn 74 ("launch -> Frigid River, in the magic boat"); newcomer-1 turn 172 ("The flow of the river carries you downstream. Frigid River, in the magic boat"); explorer-1 turn 112; prose-reader-1 turn 124; parser-breaker-1 turn 135

### P13 · design · low · 5/6

The dam chain read cleanly. Every player who reached the dam lit the Maintenance Room, pressed yellow, connected the glowing bubble to the bolt and turned it with the wrench on the first try. Players quoted the bubble's 'waiting to be told it may begin' as the clue. Five found the trunk once the reservoir drained, and the parser-breaker met the lake-bed trap and called its warning fair. Nobody pressed the blue button, used the gunk, punctured the boat, was thrown out of the Loud Room by the roar, or waved the sceptre, so those parts of v6 are still covered only by script.

**Recommendation:** Keep the dam as built. Carry the blue button and leak, the puncture, the Loud Room's roar, the rainbow and Canyon View to round 12's watch list.

Evidence: goal-seeker-1 turn 48 ("The sluice gates open and water pours through the dam."); parser-breaker-1 turn 64 ("The wrench on the bolt opened the sluice gates. Very satisfying once the bubble was glowing."); parser-breaker-1 turn 194 ("Waiting in the refilling reservoir swept me over the dam. The warning had been fair."); newcomer-1 turn 69 ("My action made the treasure reachable."); prose-reader-1 turn 37 ("It is dark, and has the patient look of something waiting to be told it may begin.")

### P14 · design · low · 1/6

The explorer's goal took 25 turns: up the tree, back, egg in the case. The case answered only 'Done.', and the player was unsure whether more was expected. No one gave the egg to the thief, even though the explorer quoted the egg's new clasp line and read it as pointing at him.

**Recommendation:** Keep 'Done.', as decided after round 5. The clasp line is legible. Whether the explorer's goal should aim at the opened egg, and so at the thief, is the director's call.

Evidence: explorer-1 turn 25 ("The goal was done in 25 turns with no fanfare. The case just said 'Done.'"); explorer-1 turn 7 ("deft fingers, and not, one suspects, entirely honest ones.")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.21 | 0.09 |
| reading.refusedRate | 0.01 | 0.01 |
| faults | 0 | 0 |
| repetition | 48 | 32 |
| reach.places.never | 10 | 38 |
| reach.objects.never | 260 | 409 |
| reach.verbs.never | 50 | 63 |
| reach.handlers.never | 24 | 69 |
| reach.passages.never | 847 | 1332 |
