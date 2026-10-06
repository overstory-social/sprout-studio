# Synthesis

**Legibility:** legible. Every player read the world as Zork I, cut down. Four saw the treasure-and-trophy-case arc, and three (the goal-seeker, explorer and newcomer) got the underground loop back through the gallery, studio and chimney. The common misreading comes from the briefing, not the world: told things may have moved, several believed the lamp, sword, gallery or studio had been rearranged, though all are where Zork puts them. Goals: the goal-seeker reached the 55-point ceiling of this slice (painting by turn 32, egg by turn 74), stopped only by unbuilt edges and the keyless grating. The explorer put the egg in the case at turn 39, added the painting at turn 78, and then walked the edges for about 50 more turns. The newcomer put the painting in the case at turn 39; the only obstacle was the barred trap door, beaten by the crawlway and the chimney. All three reached their goals. How the models played: the explorer, played by fable, was the most thorough by far. It played 133 turns, examined scenery before acting (so it read the chimney's rule and never hit the refusal), dropped things one at a time, kept going long after its goal, and its report's turn numbers match the transcript exactly. The other five, on the playtester's own model, were brisk (22 to 78 turns). They used multi-object commands such as `take x and y` and `drop a, b, c`, and spent less time examining things. Their reports' turn numbers drift by about 3 from the transcripts, and the parser-breaker tested few edge cases.

- goal-seeker-1 (yes): A cut-down Zork I: collect treasures into the living-room trophy case; the underground is mostly unfinished, with 'Back soon' signs.
- explorer-1 (yes): A trimmed, self-aware slice of Zork: house, attic, tree and egg, and a small underground pocket (cellar, troll, chasm, gallery, studio) that loops back up the chimney to the kitchen; collect treasures into the case.
- newcomer-1 (yes): A reworked Zork: enter the house, go down past the troll to a gallery and studio, and bring treasure back to the trophy case.
- casual-1 (partly): A cut-down, rearranged Zork with the house, trap door, cellar, a troll fight and a gallery painting; parts unfinished and marked with notes. Thought the lantern and sword had been moved.
- parser-breaker-1 (partly): A reshuffled Zork I where the lantern and sword are moved, the troll is bribed with food, and a cave leads down. Saw little beyond the troll and the tree.
- prose-reader-1 (yes): A close retelling of Zork: house, lantern, sword and sack, the cellar, and a troll that answers back and kills careless players.

## Points

### P1 · design · low · 4/6

The way home works and reads as Zork's puzzle. Round 4 had to test this, and it passed. All four runs that were barred in the Cellar and lived went south down the crawlway, through East of Chasm and the Gallery, and up the Studio chimney into the Kitchen. Nobody did this in rounds 1 to 3. The goal-seeker also went back down for a second trip (opened the trap door from above, went down, came home by the chimney again), and the explorer reopened the trap door from above to check the loop.

**Recommendation:** Keep the route as built. The two-treasure case is still untested: nobody had to bring the egg and the painting up the chimney together, because the egg is above ground. Watch for that once a second underground treasure exists.

Evidence: goal-seeker-1 turn 19 ("go south -> East of Chasm"); goal-seeker-1 turn 28 ("go up -> Kitchen"); goal-seeker-1 turn 36 ("The trap door crashes shut, and you hear someone barring it. (second descent)"); goal-seeker-1 turn 52 ("go up -> Kitchen (second chimney climb)"); explorer-1 turn 76 ("up -> Kitchen"); explorer-1 turn 133 ("The door reluctantly opens to reveal a rickety staircase descending into darkness."); newcomer-1 turn 35 ("go up -> Kitchen"); casual-1 turn 30 ("go up -> Kitchen")

### P2 · design · low · 3/6

Three of the four players who climbed the chimney first got its refusal, "You can't get up there with what you're carrying." Two of them reported they couldn't tell which item was the problem. The goal-seeker dropped four things and was refused again before dropping the sword. The explorer examined the chimney first, read its rule ("if you travelled light and had a light to travel by"), never hit the refusal, and named that line as the moment the puzzle made sense. Everyone solved it within one or two turns, so it plays as a puzzle, not a wall. The teaching only reaches players who type `examine chimney`.

**Recommendation:** Keep Zork's refusal. The brief allows added prose in Zork's voice, so follow it with a short hint about the lamp and one thing more, as the chimney's own description words it. Then players who climb without examining learn the rule too.

Evidence: goal-seeker-1 turn 24 ("You can't get up there with what you're carrying."); goal-seeker-1 turn 26 ("You can't get up there with what you're carrying. (after dropping sack, bottle, manual, leaflet)"); goal-seeker-1 turn 27 ("drop sword"); casual-1 turn 28 ("You can't get up there with what you're carrying."); newcomer-1 turn 33 ("You can't get up there with what you're carrying."); explorer-1 turn 63 ("You might just get up it, if you travelled light and had a light to travel by.")

### P3 · design · medium · 6/6

The troll fight is short and swings to extremes. Three players killed him in one or two blows. One took five rounds, with a stagger, a disarm and his recovery. Two died. Both deaths came after the player spent turns on talking or giving him the sack, while the troll took free swings. Both dead players woke empty-handed in the Forest and stopped within three turns. Four of six rated difficulty "too easy" and one "too hard". The knockout's second chance showed up twice, each a knockout then a kill. Since every knockout was finished at once, he never came round (that handler never ran). These are Zork's tables at 0 points, as the intent records.

**Recommendation:** Don't retune the tables. Death is what ended the two short runs, so check that a dead visitor's kit lands somewhere findable, as in Zork's death scattering (the lamp back in the house). Neither revived player went looking. If the world allows it, the arrival in the Forest could say the belongings are elsewhere.

Evidence: goal-seeker-1 turn 15 ("The fatal blow strikes the troll square in the heart: He dies."); explorer-1 turn 46 ("The troll is knocked out!"); explorer-1 turn 47 ("The unconscious troll cannot defend himself: He dies."); newcomer-1 turn 16 ("The unconscious troll cannot defend himself: He dies."); casual-1 turn 19 ("The troll is disarmed by a subtle feint past his guard. / The troll, angered and humiliated, recovers his weapon."); parser-breaker-1 turn 21 ("Conquering his fears, the troll puts you to death."); parser-breaker-1 turn 22 ("You are empty-handed."); prose-reader-1 turn 20 ("You are still recovering from that last blow, so your attack is ineffective. / The troll's axe stroke cleaves you from the nave to the chops."); prose-reader-1 turn 21 ("You are empty-handed.")

### P4 · design · low · 5/6

Few players tried the troll's new NPC behaviour. Four talked to him, two gave him the sack (eaten, as in Zork) and one tried to give him water from the shut bottle. Nobody examined or took the axe in his fist, threw anything at him, woke him or gave him water from an open bottle. The parser-breaker couldn't tell what the gift had changed. That player also wished the shut bottle would give its water, though "The bottle is closed." is the intended answer. Talking costs a turn and gives the troll a swing, which fed P3's deaths.

**Recommendation:** Nothing is broken. The axe's guard, throwing, waking and the come-round are known only from `sprout test`. If the author wants players to find them, the troll's own description (P5) could point at the axe in his fist.

Evidence: explorer-1 turn 45 ("The troll isn't much of a conversationalist."); newcomer-1 turn 14 ("The troll isn't much of a conversationalist."); parser-breaker-1 turn 18 ("The troll, who is not overly proud, graciously accepts the gift and not having the most discriminating tastes, gleefully eats it."); parser-breaker-1 turn 20 ("The bottle is closed."); prose-reader-1 turn 17 ("The troll isn't much of a conversationalist."); prose-reader-1 turn 18 ("The troll ... gleefully eats it. (then an axe hit)")

### P5 · world-bug · low · 1/6

`examine troll` repeats the room's line about the troll instead of giving a description of his own. The brief requires every named thing to have one. Troll.short also never fired.

**Recommendation:** Give the troll an examine description in Zork's voice: his axe in his fist, and his state (awake, out cold, disarmed).

Evidence: prose-reader-1 turn 16 ("A nasty-looking troll, brandishing a bloody axe, blocks all passages out of the room.")

### P6 · world-bug · low · 1/6

The Clearing's east refusal describes a sign hanging from a rope, but the next turn the sign can't be named.

**Recommendation:** Add the rope and sign as scenery in the Clearing. `examine`/`read sign` should repeat the notice, and `take` should refuse.

Evidence: explorer-1 turn 113 ("A sign hanging from the rope reads: "CANYON VIEW CLOSED FOR REPAIRS...""); explorer-1 turn 114 ("You can't see any such thing.")

### P7 · world-bug · low · 1/6

The trap door's description doesn't change with use. After the player has opened it, gone down and heard it barred, it still says nobody has disturbed it lately.

**Recommendation:** Make the dust line conditional on the trap door never having been opened.

Evidence: explorer-1 turn 80 ("A good deal of dust has settled on it, and nobody has disturbed it lately.")

### P8 · engine-bug · low · 1/6

Commands chained with commas are misread. The parser ran the first clause, then answered the rest with "You can't see any such thing.", as if "turn on lantern" and "go down" were more objects of `open`. The player had to retype both. `and`-chaining (sprout#453) works in every run that used it.

**Recommendation:** File in overstory-social/sprout. A comma before a verb should chain clauses as `and` does, or be refused in words that say the rest was not run.

Evidence: newcomer-1 turn 10 ("open trap door, turn on lantern, go down -> The door reluctantly opens... / You can't see any such thing."); newcomer-1 turn 11 ("turn on lantern")

### P9 · engine-bug · low · 1/6

`enter window` gets "That sentence isn't one I recognize." when no window is in scope (in the Clearing). The same sentence works at Behind House. The refusal blames the grammar when the real problem is that the noun isn't in scope.

**Recommendation:** File in Sprout. A known verb with an object that is out of scope should get not_here ("You can't see any such thing."), not the unknown-sentence line.

Evidence: explorer-1 turn 128 ("That sentence isn't one I recognize."); explorer-1 turn 131 ("enter window -> Kitchen")

### P10 · design · medium · 4/6

The slice now runs out before the players do. Both runs that chased treasure reached the 55-point ceiling (goal-seeker by turn 75, explorer by turn 79). They spent the rest on edges: the locked grating, the unfinished passages, the forest walls. The goal-seeker stopped "stuck". The explorer stopped "exhausted" after about 50 turns of edge-walking. The in-world refusals at the edges are liked: four runs quote "Back soon. -- The Management." The "yet" on the west hole made the explorer expect it to open later.

**Recommendation:** Widening further is the director's call. The edges are doing their job; keep their voice.

Evidence: goal-seeker-1 turn 75 ("Your score is 55 (total of 350 points), in 66 moves."); goal-seeker-1 turn 68 ("The grating is locked."); explorer-1 turn 79 ("Your score is 55 (total of 350 points), in 75 moves."); explorer-1 turn 54 ("it does not seem to go anywhere yet"); newcomer-1 turn 17 ("Back soon. -- The Management."); casual-1 turn 21 ("Back soon. -- The Management.")

### P11 · design · low · 6/6

Some of the slice's secrets are still unmet after 24 runs. Every run lit the lamp before going down and never put it down, so no one saw a dark room, the grue or a lamp left in the Cellar (the grue handler and "You have moved into a dark place." never fired). Nobody dropped anything from the tree, broke the painting or used `verbose`/`brief`. The attic was reached for the first time (goal-seeker, explorer), and the ranks were seen: Beginner, Amateur, Novice.

**Recommendation:** Nothing to fix. These are Zork's hidden mechanics, and the evidence for them is `sprout test`. Count the darkness and grue paths as tested by script only, not by play.

Evidence: goal-seeker-1 turn 12 ("turn on lantern"); goal-seeker-1 turn 53 ("Attic"); explorer-1 turn 21 ("Attic"); explorer-1 turn 41 ("This gives you the rank of Beginner."); casual-1 turn 13 ("turn on lantern"); newcomer-1 turn 11 ("turn on lantern"); parser-breaker-1 turn 14 ("turn on lantern"); prose-reader-1 turn 13 ("turn on lantern")

### P12 · design · low · 1/6

The forest's one-way exits confused the explorer: going west and then east doesn't return you to where you started. This is Zork's own map (Forest 3 west to Forest 1, Forest 1 east to the Forest Path), so it is faithful.

**Recommendation:** Keep the map. If anything, a Forest room's description could mention that the trees all look alike, in Zork's voice.

Evidence: explorer-1 turn 92 ("east -> Forest Path"); explorer-1 turn 126 ("north -> Clearing")

### P13 · design · low · 3/6

The shut trophy case reads clearly. Each of the three players who reached it first tried `put`, got "The trophy case isn't open.", and opened it the next turn. Its listing ("Your collection of treasures consists of:") shows on entering the Living Room.

**Recommendation:** Keep as is.

Evidence: goal-seeker-1 turn 30 ("The trophy case isn't open."); explorer-1 turn 37 ("The trophy case isn't open."); newcomer-1 turn 37 ("The trophy case isn't open."); explorer-1 turn 77 ("Your collection of treasures consists of: / A jewel-encrusted egg")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.16 | 0.08 |
| reading.refusedRate | 0.01 | 0 |
| faults | 0 | 0 |
| repetition | 4 | 3 |
| reach.places.never | 3 | 1 |
| reach.objects.never | 82 | 85 |
| reach.verbs.never | 35 | 54 |
| reach.handlers.never | 9 | 8 |
| reach.passages.never | 317 | 381 |
