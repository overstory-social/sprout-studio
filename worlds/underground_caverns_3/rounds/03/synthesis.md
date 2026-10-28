# Synthesis

**Legibility:** partly. Both opus runs read the intent closely: a final test passed by sparing rather than killing, a figure that is yourself and then the old man, a ship that passes once, a lake that takes, and an empire in melancholy decline. The sonnet runs read the mirror and teacher duel and the dream's 'worthy', but three of them took the duel as a fight to win, killed the figure, and wished they had been allowed to spare it. So they felt the theme of 'a fight you cannot win by winning' without finding the hood that answers it. Goal-seekers: goal-seeker-1 (sonnet) did not get far. It killed the figure at turn 17, lost the ship at turn 66 to a bare shout, and stopped stuck. goal-seeker-1-opus got all Q1 holds (3 of 7, hood, cloak, vial, amulet) and stopped only at the unbuilt exits. explorer-1-opus also got further than explorer-1: it took the hood at turn 150, where the sonnet explorer stalled at the hood from turns 60 to 113. Both opus runs were then stopped by Q2 not yet being built.

- explorer-1-opus (yes): A last test from an old man whose belongings you gather. The hooded swordsman is yourself and fights like a teacher. Underneath, it is about loss and age: the aqueduct, the slow shadow, a ship that passes once.
- goal-seeker-1-opus (yes): An old wizard is testing whether you are worthy by doing the right thing, not the violent thing: call the sailor, dive for the amulet, beat your hooded double without killing it and find your own face under the hood.
- explorer-1 (partly): A dream world where you seek an old man when worthy. A hooded figure who mirrors you and spares you blocks the way. The point is to unmask it, and the player could not find how.
- goal-seeker-1 (partly): A Zork-style cave crawl to find the silver-haired old man, with a hooded double with a glowing sword guarding the shadow land.
- prose-reader-1 (partly): A test of the self: a hooded figure that mirrors you and fights like a teacher. Its lowered head implied mercy, but the player killed it anyway.
- newcomer-1 (partly): A dreamlike final test with a sword in a rock and a sorrowful hooded figure. The player hesitated over whether killing it was right, but did not know what the test asked.
- casual-1 (partly): A dungeon sequel in which a hooded figure tests you like a teacher, but the duel is repetition with no clear way to win.
- parser-breaker-1 (partly): A Zork-like dungeon with a final test set by an old wizard: a lantern, a stuck sword, shadowy lands and grues.

## Points

### P1 · design · high · 4/8

The defenceless window does not lead to the hood for most players. 'It lowers its sword, and its head with it, and waits' reads as an offer of mercy. The hood is only mentioned if the player happens to examine the figure. And the I-CURE tick heals the figure from 1 to 2 without saying so, often within one command. Three sonnet runs struck again and killed the figure, the trap, after wishing they could spare it. A fourth, explorer-1, examined the figure, read that the hood 'hangs within reach', and was forced back on its very next command because the figure had already healed. Both opus runs took the hood straight after the line, so the puzzle can be solved, but it is narrow and the window closes silently.

**Recommendation:** Put the hood into the stroke line itself, for example: 'It lowers its sword, and its head with it, and waits; the hood hangs within reach.' When I-CURE lifts the figure off its last point, say so ('The figure straightens; its guard is coming back'), so that a missed window is something the player can see. Better still, do not heal the figure while it stands at its last point and waits. That departs from I-CURE, so log it in friction.md.

Evidence: explorer-1 turn 60 ("It lowers its sword, and its head with it, and waits."); explorer-1 turn 62 ("the hood ... hangs within reach of your hand."); explorer-1 turn 63 ("The hooded figure, though recovering from wounds, is strong enough to force you back."); explorer-1 turn 95 ("unhood figure -> though recovering from wounds, is strong enough to force you back"); prose-reader-1 turn 26 ("It lowers its sword, and its head with it, and waits."); prose-reader-1 turn 27 ("The hooded figure catches you off guard and wounds you!"); prose-reader-1 turn 36 ("fatally wounded, slumps to the ground"); newcomer-1 turn 22 ("deep and sorrowful eyes"); goal-seeker-1 turn 17 ("deep and sorrowful eyes"); goal-seeker-1-opus turn 57 ("You slowly remove the hood from your badly wounded opponent"); explorer-1-opus turn 150

### P2 · world-bug · medium · 1/8

Some natural ways of taking the hood never reach the hood logic. With the figure at its last point, `pull hood` got the generic shift answer 'Moving the hood reveals nothing.' and the window passed. `lift the hood`, `push hood back`, `raise hood` and `lower hood` also fell through to the generic shift, raise and lower answers. `unhood`, `take hood` and `remove hood` do reach it.

**Recommendation:** While the figure wears the hood, route pull, lift, push back, raise and lower hood to the same reach that `take hood` and `unmask` use.

Evidence: explorer-1 turn 94 ("pull hood -> Moving the hood reveals nothing. (figure at strength 1, a turn after 'lowers its sword')"); explorer-1 turn 66 ("lift the hood -> Playing in this way with the hood has no effect."); explorer-1 turn 70 ("push hood back -> (push hood) Moving the hood reveals nothing.")

### P3 · world-bug · medium · 3/8

One variant of the figure's disarm says the sword is on the ground, but the sword stays in the visitor's hand. 'It waits, and nods at the sword on the ground, and does nothing until you have picked it up' prints, the sword never leaves the hand, and `take sword` answers 'You already have that!'. After a deliberate `drop sword`, the same line prints and is followed in the same turn by the sword leaping back into the hand, which contradicts it.

**Recommendation:** Either drop the sword to the floor when that variant is chosen, or rewrite it so the blade is beaten aside and stays in hand. Don't print it in the turn the sword leaps back.

Evidence: prose-reader-1 turn 23 ("nods at the sword on the ground, and does nothing until you have picked it up."); prose-reader-1 turn 24 ("take sword -> You already have that!"); explorer-1-opus turn 122; explorer-1-opus turn 123 ("take sword -> You already have that!"); explorer-1 turn 65 ("...until you have picked it up. / Your sword, glowing wildly, leaps into your hand!")

### P4 · design · high · 2/8

The round's main change to the ship, holding it once for a near-greeting, never fired: the `near_greet` handler was never reached and the `hail` verb was never reached. The first things a player calls at a passing ship are bare: `hail` is 'That sentence isn't one I recognize.', which does not use up the window. Bare `shout` is read as yell ('Aaaarrrrgggghhhh!'), counts as the one command, and the ship sails. Two of the three runs that saw the ship lost it. The third said 'hello sailor' and got the vial. Afterwards `say ahoy` at the empty shore answered 'Talking to yourself...' instead of the 'Nothing happens anymore' voice the intent promises for every call.

**Recommendation:** While the ship is in sight, read bare `hail`, `shout`, `yell`, `wave` and `ahoy` as calls to the ship. The ship is in range then, so this keeps the brief's rule about offering verbs. Have them hold the ship once, as the qualified calls do. Answer `say <anything>` and bare yells at the empty shore in the mist_empty voice.

Evidence: goal-seeker-1 turn 64 ("He has a hand cupped to one ear, turned toward the shore"); goal-seeker-1 turn 65 ("hail -> That sentence isn't one I recognize."); goal-seeker-1 turn 66 ("shout -> Aaaarrrrgggghhhh! The boat sails silently through the mist"); goal-seeker-1 turn 68 ("say ahoy -> Talking to yourself is a sign of impending mental collapse."); explorer-1-opus turn 23 ("wait -> Time passes... The boat sails silently through the mist and out of sight."); goal-seeker-1-opus turn 16 ("hello sailor -> The seaman looks up and maneuvers the boat toward shore.")

### P5 · design · medium · 2/8

The roc's one move is often spent on a refusal. When it appears, the obvious move for a player is to swim for a shore. The unbuilt south shore, or the swamp, turns them back, that refusal is the one command the roc allows, and they are eaten. Nothing in the roc's line suggests diving. In the same run, goal-seeker-1-opus escaped an earlier roc by diving, more or less by chance.

**Recommendation:** Don't let a turn-back at an unbuilt shore or the swamp count as the roc's move, or give the roc's line a hint toward the water ('nowhere to go but down'). Q2 opening the south and west shores will remove half the problem.

Evidence: goal-seeker-1-opus turn 62 ("A giant roc, previously hidden among the rocks, is heading right toward you"); goal-seeker-1-opus turn 63 ("south -> ...the south shore keeps. The roc snatches you in its jaws"); explorer-1-opus turn 178 ("east -> The swamp is impassable. The roc snatches you in its jaws"); goal-seeker-1-opus turn 39 ("dive -> You take a breath and go under.")

### P6 · design · high · 6/8

Q1 has been played out. Neither goal-seeker got past it, since nothing past it is built. goal-seeker-1 (sonnet) killed the figure at turn 17, which makes the game unwinnable, lost the ship at turn 66 and the sword in the lake at turn 39, and stopped stuck. goal-seeker-1-opus got further: everything Q1 holds (hood, cloak, vial, amulet, 3 of 7) by about turn 104, after which every exit was a 'Not today'. explorer-1-opus also beat its sonnet run: it took the hood at turn 150, where explorer-1 stalled at the hood from turns 60 to 113, and then ran out of exits at 3 of 7. On the Lake's own description promises 'The west and south shores are suitable for walking', and both are refused. These refusals make up most of the unread rate (0.13).

**Recommendation:** Follow the brief's schedule: the revision after this round builds Q2 whole and opens Q1's exits onto it (the cliff-top, the beach path, the lake's south and west shores, the Barren Area's west and northwest, Junction east, Creepy Crawl east), so the On the Lake description becomes true. Cite this point as the one bearing on the unbuilt exits.

Evidence: goal-seeker-1-opus turn 104 ("Score 3 of 7. I don't know what the other four are"); goal-seeker-1-opus turn 75 ("the western shore keeps"); explorer-1-opus turn 204 ("Every remaining direction was blocked."); explorer-1 turn 36 ("the south shore keeps"); goal-seeker-1 turn 40 ("the south shore keeps"); prose-reader-1 turn 9 ("The quicksand prevents movement in that direction.")

### P7 · design · medium · 3/8

The duel turns into a slog with no sense of progress. Repetition rose from 19 to 36, nearly all of it `attack figure` (14 times in casual-1, 16 in explorer-1, 12 in newcomer-1). As the visitor is wounded their odds fall (10 + 10 × strength), so a losing duel becomes a long run of misses with nothing new to read. Players called it 'pure random rolls with no tactics' and quit or stalled. The odds are the original's, but nothing points to the way out: walking off, turning the lamp off, or resting until both sides heal.

**Recommendation:** Keep the odds. Add a cue about the visitor's own condition as their strength falls (the DIAGNOSE lines folded into the figure's strokes), and after a run of misses a line in the hint book's spirit that it fights as you fight, so a wounded visitor has reason to step away, heal and come back.

Evidence: casual-1 turn 20 ("A good stroke, but it's too slow. ... A turn of the figure's wrist"); explorer-1 turn 93; explorer-1-opus turn 131 ("In your wounded state, you cannot defend yourself"); newcomer-1 turn 16

### P8 · design · low · 3/8

At the Lake Shore, `swim` gives 'Go jump in a lake!' and `dive` gives the jump jokes ('Do you expect me to applaud?', 'Are you enjoying yourself?'). Players read both as the lake being refused and had to try several phrasings before `jump in lake` or `enter lake` worked. The bare-swim joke is faithful to V-SWIM; `dive` answering as a jump at a lake is not what a player expects.

**Recommendation:** Make `dive`, `dive in lake` and `swim in lake` enter the lake at the shore. Keep bare `swim` as the joke if it stays faithful.

Evidence: explorer-1-opus turn 92 ("swim -> Go jump in a lake!"); explorer-1-opus turn 93 ("dive -> Do you expect me to applaud?"); explorer-1-opus turn 95 ("dive -> Are you enjoying yourself?"); goal-seeker-1-opus turn 37 ("swim -> Go jump in a lake!"); goal-seeker-1 turn 38 ("swim -> Go jump in a lake!")

### P9 · design · low · 2/8

The plunge line says 'drop all your possessions', but worn things (hood, cloak, amulet) stay on the visitor. goal-seeker-1-opus believed its worn things were lost, though only the vial and sword lay on the bottom. goal-seeker-1 left the lamp on the shore as the description advises, but lost the sword and called it 'no warning': the shore line names only the light.

**Recommendation:** Have the plunge line name what goes and what stays ('...all you were carrying; what you wear stays with you'), and let `examine lake` or the shore line mention that the sword sinks too.

Evidence: goal-seeker-1-opus turn 62 ("The shock of entering the frigid water has made you drop all your possessions into the lake!"); goal-seeker-1 turn 33 ("whatever you cannot afford to lose to the bottom, your light first of all"); goal-seeker-1 turn 39 ("drop all your possessions into the lake!")

### P10 · world-bug · low · 2/8

Some natural ways of calling to the footsteps are missed. 'hello? who is there?' is not read, though `who is there` is meant to be. 'call out to the footsteps' answers 'You can't see any such thing.' Where it is reached, the footsteps feature works well: listening and waiting brought the figure in prose-reader-1, and 'greet the footsteps' was answered in parser-breaker-1.

**Recommendation:** Read `call (out) to <footsteps>` as hello. Make `who is there` read with a leading 'hello?'.

Evidence: newcomer-1 turn 9 ("hello? who is there? -> That sentence isn't one I recognize."); explorer-1 turn 49 ("call out to the footsteps -> You can't see any such thing."); parser-breaker-1 turn 9; prose-reader-1 turn 13

### P11 · world-bug · low · 1/8

`drink vial` is refused with 'You can't drink the vial.', but `drink liquid` works. Zork reads drinking the container as drinking what it holds.

**Recommendation:** Route drink, and smell or pour, on the vial to its liquid while the vial is open.

Evidence: goal-seeker-1-opus turn 121 ("drink vial -> You can't drink the vial."); goal-seeker-1-opus turn 123 ("drink liquid -> You "drink" the contents in one gulp")

### P12 · language-gap · low · 1/8

Sprout cannot read the possessive 'the figure's hood', which is already logged. A player reaching for the hood typed it at the moment it mattered.

**Recommendation:** Keep it in friction.md and raise it with Sprout. Meanwhile, P1's change to the stroke line, naming the hood as within reach, would make 'take hood' the obvious wording.

Evidence: explorer-1 turn 98 ("remove the figure's hood -> You can't see any such thing.")

### P13 · engine-bug · low · 3/8

reach.places.never lists prison_cell, yet its `on entered` handler and OldMan's `on arrived` are both counted as reached. The visitor passed through the cell on every death, and the deaths are plain in the transcripts. The place-reach figure appears to count only where a visitor ends a turn.

**Recommendation:** File it against Sprout's reach metric: a place entered during a turn should count as reached. Until then, read places.never = 2 as 0 in practice for prison_cell (oblivion really is unreached).

Evidence: parser-breaker-1 turn 11 ("Oh, no! A lurking grue slithered into the room and devoured you! ... barren prison cell"); goal-seeker-1-opus turn 63 ("You find yourself deep within the earth in a barren prison cell."); explorer-1-opus turn 60 ("you drown in the frigid waters ... prison cell")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.14 | 0.13 |
| reading.refusedRate | 0 | 0.01 |
| faults | 0 | 0 |
| repetition | 19 | 36 |
| reach.places.never | 2 | 2 |
| reach.objects.never | 203 | 174 |
| reach.verbs.never | 79 | 66 |
| reach.handlers.never | 10 | 9 |
| reach.passages.never | 596 | 557 |
