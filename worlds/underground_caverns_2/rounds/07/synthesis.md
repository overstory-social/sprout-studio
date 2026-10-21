# Synthesis

**Legibility:** legible. Every player read the frame the intent sets out: a Zork II treasure hunt south of a ravine, with a doddering Wizard who casts F-words, hoards the Empire's treasure and plays tricks with illusions. The two long runs also named the set pieces (riddle door, carousel, dragon and glacier, balloon, bank walls, princess), and opus understood that the treasures are 'kept' and are the point. The short runs got the premise from the hook but saw only the first rooms, so they matched only in part. No one read the Oddly-angled Rooms as a baseball diamond, and no one learned the carousel's works are the robot's. Those secrets stayed illegible, but the world's purpose did not.

- casual-1 (partly): A Zork-style cave treasure hunt south of a ravine, with a Wizard haunting the caverns and the Empire's treasures further in.
- newcomer-1 (partly): A Zork-style adventure: barrow, ravine, a Wizard who has hoarded the Empire's treasures south of the ravine, and a garden with a gazebo.
- parser-breaker-1 (partly): A Zork/Colossal Cave treasure exploration with a meddling Wizard whose words conjure phantoms or fear, and treasures south of a ravine.
- prose-reader-1 (partly): A Zork-style underground empire with a taunting Wizard who makes illusions, and treasures hidden further south.
- explorer-1 (yes): A Zork II-style empire of caverns, garden, bank and maze, with a pranking Wizard casting F-spells and treasures to collect via riddles and water puzzles.
- goal-seeker-1 (yes): A Zork II-style empire where the Wizard hoards the Empire's lost treasures south of the ravine; riddle door, spinning carousel, dragon, ice wall and glass maze.
- goal-seeker-1-opus (yes): A treasure hunt against a senile, petulant Wizard who steals what you pick up. The job is to work out the machinery and monsters (riddle, dragon, balloon, bank walls, spinning room) and get the treasures back from wherever he hoards them.

## Points

### P1 · design · high · 3/7

The Oddly-angled Rooms still give no feedback a player can use. Every run that reached them (3 of 3) left stuck there. The three transcripts print the diamond window 93 times, and every one says 'flickering dimly' or 'dark': no run ever saw a count of two. A throw into a corner lands at the same 'flickering dimly' a correct first step would, and a throw prints no line saying it was a throw. A player therefore cannot tell a step from a throw, or one corner from another. The explorer typed 'go east' 36 times (the metrics' repetition list has 17 and 19 in a row). Both goal-seekers took the 'Babe Flathead' club and read the window's 'count' close-up, and neither made the link to running the bases.

**Recommendation:** Make a throw read differently from a step. When the draw throws the visitor into a corner, say so in a line, the way the carousel's 'You're not sure which direction is which.' does, so that a 'flickering' reached by walking means progress. Have the club's room line or close-up give its corner a baseball name ('first base', or a chalked bag), so 'Babe Flathead' becomes a direction to run in and not just a name. Then check that two correct steps in a row are possible from wherever the club is first found.

Evidence: goal-seeker-1 turn 67 ("It glows, when it glows, by some count that is being kept: a flicker for one, a dim glow for two"); goal-seeker-1 turn 81 ("There is no way to go in that direction ... window which is dark."); explorer-1 turn 66 ("go east (first of 17 in a row)"); explorer-1 turn 97 ("go east (first of 19 in a row)"); goal-seeker-1-opus turn 230; goal-seeker-1-opus turn 239 ("window which is flickering dimly")

### P2 · design · high · 4/7

All four short runs quit in the garden before ever reaching the Carousel, although all four quoted the Wizard's hook about the stone door. Three of them stood on the Path Near Stream, one move from the Carousel (the path's own line says the whirring comes from the southwest), and turned east into the garden. The newcomer went southeast from the Dark Tunnel and stopped at the gazebo. Last round's change put the hook in the Carousel's own description, but these players never got that far. Casual's report: 'I had no idea where the stone door with the question was.'

**Recommendation:** Tie the hook's 'room that will not keep still' to the whirring the Path Near Stream, Marble Hall and Topiary already mention. For example, the path's whirring line, the newspaper's Wizard item or the gazebo could say the noise is the room the Wizard's look meant. Or the hook itself could add 'where the whirring is'. Keep it in the narrator's voice, and keep it a pointer rather than a map.

Evidence: casual-1 turn 9 ("go southwest (Path Near Stream)"); casual-1 turn 10 ("go east"); casual-1 turn 17 ("Topiary (last line before quitting)"); parser-breaker-1 turn 14; parser-breaker-1 turn 16 ("go east"); prose-reader-1 turn 11; prose-reader-1 turn 12 ("go east"); newcomer-1 turn 9 ("go southeast")

### P3 · design · high · 1/7

Round 7 was the brief's widening round for the fourth quarter, but the world declares the same 74 places as round 6. None of the Wizard's rooms, Rooms of Mist or end rooms appear in reach.places, and intent.md still calls the Trophy Room 'round 7's'. The stash that death and Filch fill therefore still cannot be reached. Opus lost every treasure twice: the balloon death at turn 107 ('It is nowhere you have been yet') and Filch at turn 170 (statuette and portrait). That loss is part of why the run stopped. The 'he keeps them' consolation now promises a room the round did not build.

**Recommendation:** Find out whether the Q4 build landed; the declared place count says it did not. Until the Trophy Room exists, either soften the stash lines so they do not promise a room or build the Trophy Room first, since it is the part of Q4 that pays off three rounds of setup. Bring intent.md's 'round 7' references up to date either way.

Evidence: goal-seeker-1-opus turn 107 ("He keeps them; that is something. It is nowhere you have been yet."); goal-seeker-1-opus turn 170 ("Several things you are carrying have disappeared!"); goal-seeker-1-opus turn 171

### P4 · world-bug · medium · 1/7

A visitor who dies in the balloon's basket is resurrected still marked as inside it. Opus died over the Flathead Mountains at turn 107, woke in the barrow, and on the first move out was told 'You are on your own feet again.' The report flagged it as confusion.

**Recommendation:** On death, take the visitor out of any vehicle (basket or bucket) before moving them to the barrow. Add a walkthrough or test case for dying in the balloon.

Evidence: goal-seeker-1-opus turn 107; goal-seeker-1-opus turn 109 ("You are on your own feet again.")

### P5 · design · medium · 2/7

The glacier tells only players who already fight the dragon. Goal-seeker-1 tried pouring the teapot on it and burning it with a match, then gave up ('I found nothing else to melt it'). The explorer examined the ice and then the dragon and never linked them. Opus solved it only because he goaded the dragon for its own sake. The glacier's close-up reflection ('a dim adventurer looking back at you') is a good tell, but it points at the visitor, not at the dragon.

**Recommendation:** Give the 'With a matchbook' refusal, or the glacier's close-up, a line saying it would take a great deal more fire than that. Have the dragon's close-up hint at its vanity, or a dislike of rivals, so the reflection has something to pair with. Keep the Zork answer the same.

Evidence: goal-seeker-1 turn 46; goal-seeker-1 turn 47 ("You can't pour the china teapot on the glacier."); goal-seeker-1 turn 48 ("With a matchbook??!?"); explorer-1 turn 122; explorer-1 turn 155; goal-seeker-1-opus turn 51

### P6 · world-bug · medium · 1/7

The princess-following tells did not reach the player. At turn 125 her 'eyes fix on the way out' without naming it, though intent says the line names the room's way out. At turn 133 a player in the Carousel Room was told 'The princess walks east', which is off her route. He then reached the north end at turn 144, waited three turns hearing nothing, and found only a rose in the gazebo at turn 149. Nothing he saw said the key had gone for good. His report wished he knew where the princess and the unicorn went.

**Recommendation:** Check that the 'eyes fix on' line names the direction in the Dragon's Lair. Find out why her departure line reached a visitor mid-throw in the Carousel; the throw may be passing the visitor through the Marble Hall. Once she has left for good, put a line about the unicorn and the key in the north end's or the gazebo's description (not only on 'examine'), so a late follower learns what was lost.

Evidence: goal-seeker-1-opus turn 125 ("She looks about the room, but her eyes fix on the way out."); goal-seeker-1-opus turn 133 ("The princess walks east. She glances back at you as she goes."); goal-seeker-1-opus turn 148; goal-seeker-1-opus turn 149 ("There is a fresh rose here.")

### P7 · design · medium · 1/7

Losses pile up past recovery. Opus dropped the mat and letter opener in the Library to carry a book, and the balloon then floated out of the volcano with him. The Tiny Room's door was then unwinnable (turns 184-187) and the safe chain was cut off. One 'wait' is one balloon level, so a single wait at the Wide Ledge's height was fatal, and the only warning was 'Above you it is open to the sky.'

**Recommendation:** Keep Zork's death, but warn one move ahead: at the Wide Ledge's height with the receptacle open, say that the next rise clears the rim. Consider having the respawn scatter also collect what was left on a ledge the visitor can no longer reach, or say in the Library that what is left on the ledges stays there.

Evidence: goal-seeker-1-opus turn 93 ("Place mat: Dropped. Letter opener: Dropped."); goal-seeker-1-opus turn 106; goal-seeker-1-opus turn 107 ("The balloon floats majestically out of the volcano"); goal-seeker-1-opus turn 187

### P8 · world-bug · low · 1/7

The Small Room's south wall is described as shimmering, but 'go south' gets the generic 'You can't go that way.' and 'enter curtain' gets 'You can't see any such thing.' Only 'enter wall' worked. In the Depository, by contrast, a refused 'go north' at the curtain is answered in voice.

**Recommendation:** While a wall of a room beyond the curtain shimmers, let that wall's direction take the visitor through it. Let 'curtain' and 'light' name the shimmering wall.

Evidence: explorer-1 turn 172 ("The south wall shimmers, very faintly"); explorer-1 turn 173 ("You can't go that way."); explorer-1 turn 175 ("You can't see any such thing."); explorer-1 turn 176

### P9 · world-bug · low · 2/7

'Look in' and 'look through' misfire on things that should answer them. 'Look in bucket' printed the refusal 'You can't look inside a wooden bucket.' and then 'The wooden bucket is empty.' in the same reply. 'Look through window' on the diamond window was refused, although the Tiny Room's window answers it.

**Recommendation:** Make the bucket answer 'look in' as a container, without the refusal. Give the diamond window a 'look through' that repeats its close-up.

Evidence: goal-seeker-1 turn 27 ("You can't look inside a wooden bucket. / The wooden bucket is empty."); goal-seeker-1-opus turn 228 ("You can't look inside a diamond shaped window."); goal-seeker-1-opus turn 185

### P10 · world-bug · low · 1/7

In the Oddly-angled Room, 'examine walls' made the engine pick between two tied readings ('(the wall)', with a 'drawn' warning). It answered 'The walls are solid rock', contradicting the room's 'walls are made of some glassy substance'.

**Recommendation:** Give the nine Oddly-angled Rooms glassy walls of their own that override the generic wall, so the tie goes away.

Evidence: goal-seeker-1-opus turn 225 ("The walls are solid rock, plain and entirely uninterested in you.")

### P11 · engine-bug · low · 1/7

In a corner holding only the club, 'take all' answered 'It's not clear what you're referring to.' The explorer's 'take all' in the club's corner took it ('Wooden club: Taken.').

**Recommendation:** Reproduce it in the seeded run and find out what 'all' was resolving against (the window, the stair, or a hidden stand-in). If the world is supplying an ambiguous candidate, file it against the world; if 'all' is resolving wrongly, file a Sprout issue.

Evidence: goal-seeker-1 turn 66 ("It's not clear what you're referring to."); explorer-1 turn 33 ("Wooden club: Taken.")

### P12 · design · low · 2/7

Some reasonable phrasings went unread. 'Answer "a well"' got the hollow laugh where Zork's parser drops the article. 'Pry box with letter opener' was an unknown sentence. 'Ask the stone door a question' in the Path Near Stream resolved to the floor ('You can't talk to the floor!').

**Recommendation:** Accept 'a well' and 'the well' in the riddle. Add 'pry' and 'force' as synonyms answered by the safe's and box's 'rusted shut' line. Check why 'stone door' matched the path's floor, and drop 'stone' from the floor's words there if it is the cause.

Evidence: goal-seeker-1-opus turn 22 ("A hollow laugh seems to come from the stone door."); goal-seeker-1-opus turn 73 ("That sentence isn't one I recognize."); parser-breaker-1 turn 15 ("You can't talk to the floor!")

### P13 · design · low · 1/7

The West Teller's Room does not name its way back to the Entrance. Opus tried southeast and then east three times ('You can't go that way.') before typing south, which accounts for four of the round's unread lines.

**Recommendation:** Add the teller rooms' south exit to their descriptions in Zork's voice, or answer 'southeast' there with the way that does lead back.

Evidence: goal-seeker-1-opus turn 173; goal-seeker-1-opus turn 176; goal-seeker-1-opus turn 178

### P14 · design · low · 7/7

The Wizard's first call works as the round's opening. All 7 runs got the hook, and all 7 reports quote it as what gave them a goal. The Fantasize refusal ('has the grace to look embarrassed') is quoted by 4 reports and accounts for 7 of the round's 8 refused lines.

**Recommendation:** Keep the hook and the illusion refusals as they are. P2 is the gap between them and the Carousel.

Evidence: casual-1 turn 4; newcomer-1 turn 4; prose-reader-1 turn 4; parser-breaker-1 turn 5; goal-seeker-1 turn 4; goal-seeker-1 turn 8; goal-seeker-1-opus turn 8; explorer-1 turn 31

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.11 | 0.05 |
| reading.refusedRate | 0.03 | 0.01 |
| faults | 0 | 0 |
| repetition | 30 | 28 |
| reach.places.never | 5 | 15 |
| reach.objects.never | 631 | 720 |
| reach.verbs.never | 62 | 75 |
| reach.handlers.never | 65 | 108 |
| reach.passages.never | 1299 | 1391 |
