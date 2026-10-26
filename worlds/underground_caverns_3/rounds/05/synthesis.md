# Synthesis

**Legibility:** partly. The two runs that played longest read the intent closely: a test set by the old man, worthiness shown by mercy and cleverness, a duel with yourself, things lost for good, and a melancholy ruin. The short runs (casual, newcomer, parser-breaker, prose-reader) got the dream, the old man and the test, and, in casual's case, the self-duel, but not the arc; they stopped within 9-18 turns. goal-seeker-1 filed no report. Its play shows it read the duel, the hood, the sailor and the old man correctly, but nothing records what it took the world to be about.

- casual-1 (partly): A dream-like final test below an endless stair: a duel against a hooded figure who fights exactly as you do, set by a silver-haired old man who wants you to prove yourself worthy.
- explorer-1 (partly): An underground-empire cave adventure: a returning adventurer tested by a silver-haired old man, with a cliff and a taunting man, a secret stair, an icy lake and grues.
- explorer-1-opus (yes): An old man is testing you in the ruins of an underground empire. To be worthy you gather the things he carries in the dream (staff, amulet, key, presumably ring and book), by kindness as well as cleverness: let a thief take the chest, feed a starving old man, fight a figure who fights like you. A lot of it is sad.
- goal-seeker-1 (partly): No report was filed. From the transcript: it fought the figure to its last point and took the hood at once (t18), hailed the sailor (t23), fed the old man (t37) and dived for the amulet. Those are the intended readings of each encounter, but there is no statement of what it thought the whole was about.
- goal-seeker-1-opus (yes): A final test to prove yourself worthy to a silver-haired old man by gathering his things one at a time. It wants cleverness, mercy instead of killing, and noticing chances that come only once; some things can be lost for good.
- newcomer-1 (partly): An underground dungeon after a dream about a final test: passages, a sunlit cliff, a sea and a ledge, and something unseen above that watches and plays with you.
- parser-breaker-1 (partly): A cave adventure that starts after a dream of a silver-haired man announcing a final test; dark passages, a grue and a sword in a rock.
- prose-reader-1 (partly): A Zork-tradition sequel: wake from a dream of a silver-haired old man who says you must prove yourself worthy, then explore the dark empire past a sword in a rock, a sunlit cliff and an underground sea.

## Points

### P1 · design · high · 2/8

Goal: neither goal-seeker run reached it ('get as far into the place as you can'). Neither got past Q2. goal-seeker-1 (sonnet, 117 turns, no report filed) had 4 of 7: the figure, the stroke, the ledge and the lake. It never reached the Western Shore, the Vista or the table. It left the ledge at t10 before the man came, and spent its last turns diving for an amulet the world had told it it had taken (see P3). goal-seeker-1-opus had 5 of 7 and stopped at t256, eaten in the grue lair. What stopped it: it never touched the table on view II while carrying a light, so it never found the repellent. The altar death at t148 scattered the torch to the Dead End. It got the torch back at t218 and drowned it testing the lake at t226. It touched the table on III in the dark at t193. It had also eaten the waybread at t77, so the old man was never fed and the door never opened. It missed the ship by waiting (t20-21) and lost the man at the cliff (t18).

**Recommendation:** The repellent chain is the wall. A visitor who has the table figured out still has to guess that Room 8 is the thing to visit, and that it needs the torch carried in. Two options: let the Southern Shore's dark slope point past light, toward something that keeps grues off, or let the Room 8 image mention the can. Either connects the lair to the repellent before the visitor spends the torch testing the lake.

Evidence: goal-seeker-1 turn 10 ("down (off the ledge, the turn after 'open chest')"); goal-seeker-1 turn 97 ("You reach the shiny object. It is a simple golden amulet!"); goal-seeker-1-opus turn 148 ("Sacrificial Altar ... **** You have died ****"); goal-seeker-1-opus turn 193 ("You touch the table and are instantly transported to another place! It is pitch black."); goal-seeker-1-opus turn 226 ("The torch goes under with the rest, and goes out with a hiss, and will not be lit again by anything down here."); goal-seeker-1-opus turn 256 ("Oh, no! Dozens of lurking grues attack and devour you!")

### P2 · design · medium · 4/8

Re-runs: opus got further than sonnet on both seeds. explorer-1-opus took the staff (t31), fed the old man and opened the door (t53-55), took the amulet, and pre-positioned the torch through the table (t192-194). It found the repellent in Room 8 (t204-205), crossed the lair to the Key Room and took the key (t234). Sonnet's explorer-1 drowned its lamp at t78 and died in the dark until it gave up. What stopped opus: it went down the manhole (t239) onto an aqueduct whose arch had fallen at t85. It was trapped there (t240 waterfall, t241 broken arch, t244 hole too high), jumped (t248), and walked blind to its fourth death and the Void (t249-261), with its lamp drowned by its own test at t163. goal-seeker-1-opus reached 5 of 7 against sonnet's 4, and the Vista and the table, and stopped at the repellent chain (P1).

**Recommendation:** The long runs now reach the end of Q2, which is the round's real progress. Give the fallen arch a sign the visitor can read from the Key Room side before going down the manhole: a line at the manhole, or at the Key Room after the quake. The original leaves a visitor stuck on the aqueduct, and this world can keep that, but only after the visitor has been told. See P8.

Evidence: explorer-1-opus turn 31 ("He pulled me up and gave me the plain wooden staff"); explorer-1-opus turn 192 ("Damp Passage. There is a torch here, burning."); explorer-1-opus turn 234; explorer-1-opus turn 241 ("The channel ends abruptly to your north where a supporting pillar has crumbled, casting the arch into the chasm."); explorer-1-opus turn 248 ("This was not a very safe place to try jumping."); explorer-1 turn 78 ("Your lamp goes under with the rest."); goal-seeker-1 turn 97; goal-seeker-1-opus turn 136

### P3 · world-bug · high · 1/8

The amulet vanished after the world said it was taken. At t97 'take shiny object' printed 'You reach the shiny object. It is a simple golden amulet!', and two turns later 'inventory' said 'You are empty-handed.' Every other run that got that line was wearing the amulet afterwards. After the drowning at t99 the amulet was nowhere: 'take amulet' and 'take shiny object' were refused with 'You can't see any such thing' at t109, t110, t112 and t115. Meanwhile 'search sand' at t111 still said something in the sand 'catches the light'. The code spawns the Amulet in the visitor and sends the shiny thing :taken. Something between the take (in the same turn as the cold warning at count 6) and the next surfacing removes it.

**Recommendation:** Replay goal-seeker-1's seeds to t99 and follow the Amulet from `spawn Amulet in self` (adventurer.sprout, the ShinyObject branch). Check whether the cold warning, the surfacing or the death clock moves or destroys it. Make the sand's 'catches the light' line depend on the shiny thing still being there. If the cause is in Sprout's spawn into an actor, file it there.

Evidence: goal-seeker-1 turn 97 ("You reach the shiny object. It is a simple golden amulet! You are becoming very weak."); goal-seeker-1 turn 99 ("You are empty-handed. Your strength gives out, and you drown"); goal-seeker-1 turn 109 ("take amulet: You can't see any such thing."); goal-seeker-1 turn 111 ("You don't come across anything unusual, although something in it, now and then, catches the light."); explorer-1-opus turn 73 ("A golden amulet (being worn)")

### P4 · design · high · 3/8

The lake took a light in all three runs that played long, and each loss ended or crippled the run. explorer-1 dropped the lamp correctly the first time (t43). On its return the Lake Shore printed only its name, so the warning was not shown, and it carried the lamp in at t78; it died repeatedly in the dark after. explorer-1-opus drowned the lamp on purpose at t163, and goal-seeker-1-opus the torch at t226, both testing whether a light can cross. Both had read the warnings and quoted them in their reports. The warnings land; what fails is that the only way to learn that no light crosses is to spend one.

**Recommendation:** Keep the loss. Make the shore's warning an arrival line whenever the visitor arrives carrying a lit light, in brief mode too, so a return trip is told. Answer the question the testers were asking somewhere on the far shores. The Southern Shore's dark passage, or the Western Shore, could say that light does not come across this water and something else will have to get you through. That is the hint book's spirit, and it points to the repellent rather than to a test.

Evidence: explorer-1 turn 77 ("Lake Shore (name only on a return; the warning is in the full description)"); explorer-1 turn 78 ("Your lamp goes under with the rest. There is a hiss, a brief glow in the water below you, and then not."); explorer-1 turn 91 ("dry lamp: That sentence isn't one I recognize."); explorer-1-opus turn 163; goal-seeker-1-opus turn 226 ("The torch goes under with the rest")

### P5 · design · medium · 4/8

Calling to the man at the cliff gets nothing in his voice, and the runs that called mostly left the ledge. explorer-1's 'shout hello' at t12 was answered with a scream. Its 'say hello, who is up there?' at t13 coincided with his appearance, but it scrambled down at t14 and lost him. newcomer's 'call out hello' at t11 got 'You can't see any such thing', 'shout "who is up there?"' at t12 got a scream, and it left at t14. goal-seeker-1-opus's 'shout up' at t12 got a scream. explorer-1-opus's 'shout for help' at t29 got 'You can't see any such thing'. After he had hauled it up, its 'man, who are you?', 'talk to man' and 'ask man about valuables' (t34-36) got nothing it could use; it wished it could talk to him.

**Recommendation:** At the ledge and the cliff top, have `shout`, `yell`, `call out`, `hello`, `who is there` and `shout for help` reach the man through the ledge's GLOBAL-MAN stand-in. Before he appears: a chuckle and silence, which gives a reason to stay. While he is away: his promise to be back. A line addressed to him ('man, ...') is Sprout's no-addressee decision (caverns 2 friction 7); log it in friction.md.

Evidence: explorer-1 turn 12 ("(shout) Aaaarrrrgggghhhh!"); explorer-1 turn 14; newcomer-1 turn 11 ("You can't see any such thing."); newcomer-1 turn 14 ("scramble down"); goal-seeker-1-opus turn 12 ("(shout) Aaaarrrrgggghhhh!"); explorer-1-opus turn 29 ("shout for help: You can't see any such thing."); explorer-1-opus turn 34 ("man, who are you?: That sentence isn't one I recognize.")

### P6 · design · medium · 2/8

While the man is away, the ledge's wait line repeats word for word and gives no sense of progress. goal-seeker-1-opus waited four turns (t14-17), saw the same line each time, scrambled down at t18 and lost the man and the staff for good. explorer-1-opus waited eight times between t20 and t30 before he came back, and named the repeated text as the only flaw in the prose. The repetition metric flags the line 4+3 times in one run and 4 times in the other.

**Recommendation:** Write the wait as a sequence rather than one line: the chest being opened above, coins counted, a pause, footsteps coming back to the brink in the last move or two. That way a visitor who stays four turns can tell the fifth is worth it. The timing can stay the original's.

Evidence: goal-seeker-1-opus turn 14 ("Time passes... Nothing comes down the cliff yet. He said a short while, and a man with a chest to go through has his own idea of short"); goal-seeker-1-opus turn 18 ("down"); explorer-1-opus turn 20; explorer-1-opus turn 31 ("grab rope (he is back)")

### P7 · design · medium · 2/8

Round 4's problem is fixed: both runs that reached the Vista touched the table, explorer-1-opus six times and goal-seeker-1-opus three. But the new 'would rather be touched' lean is attached to the altar image too, and both runs touched the table at once on view IV and died. For goal-seeker-1-opus that death scattered the torch to the Dead End, which cost it about seventy turns and, in the end, the torch.

**Recommendation:** Keep the altar as the table's one death in four, but drop the invitation from view IV, or turn it ('the surface, for once, seems content to be looked at'). The trap then rests on the image, which is the original's warning, rather than on a line written to lure the hand.

Evidence: explorer-1-opus turn 82 ("an altar still wet with the blood of human sacrifice ... seems to lean a little nearer as it goes, the way a thing does that would rather be touched than looked at."); explorer-1-opus turn 83 ("Sacrificial Altar ... **** You have died ****"); goal-seeker-1-opus turn 147; goal-seeker-1-opus turn 148; goal-seeker-1-opus turn 218 ("take torch (in the Dead End)")

### P8 · design · medium · 1/8

After the earthquake, the manhole is a one-way drop onto a broken aqueduct, and nothing says so first. explorer-1-opus felt the tremor at t85, far from the aqueduct. 150 turns later it went down the manhole (t239) and found the waterfall unclimbable (t240), the arch fallen (t241) and the hole out of reach (t244). It jumped (t248) because it saw no other way out, and that death was its third of four.

**Recommendation:** After the quake, have the Key Room or the opened manhole carry a line: water that no longer sounds below, or a draft from a gap that was not there. Make the Aqueduct View's pillar line visible from the Southern Shore side as well. The original's trap stays; the visitor walks into it told.

Evidence: explorer-1-opus turn 85 ("There is a great tremor from within the earth."); explorer-1-opus turn 239; explorer-1-opus turn 244 ("The hole is too far above your head."); explorer-1-opus turn 248 ("This was not a very safe place to try jumping.")

### P9 · engine-bug · medium · 4/8

The parser drops the rest of a line without saying so, and splits commas into commands that give false answers. 'shout hello' (explorer-1 t12), 'shout up' (goal-seeker-1-opus t12) and 'shout "who is up there?"' (newcomer t12) were each read as a bare '(shout)'. 'wait 20' was read as '(wait)', one move (goal-seeker-1-opus t82). 'say hello, who is up there?' gave three answers: '(say)', 'Talking to yourself is a sign of impending mental collapse.' and 'That sentence isn't one I recognize.' (explorer-1 t13). 'say hello, sailor' was refused as unknown (goal-seeker-1 t22).

**Recommendation:** Add these lines to friction 38/39 and raise them as a Sprout issue: an unused remainder should be refused or read, not silently dropped. In the world, phrases for `shout <text>`, `say <text>, <name>` and `wait <number>` (as several moves, or refused in character) would cover the common forms.

Evidence: explorer-1 turn 12 ("(shout) Aaaarrrrgggghhhh!"); explorer-1 turn 13 ("(say) Talking to yourself is a sign of impending mental collapse. ... That sentence isn't one I recognize."); newcomer-1 turn 12 ("(shout)"); goal-seeker-1-opus turn 82 ("(wait) Time passes..."); goal-seeker-1 turn 22 ("That sentence isn't one I recognize.")

### P10 · design · low · 3/8

The duel reads as attack-spam, and the healing after it is a long silent wait. casual typed 'attack figure' nine times (t7-15) and quit bored, saying it had 'no sense of progress'. explorer-1-opus (t97-107) and goal-seeker-1-opus (t63-73) attacked eleven times each, then backed off. goal-seeker-1-opus spent about thirty-five turns mending: waits, diagnoses, 'wait 20', 'sleep', and the waybread eaten at t77, with diagnose saying the same thing each time. The repetition metric's largest line counts are these attacks.

**Recommendation:** Restore the original DIAGNOSE's second line, 'You will be cured after N moves.', which turns the mending into a known wait. Read `sleep` and `rest` as waits. Leave the duel's odds alone; they are the original's.

Evidence: casual-1 turn 15; explorer-1-opus turn 97; goal-seeker-1-opus turn 76 ("You are hurt quite badly. One major wound would probably kill you."); goal-seeker-1-opus turn 84 ("sleep: That sentence isn't one I recognize."); goal-seeker-1-opus turn 77 ("which somebody, somewhere, who was weak and tired and hungry, may have cause to regret.")

### P11 · world-bug · low · 4/8

Small parser and scenery gaps. 'pull back the hood', with the figure waiting and its hood in reach, got 'You can't see any such thing' (goal-seeker-1 t17); 'take hood' worked the next turn. 'smell the mist' in the Land of Shadow had no mist to find, though the brief puts the mist there (parser-breaker t11). Bare 'search' (explorer-1-opus t48), 'feel around' in the dark (explorer-1-opus t154) and 'dry lamp' (explorer-1 t91) went unread. 'climb the stair' both asked for a direction and answered 'The stairs are endless.' (parser-breaker t3).

**Recommendation:** Add `pull back hood` (no 'of figure') to the hood's intents. Give the shadow rooms a mist that answers examine and smell. Read bare `search` as searching the room. Answer `dry` in character: the lamp will not dry. Let `climb stair` give one answer.

Evidence: goal-seeker-1 turn 17 ("pull back the hood: You can't see any such thing."); parser-breaker-1 turn 11 ("smell the mist: You can't see any such thing."); parser-breaker-1 turn 3 ("You should say whether you want to go up or down. The stairs are endless."); explorer-1-opus turn 48 ("search: That sentence isn't one I recognize."); explorer-1 turn 91

### P12 · design · low · 2/8

Five of the eight places never reached are the mine rooms beyond the Timber Room. Both runs that rode the table there were turned back by the narrow way west's 'You cannot fit through this passage with that load' (goal-seeker-1-opus t137, explorer-1-opus t220). The refusal does not say that carrying anything at all, the light included, is the load, and the table's three moves leave no time to work it out.

**Recommendation:** Keep the rule. Let the refusal say the passage takes nothing but you, so a visitor can try it empty-handed on the next ride.

Evidence: goal-seeker-1-opus turn 137 ("You cannot fit through this passage with that load."); explorer-1-opus turn 220 ("You cannot fit through this passage with that load. You suddenly find yourself back in the viewing room!")

### P13 · engine-bug · low · 3/8

The reach metric counts neither the Sacrificial Altar nor the Prison Cell as reached, although explorer-1-opus (t83) and goal-seeker-1-opus (t148) died on entering the altar and every death passed through the cell (goal-seeker-1 t99). A place a visitor is carried into and out of within one turn is not recorded. This is friction 24's failure, now on a second place, so 'reach.places.never' overstates by two.

**Recommendation:** Add the altar to friction 24 and to the Sprout issue: reach should record a place that is entered, even when the gate moves the visitor on in the same turn.

Evidence: explorer-1-opus turn 83 ("Sacrificial Altar ... **** You have died ****"); goal-seeker-1-opus turn 148; goal-seeker-1 turn 99 ("You find yourself deep within the earth in a barren prison cell.")

### P14 · design · low · 1/8

The ship was missed by waiting through its one command, despite the cupped ear in the arrival line. goal-seeker-1-opus waited when the ship appeared (t20), the ship sailed on the next wait (t21), and 'hello sailor' at t23 got 'Nothing happens anymore.' The other two runs that met the ship (newcomer t16, goal-seeker-1 t21-23) got the vial, the latter after its 'say hello' held the ship once as designed.

**Recommendation:** No change needed; the window is the original's and the hold works. If anything, the lesson should land after the fact, not before: one line in the empty-shore voice, such as 'he had been listening for something', would do it.

Evidence: goal-seeker-1-opus turn 20 ("He has a hand cupped to one ear, turned toward the shore ... and the ship is not slowing down."); goal-seeker-1-opus turn 21 ("It will not be back; this shore sees it once, and has seen it."); goal-seeker-1 turn 21 ("the ship, for a moment, holds alongside")

### P15 · design · low · 2/8

Waiting is the most repeated thing in the long runs, mostly at the ledge and at the Vista waiting for the indicator to change. Repetition rose from 15 to 49. Part of that is the 500-turn cap, but explorer-1-opus's runs of 6-7 waits at the Vista (t186-191, t196-202, t209-217) are the round's longest, and it named 'long stretches of waiting at the ledge and at the Vista' as what dragged.

**Recommendation:** Let a wait at the Vista say the image underneath the surface stirring as the indicator nears its change, so the four moves have texture. Keep the clock as it is.

Evidence: explorer-1-opus turn 186; explorer-1-opus turn 196; goal-seeker-1-opus turn 142

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.1 | 0.08 |
| reading.refusedRate | 0.01 | 0.01 |
| faults | 0 | 0 |
| repetition | 15 | 49 |
| reach.places.never | 13 | 8 |
| reach.objects.never | 413 | 401 |
| reach.verbs.never | 81 | 71 |
| reach.handlers.never | 22 | 17 |
| reach.passages.never | 1175 | 1119 |
