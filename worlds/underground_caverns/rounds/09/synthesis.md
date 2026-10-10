# Synthesis

**Legibility:** legible. All four players who filed a report read the world as the intent describes it: Zork, ported faithfully, with its unbuilt country closed off in Zork's voice, a thief roaming and robbing, and the caretaker's tidiness that at least one player connected to him without being told. Nobody read the sealed edges as faults. They quoted the dam, the water and the heaps as places. The explorer and the prose-reader filed no report, so what they understood comes from their transcripts: both played the treasure hunt toward the trophy case, reading and examining as they went.

- casual-1 (yes): Zork, but not the Zork they half-remembered. The map is changed: passages end in black water and cave-ins, and a thief sizes you up. They took the barred trap door as hostility from someone. They had no goal and ran out at the 30-turn cap having just won the bar.
- goal-seeker-1 (yes): A cut-down Zork: loot the underground for the trophy case, with edges sealed off wittily and a thief who guards his lair. They read the sorted heaps as 'probably the thief'. Goal (high score): reached 140 of 197 and ended near 135. A death, the thief fleeing with the egg, and an unhealed wound stood in the way.
- newcomer-1 (yes): Break into the house, bring treasures up and lock them in the case, while a silent thief with a big bag is the danger to your loot. 'Someone' keeps the place in order. Goal (find treasure, keep it safe): self-reported no, but 120 points were safe in the case and the thief got nothing. The maze and the lost food stopped the Cyclops.
- parser-breaker-1 (yes): A cut-down Zork treasure hunt: a troll to kill or bribe, treasures to carry home, a light-fingered thief in the maze, deliberate closures, and weight limits to juggle.
- explorer-1 (partly): No report filed. The transcript shows a careful tour: the egg into the case at turn 41 (goal reached), the troll killed, the east explored, the torch and sceptre brought home by prayer, 80 points by turn 130.
- prose-reader-1 (partly): No report filed. The transcript shows close reading of scenery, the echo solved by listening, a lost stretch in the maze marked with the leaflet, the chimney rule met, the lamp dropped for the coffin, and the prayer out with the coffin.

## Points

### P1 · design · high · 1/6

In his lair the thief runs from a strong visitor after one exchange, every time, so nobody can kill him there. The hoard, the open egg and the canary never come back. The goal-seeker was at about 140 points with the axe. They gave him the egg to get it opened (turn 210), and he 'steps backward into the gloom and disappears' after the first hit (211). The same happened after the chalice parry (168) and again at 223. On every return he 'rushes to its defense' and the treasures vanish. The egg was gone for good and the score fell. In the metrics, Thief on expire and treasure_room on unveil never fired in any run, though LargeBag on disgorge did.

**Recommendation:** Check the flee test (WINNING? against the visitor's score-based strength) and whether Zork lets the thief flee THIEF-VS-ADVENTURER while he is in the Treasure Room defending it. Then add a test in which a visitor at 120 points or more kills him in his lair (thief_hoard.json at high score). If Zork really does let him flee there, keep it, but the canary arc depends on catching him somewhere else. Say that in intent.md and watch for it next round.

Evidence: goal-seeker-1 turn 168 ("Clang! Crash! The thief parries. / Your opponent, determining discretion to be the better part of valor..."); goal-seeker-1 turn 210 ("The thief is taken aback by your unexpected generosity, but accepts the jewel-encrusted egg"); goal-seeker-1 turn 211 ("The thief is struck on the arm... he steps backward into the gloom and disappears."); goal-seeker-1 turn 223 ("he steps backward into the gloom and disappears.")

### P2 · world-bug · medium · 2/6

The thief leaves when he should be unable to. The newcomer's knife blow staggered him, and in the same move 'The thief, finding nothing of value, left disgusted.' In the goal-seeker's run he came back into his own lair with the egg in his bag (look at turn 214 lists him), then 'left disgusted' from his lair the next turn instead of emptying his bag.

**Recommendation:** A staggered thief should lose his next turn, as Zork's STAGGERED does, and not run the leave branch of THIEF-VS-ADVENTURER. In the Treasure Room with the visitor present, 'nothing of value' should not send him out of his own lair. Add both cases to thief_seen.json and treasure_room.json.

Evidence: newcomer-1 turn 192 ("The force of your blow knocks the thief back, stunned. / The thief, finding nothing of value, left disgusted."); goal-seeker-1 turn 214 ("There is a suspicious-looking individual, holding a large bag, leaning against one wall."); goal-seeker-1 turn 215 ("The thief, finding nothing of value, left disgusted. ... kill thief with axe: You can't see any such thing.")

### P3 · world-bug · medium · 1/6

DIAGNOSE leaves out Zork's cure time. Zork's V-DIAGNOSE says the wound 'will be cured after N moves'. Here it says only 'You have a serious wound. You can expect death soon.' The goal-seeker waited about 20 turns, diagnosing three times, with no idea how long healing would take, and ran out of turns still wounded.

**Recommendation:** Port the cure line from V-DIAGNOSE (CURE-WAIT times wounds less one, plus the I-CURE tick). Then DIAGNOSE tells the visitor whether waiting is worth it.

Evidence: goal-seeker-1 turn 229 ("You have a serious wound. You can expect death soon."); goal-seeker-1 turn 236 ("You have a serious wound. You can expect death soon."); goal-seeker-1 turn 243 ("You have a serious wound.")

### P4 · design · medium · 2/6

The thief kills fresh visitors fast, and the killing blow comes with no turn to react. Both runs that fought him died within two swings, and each time 'knocks you out' and 'cuts your throat' arrived in the same reply. Each death scattered the sword (and the key or the food), and neither player found them again. The newcomer's lost lunch later left the Cyclops unfed at the turn cap.

**Recommendation:** Check against VILLAIN-BLOW whether Zork follows a knockout with the sitting-duck blow in the same move. If it does not, hold the second blow for the thief's next turn, as the troll's is held. Keep the tables. The death line is the author's own prose, so it could say where the scattering went (the lamp home, the rest above ground, as RANDOMIZE-OBJECTS puts it) without changing the mechanic.

Evidence: newcomer-1 turn 32 ("The thief knocks you out. / The thief, forgetting his essentially genteel upbringing, cuts your throat."); goal-seeker-1 turn 136 ("Shifting in the midst of a thrust, the thief knocks you unconscious... cuts your throat."); newcomer-1 turn 249 ("The cyclops is hungry and my food was lost when I died"); goal-seeker-1 turn 136 ("'Scattered about the Empire' gave me nothing to search on.")

### P5 · design · low · 6/6

The thief reads as intended. All six players met him: leaning on a wall, wandering through 'lean and hungry', robbing the maze unseen, or taking a lesser thing silently. Every player who filed a report named him as a thief roaming the underground, and the goal-seeker tied the caretaker's sorted heaps to him without being told. The prose-reader's sword disappeared from the Studio while they were away (STEAL-JUNK) and came back as 'You can't see any such thing.'

**Recommendation:** Keep the thief's voice and the caretaker thread as they are. Nobody needed him named.

Evidence: casual-1 turn 23 ("Then a thief is just leaning on the wall."); explorer-1 turn 64 ("A "lean and hungry" gentleman just wandered through, carrying a large bag."); parser-breaker-1 turn 168 ("he quietly abstracted some valuables from your possession"); goal-seeker-1 turn 41 ("made me think somebody lives down here. Probably the thief."); prose-reader-1 turn 147 ("take sword: You can't see any such thing."); newcomer-1 turn 250 ("I'd kept my valuables in the case, so he got nothing off me.")

### P6 · world-bug · low · 1/6

The Treasure Room's arrival is printed in the wrong order. The room lists 'a suspicious-looking individual... leaning against one wall' before 'he rushes to its defense', and 'the treasures in the room suddenly vanish' is printed while the chalice stays listed. In Zork the room's M-ENTER line comes before the description.

**Recommendation:** Tell the scream and the rush before the room is described, and print the vanishing line only when there is something besides the chalice to vanish.

Evidence: goal-seeker-1 turn 135 ("There is a silver chalice... here. / There is a suspicious-looking individual... / You hear a scream of anguish... he rushes to its defense. / ...the treasures in the room suddenly vanish."); goal-seeker-1 turn 209; goal-seeker-1 turn 225

### P7 · engine-bug · low · 2/6

The parser treats a trailing word as part of the noun, so a thing that is present gets 'You can't see any such thing.' 'attack the troll again' failed with the troll lying there, and 'get on pedestal' failed in the Torch Room, where the pedestal had just been examined.

**Recommendation:** File this with Sprout, alongside friction 63 (a trailing word read as a thing). A noun phrase that leaves words unmatched should fall back to 'unknown', not 'not_here'.

Evidence: newcomer-1 turn 20 ("'attack the troll again' got 'You can't see any such thing.'"); explorer-1 turn 116 ("get on pedestal: You can't see any such thing.")

### P8 · world-bug · low · 1/6

Zork verbs are missing. 'blow out the torch' is Zork's BLOW OUT (extinguish), which for the torch would give 'You nearly burn your hand trying to extinguish the flame.' Here it gets 'That sentence isn't one I recognize.' 'take everything' got not_here instead of being read as 'all'.

**Recommendation:** Add BLOW OUT as a synonym for turning off and extinguishing, as Zork's syntax has it. Check whether EVERYTHING is one of Zork's synonyms for ALL before adding it.

Evidence: parser-breaker-1 turn 80 ("blow out the torch: That sentence isn't one I recognize."); parser-breaker-1 turn 17 ("take everything: You can't see any such thing.")

### P9 · design · medium · 2/6

The maze took up the budget of the runs that got lost in it, and caused most of this round's rise in unread lines and repetition. The newcomer spent about 60 turns there and never dropped a marker. More than 50 of the round's unread lines are their 'go <direction>' into a maze wall. The parser-breaker spent turns 128 to 198 and 233 to 250 there, and their dropped manual helped only so far.

**Recommendation:** Keep the maze as dungeon.zil joins it, as decided in round 5. Read the unread-rate rise (0.08 to 0.14) as the maze plus the newcomer's questions, not as a regression.

Evidence: newcomer-1 turn 221 ("I could never find the coin room again."); parser-breaker-1 turn 176 ("The maze ate most of my turns."); newcomer-1 turn 216 ("Found the skeleton... Then I walked straight back out of the room by accident.")

### P10 · design · medium · 6/6

Much of v5's content was still never met in play. Nobody fed the Cyclops: on clock, waken and woke never fired, and the only Cyclops solution was 'odysseus' from a player who knew Zork. Nobody killed the thief or saw the hoard reappear, and nobody wound the canary. The Grating Room, the grue, the ghost, the tree's drop and the broken egg are still unreached after 54 runs.

**Recommendation:** Next round, give a run a goal aimed at the new content (for example 'get past the one-eyed guard without fighting him', or 'find out where your stolen things went'). The round-8 suggestion of a 'find another way out of the maze' goal still stands for the Grating Room.

Evidence: goal-seeker-1 turn 134 ("Saying 'odysseus' scared the Cyclops off"); newcomer-1 turn 243 ("Stumbled into the Cyclops Room by pure luck."); explorer-1 turn 13 ("open grating: The grating is locked.")

### P11 · design · low · 5/6

The v4 puzzles and the round-8 answers held up. Five of six said 'echo' (casual at turn 29, prose-reader at 55 after 'listen'). Five of six prayed their way out, among them the newcomer, who took the coffin joke as a hint (turn 163): the first player who doesn't know Zork to find the prayer. When the load named the brass lantern beside the torch, the prose-reader dropped the lamp (181 to 186), as round 8 hoped. The chimney's rule was understood straight away in three runs. The parser-breaker found that a full sack counts as the chimney's one thing (113).

**Recommendation:** Keep these. The sack loophole is Zork's own rule (one thing, whatever is inside it) and needs no change.

Evidence: newcomer-1 turn 163 ("'You haven't a prayer of getting the coffin down there.' So I prayed"); prose-reader-1 turn 181 ("Your load is too heavy, the brass lantern not least of it."); casual-1 turn 29 ("Guessed 'echo' and the acoustics changed."); parser-breaker-1 turn 113 ("I put the painting, bottle and manual inside the sack and that counted as one thing.")

### P12 · design · low · 1/6

A treasure inside the sack inside the trophy case scores nothing, and the case lists the brown sack among 'Your collection of treasures'. The parser-breaker read this as a bug, but it is Zork's OTVAL-FROB, the same rule as the sceptre in the coffin.

**Recommendation:** Keep, as with the sceptre. Optionally, the sack's description could make clear that the case rewards only what lies in it directly, which is author prose and not mechanics.

Evidence: parser-breaker-1 turn 118 ("The painting inside the sack inside the trophy case didn't score until I took it out... The case also listed the 'brown sack' as a treasure.")

### P13 · design · low · 6/6

Goals and models. Explorer (fable): the egg was in the case by turn 41, so the goal was reached. They then reached 80 points by turn 130, left the bar unechoed, and stopped at 140 turns with no report. Goal-seeker (opus): peaked at 140 of 197 and ended near 135. What stopped them was a death to the thief that cost the sword and key, the thief's repeated fleeing with the egg (P1), a wound that would not heal (P3), and the turn cap. Newcomer (opus): reported 'no', but had 120 points of treasure in the case by turn 173, and the thief left 'disgruntled' with nothing to take, which meets 'keep it safe' in substance. The opus runs (goal-seeker, newcomer, parser-breaker) all ran to the cap and filed reports. They fought or bargained with the thief and the troll, and the newcomer typed questions in natural language. The fable runs (explorer, casual, prose-reader) examined more and fought the thief not at all. Two fable runs stopped short (140 and 206 turns) with no report, which is the harness and not the world.

**Recommendation:** Tell the director that the explorer and the prose-reader filed no report, a third round in a row for the harness. For the world: when weighing the thief, count the opus runs, since only they fought him.

Evidence: explorer-1 turn 41 ("put egg in trophy case: Done."); goal-seeker-1 turn 174 ("Watching the score climb (35, 75, 85, 125, 140)"); newcomer-1 turn 173 ("120 points by turn 173"); prose-reader-1 turn 206 ("pray: Forest (run ends, no report)")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.08 | 0.14 |
| reading.refusedRate | 0.02 | 0.02 |
| faults | 0 | 0 |
| repetition | 21 | 42 |
| reach.places.never | 15 | 9 |
| reach.objects.never | 170 | 244 |
| reach.verbs.never | 56 | 49 |
| reach.handlers.never | 27 | 33 |
| reach.passages.never | 661 | 830 |
