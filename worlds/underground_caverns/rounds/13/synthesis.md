# Synthesis

**Legibility:** legible. Every player read the world as the intent describes it: Zork's white house over the Great Underground Empire, treasures carried up to the trophy case. Most also took in this slice's features: the mirror that moves you, the bat and the garlic, the basket and the narrow passage, the chimney's rule, the thief. The caretaker reading the intent welcomes came through: the casual player wondered who barred the trap door, the prose-reader dwelt on the tidied heaps, and the goal-seeker on the 'tidy someone'. The one consistent misreading comes from the players' instructions, not the world. Told this was 'a changed version', most players took Zork's own features (the Round Room's cave-ins, the barred trap door) for changes, and the author's added prose (the egg's clasp, the Hades notice, the death scatter) as the remix. Goals. The explorer reached theirs: the egg was in the case at turn 26 and stayed there through two deaths. The goal-seeker ('as high a score as you can') hit the 250-turn cap one room short of banking the painting, at 54 by the score at turn 222, plus the trunk's 5 in the case at turn 243. Two troll deaths, the thief's robbery and a full round trip for each chimney load stood in the way. The newcomer ('find treasure and keep it safe') partly reached it: the painting went into the case at turn 104. They judged it a failure because the thief took the trident, jade and bracelet at turn 78 and they then got lost in the maze chasing him. Models. Five runs were opus and only the casual run was fable, so no run plays the same persona on two models. The fable casual run went straight at the troll, solved the echo on its first guess and was still curious at its 30-turn cap. The five opus runs played long (135 to 250 turns) and methodically: they mapped by dropping things, ferried treasure, and the parser-breaker deliberately gave the lamp to the thief. The difference is as much persona and turn cap as model, and one run can't separate them.

- casual-1 (partly): A white house with a trap door down into caves: grab the lamp and sword, fight the troll, hunt treasure like the platinum bar. The underground seems damaged (cave-ins), and someone barred the trap door behind them.
- explorer-1 (yes): A house over an underground empire (dam, Loud Room, mirrors, a coal mine with bats and gas). Carry its treasures back to the trophy case, with twists such as an egg only a thief's fingers can open.
- goal-seeker-1 (yes): Zork's house and empire with changes: collect treasures for the trophy case. A tidy someone after death, a trap door barred each trip, a mirror that swaps lookalike rooms, Hades chalked shut, and a chimney that takes you, your lamp and one thing.
- newcomer-1 (yes): A white house with a trophy case over a cave country full of valuables. Finding treasure is easy; getting it home past a thief, a bat, a narrow chimney and an identical-roomed mine is the hard part.
- parser-breaker-1 (yes): The old white house over the Great Underground Empire: treasures to the case. Drain the dam, rub mirrors, chimney shortcut, a bat in the coal mine, old doors shut for good. Mostly about deciding what to carry and how many trips to make.
- prose-reader-1 (yes): Zork's house and empire, centred on a working coal mine whose puzzle is getting things down by some route other than yourself. Written with dry affection for old, tired, stubborn things, with a tidy someone in the background.

## Points

### P1 · design · high · 3/6

The coal mine's hardest moment is the Timber Room's narrow passage, and its refusal gives nothing away. 'You cannot fit through this passage with that load.' comes back the same whatever is in hand, the lamp alone included. Three players dropped things one by one until they were down to the lantern and still refused. Each then went west in the dark and found the Drafty Room pitch black. Nothing they saw says the lamp counts, or that the garlic and the matchbook would pass. The explorer dropped the matchbook as dead weight at turn 190, though it is the one light that could have gone through. All three treated the passage as a wall to strip down for, not as the basket puzzle: send the light down the shaft.

**Recommendation:** Do for the passage what round 12 did for the chimney (P9): keep Zork's line and go on in its voice, naming what is in hand ('...with that load, which is the brass lantern') and that the passage takes a body and very little else. The rule stays Zork's. Saying it shows the lamp is the problem, which points at the basket, and leaves room to find the garlic and matchbook exception. Re-run basket.json with the named refusal.

Evidence: explorer-1 turn 189 ("You cannot fit through this passage with that load."); explorer-1 turn 190 ("drop sword, platinum bar, bracelet, matchbook"); explorer-1 turn 193 ("You cannot fit through this passage with that load. (carrying only the lantern)"); explorer-1 turn 195 ("You have moved into a dark place."); goal-seeker-1 turn 132 ("drop all except lantern, then: You cannot fit through this passage with that load."); goal-seeker-1 turn 134 ("It is pitch black. You are likely to be eaten by a grue."); prose-reader-1 turn 116 ("take lantern / go west: You cannot fit through this passage with that load.")

### P2 · design · high · 3/6

Losing the only lamp ended three runs. Nobody fetched the torch this round, so the brass lantern was every player's only light. The explorer left it in the Timber Room and was eaten one dark room on (turn 221). The prose-reader lowered it in the basket and died on the next step (turns 129 to 130). The parser-breaker gave it to the thief (turn 240). The rules are Zork's: the lamp goes back to the Living Room only if it was carried at death, and walking dark to dark is death four times in five. But all three runs stopped soon after, with the underground closed for good, and all three rated difficulty 'too hard' or blamed losing the light.

**Recommendation:** Keep Zork's rules for the lamp and the grue. Fixing P1 removes most of the cause, since two of the three losses came from misreading the passage. Then make the basket's job readable before the player commits. A line on the shaft or the Drafty Room's draught saying the room below is dark and that a light would have to go down too would turn 'lower the only lamp' from a trap into a choice. It would also point toward the torch.

Evidence: explorer-1 turn 221 ("Oh, no! A lurking grue slithered into the room and devoured you!"); explorer-1 turn 236 ("went back down the trap door in the dark and died again"); prose-reader-1 turn 129 ("The basket is lowered to the bottom of the shaft. It is now pitch black."); prose-reader-1 turn 130 ("Oh, no! A lurking grue slithered into the room and devoured you!"); parser-breaker-1 turn 240 ("The thief places the brass lantern in his bag and thanks you politely."); parser-breaker-1 turn 241 ("Oh, no! A lurking grue slithered into the room and devoured you!")

### P3 · design · medium · 3/6

The thief stripped carried treasures in the mine in one pass in three runs. The newcomer lost the trident, jade and bracelet; the goal-seeker the bracelet, figurine and trident; the parser-breaker the bracelet. Nobody went after him or reached his lair, so none of it came back. The newcomer, whose goal was keeping treasure safe, called it 'the opposite of keeping them safe'. One of round 12's watch items did land: the newcomer worked out on their own that someone had moved the garlic left in the Studio. That is the conclusion the intent wants players to reach without being told.

**Recommendation:** Keep the robbing as Zork has it. Watch whether anyone follows him to the Treasure Room. If players keep reading the loss as final, the director could aim a goal at the lair, which has gone unreached for several rounds.

Evidence: newcomer-1 turn 78 ("A seedy-looking individual with a large bag just wandered through the room. On the way through, he quietly abstracted some valuables from your possession"); goal-seeker-1 turn 204 ("The thief just left, still carrying his large bag. You may not have noticed that he robbed you blind first."); parser-breaker-1 turn 236 ("The thief stole my sapphire bracelet at Ladder Top"); newcomer-1 turn 118 ("The garlic I'd left in the Studio turned up in the maze. Someone had moved it.")

### P4 · design · medium · 2/6

The slide never worked as a short way home. Two players slid to the Cellar (newcomer at turn 92, goal-seeker at turn 231). Both found the trap door 'locked from above' and walked round by the crawlway and the chimney. Climbing the chimney re-arms the barring, so each player's next descent was barred again (newcomer turn 108, goal-seeker turn 245). The intent's claim that 'the coal mine's treasures reach the case by the slide and the stairs' only holds for a player who comes up some other way than the chimney (the grating, the Strange Passage, prayer or the canyon). Nobody did, so the slide-and-stairs loop never opened. The goal-seeker named it as the main drain on a 250-turn run.

**Recommendation:** Keep the TOUCHBIT behaviour, which is Zork's. Correct the intent's 'slide is a short way home' to say it needs a non-chimney return first. If the director wants the loop found, a goal or a hint that points at the grating or the Cyclops' passage is the faithful lever.

Evidence: newcomer-1 turn 92 ("You tumble down the slide...."); newcomer-1 turn 108 ("The trap door crashes shut, and you hear someone barring it."); goal-seeker-1 turn 232 ("The door is locked from above."); goal-seeker-1 turn 245 ("Even after I got out by the chimney, the trap door slammed and got barred again, so every treasure meant a full round trip.")

### P5 · design · low · 5/6

Five players complained that the coal mine's rooms are identical and that its exits don't lead back the way they came. This is Zork's design, and the classic counter worked: the prose-reader and the parser-breaker each mapped it by dropping things. It cost a lot of turns (the parser-breaker says about 40). It is also most of why the unread rate rose: the parser-breaker's unread list is dominated by 'You can't go that way.' in the mine.

**Recommendation:** Keep. It is Zork's maze, and dropping things to mark rooms worked for those who tried it.

Evidence: explorer-1 turn 127 ("rooms lead back into themselves, and every room has the same description"); newcomer-1 turn 55 ("Going east in the coal mine brought me back to the same room."); prose-reader-1 turn 64 ("Exits don't run both ways"); parser-breaker-1 turn 215 ("I spent around 40 turns trying directions before I dropped the bracelet as a marker"); goal-seeker-1 turn 157 ("Found my way out of the nondescript coal-mine rooms")

### P6 · language-gap · medium · 2/6

When the parser meets a word it doesn't know, it blames the object. Adding an adverb or a stray word to a line about something in plain sight gets 'You can't see any such thing.': 'kick the mailbox gently', 'put leaflet back in mailbox and close it', 'eat the garlic raw', 'go up the trap door again', 'look at myself in the mirror'. The engine files each as `not_here`, which tells the player the thing is missing when the trouble is the word. Zork answers 'I don't know the word "gently".' The parser-breaker drew the wrong lesson ('the parser acts like the object isn't there'). The newcomer's 'keep going around the house' got the other generic refusal.

**Recommendation:** Log in friction.md and raise an issue with Sprout. When matching fails because of a word nobody declared, the parser should say which word, Zork's 'I don't know the word', rather than falling through to not_here. Don't work round it in the world.

Evidence: parser-breaker-1 turn 1 ("kick the mailbox gently -> You can't see any such thing."); parser-breaker-1 turn 4 ("put leaflet back in mailbox and close it -> You can't see any such thing."); parser-breaker-1 turn 13 ("eat the garlic raw -> You can't see any such thing."); parser-breaker-1 turn 100 ("look at myself in the mirror -> You can't see any such thing."); newcomer-1 turn 4 ("keep going around the house -> That sentence isn't one I recognize.")

### P7 · world-bug · low · 2/6

Two things the world's own prose invites can't be acted on. The Tiny Cave's Hades refusal describes 'a slab of rock' with a chalked notice, and the parser-breaker's 'move the slab' got 'You can't see any such thing.' At the Shaft Room, 'look down shaft' got 'That sentence isn't one I recognize.' The intent has `look down` showing the drop at the Dome, the chasm and the canyon, and the shaft is exactly that kind of drop. This is round 12's 'names given back' problem again, in the new v7 prose.

**Recommendation:** Make the slab and its notice things in the Tiny Cave that can be examined and read and won't move, answered in the notice's voice. Give LOOK DOWN (and LOOK IN) the shaft an answer, ideally where the basket is, which is what the prose-reader wanted. Add both to the named_back.json test.

Evidence: parser-breaker-1 turn 107 ("move the slab -> You can't see any such thing."); prose-reader-1 turn 53 ("look down shaft -> That sentence isn't one I recognize.")

### P8 · design · low · 5/6

The way into the mine is legible, which was round 13's first question. Five of six reached Mirror Room 2 and rubbed or touched the mirror at once. The newcomer and the prose-reader looked into it first and got 'an ugly person staring back'. All five then went on through Mirror Room 1. The newcomer also used the Atlantis side, down the Cave to the trident. No one broke the mirror. The bat-and-garlic link also landed. After being carried off, the newcomer, the prose-reader and the goal-seeker each took the garlic and went on, and the prose-reader then saw the bat 'holding his nose'. The two who stayed frustrated had the garlic in a sack or had eaten it, both of which are Zork's rules.

**Recommendation:** Keep the mirror, the Cave and the bat as built.

Evidence: newcomer-1 turn 26 ("There is a rumble from deep within the earth and the room shakes."); prose-reader-1 turn 25 ("rub mirror"); explorer-1 turn 106 ("I rubbed the mirror, the room shook and I was in a different Mirror Room."); goal-seeker-1 turn 185 ("rub mirror"); newcomer-1 turn 31 ("On the shore lies Poseidon's own crystal trident."); prose-reader-1 turn 32 ("Garlic in an open sack didn't protect me."); prose-reader-1 turn 49 ("a large vampire bat who is obviously deranged and holding his nose"); parser-breaker-1 turn 170 ("Eating the garlic earlier didn't protect me")

### P9 · design · medium · 6/6

v7's puzzle went unsolved. Nobody fetched the torch, lit the Drafty Room, worked the machine, made the diamond, or carried a flame into the Gas Room. The prose-reader came nearest: coal into the basket, the basket lowered and raised, then death at turn 130. The explorer sent the coal down without a light (turn 208). reach.places.never rose from 32 to 40 and reach.passages.never from 1316 to 1604. Most of that is the 25 new rooms and their prose waiting unseen behind the passage (P1) and the light (P2). Of v7's treasures only the jade and the bracelet were picked up, and all three that were carried out (the newcomer's two, the goal-seeker's two, the parser-breaker's bracelet) went to the thief.

**Recommendation:** Fix P1 first. Then it is the director's call whether round 14 sends one goal at the mine ('make something of the coal' or 'get the diamond into the case'), as round 12's P12 suggested for the other unreached corners. The basket's 'There's no room.' at turn 128 is correct (coal 20, lantern 15 and bracelet 10 leave no room for the jade) and needs no change.

Evidence: prose-reader-1 turn 100 ("put coal in basket"); prose-reader-1 turn 128 ("put lantern, bracelet and figurine in basket -> There's no room."); explorer-1 turn 208 ("The basket is lowered to the bottom of the shaft."); goal-seeker-1 turn 130 ("so I had to work out the basket/light problem without a second light source")

### P10 · design · low · 5/6

Round 12's changes were heard and quoted. Four players quoted the chimney's refusal naming the load and the death line's account of where things went. 'Your load is too heavy, the sword not least of it.' was quoted by three as the model of a helpful refusal (by the explorer as 'written for me rather than generic'). The Hades notice ('CLOSED UNTIL FURTHER NOTICE. Something on the far side of the notice laughs.') was two players' best line. The new v7 examine prose (the bat, the ladder, the coal's hint, the indifferent wall) earned the prose-reader's only 5.

**Recommendation:** Keep all of it. The named-load pattern is the one P1 asks to apply to the narrow passage.

Evidence: goal-seeker-1 turn 239 ("The chimney has room for you, your lamp and one thing more, and not an inch besides."); newcomer-1 turn 98 ("You can't get up there with what you're carrying, which is the brown sack, the brass lantern..."); parser-breaker-1 turn 44 ("somebody tidy has put the lamp back in the living room"); explorer-1 turn 182 ("Your load is too heavy, the sword not least of it."); goal-seeker-1 turn 187 ("Across the third step somebody has laid a slab of rock, and on it, chalked in a neat hand, CLOSED UNTIL FURTHER NOTICE."); prose-reader-1 turn 51 ("He is a large vampire bat, as bats go, and he goes")

### P11 · design · low · 2/6

The troll's fight read as luck again. The goal-seeker died to him twice (turns 40 and 75) and spent turns into the 90s gathering scattered gear. They wished 'skill or preparation mattered'. The casual player typed the same attack six times. The newcomer and the prose-reader each killed him in two blows. This is Zork's melee table, kept by the director's choice.

**Recommendation:** Keep, as the director has ruled. Nothing new beyond earlier rounds.

Evidence: goal-seeker-1 turn 40 ("Troll took my head off after three fair exchanges. The fight felt like pure luck."); goal-seeker-1 turn 75 ("Second troll death."); casual-1 turn 18 ("The troll fight dragged on for six swings.")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.09 | 0.15 |
| reading.refusedRate | 0.02 | 0.01 |
| faults | 0 | 0 |
| repetition | 31 | 29 |
| reach.places.never | 32 | 40 |
| reach.objects.never | 406 | 530 |
| reach.verbs.never | 60 | 70 |
| reach.handlers.never | 63 | 85 |
| reach.passages.never | 1316 | 1604 |
