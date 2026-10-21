# Synthesis

**Legibility:** partly. Every run recognized a Zork II port: barrow, garden, unicorn, carousel and a meddling Wizard. The voice landed, with prose rated 4 or 5 in every run. Only explorer-1-opus saw the shape the intent describes: riddle, well, tea party, and a robot waiting for orders. The two sonnet runs that reached the well read the world as 'the bucket puzzle' and stalled there. The four short runs saw only the way in and the garden. goal-seeker-1-opus correctly read the 'will have to wait' edges as the quarter's boundary but never found the Riddle Room, so it took the quarter to be a loop of closed edges. Nobody met the wonderland, the robot obeying an order, or the carousel stopping, and those are half of what 'done' means for this quarter.

- casual-1 (partly): A Zork-style cave walk from a barrow to a ford and a disorienting carousel, with nothing to do but walk into blocked paths.
- newcomer-1 (partly): A Zork II-style adventure: barrow, cavern, a Wizard who traps you in a fence, and a garden with a gazebo and an elusive unicorn.
- parser-breaker-1 (partly): A Zork II underground empire with a lamp, an elvish sword, a garden with a unicorn, and a Wizard who casts spells on you.
- prose-reader-1 (partly): A dry, wry retelling of Zork II with knowing nods to the first game; the unicorn's key and the place mat suggest puzzles ahead.
- explorer-1 (partly): A Zork II cavern with a garden and unicorn, a disorienting carousel, a riddle door and a well with a bucket, haunted by a Wizard's random spells. It became mostly about getting the bucket to carry them up.
- goal-seeker-1 (partly): A Zork II cavern where you go deeper by solving puzzles: carousel, riddle door, well and bucket. Did not reach the goal; stuck at the bottom of the well after the bucket rose empty at turn 56.
- explorer-1-opus (yes): An underground realm with a prankster Wizard: a spinning carousel, a riddle door, a magic well you ride up in a bucket, a mad tea party with cakes, and a robot that waits for orders. A place of tricks and illusions.
- goal-seeker-1-opus (partly): The first chapter of something bigger: a barrow, a cavern, a carousel, a garden with a gazebo, and a unicorn whose key is for someone else, with every frontier saying it will have to wait. Did not reach the goal and got less far than its sonnet run: never found the Riddle Room.

## Points

### P1 · design · high · 4/8

Neither goal-seeker reached the end of the quarter. goal-seeker-1 (sonnet) got as far as the bottom of the well: it answered the riddle and took the pearl, then stalled when the bucket went up without it. Its opus replay, goal-seeker-1-opus, did not get as far. The carousel never sent it to the Riddle Room in eight spins, so it never saw the riddle, the pearl or the well, and it quit 'exhausted' at turn 78 of 150, sure that every edge was gated. explorer-1-opus is the only replay that went further than its sonnet run: Top of Well, the Tea Room, the Low Room and the robot, and the Machine Room, until a self-inflicted death at turn 136 and the turn cap. No run reached the Posts Room, the Pool Room, the Dingy Closet or Room 8. No run gave the robot a working order or stopped the carousel.

**Recommendation:** Work on what stopped each run: the empty bucket (P2), the luck-only way to the Riddle Room together with the 'will have to wait' edges (P3), and the Machine Room's instructions sending the player to the buttons (P4). Then check in round 3 whether any run reaches the wonderland or the robot puzzle. reach.places.never still lists room_8, posts_room, pool_room, dingy_closet and the cage.

Evidence: goal-seeker-1 turn 56 ("The bucket swiftly rises up, and is gone."); goal-seeker-1-opus turn 78 ("The way up has gone, for now. Whatever is along there will have to wait."); explorer-1-opus turn 112 ("You are at the top of the well. Well done."); explorer-1-opus turn 136 ("There is a giant spark and you are fried to a crisp.")

### P2 · design · high · 2/8

Both sonnet runs that reached the well poured the water in while standing outside the bucket and lost it for good. The bucket returns after 100 moves; explorer-1 had 60 turns left and goal-seeker-1 had 54, so neither could ever see it come back. The round-1 tells were read and did not help. Both players had climbed into the empty bucket earlier, got nothing, and climbed out again; after the bucket left, they read the 'whatever hauled it up will presumably let it down again' line and did not wait long, because 'wait' passes a single move. 'climb rope' gets a flat 'You can't do that!' and 'enter bucket' gets 'You can't see any such thing.' The opus explorer on the same seed climbed in before pouring and rose.

**Recommendation:** Keep Zork's 100-move return, but warn before the loss. When a visitor carrying water examines the bucket while standing outside it, or types 'pour water in bucket' from outside, add a line in the narrator's voice that the bucket is plainly meant to carry something heavier than a puddle. Make 'wait' pass Zork's three moves, and accept 'wait for bucket' to run the clock until it comes down. Give 'climb rope' a reply in voice in place of the default.

Evidence: explorer-1 turn 58 ("The bucket swiftly rises up, and is gone."); explorer-1 turn 79 ("You can't see any such thing."); explorer-1 turn 81 ("You can't do that!"); explorer-1 turn 86; goal-seeker-1 turn 16; goal-seeker-1 turn 61; explorer-1-opus turn 111

### P3 · design · high · 3/8

Nothing tells the visitor that the Riddle Room exists, and the 'will have to wait' edges teach them to stop looking. The only way on from the carousel is a random draw. Meanwhile three of its eight passages, the ledge at the Deep Ford, the stream east of it and the Marble Hall's east wall all refuse. The casual player met the rockfall, the wall and the ledge within 6 moves and quit. The opus goal-seeker drew Marble Hall, Path Near Stream and rockfalls in all eight of its carousel moves, and concluded that the quarter was all edges.

**Recommendation:** Hint at a way on that is not a rockfall. For example, have 'examine passages' in the Carousel Room mention one passage with an exit going up toward a draught and the smell of old stone, or let the room say, after a few spins, that some passages are ones you have not yet come out of. Consider having a rockfall answer at most once per visit, so that repeated refusals do not read as 'everything is closed'.

Evidence: casual-1 turn 13 ("The passage southwest is choked with a fall of rock not far in."); casual-1 turn 15 ("That's a wall there."); casual-1 turn 18 ("Whatever is along there will have to wait."); goal-seeker-1-opus turn 10; goal-seeker-1-opus turn 29; goal-seeker-1-opus turn 36; goal-seeker-1-opus turn 75; explorer-1-opus turn 71

### P4 · world-bug · medium · 1/8

In the Machine Room, 'read instructions' printed the robot's green paper, which the player was carrying, and not the button instructions, which the room says are 'written in EBCDIC'. The player then pushed the round button and was fried. The only run to reach the robot was sent to the buttons by text that belonged to the robot.

**Recommendation:** Give the Machine Room's instructions an object of their own, named 'instructions' and 'EBCDIC', whose read answer is Zork's joke about them being unreadable. Make sure that, in the Machine Room, the word resolves to that object before the green paper in the visitor's hand.

Evidence: explorer-1-opus turn 135 ("!! FROBOZZ MAGIC ROBOT COMPANY !! ... >ROBOT, <things to do>"); explorer-1-opus turn 136 ("There is a giant spark and you are fried to a crisp.")

### P5 · design · medium · 3/8

Things put in a room by the Fantasize spell are listed in the room, but touching them gets the parser's bare 'You can't see any such thing.' The opus explorer guessed it was an illusion and liked it. The parser-breaker could not tell whether it was an illusion or a parser failure, and the sonnet explorer simply moved on.

**Recommendation:** Give each illusion an object that is in scope while the spell lasts, and have every verb on it answer in voice, e.g. 'Your hand closes on nothing; the chest was never there, and has the grace to look embarrassed about it.' That keeps the trick and shows it was deliberate.

Evidence: parser-breaker-1 turn 12 ("You can't see any such thing."); parser-breaker-1 turn 14; explorer-1 turn 32; explorer-1 turn 35; explorer-1-opus turn 32

### P6 · language-gap · medium · 2/8

'take all from table' and 'take all cakes' are not recognized, though 'take all' and 'take X and Y and Z' work. Both opus runs tried the Zork-standard form at the gazebo table.

**Recommendation:** Check whether Sprout's 'all' can be limited to what is on or in a named thing, and whether 'all' can take a plural noun. If it can, add the forms to the world's take verb. If it cannot, log the gap in friction.md with the spec section and raise it with Sprout as a studio issue.

Evidence: explorer-1-opus turn 26 ("That sentence isn't one I recognize."); explorer-1-opus turn 123 ("That sentence isn't one I recognize."); goal-seeker-1-opus turn 17 ("That sentence isn't one I recognize.")

### P7 · world-bug · low · 2/8

The Fear spell's line has a typo: "There's is a Wizard of Frobozz in here!"

**Recommendation:** Change it to "There is a Wizard of Frobozz in here!"

Evidence: explorer-1 turn 25; explorer-1-opus turn 22 ("All at once, you are overcome by fear! There's is a Wizard of Frobozz in here!")

### P8 · world-bug · low · 2/8

'open teapot' answers "I think you've already done that.", but the teapot has no lid. The refusal contradicts the teapot's own description.

**Recommendation:** Give the teapot an open/close answer of its own, e.g. 'It has no lid, which saves time.'

Evidence: newcomer-1 turn 28 ("I think you've already done that."); parser-breaker-1 turn 23 ("I think you've already done that.")

### P9 · world-bug · low · 2/8

Examining the place mat ends with "The place mat is empty.", as though the mat were a container.

**Recommendation:** Drop the contents line for the mat. If the mat is a surface, report its contents only when something is on it.

Evidence: prose-reader-1 turn 20; explorer-1-opus turn 25 ("The place mat is empty.")

### P10 · world-bug · low · 1/8

'pour water on roses' printed its line twice.

**Recommendation:** Find the second handler answering the pour, probably one generic and one for the roses, and let only one of them speak.

Evidence: goal-seeker-1-opus turn 56 ("The water spills over the roses, to the floor, and evaporates. (x2)")

### P11 · world-bug · low · 1/8

Examining the bucket from inside it returned the full description marked as a refusal, which adds to reading.refused. 'examine unicorn' while the unicorn was elsewhere ('Unicorn? What unicorn?') is likewise counted as a refusal.

**Recommendation:** Have the in-bucket examine path describe the bucket rather than refuse, so the refused rate measures real refusals.

Evidence: goal-seeker-1 turn 19 ("It is a wooden bucket, 3 feet across... (kind: refused)")

### P12 · design · low · 1/8

The dog, the human figures and the dragon in the topiary all return the same group paragraph. The brief asks that everything a room's description names answer with a description of its own.

**Recommendation:** Write a line for each topiary animal. Each line can also carry the 'not standing quite like that' tell.

Evidence: explorer-1-opus turn 53; explorer-1-opus turn 54; explorer-1-opus turn 55

### P13 · engine-bug · low · 1/8

'robot, hello' produced the engine warning 'drawn: the line read 2 ways that tied, and one was drawn'. The reading that won was right, but the tie means addressing the robot is ambiguous in the grammar.

**Recommendation:** Reproduce the line against the world, and find out whether the tie is between the robot-address form and a say or greet form in the world or in the stdlib. If both readings are legitimate and Sprout has no way to rank them, file it with Sprout.

Evidence: explorer-1-opus turn 130 ("drawn: the line read 2 ways that tied, and one was drawn")

### P14 · design · low · 1/8

A newcomer was caught by the Fence spell on their 8th move and spent 12 of their 30 turns inside it. The 'thinner already' line on the fence worked, and the player waited it out, but the spell took up much of a short first visit.

**Recommendation:** Consider keeping the Wizard's movement-blocking spells (Fence, Freeze) out of the first few minutes, or capping their length in the visitor's first quarter-hour.

Evidence: newcomer-1 turn 8 ("The air round you stiffens, very slightly"); newcomer-1 turn 13; newcomer-1 turn 20 ("the fence that was round you is gone.")

### P15 · design · low · 1/8

'answer "a well"' got the hollow laugh, and only 'say well' worked. The article costs the player a turn.

**Recommendation:** Accept 'a well' and 'the well' as answers, stripping the article before the comparison.

Evidence: explorer-1-opus turn 75 ("A hollow laugh seems to come from the stone door."); explorer-1-opus turn 76

### P16 · design · low · 1/8

At the Path Near Stream, 'fill teapot from stream' answers 'There's nothing here to fill it with.', even though the room names a stream. In the Dark Tunnel, 'fill teapot with water' gets the parser's 'You can't see any such thing.' The visitor learns where the water is by trial.

**Recommendation:** At the Path Near Stream, explain the refusal in voice: the stream is at the bottom of the ravine, out of reach, and the fords are where it comes up to meet you.

Evidence: explorer-1 turn 37; explorer-1 turn 40; explorer-1 turn 69 ("There's nothing here to fill it with.")

### P17 · design · low · 2/8

Coming back to a room prints only its name, as in Zork's brief mode. The prose-reader read the bare 'North End of Garden' as a fault.

**Recommendation:** Keep brief mode as the default, as Zork has it, but support 'verbose' and 'brief' and mention them once, e.g. on the first bare revisit.

Evidence: prose-reader-1 turn 22; explorer-1 turn 31

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.19 | 0.13 |
| reading.refusedRate | 0.02 | 0.01 |
| faults | 0 | 0 |
| repetition | 12 | 17 |
| reach.places.never | 11 | 7 |
| reach.objects.never | 228 | 200 |
| reach.verbs.never | 66 | 68 |
| reach.handlers.never | 44 | 41 |
| reach.passages.never | 693 | 670 |
