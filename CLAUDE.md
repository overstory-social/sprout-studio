# sprout-studio — house rules

The studio builds showcase Sprout worlds through the loop in
[`docs/loop.md`](docs/loop.md). Sprout's language is its spec,
`docs/design/sprout-design-spec.md` in overstory-social/sprout; where a
world, an agent or a synthesis disagrees with it, the spec wins.

- **Sprout comes from the pin.** Run `npm run sprout:install` after a
  clone or a pull that changed `sprout.pin.json`. Never link a Sprout
  checkout into `node_modules` or edit `.sprout/`; to try unpushed Sprout,
  `SPROUT_SRC=<path> npm run sprout:bump -- HEAD`. A bump is its own commit:
  the pin and the lockfile, with the Sprout range in the message.
- **Language friction goes back to Sprout, never around it.** An author who
  cannot express something logs it in the world's `friction.md`; a bug in
  Sprout is an issue there. The studio never patches Sprout.
- **`npm test` before every commit** that touches `schemas/` or
  `scripts/`; a changed schema is followed by `npm run schemas`, and the
  JSON it writes is committed with it.
- **The workflow is generated.** Edit `scripts/studio-round.template.js`,
  never `.claude/workflows/studio-round.js`, then `npm run schemas`.
- **Playtesters stay blind.** Nothing a playtester is handed names a file,
  a path, the round, the author, or that a world is a calibration world.
- **Work is tracked as issues** in overstory-social/sprout under the
  `studio` label until they transfer here.

## Branches, PRs, review, merge

- `main` is the integration head. **All work happens on a branch** cut
  from `main`, and reaches `main` only through a PR. Never commit to
  `main` directly.
- **A PR's body says** what and why, the issue it closes, how it departs
  from that issue and why, and the receipt: the short sha `npm test` ran
  at and its last line. A PR without the receipt is not ready.
- **Every PR is reviewed before it is merged.** Immediately after opening
  it, spawn the `pr-review` subagent (`.claude/agents/pr-review.md`) with
  the PR number. It re-runs `npm test` at the PR head and reports each
  finding marked **Blocking** or **Non-blocking**, then a summary whose
  verdict is **Approve** or **Changes requested**. Where it cannot post to
  GitHub, it hands its findings back and you post them verbatim, each as
  its own comment, attributed to it. **Wait for the summary**: no summary
  means the review did not run, and you say so rather than implying it
  passed.
- **Answer every finding in the thread**: fix it and say so, or say why it
  is not a problem. After fixing, ask the same reviewer to re-review the
  change; its new summary gives a fresh verdict.
- **Stop after two rounds on one finding.** If a fix for a finding has
  itself been found wrong twice, stop: revert that part to `main`'s
  behaviour, open an issue quoting the finding, and say so in the thread.
- **Merging.** The coding agent merges its own PR, squashed, when the
  reviewer's latest verdict is **Approve**, the receipt in the body is at
  the PR's final head, and the PR closes or references its issue; then
  closes the issue if the merge did not, and labels its unblocked
  dependents `ready`. Anything else, or any doubt, and the PR is
  **assigned to Eric** and left: an assigned PR means "ready for your
  eyes", so never assign one that is still moving. Eric can revoke agent
  merging by editing this paragraph.
- Commit messages and PR bodies end with the attribution lines the session
  gives you.
