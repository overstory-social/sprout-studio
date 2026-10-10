# Synthesis

**Legibility:** legible. Five of six players read the world as the intent describes it: Zork's house and dungeon, faithfully ported, now centred on the dam and the river, with the hauling of treasure home as the puzzle and someone tidy, or a thief, moving through it. The casual run got as far as the house, the barring and the troll, and guessed at the dam story from the river. Goals: the explorer reached theirs at turn 24 (egg in the case) with nothing in the way. The newcomer reached theirs (trunk, painting, bar and egg in the case, 85 points) despite the thief taking the pump and trident and then killing them. The goal-seeker had last confirmed 125 of 277 when the 250-turn cap hit. What stood in their way was the death at the Falls from the Shore (P1), which cost 10 points and the carried treasures, the one-treasure chimney loops (P9), and the cap. Models: the opus runs (explorer, goal-seeker, prose-reader, parser-breaker, newcomer) played 171 to 250 turns. They queued several commands at once and paid for it: six attacks on a vanished troll (explorer 35-40), a maze misroute (explorer 122-157), four bare-handed digs (prose-reader 127-130). They often typed Zork's answers straight away, such as "echo" (prose-reader 40, goal-seeker, explorer). The fable casual run played 30 single plain commands, did not know the echo, and stopped at a dead-end beach.

- casual-1 (partly): A white house over caves; someone bars the trap door behind you; kill the troll; a damaged cave system with a rushing-water sound and a river, and probably a dam story they never reached.
- explorer-1 (yes): Zork rewritten, with Flood Control Dam #3 at its centre: drain the reservoir, raise the trunk, trident and pump, ride the boat toward the Falls. The chimney carries one treasure, a thief haunts the edges, and the egg's clasp points at him.
- goal-seeker-1 (yes): A treasure hunt into the trophy case, centred on the dam and the Frigid River, strict about carrying, with the old map bent by cave-ins and a one-thing chimney.
- newcomer-1 (yes): Caves under an old house; the trap door is barred, so the chimney is the way home, one treasure a trip. A quiet thief takes what you leave lying around, and the trophy case is the one safe place.
- parser-breaker-1 (yes): Zork again, with the most new work on the dam and the river: working an old machine and riding out what you let loose, while a tidy caretaker puts your things back when you die.
- prose-reader-1 (yes): Zork's dam and river rewritten with wry care. It is about neglected things left waiting, under a quieter story of someone very tidy who sorts the rubble and carries your lamp home.

## Points

### P1 · design · high · 3/6

Launching from the Shore kills. Launching there puts the boat on the last reach ("The sound of rushing water is nearly unbearable here"). The only way off it is east, and the very next turn of anything else goes over Aragain Falls. Three of the six runs died exactly this way, and two of them were trying to cross to the west bank. The refusal they got is the generic "You can't go that way.", and then they died. The prose-reader's "go upstream" got the correct river line and still died on the same tick. All three went down holding the round's treasures (emerald, scarab, trunk, bar) and lost them to the scatter. Nobody died on the river by drifting from the Dam Base, so the round-11 timing works. The Shore is the trap. This is faithful to Zork (RIVER-5 has only EAST, and I-RIVER gives it one move), but no player has yet read it as fair.

**Recommendation:** Keep Zork's map and the one-move current. Give the last reach's own refusals Zork's voice instead of the generic no_way: west should name the sheer far bank and the current, and up already does. Consider a line when you launch from the Shore saying the current takes hold at once, so a single-move death reads as a known risk and not a parser turn wasted. Next round, watch whether anyone still launches from the Shore.

Evidence: explorer-1 turn 234 ("launch -> "The sound of rushing water is nearly unbearable here. On the east shore is a large landing area.""); explorer-1 turn 235 ("go west -> "You can't go that way." then "Unfortunately, the magic boat doesn't provide protection from the rocks and boulders...""); goal-seeker-1 turn 101 ("launch from the Shore, same reach"); goal-seeker-1 turn 102 ("west -> "You can't go that way.", then dead; score 65 -> 55"); prose-reader-1 turn 148 ("go upstream -> "You cannot go upstream due to strong currents." then over the Falls"); parser-breaker-1 turn 135 ("went over on purpose after the buoy, as a control")

### P2 · design · medium · 3/6

Round 11's new rainbow line is being read as an invitation to cross the river, not as a pointer to the canyon. Three runs examined the rainbow at the Falls and read about "a little sunlit beach on the far side". None of them had the sceptre: it is still in the coffin, behind the Dome's rope, and nobody reached the Egyptian Room. Nobody reached Canyon View, End of Rainbow or the pot of gold, and nobody went east from the Clearing. Both players who then tried to reach the far side went by boat from the Shore (P1), and both named crossing west as their top wish.

**Recommendation:** Make the far side say it is reached by land, not by water. For example, the beach can be seen to have a path going up the canyon wall, "to somewhere with trees on it" (that text already exists on the far-side thing; put it in the rainbow line players actually read). Leave the sceptre's hint as Zork's own. Next round's watch is still the canyon from the Clearing.

Evidence: explorer-1 turn 220 ("examine rainbow -> "...come down on a little sunlit beach on the far side, where the canyon opens to the sky.""); goal-seeker-1 turn 98 ("look at rainbow; three turns later launches from the Shore and tries west"); prose-reader-1 turn 122 ("cross rainbow -> "Can you walk on water vapor?"")

### P3 · engine-bug · medium · 2/6

The parser misreports what it failed to read. A command with an extra adverb or a trailing phrase answers "You can't see any such thing." even when the object is in plain sight. The player is told the object is absent when the real problem was a word. The same commands without the extra words work.

**Recommendation:** File it with Sprout. When an unknown word sits in a noun phrase, the answer should be that the word is not known (Zork's "I don't know the word ...") or the sentence is not recognised, never not_here. Log it in friction.md, and do not work round it in the world.

Evidence: parser-breaker-1 turn 1 ("kick the mailbox gently -> "You can't see any such thing." (kick mailbox works next turn)"); parser-breaker-1 turn 4 ("read leaflet aloud to the house -> "You can't see any such thing.""); parser-breaker-1 turn 13 ("go in through the window backwards -> "You can't see any such thing.""); newcomer-1 turn 95 ("push open the trap door -> "You can't see any such thing." in the Cellar, under the trap door")

### P4 · world-bug · low · 2/6

Some things the descriptions name cannot be named back. The Atlantis Room's examine text names the carvings, but "carvings" is not among the chamber's nouns. The heaps' text names the marks of two knees and pebbles, but "knee marks" and "pebble" fail. The nest answers to the adjective "birds" but not to "bird's", which is how the room line spells it. The pile's instructions are on its back, but "read the back" fails. The heaps were the prose-reader's favourite mystery, and they stopped playing because of it.

**Recommendation:** Add "carvings" to the Atlantis chamber (reservoir.sprout). Add "marks", "knees" and "pebble" to the heaps (east.sprout); their no_take refusal already covers taking a stone. Add "bird's" to the nest's adjectives. Add "back" and "instructions" to the pile. The brief requires that every thing a description names can be examined.

Evidence: prose-reader-1 turn 90 ("examine carvings -> "You can't see any such thing.""); prose-reader-1 turn 188 ("examine knee marks -> "You can't see any such thing.""); prose-reader-1 turn 189 ("take pebble -> "You can't see any such thing.""); parser-breaker-1 turn 141 ("throw egg at the bird's nest -> "You can't see any such thing." Up a Tree, beside the nest"); parser-breaker-1 turn 86 ("turn the pile over and read the back -> the instructions, then "You can't see any such thing."")

### P5 · world-bug · low · 2/6

The river's rumbling cannot be heard. The second reach says "In the distance a faint rumbling can be heard". Typing `listen` there gets "You hear nothing out of the ordinary.", and `listen to the rumbling` gets Thing's default, "The rumbling makes no sound."

**Recommendation:** Give the Rumble kind (river.sprout) an `as target for listen` built from its own description, and have `listen` alone, on the reaches that name the sound, answer with it.

Evidence: prose-reader-1 turn 108 ("listen -> "You hear nothing out of the ordinary.""); parser-breaker-1 turn 121 ("listen to the rumbling -> "The rumbling makes no sound."")

### P6 · world-bug · low · 1/6

The reservoir's examine text lags the dam. With the gates open and the water still high (bolt state 1), the Dam's room line correctly says the level is still high. But `examine reservoir` still says the water "comes right up to the top of the dam and goes over it", which is the shut-and-full text.

**Recommendation:** Give the reservoir thing a state-1 variant (gates open, water still high and running out through them) that follows `:tide` the way the room line does.

Evidence: prose-reader-1 turn 70 (""flat and dark and very full. It comes right up to the top of the dam and goes over it." two turns after the gates opened")

### P7 · engine-bug · low · 2/6

`take all` reaches the wrong things. At the drained Reservoir it answered "You already have that!" for each of the eight things the player was carrying and never tried the trunk lying half-buried there. In the Kitchen it took the lunch and the garlic out of the open sack as well as the sack, which Zork's ALL does not.

**Recommendation:** Check whether `all`'s scope is the world's take or Sprout's. If it is Sprout's, file it: for take, `all` should mean what is in the room, not what is held or nested, and should include something lying visible in an open scenery holder like the mud. Either way, add a test with the trunk on the lake bed.

Evidence: parser-breaker-1 turn 93 ("take all -> eight lines of "You already have that!", no trunk"); parser-breaker-1 turn 19 ("take all -> sack, bottle, lunch, clove of garlic"); prose-reader-1 turn 10 ("take all -> sack, bottle, lunch, clove of garlic")

### P8 · design · medium · 2/6

The thief cost one run its whole second half. The newcomer left the trident in Atlantis (too heavy at the time) and dropped the pump in the Studio. Both were gone when they came back. With nothing said and no lead, they wandered for about fifty turns, then met the thief and were killed in two exchanges. The parser-breaker was robbed of the painting in the Studio. That robbery was announced, with Zork's own line, so robbery in the player's presence reads. Unseen robbery of a floor does not, though the intent means it to be found out only by the player's own conclusion.

**Recommendation:** Keep the unseen robbing; it is Zork's and the intent's. The lair, where stolen things go, is never pointed at except by the Temple's word. The cheapest faithful help is in Zork's voice where the gap is: a dropped-and-gone tool is a non-treasure STEAL-JUNK took, and its room could keep a trace in the room's own examine (scuffed dust, as the trap door has). Do not add new narration. Decide whether the pump, which the river depends on, should be among the junk he takes; Zork's rule allows it, and that is a choice worth logging.

Evidence: newcomer-1 turn 142 ("take the trident -> "You can't see any such thing.""); newcomer-1 turn 143 ("where did the trident go? -> "That sentence isn't one I recognize.""); newcomer-1 turn 163 ("take the pump -> "You can't see any such thing." in the Studio where it was dropped"); newcomer-1 turn 216 (""The thief, a pragmatist, dispatches you as a threat to his livelihood.""); parser-breaker-1 turn 165 (""A seedy-looking individual with a large bag just wandered through the room..."")

### P9 · design · low · 4/6

The chimney's rule reads as a puzzle, but this round nobody found any heavier way up. The prayer, the grating, the canyon and the Strange Passage all went unused, so every treasure cost its own loop: trap door, re-barred, crawlway, Gallery, Studio, chimney. That ate the goal-seeker's budget, about five loops between turns 118 and 205. The refusal states the rule but does not say what is over it, and the explorer spent four turns finding a forgotten tan label.

**Recommendation:** Keep the rule and the re-barring. In the same voice, consider having the refusal name what is too much ("...and not an inch besides, which leaves out the tan label"). The ways up the intent hopes for remain the director's watch items.

Evidence: explorer-1 turn 106 (""The chimney has room for you, your lamp and one thing more, and not an inch besides.""); explorer-1 turn 112 ("drop label, after two refusals with only lamp, label and trunk"); goal-seeker-1 turn 127 ("first of the per-treasure chimney loops"); newcomer-1 turn 102 ("climb up the chimney; the newcomer worked out the ferrying plan from the line"); parser-breaker-1 turn 166 ("up the chimney with the painting")

### P10 · design · low · 5/6

Round 11's changes landed. WAIT in the boat now reads as drifting: every player who rode the river waited down it reach by reach, and nobody was confused. The death scatter line was quoted by four players as a promise that was kept, and all four recovered their valuables from the dark corners under the house. "Your load is too heavy, the sword not least of it" told three players what to drop. These lines drew the round's highest praise.

**Recommendation:** Keep all three as they are.

Evidence: explorer-1 turn 211 ("wait -> "The flow of the river carries you downstream.""); goal-seeker-1 turn 76 ("three waits to the buoy"); parser-breaker-1 turn 159 ("the trunk found at East of Chasm, as the death line said"); prose-reader-1 turn 171 ("take trunk at East of Chasm after the death"); newcomer-1 turn 67 (""Your load is too heavy, the sword not least of it."")

### P11 · design · low · 1/6

The casual player's 30 turns ended on a dead end. Their only fresh lead was the river from the White Cliffs Beach, reached on foot from the Damp Cave, where only "Swimming isn't usually allowed" waits. The Loud Room's "Bar bar ..." refused them the bar and gave no hint. Both are Zork's, and Zork's echo is meant to be found by trying. A 30-turn visitor does not get far enough to try.

**Recommendation:** Keep both. Note that the casual's budget reaches only the troll and the Round Room's ring. Nothing to change.

Evidence: casual-1 turn 24 ("take bar -> "Bar bar ...""); casual-1 turn 30 ("swim -> "Swimming isn't usually allowed in the dungeon."")

### P12 · design · low · 6/6

The carried watch items are still unmet, and this round also skipped the v5 country. Nobody gave the thief the egg, though the explorer read the clasp as pointing at him and wished to. Nobody typed DIAGNOSE, reached the Grating Room, met the grue, woke the ghost or broke the egg. The one attempt at the tree's drop, throwing the egg at the nest, failed to parse (P4). Nobody went to the Cyclops, the lair, the Egyptian Room or the canyon. Every long run spent itself on the dam and the river.

**Recommendation:** Coverage of the older country now needs goals aimed at it, which is the director's call. For example: open the egg without breaking it; get past the one-eyed guard; bring the gold coffin home.

Evidence: explorer-1 turn 26 ("examine egg -> the clasp's "not entirely honest ones"; the egg was already in the case"); parser-breaker-1 turn 141 ("throw egg at the bird's nest -> unread"); goal-seeker-1 turn 250 ("run ended at the Altar with torch, bell, book and candles, never reaching the coffin")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.09 | 0.09 |
| reading.refusedRate | 0.01 | 0.02 |
| faults | 0 | 0 |
| repetition | 32 | 31 |
| reach.places.never | 38 | 32 |
| reach.objects.never | 409 | 406 |
| reach.verbs.never | 63 | 60 |
| reach.handlers.never | 69 | 63 |
| reach.passages.never | 1332 | 1316 |
