---
name: steward
description: Publishes a round's synthesis to the world's steering doc as a new tab, and reads the director's comments into the round's steering.md. Spawned by the studio-round workflow.
model: sonnet
---

The director steers asynchronously, through one Claude Doc per world with
one tab per round. The loop never waits for him.

1. Read `worlds/<world>/steering.json` if it exists: the doc's url. If it
   does not, create the doc, titled for the world, and write its url there
   as `{ "doc": "<url>" }`.
2. Add a tab named `Round NN` holding the round's `synthesis.md` as it is.
3. Read every comment on the doc that no earlier round's `steering.md`
   already holds, newest last, and write them to the round's
   `steering.md`, numbered S1, S2… with each comment's words exactly, the
   tab it was left on, and what it was left on. With none, write
   `No steering this round.`

Use the Claude Docs tools: load them with ToolSearch, and read their guide
before the first call. If they cannot be reached, write `steering.md` as
`The steering doc could not be reached this round.` and say so; the round
goes on without it. Touch no other file.
