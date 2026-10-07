# Where underground_caverns stands

_Last updated 2026-10-07: rounds 1-14 done; paused by Eric after round 14.
Pick up at round 15 (widen, v8: the last of Zork I). Playtesters never see
this file._

**Where it stands.** Rounds 1-14 are committed and pushed (the last is
`ef62c0a`). v7 is built: about 140 rooms, everything in Zork I but Hades,
the crystal skull and the endgame, with a 330-point ceiling (Zork's is
350). Round 7 added v4 (east of the troll), round 9 v5 (the thief and the
Cyclops), round 11 v6 (the dam, reservoir, river, rainbow and canyon),
round 13 v7 (the Mirror Rooms and the coal mine). The pin is still Sprout
`6c440f5`; check Sprout `main` before round 15.

**Run settings:** `turnCap: 250`, every persona on `opus` except `casual`
on `fable` (Fable's safety filter kept cutting off long runs), with the
framing and goals below.

**Round 14 ended by hand.** Its clerk paraphrased the revision plan's save
output, the workflow crashed on the JSON, and the save had been refused
(the plan cited rejected points). The plan was re-asked once of the
author, saved through `round.mjs save`, verified and committed. Filed as
sprout#487 (studio label): `clerk()` should re-ask on non-JSON stdout.
Friction 119 (a tied item in a run of things is not read on its own turn)
is not yet filed in Sprout.

**Next: round 15.** Write v8 into brief.md's Scope (the round-15 row
below: the Entrance to Hades and the exorcism with bell, book and candles,
the Land of the Dead and the crystal skull, the ancient map, and the
endgame Stone Barrow at 350 points), run the `author` pre-round pass,
verify, commit, push, play. Round 16 refines the whole game.

**Sprout issues filed from the port since the first pause:** #475-#486
(bugs #476, #480, #483, #484, #486; parser #475, #479; features #477,
#478, #481, #482, #485), #460 reopened, #487 for the studio.

## State

- **Branch:** `world/underground_caverns`, pushed. Rounds 1 to 5 are
  committed (the last is `8f5c685`, round 05: 5 runs, 15 points, 15
  accepted). The tree is clean.
- **Sprout pin:** `26e6124`. Sprout `main` has moved on by eight commits
  (`08988953` at the pause), most of them fixes for the port's own issues:
  - an NPC's act can tell its target (#466, for #456; a way an NPC guards
    stays the place's, #457);
  - an exit may say something as you pass (#468, for #462);
  - an allowed reading beats a refused one (#470, for #461 and #463);
  - `cancel wakes` (#469, for #458);
  - a comma before a verb chains commands, and a line has no addressee
    (#471, for #459 and #465);
  - a synonym out of reach answers `not_here` (#472, for #460);
  - `drop … here` (#473, for #464);
  - `all`'s order is pinned in the corpus, and #455 is recorded as a hole
    in the spec (#467).
- **Scope built:** v3, about a fifth of Zork I. That is 40 rooms
  (above ground, the house, the Cellar, the Troll Room, the chimney loop
  through the Gallery and Studio, the Maze, and the Grating Room), 4
  treasures (egg, canary, painting, coins) and a 70-point ceiling. The
  troll is an NPC (`sprout.Actor`).
- **The steering doc** is
  https://claude.ai/code/artifact/d28e7b50-f273-4d3f-ab09-5938c155fd6d,
  with one tab per round, 01 to 05.

## Round 6 crashed, and was set aside

Round 6 ran out of token quota after its playtests (four of six reports;
parser-breaker and prose-reader never reported), its measure and its
synthesis, before steering, revision or commit. A half-played round
cannot be resumed cleanly: the existing synthesis would be skipped, and
the two unreported runs would resume half-played sessions. So it was
moved, uncommitted, to the gitignored
`.studio/archive/underground_caverns-round-06-crashed-2026-10-06/`, and
round 6 starts fresh. Its four reports and synthesis are there to read.

## How to resume

1. **Pin.** Bump to Sprout `main`, as its own commit:
   `SPROUT_SRC=../sprout npm run sprout:bump -- <full sha>`. Bumping is
   recommended before round 6, since the fixes above change how the troll
   and the maze should be written. Then `npx sprout check` and
   `npx sprout test` on the world. Where they fail, or where a fix makes
   a friction workaround unnecessary (friction 45, 47, 53, 54, and the
   gate), run an `author` pass to port the world before the round.
   Check the manifest's stdlib sha after a bump.
2. **Round 6** (refine, same v3 scope). Launch the workflow by its path,
   never by name, and never resume with `resumeFromRunId`:

   ```
   Workflow({ scriptPath: ".claude/workflows/studio-round.js", args: {
     "world": "underground_caverns", "rounds": 1,
     "framing": "This place is a changed version of a classic text adventure you may know. Do not play it from memory: explore it fully, and go by what it tells you.",
     "goals": { "goal-seeker": "Get as high a score as you can.",
                "explorer": "Get the jewel-encrusted egg into the trophy case.",
                "newcomer": "Find some treasure and keep it safe." },
     "models": { "explorer": "fable", "goal-seeker": "fable", "casual": "fable",
                 "prose-reader": "fable", "parser-breaker": "fable", "newcomer": "fable" } } })
   ```

   An all-Fable round costs about 0.8M subagent tokens. Round 5's
   goal-seeker was cut off by a Fable safety false positive (request
   `req_011CfkM5Pkhcj4RpbFPQrLPV`); the round still counts with half its
   runs.
3. **Then alternate.** Each odd round widens the scope: write the next
   version into `brief.md`'s Scope, run an `author` pre-round pass to
   build it, verify, commit and push, then play. Each even round refines
   the same rooms. Keep going to the full Zork I unless the language or
   runtime blocks it, and file Sprout findings (label `from-studio`) after
   reproducing them.

## Rounds ahead

| Round | Kind | Scope added (Zork I's map) |
| --- | --- | --- |
| 6 | refine | v3 as built |
| 7 | widen, v4 | East of the Troll Room: the East-West Passage, Round Room, Loud Room (the echo; the platinum bar), Deep Canyon, Damp Cave, the Chasm's north-south passages, Dome Room, Torch Room (the ivory torch), Temple (the brass bell), Egyptian Room (the gold coffin) and Altar (the black book, the candles, the prayer up to the Forest) |
| 8 | refine | v4 |
| 9 | widen, v5 | The thief as a roaming NPC (stealing, his bag, opening the egg and so the canary), the Cyclops Room (the lunch and water, "Ulysses", the hole into the Living Room), the Strange Passage and the Treasure Room (the silver chalice) |
| 10 | refine | v5 |
| 11 | widen, v6 | The Flood Control Dam: Dam, Dam Lobby, Maintenance Room (the wrench, the screwdriver, the buttons, the leak and the putty), the bolt and the draining Reservoir (the trunk of jewels), Stream View and Atlantis (the crystal trident); the Frigid River with the inflatable boat and pump, the White Cliffs, Sandy Beach (the shovel, the scarab), Aragain Falls, the Rainbow and End of Rainbow (the sceptre and the pot of gold), and Canyon View and Bottom |
| 12 | refine | v6 |
| 13 | widen, v7 | The Coal Mine: Mine Entrance, Squeaky Room, Bat Room (the vampire bat and garlic, the jade figurine), Shaft Room and its basket, Smelly Room, Gas Room (the sapphire bracelet), the coal-mine maze, Timber Room, Ladder Top and Bottom, Drafty Room, Machine Room (coal to diamond) and the Slide back to the Cellar |
| 14 | refine | v7 |
| 15 | widen, v8 | The rest: the Mirror Rooms and the passages to them, the Cave and the Entrance to Hades, the exorcism (bell, book and candles) and the Land of the Dead (the crystal skull), the ancient map, and the endgame: the Stone Barrow when all treasures are in the case, at 350 points |
| 16 | refine | the whole of Zork I |

The order follows Zork's map outward from what is built. Each widening
round is roughly 10 to 25 rooms of author work, and the thief (round 9)
is the heaviest test of the NPC model.
