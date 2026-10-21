# Publishing worlds

The studio's GitHub Pages site is where finished worlds are distributed
from. The Playdate player's "more worlds…" screen reads its signed index
and downloads the worlds it lists; a person can browse the same site and
copy a world onto a console by hand.

```
https://overstory-social.github.io/sprout-studio/
  index.html                                  the worlds, for a person browsing
  worlds/index.json                           the signed index the player reads
  worlds/<stem>-<hash8>.sproutworld           one file a build, named as the player names a download
```

## What is published

[`published.json`](../published.json) lists the worlds, by their folder
under `worlds/`:

```json
{ "worlds": [{ "world": "underground_caverns" }] }
```

A world's title on the site and in the player is its manifest's `title`,
or else its name as words, so the list holds nothing else. Adding a world
here publishes it on the next run; leaving one out stops new builds of it,
and its earlier builds stay listed (below).

## The run

[`.github/workflows/publish-worlds.yml`](../.github/workflows/publish-worlds.yml)
runs on a push to `main` that changes a world, the list, the public key,
the Sprout pin or the publishing code, and by hand from the Actions tab
(**Run workflow**). It installs Sprout from the pin, as
`npm run sprout:install` does on a laptop, and then
[`scripts/publish.mjs`](../scripts/publish.mjs):

1. **Carries every published build.** A Pages deploy replaces the whole
   site, and a console's save is keyed to the build it was played on, so
   the run fetches the live `worlds/index.json` and every cartridge it
   lists, each checked against its listed size and SHA-256. Where the site
   is not there yet (404), there is nothing to carry. Any other failure, a
   cartridge that does not arrive as listed, or a live index not signed by
   `publisher.pub` stops the run, so a deploy never drops a build.
2. **Tests and packs each listed world** with `sprout test` and
   `sprout pack`. A world whose tests fail stops the run.
3. **Signs the index** with `sprout index`, at the base address above. A
   world unchanged since the last run packs to the build already live and
   is listed once; a changed one is a new build beside the old.
4. **Checks the index as the player reads it**: the signature by
   `publisher.pub` over the canonical text, and each cartridge's name, size
   and SHA-256. Then it writes `index.html`.

The deploy job then fetches every cartridge back from Pages and fails if
one does not arrive byte for byte as the index lists it.

Every build ever published stays listed, so the player offers each one. A
build is never replaced and never moves: if a new pin packs an unchanged
world to other bytes under the same bundle hash, `sprout index` refuses,
and if a new pin names a carried build otherwise (a change to the rule
that makes a title into a file name), the run refuses; either way nothing
is published until that is settled in Sprout.

Since every build stays, a changed world is a new version. A build whose
world has the title and the version of one already published, but another
bundle hash, is refused, and nothing is published until `version` in the
world's `sprout.json` is bumped. A build already published keeps the
version it was signed with.

## The publisher's key

The index is signed with an Ed25519 key, so only the studio can publish to
every console.

- **The private key** is the Actions secret `SPROUT_INDEX_SIGNING_KEY`,
  the 64 hexadecimal digits of the `.key` file `sprout keygen` writes. The
  run reads it from the environment and writes it, only for `sprout index`,
  to a temporary file readable by its owner, removed straight after. It is
  never printed, never an argument, and never in the uploaded site. It
  never enters the repository.
- **The public key** is committed as [`publisher.pub`](../publisher.pub).
  The run puts it beside the private key, so `sprout index` refuses a
  secret that is not its private half, and checks the index and the live
  site against it. The player bakes in the same key at build
  (`SPROUT_INDEX_PUBLIC_KEY` in Sprout's `scripts/playdate-player.mjs`),
  so a new key is a new player build. A new key also stops the run at step
  1, because the live index is signed by the old one: carrying the old
  builds under a new signature is a decision to make then.

A run with no secret or no `publisher.pub` fails at its first step, saying
which, before it builds anything or touches the site.

### Setting it up, once

1. On your own machine, outside any repository:
   `npx sprout keygen publisher`. Keep `publisher.key` somewhere safe.
2. Commit `publisher.pub` at the top of this repository, through a PR.
3. Settings › Secrets and variables › Actions › New repository secret:
   name `SPROUT_INDEX_SIGNING_KEY`, value the contents of `publisher.key`.
4. Settings › Pages › Build and deployment › Source: **GitHub Actions**.
5. Actions › Publish worlds › Run workflow, on `main`.

## Trying it locally

The same script runs on a laptop with a throwaway key. Nothing it writes is
committed.

```sh
npx sprout keygen /tmp/throwaway
SPROUT_INDEX_SIGNING_KEY=$(cat /tmp/throwaway.key) \
  node scripts/publish.mjs /tmp/site --public-key /tmp/throwaway.pub
```

Before the site is live, the run finds no index to carry. Once it is, a
throwaway key is refused at step 1. Pass `--base-url` to carry from
somewhere else, such as a local server over an earlier `/tmp/site`.
