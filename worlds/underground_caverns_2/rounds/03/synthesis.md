# Synthesis

**Legibility:** legible. Every run took it for a Zork II port with the Wizard as a roaming presence, and the long runs found the intended arc: riddle, well, wonderland tea room, robot. Explorer and goal-seeker-1 named it a first section with the rest to come, which the rockfalls are meant to say. Opus read the puzzles the way the intent frames them, as working out what each thing is for. No player could see the friction log, which the intent counts as half the product. The short runs saw only the opening and so matched it only in part.

- casual-1 (partly): A retelling of Zork II with a wand-waving Wizard, a Carousel Room and a topiary garden with a unicorn. It had no goal.
- newcomer-1 (partly): A Zork-sequel cave game in which a wizard conjures illusions that are not real.
- parser-breaker-1 (partly): A faithful recreation of the start of Zork II: barrow, ravine, garden, a cursing Wizard and a unicorn.
- prose-reader-1 (partly): A Zork II-style cavern whose wry new lines sit beside the classic text, with the Wizard and unicorn as wandering presences.
- explorer-1 (yes): A Zork II-style adventure: riddle door, magic well, mad tea party and a pestering Wizard. The routes blocked "for now" mark it as one section of a larger game.
- goal-seeker-1 (yes): A first slice of a Zork II-style adventure: barrow, garden, carousel, riddle, magic well, tea room and machine room, with a spellcasting Wizard.
- goal-seeker-1-opus (yes): Treasure-hunting under a barrow, where most puzzles are about working out what a thing is for (water raises the bucket, the robot takes orders, the flask magnifies), with a meddling Wizard.

## Points

### P1 · design · high · 2/7

Both long runs that died were then stranded below the well, and that ended their play. Each had ridden up with the water in the bucket and left it at the Top of Well. After the death they came back to the Circular Room and found it empty. The way in is to type "wait for the bucket", and the wait line spells it out word for word, but neither player typed it. Plain waits, pulling the rope and climbing it got them nowhere, and the round's metrics list the well_bottom.waited passage as never reached. By the intent's count (a command each, three to a wait), explorer had used about 104 of the bucket's hundred by turn 150 counted from the rise at turn 68, so the bucket was due down and never came. Either the death at turn 79 reset the count or the count is off.

**Recommendation:** Players read "you could wait for the bucket" as description, not as a command, so do not rely on it. Make the second plain "wait" in a row at the bottom do the long wait. Or put it in Zork's parenthetical-hint form: "(WAIT FOR THE BUCKET will pass the time until it comes down.)". Also check whether a death resets or pauses the bucket's evaporation count. Explorer's last waits should have brought it down.

Evidence: goal-seeker-1 turn 122 ("you could wait for the bucket, and it would be a long wait."); goal-seeker-1 turn 123 ("You pull on the rope. It is taut, and stays taut"); goal-seeker-1 turn 127; explorer-1 turn 100 ("The bucket is not here to get into."); explorer-1 turn 102; explorer-1 turn 150 ("Time passes... The rope stays taut, and the bucket stays up wherever it has gone."); explorer-1 turn 68 ("The bucket rises and comes to a stop.")

### P2 · design · medium · 1/7

The cage trap killed goal-seeker-1 with nothing to act on. The robot had been left in the Machine Room, so the closet showed none of the trap's tells. "examine cage" repeats the two-line room description. The one plain "wait" uses three of the gas's six moves, so the visitor gets four commands, not six. In the same spot opus sent the robot south first, saw "The robot is in here with you, bent nearly double, and humming" and was saved. So the tell works when it fires, but a player who has not sent the robot south first gets no warning at all.

**Recommendation:** Give the cage a close-up of its own: bars too heavy for a person to lift, and the gas visible. While the visitor is caged, make "wait" one move rather than three, so the six moves the intent promises are real. If the robot is elsewhere and the player calls to it, answer in voice that it is not here to hear (see P3).

Evidence: goal-seeker-1 turn 82 ("As you reach for the sphere, a solid steel cage falls from the ceiling to entrap you."); goal-seeker-1 turn 85 ("You are trapped inside a solid steel cage."); goal-seeker-1 turn 86 ("Time passes...and you die from some obscure poisoning."); goal-seeker-1-opus turn 75 ("The robot is in here with you, bent nearly double, and humming."); goal-seeker-1-opus turn 76 ("The cage shakes and is hurled across the room.")

### P3 · engine-bug · medium · 2/7

An order to the robot gets "That sentence isn't one I recognize." when the robot is not in the room, or when the verb is one it lacks. In goal-seeker-1, "robot, push square button" had worked word for word three turns earlier while the robot stood by. From inside the cage the same form was refused as unparseable, which told a player in a dying situation that the syntax was wrong. "robot, give sphere to me" was refused the same way.

**Recommendation:** When the addressee is not in scope, the parser should answer that it is not here, not fall through to "unknown". If Sprout cannot resolve an absent addressee, file it as a Sprout issue. In the world, give the robot "give X to me" / "give me X" (the robot already takes and drops).

Evidence: goal-seeker-1 turn 80 (""Whirr, buzz, click!""); goal-seeker-1 turn 84 ("That sentence isn't one I recognize."); goal-seeker-1-opus turn 73 ("That sentence isn't one I recognize.")

### P4 · world-bug · medium · 3/7

The Fantasize copy of ZORK I answers to "copy" and to nothing else. "take zork", "examine zork i" and "examine copy of ZORK I" all get the plain "You can't see any such thing." That is the exact confusion round 2's P5 fixed for the other illusions. The prose-reader logged it as an item the room listed and would not let it examine.

**Recommendation:** Give the ZORK I illusion the words zork, i, book and "copy of zork i". Check that every one of the eight illusions answers to each word its listing line shows.

Evidence: goal-seeker-1 turn 8 ("You can't see any such thing."); goal-seeker-1-opus turn 8 ("You can't see any such thing."); goal-seeker-1-opus turn 9 ("Your hand closes on nothing, and your eye on less."); prose-reader-1 turn 9 ("You can't see any such thing.")

### P5 · engine-bug · medium · 2/7

When a noun matches more than one thing equally well, the engine picks one at random (a warning reads "drawn: the line read N ways that tied") instead of asking which was meant. "read paper" just after taking the robot's green paper read the newspaper. "examine cakes" described one cake out of four.

**Recommendation:** File it with Sprout: a tie should ask "Which do you mean, the newspaper or the green piece of paper?", and a plural noun should apply to every match. In the world, call the newspaper's paper word the weaker match, so the newly taken green paper wins.

Evidence: goal-seeker-1 turn 73 ("(the newspaper)"); goal-seeker-1-opus turn 54 ("(the cake frosted with red letters)"); goal-seeker-1-opus turn 96

### P6 · world-bug · medium · 2/7

The unicorn's comings and goings land on the wrong beat. On "enter gazebo", casual saw "There is a beautiful unicorn eating roses here. Around his neck is ... a tiny key." printed ahead of the Gazebo heading, so "here" read as the gazebo. The next "take key" got "You can't see any such thing." and casual quit on that stalled lead. goal-seeker-1 hit the same parser refusal for the key, while opus, with the unicorn actually present, got the in-voice snub. The sword gives no help: it says "very brightly" and "faint blue" in the same beat as the unicorn moves.

**Recommendation:** Report the unicorn's arrival in the room the visitor ends the move in, after the move, never ahead of a new room heading. Give the key and the unicorn a stand-in that stays in scope across the garden, so that "take key" when the unicorn has just gone gets an in-voice line ("The unicorn is not here, and the key is round its neck.") rather than a parser failure.

Evidence: casual-1 turn 18 ("There is a beautiful unicorn eating roses here."); casual-1 turn 19 ("You can't see any such thing."); goal-seeker-1 turn 12 ("Your sword has begun to glow very brightly. / Your sword is glowing with a faint blue glow."); goal-seeker-1 turn 19 ("You can't see any such thing."); goal-seeker-1-opus turn 133 ("The unicorn, unsurprised by this evidence that you are indeed the uncouth sort of vagabond...")

### P7 · design · medium · 1/7

The quarter can be finished, and opus finished it without being told. "score" at turn 148 gave 85 of 400: the riddle, the well, all five treasures, the robot, the carousel stopped, and the Wizard met twice and survived. Nothing in the world says the quarter is done. Opus spent its last 30 turns trying the unicorn, walking back to the barrow and looking for somewhere to put its treasures. It wished for "where treasures are meant to go".

**Recommendation:** When the 85 is reached, give it a closing beat in Zork's voice: the demon's voice, or a line on the score. Until the Trophy Room exists, it should tell the visitor that this much of the empire has given up what it has. Without it, goal-seekers will keep hunting the key and the rockfalls.

Evidence: goal-seeker-1-opus turn 148 ("Your score is 85 (total of 400 points), in 138 moves."); goal-seeker-1-opus turn 133; goal-seeker-1-opus turn 147

### P8 · design · medium · 4/7

The four short-play personas (casual, newcomer, parser-breaker, prose-reader) all quit bored within 13 to 21 turns, before any puzzle. The Wizard's certain first call now lands for every run by turn 4, and the illusion jokes delighted them. What none of them had was a goal. Newcomer quit at the Carousel Room's "eight identical passages". Casual quit when the key would not come.

**Recommendation:** Zork II gives no stated goal either, so keep the fidelity and add a pull. Make the newspaper (which every short run read) point at the empire's treasures or at the Wizard. Or have the Wizard's first visit leave a line that implies something worth taking. Do not add a tutorial.

Evidence: casual-1 turn 19; newcomer-1 turn 13 ("Eight identical passages leave the room."); parser-breaker-1 turn 21; prose-reader-1 turn 14

### P9 · design · low · 3/7

On the Wizard's first call, the sword says "begun to glow very brightly" and then "no longer glowing" in the same beat, after he has already vanished. Players read it as an unexplained flicker, not as a warning.

**Recommendation:** Have the sword glow on the beat the Wizard appears, before he speaks, or one beat ahead of him as I-SWORD would for an adjacent room. When he is gone within the same beat, leave out the "no longer glowing" line.

Evidence: casual-1 turn 4 ("Your sword has begun to glow very brightly. / Your sword is no longer glowing."); newcomer-1 turn 4; prose-reader-1 turn 4

### P10 · design · low · 2/7

North from the North End of Garden leads to the Dark Tunnel, and two players filed it as an exit that does not match the room text. This is Zork's own map: "a break in the hedge is almost overgrown to the north". The prose does not tie it to the tunnel the player came through.

**Recommendation:** Add a few words, in the house's additional voice, saying the break in the hedge goes back toward the dark tunnel.

Evidence: goal-seeker-1 turn 17; explorer-1 turn 26

### P11 · world-bug · low · 1/7

The well's water handling is uneven. At the Top of Well, "fill teapot with water" got "There's nothing here to fill it with" while the bucket listed "A quantity of water", yet "take water" filled the teapot. On the same trip the orange cake crumbled on "get in bucket", not on the step out of the Tea Room, with no word of why.

**Recommendation:** Make the water in the bucket a fill source. Decide where the edge of the wonderland is, and crumble the cakes there, with a line saying why.

Evidence: goal-seeker-1-opus turn 103 ("The cake frosted with orange letters has crumbled to dust."); goal-seeker-1-opus turn 104 ("There's nothing here to fill it with."); goal-seeker-1-opus turn 105 ("The teapot is now full of water.")

### P12 · world-bug · low · 3/7

A few phrasings a player would reasonably try fail as parser refusals: answer "a well" (hollow laugh), "cross the bridge south", and "smell the roses" in the gazebo, which stands "in the center of a rosebed" but has no roses in scope.

**Recommendation:** Accept "a well" as the riddle's answer. Give the gazebo the garden's roses. Make "cross bridge" move the visitor across, and log the trailing-direction form in friction.md if Sprout cannot take it.

Evidence: goal-seeker-1-opus turn 14 ("A hollow laugh seems to come from the stone door."); newcomer-1 turn 3 ("You can't see any such thing."); parser-breaker-1 turn 19 ("You can't see any such thing.")

### P13 · design · low · 3/7

Two of the round 2.5 changes held in play. All three long runs found the Riddle Room this round; in round 2 one run never did. The carousel's "thrown out enough times" line was seen and used. Explorer read the warning that the bucket was straining and climbed in on that move. The carousel still costs turns: explorer and opus both named it a slog.

**Recommendation:** Keep both. Consider having the carousel tell after two throw-outs rather than three.

Evidence: goal-seeker-1 turn 59 ("three of them end in rock, and one, on the southeast side, climbs."); explorer-1 turn 67 ("It has not gone yet."); explorer-1 turn 68; goal-seeker-1-opus turn 111

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.13 | 0.08 |
| reading.refusedRate | 0.01 | 0.01 |
| faults | 0 | 0 |
| repetition | 17 | 13 |
| reach.places.never | 7 | 2 |
| reach.objects.never | 200 | 241 |
| reach.verbs.never | 68 | 65 |
| reach.handlers.never | 41 | 21 |
| reach.passages.never | 670 | 694 |
