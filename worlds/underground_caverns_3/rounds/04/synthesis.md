# Synthesis

**Legibility:** partly. Every run got the frame: a dream mentor, a final test, seek him when worthy. The three runs that went deep (goal-seeker, explorer, parser-breaker) understood the duel against yourself. The goal-seeker and explorer also understood the lake that takes what you carry. Q2's meaning did not land: the man at the cliff read as a trickster (explorer) or not at all, and the table, the repellent, the key and the aqueduct went unread. The three short runs (casual, newcomer, prose-reader) quit on the Cliff Ledge or near it and saw only setting. The goal-seeker, given the goal "Get as far into the place as you can.", did not reach it: it got to the Key Room (turn 110) and opened the manhole, but never entered the aqueduct. What stopped it: no light past the lake, because the table was never touched (so no repellent); the torch lost to the lake (turn 58); the lamp smashed by a misread throw (turn 102); and four deaths, the last to the Void at turn 124. The earthquake at turn 123 closed the arch anyway.

- goal-seeker-1 (yes): A Zork-style final test: a hooded double of yourself to beat and unmask, a freezing lake that takes your things, and grues in the dark beyond it. It reached the Key Room but did not get past the light problem, and ended in the Void.
- explorer-1 (partly): A test of worthiness set by an old man: a trickster at the cliff, a sleeping old man fed for a secret door, a double it killed while sensing it should have spared it. It took the worthiness refusal at the stairs as a puzzle it could solve now.
- casual-1 (partly): An atmospheric cave world with a dream mentor, a sword in a stone, a cloaked figure, a sea and a locked chest, with no pull forward.
- newcomer-1 (partly): Wandering caves, a cliff and a shore after a dream wizard's call; the sailor's gift as a small solved puzzle; no goal emerged.
- parser-breaker-1 (partly): A cave test of worthiness whose centre is fighting and unmasking a shadow double of yourself.
- prose-reader-1 (partly): A sequel with history: an old lantern friend, a sword whose hilt fits your hand, a sunlit oasis, a chest someone wants. It sensed the story but was stranded on the ledge before it unfolded.

## Points

### P1 · design · high · 2/6

No run touched the Scenic Vista's table, so the repellent chain never started. Room 8, the Timber Room and its mine rooms, and the altar were never reached. Both runs that crossed the lake did what the Lake Shore tells them: they left the light on the shore, landed on the Southern Shore in the dark, and were killed by the grue lair two moves later. Both examined the table, and the goal-seeker saw Room 8 in it at turn 56, but nothing in the reply suggests putting a hand on it. The table's point (one of the five in reach) was missed by every run. 8 of the round's 13 never-reached places are the table's.

**Recommendation:** Make the table ask to be touched. Have `examine table` end with the surface's pull on a hand (it is "angled toward you"), or have the image waver as if it wants to come closer. Let `touch`, `put hand on` and `press` the table read. The dark slope above the Southern Shore could also give one line, in the hint book's spirit, that this dark is thicker than the usual kind.

Evidence: goal-seeker-1 turn 56 ("You see a tiny room with rough walls. Chiseled crudely on one wall is the number "8"."); goal-seeker-1 turn 43 ("Oh, no! Dozens of lurking grues attack and devour you!"); goal-seeker-1 turn 114; explorer-1 turn 64 ("You see the interior of a huge temple rudely constructed of basalt blocks."); explorer-1 turn 66; explorer-1 turn 132 ("Oh, no! Dozens of lurking grues attack and devour you!")

### P2 · design · medium · 2/6

Both runs that reached the Scenic Vista took its torch and went straight into the lake from the Western Shore, and lost it. The warning is in the Lake Shore's description, but the Western Shore says nothing about the water, and these players were not holding the warning in mind when the torch was new in hand. Both reports list it as a frustration.

**Recommendation:** Echo the lake's warning on the Western Shore, briefly: the water that took the north shore's light will take this one too. Or put it in `examine torch`. The intended use, carrying the torch to the Damp Passage through the table, is easier to find if the torch says what it is for: a flame that keeps only on dry land.

Evidence: goal-seeker-1 turn 55 ("Taken."); goal-seeker-1 turn 58 ("The torch goes under with the rest, and goes out with a hiss, and will not be lit again by anything down here."); explorer-1 turn 63; explorer-1 turn 68

### P3 · design · high · 4/6

The Cliff Ledge reads as a trap, not a scene. Five of six runs climbed down the rope. The man appears only after several moves there, and in three short runs he never appeared: casual, newcomer and prose-reader each tried `open chest` and `climb up rope`, then quit or scrambled down feeling stranded. The prose-reader's last reply was "you cannot reach the top even with your best effort". The man appeared in the explorer's run only on its fifth move on the ledge, when it dropped the chest.

**Recommendation:** Give the ledge a cue on arrival, or on the first failed climb: a shadow at the cliff edge, the rope twitching, a chuckle from above. Then a visitor who stays one or two moves has a reason to. The man's timing can stay the original's if the failed climb itself says someone is up there.

Evidence: casual-1 turn 15; casual-1 turn 17 ("I've known strange people, but fighting a chest?"); prose-reader-1 turn 14 ("You try to climb the rope, but you cannot reach the top even with your best effort."); newcomer-1 turn 11; newcomer-1 turn 14; explorer-1 turn 20 ("At the edge of the cliff above you, a man appears.")

### P4 · design · medium · 1/6

After the chest was hauled up, `climb up rope` got the engine's default refusal ("You can't see any rope here."). Nothing on the ledge said to wait, so the explorer waited one move, scrambled down, and lost the man and the staff for good. It read the man as a trickster who had stranded it. This is faithful to MAN-SEEN, but the only sign that the man is coming back is his parting "I'll be back in a short while!", and nothing repeats it.

**Recommendation:** Answer the missing rope in the world's voice, saying it went up with the chest. While he is away, have the ledge's description or `wait` remind the visitor that he said he would be back. Leaving can still lose him, as the original does.

Evidence: explorer-1 turn 22 (""I'll be back in a short while!" are his last words."); explorer-1 turn 23; explorer-1 turn 24 ("You can't see any rope here."); explorer-1 turn 25

### P5 · world-bug · medium · 1/6

In the Engravings Room, with the sword carried, `read runes` was answered with the sword blade's runes instead of the carved north wall's. The wall's runes are what the room describes and what the puzzle points at.

**Recommendation:** Where the engraved wall stands, give it the word "runes" ahead of the sword's, or answer the tie with the room's runes. The sword's runes can still be had with `read sword` or `read runes on sword`.

Evidence: goal-seeker-1 turn 73 ("The runes run the length of the blade, cut fine and worn finer, in an Elvish hand that was never meant for you")

### P6 · world-bug · medium · 1/6

In the eastern-end Land of Shadow room, whose only ways out are east and southeast, the figure was said to be blocking the way to the northeast. Northeast is a wall there, and after the fight the explorer tried it and got "Towering walls of rock bar your way." The explorer then probed north and northeast four more times in a similar room, adding to the round's repetition.

**Recommendation:** Choose the blocked direction only from the room's real ways out, never from a direction whose exit is only a refusal.

Evidence: explorer-1 turn 72 ("A cloaked and hooded person ... is standing blocking the way to the northeast."); explorer-1 turn 83 ("Towering walls of rock bar your way."); explorer-1 turn 98

### P7 · engine-bug · medium · 1/6

The engine read `throw lamp south` as "(throw lamp)" and dropped the direction without a word, and the lamp smashed: an irreversible loss of the only light, from a line meant to throw it across the lake. For the rest of the run the broken lantern went back to the stair after each death, and the run ended in the Void after two more deaths in the dark.

**Recommendation:** Raise with Sprout: a reading that discards trailing words should not go ahead with a destructive action. Ask what it meant, or refuse. In the world, read `throw <thing> <direction>` and answer it, for example that the lake is too wide to throw across, before the lamp is lost.

Evidence: goal-seeker-1 turn 102 ("(throw lamp) The lamp smashes. The light is now out."); goal-seeker-1 turn 118 ("You can't turn that on."); goal-seeker-1 turn 124

### P8 · engine-bug · medium · 1/6

Compound lines got false answers. `take the lantern and politely ask the stair where it goes` was answered "You can't take the lamp.", although `get lamp` two lines later worked. `push the rock, then pull the sword` was answered "You can't see any such thing." at the Junction, where both the rock and the sword are in view. Neither reply says the sentence was not understood; each says something untrue about the world.

**Recommendation:** File in overstory-social/sprout: a line that splits on "and"/"then" into a clause it cannot read should report the clause as unread, not answer as if an object was missing or untakeable.

Evidence: parser-breaker-1 turn 1 ("You can't take the lamp."); parser-breaker-1 turn 4 ("Taken."); parser-breaker-1 turn 9 ("You can't see any such thing.")

### P9 · world-bug · low · 2/6

Words the world's own prose offers are not read. The Cliff Ledge says "you might be able to scramble down from here", and `scramble down` got "That sentence isn't one I recognize." `dig` in the quicksand room was not recognized either.

**Recommendation:** Read `scramble down` (and `scramble`, `climb down` with no object) on the ledge as `down`. Give `dig` a Zork-voiced refusal where there is sand or soft ground.

Evidence: newcomer-1 turn 13 ("That sentence isn't one I recognize."); goal-seeker-1 turn 23 ("That sentence isn't one I recognize.")

### P10 · language-gap · low · 1/6

With the ship passing, `hello, can you stop the ship?` was read as an order addressed to something called "hello" and answered "You can't see any such thing." It is a call across the water, which the intent says any `say <anything>` at the shore should be. The next line, `say hello to the sailor`, brought the ship in.

**Recommendation:** Log this against Sprout's addressee reading (caverns 2 friction 7). Where the world can, read a leading "hello," or "ahoy," at the shore as a call.

Evidence: newcomer-1 turn 16 ("You can't see any such thing."); newcomer-1 turn 17

### P11 · design · low · 3/6

The duel's turn toward the hood now works. Two of the three runs that fought took the hood on the first try after the waiting line. The explorer saw the line twice, struck on, and killed the figure. Afterwards it named the hood as the choice it had missed, which is the trap working and being understood. The kill run is the one that typed `attack figure` 10 times, the round's largest repetition.

**Recommendation:** Keep it. No change needed: the trap is legible and still a trap.

Evidence: goal-seeker-1 turn 17 ("recoil in horror at the sight of your own face"); parser-breaker-1 turn 19; explorer-1 turn 80 ("It lowers its sword, and its head with it, and waits; the hood hangs within reach of your hand."); explorer-1 turn 82 ("Its hood and its cloak go with it")

### P12 · design · low · 1/6

The Q4 refusal at the secret door ("you are not yet what he asked for; the door is open, but the way down is not yours today") reads to a player as a condition they could meet now. The explorer ended the run stuck, wishing to know what would make it worthy.

**Recommendation:** This resolves itself when Q4 is built in round 7. Until then, consider making the line say plainly that it is not a matter of anything still to be done here, so the stairs stop looking like a puzzle.

Evidence: explorer-1 turn 36 ("the door is open, but the way down is not yours today.")

### P13 · engine-bug · low · 2/6

Reach lists the Prison Cell as never reached, yet five deaths across two runs passed through it with the old man's full visit. The cell is entered and left within one turn, and the reach count misses it, so the metric understates what was played.

**Recommendation:** Raise with Sprout: reach should count a place a visitor was carried into within a turn. Until then, the author can read prison_cell in places.never as a measurement gap.

Evidence: goal-seeker-1 turn 43 ("You find yourself deep within the earth in a barren prison cell."); goal-seeker-1 turn 114; explorer-1 turn 121; explorer-1 turn 132

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.13 | 0.1 |
| reading.refusedRate | 0.01 | 0.01 |
| faults | 0 | 0 |
| repetition | 36 | 15 |
| reach.places.never | 2 | 13 |
| reach.objects.never | 174 | 413 |
| reach.verbs.never | 66 | 81 |
| reach.handlers.never | 9 | 22 |
| reach.passages.never | 557 | 1175 |
