# underground_caverns_2, round 2.5: revision

_A revision only, no playtest. The director read the steering doc for
rounds 01 and 02 and accepted every suggestion in it, the four I had
rejected on fidelity grounds included; those rejections are overruled.
Sprout is pinned at 9bfb5add, with four language changes made for this
world. `npx sprout check` and `npx sprout test` (12 tests) pass._

## The overruled points

### r1 P6: the illusion holds for the length of the spell, and `look` shows it

Accepted (overruled). Zork's one-in-five flicker on every description is
gone. When Fantasize is cast the adventurer numbers the casting and
broadcasts `:fantasize` with the number; every room's `Illusion` rolls
itself once for that number (one room in two gets one of the eight) and
lists itself with the room, `There is a copy of ZORK I here.`, on arrival,
on `look` and from the bucket, until the spell ends or the visitor dies,
when the broadcast of nought clears it. While it shows nothing it is
`:unseen`, so its words name nothing: a word for something never shown is
the parser's not-here, and the closet's real sphere is never shadowed by
a yellow one that is not there. The adventurer's `:peeking` roll in `after
command` is gone.

- `world/room.sprout` (Illusion: `:which`, `:cast`, `:unseen`, `named`,
  `ldesc`, `on :fantasize`), `world/adventurer.sprout` (`:fantasy`, the
  broadcast on cast, on `:spell_ends` and on death; the roll removed),
  `world/verbs.sprout` (`:fantasize`), `world/underground_caverns_2.sprout`
  (passes it).
- Test: `tests/wizard_debut.json` (the yellow sphere in the Narrow Tunnel
  on `look`, the copy of ZORK I in the Great Cavern on arrival and again on
  `look`, gone after the spell ends).

### r1 P15: an early hook

Accepted (overruled). The Wizard's first call is certain: the first time
his clock (two minutes) finds a visitor out of the barrow he appears, waves
the wand, peers "as though you were not at all what he had been expecting,
and had turned up anyway", speaks the word and casts one of Feeble, Fumble
and Fantasize, chosen at random, harmless and visible. In play at half a
minute a move that is the Narrow Tunnel or the bridge. After that he rolls
one in ten as I-WIZARD does.

- `world/wizard.sprout` (`:debut`, the `first` branch of `:wizard_turn`).
- Test: `tests/wizard_debut.json` (he comes on the second `wait`, 120
  seconds in).

### r2 P11: `examine bucket` from inside describes the bucket

Accepted (overruled; now the language's). The bucket's `describe` renders
`viewed`, which reads `seen == :examine` for the bucket's own words and the
well seen from it otherwise. The adventurer's refusal with
`bucket_close_up` is gone, so the reading is a description and not a
refusal in the host's figures.

- `world/well.sprout` (`viewed`, `describe`), `world/adventurer.sprout`
  (the `examine` permit's refusal and the passage removed).
- Test: `tests/bucket_strain.json` (`examine bucket` from inside, kind
  `described`), `tests/bucket.json` (the same at the bottom).

### r2 P14: Fence and Freeze out of the first minutes, and a cap

Accepted (overruled). Both: in a visitor's first thirty moves (fifteen
minutes at half a minute a move) the Wizard's roll turns Freeze into
Fumble and Fence into Fantasize, and any spell cast then lasts the
shortest three minutes rather than three to eighteen. His first call never
casts either. After thirty moves it is Zork's arithmetic.

- `world/wizard.sprout` (`early` in `:wizard_turn`),
  `world/adventurer.sprout` (`:spell_left` in `as target for enchant`).
- Test: `tests/wizard_debut.json` (the spell ends at three minutes).

## The rest of r2 P2: `wait`, "wait for bucket", warnings, `climb rope`

Accepted in full now; the piece I refused in round 2 (`wait` passing three
moves) is the language's `pass` and the director's design:

- **Plain `wait`** is the adventurer's part of `wait` with `pass 90
  seconds`, Zork's three moves, counted three on the score line; the wakes
  due in the pass are delivered, so the Wizard comes to whoever waits and
  a spell runs out while they wait.
- **The bucket counts moves**, not a wake: as it arrives at the top with
  water it broadcasts `:bucket_up`; each visitor keeps the hundred and an
  `after command` lowers it one a command (a `wait` three); at nought it
  broadcasts `:bucket_dry`, and the bucket at the top dries its water and
  comes down in that turn, with whoever is in it. The bucket cannot count
  for itself (friction 41).
- **"wait for bucket"** is `wait_for`, a verb typed by `Awaited`, which the
  bucket composes and so does `MissingBucket`, a stand-in each end of the
  well spawns as the bucket leaves it and consumes as it comes back, so
  the phrase reads only near the well. From the bottom with the bucket up
  it brings the count to nought, adds what remained to the moves, and the
  arrival is told in the same turn. `wait_for_bucket` and `:hurry` are gone.
- **Warnings before it leaves:** water poured in from outside no longer
  sends it up at once; it strains at its rope for one move ("...as though
  it had somewhere to be and meant to go there with or without you. It has
  not gone yet."), and the Circular Room's `after command` sends it up the
  move after, alone ("The bucket swiftly rises up, and is gone.") or with
  whoever climbed in. Water taken out on that move settles it. The Top of
  Well tells its occupants when the bucket goes back down.
- **The stand-in** answers `examine bucket`, `enter bucket`, `get in`,
  `look in bucket`, `climb bucket`, `kick`, `push` and `take bucket` in
  voice at either end while the bucket is away. `climb rope` already
  answered in voice (round 2); it stays.

- `world/well.sprout` (Errand `straining`, `:entered`/`:left`,
  `:bucket_lift`, `:bucket_dry`, `:moved` broadcasts, `MissingBucket`,
  `WellEnd`, `WellTop`, `WellBottom`), `world/adventurer.sprout` (`wait`
  with `pass`, `:bucket_away`/`:bucket_wait`, the count in `after
  command`, `on :bucket_up`/`:bucket_down`, `wait_for`, `get_in_bare`),
  `world/verbs.sprout` (`wait_for`, the four bucket messages),
  `world/thing.sprout` (`Awaited`), `world/underground_caverns_2.sprout`
  (passes).
- Tests: `tests/bucket_wait.json` (strain, leaves next move, the stand-in
  examined and entered, `wait` is three moves, `wait for bucket` brings it
  down the same turn), `tests/bucket_strain.json` (climb in on the grace
  move and rise), `tests/bucket_count.json` (thirty-four waits and it comes
  down), `tests/gas.json` re-pinned for the ninety seconds each `wait` now
  passes.

## Every other accepted point of rounds 01 and 02

Checked against both `revision.json`s: all were done in their rounds and
stand (r1 P1–P5, P7–P14; r2 P1, P3–P10, P12, P13, P15–P17). Two were done
only as far as the language then allowed and are now finished by it:

- **r1 P5 / r2 P5** (undeclared nouns): now `not_here` by the language;
  see friction 35.
- **r2 P6** (`take all from table`, `take all cakes`): now the language's
  narrowed `all`; `take_from` is removed. `tests/take_all.json` and the
  walkthrough (`take all cakes`).

One more, found in passing and fixed: the sword never glowed for the
Wizard, because a visitor is sent no `:arrived` (friction 40). He tells it
himself now (`:wizard_near`), in `world/wizard.sprout`,
`world/adventurer.sprout`, `world/verbs.sprout`;
`tests/wizard_debut.json` shows "Your sword has begun to glow very
brightly."

Steering: both rounds' `steering.md` say "No steering this round" and
their `steering.json` carry no comments; there is nothing else to answer.

## The four language changes, and how the world uses each

1. **`seen == :examine`** (friction 30): the bucket's `describe` reads it
   to give itself on `examine` and the well from it otherwise. Every
   `seen` in the world was checked: the rooms read `:arrival` only, and
   none meant "examined" by `:look`.
2. **`not_here` for an unknown noun** (friction 35): no workaround
   remained to remove (the Elsewhere scenery went in round 2); the
   illusion object stays for its voice and for P6, and is `:unseen` while
   it shows nothing so that its words then fall to the parser's not-here.
3. **Narrowed `all`** (friction 36): `take_from` and the adventurer's
   `:listing` are gone; `take all from the table`, `take everything off the
   table except the newspaper`, `take all newspapers`, `take all cakes` are
   read by `take`. A narrowed `all` that leaves nothing is the spec's
   `not_here`, noted in friction 36.
4. **`pass`** (friction 37): `wait` passes ninety seconds. Nothing else
   uses it; "wait for bucket" does not, by the director's design.

## Friction and intent

- `friction.md`: 30, 35, 36 and 37 marked answered by the language, with
  how the world now uses each; 2, 4, 21, 27 and 28 amended; 40 (a visitor
  is sent no `:arrived`) and 41 (the bucket cannot count its own moves)
  added.
- `intent.md`: the Wizard's first call and the early-play rules, the
  fixed illusion, the bucket's strain move, count and stand-in, `wait` as
  three moves, and the sword's glow for the Wizard.
