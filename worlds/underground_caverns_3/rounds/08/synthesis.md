# Synthesis

**Legibility:** partly. The runs that played deep read the world as the intent has it: a final test set by a grave old man, his things gathered across a ruined empire, and a duel won by unmasking a figure with your own face. Both opus runs named the gathering of the old man's seven things, and three runs named the self-double. The four short runs (casual, newcomer, parser-breaker, prose-reader) got only the frame: a dream, an old man, 'seek me when worthy', a cliff trickster. None of them reached the duel or the lake, where the melancholy and the 'win by not winning' arc live. Nobody could see the Dungeon Master's last face or the ending, because Q4 is unbuilt.

- casual-1 (partly): A classic Zork-style dungeon: a returning adventurer faces a final test, with caves, a cliff and a shore, and no goal it could find.
- newcomer-1 (partly): A cave world with a dream frame about a final test, where a watcher at the cliff top takes the chest and strands you.
- parser-breaker-1 (partly): A final test told in a dream; something unseen follows you in the shadows, and a sailor wants a particular greeting.
- prose-reader-1 (partly): A veteran adventurer's final test set by a silver-haired old man; the lantern as an old friend, a sword in a rock, a cliff oasis.
- explorer-1 (yes): An old man tests whether you are worthy; the hooded double in the Land of Shadow is yourself; you must gather more before you can go down to him.
- explorer-1-opus (yes): A ruin of the old empire where a silver-haired old man tests you: every gift (staff, vial, ring) seems to be his, and you are putting together his kit to earn a meeting; generosity to strangers and cleverness with time and place.
- goal-seeker-1 (partly): A dungeon where you fight a hooded double of yourself, cross a freezing lake, and need a repellent fetched by a teleporting table to pass a grue passage.
- goal-seeker-1-opus (yes): An old wizard's final test: collect the seven things he carries in the death vision (hood, cloak, amulet, ring, book, staff, key) through set pieces that reward patience or a sideways idea.

## Points

### P1 · design · high · 8/8

No run could reach an ending, because the world has none yet. Q4 is not built: the world declares 100 places, all of them Q1 to Q3, and no Button Room, Beam Room or Treasury exists in world/. The way down past the secret door still turns the visitor back. The brief's schedule had the revision after round 7 add Q4, and says the revision after round 8 must leave the ending reachable at 7 of 7, with the walkthrough reaching the Treasury. That revision accepted 0 of round 7's 10 points, and every round-7 finding below shows up again word for word. So round 8 tested the round-7 world, and this round's metric deltas are run-to-run variance, not the effect of a revision. Neither goal-seeker reached its goal. The sonnet run got as far as the Scenic Vista, Room 8 and the grue lair, and quit at turn 112 after losing the repellent to the lake. The opus re-run went much further (491 turns): five of the seven items, three trips to 776, the ring under the seat, the Royal Puzzle and the book. It stopped with the can lost underwater, so the Key Room was out of reach, and the book given up to the slot. Even a perfect run would have met the stairs' refusal. The opus explorer also went further than its sonnet run (staff, vial, Room 8, the ring trick), but both explorers ended sealed in the Royal Puzzle (P4).

**Recommendation:** This revision must do what the brief requires for release. Build Q4 whole: the stairs, the Button and Beam Rooms, the mirror box and Guardians, the dungeon, the parapet and cells, the Dungeon Master and the Treasury. Open the secret door's way down onto it, and extend the walkthrough from the Endless Stair to the Dungeon Master's last words at 7 of 7. Fold in the carried-over round-7 fixes (P2, P3, P7). Say in intent.md that round 7's revision was skipped, so the next round's deltas are read against the right world.

Evidence: explorer-1 turn 30 ("The way down is not yours today. You come back up."); explorer-1 turn 205 ("call old man -> You can't see any such thing."); goal-seeker-1-opus turn 386 ("Royal Puzzle Exit Fee Paid / Item Confiscated"); goal-seeker-1 turn 110 ("The can of grue repellent is yours for a moment, but drops from your grasp."); explorer-1-opus turn 239 ("a wall of this kind is pushed, and pushed only.")

### P2 · world-bug · high · 5/8

This is round 7's P1, unfixed. The Cliff's cue says something among the trees 'that is not a tree is keeping very still', but it names nothing that can be examined. Four runs typed the cue straight back and got 'You can't see any such thing.', and a fifth (casual) listed it among its wishes. It breaks the brief's rule that everything a description names answers examine, on the scene almost every run reaches first. The metrics count it as unread in four runs.

**Recommendation:** Do what round 7 recommended. While the man is unmet, give the Cliff a thing that answers to 'thing', 'something', 'shape', 'figure', 'watcher' and 'not a tree'. Examined, it gives the original's 'nobody there, but it's hard to tell' and slips back among the trunks. Make 'look/search among the trees' and 'behind the trees' an intent over it, and remove it when the man shows himself, the same moment the cue stops.

Evidence: prose-reader-1 turn 13 ("examine the thing that is not a tree -> You can't see any such thing."); newcomer-1 turn 9 ("examine the thing that is not a tree -> You can't see any such thing."); explorer-1-opus turn 13 ("examine the thing among the trees -> You can't see any such thing."); explorer-1-opus turn 15 ("search among the trees -> You can't see any such thing."); goal-seeker-1-opus turn 8 ("examine the thing among the trees -> You can't see any such thing."); casual-1 turn 6 ("wished: Some way to interact with the thing hiding among the trees")

### P3 · engine-bug · high · 1/8

The round's one fault is the same as round 7's. 'help' typed in the Room in a Puzzle faulted with BudgetExhausted ('one turn may say 8000 characters to any one person'), and the explorer's run ended two lines later. 'help' is Sprout's own verb (sprout.help is unreached in the verb metrics because the fault aborts it). Its output overruns the turn budget in a square that holds the puzzle's many per-square things. The brief requires no fault in any run. A line earlier, 'hint' was not a recognized sentence.

**Recommendation:** File it in overstory-social/sprout, if it is not already filed: stdlib help should bound or summarise its output rather than fault. Until Sprout fixes it, answer 'help' (and 'hint') in the world everywhere with a short line in Zork's voice, add a test that runs 'help' in a puzzle square, and log it in friction.md.

Evidence: explorer-1 turn 204 ("help -> the command faulted, BudgetExhausted: output: one turn may say 8000 characters to any one person."); explorer-1 turn 194 ("hint -> That sentence isn't one I recognize.")

### P4 · design · high · 3/8

The Royal Puzzle can seal a visitor in for good, in a world that refuses restart and has no undo. Both explorers pushed the ladders where they could not be pushed under the hole. They had no book for the slot, so they waited, shouted, typed undo and pulled at walls, then quit. The sonnet explorer's 'restart' got a refusal promising the old man would carry it back, a rescue that only a death brings, and nothing in the puzzle can kill. The goal-seeker opus run got out only by feeding the book to the slot, losing one of the seven things. The note warns of being trapped, but no push says a ladder is now past saving. The original is faithful here, but the original had RESTORE. Elsewhere the author adapts REALLY-DEAD for a world with no restore ('A death in another year is a death like any other'), and the puzzle has no such adaptation.

**Recommendation:** Give the sealed puzzle a way out that suits a world with no restore, and log it as a departure in friction.md. For example: once no ladder can reach the hole and the visitor holds no book, a wait or a shout brings the museum's after-hours personnel, or the old man, and costs what a death costs. When a push leaves the good ladder against an edge, say so in the wall's line. Have the slot, examined, say plainly that the fee is the one thing worth having, so giving up the book is a choice the visitor knows they are making.

Evidence: explorer-1 turn 200 ("This world does not start over on request. What you have lost stays lost..."); explorer-1 turn 205 ("call old man -> You can't see any such thing."); explorer-1-opus turn 231 ("push east wall -> The wall slides forward and you follow it."); explorer-1-opus turn 234 ("undo -> That sentence isn't one I recognize."); explorer-1-opus turn 239 ("You can't grab the wall to pull it; a wall of this kind is pushed, and pushed only."); goal-seeker-1-opus turn 377 ("Garbage In, Garbage Out ... the piece of waybread (now atomized)"); goal-seeker-1-opus turn 386 ("Royal Puzzle Exit Fee Paid / Item Confiscated")

### P5 · design · medium · 3/8

The repellent chain went uncrossed for a third round: the Key Room, Dark Place 2, the Aqueduct, the High Arch and the Water Slide were reached by no run. Three runs held the can, and each lost the five moves a different way. The goal-seeker sprayed at the Vista, spent moves dropping the can and walking north, took 'much less pungent' on the Southern Shore as a cue to press on, and was eaten one move short. The opus goal-seeker carried the unsprayed can into the lake and lost it. The opus explorer carried the can from turn 91 to the end and never sprayed it. Round 7's P5 recommendation (say where to start) was not taken up.

**Recommendation:** Keep the five moves and the lair. Add one clause to the can's small print: one application lasts about as long as it takes to get from the water's edge to the top of a slope, so apply it at the edge. When moves remain, make the Southern Shore's 'less pungent' line read as a hurry-up ('still enough for the climb, if you do not dawdle') and not as a retreat.

Evidence: goal-seeker-1 turn 81 ("spray me with can (at the Scenic Vista)"); goal-seeker-1 turn 85 ("That horrible smell is much less pungent now."); goal-seeker-1 turn 87 ("Oh, no! Dozens of lurking grues attack and devour you!"); goal-seeker-1-opus turn 79 ("jump in lake (holding the unsprayed can)"); explorer-1-opus turn 91 ("take can -> Taken.")

### P6 · design · medium · 3/8

Underwater slips read as permanent loss. Three runs took a failed grab as final and gave up on the thing: the can in both goal-seeker runs, the amulet for the opus explorer. The slip line ('yours for a moment, but drops from your grasp') says nothing about the thing still being there, and the two-command air supply leaves time for one retry at most. The can slipped on all three tries across two runs. The code reads a 3-in-10 chance (adventurer.sprout:1322), so this is probably bad luck, though at those odds it happens 2.7% of the time.

**Recommendation:** Keep the odds. Reword the slip so it says the thing settles in the sand within reach, where another try might hold it. Check that the slip draw is not correlated across seeds, for example with a test of 20 dives that expects some takes.

Evidence: goal-seeker-1 turn 110 ("The can of grue repellent is yours for a moment, but drops from your grasp."); goal-seeker-1-opus turn 83 ("The can of grue repellent is yours for a moment, but drops from your grasp."); goal-seeker-1-opus turn 90 ("The can of grue repellent is yours for a moment, but drops from your grasp."); explorer-1-opus turn 70 ("The shiny object slips from your grasp and back onto the floor of the lake")

### P7 · world-bug · medium · 2/8

This is round 7's P3, unfixed. The cracked rock's examine line ends 'a good shake would settle the matter', and 'shake rock' is refused by the parser ('You can't shake the cracked rock.') because shake is typed by kinds the rock does not compose. After the quake, 'shake rock' reached the ground instead. The metrics count three unread shakes.

**Recommendation:** Make the shake the earth's ('a good shake of the earth would settle the matter'). Have the cracked rock compose the kind shake is typed by, and answer in its push line's voice: it is waiting for something a good deal bigger than you.

Evidence: goal-seeker-1 turn 47 ("The door is for ever; the rock, by the look of it, is not, and a good shake would settle the matter."); goal-seeker-1 turn 48 ("shake rock -> You can't shake the cracked rock."); goal-seeker-1 turn 50 ("shake door -> You can't shake the iron door."); explorer-1 turn 61 ("shake rock -> You can't shake the cracked rock."); explorer-1 turn 98 ("shake rock -> You can't shake the ground.")

### P8 · design · low · 1/8

A machine push stopped by a closed door reads as though the push half happened. The answer was 'You put your shoulder to the machine.' and then 'The stone door is closed.', with nothing saying the machine stayed. The player sat in it, set 776 and pushed the button. It arrived in the old Museum Entrance among the guards and was shot, losing what it carried.

**Recommendation:** When the way is shut, say so with the machine in the line, for example 'The stone door is closed, and the machine stays where it stands.', and leave out the shoulder sentence.

Evidence: goal-seeker-1-opus turn 256 ("push machine east -> You put your shoulder to the machine. / The stone door is closed."); goal-seeker-1-opus turn 259 ("One twists his waffle and you slump to the ground, dead.")

### P9 · design · low · 1/8

The time trip takes worn things, which contradicts the lake's lesson that what you wear stays with you. The opus goal-seeker wore the ring for the trip home and was surprised to lose it. The trip's line says 'everything you were holding', which a player wearing the ring does not read as covering it.

**Recommendation:** Keep the mechanic, which is the original's TGOTO. Extend the line, for example 'everything you were holding is gone, and what you wore with it', so the machine's rule is told as plainly as the lake's.

Evidence: goal-seeker-1-opus turn 197 ("take ring -> You are now wearing the golden ring."); goal-seeker-1-opus turn 216 ("You notice that everything you were holding is gone!")

### P10 · engine-bug · low · 2/8

The parser still gives a false or truncated answer to compound lines (friction 38, round 7's P7, with the same line). 'hello, who is up there?' got the shout's full answer and then 'That sentence isn't one I recognize.' in the same turn. 'pull the sword out gently' silently dropped everything after 'sword'.

**Recommendation:** Add both lines to friction 38 and its Sprout issue. At the ledge, make 'who is up there' a phrase of the shout, as 'who is there' already is.

Evidence: newcomer-1 turn 13 (""Hello yourself," says a voice ... / That sentence isn't one I recognize."); parser-breaker-1 turn 5 ("pull the sword out gently -> (pull the sword)")

### P11 · design · low · 1/8

The table still sends empty-handed visitors into the dark (round 7's P4). The opus goal-seeker touched the table with its lights left at the lake, landed in a dark Room 8, and could neither take nor feel for the can. It worked out the torch only on a later trip. The two runs that took the torch first got the can at once.

**Recommendation:** When the visitor carries no light, add one sentence to the table's lean toward the hand: the places it shows have no sun of their own, and the flame on the wall beside it is the one light here that has not been near the water.

Evidence: goal-seeker-1-opus turn 56 ("touch table (view II, no light)"); goal-seeker-1-opus turn 57 ("take can -> You can't see any such thing."); goal-seeker-1 turn 76 ("take torch -> Taken. (then Room 8 lit, can taken)")

### P12 · design · low · 3/8

Short sessions find no hook. The casual player quit after nine lines: the sword in the rock was a dead end that gave no hint, and nothing else in the first rooms asked for anything. The newcomer and the prose-reader both wished to know what the final test was. The original's opening is this bare, but here the sword's refusal is a natural place for a hint and gives none: in the arc the sword comes to the hand when it is needed.

**Recommendation:** Keep 'Who do you think you are? Arthur?'. Have 'examine sword' or the second try at taking it add one sentence in voice: the sword has the look of a thing that will come when it is wanted, and not before. This points toward the shadows without saying so.

Evidence: casual-1 turn 4 ("The Elvish sword in the rock can't be taken, and there is no hint about how."); casual-1 turn 9 ("I reached a beach with quicksand and mist but had no goal or direction."); newcomer-1 turn 16 ("wished: Know what the final test was and what I was meant to do.")

### P13 · design · low · 6/8

The set pieces that were refined earlier work, and the transcripts agree with the ratings. Both opus runs waited out the nine ledge beats and quoted them as highlights. Three runs took the hood instead of killing the figure, and quoted the own-face line. The sailor's hold-once nudge led the parser-breaker to the words. Both opus runs hid the ring under the seat in 776 and found it in 948. Every run that reached the lake dropped what it held on the shore first.

**Recommendation:** Keep all of these as they are, with the odds untouched. Spend the revision on Q4 (P1) and the carried-over fixes.

Evidence: explorer-1-opus turn 36 ("grab rope (after ten waits; staff had)"); goal-seeker-1-opus turn 13 ("a pity there's no way of sending it up"); goal-seeker-1 turn 17 ("lower the hood -> ... recoil in horror at the sight of your own face"); explorer-1 turn 88 ("remove hood"); parser-breaker-1 turn 13 ("as though he were waiting for something in particular and this was not quite it."); explorer-1-opus turn 156 ("look under seat (ring found in 948)"); goal-seeker-1 turn 62 ("drop all (Lake Shore)")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.09 | 0.07 |
| reading.refusedRate | 0 | 0.01 |
| faults | 1 | 1 |
| repetition | 39 | 43 |
| reach.places.never | 25 | 26 |
| reach.objects.never | 642 | 631 |
| reach.verbs.never | 70 | 68 |
| reach.handlers.never | 15 | 16 |
| reach.passages.never | 1932 | 1918 |
