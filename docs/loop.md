# The loop

Designed with Eric, 2026-09-28 (tracking: overstory-social/sprout#387).
This file is the design as it stands; change it when the design changes.

## The goal

Build rich, maximal Sprout microworlds that show what the language can do:
complex storytelling, ornate prose, and objects that interact in
unexpected ways. A strong author model writes them; many automated, blind
playtesters play them; Eric steers asynchronously.

```
brief (Eric) ──► AUTHOR (Opus 5.5 / Fable 5.1) ──► world vN + sealed intent
                   ▲                                   │
                   │                                   ▼
            revision plan              PLAYTEST ROUND: K Sonnet 5.5 visitors
            (accept/reject              × personas × seeds, each blind, fresh start,
             each point)                until "done" or the turn cap
                   │                                   │
          steering (Eric, async, doc)                  ▼
                   ▲              metrics (engine) + reports (players)
                   └──── SYNTHESIS ◄───────────────────┘
```

1. **The brief** (`brief.md`, from [`templates/brief.md`](../templates/brief.md)):
   direction, tone, constraints every revision is checked against, the
   showcase goal, and a budget.
2. **The author** writes the world and a **sealed intent** (`intent.md`):
   the arc, the secrets, what "done" looks like. The synthesizer measures
   _legibility_ — whether players worked out what the world is about —
   against it.
3. **Playtesters are blind by construction:** their only tools are a
   visitor's, `arrive`, `say` and `leave`, through a door onto one run
   (`scripts/playtest-mcp.mjs`, played by `sprout mcp`'s own session), and
   they read prose only. They are never told their seed. Personas vary: explorer,
   goal-seeker, impatient casual, prose reader, parser-breaker, newcomer to
   IF. The player decides when it is done.
4. **Evidence comes in two kinds:** engine metrics no model can flatter
   (`sprout play --report`: refused lines, faults, reach, passages nobody
   saw), and structured reports whose every rating cites a transcript turn.
5. **The synthesis** separates consensus from outliers and sorts every
   point into world design, world bug, engine bug or language gap.
6. **Steering:** each synthesis goes to a Claude Doc for the world, one tab
   per round, which Eric comments on when he likes. The loop does not wait;
   the author reads whatever comments are there before revising.
7. **Revision:** the author accepts or rejects each point with a reason (the
   brief and artistic direction outrank the median playtester; Eric's
   steering outranks both), then edits. A brief-checker confirms the
   constraints still hold.
8. **Graduation** is Eric's call. A graduated world moves to
   `showcase/<name>/`, keeps its best playthroughs as goldens, and is
   re-played on every Sprout release.

Sycophantic ratings are handled with calibration worlds and blind pairwise
comparison of versions. Engine metrics carry the weight that absolute
scores cannot.

## One round

The saved workflow `.claude/workflows/studio-round.js` runs it, with the
agents in `.claude/agents/`. It is generated from
`scripts/studio-round.template.js` by `npm run schemas`, which writes the
schemas into it, since a workflow reads no file; everything on disk is
done by the `clerk` agent running `scripts/round.mjs`.

1. **Brief-check** the world (`brief-checker`), from round 2 on. A
   violation goes back to the `author` once; one that stays stops the round.
2. **Playtest:** a run for each persona × seed (default: the six personas,
   seed 1; the impatient casual player has at most 30 turns), in parallel.
   Each run is opened by `round.mjs open`, which writes a ticket (world,
   seed, turn cap, time per turn, the file it is recorded to) under a
   random **door**. The `playtester` is handed the door, a name and its
   persona, and its only tools are `arrive`, `say` and `leave` on the
   door's server (`scripts/playtest-mcp.mjs`), which plays the world
   through `@overstory/sprout-mcp`'s session, exactly as `sprout mcp` does,
   and records it to `runs/<id>.json`. Its report is kept only if valid.
3. **Measure:** `sprout play --report` on every run, and `sprout test
   --report` over them all as `metrics/merged.json`.
4. **Synthesize** (`synthesizer`) into `synthesis.json`, and
   `synthesis.md` for people.
5. **Steer** (`steward`): publish `synthesis.md` to the world's doc as a
   new tab, and hand back every comment on it; `steering.json` keeps those
   no earlier round read, and `steering.md` numbers them S1, S2… for the
   author. The steward writes nothing itself. The loop does not wait; a
   late comment steers the round after, and an unreachable doc is logged
   and the round goes on.
6. **Revise** (`author`): `revision.json` answers every point and comment,
   then the world is edited, and `sprout check` and `sprout test` pass.
7. **Commit** the round.

Every agent's output is validated through `round.mjs save` and re-asked
once with the problems (a playtest report through the `mender`, whose one
tool is Read and which is told to use nothing but the report, since the
player cannot be asked again; a steering of the
steward again, since only it reads the doc); a second
refusal is logged and dropped. A report of a run whose recording holds no
line typed is dropped at once and never mended: there is no play to
report, and a mender could only invent one. The clerk carries each output to `save` as
JSON it retypes into a here-document: validation catches an output that
arrives malformed, not one altered into another valid one, which is a
risk this first cut accepts.

Run it by asking Claude Code to run the `studio-round` workflow with
arguments:

| argument | means | default |
| --- | --- | --- |
| `world` | the folder under `worlds/`, holding `brief.md` | required |
| `new` | write `intent.md` and world v1 first (`studio new`) | only where the world is not yet playable |
| `rounds` | how many rounds to play (`studio run`) | 1 |
| `personas`, `seeds` | the runs of a round; each run's door seeds its own stream of turn seeds, from its seed and persona | all six, `[1]` |
| `framing` | a line every playtester is told before it plays, e.g. that the place is a changed version of one it may know | none |
| `goals` | a goal for a persona's players, as `{ "goal-seeker": "Get as high a score as you can." }`; the synthesizer is told each and judges whether it was reached. Both this and `framing` are written blind: they name no file, folder, round, author or calibration world, and the workflow refuses one that names a file, folder, round or calibration world | none |
| `turnCap`, `advancePerTurn` | turns per run; seconds each turn moves time | 150, 30 |
| `maxRuns`, `maxRounds` | the caps on runs per round and rounds per call | 12, 12 |
| `author` | the author's model, from the brief: `opus` or `fable` | `opus` |
| `perRoundBudget` | tokens a round is taken to need, against a `+500k`-style budget | 400000 |

It stops, and says why, when the rounds asked for are played, when the
budget left is less than a round, when two rounds pass with no accepted
design point and flat metrics, when the brief cannot be met, or when a
round has fewer than half its runs reported (it stops before the
synthesis, uncommitted, to be played again) or no synthesis, and when a round's runs cannot be
measured or the round cannot be committed. It is resumable from disk: a
round not yet committed is picked up where it stands, playing only the
runs not yet reported and skipping a synthesis, steering or revision whose
file is there. A round is marked committed only by the commit that holds
it.

A door server records its process and the Sprout pin it loaded in
`.studio/servers/`, and `round.mjs open` stops any still holding an older
pin before a run is opened: the client may keep one server running across
a pin bump, and the next call starts it again at the new pin.

Resume by launching the workflow again, never with the Workflow tool's
`resumeFromRunId`. A resumed run replays its agents' cached answers,
including the clerk's first `status`, which describes the world as it was
before the round began, so steps whose files are already on disk run
again. A session also keeps the copy of `.claude/workflows/studio-round.js`
it started with. After the workflow changes, launch it by its path
(`scriptPath`) or from a new session, rather than by name.

## Decisions

- **The studio is its own repo** and consumes Sprout as installed packages,
  not a workspace link. While Sprout moves fast those packages are built
  from a pinned commit ([README](../README.md#sprout-pinned-to-a-commit));
  once Sprout publishes and slows down, they come from npm.
- **Orchestration is Claude Code:** agent definitions and a saved workflow.
  There is no Agent SDK program.
- **Eric steers asynchronously** through a Claude Doc, one tab per round.
- **Playtesters see prose only,** a pure text-adventure experience. There
  are no chips.
- **A playtester's server is the studio's door, not `sprout mcp` itself.**
  A subagent's MCP servers are fixed in its definition, and a run's seed,
  cap and recording differ each time, so the door server hosts every open
  run behind an opaque token, through the same session code `sprout mcp`
  uses. The playtester's definition also leaves out `CLAUDE.md`, which
  describes the loop.

## What it stands on

In Sprout, and staying there: `sprout mcp` (sprout#377) and `sprout play
--report` / `sprout test --report` (sprout#378), both in the pinned
commit; the friction channel back (sprout#386) is still to come.
