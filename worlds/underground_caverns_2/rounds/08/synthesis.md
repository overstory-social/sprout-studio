# Synthesis

**Legibility:** legible. All eight runs read the world as a Zork II-style treasure hunt south of a ravine, with a meddling Wizard of Frobozz. That is what intent.md says it is. Seven of the eight quoted or paraphrased the Wizard's hook, and the four long runs named the Carousel, the riddle door, the bucket, the baseball diamond, the dragon's reflection and the Bank's curtain much as the intent describes them. The deeper arc (the Wizard's rooms, the demon, the wand as the way to the Landing) was grasped by none, but no run got past the lizard's door, so that gap is about reach, not legibility. The short runs saw only the opening. Two of them partly misread it: casual took it for a generic cave crawl, and prose-reader thought lighting the lamp summoned the Wizard.

- casual-1 (partly): A Colossal Cave-style cave crawl: lantern and sword, a wizard who hints that treasures lie south behind a stone door and a room that will not keep still.
- parser-breaker-1 (yes): A Zork II-style adventure: sealed in a barrow, a wizard who pops in and out, a garden and gazebo, treasures past a riddle door and a room that will not keep still.
- prose-reader-1 (partly): A Zork II-style world where a Wizard, summoned by lighting the lamp, says the treasures lie south of the ravine, and whose spells make things that are not there.
- newcomer-1 (yes): A Zork-like cave adventure with a Wizard; treasures south past a stone door and a room that will not keep still.
- explorer-1 (yes): A Zork II-style hunt for treasures south of a ravine while a prankish Wizard casts spells; a carousel that scrambles exits, a lizard door, a well bucket, a baseball-diamond room.
- goal-seeker-1 (yes): A Zork-like treasure hunt: cross a spinning carousel, answer a riddle, run a baseball-diamond maze toward the treasures the Wizard named.
- explorer-1-opus (yes): A reworking of Zork II: barrow, garden and unicorn, spinning carousel, the bases to run, the key under the door, the Bank whose doorways know their property, and a doddering wizard casting F-spells.
- goal-seeker-1-opus (yes): A sly Wizard has scattered the Empire's treasures south of a ravine; riddle door, bucket well, Alice tea room, a carousel you switch off, the baseball diamond, a dragon beaten by its reflection; the princess as the lady the unicorn's key waits for.

## Points

### P1 · world-bug · high · 4/8

The diamond window does not go dark when the count is lost. A wrong step from a corner prints 'Whatever was being counted has lost count.', yet the room it lands in still shows the old grade ('flickering dimly', even 'dimly glowing'). The next move then opens with 'lost count' again, and in the same breath says the window 'has woken'. The window's own close-up says it 'goes dark when the count is lost', so the room contradicts the rule the players were told to read. All four runs that worked the diamond reported the feedback as unreadable or random. Explorer-1 gave up on the diamond because of it.

**Recommendation:** Reset the count's grade on the move it is lost, so the room the visitor lands in shows 'dark' when the count is gone. Keep 'has woken' for a draw into a corner that starts a fresh count, and don't print 'lost count' on that move: say only that a new count has begun ('the window here, though, has woken to a new count'). Add a walkthrough step that makes a wrong step from second base and checks the next window line.

Evidence: goal-seeker-1-opus turn 49 ("Whatever was being counted has lost count. ... a very small diamond shaped window which is flickering dimly."); goal-seeker-1-opus turn 50 ("Whatever was being counted has lost count. / ... the window in the floor here, though, has woken."); goal-seeker-1-opus turn 62 ("lost count ... window which is dimly glowing"); explorer-1 turn 49 ("lost count ... window which is flickering dimly"); explorer-1 turn 59 ("lost count ... window which is flickering dimly"); goal-seeker-1 turn 102 ("Whatever was being counted has lost count. / ... has woken."); explorer-1-opus turn 58 ("report: 'I lost the count and couldn't tell how to start over'")

### P2 · design · high · 3/8

Three runs reached the Cerberus Room long before the collar could be had, and the dog answers every offer with one identical snap. The room is reachable from the start, once the bases are run, but the collar sits behind the Kennel, the menhir, the wand, the demon, the black sphere, the Workroom, the lizard's door and the princess's key. The 'bare necks' close-up worked for opus (explorer-1-opus read it as 'needs a collar'). Sonnet's goal-seeker spent its last moves offering the necklace, the club and the brick, got the same line four times, and ended its run there. The dog was the deepest point any run reached.

**Recommendation:** Grade the dog's refusals by what is offered: food is refused because it is not hungry, and a thing to wear gets a sniff and a scratch at the bare necks. Point a little further along the chain, for example the dog lifting a head toward the quarry and the leaning stone with the F on it, where its kennel is. Keep Zork's snap for a hand reaching past it.

Evidence: goal-seeker-1 turn 148 ("Its necks are bare, and it keeps scratching at them..."); goal-seeker-1 turn 149 ("The three-headed dog snaps at you viciously!"); goal-seeker-1 turn 152 ("The three-headed dog snaps at you viciously! (4th identical answer)"); goal-seeker-1-opus turn 78; explorer-1-opus turn 98 ("report: 'A clear hint that it needs a collar.'")

### P3 · design · medium · 3/8

The Carousel's description invites the visitor to take 'the one that climbs a little', and three runs typed 'up' on their first move there. All three got the bare parser refusal 'You can't go that way.' in a room whose stated rule is that every passage leads somewhere. Goal-seeker-1 also tried 'take the passage that climbs' and got 'You can't see any such thing.'

**Recommendation:** While the room spins, answer 'up' and 'climb' in the narrator's voice: the climbing passage is one of the eight and goes round with the floor, so the only way into it is to pick a passage and walk. Alternatively, let 'up' draw like any compass word. Give the passages the words 'passage', 'climbing passage' and 'one that climbs', so that 'enter'/'take' them is answered the same way.

Evidence: explorer-1 turn 19 ("go up -> You can't go that way."); goal-seeker-1 turn 13 ("go up -> You can't go that way."); goal-seeker-1 turn 14 ("take the passage that climbs -> You can't see any such thing."); goal-seeker-1-opus turn 18 ("go up -> You can't go that way.")

### P4 · design · medium · 4/8

The Carousel's random draw is still the round's biggest sink of turns and its main reason to quit. Casual quit on the move it entered, for the fourth round running. Explorer-1 spent about thirty commands trying to get back to the well with water and quit stuck. Goal-seeker-1 spent roughly forty commands reaching the Riddle Room and the Menhir. Goal-seeker-1-opus calls the retries the main drag. Two runs read 'A thing that is turned can presumably be stopped, by somebody who finds the works' and still wished for a clue to how to stop it. Only goal-seeker-1-opus found the works, more than two hundred lines in.

**Recommendation:** Keep Zork's draw. Make the pointer to the works concrete enough to follow: the first-throw line, or the Riddle Room's or well's prose, should say the whirring comes up through the floor from machinery somewhere past the well. The Low Room and the Machine Room are only reachable that way. For the casual visitor, consider putting the narrator's 'every passage leads somewhere' paragraph before Zork's 'Eight identical passages' line, so the first thing read is the invitation rather than the maze.

Evidence: casual-1 turn 14 ("report: 'Eight identical passages leave the room.' — 'This is where I lost interest.'"); explorer-1 turn 20 ("A thing that is turned can presumably be stopped, by somebody who finds the works."); goal-seeker-1 turn 15; goal-seeker-1-opus turn 214 ("robot, push triangular button")

### P5 · design · medium · 2/8

The Guarded Room is one move from the Carousel, and the lizard eats whatever it is offered. Two sonnet runs fed it a piece of the safe chain in their first forty moves: the string, which is the fuse, and the brick. Neither knew what it wanted, and nothing told them they had lost anything. Explorer-1 suspected it had wasted something useful. The crown is now unwinnable in both runs, with no tell.

**Recommendation:** Faithful as it is, put the tell before the cost. The lizard head's close-up could say it has a sweet tooth, or snaps hardest at anything sugary. A non-sweet offering could be sniffed and eaten with a line saying it was not what the lizard wanted. The brick and the string could each get a one-time 'you may want that' beat in the narrator's voice before they go.

Evidence: goal-seeker-1 turn 20 ("The lizard wolfs down the black string, crunching greedily."); explorer-1 turn 36 ("The guardian greedily wolfs it down. After a while, you hear a very small pop...")

### P6 · world-bug · medium · 1/8

In explorer-1-opus the Wizard's first visit landed inside the Barrow, on an ordinary roll. He cast Fear, which is not one of the first call's three spells, and gave no hook. His later Fantasize call, at the gazebo, had no hook either. Explorer-1-opus is the only run of eight that never saw the 'pearls nearest, behind a stone door' line, the line five other runs quote as the thing that gave them a goal. Intent says the first call is certain the first time the clock finds the visitor out of the barrow, draws evenly among Feeble, Fumble and Fantasize, and carries the hook.

**Recommendation:** Don't let the ordinary one-in-ten roll fire before the first call has happened. Either suppress it while the visitor is in the barrow, or treat any first appearance as the first call: one of the three spells, with the hook. Add a seeded test that reproduces seed 6's early roll.

Evidence: explorer-1-opus turn 8 ("The Wizard ... speaks the word "Fear!" ... You scramble away (from Inside the Barrow)"); explorer-1-opus turn 28 ("Fantasize, no hook")

### P7 · world-bug · medium · 1/8

A visitor standing in the bucket feels the Wizard's spell take effect but never sees the Wizard. Explorer-1 got only 'You begin to feel lightheaded.' (Ferment), with no appearance, wave or word. It then spent the next several commands being thrown at random ('Oops, you seem a little unsteady'), and its report blames the bucket and the pour. The appearance lines seem to go to the room's occupants, and a visitor in the bucket, a nested place (well_bottom.bucket), misses them.

**Recommendation:** Address the Wizard's appearance and cast lines to the visitor wherever they are within the room: the bucket, the balloon's basket, the cage. Address them to the visitor rather than to the room's direct occupants. Check the other nested places, which are the basket and the cage.

Evidence: explorer-1 turn 88 ("(advance) elsewhere.wizard woke ... 'You begin to feel lightheaded.' — no appearance lines"); explorer-1 turn 92 ("Oops, you seem a little unsteady... I'm not sure you got where you intended going.")

### P8 · design · medium · 1/8

Goal-seeker-1-opus drowned the dragon and startled the princess awake, then lost her within three moves and never found her again. Without her, the gold key and the Wizard's door are out of reach, which ended its run. It came back through the Dragon Room two moves after she left. BRIEF mode showed only the room's name, and the stand-in that says which way she went answers only to a look or examine, which the player never thought to try. It then went west to the Bank and back by the Carousel, a route that crosses none of her rooms. The transcript does not show whether she reached the gazebo before the player quit at the north end.

**Recommendation:** For a few moves after she passes, have each room on her way list a line even in BRIEF mode, for example small bare footprints in the soot leading toward the ledge. The visitor then sees the trail without having to examine an invisible stand-in. Also confirm, with seed 9's run, that she reached the gazebo and that the unicorn's six-move clock started.

Evidence: goal-seeker-1-opus turn 255 ("The princess walks south. She glances back at you as she goes."); goal-seeker-1-opus turn 258 ("Dragon Room (name only)"); goal-seeker-1-opus turn 270 ("report: 'I waited at the unicorn and she never came.'")

### P9 · design · medium · 1/8

The dragon's last warning, 'You had better be very careful now', was shown four times before the blow that killed. The three earlier warnings had no consequence because the walk between blows cooled it. So the player learned the warning was safe to ignore, and its report says the third blow in one room killed 'without warning'.

**Recommendation:** Grade the warning by what the next blow would do if struck at once, and say in the same voice that walking off cools him. Keep 'very careful now' for the blow before the last, and give the blow that would kill if repeated in this room a sharper line of its own.

Evidence: goal-seeker-1-opus turn 132 ("You've made him rather angry. You had better be very careful now."); goal-seeker-1-opus turn 134; goal-seeker-1-opus turn 136; goal-seeker-1-opus turn 146; goal-seeker-1-opus turn 147 ("The dragon tires of this game ... incinerates you")

### P10 · design · low · 2/8

Fantasize's end line, 'settles down and is only a room', does not say what went away, and the illusion's words fall straight back to the parser. Prose-reader saw a basilisk listed, the spell ended on the next tick, and 'examine basilisk' got 'You can't see any such thing.' Parser-breaker found the end line meaningless. Its 'read ZORK I to the sword', typed while the copy was still listed, was also refused as 'not here'.

**Recommendation:** Have the end line name what vanishes when the visitor is in a room that showed one ('The basilisk, which was never there, stops being there.'). Keep the illusion's words answered in voice for a move or two after it goes. Make the ZORK I copy answer to 'zork i' as well as 'zork'.

Evidence: prose-reader-1 turn 10 ("There is a basilisk here."); prose-reader-1 turn 11 ("examine basilisk -> You can't see any such thing."); parser-breaker-1 turn 10 ("read ZORK I to the sword -> You can't see any such thing."); parser-breaker-1 turn 11 ("The room ... settles down and is only a room.")

### P11 · design · low · 2/8

'Water' typed where there is none gets the parser's 'You can't see any such thing.' Explorer-1 poured water into the bucket with an empty teapot. Explorer-1-opus tried to fill the teapot in the gazebo. Elsewhere the same intent is answered in voice: 'The teapot is empty.' (parser-breaker), and the stream's 'The fords are where it comes up to meet you.' (explorer-1, t99).

**Recommendation:** Give the adventurer, or the teapot, a 'water' that answers anywhere there is none: the teapot is empty, and the fords are where the stream comes up.

Evidence: explorer-1 turn 88 ("pour water into bucket -> You can't see any such thing."); explorer-1-opus turn 30 ("fill teapot with water -> You can't see any such thing."); parser-breaker-1 turn 17 ("The teapot is empty.")

### P12 · world-bug · low · 1/8

The riddle refuses 'answer "a well"' with the hollow laugh. Zork's parser drops the article and accepts it, so this is a fidelity slip, and the run cost a move and was listed among the report's frustrations.

**Recommendation:** Strip leading articles ('a', 'an', 'the') and quotes from the riddle's answer before comparing.

Evidence: goal-seeker-1-opus turn 27 ("A hollow laugh seems to come from the stone door."); goal-seeker-1-opus turn 28 ("answer well -> ... the stone door quietly swings open")

### P13 · world-bug · low · 1/8

At the north end of the garden the unicorn is both listed ('There is a beautiful unicorn here cropping grass.') and announced in the same move ('A unicorn is cropping grass on the other side of the room.'). Round 5's P8 was meant to stop this.

**Recommendation:** Find which path still tells the arrival line to a visitor who arrives in the same move: here it was the visitor's return after the princess was woken. Hold it as the round-5 fix does.

Evidence: goal-seeker-1-opus turn 268 ("There is a beautiful unicorn here cropping grass. / A unicorn is cropping grass on the other side of the room.")

### P14 · design · medium · 4/8

No run reached an ending. The goal-seekers' goal, 'get as far into the place as you can', was met as far as the Cerberus Room and the Guarded Room's locked door, and no further. Goal-seeker-1 (sonnet, 152 lines typed; its report says 112) took the pearls, ran the bases and stopped at Cerberus, which wanted a collar it had no route to. Goal-seeker-1-opus got much further in puzzles: the well, the cakes and candy, the robot stopping the carousel, the lizard fed, the dragon drowned and the princess woken. It was stopped by the locked Wizard's door ('You'll need a key for that, and a small one.') after losing the princess, so it never had the gold key. Explorer-1 (sonnet) took only the pearls and quit stuck in the carousel and the diamond. Explorer-1-opus hit the 300-line cap after running the bases, getting the rusty key, the blue sphere and the bills out of the Bank, and seeing Cerberus, but never fought the dragon. About 80 of its lines were accidental repeated commands ('examine bag' ×16, 'examine brick' ×20, 'look' ×23 and ×21). That is a playtester artifact, not the world's doing, and it accounts for most of the round's repetition figure. Reach fell: places never reached rose from 15 to 27, with the whole volcano and balloon, the Dingy Closet, the Kennel, everything behind the Wizard's door, the crypt and the Landing unvisited.

**Recommendation:** The two walls are the dog (P2) and the princess's key (P8). Fixing the diamond feedback (P1) and the Carousel's pointer (P4) gives the long runs back the turns they need to reach them. Consider filtering accidental same-line repeats from the repetition metric, or flagging them, so a playtester's tooling slip does not read as the world's.

Evidence: goal-seeker-1 turn 147 ("Cerberus Room"); goal-seeker-1-opus turn 238 ("You'll need a key for that, and a small one."); goal-seeker-1-opus turn 249 ("the dragon ... dies. He is carried away by the water."); explorer-1-opus turn 296 ("report: 'Got the 200 zorkmid bills out.'"); explorer-1 turn 88

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.05 | 0.06 |
| reading.refusedRate | 0.01 | 0.01 |
| faults | 0 | 0 |
| repetition | 28 | 26 |
| reach.places.never | 15 | 27 |
| reach.objects.never | 720 | 867 |
| reach.verbs.never | 75 | 88 |
| reach.handlers.never | 108 | 173 |
| reach.passages.never | 1391 | 1791 |
