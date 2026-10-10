# Where underground_caverns stands

_Last updated 2026-10-09: **the project is complete.** All sixteen planned
rounds are played and committed. Playtesters never see this file._

**Where it ended.** Zork I is built whole in Sprout, on the branch
`world/underground_caverns` (last commit: round 16, `d29773f`, pinned to
Sprout `c87c30b`):

- all 110 rooms of `1dungeon.zil`, every takeable object, all 19
  treasures and Zork's 350 points;
- three NPCs on `sprout.Actor`: the troll, the thief and the Cyclops;
- the endgame: the map at 350 points, the secret path and the Stone Barrow;
- `tests/walkthrough.json` plays the whole game to the end (354
  commands), one of 104 world tests that all pass;
- about 12,800 lines of Sprout in 32 files; `friction.md` holds 165
  entries on what the language made hard.

**What is missing:** the thief never visits the drained Reservoir bed (his
round is a fixed list), and there is no save, restore or restart, since a
world cannot start itself over. In play, no playtester reached 350 in 400
turns, so the map, the path and the barrow are proven by the walkthrough
test rather than by a playtest.

**Sprout issues:** 41 filed with the `from-studio` label over the project
(23 since closed by fixes, 18 open), plus studio issues fixed by studio
PRs #2–#5 and #7–#10.

**To play on:** a further refine round is launched as below with the run
settings below; a later cycle could mutate the space, as the brief foresees.

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
