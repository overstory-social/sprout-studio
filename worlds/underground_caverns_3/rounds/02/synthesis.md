# Synthesis

**Legibility:** partly. Every player took the dream's frame (an old man's final test) and the Zork voice. Three of the four who met the figure saw it as a double of themselves, and two of those found the mercy of the hood, which is the heart of the intent's first strand. The other strands mostly went unseen. Only one run saw the ship, and it missed the greeting (P1). Only opus went into the lake, and it did not see the loss of the lamp coming (P5). Opus alone grasped the arc's melancholy: losses that stay lost, the old man's returns, the Void. Three runs never met the figure and found the place aimless (P4).

- explorer-1 (partly): A Zork-style descent to a final test set by a silver-haired old man: dark passages, a shadowy land, an underground sea, a sword that will not come free.
- casual-1 (no): A 'final test' premise with nothing to follow it up: a stuck sword, empty hills, blocked paths, no goal.
- parser-breaker-1 (partly): A dreamlike cave adventure with a hooded swordsman stalking the shadows and a sword that teleports into your hand.
- prose-reader-1 (partly): A returning hero with an old lantern called to a final test; a sword meant for your hand; someone following.
- newcomer-1 (partly): A test by an old man in which you find a sword and face a shadow double of yourself.
- goal-seeker-1 (partly): An endgame test: a hooded double of yourself to be unmasked rather than killed, then a ship and a sea, with most of the map closed off.
- goal-seeker-1-opus (partly): A final test where every mistake costs for good: a duel, a freezing lake that takes everything, an old man who brings you back a few times and then gives up on you.

## Points

### P1 · design · high · 1/7

The Viking ship's one-command window cannot be learned in play, and losing it leaves no sign. Only goal-seeker-1 saw the ship. It arrived on entry at turn 20. 'hail ship' at turn 21 went unread and did not use up the window. 'talk to sailor' at turn 22 then used it: the sailor's nudge ('a sailor's greeting, say') was printed in the same command that sailed the ship off. After that the player spent about 20 turns waiting at the shore (turns 23-25, 27-28, 32-39, 64-66, 84-89) and re-entering it. The world never said the ship would not come back. Every wait in the round's repetition metric (19, down from 33) comes from this. Other greetings were dropped or turned aside: 'shout ahoy' (turn 35) gave '(shout) Aaaarrrrgggghhhh!' and ignored the word, 'say ahoy' (turn 82) gave 'Talking to yourself...', and a bare 'wave' (turn 83) went unread. The vial is lost for good and the player cannot tell.

**Recommendation:** Keep the ship passing once, but put the nudge in the ship's arrival text (the sailor peering out, a hand cupped to an ear) so it lands before the window closes. In that one command, read 'hail ship/sailor', 'ahoy', 'say hello/ahoy', 'shout/yell hello|ahoy' and 'wave to sailor' as the greeting, or at least answer them with the nudge without spending the window. When the ship sails off ungreeted, say plainly that it will not be back. At the ocean afterwards, answer 'wait' and any greeting with the 'Nothing happens anymore' voice, so a visitor stops waiting.

Evidence: goal-seeker-1 turn 20 ("Passing alongside the shore now is an old boat, reminiscent of an ancient Viking ship."); goal-seeker-1 turn 21 ("hail ship -> That sentence isn't one I recognize."); goal-seeker-1 turn 22 ("Anything you mean him to hear had better be short, and loud, and friendly; a sailor's greeting, say. / The boat sails silently through the mist and out of sight."); goal-seeker-1 turn 35 ("shout ahoy -> (shout) Aaaarrrrgggghhhh!"); goal-seeker-1 turn 82 ("say ahoy -> Talking to yourself is a sign of impending mental collapse."); goal-seeker-1 turn 89 ("Time passes...")

### P2 · world-bug · medium · 1/7

After a stroke, the figure's strength readout can contradict the stroke. At turn 16 in goal-seeker-1-opus, 'A sharp thrust and the hooded figure is badly wounded!' was followed by 'The figure has a great deal of strength, perhaps matching your own.' The cause: the stroke left s_strength at 2, but the figure's reply that same turn killed the visitor, and `on :die` reset s_strength to 5. The spec renders what a body says only after every body has run (Randomness › The seed: 'What a body says is rendered after the bodies have run'), so `say "The figure {self.s_diag}"` read the value after the reset. On the same seed, goal-seeker-1 (sonnet) did not die at that stroke and read 'badly hurt and defenseless'.

**Recommendation:** Do not interpolate live state into a line that a later handler in the same turn can change. Choose the diagnosis text in the body: pick the line by the strength just computed and say it as a literal, or pass the number in. Look for the same pattern anywhere else `on :die` resets a value that a line spoken earlier in the turn reads, such as the visitor's diagnosis. If this cannot be written cleanly, log it in friction.md as a language gap.

Evidence: goal-seeker-1-opus turn 16 ("A sharp thrust and the hooded figure is badly wounded! / The figure has a great deal of strength, perhaps matching your own. / In your wounded state, you cannot defend yourself..."); goal-seeker-1 turn 16 ("The figure appears to be badly hurt and defenseless.")

### P3 · design · medium · 1/7

Two of the three duels read the cues and took the hood (goal-seeker-1 turns 16-18, newcomer turns 17-19). The third, opus, misread one of the figure's lines as an opening. At turn 13, 'The hooded figure thrusts, but you fight back and send it flying to the ground!' came with the figure only lightly wounded. Opus reached for the hood at turn 14 and got 'You cannot get close enough to the hooded figure to remove the hood.' plus a wound, and died two turns later. The refusal does not say why the figure is out of reach. The opus report says it 'couldn't tell what the fight wanted'.

**Recommendation:** Make the early-hood refusal point at the figure's strength, for instance by using the existing forced_back passage or a line naming its guard ('it is still too strong; it turns you away'). Consider dropping 'send it flying to the ground' from the figure's misses, or saying it rises at once, since a sword fight reads a downed opponent as an opening.

Evidence: goal-seeker-1-opus turn 13 ("The hooded figure thrusts, but you fight back and send it flying to the ground!"); goal-seeker-1-opus turn 14 ("You cannot get close enough to the hooded figure to remove the hood. / You are wounded by a lightning thrust!"); goal-seeker-1 turn 17 ("...the hood, which has kept its face from you all this while, hangs within reach of your hand."); newcomer-1 turn 19 ("You slowly remove the hood from your badly wounded opponent...")

### P4 · design · medium · 5/7

The figure is Q1's only hook, and it shows up by chance (3 in 10 per lit shadow move). The cue that it is near, 'You can hear quiet footsteps nearby', cannot be acted on. Casual, explorer and prose-reader each crossed 3-4 shadow rooms without meeting it and quit bored within 12 turns. Casual: 'I had no goal and no puzzle'. Players who reached for the footsteps were refused: 'listen to the footsteps' and 'hug the footsteps' gave 'You can't see any such thing.' (parser-breaker turns 9, 11), and 'who is there?' went unread (newcomer turn 9). The prose-reader wished 'to find out who the footsteps belong to'. The listen verb was never reached in the round.

**Recommendation:** Make the footsteps a presence in the shadow rooms that answers listen, follow, examine and 'who is there', in Zork's voice: they stop when you stop, they are your own pace. That tells a visitor to linger or wait in the shadow land, which is where the figure's chance builds. Keep the original's odds. The footsteps line itself is the author's, so it can carry this.

Evidence: casual-1 turn 12 ("After about ten turns I had found nothing to do."); explorer-1 turn 12; prose-reader-1 turn 12 ("You can hear quiet footsteps nearby."); parser-breaker-1 turn 9 ("listen to the footsteps -> You can't see any such thing."); parser-breaker-1 turn 11 ("hug the footsteps -> You can't see any such thing."); newcomer-1 turn 9 ("who is there? -> That sentence isn't one I recognize.")

### P5 · design · medium · 1/7

The lake still costs the lamp without warning at the moment of entry. Opus read the shore line ('a cold that would open your hands for you'), typed 'enter lake' at turn 30 and lost the lamp. That cost its light for the rest of the game: grue deaths at turns 37 and 43, then the Void. The report says 'I didn't read it as "you'll lose your light for good"'. The plainer warning added this round ('the shore is lit and will keep what is left on it') lives only in `examine lake`, which neither visitor to the shore typed. Bare 'swim' at the Lake Shore (turn 29) answered 'Go jump in a lake!' rather than going in or pointing at the water.

**Recommendation:** Keep the soft-lock, but move the 'the shore is lit and will keep what is left on it' clause into the Lake Shore's room description, so it shows without an examine. Make bare 'swim' at the shore enter the lake (or say what entering would cost), in place of the joke, which reads as a dismissal while a lake is right there. Check this against Zork III's V-SWIM at the shore and keep the original's answer if it is the same.

Evidence: goal-seeker-1-opus turn 26 ("The water has the look of a cold that would open your hands for you."); goal-seeker-1-opus turn 29 ("swim -> Go jump in a lake!"); goal-seeker-1-opus turn 30 ("The shock of entering the frigid water has made you drop all your possessions into the lake! Your lamp goes under with the rest."); goal-seeker-1-opus turn 38 ("...it will not light again.")

### P6 · design · medium · 1/7

Throwing the sword into the Flathead Ocean loses it with no warning ('The sword falls into the ocean and is lost forever.'). The duel needs sword strokes to wound the figure to its last point before the hood can be taken, so a lost sword probably makes the game unwinnable without a word. The round did not show whether the sword still leaps to hand from the ocean: parser-breaker never met the figure again.

**Recommendation:** Find out whether the sword's leap to hand reaches the ocean. If it does not, either let the sword come back when the figure next appears (it 'comes to the hand when it is needed', which suits the intent) or follow the original exactly. Either way, log the outcome in intent.md beside the lamp-in-the-ocean entry.

Evidence: parser-breaker-1 turn 22 ("The sword falls into the ocean and is lost forever.")

### P7 · design · low · 1/7

When a visitor walks out past the figure, it vanishes with no line. The only sign is 'Your sword is no longer glowing.' Parser-breaker met it at turn 13 and stepped west at turn 14. Coming back at turn 15, it found the figure gone, and 'give the sword to the hooded figure' at turn 16 was refused with 'You can't see any such thing.' The report: 'The figure vanished when I went back.'

**Recommendation:** When the visitor leaves a shadow room the figure stood in, say that it goes, in the same voice as the withdrawal into the dark (for instance, 'Behind you, the hooded figure steps back into the shadows'), so the departure reads as the figure's own act.

Evidence: parser-breaker-1 turn 13 ("Through the shadows, a cloaked and hooded figure appears before you, blocking the eastern exit..."); parser-breaker-1 turn 14 ("Your sword is no longer glowing."); parser-breaker-1 turn 16 ("You can't see any such thing.")

### P8 · engine-bug · low · 1/7

The reach metric counts prison_cell as never reached, though goal-seeker-1-opus passed through it on three deaths (turns 16, 33, 37). The same metrics count the cell's `prison_cell on entered` handler, its `prison_cell.cell` passage and the old man's passages as reached. reach.places seems to sample where a visitor ends the turn, so a place entered and left within one turn is missed. This makes up half of the rise in reach.places.never from 0 to 2. The other place, shadow_5 (the quicksand room), was in fact never visited.

**Recommendation:** File it with Sprout's test reporter: a place a visitor is moved into during a turn should count as reached. Until that is fixed, read prison_cell in reach.places.never as an artifact of the round's one-turn cell visit.

Evidence: goal-seeker-1-opus turn 16 ("You find yourself deep within the earth in a barren prison cell."); goal-seeker-1-opus turn 33; goal-seeker-1-opus turn 37

### P9 · design · low · 7/7

Most of the round's unread lines are the unbuilt-exit refusals, as the brief intends. Of 30 unread entries, 22 are in-voice 'not today' refusals or fixed refusals (the mist west, the beach north, the slide northwest, the rockfall and squeeze east, the quicksand, the endless stair). All 7 runs tried Barren Area west first. Players rated these refusals well: several quoted 'you have seen the surf. Not today.' Only 6 entries are true misreads, all already covered by P1 and P4.

**Recommendation:** No change before round 3 opens Q2. When it does, check that the unread rate drops to the true misreads.

Evidence: explorer-1 turn 12 ("you would have to swim the gap, and you have seen the surf. Not today."); casual-1 turn 6; prose-reader-1 turn 8; newcomer-1 turn 6; goal-seeker-1 turn 6; goal-seeker-1-opus turn 6; parser-breaker-1 turn 21

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.15 | 0.14 |
| reading.refusedRate | 0 | 0 |
| faults | 0 | 0 |
| repetition | 33 | 19 |
| reach.places.never | 0 | 2 |
| reach.objects.never | 181 | 203 |
| reach.verbs.never | 72 | 79 |
| reach.handlers.never | 4 | 10 |
| reach.passages.never | 515 | 596 |
