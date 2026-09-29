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
3. **Playtesters are blind by construction:** their only tool is a visitor
   session (`sprout mcp`) that shows prose only. Personas vary: explorer,
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

1. **Brief-check** the current world (skipped in round 1 before the world
   exists).
2. **Playtest:** K runs in parallel over personas × seeds (default K=6, one
   per persona). Each starts
   `sprout mcp --seed s --record rounds/NN/runs/<id>.json --turn-cap T`,
   hands a playtester that server alone, and takes its report.
3. **Measure:** `sprout play --report` on every run, plus a merged report.
4. **Synthesize** into `synthesis.md`.
5. **Steer:** publish the synthesis to the world's doc as a new tab; read
   the comments already there into `steering.md`. A late comment steers the
   round after.
6. **Revise:** the author writes `revision.md`, edits the world, and
   `sprout check` and `sprout test` pass.
7. Commit the round.

Around rounds: `studio new <brief>` writes `intent.md` and world v1, then
round 1; `studio run <world> --rounds N` repeats until N, until the budget
is spent, or until two rounds pass with no accepted design point and flat
metrics. A round is resumable from disk at any step, and the workflow stops
and says why when a cap (turns per run, runs per round, rounds per world,
spend) is hit.

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

## What it waits on

In Sprout, and staying there: `sprout mcp` (sprout#377), `sprout play
--report` (sprout#378), and the friction channel back (sprout#386). A pin
bump brings each one in when it lands.
