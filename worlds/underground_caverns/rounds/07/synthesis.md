# Synthesis

**Legibility:** legible. Every player read the world as intent describes it: a trimmed, faithful Zork. You loot the house and the caves, take treasures to the trophy case, and the edges are fenced off. Over that sits the caretaker reading intent welcomes. Only the casual run, which saw just the house, the troll and the Round Room in 30 turns, took the sorted rubble as the world's central mystery. That comes from P1's line over-promising.

Goals:
- Explorer (egg into the trophy case): reached it at turn 70, then spent the rest underground and hit the cap at the Altar.
- Goal-seeker (highest score): no ending; 126 of 350, against this slice's ceiling of 145. The maze's coins were never reached, 4 points were lost to the sceptre bug (P4), and the turn cap and weight juggling stood in the way.
- Newcomer (find treasure and keep it safe): reached it. The painting and the bar went into the case, which it closed, and it stopped at 115 turns. Parser misreadings (P6, P13) and the Loud Room cost turns.

How the models played: the opus goal-seeker played from memory and to the score. It took the rope at turn 15, said 'echo' on entering the Loud Room, prayed at the Altar on its first visit, and chained commands. It seldom examined anything, and so met the least prose and the fewest refusals. The fable runs (explorer, casual, prose-reader, parser-breaker, newcomer) read and examined much more. They tried natural sentences (newcomer), pushed against the edges and the caretaker's traces (parser-breaker), solved the echo by trying, and wandered more (explorer's forest, prose-reader's walk back). Of the two runs that went down the rope, only the explorer was a fable run, and only the goal-seeker found the prayer.

- explorer-1 (yes): A trimmed Zork: a treasure hunt for the trophy case, the map fenced off on purpose by 'The Management', and an absent someone underground (the barred trap door, the sorted rubble, the axe scratches).
- goal-seeker-1 (yes): A cut-down Great Underground Empire: loot the house and caves for the trophy case, with every far edge roped off, and prayer and the chimney as the ways back up.
- newcomer-1 (yes): An empty house with a trophy case that expects to be filled, and caves of treasure under it, tended by an unseen somebody who bars the door and closes passages with Management signs.
- casual-1 (partly): Zork's house, cellar and troll, but really about the absent somebody slowly clearing the Round Room's rubble, and what lies behind it.
- prose-reader-1 (yes): A trimmed, rewritten slice of Zork, with a tidy unseen caretaker under the treasure hunt who bars doors, puts the lamp back, sorts rubble and clears crawlways.
- parser-breaker-1 (yes): A treasure hunt through a ring of caves under a white house, really about the unseen inhabitant who bars, tidies, sorts and signs as 'The Management'. You are a trespasser being tolerated.

## Points

### P1 · design · high · 4/6

The Round Room's south refusal ('Whoever it was has not finished, and you decide not to be the one who does.') sets up a puzzle and then shuts it in the player's own voice. Five runs met it. Four quoted it as the moment the world took a decision away from them, and three tried to act on it. 'clear rubble' is not read at all ('That sentence isn't one I recognize.'), 'take a rock' says no such thing is here, and 'move rubble' says 'You can't move the cave-ins.' For the casual run the sorter was what the whole world was about. Intent says no caretaker line should promise more than that someone has been here, and this one promises a passage.

**Recommendation:** Keep the sorted heaps, which every player quoted with pleasure, but end the refusal on the world's reason and not on the player's choice: the roof is still coming down, or the heaps are someone else's work and in the way. Have the cave-ins answer CLEAR, DIG, TAKE ROCK and MOVE with that same reason in Zork's voice. Then nothing reads as a half-finished passage the player is supposed to finish.

Evidence: casual-1 turn 27 ("It stung. The world built up the one new mystery and then closed the door on it in my own voice."); casual-1 turn 29 ("clear rubble -> That sentence isn't one I recognize."); explorer-1 turn 112 ("I'd rather be told why I can't than be told I've decided not to."); explorer-1 turn 113 ("clear rubble -> That sentence isn't one I recognize."); prose-reader-1 turn 79 ("move rubble -> You can't move the cave-ins."); parser-breaker-1 turn 132 ("clear the rubble -> That sentence isn't one I recognize."); parser-breaker-1 turn 133 ("take a rock -> You can't see any such thing."); goal-seeker-1 turn 90

### P2 · design · low · 5/6

The Loud Room's echo works as a puzzle. Five of six runs got the bar. One knew the word at once (goal-seeker), and the other four found it by trying, in three to twelve turns. Nobody read 'Bar bar ...' as a fault for long. Only the casual run gave up, after a single try.

**Recommendation:** Keep it as built. Next round, watch whether players who don't know Zork spend more than about ten turns on it.

Evidence: goal-seeker-1 turn 27 ("echo -> The acoustics of the room change subtly."); explorer-1 turn 92; newcomer-1 turn 52 ("The reward for the one guess that felt like my own idea."); prose-reader-1 turn 85; parser-breaker-1 turn 111; casual-1 turn 25 ("Two words that cost me a treasure and told me nothing about why.")

### P3 · language-gap · low · 3/6

The echo repeats the word the parser settled on, not the word the player typed. 'shout' comes back as 'Yell yell ...' and 'examine stairway' as 'Stairs stairs ...'. Zork's LOUD-ROOM-FCN echoes the last word of the raw input. The parser-breaker noticed.

**Recommendation:** Add this to friction 70. If Sprout gives a handler no access to the typed text, raise an issue in Sprout asking for the raw last word of the command.

Evidence: parser-breaker-1 turn 108 ("it echoed the word it understood, not the one I typed"); newcomer-1 turn 50 ("shout -> Yell yell ..."); prose-reader-1 turn 84 ("examine stairway -> Stairs stairs ...")

### P4 · world-bug · medium · 1/6

The sceptre's 4 points for being taken are never scored when it travels to the case inside the coffin. The Adventurer's `on :entered` only scores a treasure that enters the visitor directly. The sceptre went from the coffin, held, straight into the case, so the goal-seeker scored 126 where 130 was possible without the coins. In Zork, PUT's HAVE flag would have taken it first and scored it.

**Recommendation:** Score a treasure's take value the first time the visitor comes to hold it in any way: directly, or moved from a container they carry, or put somewhere from one. Alternatively, make PUT take its item first, as Zork's HAVE does. Add the coffin-to-case path to `coffin.json` and `treasures.json`.

Evidence: goal-seeker-1 turn 111 ("put coffin, sceptre and candles in case -> Done. Done. Done."); goal-seeker-1 turn 112 ("Your score is 126 (total of 350 points), in 102 moves.")

### P5 · world-bug · low · 1/6

`take X from Y` is not one of the world's `take` patterns, so 'take sceptre from coffin', with the open coffin in hand, answered 'You can't see any such thing.' Zork reads TAKE ... FROM and TAKE ... OUT OF.

**Recommendation:** Add "take [target] from [container]", "take [target] out of [container]" and "get [target] out of [container]" to `verbs.sprout`'s take.

Evidence: goal-seeker-1 turn 110 ("'Take sceptre from coffin' said it couldn't see the sceptre, but then 'put coffin, sceptre and candles in case' put all three in.")

### P6 · engine-bug · medium · 3/6

When a command has words the parser can't place, the answer is 'You can't see any such thing.' and not 'That sentence isn't one I recognize.' Players read it as an object being absent. This happened with trailing clauses ('and see what's inside'), particles ('out of the way', 'off'), speech ('tell the troll I won't...'), 'except' lists, and 'from'. The newcomer guessed the parser was looking for a thing called 'way'.

**Recommendation:** Raise an issue in Sprout: when a noun slot only matches because it swallowed words that name nothing, Sprout should say it didn't understand, or name the word it couldn't use, and not report a missing object. Note the 'except' list under friction 69.

Evidence: newcomer-1 turn 1 ("open the mailbox and see what's inside -> Opening the small mailbox reveals a leaflet. / You can't see any such thing."); newcomer-1 turn 14 ("pull the rug out of the way -> You can't see any such thing. I think it tried to find a 'way'."); newcomer-1 turn 21 ("tell the troll I won't hurt him if he lets me pass -> You can't see any such thing."); newcomer-1 turn 89 ("drop everything except the lantern and the painting -> You can't see any such thing."); goal-seeker-1 turn 110; parser-breaker-1 turn 121 ("pull the board off -> You can't see any such thing.")

### P7 · design · medium · 3/6

Every long run met three Management notices in a row: the dam and the reservoir from the Deep Canyon, and Reservoir South from the Chasm, often right after the river ledge. Players enjoyed the first and tired of the run of them. They read the east as 'a ring of boards and cords' and 'the familiar game with walls added'.

**Recommendation:** Keep one Management notice in the east (the dam's is the best). Turn the reservoir and Reservoir South edges back into Zork-voice prose of the place itself: water, a flooded floor, a smell, as the river ledge already does well. Signs should stay rare enough to stay funny.

Evidence: explorer-1 turn 101 ("Three fences in a row from The Management; funny once, wearing by the third."); prose-reader-1 turn 100 ("Funny once; by the reservoir cord at turn 120 it was the fourth fence."); goal-seeker-1 turn 34 ("Funny, but a whole branch was gone."); newcomer-1 turn 32; parser-breaker-1 turn 119

### P8 · world-bug · low · 1/6

The barriers a refusal names can't be handled. The Chasm's cord and card are not objects. The Deep Canyon's board reads, but 'pull the board off', 'climb over the board' and 'cut the board' are unread or answered 'can't see'. 'cut the cord' and 'duck under the cord' are unread, though the Clearing's canyon rope answers 'duck under'. Round 4's rule was that what a refusal names can be named.

**Recommendation:** Make the Chasm's cord and card things to examine and read, and give the cord and the boards Zork-voice answers to pull, cut, climb over and duck under, the way the Clearing's canyon rope answers.

Evidence: parser-breaker-1 turn 120 ("read the board -> (both notices read)"); parser-breaker-1 turn 122 ("climb over the board -> That sentence isn't one I recognize."); parser-breaker-1 turn 127 ("cut the cord with the sword -> That sentence isn't one I recognize."); parser-breaker-1 turn 128 ("duck under the cord -> That sentence isn't one I recognize.")

### P9 · world-bug · medium · 3/6

At the Dome, 'look down', 'look over the railing' and 'climb over the railing' are not read, though the room is all about the drop. Only 'examine railing' tells players what is below. 'look down' also failed at East of Chasm.

**Recommendation:** Read `look down` and `look over [railing]` at the Dome as the railing's view, and `look down` at the chasm edges as the chasm's view. Read `climb over railing` as Zork's leap, with its death.

Evidence: newcomer-1 turn 67 ("look over the railing -> That sentence isn't one I recognize."); newcomer-1 turn 68 ("look down -> That sentence isn't one I recognize."); prose-reader-1 turn 111 ("'look down' at the dome rail ... Everything else about the railing had invited exactly that."); parser-breaker-1 turn 140; parser-breaker-1 turn 142 ("climb over the railing -> That sentence isn't one I recognize."); parser-breaker-1 turn 47 ("look down (East of Chasm) -> That sentence isn't one I recognize.")

### P10 · design · medium · 3/6

The Dome stopped every run that came without the rope. That was three of the five who reached it: newcomer, prose-reader and parser-breaker. The two who went down (explorer and goal-seeker) had taken the rope from the Attic early, by habit, before they knew what it was for. The parser-breaker reached the Attic but only in the dark. This is Zork's puzzle, faithfully built, and it decides who sees the torch, the temple and the prayer.

**Recommendation:** Keep the puzzle. If the author wants a nudge in Zork's voice, the railing's description could lean once more toward something being tied to it, without naming rope. Watch next round whether anyone fetches the rope after seeing the Dome.

Evidence: newcomer-1 turn 70 ("climb down -> You cannot go down without fracturing many bones."); prose-reader-1 turn 112; parser-breaker-1 turn 141 ("the dome is a dead end without something I never found"); parser-breaker-1 turn 21 ("go up the dark staircase (Attic, no light)"); explorer-1 turn 121 ("tie rope to railing -> The rope drops over the side and comes within ten feet of the floor."); goal-seeker-1 turn 41

### P11 · design · medium · 4/6

Zork's 100-point load was the main friction in four runs. 'Your load is too heavy.' came with no sense of how close they were, and the troll's axe, a non-treasure, used up three players' capacity: explorer, newcomer and prose-reader. The prose-reader lost the turns it needed to bank the painting. 'read book' with the book on the altar answered only 'Your load is too heavy.' and said nothing about the implicit take behind it.

**Recommendation:** Keep Zork's weights and the limit. Use the prose freedom the brief allows: have the refusal name the heaviest thing carried, in Zork's dry voice. Give the axe's examine a line about its heft. Have 'read' with a failed implicit take say what it tried ("(Taking the book first.) Your load is too heavy.").

Evidence: explorer-1 turn 83 ("take axe -> Your load is too heavy."); explorer-1 turn 146 ("take coffin -> Your load is too heavy."); goal-seeker-1 turn 52 ("Black book: Your load is too heavy. / Pair of candles: Your load is too heavy."); goal-seeker-1 turn 53 ("read book -> Your load is too heavy."); newcomer-1 turn 53; prose-reader-1 turn 135 ("'Your load is too heavy' for the painting, after I'd been encouraged to carry the troll's axe.")

### P12 · design · medium · 4/6

With v4 the slice no longer fits 150 turns. All four 150-turn runs ended at the cap in the middle of a plan. The explorer was at the Altar about to pray. The prose-reader was in the Studio, two moves from casing the painting. The parser-breaker had treasure but no way up yet. The goal-seeker was heading for the maze. The goal-seeker played the most efficient route possible and still reached only 126 of the 145 ceiling, with the maze and the coins untouched. Nobody reached the Grating Room, Maze 5 or the skeleton.

**Recommendation:** For the director: raise this world's turn cap (250 to 300) before round 9 widens it again, or give goals that each aim at one region. Until then the maze, the grating from below and the coins can only be tested by script.

Evidence: explorer-1 turn 150 ("Turn cap hit mid-batch, just as I was about to try praying at the altar."); prose-reader-1 turn 150 ("Turn cap landed between dropping the sword and climbing the chimney, two moves from the case."); parser-breaker-1 turn 150; goal-seeker-1 turn 150 ("I ran out of turns in the kitchen, on my way to the maze")

### P13 · language-gap · low · 2/6

Movement phrased with a preposition or a manner verb is not read: 'go south through the crawlway', 'go west into the hole', 'go through the crack', 'crawl south', 'keep going around the house'. The plain direction always worked on the next try.

**Recommendation:** Add these to friction 68 (general prepositional phrases). Locally, read 'crawl <dir>' as go, and 'go <dir> through/into <thing>' wherever the thing names that exit.

Evidence: newcomer-1 turn 4; newcomer-1 turn 33 ("go through the crack -> That sentence isn't one I recognize."); newcomer-1 turn 76 ("go west into the hole -> That sentence isn't one I recognize."); newcomer-1 turn 82 ("go south through the crawlway -> That sentence isn't one I recognize."); parser-breaker-1 turn 44 ("crawl south -> That sentence isn't one I recognize.")

### P14 · design · low · 6/6

All six players took up the caretaker thread as written and named it: the barred trap door, the lamp put back (and left lit), the swept leaves, the cleared crawlway, the sorted heaps, the Management. Four wished they could meet or follow whoever it is. Intent welcomes this reading and holds the payoff for round 9. The one line that over-promises is P1's.

**Recommendation:** Keep it, and don't extend it before round 9. Fix P1 so the rubble stops reading as a door the player is meant to open.

Evidence: explorer-1 turn 74 ("Turned a treasure hunt into being trapped. Who is down here with me?"); prose-reader-1 turn 58 ("The lamp was already on when I picked it back up. The tidy someone left it burning."); parser-breaker-1 turn 85; newcomer-1 turn 113; casual-1 turn 23; goal-seeker-1 turn 90

### P15 · design · low · 2/6

The grating pointer added after round 6 works from above. Both players who uncovered the grating read the lock as reachable only from below, and the goal-seeker went off to the maze for the key. Neither reached the Grating Room, but that was the turn cap, not confusion.

**Recommendation:** Keep as built. The Grating Room is still unvisited in 42 runs; see P12.

Evidence: explorer-1 turn 52 ("Clear enough that the way in is from below, but no idea yet where."); goal-seeker-1 turn 142 ("open grating -> The grating is locked.")

### P16 · design · low · 1/6

Two outliers, both Zork as written. The trophy case's bare 'Done.' felt flat after the egg hunt. The four alike Forest rooms cost the explorer about thirty turns before it found the climbable tree on the Forest Path.

**Recommendation:** Keep both, as round 5 decided for 'Done.'. The case's listing on examine already does the celebrating, and the explorer noticed it.

Evidence: explorer-1 turn 70 ("Putting the egg in the trophy case just says 'Done.'"); explorer-1 turn 45 ("climb tree -> There is no tree here suitable for climbing.")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.12 | 0.13 |
| reading.refusedRate | 0.01 | 0.03 |
| faults | 0 | 0 |
| repetition | 19 | 6 |
| reach.places.never | 15 | 21 |
| reach.objects.never | 118 | 168 |
| reach.verbs.never | 52 | 50 |
| reach.handlers.never | 17 | 24 |
| reach.passages.never | 424 | 631 |
