# Synthesis

**Legibility:** legible. Every reporting player read the world as the intent describes it: Zork's white house and Great Underground Empire, cut to a pocket, kept in Zork's dry voice, with the examine layer as the place where the voice lives. They read it as a treasure hunt whose closed edges are written as places and jokes. The fable players also read the caretaker, a tidy unseen someone clearing, sorting and barring, which the intent calls welcome and the faithful reading of Zork's barred trap door. Nobody read it as something other than Zork. The casual player saw only the first half-hour, so it read the place as a dungeon falling in on itself rather than as a treasure hunt. Two runs filed no report.

- goal-seeker-1 (yes): The white house and the Great Underground Empire cut down to a pocket: kill the troll, solve the echo, rope down from the dome, pray out with the loot. A treasure hunt whose closed edges are part of the writing.
- explorer-1 (yes): A treasure hunt in and under a boarded-up house, through an underground that is partly drowned and caved in, and quietly kept by someone unseen who tidies rock, clears crawlways and bars the trap door.
- casual-1 (partly): The Zork opening, after which the familiar map has collapsed and flooded: an abandoned dungeon falling in on itself, still tidied by some unseen person.
- prose-reader-1 (yes): The Zork I they half remembered, rewritten line by line in a dry, observant voice, smaller than the original, with edges drawn in sentences and a thread about someone careful who has been there first.
- newcomer-1 (partly): No report. The transcript shows it playing a treasure hunt: the painting home by the chimney into the case, then a rope descent, the coffin and sceptre, and the prayer out.
- parser-breaker-1 (partly): No report. In 37 turns of probing (jokes at the mailbox, the grue, the troll fed the sack and the bottle) it had reached the Loud Room's echo and stated no reading.

## Points

### P1 · design · low · 3/3

All three runs that had a goal reached it. Goal-seeker-1 (opus) banked every treasure in the slice and reached 145, the ceiling, by move 170 (transcript score lines). Nothing stopped it inside the slice; it stopped because every edge was closed. Explorer-1 (fable) had the egg in the case at turn 20 and went on to 124 before the 250-turn cap caught it at the mouth of the maze. Newcomer-1 (fable) put the painting in the case at turn 101, then went back down for the torch, coffin and sceptre. It prayed out to the Forest at turn 141 and ran out of turns at 145 with the coffin and sceptre still in hand, outside the house. The 150-turn wall that rounds 5 to 7 complained about is gone for the long runs (250, 239 and 213 turns). Even so, nobody reached the Grating Room. Model difference: the only opus run, the goal-seeker, played from Zork knowledge. It took the Attic rope before going down, said 'echo' at the first echo, prayed at the Altar on its first visit, and treated edges as walls. The fable runs (explorer, prose-reader, casual, newcomer) examined far more, quoted the examine layer, and followed the caretaker thread. The goal-seeker never mentioned the caretaker.

**Recommendation:** Keep the slice as built. 145 is reachable in about 170 moves by a player who knows Zork, and about 120 is a typical result for a careful first-timer in 250 turns. A newcomer's short budget ends mid-trip, which is fine.

Evidence: goal-seeker-1 turn 24 ("Typing 'echo' changed the room's acoustics and then I could take it."); goal-seeker-1 turn 64 ("Praying at the altar sent me up to the forest"); explorer-1 turn 20 ("The main goal was done in 20 turns with a flat 'Done.'"); explorer-1 turn 250 ("Turn cap hit one step into the maze, with the outdoors untouched."); newcomer-1 turn 101 ("put the painting in the trophy case -> Done."); newcomer-1 turn 141 ("pray -> Forest (carrying lantern, sceptre, gold coffin)")

### P2 · world-bug · medium · 1/6

The chimney's own rule is untrue for any light but the lamp. The refusal says the chimney has room for 'you, a light to climb by and one thing more'. It refused the explorer three times while it carried exactly that: the lit candles and the bar, then the candles alone. Zork's UP-CHIMNEY-FUNCTION wants the brass lamp itself, so the behaviour is faithful but the world's added sentence is wrong. The player spent turns 182 to 194 dropping things and lost faith in a rule it had praised.

**Recommendation:** Make the sentence name the lamp ("you, your lamp and one thing more"), or give a refusal of its own when the visitor has a light but not the lamp, such as candles that won't survive the draught. Keep Zork's rule.

Evidence: explorer-1 turn 187 ("You can't get up there with what you're carrying. The chimney has room for you, a light to climb by and one thing more, and not an inch besides. (carrying candles and bar)"); explorer-1 turn 194 ("The chimney refuses me even carrying only the lit candles, while repeating that it needs 'a light to climb by and one thing more'.")

### P3 · world-bug · medium · 4/6

The sorted heaps are the most quoted line in the round, but they have no answer of their own. Examining the heaps returns the cave-ins paragraph word for word. 'go south' repeats it a third time. 'move the rocks in the south passage' gets 'You can't see any such thing.', because 'rocks' is not a name for anything there. The players wanted to look closer and were sent back to the same paragraph.

**Recommendation:** Make the heaps their own scenery with a closer sentence in Zork's dry voice. Keep it to someone having been there, and no further. Give the cave-ins 'rocks', 'rock', 'rubble' and 'stones' as names, so the round-7 refusals (the roof still coming down) are what MOVE, TAKE and DIG at the rocks get.

Evidence: casual-1 turn 25 ("'examine heaps' gave the exact same paragraph as 'examine cave-ins'. Wanted more."); prose-reader-1 turn 53 ("Examining the heaps just repeats the cave-in text word for word."); newcomer-1 turn 31 ("look at the heaps -> identical cave-ins paragraph"); newcomer-1 turn 63 ("move the rocks in the south passage -> You can't see any such thing."); explorer-1 turn 64 ("examine heaps")

### P4 · design · medium · 4/6

The cave-in still reads partly as a door to open, not only as the caretaker's tidiness at a dead end, which round 7 asked about. Four players wanted to act on it: dig, move the rocks, find what was hidden. Only the prose-reader, who touched it and got the roof line, accepted it as closed. The round-7 refusal works when a player reaches it (the prose-reader's turn 55). The pull comes from the sorting itself.

**Recommendation:** Keep the heaps; the thief pays them off in round 9. Until then, see that every verb a player tries on the rubble (P3's names) lands on the roof-still-falling reason, so curiosity ends quickly at an answer and not at a parser miss.

Evidence: goal-seeker-1 turn 37 ("Intriguing. It made me think something was hidden there. Nothing was."); casual-1 turn 24 ("Dig at or climb the rubble heaps, or move the sorted rocks — the game drew my eye to them and then gave me nothing to do with them."); explorer-1 turn 41 ("Great line, and a thread I wanted to pull."); newcomer-1 turn 63 ("move the rocks in the south passage"); prose-reader-1 turn 55 ("the roof 'would rather finish on you than not.'")

### P5 · world-bug · low · 1/6

Putting the candles out says 'It's really dark in here....' even when the lit lamp is in hand. The goal-seeker carried the lantern lit from turn 6 and never put it out. In the Egyptian Room it got the dark line on snuffing the candles. Zork prints that line only when the room is no longer lit.

**Recommendation:** Print the dark line only if the room is dark once the candles are out: check the room's light after the snuff, not the candles' own.

Evidence: goal-seeker-1 turn 100 ("The flame is extinguished. It's really dark in here.... (lantern providing light)")

### P6 · design · low · 3/6

Naming the weight works, which round 7 asked about. Every player who met 'Your load is too heavy, the X not least of it' dropped the X. But at the coffin it names the torch, the light that never goes out, which the intent says is the one to keep. The explorer dropped both the lamp and the torch and left with only the candles. They burned down on the way home (turns 175 to 212), and it had to go back for the lantern.

**Recommendation:** Keep naming the heaviest thing. Consider naming the heaviest thing that is not lit, or the lamp before the torch when both are carried. That points at Zork's intended trade (leave the lantern) without stating it.

Evidence: goal-seeker-1 turn 42 ("'Your load is too heavy, the sword not least of it.' The weight limit made me juggle items several times."); explorer-1 turn 152 ("The coffin would only come when I had shed nearly everything, 'the torch not least of it'. I wrongly dropped the bell and book too."); explorer-1 turn 175 ("I realised my only light was burning down and the lantern was in the Egyptian Room."); newcomer-1 turn 132 ("Your load is too heavy, the torch not least of it.")

### P7 · design · medium · 6/6

For the eighth round, nobody reached the Grating Room. No grating handler fired, and the grue, the skeleton's ghost, the tree's drop, the broken egg, the troll's come-round and death all stayed unreached as well (reach.handlers.never). The longer cap did not change this. The one key-holder, the goal-seeker, took the key at turn 160, fell down a one-way tunnel, spent a dozen turns getting out, and never looked for the lock. The explorer reached the maze mouth at turn 250. The prose-reader got out of the maze by luck.

**Recommendation:** As round 6 proposed, give a run a goal that tests it directly, e.g. 'find another way out of the maze'. Otherwise these stay known only from grating.json and the other scripts. Keep the maze as dungeon.zil joins it.

Evidence: goal-seeker-1 turn 160 ("Found the skeleton with the coins and the key in the maze."); goal-seeker-1 turn 172 ("I got lost in the maze and dropped into a dead end I couldn't climb back out of."); prose-reader-1 turn 217 ("the maze does not run backwards"); explorer-1 turn 250 ("standing at the mouth of the maze with the axe as a marker")

### P8 · design · low · 5/6

The closed edges read as places and jokes, not fences, which round 7 asked about. The reservoir's water was quoted as a place. The dam's single notice was read as a joke by three players. The Altar hole's refusal was called the best-written closed door. The edges account for most of the round's unread lines (dam_way, reservoir_way, cliffs_way, narrow_way, hole_way), and no player called them broken. The one cost: the goal-seeker carried the bell, book and candles to the hole for an exorcism that is out of scope, and wished for it.

**Recommendation:** Keep the edges as they are. Hades waits for v8, and the hole's line already says so gently.

Evidence: casual-1 turn 29 ("Good dead-end writing; it felt like a place rather than a wall."); prose-reader-1 turn 78 ("The best of the boundary lines: it closes the map and makes it sadder."); goal-seeker-1 turn 30 ("A dry, in-world way of saying 'not this time.'"); explorer-1 turn 239 ("A blocked passage turned into a joke instead of a wall."); goal-seeker-1 turn 130 ("All that carrying for nothing.")

### P9 · design · low · 4/6

The caretaker thread lands as the intent hopes. Every fable reporter who went underground (casual, explorer, prose-reader) built its reading around the unseen tidy someone and wished to meet them. The newcomer had no report. The thread is never promised further: no player claimed a line had promised a meeting.

**Recommendation:** Keep it, untouched until the thief arrives in round 9.

Evidence: prose-reader-1 turn 132 ("Someone expected to need it. The careful hand again, upstairs this time."); explorer-1 turn 87 ("The crawlway has fresh pick marks and neatly stacked rock. The same tidy somebody again."); casual-1 turn 14 ("First sign that there's somebody else down here")

### P10 · design · low · 2/6

Zork's silent transitions read differently to different players. The trap door bars itself again only after a chimney climb or a death (TOUCHBIT). The explorer read the later silent descents as inconsistency, and the prose-reader read them correctly. The prayer's move to the Forest has no sentence, as in Zork; the prose-reader called it a flat note and the explorer called it satisfying. The rope's one-way drop surprised the explorer, and the newcomer tried 'climb up the rope' too.

**Recommendation:** Keep all three; they are Zork's. Optionally, the scuffed-dust line on the trap door could note that it no longer seems to be barred, in the caretaker's voice, without promising more.

Evidence: explorer-1 turn 116 ("The trap door bars again on my second descent, then on later descents it just stays open with no comment. Inconsistent."); prose-reader-1 turn 211 ("The trap door stayed open this time. The house stopped barring me once I had come up the chimney."); prose-reader-1 turn 183 ("for so large a thing, no sentence at all, just 'Forest'."); explorer-1 turn 127 ("The rope ends five feet above my head and I cannot get back up. A one-way trip with no warning."); newcomer-1 turn 119 ("climb up the rope -> You cannot reach the rope.")

### P11 · world-bug · low · 3/6

Small answers that disagree with their own world. At the Altar, holding the coffin, 'go down the hole' says 'You can't do that!' while 'down' gives the coffin line. 'take the candles and the book' with the book already in hand answers only for the candles and says nothing about the book, where 'take book' alone says 'You already have that!'. The Deep Canyon says you can hear flowing water, and 'listen' there hears nothing out of the ordinary. 'pour water on the grue' is 'You can't see any such thing.', where Zork keeps a global GRUE with answers of its own.

**Recommendation:** Route 'go down/through the hole' to the hole's way, so the coffin refusal and Hades' sigh answer. Answer an item already held in a list the way a single take does (if this is the friction-78 workaround, log it). Give the Deep Canyon (and the Loud Room's neighbours) a listen line about the water. Add Zork's global grue.

Evidence: newcomer-1 turn 138 ("go down the hole -> You can't do that!"); newcomer-1 turn 127 ("take the candles and the book -> Pair of candles: Taken."); prose-reader-1 turn 75 ("The Deep Canyon says I can hear flowing water, but 'listen' hears nothing out of the ordinary."); parser-breaker-1 turn 16 ("pour water on the grue -> You can't see any such thing.")

### P12 · language-gap · low · 3/6

Natural phrasings fall through to 'That sentence isn't one I recognize.': 'keep going around to the east side', 'go back up the stairs', 'what am I carrying', 'enter crack', 'look down into the room below'. In the Loud Room this also breaks the puzzle's illusion. Lines that do not parse ('what am I carrying', 'be quiet') get the parser's refusal instead of the room's echo, which Zork gives to any input.

**Recommendation:** In the world: read 'back' before a direction, 'enter <a passage-thing>' as going its way (the Chasm's crack), and 'look down into X' as 'look down'. To Sprout (friction 68 and 70): a deafening place cannot echo a line that does not parse, and general adverbs and prepositions.

Evidence: newcomer-1 turn 20 ("go back up the stairs -> That sentence isn't one I recognize."); newcomer-1 turn 45 ("what am I carrying -> That sentence isn't one I recognize. (in the Loud Room)"); newcomer-1 turn 49 ("be quiet -> That sentence isn't one I recognize. (in the Loud Room)"); newcomer-1 turn 67 ("look down into the room below"); casual-1 turn 30 ("'enter crack' not understood")

### P13 · engine-bug · medium · 2/6

Two of six runs filed no report. This is the studio's playtest harness, not Sprout or the world. Parser-breaker-1 stopped after 37 turns, at the Loud Room's 'Bar bar ...', with no report. Newcomer-1 played 145 turns to a natural stopping point and filed nothing. Round 6's goal-seeker failed the same way. The round's consensus is therefore drawn from four reports plus two bare transcripts. There were no faults in any run.

**Recommendation:** For the director: find out why the harness ends a run without a report (budget, crash or turn cap) and rerun the parser-breaker. Its 37 turns did not reach the parser's edges.

Evidence: parser-breaker-1 turn 37 ("take platinum bar -> Bar bar ... (last step of the run)"); newcomer-1 turn 145 ("go south -> North of House (last step; no report)")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.13 | 0.08 |
| reading.refusedRate | 0.03 | 0.02 |
| faults | 0 | 0 |
| repetition | 6 | 21 |
| reach.places.never | 21 | 15 |
| reach.objects.never | 168 | 170 |
| reach.verbs.never | 50 | 56 |
| reach.handlers.never | 24 | 27 |
| reach.passages.never | 631 | 661 |
