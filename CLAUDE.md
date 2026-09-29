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
- **Playtesters stay blind.** Nothing a playtester is handed names a file,
  a path, the round, the author, or that a world is a calibration world.
- **Work is tracked as issues** in overstory-social/sprout under the
  `studio` label until they transfer here.
- Commit messages and PR bodies end with the attribution lines the session
  gives you.
