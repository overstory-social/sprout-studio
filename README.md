# sprout-studio

Rich, maximal [Sprout](https://github.com/overstory-social/sprout)
microworlds — complex storytelling, ornate prose, objects that interact in
unexpected ways — built by a loop of a strong author model and many blind,
automated playtesters, with Eric steering asynchronously. The loop is
[`docs/loop.md`](docs/loop.md).

The studio is driven by Claude Code: agent definitions in
`.claude/agents/`, one round as a saved workflow in `.claude/workflows/`.
It has no runtime code of its own beyond schemas and small scripts.

## Sprout, pinned to a commit

Sprout is unreleased and moving fast, so the studio does not install it
from npm. [`sprout.pin.json`](sprout.pin.json) names a commit of
`overstory-social/sprout`; `npm run sprout:install` checks that commit out
into `.sprout/src`, builds it, packs its seven publishable packages into
`.sprout/packs/`, and installs those tarballs — the same tarballs Sprout's
own `npm run e2e` installs, so the studio still dogfoods an install and
not a workspace link.

```sh
npm run sprout:install        # after a clone, or when the pin changed
npm run sprout:bump           # pin Sprout's main as it is now, and install it
npm run sprout:bump -- <ref>  # pin a branch, tag or sha instead
npx sprout check worlds/<name>/world
```

- The pin is a full sha, and a bump is a commit of its own (the pin and
  `package-lock.json` together), so every round in `worlds/` was played
  against a Sprout that can be named.
- `package-lock.json` records each tarball's integrity. Sprout's build is
  reproducible, so a clean `npm run sprout:install` at the same pin gives
  the same tarballs; a lockfile change on install without a pin change
  means it did not, and is worth a look before committing.
- `SPROUT_SRC=../sprout npm run sprout:bump -- HEAD` pins a commit from a
  local checkout, to try a Sprout change before it is pushed. Push it
  before committing the pin: a sha that is not on GitHub installs nowhere
  else.
- The packages keep the version in Sprout's `package.json`, which says
  nothing about what they hold; the pin is the version. When Sprout
  publishes to npm (sprout#406) and slows down, the `file:` dependencies
  become exact versions and the pin goes away.

## What agents hand back

A playtest report, a pairwise verdict, a synthesis and a revision plan
each have a schema in [`schemas/index.mjs`](schemas/index.mjs), emitted
as JSON Schema into `schemas/json/` for an agent's structured output.
Every judgement cites the transcript turns it rests on; a rating with no
evidence is invalid.

```sh
npm run validate -- playtest-report rounds/01/reports/explorer-7.json
npm run schemas   # after changing a schema: rewrites schemas/json/
npm test          # the schemas' specs, and schemas/json/ is current
```

`validate` is silent where the output is valid, and otherwise prints each
problem on its own line, as the orchestrator hands them back to the agent
on its one re-ask. A playtest report whose words name a round or a world
file is refused as a leak.

## Running a round

Ask Claude Code to run the `studio-round` workflow, as
`{ "world": "printers_shop", "new": true }` for a world that has only its
brief, or `{ "world": "printers_shop", "rounds": 3 }` to play on. Its
arguments, and when it stops, are in [`docs/loop.md`](docs/loop.md#one-round).

| agent | model | does |
| --- | --- | --- |
| `author` | Opus 5.5, or Fable 5.1 by the brief | writes and revises the world, `intent.md` and `friction.md` |
| `playtester` | Sonnet 5.5 | plays blind through a door; its only tools are `arrive`, `say` and `leave` |
| `synthesizer` | Opus 5.5 | the round's critique, read-only |
| `brief-checker` | Sonnet 5.5 | the world against its brief |
| `steward` | Sonnet 5.5 | the steering doc: publishes a round, hands back the comments |
| `mender` | Sonnet 5.5 | corrects a refused playtest report from itself, with no tools, inventing nothing |
| `clerk` | Haiku 4.5 | runs `scripts/round.mjs` for the workflow, which touches no file itself |

`pr-review` (Sonnet 5.5) is not part of the loop: it reviews this repository's own pull requests (CLAUDE.md › Branches, PRs, review, merge).

## Layout

```
worlds/<name>/
  brief.md          Eric's: direction, tone, constraints (invariants), showcase goal, round budget
  intent.md         the author's, sealed from playtesters: arc, secrets, what "done" looks like
  world/            the microworld folder (sprout.json and its files)
  friction.md       the author's "wanted to express X, couldn't" log
  rounds/NN/
    runs/<id>.json      recorded script (from `sprout mcp --record`)
    metrics/<id>.json   `sprout play --report`
    reports/<id>.json   the playtester's structured report
    synthesis.json      the synthesizer's critique, a valid `synthesis`; synthesis.md, the same for people
    steering.md         Eric's comments from the round's doc, as the author read them
    revision.json       the author's accept/reject for each point, then what changed, a valid `revision-plan`
    pairwise/<id>.json  from round 2, blind comparisons of this version and the last, each a `pairwise-verdict`
templates/brief.md  the brief a new world starts from
schemas/            what each agent hands back, as zod (index.mjs) and as JSON Schema (json/)
docs/loop.md        the loop, kept current
scripts/sprout.mjs  Sprout at the pinned commit: install and bump
scripts/round.mjs   a round's work on disk: status, open a run, save, measure, verify, commit
scripts/playtest-mcp.mjs  the playtester's door: a run's world as three tools
.claude/agents/     the loop's agents
.claude/workflows/studio-round.js  one round and more, generated from scripts/studio-round.template.js
```

Git history is the record of how a world grew. A run id carries its
persona and seed; nothing in `reports/` names the round number or the
author, so pairwise comparisons stay blind.
