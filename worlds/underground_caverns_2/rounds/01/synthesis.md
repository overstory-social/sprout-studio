# Synthesis

**Legibility:** partly. Every run recognized a wry Zork II sequel in the Wizard of Frobozz's domain: the barrow, the lamp that 'has been through one adventure already', the wandering Wizard, the scrambling carousel, the riddle door, the unicorn with the key. The narrator's voice landed; prose rated 4 in seven of eight runs. But the arc intent.md describes was never reached. No run raised the well, entered the Tea Room, met the robot or stopped the carousel, and only one found the teapot. Players understood the world as a garden-and-carousel slice with walled exits, not as a chain of puzzles running from the well to the robot. The gazebo entry bug (P1) and the hidden water clue (P7) account for most of that gap. Several players also misread two boundaries as puzzles: the Deep Ford ledge and the unicorn's key.

- casual-1 (partly): A Zork-like walk through a barrow, a cavern, a dark tunnel and a disorienting carousel, with no puzzles or characters met.
- explorer-1 (partly): A small Zork II-style slice: barrow, garden with a skittish unicorn, carousel, Marble Hall, a meddling Wizard, many exits blocked for later.
- goal-seeker-1 (partly): A Zork-tradition cave with a carousel, a riddle door, a well, a garden and a flitting wizard, much of it walled off for later.
- goal-seeker-1-opus (partly): A ruined underground garden with a key-wearing unicorn, moving topiary, a spinning room and a riddle door; a little wizard pops in; the start of something bigger not yet open.
- newcomer-1 (partly): A Zork-like cave where a wizard appears in a dark tunnel; trapped by his fence before seeing more.
- newcomer-1-opus (partly): An adventure in the Wizard of Frobozz's territory: a spinning room, a riddle, a unicorn, treasures, and small puzzles with ordinary objects like carrying water in a teapot to a bucket, with a cackling wizard casting spells.
- parser-breaker-1 (partly): A Zork-style cave with a lantern and sword, a garden with a unicorn, a disorienting carousel, and a roaming wizard whose spells change the world.
- prose-reader-1 (partly): A wry, affectionate return to an old cave adventure: barrow, ravine, a cavern garden with a gazebo and a shy unicorn with a gold key, and a sword that glows near danger.

## Points

### P1 · world-bug · high · 5/8

The gazebo cannot be entered with 'enter gazebo' ("You can't enter the gazebo."). Only 'go into the gazebo' works, and the North End of Garden's description gives no direction into it. The gazebo holds the teapot, and without the teapot nobody can raise the bucket, so this one refusal blocks the whole second half of the quarter. Three runs typed 'enter gazebo' and were refused. Two more said they wanted to go inside. Only newcomer-1-opus got in, and it found the teapot.

**Recommendation:** Make 'enter gazebo', 'in' and 'go in' from the North End of Garden move the visitor into the Gazebo, the same as 'go into the gazebo'. Name the way in in the room or gazebo description, as Zork's 'in' exit does. Add 'enter gazebo' to the walkthrough so the next round tests it.

Evidence: goal-seeker-1 turn 26 ("enter gazebo -> You can't enter the gazebo."); goal-seeker-1-opus turn 10 ("enter gazebo -> You can't enter the gazebo."); parser-breaker-1 turn 40 ("enter gazebo -> You can't enter the gazebo."); newcomer-1-opus turn 88 ("go into the gazebo -> Gazebo / This is a gazebo in the midst of a formal garden."); prose-reader-1 turn 17 ("wished: Go inside the gazebo.")

### P2 · world-bug · medium · 1/8

When the visitor arrives in the Gazebo, the description does not list what is on the tea table. The newspaper, place mat and teapot appear only after examining the table. Zork lists the table's contents with the room, so the teapot is hidden twice over: behind the entry bug in P1 and behind an extra examine.

**Recommendation:** List the contents of a surface in the room description on arrival and on look, as Zork's DESCRIBE-OBJECTS does for an open table.

Evidence: newcomer-1-opus turn 88 ("This is a gazebo ... A tea table adorns the center of the gazebo. (no contents)"); newcomer-1-opus turn 89 ("look at the tea table -> Sitting on the tea table is: A newspaper / A place mat / A china teapot")

### P3 · world-bug · high · 3/8

Fence and Fantasize end without telling the visitor, although intent.md says every spell ends with its own line. In all three runs the engine log shows the spell timer waking, and the visitor is told nothing. newcomer-1 was still sure it was fenced in and quit, apparently already free. newcomer-1-opus found out only by trying an exit seven turns later. Fear does announce its end ('You suddenly decide that the Wizard isn't that terrifying...'), so the end-of-spell machinery works and only some spells are missing their lines.

**Recommendation:** Give each of the twelve spells an end line and check that each one fires. Add a walkthrough or test step that casts Fence and waits it out.

Evidence: newcomer-1 turn 20 ("underground_caverns_2#1 woke, 360 seconds after it asked (no told line); player quit at turn 23 believing the fence was still up"); newcomer-1-opus turn 20 ("timer woke with no line; first exit tried at turn 28 succeeds"); parser-breaker-1 turn 40 ("woke, 900 seconds after it asked; the convention of wizards is gone with no word"); explorer-1 turn 26 ("You suddenly decide that the Wizard isn't that terrifying...")

### P4 · design · medium · 2/8

Fence traps the visitor with nothing to act on. 'examine the fence' and 'attack the fence' are not recognized, nothing says the fence is temporary, and it lasts up to eighteen minutes. Both newcomers spent their turns trying to get out: the sonnet newcomer quit in the Dark Tunnel after 23 turns, and the opus newcomer spent turns 9 to 27 waiting.

**Recommendation:** While Fence is active, add an examinable 'fence' or 'barrier' to the room whose description hints that it is the Wizard's and will not last, for example that it already flickers. The Zork wording can stay as it is.

Evidence: newcomer-1 turn 12 ("examine the fence -> That sentence isn't one I recognize."); newcomer-1 turn 16 ("attack the fence with the sword -> That sentence isn't one I recognize."); newcomer-1-opus turn 25 ("examine the fence -> That sentence isn't one I recognize."); newcomer-1-opus turn 14 ("hit the fence with the sword -> That sentence isn't one I recognize.")

### P5 · engine-bug · medium · 3/8

When a known verb is used with a noun the world never declared, the engine answers "That sentence isn't one I recognize" instead of the not-here line. This happens even for things the narrator has just said are present: Fantasize's basilisk and pile of jewels, and the fence. Players took it to mean that examine, x, attack and take themselves do not work. The parser-breaker wrote 'Examine, attack, kill and x were all not recognized'. By contrast, 'examine wizards', a declared word, gets 'You can't see any such thing.'

**Recommendation:** Open a Sprout issue: when the verb is recognized but the noun is not in the vocabulary, answer with not_here or a 'no such word' line, not the unknown-sentence line. Until then, the world should declare a noun for every Fantasize illusion and for the fence, and answer them in Zork's way.

Evidence: parser-breaker-1 turn 16 ("examine basilisk -> That sentence isn't one I recognize."); parser-breaker-1 turn 18 ("x basilisk -> That sentence isn't one I recognize."); explorer-1 turn 35 ("take jewels -> That sentence isn't one I recognize."); explorer-1 turn 40 ("examine jewels -> That sentence isn't one I recognize."); newcomer-1 turn 12 ("examine the fence -> That sentence isn't one I recognize.")

### P6 · world-bug · low · 1/8

Fantasize's illusion appears when the visitor arrives but is gone on the next 'look', while the spell still has minutes to run. Later a different illusion (a grue) is in the same room. The parser-breaker found this unexplained.

**Recommendation:** Keep each room's illusion fixed for the length of the spell, and show it on look as well as on arrival.

Evidence: parser-breaker-1 turn 11 ("There is a basilisk here."); parser-breaker-1 turn 17 ("look -> Great Cavern ... (no basilisk)"); parser-breaker-1 turn 31 ("There is a grue here.")

### P7 · design · high · 3/8

No run reached the Top of Well. Everything after it went unseen: the Tea Room, the cakes, the Posts and Pool Rooms, the robot, the Machine Room, the Dingy Closet, the stopped carousel and Room 8. reach.places.never is 11 of 29, and every robot verb went unused. Three runs reached the bucket. The only clue they got was 'it goes up for water, not for you'. The one run that carried water poured it from outside the bucket. The bucket rose without the visitor and took the pearl necklace, and after five turns of waiting the player gave up, unaware that the bucket returns in a hundred moves.

**Recommendation:** Fix P1 and P2 first, since they hide the only container. Then put a fairer tell into the Circular Room, in Zork's voice: a dry tide-line inside the bucket, or a description that changes when the visitor is in the bucket and holding water. After the bucket leaves, give a line at the well bottom that it may come back down in time. 'look up' should mention the well shaft, not 'a ceiling', because the room says its roof is not visible.

Evidence: goal-seeker-1 turn 18 ("You'd have to get the bucket to go up, and it goes up for water, not for you."); goal-seeker-1-opus turn 36 ("look up -> There is a ceiling up there, and it is not doing anything interesting."); newcomer-1-opus turn 55 ("take the necklace -> You'll need to get in the bucket to reach it."); newcomer-1-opus turn 112 ("The bucket swiftly rises up, and is gone."); newcomer-1-opus turn 120 ("call the bucket -> That sentence isn't one I recognize.")

### P8 · design · medium · 3/8

The Deep Ford's boundary line ('Whatever is along there will keep until you are better equipped for it') reads as a puzzle the visitor can solve now, not as the quarter's edge. Three runs went looking for gear to climb the ledge or listed it as unfinished business. The rockfall lines ('will have to wait') were read correctly as the edge.

**Recommendation:** Reword the ledge refusal so it closes the way, as the rockfalls do (for example, the ledge has crumbled away for now), and does not suggest that an item would help.

Evidence: goal-seeker-1 turn 58 ("go north -> You start up toward the ledge ... until you are better equipped for it."); goal-seeker-1-opus turn 18 ("report: 'It hinted that I'd need some piece of gear first, so I went looking for one.'"); newcomer-1-opus turn 37 ("climb onto the ledge -> That sentence isn't one I recognize."); newcomer-1-opus turn 38 ("go north -> ... better equipped for it.")

### P9 · design · medium · 5/8

The Carousel Room's scramble often lands on one of the three walled-off passages, so players experienced it as a room of rockfalls and a slog back to the Riddle Room. The refusal leaves the visitor in the Carousel, so the scramble costs turns and gets them nowhere. This is a quarter artifact: in Zork every one of those passages leads somewhere. Most of the round's repetition figure (12) is directions typed over and over in or near the carousel. The casual player quit soon after reaching it.

**Recommendation:** While the unbuilt quarters are walled off, draw the random exit only from the passages that are built (still never west), and log the departure in friction.md. Leave the rockfall answer for when the visitor deliberately takes a walled passage after the carousel has stopped.

Evidence: goal-seeker-1-opus turn 69 ("report: 'It took about 20 tries in the random carousel to get back to the Riddle Room.'"); explorer-1 turn 22 ("The passage northwest is choked with a fall of rock not far in."); explorer-1 turn 23 ("The passage southwest is choked with a fall of rock not far in."); parser-breaker-1 turn 47 ("You're not sure which direction is which ... The passage south is choked with a fall of rock"); goal-seeker-1 turn 38 ("go southeast -> scrambled into the south rockfall"); casual-1 turn 10 ("report: 'The carousel room scrambled directions, which put me off.'")

### P10 · design · medium · 3/8

The unicorn's gold key reads as this quarter's goal. Three runs grabbed it, lost the unicorn ('uncouth sort of vagabond') and listed getting the key as unfinished. Per intent.md the key is not obtainable until the princess arrives in round 3, but nothing in play says so.

**Recommendation:** Keep the flight line, but have the unicorn's description or examine text hint that the key is meant for someone other than a passing vagabond. That points forward to the princess without inviting a hunt this quarter.

Evidence: explorer-1 turn 16 ("take key -> The unicorn ... melts into the hedges and is gone."); goal-seeker-1-opus turn 64 ("report: 'It was funny even though I'd blown it.'"); newcomer-1-opus turn 132 ("take key -> ... uncouth sort of vagabond ...")

### P11 · world-bug · low · 3/8

Events in one turn are reported out of order, and some lines repeat. Examining the unicorn prints that it bounds away and that the sword has stopped glowing, and only then the close-up description. 'Your sword is no longer glowing.' is printed twice in a single turn.

**Recommendation:** Report the result of the command before the unicorn's flight and the sword's change. Send the sword's glow-off line only once per change.

Evidence: goal-seeker-1-opus turn 9 ("The unicorn bounds lightly away. / Your sword is no longer glowing. / The unicorn shies away as you approach for a closer look..."); prose-reader-1 turn 15 ("report: 'The order of the messages is muddled, and the sword's glow messages are out of step too.'"); explorer-1 turn 10 ("Your sword is no longer glowing. / Your sword is no longer glowing."); explorer-1 turn 16 ("Your sword is no longer glowing. (twice)")

### P12 · world-bug · low · 2/8

From inside the bucket, 'examine bucket' prints the Circular Room description, not the bucket's own description.

**Recommendation:** When examining the vehicle the visitor is in, give the bucket's description (and whatever water is in it), not the room's.

Evidence: goal-seeker-1-opus turn 35 ("examine bucket -> Circular Room, in the wooden bucket / This is a damp circular room..."); newcomer-1-opus turn 49 ("examine the bucket -> Circular Room, in the wooden bucket ...")

### P13 · world-bug · low · 2/8

Several responses contradict themselves or are worded wrongly: 'You can't look inside a china teapot. The china teapot is empty.'; 'You can't give a elvish sword to a unicorn!' (wrong article), on a line the engine warned 'read 2 ways that tied, and one was drawn'; 'look up' says there is an unremarkable ceiling in a room whose roof 'is not visible'.

**Recommendation:** Let the teapot accept 'look in'. Use the Thing.indef passage in the give refusal. Resolve the tie between the two 'give' readings. Give the Circular Room its own 'look up' line.

Evidence: newcomer-1-opus turn 94 ("You can't look inside a china teapot. / The china teapot is empty."); parser-breaker-1 turn 39 ("You can't give a elvish sword to a unicorn! (drawn: the line read 2 ways that tied)"); newcomer-1-opus turn 48 ("There is a ceiling up there, and it is not doing anything interesting.")

### P14 · world-bug · low · 4/8

Common phrasings are not understood: 'exit' (in the bucket), 'go back', 'go back north', 'take the sword too', 'climb onto the ledge', and a quoted riddle answer ('answer "a well"' gets the hollow laugh, while 'a well' and 'answer well' both open the door).

**Recommendation:** Add 'exit' and 'leave' as get-out synonyms. Strip quotes and articles from riddle answers. Treat 'climb ledge' as the room's north refusal. 'go back' is Zork's own gap and can be left out.

Evidence: goal-seeker-1 turn 19 ("exit -> That sentence isn't one I recognize."); newcomer-1 turn 21 ("go back -> That sentence isn't one I recognize."); parser-breaker-1 turn 28 ("go back -> That sentence isn't one I recognize."); goal-seeker-1-opus turn 28 ("answer "a well" -> A hollow laugh seems to come from the stone door."); newcomer-1-opus turn 42 ("a well -> There is a deafening clap of thunder...")

### P15 · design · low · 2/8

The opening is half a dozen rooms of walking with nothing to act on. The casual player and the prose-reader both stopped, bored, within about 17 turns, before reaching the riddle or the gazebo. This is Zork's own opening, so it is a fidelity cost, not a defect.

**Recommendation:** Leave the map alone. Consider letting the Wizard's first visit come earlier, for example a guaranteed early appearance, or let the sword's first glow near the garden act as the hook. Log whatever departs from I-WIZARD.

Evidence: casual-1 turn 10 ("report: 'After a dozen moves I had found nothing to do except walk through rooms.'"); prose-reader-1 turn 17 ("report: 'I had no goal yet, and I stopped without reaching anything.'")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | — | 0.19 |
| reading.refusedRate | — | 0.02 |
| faults | — | 0 |
| repetition | — | 12 |
| reach.places.never | — | 11 |
| reach.objects.never | — | 228 |
| reach.verbs.never | — | 66 |
| reach.handlers.never | — | 44 |
| reach.passages.never | — | 693 |
