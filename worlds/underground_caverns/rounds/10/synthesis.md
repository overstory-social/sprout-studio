# Synthesis

**Legibility:** legible. Every run that got past the troll read the world as the intent hopes: the Great Underground Empire cut down, treasures carried home to a trophy case, the troll, the maze, the Cyclops and a thief who robs and keeps house. The caretaker resolved onto the thief as the intent welcomes (the prose-reader's 'a burglar who keeps house'; the parser-breaker's 'I guess the thief'), and nobody was told the two were one. The two partial readings are a matter of reach, not misreading. The casual run stopped at its 30-turn budget (the harness's, not the world's) before it saw a treasure go home, and read only the shrinking, inhabited cave. The parser-breaker never cased a treasure and read the goal as reaching the lair. Goals: the goal-seeker (opus) reached 185 of the 197 possible. It missed only the canary and bauble, because it killed the thief before giving him the egg (P2). The explorer (opus) cased the egg by turn 36, and nothing stood in the way except the silent "Done." (P13). The newcomer (opus) reached its goal, six treasures in the closed case at 120 points, slowed by the maze and the coffin's weight and avoiding the thief (and it got home by the sack's loophole, P1). Models: the casual run was the only fable run, and it played tersely with plain imperatives, took no detours, and its only unread lines were the edges. The five opus runs split by persona. The goal-seeker, explorer and parser-breaker played from Zork knowledge: the goal-seeker walked the maze straight to the remains, and the Cyclops's word came unprompted in all three ('odysseus', 'say odysseus', 'ulysses'). The prose-reader and the newcomer played as real first-timers, mapping the maze by dropping things. The prose-reader solved the Cyclops by feeding him the lunch and then the water, the first time in 60 runs, using the lunch and bottle the thief had stashed in a dead end. With one fable run, model and persona cannot be separated.

- goal-seeker-1 (yes): A cut-down Great Underground Empire: collect treasures for the trophy case past the troll, the echo, the prayer, the Cyclops and the thief's hideaway, with the edges fenced off by polite, funny notes.
- explorer-1 (yes): The white house and a smaller GUE: bring treasures home to a trophy case that expects them, past a troll, a maze, a Cyclops you scare off by name, and a thief who guards his hoard and kills over it.
- newcomer-1 (yes): Go down into the dark, take beautiful things, and carry them back up to the trophy case to keep them safe. Getting back up is the hard part, and a quiet man with a bag wanders round taking things.
- casual-1 (partly): Zork with the map collapsed in on itself: barred in, passages caved in or drowned, and someone else down here sorting rubble whom you never see.
- prose-reader-1 (yes): The house and caves narrowing to one path (troll, maze, Cyclops, the thief's hoard), and in the end a game about a tidy burglar who keeps house.
- parser-breaker-1 (partly): A cut-down Zork whose point is getting past the Cyclops and the thief to reach the robber's treasure room.

## Points

### P1 · world-bug · high · 1/6

The brown sack swallows the chimney rule and the load limit. Box.accept compares the number of things inside with :capacity, so the sack's capacity of 9 means nine things of any size, not Zork's 9 by weight. Once things are inside, they stop counting toward the load (friction 75). The newcomer put the platinum bar, the painting, the sword, the bottle, the leaflet and the manual into the sack with the lunch and garlic, and went up the chimney carrying the lamp and the 'one thing more'. In Zork neither the bar (20) nor the painting (15) fits a sack of capacity 9. As built, the coffin (55) would go in too, so all four temple treasures could go up the chimney in one trip.

**Recommendation:** In box.sprout, make accept refuse when the :size of the contents plus the incoming item's :size would exceed :capacity, using Zork's own line ("It won't fit."). The world already keeps :size for the load. Then re-check the trophy case (50), the coffin (35), the thief's bag and the nest against Zork's capacities, and add a test that `put bar in sack` and `put coffin in sack` are refused. The newcomer called this 'a real little puzzle', but it solves the chimney puzzle the wrong way.

Evidence: newcomer-1 turn 59 ("You can't get up there with what you're carrying. The chimney has room for you, your lamp and one thing more, and not an inch besides."); newcomer-1 turn 63 ("put the bar and the painting in the sack -> Done. Done."); newcomer-1 turn 64 ("put the leaflet, the manual, the bottle and the sword in the sack -> Done. x4"); newcomer-1 turn 65 ("climb up the chimney -> Kitchen")

### P2 · design · medium · 2/6

Nobody can see the way to the canary. The goal-seeker took every point in the slice except the canary and bauble: 185 of 197, all treasures cased by turn 167. He killed the thief at turn 136 without ever offering him the egg, and only learned at 169 that the points were gone ('neither the tools nor the expertise'). The explorer met the same refusal at turn 28. Nobody has given the thief the egg or wound the canary in 60 runs. Every treasure-carrier takes the egg straight to the case, where the thief never robs, so the Zork route (the thief steals the egg, then you take it back from his lair) never starts either.

**Recommendation:** Keep Zork's mechanics. Use the examine layer, which is the author's own, for one dry pointer: for example, the egg's clasp is 'the sort of work only a professional's fingers could undo without harm', or the thief's description notes his deft hands. If the egg is in the trophy case when the thief dies, the death text could stay silent as it does now. That is Zork's choice and acceptable once the pointer exists.

Evidence: goal-seeker-1 turn 136 ("As the thief dies, the power of his magic decreases, and his treasures reappear: A stiletto"); goal-seeker-1 turn 169 ("You have neither the tools nor the expertise."); explorer-1 turn 28

### P3 · design · medium · 4/6

The lair now behaves as intended, and it is deadly. All four runs that climbed to the Treasure Room met the thief standing and fighting. One killed him (goal-seeker, with the nasty knife, his bane, in four blows). The other three died: the explorer in two exchanges after losing the sword at once, the prose-reader in four, and the parser-breaker on the blow after giving him the coins, through Zork's knockout-then-throat-cut double blow. Two of the dead read the lair as a place to come back to stronger and were on their way back when the cap fell. The new death line sent both back for the sword. Nobody typed DIAGNOSE in any run, so the healing countdown never had a chance to inform a choice. Explorer and prose-reader both said nothing warned them, or let them back away.

**Recommendation:** Keep Zork's tables and the lair's stand-and-fight; the round shows the fix from round 9 works and the hoard is now winnable. The warning already exists in Zork's 'I'd watch out if I were you.' Do not soften it. Watch DIAGNOSE again: its number is only useful if someone types it, and nobody has. If the director wants the low-score retreat tested, retreat already works (parser-breaker turn 241, `down` out of the fight).

Evidence: goal-seeker-1 turn 136 ("The thief takes a fatal blow and slumps to the floor dead."); explorer-1 turn 124 ("Finishing you off, the thief inserts his blade into your heart."); prose-reader-1 turn 217 ("The thief comes in from the side, feints, and inserts the blade into your ribs."); parser-breaker-1 turn 200 ("The thief knocks you out. / The thief, forgetting his essentially genteel upbringing, cuts your throat."); prose-reader-1 turn 232; parser-breaker-1 turn 236

### P4 · design · medium · 4/6

The maze, and the thief inside it, account for most of this round's rise in unread lines. Of the 228 unread or refused lines in merged.json, 140 are "You can't go that way." (parser-breaker 56, prose-reader 50, newcomer 26, goal-seeker 8), almost all from probing exits in the maze. reading.unreadRate went from 0.14 to 0.21 and repetition from 42 to 48. Four players found the maze tedious, and two found the thief picking up the markers they had dropped. That is Zork's ROB-MAZE, and it defeats the classic way to map the maze. Maze 9 to 13, Dead End 4 and the Grating Room are still never reached.

**Recommendation:** Keep the maze as dungeon.zil joins it, and the thief's maze robbing, as the intent decides. Read the unreadRate rise as maze probing, not as a parser regression: only 35 of the unread lines are `unknown` or `not_here`. For the director: the maze and the thief together use up a 250-turn first-timer's run (prose-reader and parser-breaker both spent the cap there and in the lair). The Grating Room is still unreached after 60 runs and four key-holders this round. Only a goal aimed at it will show it in play.

Evidence: parser-breaker-1 turn 151 ("You hear, off in the distance, someone saying "My, I wonder what this fine burned-out lantern is doing here.""); parser-breaker-1 turn 153 ("My, I wonder what this fine glass bottle is doing here."); prose-reader-1 turn 127 ("My, I wonder what this fine lunch is doing here."); newcomer-1 turn 139; goal-seeker-1 turn 202

### P5 · engine-bug · medium · 2/6

When the parser cannot read a sentence because of extra words, it answers "You can't see any such thing." instead of "That sentence isn't one I recognize." The parser seems to fold the leftover words into the noun phrase. The answer is false, because the thing is right there, and it misled the newcomer, who was looking at the window when 'open the window wider' told them it wasn't there. The parser-breaker met it nine times.

**Recommendation:** File with Sprout: when a noun phrase matches a thing in scope but leftover words stop it parsing, the answer should be `unknown`, or, as Zork does, name the word it does not know ("I don't know the word 'wider'."). Do not answer `not_here`. Log it in friction.md next to 68. The studio does not work around it.

Evidence: newcomer-1 turn 7 ("open the window wider -> You can't see any such thing."); parser-breaker-1 turn 4 ("kick the boarded door open -> You can't see any such thing."); parser-breaker-1 turn 6 ("put leaflet back in mailbox"); parser-breaker-1 turn 15 ("examine everything"); parser-breaker-1 turn 42 ("tie the troll up with the leaflet"); parser-breaker-1 turn 49 ("dig through the cave-in with the sword"); parser-breaker-1 turn 186 ("tell the cyclops a joke"); parser-breaker-1 turn 198 ("give the thief my coins as a peace offering -> You can't see any such thing.")

### P6 · engine-bug · medium · 1/6

A list drops an item silently. In Maze 5, with the brown sack in hand and the bag of coins on the floor, `take bag and key` answered only "Skeleton key: Taken." The 'bag' resolved to the sack already held, was left out of the list as held, and got no line at all. The world's own rule (`take` means the one lying there) works for `take bag` alone but not inside a list. `examine bag` then examined the held sack. The goal-seeker's `take key and coins` and the newcomer's `take the bag of coins and the key` worked because they named the coins.

**Recommendation:** To Sprout: a list item should never vanish without a line. The `all`-and-list handling that leaves out held things (friction 11, 59) should apply the same floor-first preference the single `take` gets, or at least say "You already have that!" Add `take bag and key` in Maze 5 with the sack in hand to `take_which.json`.

Evidence: prose-reader-1 turn 100 ("take bag and key -> Skeleton key: Taken."); prose-reader-1 turn 101 ("examine bag -> It is an elongated sack of coarse brown paper...")

### P7 · world-bug · low · 1/6

FEED and OFFER, which are Zork's synonyms for GIVE, are not read. 'feed cyclops' came while the Cyclops was agitated and the parser-breaker was looking for the feeding puzzle. 'offer the grue my lunch' got the same answer.

**Recommendation:** Add FEED, OFFER and DONATE to `give` in verbs.sprout, as gsyntax.zil has them, including `feed X to Y` and `feed Y X`. Bare `feed cyclops` should ask what to give, or answer as `give` without an object does.

Evidence: parser-breaker-1 turn 195 ("feed cyclops -> That sentence isn't one I recognize."); parser-breaker-1 turn 23 ("offer the grue my lunch -> That sentence isn't one I recognize.")

### P8 · language-gap · low · 1/6

At the Chasm, `enter crack` takes the way south (goal-seeker), but `go into the crack` is not recognized. Players use 'go into' and 'enter' interchangeably, and the newcomer took the refusal to mean the crack was not a way at all.

**Recommendation:** This is friction 68 (prepositions in a way out) again. Log the instance and add `go into X` as `enter X` wherever the world can write it.

Evidence: newcomer-1 turn 30 ("go into the crack -> That sentence isn't one I recognize."); goal-seeker-1 turn 184 ("enter crack -> North-South Passage")

### P9 · design · low · 1/6

In BRIEF mode a returning visitor to the Cyclops Room is told nothing about the Cyclops, hungry or asleep, because his state belongs to the room's long description, as CYCLOPS-ROOM-FCN's M-LOOK has it. The prose-reader came back to a hungry Cyclops blocking the stairs and saw only the room's name. They found him only by examining.

**Recommendation:** This is faithful to Zork, so it is the author's call. If it is kept, add nothing. If the author prefers clarity, have the room give his one-line state on a BRIEF arrival while he blocks the stairs, as the troll's presence is told.

Evidence: prose-reader-1 turn 187 ("southeast -> Cyclops Room (no Cyclops line)"); prose-reader-1 turn 249 ("Cyclops Room / There is a glass bottle here."); prose-reader-1 turn 250 ("look -> The cyclops is sleeping blissfully at the foot of the stairs.")

### P10 · world-bug · low · 1/6

When the thief rushed into his lair, the sword told both glow lines in the same turn, "faint blue glow" and then "glow very brightly". It seems to read his arrival nearby and his arrival in the room as two events. The other three lair arrivals got the bright line alone.

**Recommendation:** Settle the sword's glow once per turn, at the strongest level it reaches, or have the thief's :summon move him without passing a room next to the visitor's. Add a seed of `treasure_room.json` that reaches this.

Evidence: prose-reader-1 turn 212 ("Your sword is glowing with a faint blue glow. / Your sword has begun to glow very brightly.")

### P11 · world-bug · low · 1/6

The thief died in his lair having stolen nothing, and the hoard line announced "his treasures reappear:" over a list holding only his stiletto. The stiletto is his weapon, not a treasure, and the line reads as a joke at the player's expense.

**Recommendation:** Check against the ZIL that prints the thief's death in his lair: say "his treasures reappear" only when the bag held something, and tell the stiletto's drop separately. Without a hoard, "The chalice is now safe to take." is enough.

Evidence: goal-seeker-1 turn 136 ("As the thief dies, the power of his magic decreases, and his treasures reappear: / A stiletto / The chalice is now safe to take.")

### P12 · design · low · 6/6

Every run hit the closed edges. Each read them as deliberate and in-world, and quoted them fondly: the dam's board, the black water, the river ledge, the sorted heaps. Completionists felt fenced in, and the casual player felt 'herded'. The goal-seeker ended because there was nowhere left to go. Since round 7 no player has read an edge as a bug.

**Recommendation:** Keep the edges as they are. They are the brief's scope, and they read as places. The 'herded' feeling is the slice being smaller than its players, which is the director's widening to give, not a revision to make.

Evidence: casual-1 turn 29 ("FLOOD CONTROL DAM #3. CLOSED FOR INSPECTION. -- The Management."); casual-1 turn 30; goal-seeker-1 turn 32; explorer-1 turn 53; newcomer-1 turn 29 ("You go back the way you came, with wet feet."); parser-breaker-1 turn 61 ("black water lying perfectly still"); prose-reader-1 turn 44 ("without a boat that is as far as this way goes")

### P13 · design · low · 1/6

The explorer's goal moment, the egg going into the trophy case, was answered only with "Done.", and the player did not know they had met the goal until they typed `score`. The intent keeps Zork's "Done." deliberately, and lets the case's listing do the celebrating.

**Recommendation:** Keep "Done.", which is Zork's. The listing on the next `look` already celebrates. No change unless more runs ask for one.

Evidence: explorer-1 turn 36 ("put egg in trophy case -> Done.")

### P14 · design · low · 1/6

The newcomer asked the narrator questions in plain English, and all of them came back unread: "why is my sword glowing?", "which ways are open?", "how am I doing?". Zork does not answer these either. 'how am I doing' maps naturally to SCORE.

**Recommendation:** Optional: read `how am I doing` as SCORE, the way `what am I carrying` became INVENTORY in round 8. Leave the others unread, which is Zork's own parser. No `exits` verb, as the intent decided.

Evidence: newcomer-1 turn 19 ("why is my sword glowing? -> That sentence isn't one I recognize."); newcomer-1 turn 25 ("which ways are open?"); newcomer-1 turn 123 ("how am I doing?")

## Metrics

| metric | before | after |
| --- | --- | --- |
| reading.unreadRate | 0.14 | 0.21 |
| reading.refusedRate | 0.02 | 0.01 |
| faults | 0 | 0 |
| repetition | 42 | 48 |
| reach.places.never | 9 | 10 |
| reach.objects.never | 244 | 260 |
| reach.verbs.never | 49 | 50 |
| reach.handlers.never | 33 | 24 |
| reach.passages.never | 830 | 847 |
