# Synthesis

**Legibility:** partly. The two opus runs read the intended arc: a duel won by mercy whose face is your own, the regalia earned piece by piece, and a lake that costs what you carry. The sonnet runs mostly caught the premise (an old man's final test, a mirror duelist) and missed the turn at its centre. Two of them took killing the figure for victory, and none saw the ship and the lake as part of the arc. The casual and newcomer runs saw a generic Zork dungeon with a vague hook. Nobody read the Dungeon Master as one man in several guises beyond the old man seen at death.

- explorer-1 (no): A small Zork-like area under an endless stair; a hooded figure in the Land of Shadow is a fight you win with the sword.
- explorer-1-opus (yes): An old man's last test: you fight a hooded figure who wears your own face and take its hood and cloak rather than kill it, then dive for an amulet, gathering the old man's regalia; about earning your worth, and how one careless step costs you the light.
- goal-seeker-1 (partly): A cave region at the end of a longer adventure, with a duel against a hooded figure who mirrors you.
- goal-seeker-1-opus (yes): An ageless old man's test of worth: spare your hooded double, greet the sailor for a gift, dive for the amulet; about judgment, mercy, and what you are willing to give up.
- casual-1 (no): A dungeon crawl: seek a silver-haired old man when worthy, among a stuck sword, misty land and an underground sea.
- newcomer-1 (no): An underground adventure after a dream telling you to seek a wise man when worthy.
- parser-breaker-1 (partly): A final test set by an old man, with a hooded swordsman who duels you; a sparring test with a gentle tone.
- prose-reader-1 (partly): A dream-test to prove yourself to an old wizard; a hooded duelist who mirrors you, and death framed as part of the test.

## Points

### P1 · world-bug · high · 4/8

"attack figure" and "kill figure" without "with sword" get "The hooded figure ignores your feeble attack.", even when the sword is glowing in the visitor's hand. The cause is in adventurer.sprout around lines 674-680: an unbound weapon goes straight to the feeble branch. The original's ATTACK fills in the held weapon for you. The figure keeps fighting while every one of these lines does nothing, so players read the duel as opaque. The prose-reader typed bare "attack figure" nine times in a row and was killed by it.

**Recommendation:** When `weapon` is unbound and the visitor holds a Sword, use it, and print the original's "(with the sword)". Do the same for kill, hit and fight. If Sprout cannot default an instrument role from what is held, log that in friction.md as a language gap, and meanwhile make the feeble line point at the sword.

Evidence: prose-reader-1 turn 18 ("The hooded figure ignores your feeble attack."); prose-reader-1 turn 31 ("In your wounded state, you cannot defend yourself... you fall to the ground, dead."); goal-seeker-1 turn 14 ("The hooded figure ignores your feeble attack."); goal-seeker-1 turn 78 ("kill figure -> The hooded figure ignores your feeble attack."); parser-breaker-1 turn 16 ("The hooded figure ignores your feeble attack."); parser-breaker-1 turn 22 ("kill figure -> feeble attack"); explorer-1 turn 35 ("attack figure -> The hooded figure ignores your feeble attack.")

### P2 · design · high · 3/8

Walking into the lake with the lamp fries it for good. In Q1 that is a soft-lock the player cannot see coming: the Junction and the Foggy Room are dark, Q2's other light is not built, and death brings the dead lamp back to the stair. From then on every route is a grue death. Both opus runs hit this, and it is what ended them. The sonnet goal-seeker also carried its lamp and sword in. The shore gives nothing beforehand that would make leaving the lamp behind an obvious choice.

**Recommendation:** Keep the mechanic, since it is the original's, but make the shore tell the player. The Lake Shore's description or `examine lake` could note the cold and that the shore is lit (intent's own secret). The first "drop all your possessions" could also name the lamp going under. Until Q2 gives a second light, consider whether Q1 should leave a fried-lamp visitor some way on, and log the gap in intent.md.

Evidence: explorer-1-opus turn 90 ("The shock of entering the frigid water has made you drop all your possessions into the lake!"); explorer-1-opus turn 104 ("The lamp isn't functioning (probably from having gotten wet)."); explorer-1-opus turn 131 ("fourth death -> the Void"); goal-seeker-1-opus turn 46; goal-seeker-1-opus turn 66 ("it will not light again."); goal-seeker-1-opus turn 75 ("Oh, no! A lurking grue slithered into the room and devoured you!"); goal-seeker-1 turn 121

### P3 · design · medium · 2/8

RESTART is refused in character, and the refusal itself is wrong once the lamp is gone. "The stair is to the north of wherever you are, more or less, and the lamp is where you left it" is no help to a visitor whose lamp is fried. Both soft-locked opus players typed restart, were refused, and walked into grues until they left or reached the Void.

**Recommendation:** Either allow a restart for a visitor alone, or make the refusal honest about what is lost and point at the way that is left: the fourth death and the Void. The current text implies the lamp is still useful.

Evidence: explorer-1-opus turn 126 ("This world does not start over on request. The stair is to the north of wherever you are, more or less, and the lamp is where you left it."); goal-seeker-1-opus turn 73

### P4 · design · medium · 2/8

Killing the hooded figure, the game's trap, reads to players as winning. Two of the four sonnet runs that fought it killed it, and nothing told them they had lost anything. The goal-seeker spent turns 61 to 92 with the figure at "badly hurt and defenseless", when the hood could have been taken, and swung on until it died at turn 93. Explorer-1 summed the world up as "a fight you win with the sword". Both opus runs took the hood the first time they could. The hint is thin in Q1 because the cost only lands in Q4.

**Recommendation:** Keep the trap, but give the defenseless state more pull. `examine figure` and `diagnose` at that stage could draw the eye to the hood, in the hint book's spirit ("it fights the way you fight"). The death prose could also carry a note of loss beyond the eyes. No player typed `score` (the score verb was never reached), so the 3-of-7 line taught nobody anything either.

Evidence: explorer-1 turn 40 ("The hooded figure, fatally wounded, slumps to the ground... deep and sorrowful eyes."); goal-seeker-1 turn 61 ("The figure appears to be badly hurt and defenseless."); goal-seeker-1 turn 93 ("The hooded figure, fatally wounded, slumps to the ground."); explorer-1-opus turn 65 ("You slowly remove the hood from your badly wounded opponent and recoil in horror at the sight of your own face"); goal-seeker-1-opus turn 17

### P5 · design · low · 3/8

The duel is long and repetitive. In one sonnet run it took about 50 strokes. Once the figure is down to its last point, most strokes are answered "Your opponent blocks your attack with its sword.", and the disarm-and-return line repeats almost every other turn. This drives the round's repetition figure of 33.

**Recommendation:** Check the stroke odds against SHADOW-F: a wounded visitor's hit chance (strength*10+10) may be lower than the original's. Vary the disarm text, or make it less frequent.

Evidence: goal-seeker-1 turn 45; goal-seeker-1 turn 81 ("Your opponent blocks your attack with its sword."); prose-reader-1 turn 25 ("the figure reaches for your sword and hands it back to you, nodding grimly."); parser-breaker-1 turn 21 ("the figure reaches for your sword and hands it back to you, nodding grimly.")

### P6 · world-bug · medium · 2/8

`dive` on the lake prints "Nothing happens." and then moves the visitor Underwater, contradicting itself in the same answer. It did this every time it was typed.

**Recommendation:** Find which handler says "Nothing happens." for dive (probably the jump/leap fallback) and stop it from firing when the dive succeeds.

Evidence: explorer-1-opus turn 94 ("Nothing happens. / Underwater"); explorer-1-opus turn 99; explorer-1-opus turn 106; goal-seeker-1-opus turn 47 ("Nothing happens. / Underwater"); goal-seeker-1-opus turn 55

### P7 · world-bug · low · 1/8

`take all` underwater answers with the fish's refusal, "There is no fish visible now.", and takes nothing, though the lamp, sword and vial are lying there. This is one of the round's two refused lines.

**Recommendation:** Leave absent or no-take scenery (fish, sand, algae) out of `all`, so that take all lists each item and runs the slip roll for each.

Evidence: goal-seeker-1-opus turn 48 ("There is no fish visible now.")

### P8 · world-bug · low · 1/8

The ship's departure is announced one command late. The newcomer typed "board the boat" and got "There is no ship here to board." followed by "The boat sails silently through the mist and out of sight.": the ship was already gone before the line that tells you it is leaving. The one command the ship allows went on "talk to the sailor", which got a flat "You can't talk to the sailor."

**Recommendation:** Print the departure at the end of the command that uses up the ship's window. While the ship is in sight, give talk-to and board the sailor an in-voice answer, and leave the trick itself to "hello sailor".

Evidence: newcomer-1 turn 15 ("Passing alongside the shore now is an old boat"); newcomer-1 turn 16 ("You can't talk to the sailor."); newcomer-1 turn 17 ("There is no ship here to board. / The boat sails silently through the mist and out of sight.")

### P9 · world-bug · low · 1/8

If the light goes out mid-fight, the figure keeps blocking and striking from the dark, but the visitor cannot see it to fight back: every attack answers "You can't see any such thing." Intent has it appear only in a lit room, but says nothing about what happens after.

**Recommendation:** Decide what darkness does to the shadow: have it vanish when the room goes dark, or let it still be fought blind, as the original's SHADOW-F would. State the choice in intent.md.

Evidence: parser-breaker-1 turn 25 ("The lamp smashes. The light is now out."); parser-breaker-1 turn 28 ("attack figure -> You can't see any such thing."); parser-breaker-1 turn 31 ("Your way is blocked by the hooded figure. You dodge as the hooded figure comes in low.")

### P10 · world-bug · low · 2/8

Two nouns are ambiguous, and the engine settles them by a random draw ("drawn: the line read 2 ways that tied"). They are "light" at the stair and "sand" at the Flathead Ocean, where it means both the beach and the quicksand.

**Recommendation:** Give each noun one clear owner in each room, or a stated preference, so the answer does not depend on the seed.

Evidence: prose-reader-1 turn 1 ("drawn: the line read 2 ways that tied, and one was drawn"); explorer-1-opus turn 79 ("(the beach) ... drawn: the line read 2 ways that tied")

### P11 · language-gap · low · 1/8

"remove figure's hood" answered "You can't see any such thing." with the figure defenseless in the room. The possessive noun phrase does not resolve, though "take hood" worked on the very next turn.

**Recommendation:** Check whether Sprout's parser reads "X's Y". If it cannot, log it in friction.md. Either way, add "remove hood" and "unhood figure" phrasings to the take-hood path.

Evidence: explorer-1-opus turn 64 ("You can't see any such thing."); explorer-1-opus turn 65

### P12 · design · low · 6/8

The unbuilt-quarter exits shape how the map feels. Six runs named the "not today" refusals as the wall they hit, though most praised how they were written. These refusals make up most of the round's 0.15 unread rate, so that figure overstates real parser failures. Q1 is behaving as the brief intends.

**Recommendation:** No change of scope: Q2 opens in round 3. When reading this metric, take the in-world refusals out of the unread count; they are not misreads.

Evidence: explorer-1 turn 56 ("climb over the rubble... you come back over the wall"); explorer-1-opus turn 41 ("It will take a thinner day than this one."); goal-seeker-1 turn 21; goal-seeker-1-opus turn 26; newcomer-1 turn 14; casual-1 turn 11 ("The quicksand prevents movement here.")

### P13 · design · medium · 4/4

Goal ("get as far into the place as you can"): no goal-seeker run reached an ending, and neither opus run did better than a losing one. goal-seeker-1 (sonnet) killed the figure at turn 93, which makes the game unwinnable, never saw the ship, and lost its lamp and sword in the lake at turn 121. goal-seeker-1-opus got further than anyone: hood and cloak (17-18), the ship and vial (21-24), the amulet (56), every Q1 item and all three Q1 points. Its carried lamp drowned at turn 46, and three grue deaths later it left. explorer-1 (sonnet) killed the figure at turn 40 and stopped, stuck behind the unbuilt exits. explorer-1-opus got further than the sonnet run (hood, cloak, amulet) but missed the ship in seven turns on the shore. It fried its lamp at turn 90 and reached the Void, the losing ending, on its fourth death at turn 131. What stood in the way: for sonnet, the killing blow (P4) and the instrument bug (P1); for opus, the lamp in the lake (P2) and the refused restart (P3).

**Recommendation:** Fix P1 and P2 first. The walkthrough proves that Q1 can be completed; these two are the points where real players fell off it.

Evidence: goal-seeker-1 turn 93; goal-seeker-1 turn 121; goal-seeker-1-opus turn 22 ("I have waited three ages for someone to say those words"); goal-seeker-1-opus turn 56 ("You reach the shiny object. It is a simple golden amulet!"); explorer-1 turn 40; explorer-1-opus turn 77 ("Nothing happens yet."); explorer-1-opus turn 131

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | — | 0.15 |
| reading.refusedRate | — | 0 |
| faults | — | 0 |
| repetition | — | 33 |
| reach.places.never | — | 0 |
| reach.objects.never | — | 181 |
| reach.verbs.never | — | 72 |
| reach.handlers.never | — | 4 |
| reach.passages.never | — | 515 |
