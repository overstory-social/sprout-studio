# Synthesis

**Legibility:** partly. Every run saw a Zork II style underground with a meddling Wizard of Frobozz, which matches intent.md's frame. The two long runs also found the treasure motive: opus quoted the newspaper's Wizard item as its goal and named the dragon, the princess, the bank and the stolen treasures. The four short runs, though, took the world to be about the Wizard's illusions, because Fantasize was the first spell in six of seven runs and its refusal line was the most memorable thing they read. None of the short runs saw the treasure hunt. The casual run never found the gazebo at all.

- goal-seeker-1 (yes): A Zork II style empire: barrow, carousel, the Wizard's illusions, riddle door, dragon, the Bank of Zork, with soft walls where the rest will have to wait.
- goal-seeker-1-opus (yes): The caverns south of the ravine, where the exiled Wizard keeps the Empire's stolen treasures and casts half-finished spells; a ruined estate with a unicorn, the dreary room's sphere, a looted bank and a dragon's lair, crossed by wits.
- explorer-1 (yes): A Zork II style cave adventure with a meddling Wizard whose F-spells change what you see and do; the key, the sphere, the well, the bank and the ice are all open threads.
- casual-1 (partly): A Zork/Colossal Cave exploration where a wizard's Fantasize spell makes rooms produce things that are not real.
- newcomer-1 (partly): A small Zork-style cave world where a forgetful Wizard casts illusions the world admits are fake, and a real unicorn wears a gold key.
- parser-breaker-1 (partly): A Zork II style adventure from a barrow across a cavern and garden, with a wizard whose words conjure illusions.
- prose-reader-1 (partly): A small witty take on Colossal Cave where turning on the lamp summons a Wizard whose conjurings the room admits were never there.

## Points

### P1 · world-bug · high · 1/7

The princess's handover loses the gold key without a word and leaves the unicorn behind. In the gazebo the princess 'hands you the key and a fresh rose' and rides off on the unicorn (turn 112). The inventory then has the rose and no key (113). 'examine gold key' is answered 'Unicorn? What unicorn?' (115). At the north end the unicorn is back, cropping grass, with the gold key still on its ribbon (117-118). A whispered F-spell (turn 111) was running until 'your pockets are your own again' (128), so this is probably Filch taking the key. But no Filch line was printed, and the unicorn's return and the key still on its neck are wrong on any reading. This was the run's best-built moment, and the player could not tell whether it was an illusion or a bug.

**Recommendation:** Once the princess rides off, remove the unicorn and its key from the garden for good. If Filch is to take the key as it is handed over, say so in the narrator's voice at that moment; otherwise exempt the handover from Filch. Make 'gold key' resolve to the key and never to the unicorn's stand-in. Add a walkthrough branch that has Filch active during the handover.

Evidence: goal-seeker-1-opus turn 111 ("The Wizard, almost inaudibly, whispers a word beginning with "F," and then disappears, chuckling nastily."); goal-seeker-1-opus turn 112 ("She looks at you and then, smiling, hands you the key and a fresh rose ... rides off into the gloom."); goal-seeker-1-opus turn 113 ("inventory lists A fresh rose, no gold key"); goal-seeker-1-opus turn 115 ("Unicorn? What unicorn?"); goal-seeker-1-opus turn 118 ("you do notice a tiny gold key hanging from a red satin ribbon looped around the animal's neck")

### P2 · world-bug · high · 1/7

The rotten chest in the Dragon's Lair never opens. Every 'open chest', six times over two visits with the dragon dead and the princess gone, gets the same 'You can probably open it if you try again.' The statuette (20) cannot be reached, and with it the 190 ceiling.

**Recommendation:** Have the second 'open chest' open the chest, as the 'try again' line promises. The rusty-hinge counter is probably reset or never incremented when the open also wakes the princess. Add 'open chest' twice to tests/walkthrough.json after the dragon dies.

Evidence: goal-seeker-1-opus turn 93 ("The hinges are very rusty, but they seem to be starting to give. You can probably open it if you try again."); goal-seeker-1-opus turn 96; goal-seeker-1-opus turn 141; goal-seeker-1-opus turn 144; goal-seeker-1-opus turn 145 ("The rotten wooden chest is closed.")

### P3 · world-bug · medium · 2/7

The unicorn's stand-in can be reached from rooms the unicorn is not in. From inside the gazebo, 'examine unicorn' and later 'examine gold key' get the refusal 'Unicorn? What unicorn?', when the gazebo had just said a unicorn was cropping grass at the north end. 'The unicorn bounds lightly away' is also said to visitors in the gazebo and the Formal Garden, who cannot see it.

**Recommendation:** Scope the stand-in and the 'bounds away' line to the North End of Garden. From the gazebo, say the unicorn is outside at the north end, as the gazebo's own told line already does.

Evidence: goal-seeker-1 turn 19 ("Unicorn? What unicorn?"); goal-seeker-1 turn 18 ("The unicorn bounds lightly away. (said in the gazebo)"); goal-seeker-1-opus turn 115 ("Unicorn? What unicorn?"); parser-breaker-1 turn 21 ("The unicorn bounds lightly away. (in the gazebo)")

### P4 · design · high · 3/7

This round's reach fell back into the second quarter, and the first quarter's back half went unplayed. Places never reached rose from 2 to 13: the Top of Well, the Tea Room, the Posts and Pool Rooms, the Low Room, the Machine Room, the Dingy Closet and its cage, Room 8, the Small Room and the Vault. Handlers never fired rose from 21 to 62, and passages never shown from 694 to 1065. Two runs stood in the Circular Room with the bucket and left without water. The explorer got in and out of the bucket and was filling the teapot at the turn cap. The opus run never went to the Riddle Room at all. The ravine, the dragon and the bank now draw long runs north before the well is solved.

**Recommendation:** Revise nothing on the strength of reach alone; it reflects routing as much as design. Do check that the Circular Room or the bucket says where fresh water is to be had (the teapot and a ford), since the one run that tried went to the ledge first. Consider sending the round 5 goal-seeker brief toward the well, and keep the walkthrough covering the Tea Room and the robot so that regressions there are still caught.

Evidence: goal-seeker-1 turn 30 ("There is a wooden bucket here, 3 feet in diameter and 3 feet high."); goal-seeker-1 turn 32; explorer-1 turn 119 ("You are now in the wooden bucket."); explorer-1 turn 149 ("The stream is at the bottom of the ravine, a long way down ... The fords are where it comes up to meet you."); goal-seeker-1-opus turn 64

### P5 · design · high · 4/7

The unicorn's key is still the round's biggest time sink and quit point. The explorer spent about 45 turns (47-94) on the unicorn: waiting, petting, giving it things, 'bow', 'hide', 'cut ribbon', 'untie ribbon'. The newcomer stopped there. The 'kept for somebody in particular' close-up is read as a puzzle to solve now rather than as a deferral. 'untie ribbon' is an unknown sentence in two runs.

**Recommendation:** Give 'untie ribbon' an in-voice answer: the bow is not yours to untie. Let a second look at the unicorn or the key point outward, perhaps to a lady or to the frescoes' fair maidens. That would tell a visitor the key waits on someone found elsewhere and that standing here will not get it.

Evidence: explorer-1 turn 47 ("The unicorn, unsurprised by this evidence that you are indeed the uncouth sort of vagabond ... melts into the hedges"); explorer-1 turn 91 ("untie ribbon -> That sentence isn't one I recognize."); newcomer-1 turn 23 ("The ribbon is tied in the sort of bow that is meant to be untied by somebody in particular"); goal-seeker-1-opus turn 120 ("untie ribbon -> That sentence isn't one I recognize."); parser-breaker-1 turn 18 ("pet the unicorn with the sword -> You can't see any such thing.")

### P6 · design · medium · 2/7

The dragon's anger cannot be read. Sonnet struck it twice where it lay, got 'surprised and interested' both times, and quit. Opus needed three round trips (turns 67-87): the dragon followed one room and then silently was not there in the next. The strike replies do not track the anger: 'rather angry' was followed by 'surprised and interested (for the moment)'.

**Recommendation:** When the dragon cools below following, say so in voice and send him back toward the lair, so the player learns that interest fades. Order the strike replies by anger level, not by draw.

Evidence: goal-seeker-1 turn 82 ("The dragon is surprised and interested (for the moment)."); goal-seeker-1 turn 83; goal-seeker-1-opus turn 69 ("Cool Room (no dragon follows)"); goal-seeker-1-opus turn 74 ("You've made him rather angry. You had better be very careful now."); goal-seeker-1-opus turn 76 ("The dragon is surprised and interested (for the moment)."); goal-seeker-1-opus turn 87 ("There is a muffled explosion and the dragon, a puzzled expression on his face, dies.")

### P7 · design · medium · 3/7

Every run that reached the Bank of Zork left without the portrait or the vault. Sonnet came closest: it took the portrait, met the alarm at both doors, dropped the portrait in the Depository, then walked via the East Teller's to the East Viewing Room and heard 'Curtain Door Closed'. It had the order right but no loot in hand. Opus and the explorer read the brochure and walked through the curtain, but neither carried anything through.

**Recommendation:** Leave the trick as Zork has it, but make the alarm tell more: a line at the door that the force bars the doorway to valuables, and that the curtain is another matter. The 'not the kind of thing one goes north through' line was praised; something in the same voice would help here.

Evidence: goal-seeker-1 turn 62 ("An alarm rings briefly, and an invisible force bars your way."); goal-seeker-1 turn 66 ("You hear a faint voice say "Curtain Door Closed.""); goal-seeker-1-opus turn 55 ("You feel somewhat disoriented as you pass through..."); explorer-1 turn 139; explorer-1 turn 142

### P8 · design · medium · 4/7

Short visits still find no hook. Four of seven runs stopped as 'bored' within 26 lines. The casual run took the Dark Tunnel southwest and never saw the gazebo or the newspaper, the hook round 3 added. Six of seven first calls from the Wizard cast Fantasize. The short runs came away with an illusion gag and no reason to go on.

**Recommendation:** Let the Wizard's first call carry the hook, for example a muttered line about his treasures south of the ravine. Check that the first-spell draw among Feeble, Fumble and Fantasize is even: Fantasize came up in 6 of 7 runs.

Evidence: casual-1 turn 10 ("Your hand closes on nothing, and your eye on less."); casual-1 turn 16; prose-reader-1 turn 11; newcomer-1 turn 23; parser-breaker-1 turn 26

### P9 · world-bug · low · 1/7

'pull place mat' with the mat under the door prints two contradicting replies, a refusal and then a 'move' result.

**Recommendation:** Give pull and move on the place mat one answer: either the key falls, as with 'take place mat', or a single refusal.

Evidence: goal-seeker-1-opus turn 37 ("You can't move the place mat. / Moving the place mat reveals nothing.")

### P10 · world-bug · low · 1/7

When she wakes, the princess's 'eyes fix on the passage east', but the lair's only way out is south, and she walks south. 'follow princess' is not understood, and the player lost her on the first step.

**Recommendation:** Correct the direction in the line. Have 'follow princess' answer in voice with the way she went, as Zork's FOLLOW does for a visible departure.

Evidence: goal-seeker-1-opus turn 94 ("her eyes fix on the passage east. ... The princess walks south."); goal-seeker-1-opus turn 98 ("follow princess -> You can't see any such thing.")

### P11 · design · low · 3/7

The illusion's refusal opens with 'Your hand closes on nothing' whatever the verb, so it reads oddly as the answer to examine or attack. Every run that met it praised it; the wrong verb is the only complaint.

**Recommendation:** Vary the first clause by verb (look, strike, take) and keep the rest of the line, which is the round's most quoted prose.

Evidence: prose-reader-1 turn 7 ("examine sphere -> Your hand closes on nothing, and your eye on less."); parser-breaker-1 turn 14 ("examine basilisk -> Your hand closes on nothing"); newcomer-1 turn 6 ("attack the basilisk with the sword -> Your hand closes on nothing")

### P12 · design · low · 3/7

The Fantasize grue answers as a real grue, with the real description and the 'fighting a lurking grue?' reply, so it is the one illusion that cannot be told from a parser answer or a real thing. The prose-reader could not tell whether it was real.

**Recommendation:** While the conjured grue is shown, route its words to the illusion's answer, or give it a line that sees it plainly in the light, which no real grue allows.

Evidence: goal-seeker-1-opus turn 8 ("The grue is a sinister, lurking presence in the dark places of the earth."); goal-seeker-1 turn 8 ("I've known strange people, but fighting a lurking grue?"); prose-reader-1 turn 10 ("There is a grue here.")

### P13 · world-bug · low · 5/7

The sword 'begins to glow very brightly' whenever the unicorn shares the room. intent.md keeps 'brightly' as the Wizard's only warning and blue for the unicorn, so the two tells blur. The newcomer asked what the sword was warning of.

**Recommendation:** Keep the unicorn's glow at the faint blue line, in the room as well as next door, and keep 'very brightly' for the Wizard who lingers.

Evidence: newcomer-1 turn 16 ("Your sword has begun to glow very brightly."); goal-seeker-1-opus turn 21; explorer-1 turn 46; parser-breaker-1 turn 16; goal-seeker-1 turn 20

### P14 · design · low · 3/7

The soft walls register as frustration, most of all the passage the drowning dragon opens, which is closed by a rockfall on the next move ('the reward was taken away'). The exits are the brief's, but the melt passage is the only one dangled as a reward.

**Recommendation:** Change the melt's reveal line so it doesn't promise a passage the next move takes away: show the steam and the fallen rock at the same moment.

Evidence: goal-seeker-1-opus turn 88 ("a fall of rock has come down behind the glacier ... Whatever lies beyond it will have to wait."); goal-seeker-1 turn 73 ("The way up has gone, for now. Whatever lies beyond it will have to wait."); explorer-1 turn 110

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.08 | 0.08 |
| reading.refusedRate | 0.01 | 0.02 |
| faults | 0 | 0 |
| repetition | 13 | 16 |
| reach.places.never | 2 | 13 |
| reach.objects.never | 241 | 437 |
| reach.verbs.never | 65 | 69 |
| reach.handlers.never | 21 | 62 |
| reach.passages.never | 694 | 1065 |
