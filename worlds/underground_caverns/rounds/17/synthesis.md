# Synthesis

**Legibility:** partly. Every run read the core loop correctly: treasures carried to the trophy case for points, in Zork's own voice. Six of seven also credited Zork's own map (crawlway, Gallery, Studio, the Cellar onto the Troll Room) to a 'remix', primed by the prompt's 'changed version'. The intent is a faithful port whose real differences are the author's examine layer and the caretaker. Only the prose-reader saw the examine layer, as new prose; nobody took the caretaker as a theme. The opus run alone described the game as the intent does: treasures each guarded by a puzzle, and planning of load and routes.

- casual-1 (partly): A remixed Zork in which the Cellar leads to a new gallery and studio, and treasures go to the trophy case for points.
- newcomer-1 (partly): A changed Zork with a familiar house and cellar and new rooms south of the cellar; you collect things and fight a troll. No sense of the goal.
- parser-breaker-1 (partly): A remixed Zork I with altered geography south of the Cellar and a strict chimney carry limit.
- explorer-1 (partly): A remixed Zork I: the same house, trophy case, troll, dam and thief on a rearranged map; collect treasures while a thief robs you.
- prose-reader-1 (partly): A rearranged Zork, a treasure-and-puzzle trek through a shuffled Great Underground Empire, with new descriptions mixed into the original.
- goal-seeker-1 (partly): A rearranged Zork I where you collect treasures for the trophy case; the chimney is the way up and the coal mine is a trap.
- goal-seeker-1-opus (yes): A treasure hunt under the white house: puzzles guarding treasures (troll, echo, dam, exorcism, cyclops, boat), and a test of planning load and one-way routes.

## Points

### P1 · world-bug · medium · 1/7

After a death in the boat, the spirit is still treated as being aboard. Opus went over Aragain Falls in the magic boat and woke as a spirit at the Entrance to Hades. Its first move, up to the Cave, printed "The magic boat comes to a rest on the shore, and you clamber out of it onto dry land." Dying did not clear the boat's hold on the visitor, so the boat's landing ran a room away from any water.

**Recommendation:** When the visitor dies (JIGS-UP), clear the boat's record of who is aboard and its pending errands before moving the body or the spirit. Add a test that goes over the Falls, dies, and then moves: it should get no boat line, and the boat should be wrecked or gone as Zork has it.

Evidence: goal-seeker-1-opus turn 272 ("Unfortunately, the magic boat doesn't provide protection from the rocks and boulders one meets at the bottom of waterfalls. ... You find yourself before the gates of Hell"); goal-seeker-1-opus turn 273 ("The magic boat comes to a rest on the shore, and you clamber out of it onto dry land. / Cave")

### P2 · world-bug · medium · 1/7

Taking 'bag' fails when the noun fits two things. In Maze 5, holding the brown sack (whose nouns include 'bag'), the explorer typed `take key and bag`. Only "skeleton key: Taken." came back: the bag of coins on the floor got no line and was not taken. This breaks the intent's rule that take means the one lying there, and it fails silently. After the sack was dropped, `take bag` had two candidates on the floor; the engine logged "drawn: the line read 2 ways that tied, and one was drawn" and took the coins, by chance.

**Recommendation:** Apply the floor-first rule to each item of a list take, as it applies to a single take. A list item should never go unanswered: a held match should at least say "You already have that!". When two floor things tie on one noun, prefer one deterministically (for example the treasure), or answer in Zork's "Which bag do you mean" voice. If the engine's random draw is the only way, log it with friction 32.

Evidence: explorer-1 turn 107 ("take key and bag -> skeleton key: Taken."); explorer-1 turn 108 ("inventory shows the brown sack and skeleton key, no bag of coins"); explorer-1 turn 110 ("take bag -> Taken. [warning: drawn: the line read 2 ways that tied, and one was drawn]")

### P3 · design · medium · 2/7

Neither goal run reached the goal of 350. goal-seeker-1 reached 104 and was soft-locked in the coal mine. It had dropped the sack, never opened, in the Studio at turn 22, so it never saw the garlic. Each of four entries to the Bat Room ended with the bat dropping it in a Coal Mine room, never the Squeaky Room or the Mine Entrance (2 of the 8 drops, as adventurer.sprout confirms). The only other way on, the Timber Room slot, refused its load. All of this is faithful to Zork. The opus replay on the same seed got further: 220 at its best (turn 208), 214 at the 300-turn cap. It opened the sack (turn 156), took the garlic (turn 168) and walked past the bat to the jade (turn 170). It was held back by the cap, by about 20 turns lost to a boat punctured by the sceptre, and by a death at the Falls (minus 10, the emerald and scarab scattered). It never reached the thief's lair, the diamond, the rainbow or the canary.

**Recommendation:** Keep the bat and the garlic as Zork has them; the replay shows the clue is fair once the sack is opened. Two cheap checks: confirm the bat's eight drops are drawn evenly (four Coal Mine drops in a row is about 32% at 6/8, so this is plausible), and consider whether the 300-turn cap, not the world, is now the limit on goal runs. A longer cap, or a run that starts mid-game, is the director's call.

Evidence: goal-seeker-1 turn 22 ("drop leaflet, sack, bottle, sword, manual"); goal-seeker-1 turn 140 ("Fweep! Fweep! Fweep! The bat grabs you by the scruff of your neck and lifts you away.... Coal Mine"); goal-seeker-1 turn 234 ("(fourth bat drop) Coal Mine"); goal-seeker-1 turn 253 ("What will not go through the slot between the timbers is the brass lantern, the crystal trident, the sapphire-encrusted bracelet, the small pile of coal"); goal-seeker-1-opus turn 156 ("Opening the brown sack reveals a lunch, and a clove of garlic."); goal-seeker-1-opus turn 208 ("Your score is 220 (total of 350 points), in 200 moves.")

### P4 · design · low · 5/7

The chimney's carrying rule reads clearly and is solved at once. Five of seven runs took the same opening (window, lamp, sword, trap door, crawlway, Gallery, Studio) and hit the refusal between turns 18 and 21. Each read the itemised line, dropped down to the lamp and one thing, and climbed. Four players logged it as confusion or frustration, but every one quoted it as a clear statement of the rule. The 2c85fd7 rewrite of the chimney as a permit on `go` held, and `drop all except lantern and sword` worked.

**Recommendation:** Keep as built.

Evidence: casual-1 turn 18 ("The chimney has room for you, your lamp and one thing more, and not an inch besides."); explorer-1 turn 18; newcomer-1 turn 19; goal-seeker-1 turn 21; parser-breaker-1 turn 21; parser-breaker-1 turn 32 ("which is the brass lantern, the sword and the painting")

### P5 · design · low · 1/7

Round 16's open-trap-door line paid off where it was met. Opus came home through the Strange Passage, opened the trap door from above, and used the stairs and the slide as a short way back. On each descent the Cellar said "The trap door above you stands open." No player tried `up` or the bar from below while barred, so the new bar line in the Cellar went unread for a second round.

**Recommendation:** Keep. Carry the bar line from below onto next round's watch list.

Evidence: goal-seeker-1-opus turn 121 ("The trap door above you stands open."); goal-seeker-1-opus turn 150 ("(down the slide to the Cellar)"); goal-seeker-1-opus turn 151; goal-seeker-1-opus turn 182

### P6 · design · low · 4/7

The short runs stopped for want of a goal. The casual player and the newcomer quit at 25 turns and the prose-reader at about 53, each saying there was no clear goal; the parser-breaker stopped at about 45 having seen 'the main changes'. The newcomer wished for 'somewhere safe, such as the trophy case', so never learned that the case scores. Three called the game too easy, citing the troll dying in one or two blows. That matches Zork's own tables at 0 points.

**Recommendation:** Leave Zork's opening and the troll's tables alone. If anything, the author-voice examine line of the trophy case (or the score line) could hint that treasures are kept there, in the dry voice used for other things.

Evidence: newcomer-1 turn 25 ("It's curtains for the troll as your sword removes his head."); casual-1 turn 25 ("Your score is 45 (total of 350 points), in 25 moves."); prose-reader-1 turn 53; parser-breaker-1 turn 45

### P7 · design · low · 6/7

Players credit Zork's own geography to a remix. Six of seven described the map as 'rearranged' or 'shuffled', citing things that are Zork's word for word: the crawlway to East of Chasm, the Gallery and the Studio, the Cellar opening north onto the Troll Room, and North of House leading east to Behind House. The prompt's 'changed version' primes them to hunt for differences. The real differences are the examine layer and the caretaker; only the prose-reader noticed the examine layer, as 'new prose'.

**Recommendation:** Nothing to change in the world. For the director: the player prompt's 'changed version' sends players looking for changes that aren't there. Whether to keep that wording is a studio decision.

Evidence: casual-1 turn 10 ("The cellar's south exit led to a chasm edge and then a gallery, not the usual map."); prose-reader-1 turn 5 ("Going east from North of House led to Behind House, which is a rearranged map."); explorer-1 turn 8; newcomer-1 turn 12; parser-breaker-1 turn 9

### P8 · design · low · 1/7

The boat sequence cost opus about 20 turns and then its life. Boarding with the sceptre punctured the boat; this is faithful, and the sceptre is listed as 'tapering to a sharp point'. A bare `launch` with no boat answered "You can't see any such thing." While the tube was shut, `put gunk on boat` and `repair boat with gunk` both got "You can't see any such thing.", although the tube's own label reads "All-Purpose Gunk". It took `open tube` and `fix boat with viscous material` to mend it. Later, launching from the Shore leaves one move before the Falls. The refusal of `west` spent that move, and the boat went over. That part is faithful, and the launch line had warned "The roar ahead is very close."

**Recommendation:** Keep the puncture and the one-move reach. Two small fixes: let 'gunk' named while the tube is shut answer that the gunk is in the tube (as the shut bottle answers for its water), and give a bare LAUNCH outside a boat Zork's own refusal rather than not_here.

Evidence: goal-seeker-1-opus turn 222 ("Oops! Something sharp seems to have slipped and punctured the boat."); goal-seeker-1-opus turn 223 ("launch -> You can't see any such thing."); goal-seeker-1-opus turn 236 ("put gunk on boat -> You can't see any such thing."); goal-seeker-1-opus turn 237 ("---> Frobozz Magic Gunk Company <--- All-Purpose Gunk"); goal-seeker-1-opus turn 240 ("Well done. The boat is repaired."); goal-seeker-1-opus turn 272 ("The west bank is sheer rock straight down into the water ... The only landing left is the one on the east shore.")

### P9 · design · low · 4/7

The load limit is the most-felt friction among the longer runs. Each met "Your load is too heavy, the sword not least of it", or dropped things to make room, several times. The explorer wished for a way to see what is heavy. The limit is Zork's, and the line naming the heaviest thing is helping.

**Recommendation:** Keep. If anything, an examine line could hint at weight for the heaviest portables (the sword, the trunk, the coffin).

Evidence: goal-seeker-1-opus turn 63 ("(Taking the black book first) Your load is too heavy, the sword not least of it."); prose-reader-1 turn 53 ("Your load is too heavy, the sword not least of it."); explorer-1 turn 109 ("drop pump, tube, sack"); goal-seeker-1 turn 79 ("drop wrench, pump, sword, matchbook")

### P10 · design · low · 2/7

The look-alike rooms are where the turns go. Each of the two long walks through them ended in a stall. goal-seeker-1 spent about 100 turns in the coal mine's identical 'Coal Mine' rooms, and that run makes up most of the round's 'You can't go that way' repetition. The explorer called the maze 'a slog' that 'gave no feedback', dropped the matchbook in it, and lost the painting and the coins to the thief there. Neither used Zork's method of dropping a thing in each room, apart from the explorer's single matchbook.

**Recommendation:** Keep as Zork's. This confirms round 16's P4: the mazes are mapped by dropping things, and players still don't think to.

Evidence: goal-seeker-1 turn 153 ("Coal Mine (repeated, with 'You can't go that way.' 3-4 times in a row)"); explorer-1 turn 113 ("A seedy-looking individual with a large bag just wandered through the room. On the way through, he quietly abstracted some valuables from your possession")

### P11 · language-gap · low · 1/7

A comma-chained movement line is not understood. `go south, then west, then north` was refused whole.

**Recommendation:** Already logged as friction 132 (the comma's second clause). Note the 'then' form against it there; nothing for the world.

Evidence: newcomer-1 turn 20 ("That sentence isn't one I recognize.")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.14 | 0.11 |
| reading.refusedRate | 0.02 | 0.02 |
| faults | 0 | 0 |
| repetition | 43 | 40 |
| reach.places.never | 27 | 23 |
| reach.objects.never | 550 | 562 |
| reach.verbs.never | 68 | 73 |
| reach.handlers.never | 79 | 69 |
| reach.passages.never | 1707 | 1697 |
