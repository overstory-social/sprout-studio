# Synthesis

**Legibility:** legible. Every run took the world for a Zork II homage, and the five that got past the first garden saw it as a treasure hunt south of the ravine with the Wizard of Frobozz as a nuisance. That matches the intent: a faithful port of two quarters with a wandering spellcaster. The long runs, both opus, also read the puzzle chain much as the intent's arc lays it out: riddle, bucket, cakes, robot and carousel, dragon on the ice, the princess's key, the Bank's walls. The short runs (casual, newcomer, parser-breaker, prose-reader) understood the setting and the Wizard but not what to do. That shortfall is P5, not a misreading of what the world is.

- explorer-1 (yes): A Zork II-style adventure from the barrow across the ravine: gardens, a carousel, a riddle, a bank with a magic vault, a dragon and an ice room. A bumbling Wizard curses you, and the aim seems to be collecting the treasures he took.
- goal-seeker-1 (yes): A Zork II-style cave where the Wizard has scattered the Empire's treasures south of the ravine and tricks you with illusions and curses, with a dragon, a carousel and the Bank's vault puzzle.
- casual-1 (partly): A Zork II-style cave-and-garden adventure: a Wizard who curses you, treasures south of a ravine, a gazebo and a unicorn. No goal felt clear.
- newcomer-1 (partly): A cave adventure from a barrow with treasures south of a ravine, a meddling wizard, a dragon and a disorienting room. They never found a goal.
- parser-breaker-1 (partly): A Zork-flavoured cave crawl where a Wizard keeps appearing to cast spells: illusory objects, dropped things, a glowing sword.
- prose-reader-1 (partly): A cave crawl in the Colossal Cave tradition, with a Wizard whose words conjure things that are not there and who says the treasures lie south of the ravine.
- explorer-1-opus (yes): Zork II, The Wizard of Frobozz, retold with extra descriptive warmth: a cranky exiled wizard casting one-word spells, and the Empire's treasures behind the classic puzzles (riddle, bucket, cakes, robot, carousel, dragon, the bank that won't let its property leave).
- goal-seeker-1-opus (yes): A treasure hunt south of the ravine. The exiled Wizard ran off with the Empire's valuables and harries you with F-spells, and you work through the riddle, the bucket, the cakes, the robot, the dragon baited to the ice, the princess and unicorn, and the bank you walk through the walls of.

## Points

### P1 · world-bug · high · 2/8

The Gnome of Zurich takes the treasure and gives nothing back. Both runs that met him in the Small Room typed "put <treasure> in box". The world answered "Done." and the treasure went into his box. He then went on being "increasingly impatient" and left with the box, and no way out ever opened. The intent's "takes a treasure for the way out" never happens, so the treasure is lost and the visitor is shut in. This one bug ended both sonnet runs that got furthest: goal-seeker-1 quit with 197 of its 300 turns unused.

**Recommendation:** Treat "put <treasure> in box" and "give <treasure> to gnome" as Zork's payment. The gnome boxes the treasure, says he will show the visitor out, and the visitor is moved out of the Bank (Zork sends them to the Bank Entrance). Add both commands to tests/walkthrough.json so the exit through the gnome is played every round.

Evidence: explorer-1 turn 119 ("put portrait in box -> "Done.""); explorer-1 turn 120 ("put necklace in box -> "Done.""); explorer-1 turn 125 (""I may have another customer waiting; you'll just have to fend for yourself, I'm afraid." He disappears, leaving you alone."); goal-seeker-1 turn 82 ("put portrait in box -> "Done.""); goal-seeker-1 turn 86 ("The gnome looks impatient ... He disappears, leaving you alone.")

### P2 · design · high · 4/8

No run got loot out of the Bank, and all four that reached it ended in the Small Room or the Vault. Nothing says which wall still leads back, or for how long. The Small Room's description stays "There are no exits from this room." while its south wall is open. The twelve-move window is used up by four waits, and both sonnet runs spent it on waits before "Curtain Door Closed.", a line that does not say what has shut. A bare "walk through wall" picks one of the four walls at random: explorer-1 drew west and hit its head, explorer-1-opus drew south and got through. The opus runs did learn to walk through walls, but neither worked out the rule that would get the loot into a viewing room before the turn cap.

**Recommendation:** While the way back is open, add a line to the room's description in the Bank's own manner, naming the wall, as the Depository names its curtain, e.g. "The south wall shimmers faintly." Drop the line when the curtain closes. When the visitor says "walk through wall" without naming one, choose the open wall rather than drawing among four. Consider making "Curtain Door Closed" read as the way back going dark.

Evidence: explorer-1 turn 113 ("You hear a faint voice say "Curtain Door Closed." (seven typed lines after entering, three of them waits)"); explorer-1 turn 114 ("go through wall -> (the west wall) You hit your head ... [drawn: the line read 4 ways that tied]"); goal-seeker-1 turn 72 ("Curtain Door Closed, seven lines after entering at turn 65"); explorer-1-opus turn 259 ("walk through wall -> (the south wall) ... Safety Depository [drawn among 4]"); explorer-1-opus turn 300 ("walk through west wall -> You hit your head (ended in the Small Room holding the portrait and the bills)"); goal-seeker-1-opus turn 300 ("walk through south wall -> You hit your head (in the Vault; the north wall had worked at turn 291)")

### P3 · world-bug · medium · 2/8

Told to take the red sphere, the robot answers "Whirr, buzz, click!" and the sphere vanishes. It drops out of the room's listing, the robot's close-up never mentions holding it, and "robot, give me the sphere" either does nothing or gets "I don't have that". Only "robot, drop sphere" brought it back, in one run. Both runs that tried this were confused by it, and explorer-1-opus left the sphere behind for good.

**Recommendation:** List what the robot carries on its close-up and in the room ("The robot is holding a red crystal sphere."). Make "robot, give X to me" and "robot, give me X" hand it over. Check that the robot's own scope resolves "red sphere" to the sphere it holds. If Zork's SPHERE-FCN drops the cage on a robot that reaches for the sphere, port that instead and say so.

Evidence: explorer-1-opus turn 177 ("robot, take red sphere -> "Whirr, buzz, click!" (the next look no longer lists the sphere)"); explorer-1-opus turn 182 ("robot, give red sphere to me -> "Click! I don't have that. Buzz! Whirr!""); explorer-1-opus turn 184 ("find red sphere -> You can't find the red crystal sphere."); goal-seeker-1-opus turn 174 ("robot, give sphere to me -> "Whirr, buzz, click!" and nothing changes hands"); goal-seeker-1-opus turn 190 ("robot, drop sphere -> the sphere is back on the floor")

### P4 · world-bug · low · 1/8

"robot, go north" typed while the robot stood in the next room got the parser's "That sentence isn't one I recognize." The intent says the robot's stand-in answers, in voice, an order given while it is in another room. "robot, inventory" got the same unknown-sentence reply with the robot present.

**Recommendation:** Have the stand-in catch "go" orders as it catches the others, saying where the robot is. Give the robot an answer for "inventory" that lists what it holds, which also helps with P3. If the stand-in cannot catch an order because the addressee is out of scope, log that in friction.md as a language gap.

Evidence: goal-seeker-1-opus turn 186 ("robot, go north -> That sentence isn't one I recognize. (robot in the Dingy Closet, player in the Machine Room)"); goal-seeker-1-opus turn 177 ("robot, inventory -> That sentence isn't one I recognize.")

### P5 · design · medium · 3/8

Round 4's hook landed. Six of the eight runs quoted or acted on the Wizard's "It is all south of the ravine...". Even so, all three short sonnet runs quit as bored at or just after the Carousel Room, between their 11th and 35th typed lines, saying they had seen no goal. The hook says where the treasure is but not what to do there. The Carousel is the first thing south of the garden, and its spin reads as a chore rather than a puzzle.

**Recommendation:** Keep the hook, and give the walk from the garden to the Carousel something to do as well as somewhere to go. For example, the newspaper or the hook could name a treasure as a concrete thing to find, such as the pearl the Riddle Room keeps. The Carousel's first spin could say plainly that the room is turning, so it reads as a mechanism rather than noise. This is a judgement for the author; the run count backs a change, not a particular fix.

Evidence: casual-1 turn 18 ("go west -> Carousel Room; quits: "felt like a chore. I had seen no puzzle or goal that pulled me in""); newcomer-1 turn 11 ("You're not sure which direction is which. ... (quits at turn 16: "no clear goal")"); parser-breaker-1 turn 34 ("southwest -> Carousel Room; quits: "nothing pulled me further"")

### P6 · design · medium · 2/8

The carry limit cost two runs dearly, and gave no warning either time. Zork's random "You're holding too many things already!" stopped goal-seeker-1-opus from picking up the blue cake before it ate the Eat-Me cake. That stranded it in the Posts Room. After twelve turns of trying it typed "undo", then ate the red cake and died, with its things scattered. The same refusal kept explorer-1 from picking its sword back up after Fumble had made it drop it, though it was now holding one item fewer, and it left the sword behind. Both outcomes are faithful to Zork, but neither run could read them as fair.

**Recommendation:** Keep Zork's mechanics but add a tell in its voice. The Posts Room's description, or the first failed reach for the table, could say that whatever is still on the table up there is out of reach from down here. The blue cake's close-up could hint that it belongs in the pocket of whoever eats the green. Consider making the refusal wording say it is the hands' fullness, not the item, that blocks the take.

Evidence: goal-seeker-1-opus turn 60 ("take all cakes -> Cake frosted with blue letters: You're holding too many things already!"); goal-seeker-1-opus turn 73 ("take blue cake -> You can't see any such thing. (Posts Room)"); goal-seeker-1-opus turn 85 ("undo -> That sentence isn't one I recognize."); goal-seeker-1-opus turn 89 ("eat red cake -> ... your dying memory is of feeling horribly dehydrated"); explorer-1 turn 80 ("take sword -> You're holding too many things already!")

### P7 · design · low · 2/8

Both opus runs gave the riddle's answer with an article, "a well", and got the hollow laugh. Each solved it on the next line with the bare word. The miss cost one turn each, but both reports name it as a frustration.

**Recommendation:** Strip a leading article from the answer before matching, as Zork's parser drops articles, so "a well" and "the well" open the door.

Evidence: explorer-1-opus turn 62 ("say "a well" -> A hollow laugh seems to come from the stone door."); goal-seeker-1-opus turn 27 ("answer "a well" -> hollow laugh; turn 28 answer well -> door opens")

### P8 · world-bug · low · 1/8

On walking out of the gazebo, the North End listed the unicorn as already there, cropping grass, and in the same move announced it arriving, eating roses, key and all. The unicorn's arrival line fires when it is already in the room.

**Recommendation:** Make the garden's clock skip the arrival line when the unicorn is already at the north end, or have it hold the unicorn for the visit from the gazebo, as friction 43's two-move hold does elsewhere.

Evidence: explorer-1-opus turn 41 ("There is a beautiful unicorn here cropping grass. / There is a beautiful unicorn eating roses here. Around his neck is a red satin ribbon...")

### P9 · design · low · 1/8

In the Vault, one Filch took three treasures (violin, statuette, gold key) under a single singular line, "Something you are carrying has disappeared!". The bills then vanished when touched. The run read this as arbitrary and did not link the vanishing bills to the spell.

**Recommendation:** If several things go, say so: name them, or say "Several things you are carrying have disappeared!". Have the first vanish-on-touch name Filch as the cause in the narrator's voice, so the player can tell the spell from the Bank.

Evidence: goal-seeker-1-opus turn 296 (""Filch!" ... Something you are carrying has disappeared!"); goal-seeker-1-opus turn 297 ("take bills -> When you touch the stack of zorkmid bills it immediately disappears!")

### P10 · design · medium · 3/8

This is an odd round, which the brief says widens to Q3 (the volcano and the Menhir). The world still declares only the two built quarters (48 places, with only elsewhere and oblivion never reached). Three runs reached the frontier's rockfalls ("Whatever lies beyond it will have to wait."). The brief raised this round's turn cap to 300 so that later quarters would be reached in play, but there was no later quarter to reach.

**Recommendation:** The director should confirm whether round 5 was meant to widen. If it was, the volcano quarter is due, and the first-quarter bugs above (P1, P3) should be fixed alongside it. If the schedule moved, intent.md should say so, since its arc and the brief still name round 5 for the zorkmid and the volcano.

Evidence: explorer-1 turn 76 ("go up (Ice Room) -> ... The way up has gone, for now. Whatever lies beyond it will have to wait."); explorer-1-opus turn 212 ("go up (Ice Room) -> the lava tube rockfall"); goal-seeker-1-opus turn 7 ("go south (Carousel) -> fall of rock ... will have to wait")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.08 | 0.08 |
| reading.refusedRate | 0.02 | 0.02 |
| faults | 0 | 0 |
| repetition | 16 | 19 |
| reach.places.never | 13 | 2 |
| reach.objects.never | 437 | 394 |
| reach.verbs.never | 69 | 56 |
| reach.handlers.never | 62 | 28 |
| reach.passages.never | 1065 | 932 |
