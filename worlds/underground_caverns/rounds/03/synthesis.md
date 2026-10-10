# Synthesis

**Legibility:** legible. All six players read the world as a cut-down Zork I opening: the white house, the cellar, the troll, and a deeper Empire not yet built. That is the slice intent.md describes. Two runs read Zork's own Troll Room, north of the Cellar, as a remix ('the troll moved'), because the framing told them to expect changes. One run never saw the above-ground half. Neither is a misreading of the world's purpose.

- explorer-1 (yes): A reworked Zork start: house, tree with a jewelled egg, cellar with a troll, trophy case; the goal was the egg in the case.
- goal-seeker-1 (yes): A cut-down Zork: collect things, go down, kill the troll; beyond that the underground is unfinished.
- newcomer-1 (partly): A changed Zork: in through the window, lantern, sword and sack, down to the cellar; passages unfinished and no treasure found.
- casual-1 (partly): A remixed Zork with the troll moved right next to the cellar.
- parser-breaker-1 (yes): A small cut-down version of the Zork opening; the deeper caverns are not built yet.
- prose-reader-1 (yes): A cut-down Zork with the house, cellar and troll room, and unfinished passages marked by notes from The Management.

## Points

### P1 · design · high · 6/6

The barred trap door still ends every run that goes down, and it decided all three goals. Four runs ended stuck in the cellar and Troll Room: goal-seeker at 23-24, newcomer at 24-25, parser-breaker at 27-30 and prose-reader at 57-61. The other two died to the troll. Explorer only got back to the surface by dying, and casual quit after its death. Goal-seeker (goal: highest score) did not reach it. It went straight from the house to the trap door, never fetched the egg, and was walled in at 35 points against the slice's ceiling of 45 (score at turn 22). Newcomer (goal: find treasure and keep it safe) did not reach it either. It took the same route through the house and down, never went into the forest, and was barred in with no treasure. Explorer (goal: egg in the trophy case) reached it at turn 39, but only because its turn-19 death respawned it in the forest, where it climbed the tree (23-24) and carried the egg home. Prose-reader, with no such goal, is the only run that did the slice in the 'right' order: egg first (15-16), egg in the case (37), then down. The rounds-1-to-3 pattern holds: the house funnels straight to the rug and trap door, and once barred in, death is the only way back up. The Management note and the digging are the round's most-quoted lines, so the edge reads as charming, but it does not read as a way on.

**Recommendation:** This is for the director, and round 4 is the round that widens the slice. Make Zork's own route home (Cellar south down the crawlway, East of Chasm, Gallery, Studio, up the chimney to the Kitchen) the first thing round 4 opens, as intent.md's 'After round 2' note proposes. Until then the crawlway refusal is the best place to hint, in Zork's voice, that the digging leads somewhere one day. Do not reopen the trap door: barring it is Zork's design.

Evidence: goal-seeker-1 turn 22 ("Your score is 35 (total of 350 points), in 17 moves."); goal-seeker-1 turn 24 ("The door is locked from above."); newcomer-1 turn 25 ("The door is locked from above."); prose-reader-1 turn 59 ("The door is locked from above."); parser-breaker-1 turn 30 ("You peer into the forbidding hole... You think better of it."); explorer-1 turn 19 ("Now, let's take a look here... Well, you probably deserve another chance."); explorer-1 turn 39 ("put egg in trophy case -> Done."); prose-reader-1 turn 37 ("put egg in trophy case -> Done.")

### P2 · engine-bug · medium · 6/6

A compound command made of two verbs joined by 'and' gets 'You can't see any such thing.' even when the object is in plain view. The parser seems to read 'leaflet and read it' as a list of nouns and blames visibility. Five runs typed 'take leaflet and read it' at the open mailbox, and the sixth typed 'open window and climb in'. The wrong answer misleads players. Explorer reported that it 'could not take the leaflet' and never read it. Goal-seeker never read it either. Both list 'Read the leaflet' among their wishes. The same blind 'can't see' answers 'dig with axe' while the axe is in hand, and 'listen to the digging'.

**Recommendation:** File an issue in overstory-social/sprout with the 'studio' label. When 'and' is followed by a known verb, the parser should split the line into two commands. Failing that, it should answer with the word it did not understand, not a visibility refusal. The world should not route around this.

Evidence: explorer-1 turn 2 ("take leaflet and read it -> You can't see any such thing."); goal-seeker-1 turn 2 ("take leaflet and read it -> You can't see any such thing."); newcomer-1 turn 2 ("take the leaflet and read it -> You can't see any such thing."); casual-1 turn 2 ("take leaflet and read it -> You can't see any such thing."); prose-reader-1 turn 4 ("take leaflet and read it -> You can't see any such thing."); parser-breaker-1 turn 5 ("open window and climb in -> You can't see any such thing."); prose-reader-1 turn 62 ("dig with axe -> You can't see any such thing.")

### P3 · world-bug · medium · 1/6

A knockout only lasts until the troll's already-pending turn, so the player never gets a blow at the unconscious troll. In troll.sprout:144 the 3-minute knockout wake is only armed when :waking is false. Mid-fight it is always true, because each swing schedules a 1-minute turn. So the pending 1-minute wake fires at the next tick, finds strength < 0, and two times in three brings him round, swinging at once. Casual knocked him out twice (turns 19 and 23), and both times he was up and swinging before casual's next command. The first time, he also disarmed casual. Zork's 'The unconscious troll cannot defend himself: He dies.' (:last 8) was never reached. Casual died at turn 26, rated difficulty 'too hard' and quit.

**Recommendation:** Make a knockout replace the pending fight turn, not defer to it. Either track an out-cold counter that :woke checks before rolling to wake him, or read Zork's rising wake chance (its villain probability) so that waking on the very next turn is rare. If Sprout cannot cancel or replace a pending `wake`, log that in friction.md as a language gap and file it upstream. Add a seeded test where a knockout is followed by a killing blow.

Evidence: casual-1 turn 19 ("Your sword crashes down, knocking the troll into dreamland. / The troll stirs, quickly resuming a fighting stance."); casual-1 turn 23 ("Your sword crashes down, knocking the troll into dreamland. / The troll stirs, quickly resuming a fighting stance. / The troll swings..."); casual-1 turn 26 ("The troll's axe stroke cleaves you from the nave to the chops.")

### P4 · world-bug · medium · 1/6

The disarm line names the wrong weapon. With only the sword in hand, casual read 'The axe knocks your bloody axe out of your hand.' adventurer.sprout:209 tells a line built from {self.weapon_name} and then moves the sword to the floor. The spec renders what a body says only after the bodies have run, so weapon_name sees no sword and falls back to 'bloody axe'. Casual then typed 'attack troll with sword' and was told 'You don't have the sword.', which matches its 'a fight I couldn't read'.

**Recommendation:** Decide which weapon is lost before the tell, and write its name as a literal in the line, or branch the tell by weapon. Do not interpolate a passage that reads the inventory the same handler changes. Check the troll's lines that use wep_name for the same pattern.

Evidence: casual-1 turn 19 ("The axe knocks your bloody axe out of your hand. It falls to the floor."); casual-1 turn 20 ("attack troll with sword -> You don't have the sword.")

### P5 · design · low · 6/6

Giving each run its own seed worked: this round's fights are independent samples. Four of six killed the troll: goal-seeker and newcomer in one blow (turns 17, 18), and parser-breaker and prose-reader on the second blow after a stagger (25, 45). Two died: explorer at 19 and casual at 26. The playtesters split the same way, 'too easy' (explorer, parser-breaker) against 'too hard' (casual, newcomer). That spread is Zork's own tables at 0 points, as intent.md records. Gifts worked as designed: parser-breaker fed the troll the sack and the bottle (turns 20, 22) and enjoyed it. The sword's glow was noticed and liked (casual).

**Recommendation:** Do not retune. Once P3 is fixed, a knockout will become the second chance Zork intends, which answers casual's complaint without changing the tables.

Evidence: goal-seeker-1 turn 17 ("It's curtains for the troll as your sword removes his head."); newcomer-1 turn 18 ("The fatal blow strikes the troll square in the heart: He dies."); parser-breaker-1 turn 20 ("The troll, who is not overly proud, graciously accepts the gift..."); explorer-1 turn 19 ("It appears that that last blow was too much for you.")

### P6 · design · low · 6/6

Several of the slice's secrets are still unexercised after three rounds. All six runs lit the lamp before going down, so darkness and the grue were never met (Adventurer on :grue never fired). Nobody went up to the Attic (the rope and knife are never reached). Nobody dropped anything from the tree (Thing on :fall and :landed never fired), opened the egg, or wound the canary. The world is not at fault: Zork puts the lamp beside the trap door. The rise in objects.never (39 to 82) and passages.never (270 to 317) comes from the round-3 commit making every named piece of scenery examinable, not from lost reach. Only prose-reader examined scenery (mailbox, house, grating, window, ramp, axe, walls), and it rated the new prose 4, quoting the ramp.

**Recommendation:** No world change. Read the new scenery's reach on its own, not as a regression. If the director wants darkness, the grue or the attic tested, a round-4 goal can point a persona at them, for example 'find out what is upstairs', without naming the mechanics.

Evidence: prose-reader-1 turn 41 ("It is polished smooth by everything that has ever slid down it, and it is unclimbable."); prose-reader-1 turn 56 ("The walls are rough rock, marred by old bloodstains..."); goal-seeker-1 turn 14 ("turn on lantern -> The brass lantern is now on.")

### P7 · design · low · 3/6

Faithful Zork behaviours confused players once each. In BRIEF, a revisited room gives only its name: parser-breaker went south from the Troll Room, got 'Cellar' alone, and logged it as a confusion. North of House's 'go south' answers 'The windows are all boarded.', which prose-reader read as inconsistent compass directions. Possessions scattered on death came with no account of where anything went: explorer called it a surprise and found the sack in the forest and the bottle behind the house; casual called it frustrating.

**Recommendation:** Keep all three: they are Zork's. Each is one run, so they are outliers. Watch for BRIEF confusion again once the map widens.

Evidence: parser-breaker-1 turn 28 ("south -> Cellar"); prose-reader-1 turn 8 ("go south -> The windows are all boarded."); explorer-1 turn 28 ("There is a brown sack here."); casual-1 turn 26 ("Forest / This is a forest, with trees in all directions.")

### P8 · world-bug · low · 2/6

There are small verb and noun gaps around the edges. 'pour water into sack' is not a recognised sentence, though Zork has POUR. 'give water to troll' answers 'can't see' while the water is in the held bottle. The digging heard beyond the crawlway cannot be listened to, though LISTEN is declared (and never reached). 'dig with axe' falls through to 'can't see' while the DIG verb is declared, which suggests its grammar does not accept 'dig with X'.

**Recommendation:** Add Zork's POUR. Accept 'dig with <tool>' and answer it in Zork's voice. Give the Cellar a scenery 'digging' or 'sound' that LISTEN can answer, in the same polite voice as the crawlway line. If Sprout's grammar cannot express 'dig with X' without a direct object, log it in friction.md.

Evidence: parser-breaker-1 turn 10 ("pour water into sack -> That sentence isn't one I recognize."); parser-breaker-1 turn 18 ("listen to the digging -> You can't see any such thing."); parser-breaker-1 turn 21 ("give water to troll -> You can't see any such thing."); prose-reader-1 turn 62 ("dig with axe -> You can't see any such thing.")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.24 | 0.16 |
| reading.refusedRate | 0.04 | 0.01 |
| faults | 0 | 0 |
| repetition | 5 | 4 |
| reach.places.never | 10 | 3 |
| reach.objects.never | 39 | 82 |
| reach.verbs.never | 35 | 35 |
| reach.handlers.never | 20 | 9 |
| reach.passages.never | 270 | 317 |
