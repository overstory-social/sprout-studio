# Synthesis

**Legibility:** legible. All nine players described a Zork-style treasure hunt. In each, a petty Wizard who casts spells keeps the Empire's lost treasures south of the ravine, behind linked puzzles. Three runs named Zork II outright. The long runs listed the intent's arc in order: riddle, bucket, cakes, robot, dragon and glacier, princess and unicorn, lizard. The two short runs (casual, prose-reader) got the premise but saw too little to name the arc. What no player understood was the endgame: the diamond's purpose (P1), the spheres and the demon. Of all that, only the cabinet and the workbench's three stands were seen, by one run.

- casual-1 (partly): A cave-crawl treasure hunt. A wizard says the treasures lie south of the ravine, the pearls behind a riddling door, the rest past a spinning room.
- explorer-1 (yes): A remixed Zork II: exploring the caverns south of the ravine while a meddling Wizard casts spells, with treasures behind a riddle door, a vault, a dragon, an Alice tea room and a baseball-diamond maze.
- goal-seeker-1 (partly): A Colossal-Cave-style cave of mislaid treasures, with the Wizard's illusions as hints and puzzles in a carousel, a riddle door, a well bucket and a baseball maze.
- goal-seeker-1-opus (yes): A treasure hunt on the Wizard of Frobozz's turf through linked tricks (riddle, bucket, Alice cakes, a lizard bribed with candy, a dragon tricked into melting a glacier, a princess whose unicorn hands over the key), with the Wizard throwing spells at you throughout.
- newcomer-1 (yes): A Zork-style cave adventure: a Wizard has hoarded the Empire's lost treasures south of a ravine, and the goal is to find them.
- newcomer-1-opus (yes): An odd little wizard has stolen the Empire's treasures and hidden them in caverns south of a ravine. The puzzles are about using things on your surroundings (dragon and ice, riddle, bucket, cakes, robot, a spinning room to stop), told with cheek.
- parser-breaker-1 (yes): A Zork II-style underground empire where a teasing wizard has the treasures south of a ravine, with a garden, a carousel, an ice room and a lizard-guarded door.
- parser-breaker-1-opus (yes): The old Zork II with a gentler voice: a petty, cackling Wizard hoarding the Empire's treasures across the ravine, with a unicorn's key, a lizard door, a riddle, a carousel, a dragon and glacier, and a balloon in a volcano.
- prose-reader-1 (partly): A cave-crawl treasure hunt in a Zork-like barrow, where a wizard says the treasures lie south of the ravine and his conjured illusions appear and fade.

## Points

### P1 · world-bug · high · 1/9

The diamond window's close-up is off by one. The world has five grades: flickering, dimly glowing, glowing, glowing brightly, and glowing serenely for home (menhir.sprout:61). The close-up names only four and calls the brightest one home: 'a flicker for first, a dim glow for second, a glow for third, and brightest of all for home'. The landing corner flickers and is labelled 'first' though no base has been run yet. So a runner who has run three bases correctly reads 'glowing brightly', is told that means home, and stops one step short. The explorer ran SE, NE and NW correctly, examined the window, then tried 'open window', 'put string in window', 'touch bag' and 'wait', and walked away. Its report wished 'to learn what finishing the diamond maze actually did'. No run heard the squeal, so the passage to the Cerberus Room, the crypt and the Landing was reached by no one.

**Recommendation:** Give the close-up the world's real scale: the flicker is the window waking at home, then dim for first, a glow for second, bright for third, and serene for home. Equivalently, stop saying 'brightest of all' for any grade short of home. Consider having the grade-4 room line say that one base is left.

Evidence: explorer-1 turn 125 ("The passage runs straight, for once, and lets you out where you meant to go. ... dimly glowing."); explorer-1 turn 128 ("On the floor is a very small diamond shaped window which is glowing brightly."); explorer-1 turn 129 ("a flicker for first, a dim glow for second, a glow for third, and brightest of all for home"); explorer-1 turn 130 ("open window -> You must tell me how to do that to a diamond shaped window.")

### P2 · world-bug · high · 1/9

Once the aquarium is broken by the fatal route ('break aquarium with sword'), the clear crystal sphere is never shown again. On return the Aquarium Room lists only 'A shattered aquarium...' and the dead serpent, and 'search aquarium' says 'You find nothing unusual.' The player concluded the tank was empty. The mung path prints mung_line and leaves out dead_line, the only line that mentions the sphere. :shatter reveals the sphere but leaves it inside the Aquarium box, and neither the room's listing nor 'search' looks into the box. Without this sphere the black sphere, the demon, the wand and the Landing are all out of reach.

**Recommendation:** On :shatter, move the sphere onto the Aquarium Room floor so its ldesc ('There is a clear crystal sphere lying in the sand.') is listed. Alternatively, list the shattered box's contents with the room. Have 'search' read as 'look in' for containers. Check this with a test that breaks the tank by mung, dies, returns and takes the sphere.

Evidence: goal-seeker-1-opus turn 223 ("He manages to rend you limb from limb before he drowns in the air. I guess you were too careless."); goal-seeker-1-opus turn 241 ("A shattered aquarium fills the northern half of the room. There is a dead sea serpent in a heap here."); goal-seeker-1-opus turn 242 ("search aquarium -> You find nothing unusual.")

### P3 · design · high · 3/9

The lizard's tell still comes after the cost. Three of the four runs that met the lizard without candy fed it items the puzzles need: the teapot (the only way to carry water up the well), the place mat (the Tiny Room's key trick) and the newspaper (balloon fuel). The hunger tell is only in the close-up. The 'open door' snap and the room description, which every run read first, say nothing about what it eats. The Cobwebby Corridor is one carousel draw from the garden, so the lizard is met long before the candy exists. The newcomer read the close-up the turn after losing the teapot, which left the bucket and everything past it unwinnable.

**Recommendation:** Put the hunger tell in the snap line ('snaps at you as you reach for the handle; its tongue goes at the air the way a lizard's does when there are insects about') and in the Guarded Room's description. Have the lizard refuse the teapot, mat and newspaper as it refuses the flask, or say the cost on the first offer. A run that loses the teapot to it cannot finish.

Evidence: newcomer-1 turn 44 ("The lizard wolfs down the china teapot ... exactly as hungry as before."); newcomer-1 turn 45 ("examine lizard -> ...something that had legs and crunches"); parser-breaker-1 turn 40 ("feed the lizard the newspaper"); parser-breaker-1 turn 41 ("feed the lizard the teapot"); parser-breaker-1 turn 43 ("feed the lizard the place mat"); parser-breaker-1-opus turn 80 ("give the place mat to the lizard"); goal-seeker-1 turn 38 ("examine head: the one run that read the tell first")

### P4 · design · medium · 6/9

The carousel's rerolls were the round's most-cited frustration. Players spent many turns walking out and back in to land in the Riddle Room or reach the well. One opus run never got its full teapot to the bucket because the throws scattered it. Round 8's in-voice 'up' and 'take the passage' answers worked ('A passage is not a thing to be picked up ... Say which.'). The cost now is the trip back once the riddle has been answered. Only two runs ever had the robot stop the floor (newcomer-1-opus t191, goal-seeker-1-opus t300), and neither used the stopped carousel.

**Recommendation:** Keep Zork's draw. Answer 'wait' and 'wait for the passage' in the Carousel Room in the narrator's voice: the floor turns, the passage comes round and goes, and only walking settles it, and the works are what would stop it. After the riddle is answered, point harder at the robot's room, since a stopped floor is the real answer. A visitor thrown into a BRIEF room may not notice where they landed (parser-breaker-1-opus t121-128), so consider giving a throw's landing room in full the first time.

Evidence: goal-seeker-1-opus turn 41 ("Spent many turns going in and out of the carousel trying to land in the Riddle Room."); newcomer-1-opus turn 109 ("Riddle Room reached after fifteen throws from t95"); parser-breaker-1-opus turn 63 ("stand still and wait for the climbing passage -> That sentence isn't one I recognize."); parser-breaker-1-opus turn 128 ("put water in bucket (typed in the Topiary, after a throw) -> You can't see any such thing."); explorer-1 turn 100 ("every trip back to the riddle room a long guessing loop"); goal-seeker-1 turn 15 ("The Carousel Room scrambles directions, so exploring it was random.")

### P5 · design · medium · 3/9

Players run the diamond with compass points and almost never with diagonals. Goal-seeker-1 spent its last 36 turns in the Oddly-angled Rooms typing north, south, east and west from corners, and tried a diagonal from a corner only once, on its final turn. Each wrong step lost the count, and it never examined the bag or the club. The explorer read the bag at t95 and still spent about 30 turns on cardinal steps before trying SE at t125, which then 'ran straight'. The wrong-step line says the step was wrong but not that a runner runs the diamond's diagonals.

**Recommendation:** Put the diagonal into a line every runner reads. One way: the bag's room line can say it is nailed at a point of the diamond, so the next base is a corner away, off the square. Another: a cardinal step from a corner can say the passage tried to go straight at a diamond that has no straight sides. Keep the club's name as the main hint.

Evidence: goal-seeker-1 turn 73 ("The passage turns a corner too many ... the window in the floor here, though, has woken."); goal-seeker-1 turn 108 ("go northwest -> ...Whatever was being counted has lost count. (the only diagonal from a corner)"); explorer-1 turn 95 ("examine bag: '...a runner touches them in order, the next one on round from this, and comes home.'"); explorer-1 turn 125 ("go southeast -> The passage runs straight, for once"); newcomer-1 turn 33 ("The oddly-angled rooms looped back on themselves and I couldn't map them.")

### P6 · design · medium · 2/9

Two deaths came in a single command with no tell before them. Their text never says why the visitor died. Sending the robot for the sphere prints the robot's death and then '**** You have died ****', with no line about the visitor. The newcomer called it 'the robot's death, though it counted as mine' and quit at the barrow. 'Break aquarium with sword' kills, while 'attack' or 'throw' would not, and nothing in the aquarium's close-up warns about that difference. Both are Zork's mechanics; the trouble is how they read.

**Recommendation:** Give the robot's death the visitor's own line: the grief, or the gas the cage lets in on whoever is standing by. That is the cause the intent names, and it is not said. Following round 6's practice of putting the tell before the cost, have the aquarium's close-up say the serpent will hold whoever lets the water out responsible, and that it is best let out from a distance. The cost stays Zork's.

Evidence: newcomer-1-opus turn 197 ("A cloud of smoke rising from beneath the cage confirms your fears ... **** You have died ****"); newcomer-1-opus turn 202 ("quit at the barrow: 'Walking the whole way back felt like too much'"); goal-seeker-1-opus turn 212 ("break aquarium with ruby -> The moby ruby bounces harmlessly off the glass."); goal-seeker-1-opus turn 223 ("break aquarium with sword -> ...rend you limb from limb")

### P7 · design · medium · 4/9

Deaths are where long runs end. Four runs died, each to one command, and each death meant a walk of 30 or more turns back from the barrow through the carousel. Two opus runs quit at the barrow straight after dying. The goal-seeker's two deaths cost it the turns it would have needed for the Tiny Room and the balloon before the cap.

**Recommendation:** The cost is Zork's and stays. What can change is the tells before the deaths that have none (P6). The demon's return line could also say the way back is shorter than it looks, if the author is willing to name the Marble Hall door or the ravine route.

Evidence: goal-seeker-1-opus turn 93 ("push triangular button -> There is a giant spark and you are fried to a crisp."); goal-seeker-1-opus turn 223 ("aquarium death"); explorer-1 turn 212 ("open flask -> ...the vapors from the flask's contents are fatal."); parser-breaker-1-opus turn 173 ("The newspaper catches fire. Unfortunately, you were holding it at the time."); parser-breaker-1-opus turn 181 ("quit: 'Doing the whole trek again ... was more than I had patience for.'")

### P8 · design · low · 2/9

Both runs that went small took only the green and blue cakes. Round 6's tells ('the other half ... from the same table', a guest 'takes more than one cake') read as green plus blue. The red cake's use on the pool is only readable through the flask, which is in the Pool Room. Once they were back to full size the hole was 'Only a mouse', and the candy was lost for those runs.

**Recommendation:** Seen while small, have the pool's close-up say it is the kind of water that a dry thing would drink up. The red cake 'looks dry' already, so the two lines would meet. Alternatively, the table's tell can say a careful guest takes whatever is on it that she may want down there.

Evidence: explorer-1 turn 200 ("take green cake, blue cake"); newcomer-1-opus turn 157 ("take the blue cake"); newcomer-1-opus turn 179 ("go east -> Only a mouse could get in there."); goal-seeker-1-opus turn 79 ("take all cakes (the run that got the candy)")

### P9 · design · low · 2/9

The dragon's lamp hint ('caught sight of himself in the polished brass of your lamp') invites showing it the lamp. 'show lamp to dragon' is read as a gift ('The dragon refuses your gift.'), and 'hold lamp up to the dragon' is read as a take ('You already have that!').

**Recommendation:** Give 'show X to dragon' its own answer. Shown the lamp, he glares at the small dragon in the brass and looks round for a bigger one. That points at the glacier without solving it.

Evidence: explorer-1 turn 242 ("show lamp to dragon -> The dragon refuses your gift."); explorer-1 turn 251 ("hold lamp up to the dragon -> (hold lamp) You already have that!"); newcomer-1-opus turn 56 ("show the lantern to the dragon -> The dragon refuses your gift.")

### P10 · world-bug · low · 1/9

Some commands get two contradictory answers in one move. 'open flask' says 'You must tell me how to do that to a stoppered glass flask' and then kills the visitor with its vapours. 'throw water at dragon' says the water 'splashes on the walls and evaporates', then 'Thrown.', then that it 'bounces off the dragon's hide'.

**Recommendation:** Make the flask's open handler the only answer, so the default open refusal does not also fire. Have the water's throw resolve once: either it splashes or it hits the dragon.

Evidence: explorer-1 turn 212 ("You must tell me how to do that to a stoppered glass flask filled with liquid. As you pass out, you realize that the vapors from the flask's contents are fatal."); explorer-1 turn 252 ("The water splashes on the walls and evaporates. Thrown. The quantity of water bounces off the dragon's hide.")

### P11 · engine-bug · low · 3/9

The parser breaks ties silently by drawing at random, and some draws produce nonsense. 'look at the cakes' tied four ways and showed one cake. 'ask the stone door a question back' picked the break in the hedge. 'throw sword into ravine' and 'throw the red cake into the hole' tied two ways and fell to a flat 'You can't ...'. The engine logs 'drawn: the line read N ways that tied' each time. The player sees no question and no sign that a draw happened.

**Recommendation:** File it with Sprout. A plural noun should list or answer for the set, and a tie between readings should be asked about or named the way the take-a-key draw is. On the world side, give the chasm and the mouse hole an in-voice answer for 'throw/drop X into', as the brief's rule on refusals asks.

Evidence: newcomer-1-opus turn 152 ("look at the cakes -> (the cake frosted with blue letters) [drawn: 4 ways tied]"); newcomer-1-opus turn 178 ("throw the red cake into the hole -> You can't throw ... [drawn: 2 ways tied]"); parser-breaker-1-opus turn 17 ("throw sword into ravine -> You can't throw the elvish sword into the chasm. [drawn]"); parser-breaker-1 turn 13 ("ask the stone door a question back -> You can't talk to the break in the hedge! [drawn]")

### P12 · world-bug · low · 2/9

Several verb readings are wrong. 'strike a match' is read as attacking the matchbook. 'leave the gazebo' says 'You can't leave the gazebo.' while 'go out' works. 'climb into the crack' says 'You can't do that!' while 'enter crack' works. 'eat the green cake' on the table says 'You're not holding that.' where Zork would take it implicitly.

**Recommendation:** Make 'strike match' light a match, as Zork's parser has STRIKE with a match as LIGHT. Read 'leave X' as exiting X when the visitor is in it, and 'climb into X' as entering it. Take an edible thing implicitly on 'eat', with '(Taken)'.

Evidence: parser-breaker-1-opus turn 52 ("strike a match -> I've known strange people, but fighting a matchbook?"); newcomer-1-opus turn 27 ("leave the gazebo -> You can't leave the gazebo."); newcomer-1-opus turn 46 ("climb into the crack -> You can't do that!"); newcomer-1-opus turn 158 ("eat the green cake -> You're not holding that.")

### P13 · world-bug · low · 1/9

Some things named in descriptions do not answer, against the brief's rule that every thing a description names can be examined. The sword's close-up names its runes, but 'read the runes' says 'You can't see any such thing.' The Room of Red Mist names a sign in its vision, and 'read sign' fails the same way. 'touch the glowing mist' fails because 'glowing' is not among the mist's adjectives, though the Blue Mist room says 'an odd glow to the mist'.

**Recommendation:** Give the sword's runes a noun and a line. Give each mist vision's named thing (the sign, the table, the door) a far stand-in that says it is too blurry, in voice. Add 'glowing' and 'odd' to the mist's adjectives.

Evidence: parser-breaker-1-opus turn 8 ("read the runes -> You can't see any such thing."); parser-breaker-1-opus turn 24 ("read sign -> You can't see any such thing."); parser-breaker-1-opus turn 26 ("touch the glowing mist -> You can't see any such thing.")

### P14 · design · low · 1/9

The sonnet goal-seeker walked past the gazebo at t9 and never went in, so it never saw the teapot. At the bottom of the well the bucket's close-up named 'the kind a teapot would carry', and the player reported 'I found nothing to carry water in'. The tea things are listed only inside the gazebo.

**Recommendation:** Let the North End's description glimpse a tea table laid in the gazebo, or have the bucket's teapot clause say that one stands on a tea table somewhere south of the ravine.

Evidence: goal-seeker-1 turn 9 ("North End of Garden ... It appears to be a gazebo"); goal-seeker-1 turn 32 ("...the kind a teapot would carry")

### P15 · design · low · 9/9

Keep the Wizard's first call with its hook, and the Fantasize refusals. Every run quoted or acted on the hook ('the pearls nearest, behind a stone door that asks a question'), and every run that reached the Riddle Room answered 'well' on the first or second try. The 'room ... has the grace to look embarrassed' refusal was a delight in five reports. The casual run did not quit at the Carousel this round: its first throw put it in the Marble Hall, and it walked on to the dragon.

**Recommendation:** Leave as is.

Evidence: goal-seeker-1 turn 4 ("the pearls nearest, behind a stone door that asks a question"); casual-1 turn 4 ("It is all south of the ravine, his look says"); prose-reader-1 turn 8 ("take ingot -> ...has the grace to look embarrassed about it now."); casual-1 turn 14 ("go north -> Marble Hall")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.06 | 0.09 |
| reading.refusedRate | 0.01 | 0.02 |
| faults | 0 | 0 |
| repetition | 26 | 27 |
| reach.places.never | 27 | 23 |
| reach.objects.never | 867 | 880 |
| reach.verbs.never | 88 | 66 |
| reach.handlers.never | 173 | 163 |
| reach.passages.never | 1791 | 1748 |
