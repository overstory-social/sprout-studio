# Synthesis

**Legibility:** partly. Every player recognised a faithful Zork I opening and understood the underground was still being built. That matches the intent's 'Zork, ported as faithfully as Sprout allows'. None of them saw the slice's goal: the egg, the trophy case, the score, the forest and the tree. None met its secrets either (darkness and the grue, rooms remembering you, the tree's height). For all six, the world was 'house, trap door, troll, then walls', and that is half of the arc in intent.md.

- explorer-1 (partly): A small Zork-style start: in through the window, lantern, sword and sack, down the trap door to a cellar and a troll; the deeper caverns are marked unfinished.
- casual-1 (partly): A Zork-style start (house, kitchen, living room, trap door, cellar, troll) with the underground still under construction; thought the leaflet could not be taken.
- goal-seeker-1 (partly): A Zork-like start up to the troll; past him the cavern is unfinished, with 'back soon' notes in place of rooms.
- newcomer-1 (partly): A Zork-like adventure: house, window, lantern and sword, trap door, kill the troll, and then the map runs out.
- parser-breaker-1 (partly): A compact Zork-style start (house, kitchen, living room, trap door, cellar, troll room), with the underground just beginning.
- prose-reader-1 (partly): A text adventure that looks like classic Zork: the white house, the kitchen window, the lamp, the rug and trap door, and a troll in the cellars.

## Points

### P1 · design · high · 6/6

The slice ends at the trap door. All six runs took the same short route (Behind House, window, Kitchen, Living Room, rug, trap door), went down, and could not come back up. Five of the six then stopped at the Troll Room's unbuilt exits. Nobody reached the forest, the tree, the egg, the attic or the trophy case, in this round or in round 1. That is 12 runs, and half the slice and the whole of 'done' (the egg in the case) has never been played. reach.places.never lists all four forests, Forest Path, Up a Tree, both clearings and the Attic. The rise in unreadRate (0.13 to 0.24) is mostly this wall: 21 of the 39 unread lines are the world's own refusals at the dead end (unbuilt_passage x6, unbuilt_hole x5, crawlway x4, ramp x2, no_way x4). Players are not misreading the world there. They are reaching its edge sooner.

**Recommendation:** Put this to the director, since the scope widens only on the director's word. One way to keep it faithful: once the troll is dead, the east passage leads to a single stand-in room with Zork's own route home, the Studio chimney up to the Kitchen. Log it in friction.md, so the slice makes a loop instead of a one-way drop. Until then, the above-ground secrets can only be checked with `sprout test` scripts, not with playtesters.

Evidence: casual-1 turn 14 ("The trap door crashes shut, and you hear someone barring it."); casual-1 turn 24 ("EXCAVATION SUSPENDED BY ORDER OF THE FROBOZZ MAGIC TUNNELLING COMPANY."); explorer-1 turn 32 ("go up -> You can't go that way."); goal-seeker-1 turn 25 ("The passage to the east has not been finished."); newcomer-1 turn 26 ("You peer into the forbidding hole... You think better of it."); parser-breaker-1 turn 34; prose-reader-1 turn 16

### P2 · design · medium · 6/6

No run exercised any of the things intent.md says to watch in round 2. Every player lit the lamp before going down, so the darkness lines, the grue and 'lit lamp left in the Cellar' were never met. Nobody reached the forest, so nobody tested whether BRIEF's short returns confuse a forest walk. Nobody typed `score`, so the move count and Zork's ranks were never shown. The passages never reached include 'You have moved into a dark place.' and the grue's death line, and the score, diagnose and verbose verbs were never used. BRIEF did show up on returns (the Cellar and the Troll Room named without their full text), and no player was confused by it.

**Recommendation:** Cover darkness, the grue, the lamp left in the Cellar and the score with `sprout test` scripts. While P1 stands, players will not reach them. Carry these watch items to round 3 rather than counting them as passed.

Evidence: casual-1 turn 13 ("turn on lamp (before go down)"); explorer-1 turn 12; goal-seeker-1 turn 12; newcomer-1 turn 17; parser-breaker-1 turn 18; prose-reader-1 turn 15; explorer-1 turn 26 ("The Troll Room / There is a bloody axe here.")

### P3 · language-gap · high · 4/6

Commands joined with 'and' or 'then' are read as one noun phrase and answered 'You can't see any such thing.' This covers Zork's own 'take X and Y'. The answer is wrong as well as unhelpful: the casual player concluded the leaflet could not be taken and never tried again, and the goal-seeker never picked up the sack. The brief's showcase goal names Zork's parser conventions.

**Recommendation:** Log it in friction.md under the parser section of the spec, and open a Sprout issue: support multiple direct objects and command chaining, or at least refuse a conjunction in words that do not claim the object is absent.

Evidence: casual-1 turn 2 ("take leaflet and read it -> You can't see any such thing."); explorer-1 turn 8 ("take lantern and sword -> You can't see any such thing."); goal-seeker-1 turn 6 ("take sack and bottle -> You can't see any such thing."); parser-breaker-1 turn 16 ("take lantern and sword"); parser-breaker-1 turn 4 ("put the leaflet in the mailbox and close it"); parser-breaker-1 turn 13 ("drink the water then eat the sack")

### P4 · world-bug · medium · 3/6

The unbuilt east passage's own prose (new text, not Zork's) mentions a pick leaning against the rock, but there is no pick to name. Three players tried to take it and two tried to dig, and all three listed it among the things they wished for. The line invites an action the world then denies with 'You can't see any such thing.'

**Recommendation:** Either drop the pick from the line, or make it nameable scenery in the Troll Room that refuses in Zork's voice (for example, the Management wants it back). Zork has a DIG verb ('Digging with your hands is silly.' and its variants); add it.

Evidence: explorer-1 turn 28 ("take pick -> You can't see any such thing."); explorer-1 turn 29 ("dig west -> That sentence isn't one I recognize."); goal-seeker-1 turn 26 ("take pick"); goal-seeker-1 turn 27 ("dig -> That sentence isn't one I recognize."); parser-breaker-1 turn 35 ("take the pick")

### P5 · engine-bug · medium · 6/6

All six runs carry seed 1 and draw the same seed sequence step by step, so their dice are not independent. The casual and explorer runs reached the troll at the same step and got the same four-blow fight word for word: stunned, confused, unconscious, dead. intent.md assumes each playtester draws from its own seed. As things stand, a round's fight outcomes, and the 'too easy' consensus built on them, are partly one sample repeated.

**Recommendation:** File it against the studio workflow: give each run a distinct seed, at least one per persona, so the per-step seed streams differ. Re-read round 2's combat findings with this in mind.

Evidence: casual-1 turn 17 ("The force of your blow knocks the troll back, stunned."); explorer-1 turn 17 ("The force of your blow knocks the troll back, stunned."); casual-1 turn 20 ("The unconscious troll cannot defend himself: He dies."); explorer-1 turn 20 ("The unconscious troll cannot defend himself: He dies.")

### P6 · design · low · 6/6

All six players rated the game too easy. In the five sword fights the troll died within four blows. Two runs decapitated him with the first blow, and only one player was hit at all ('The axe gets you right in the side. Ouch!'). The troll fights on Zork's own tables, so this may be faithful, and with P5 the sample is thin. The other half of the 'too easy' rating is that nothing is left to solve after the troll (P1).

**Recommendation:** Do not retune yet. Run the fight across many seeds with `sprout test`, compare the first-blow kill rate and the player's death rate with Zork's melee tables at score 0, and change it only if the port differs.

Evidence: goal-seeker-1 turn 15 ("It's curtains for the troll as your sword removes his head."); newcomer-1 turn 21 ("It's curtains for the troll as your sword removes his head."); parser-breaker-1 turn 29 ("The troll takes a fatal blow and slumps to the floor dead."); casual-1 turn 20

### P7 · design · low · 2/6

Several verbs and phrasings that Zork handles get 'That sentence isn't one I recognize.' Zork has KNOCK and GIVE (the troll accepts a gift), and it answers WALK AROUND. A newcomer also could not find a way into the house through the window until they guessed 'west'. ('enter window' and 'enter house' do work.)

**Recommendation:** Add Zork's KNOCK and WALK AROUND answers. Check why 'give X to troll' does not parse even though sprout.give is declared (possibly the adjective 'pepper'), and give the troll Zork's gift handling. Accept 'go in' / 'go through window' as entering. Where Sprout cannot do one of these, log it in friction.md.

Evidence: parser-breaker-1 turn 3 ("knock on the boarded door"); parser-breaker-1 turn 6 ("go around the house"); parser-breaker-1 turn 26 ("give the pepper sack to the troll -> That sentence isn't one I recognize."); newcomer-1 turn 4 ("walk around the house"); newcomer-1 turn 9 ("go in through the window")

### P8 · world-bug · low · 2/6

'take all' prints a bare 'Taken.' for each item, without Zork's 'brown sack: Taken.' prefix, so the player cannot tell what was picked up. It also counts things already carried ('You already have that!' for the leaflet in hand), which Zork's 'all' leaves out.

**Recommendation:** Prefix each multi-object result with the item's short name, as Zork does, and leave held items out of 'all'. If Sprout's multi-step 'all' gives no handle for this, log it in friction.md.

Evidence: explorer-1 turn 6 ("Taken. / Taken."); parser-breaker-1 turn 14 ("You already have that! / Taken. / Taken.")

### P9 · world-bug · low · 1/6

'examine all' in the Troll Room, with the troll still alive, includes the fog and prints 'The fog has lifted.' The fog is present and nameable before the troll has died.

**Recommendation:** Keep the fog out of the room, or out of scope, until the troll's death brings it in.

Evidence: explorer-1 turn 16 ("A nasty-looking troll... blocks all passages out of the room. / The fog has lifted.")

### P10 · world-bug · low · 4/6

The troll's scheduled wake still fires after he is dead. The log shows 'troll_room.troll woke, 60 seconds after it asked' on turns after the black fog has taken him. Players see nothing yet, but a dead troll is still running his turn handler.

**Recommendation:** Cancel the troll's wake when he dies, or have the woke handler return at once once he has expired.

Evidence: goal-seeker-1 turn 15; newcomer-1 turn 22; casual-1 turn 20; parser-breaker-1 turn 29

### P11 · design · low · 1/6

The prose-reader found that examining gave little beyond the room text. The walls named in the Troll Room description cannot be named, and 'examine troll' repeats his room line.

**Recommendation:** Check Zork's answers for these (its global WALL and the troll's examine text) and match them. Do not add new scenery Zork lacks.

Evidence: prose-reader-1 turn 18 ("examine walls -> You can't see any such thing."); prose-reader-1 turn 19 ("examine troll -> A nasty-looking troll, brandishing a bloody axe, blocks all passages out of the room.")

### P12 · design · low · 5/6

What landed, and should be kept: moving the rug, the trap door crashing shut and being barred, the sword's glow in the Cellar and the Troll Room, and the new dead-end lines in Zork's voice. Five reports quoted the Management note with approval, and the fog and combat lines were praised. Prose was rated 4 by five players and 3 by one. The casual player did find three exits telling the same joke repetitive ('A second wall, with the same joke').

**Recommendation:** Keep these. If the dead ends stay for another round, give each one a different kind of refusal so they do not read as one joke told three times.

Evidence: explorer-1 turn 21 ("Back soon. -- The Management."); casual-1 turn 24; goal-seeker-1 turn 18; newcomer-1 turn 24; parser-breaker-1 turn 32; prose-reader-1 turn 16 ("The trap door crashes shut, and you hear someone barring it.")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.13 | 0.24 |
| reading.refusedRate | 0 | 0.04 |
| faults | 0 | 0 |
| repetition | 1 | 5 |
| reach.places.never | 30 | 10 |
| reach.objects.never | 46 | 39 |
| reach.verbs.never | 38 | 35 |
| reach.handlers.never | 21 | 20 |
| reach.passages.never | 290 | 270 |
