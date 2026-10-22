# Synthesis

**Legibility:** legible. All six read the world as the intent describes it: a treasure hunt under the white house, filling a trophy case that wants filling. They also saw the extra presence: the barring 'someone', 'somebody tidy' and the thief. prose-reader named the author's examine voice exactly, as melancholy about the adventurers who came before. explorer read the egg's clasp as the thief's job, which is the intended way to the canary. casual matches only in part: it had 30 turns, and it took Zork's own Round Room cave-ins for the alteration (P11). Models: the five opus runs (explorer, goal-seeker, prose-reader, parser-breaker, newcomer) sent commands in batches without reading the replies in between. That produced the swings at an already-dead troll (explorer turns 59-64, prose-reader turns 24-26). explorer also played partly from memory, against its instructions: 'examine painting' at East of Chasm, and 'take coins', 'examine dam', 'read guidebook' and 'push yellow button' in the Loud Room. casual, the only fable run, played the straight Zork line (window, lamp, troll, echo on the first guess) and wrote a more conversational report. With one fable run and a 30-turn cap, its differences can't be separated from its persona and its cap.

- explorer-1 (yes): The white house with a trophy case that 'expects to be filled', treasure in the forest and the caves, and fragile treasures that someone dishonest might want: the egg's clasp is for a thief's fingers.
- goal-seeker-1 (yes): A treasure hunt whose real game is logistics: carrying limits, one-way routes, a chimney that takes one thing, and a trap door barred behind you.
- newcomer-1 (yes): Treasure under a house, where getting it home is half the job: a barred trap door, a one-item chimney, and somebody unseen who walks off with what you leave lying around.
- casual-1 (partly): Classic Zork, treasures for a case, 'altered somewhere underground', with the cave-ins and the barred door taken as the changes. It did not get far enough to see more.
- prose-reader-1 (yes): The old map and puzzles in a new, wry and melancholy voice about the dead adventurers who came before and didn't make it home.
- parser-breaker-1 (yes): A world that says no politely, and whose changes are about carrying things: scattered belongings after death, 'somebody tidy', the chimney's limit, and the sword blamed for the weight.

## Points

### P1 · design · high · 4/6

Round 15's fix for the trap door was never read. The new sentence only appears when the trap door is examined from the Cellar, and no run examined it. Four runs did try the barred door from below, with `up`, `open`, `push open` and `smash`, and got Zork's bare refusals. So the long runs again spent their turns carrying treasure up the chimney one item at a time: newcomer climbed it five times, and parser-breaker quit bored, naming this as the reason.

**Recommendation:** Keep TOUCHBIT as it is. Put the voice where players actually type. While the door is barred, follow Zork's 'The door is locked from above.' and 'The trap door is closed.' with the round-15 sentence, or a short form of it. Do the same for `push`, `smash` and `break`. Keep the examine line too. Test it from the Cellar with `open`, `up` and `push open`.

Evidence: goal-seeker-1 turn 107 ("go up -> The trap door is closed."); newcomer-1 turn 82 ("push open the trap door -> The door is locked from above."); prose-reader-1 turn 97 ("open trap door -> The door is locked from above."); parser-breaker-1 turn 231 ("smash the trap door with the platinum bar -> Nice try."); parser-breaker-1 turn 232 ("open trap door -> The door is locked from above."); newcomer-1 turn 151 ("fifth chimney climb (turns 94, 106, 115, 124, 151), one treasure each"); parser-breaker-1 turn 237 ("report: 'The trap door was locked from above, so every treasure had to go out the long way'")

### P2 · design · medium · 1/6

The rule works without any signal. goal-seeker came up by prayer and opened the trap door from above, and it stayed open as intended. On the way home with the crystal skull, though, it walked through the Cellar under the open door and on to the chimney. The chimney refused it, and it had to drop two things. The Cellar's BRIEF line ('Cellar') never says the door above is open. The run did later use the slide and the stairs as a short way home, but its report still wishes it could 'unbar the trap door from below'.

**Recommendation:** Have the Cellar say when the trap door above it is open, even in BRIEF. For example, the narrator could add a clause such as 'The trap door above you stands open.' as the room's name is given. Zork's Cellar text is fixed, so this would be a small deviation in prose. It completes P1: the barred state gets a voice, and so does the open one.

Evidence: goal-seeker-1 turn 187 ("pray -> Forest"); goal-seeker-1 turn 200 ("go down -> Cellar (no crash: the door stays open)"); goal-seeker-1 turn 241 ("go south -> Cellar (BRIEF; the open trap door unmentioned)"); goal-seeker-1 turn 245 ("go up (Studio) -> You can't get up there with what you're carrying, which is the brass lantern, the matchbook, the clove of garlic and the crystal skull."); goal-seeker-1 turn 348 ("after the slide, go up -> Living Room")

### P3 · design · medium · 1/6

Nobody used the torch at the shaft, for the third round running. No run reached the lower mine: the Ladder Top and Bottom, the Timber Room, the Drafty Room and the Machine Room are all on reach.places.never. The one run that could have done it put the torch in the case twice. goal-seeker took it out for the coffin trip, put it back just before heading for the mine, went through the Gas Room with only the lamp, and used up its last turns mapping the coal mine. No run examined the shaft, so its round-14 line went unread.

**Recommendation:** Nothing further in the world: the shaft and the torch already point at each other. Testing v7's diamond needs a run that is aimed at the mine or starts mid-game, and that is the director's call.

Evidence: goal-seeker-1 turn 197 ("put torch in case -> Done."); goal-seeker-1 turn 254 ("take torch -> Taken."); goal-seeker-1 turn 350 ("put torch in case -> Done."); goal-seeker-1 turn 398 ("report: 'I ran out of turns while lost in the coal mine maze.'"); prose-reader-1 turn 72 ("examine basket (the shaft never examined)")

### P4 · design · medium · 2/6

The mazes ate the turns, and they account for most of the round's worse figures. prose-reader spent turns 151 to 240, about 38% of its run, in Zork's Maze. It reached the Grating Room holding the skeleton key, stepped straight back out, and never found the room again. goal-seeker ended in the coal mine. Neither dropped anything to mark a room. Their 'You can't go that way.' answers make up most of the unread lines (about 64 for prose-reader and 44 for goal-seeker, of 168 in total), and most of the repetition entries (14 and 15 of 43).

**Recommendation:** Keep the maze as Zork built it. Dropping things to mark rooms is the classic answer, and the intent already supports it. When reading this round's unreadRate (0.14) and repetition (43), count the maze and mine 'no_way' answers separately: they are mapping, not failures of the world.

Evidence: prose-reader-1 turn 146 ("take bag and key"); prose-reader-1 turn 211 ("go northeast -> Grating Room ... Above you is a grating locked with a skull-and-crossbones lock."); prose-reader-1 turn 212 ("go southwest -> Maze"); prose-reader-1 turn 240 ("report: 'Dozens of "Maze" / "You can't go that way."'"); goal-seeker-1 turn 384 ("report: 'Every room reads "nondescript part of a coal mine".'")

### P5 · design · low · 3/6

The thief robbed three runs and was read correctly, as an unseen someone. He took the jade from the Studio floor while newcomer was up the chimney, and took the trident and bracelet from prose-reader, then killed it. He took parser-breaker's trident in passing. In goal-seeker's run, 'Finding nothing of value' was printed while the platinum bar lay on the floor. That is faithful: Zork robs a room's floor only while the visitor is somewhere else. No run went after him: the Cyclops Room, the Strange Passage and the Treasure Room are all on reach.places.never.

**Recommendation:** Keep. It is Zork's thief and players read him as the intent hopes. The lair and the canary remain untested in this round.

Evidence: newcomer-1 turn 123 ("take the jade figurine -> You can't see any such thing."); prose-reader-1 turn 77 ("he quietly abstracted some valuables from your possession"); prose-reader-1 turn 112 ("The thief, a pragmatist, dispatches you as a threat to his livelihood."); parser-breaker-1 turn 221 ("he quietly abstracted some valuables from your possession"); goal-seeker-1 turn 110 ("Finding nothing of value, he left disgruntled.")

### P6 · world-bug · low · 1/6

In the Forest by the mountains, 'climb the impassable mountains' was answered as an unrecognized sentence. The object there declares the adjective 'impassable' and is named 'mountains', but its nouns are only 'mountain', 'range' and 'peaks' (above_ground.sprout:236). The plural word in the room's own text is probably not a noun.

**Recommendation:** Add "mountains" to that object's nouns, and check other grammars whose name word is missing from their nouns. Then `climb mountains` will get Zork's 'The mountains are impassable.'

Evidence: parser-breaker-1 turn 140 ("climb the impassable mountains -> That sentence isn't one I recognize.")

### P7 · world-bug · low · 1/6

Two natural phrasings that the world has answers for fall through. 'go down the trap door' with the door open gets 'You can't do that!', though the stairs are climbed by name and plain `go down` works. 'swim across the lake' at Reservoir North is not recognized, though SWIM exists and the lake has its own 'You can't swim in this lake.'

**Recommendation:** Make `go down [trap door]`, `go through [trap door]` and `climb down [trap door]` go down when the door is open, as the stairs do. Make `swim in [x]` and `swim across [x]` reach the target's own swim refusal, the lake's or the river's.

Evidence: newcomer-1 turn 25 ("go down the trap door -> You can't do that!"); newcomer-1 turn 26 ("go down -> The trap door crashes shut..."); newcomer-1 turn 42 ("swim across the lake -> That sentence isn't one I recognize.")

### P8 · language-gap · low · 3/6

Adverbs, trailing clauses, 'everything except' and unknown adjectives still break otherwise valid lines, and the answer is a flat not_here or unknown. parser-breaker took the adverb failure to mean the boarded door itself could not be named.

**Recommendation:** No world change. These are already logged as friction 120 (adverbs) and 132 (everything). Add this round's evidence to the unknown-word entry: Zork's 'I don't know the word "politely".' would have told parser-breaker the door was fine.

Evidence: parser-breaker-1 turn 1 ("knock on the boarded door politely -> You can't see any such thing."); parser-breaker-1 turn 24 ("put the garlic in the trophy case and admire it -> Done. / You can't see any such thing."); parser-breaker-1 turn 39 ("climb the unclimbable ramp -> That sentence isn't one I recognize."); newcomer-1 turn 7 ("open the window wider -> You can't see any such thing."); newcomer-1 turn 92 ("drop everything except the lantern and the painting -> You can't see any such thing."); prose-reader-1 turn 107 ("empty sack -> That sentence isn't one I recognize.")

### P9 · language-gap · low · 1/6

In the deafening Loud Room, commands that name things not present escape the echo with 'You can't see any such thing.' 'score' and 'north' echoed as they should, so the room's one rule had exceptions.

**Recommendation:** This is friction 70 ('what does not parse cannot be echoed'). Add the round's evidence there. Nothing in the world can change it.

Evidence: explorer-1 turn 70 ("take coins -> You can't see any such thing."); explorer-1 turn 71 ("score -> Score score ..."); explorer-1 turn 74 ("examine dam -> You can't see any such thing."); explorer-1 turn 78 ("push yellow button -> You can't see any such thing.")

### P10 · engine-bug · low · 1/6

'take lunch and bottle out of sack' was refused as a whole with 'That isn't in the brown sack.', although the lunch was in the sack. Zork answers each item in turn. The same player read the inventory as showing the bottle inside the sack: the recorded lines carry no nesting, and the bottle follows the sack's 'A lunch' directly.

**Recommendation:** Replay the line in a `sprout test` with the lunch in the sack and the bottle in hand. If the engine refuses the whole list on one item's failure, file it with Sprout next to friction 133. Also check whether PRINT-CONT's nesting reaches the player's view.

Evidence: prose-reader-1 turn 108 ("take lunch and bottle out of sack -> That isn't in the brown sack."); prose-reader-1 turn 80 ("inventory: The brown sack contains: / A lunch / A glass bottle / The glass bottle contains: ...")

### P11 · design · low · 3/6

Zork's own text was taken for the world's changes. Players were told this is 'a changed version', and three of them named the Round Room's cave-ins as the change, along with the Dam's west exit. Both are Zork's. Nobody examined the cave-ins, so the round-14 answer that names the open ways went unread.

**Recommendation:** No world change; the room text stays Zork's. For the director: the 'changed version' framing sends players hunting for changes in the original's own text, which colours what they report as legible.

Evidence: casual-1 turn 22 ("'first sign this isn't quite the place I remembered'"); goal-seeker-1 turn 28 ("'The Round Room says several passages are blocked by cave-ins, so the map isn't what I expected.'"); goal-seeker-1 turn 65 ("'West from the Dam went to Reservoir South'"); prose-reader-1 turn 240 ("report: 'Some of the map is altered too (Round Room cave-ins, the lake at the reservoir).'")

### P12 · design · low · 6/6

What was reached worked and was praised. The trophy case's 'patient air' was quoted as the game's goal by five runs. The chimney's rule was quoted as clear and fair by four. The death-scatter line turned a death into a search for one run, who found the sword in the Clearing, and drew praise from another. Several v8 and carried items were met for the first time or again: the exorcism in order and against its clock, the crystal skull cased, the lamp dimming, the canyon climbed (two runs), and the slide and stairs used as a way home.

**Recommendation:** Keep all of it. Still unmet: death as a spirit (both deaths came before the Altar was seen), the bottle refilled, small things through the grating, the grue, the egg given to the thief, the Grating Room opened from below, and the 350 ending.

Evidence: explorer-1 turn 12 ("It has the patient air of something that expects to be filled."); newcomer-1 turn 91 ("The chimney has room for you, your lamp and one thing more, and not an inch besides."); parser-breaker-1 turn 147 ("take sword (in the Clearing, after the scatter)"); goal-seeker-1 turn 224 (""Begone, fiends!" ... the spirits ... flee through the walls."); goal-seeker-1 turn 249 ("The lamp appears a bit dimmer."); goal-seeker-1 turn 307 ("canyon climbed up to Canyon View with the rainbow's treasures"); parser-breaker-1 turn 163 ("up -> Canyon View"); casual-1 turn 10 ("'told me what the game wants from me without a tutorial'"); prose-reader-1 turn 112 ("'somebody tidy has put the lamp back in the living room'")

### P13 · design · medium · 3/6

Goals. explorer reached its goal: the egg went whole into the case at turn 45, worth 20 points, and the run stopped at 60. newcomer reached its goal in substance: four treasures in the case for 95 points, and a fifth, the jade, lost to the thief. goal-seeker did not reach 350, but it scored 225 against round 15's best of 164, the highest of any round. The 400-turn cap stopped it in the coal mine. Its losses were the chimney detour in P2, the torch back in the case (P3), and the thief, the Cyclops, the river and the diamond left untouched.

**Recommendation:** No change of its own. P1 and P2 are the levers on the goal-seeker's ceiling. The 350 ending still needs a longer cap or a mid-game start, which is the director's call.

Evidence: explorer-1 turn 45 ("put egg in trophy case -> Done."); explorer-1 turn 47 ("Your score is 20 (total of 350 points), in 45 moves."); newcomer-1 turn 156 ("Your score is 95 (total of 350 points), in 141 moves."); goal-seeker-1 turn 353 ("Your score is 225 (total of 350 points), in 311 moves. This gives you the rank of Adventurer.")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.07 | 0.14 |
| reading.refusedRate | 0.01 | 0.02 |
| faults | 0 | 0 |
| repetition | 20 | 43 |
| reach.places.never | 41 | 27 |
| reach.objects.never | 549 | 550 |
| reach.verbs.never | 64 | 68 |
| reach.handlers.never | 82 | 79 |
| reach.passages.never | 1692 | 1707 |
