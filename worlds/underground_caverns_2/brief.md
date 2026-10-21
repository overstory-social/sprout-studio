# Brief: underground_caverns_2

_Eric's. The author reads it before writing and before every revision; the
brief-checker holds every revision to its constraints. Playtesters never
see it._

## Direction

Recreate Zork II: The Wizard of Frobozz in Sprout, as the world
`underground_caverns_2`, titled **Underground Caverns 2: The Revenge**.
Port its geography, its objects and puzzles, its parser conventions, and
its prose. The map, the objects and the puzzles stay faithful. The prose
starts from the game's own words, but it need not stop there: the author
may extend or tweak it to give the place more life, and every piece of
scenery a description names deserves a description of its own. For now,
a little spice, in Zork's voice. The visitor wakes inside an ancient
barrow whose door has shut behind them, with a lamp and a sword on the
ground. The Wizard of Frobozz's half-ruined domain lies to the south.

The point, as with Zork I, is to pressure-test Sprout as a language: what
it can build and what it cannot, measured against a classic of the genre.
Faithfulness to the original's map and mechanics is the yardstick. Where
Sprout cannot do what Zork II does, the author writes the nearest thing
Sprout can do and logs what was lost in `friction.md`. That log is as
much a product of this world as the world itself.

The game starts fresh. Nothing carries over from Zork I: no score, no
inventory.

### Sources

Zork II's source is released under the MIT licence (Copyright 2025
Microsoft). The author may read it. It is not Sprout, so it cannot be
copied as code; it is the reference to be faithful to.

- The ZIL source: https://github.com/historicalsource/zork2
  (`2dungeon.zil` for the rooms and objects, and the action files for the
  logic of every puzzle).
- Only Zork I, II and III are in scope. Other Infocom titles are archived in
  ZIL but are not licensed for release, and are not to be read or used.
- The world's README credits the source and its licence, and so will the
  published index entry.

### Reuse

Copy whatever is useful from `worlds/underground_caverns/world` (the verbs,
the parser conventions, darkness and the grue, the adventurer, the NPC
machinery, the boat), and adapt it. Nothing is shared by import. Once Zork
III is built, the obvious common pieces will be promoted to Sprout's
standard library. `friction.md` starts fresh. An entry may cite the
caverns' own entry by number rather than repeat it, where nothing has
changed.

### Scope: four quarters, in eight rounds

Zork II is 86 rooms in `2dungeon.zil` and about 147 objects, with 400
points. It is built a quarter at a time:

- **Odd rounds widen.** Each adds a quarter of the game, built whole: its
  rooms, objects, puzzles and characters.
- **Even rounds refine.** Each revises what the playtests found, adding
  no new territory.

The quarters below follow the map's regions. The author may move a room
or a puzzle across a boundary so that no puzzle chain is split between
quarters, and says why in `intent.md`.

- **Q1, round 1: the barrow to the Carousel (26 rooms).**
  - **The way in:** Inside the Barrow, the Narrow Tunnel, the Foot
    Bridge, the Great Cavern, the Shallow Ford and the Dark Tunnel.
  - **The garden:** its north end, the Gazebo, the Formal Garden, the
    Topiary, the Path Near Stream, the Marble Hall and the Deep Ford.
  - **The Carousel Room,** spinning the visitor's sense of direction, and
    Room 8.
  - **The Riddle Room** and the Pearl Room, the well (the Circular Room
    below, the Top of Well), and the Tea Room with what is to eat and
    drink there.
  - **The Posts Room and the Pool Room,** as one gets there.
  - **The robot's rooms:** the Low Room, the Machine Room, the Dingy
    Closet and the Cage, and the robot itself.
- **Q2, round 3: the dragon and the Bank (19 rooms).**
  - **The ravine:** the Ledge in Ravine, the End of Ledge, the Tiny Room
    and the Dreary Room.
  - **The dragon's country:** the Dragon Room and the Dragon's Lair (the
    dragon, and the princess), the Fresco Room, the Stone Bridge, the
    Cool Room and the Ice Room.
  - **The Bank of Zork:** its Entrance, the two Tellers' Rooms and the two
    Viewing Rooms, the Small Room, the Vault, the Safety Depository and
    the Chairman's Office.
- **Q3, round 5: the volcano and the Menhir (24 rooms).**
  - **The volcano:** the Lava Room, the Lava Tube, the Volcano View, the
    Volcano Bottom, and the volcano's air on the balloon's way up (the
    Volcano Core and its three ledge heights).
  - **The ledges:** the Narrow Ledge and the Library, and the Wide Ledge
    and the Dusty Room with its safe.
  - **Beyond the Menhir:** the Menhir Room, the Kennel, the Stairway, and
    the nine Oddly-angled Rooms.
- **Q4, round 7: the Wizard's domain and the end (17 rooms).**
  - **The Wizard's rooms:** the Cobwebby Corridor, the Guarded Room, the
    Wizard's Workshop, Workroom, Trophy Room and Quarters, the Pentagram
    Room (and what it summons), and the Aquarium Room and the Murky Room.
  - **The four Rooms of Mist.**
  - **The end:** the Cerberus Room, the Crypt Anteroom, the Crypt, and the
    Landing beyond it. This is the end of Zork II with the score at 400,
    and anything of the game still missing.
- **The Wizard of Frobozz** wanders the whole game casting his spells. He
  comes in with the first quarter that can carry him, at the latest in
  round 3. Where he first appears is the author's call, said in
  `intent.md`.
- **Exits into a quarter not built yet** are present, as in Zork II, and
  turn the visitor back with an in-world line.

The scope widens by the director's steering, not by the author on their own
initiative.

## Tone

Zork's own: dry, wry, laconic, a little arch. The narrator is Zork's
narrator, and the Wizard is the doddering, petulant, faintly menacing old
man the original makes him. New prose, where the original has none, is
written in that same voice.

## Constraints

- A visitor arriving reads, before anything else they do:

  ```
  Inside the Barrow

  You are inside an ancient barrow hidden deep within a dark forest. The barrow opens into a narrow tunnel at its southern end. You can see a faint glow at the far end.
  ```

  followed by the lantern and the sword in Zork II's own words: "A
  strangely familiar brass lantern is lying on the ground." and "A sword
  of Elvish workmanship is on the ground."

- `out` there reads: `You may not recall, but when you entered, the door of the barrow shut behind you. There is no way out.`
- Every room in scope has the original's name, and its description keeps
  what the original says is there and which ways lead out. Added or
  changed prose is in Zork's voice.
- Every thing a room's description names can be examined, and answers
  with a description of its own.
- Zork's movement abbreviations work: `n`, `s`, `e`, `w`, `ne`, `nw`,
  `se`, `sw`, `u`, `d`, and `l` for look and `i` for inventory.
- An exit to a part of the game not built yet answers with an in-world
  line, never a fault or a silent refusal.
- Every character who acts on their own is an NPC whose kind composes
  `sprout.Actor`, and what they do to the visitor they do by acting. In
  scope as their quarters arrive: the Wizard, the robot, the dragon, the
  princess, and what the Pentagram summons.
- A verb is offered only where something it applies to is in range. A
  verb for a few things types its role by a kind those things compose, as
  the caverns' friction 135 does; a verb with no role is kept for what
  works everywhere.
- `tests/walkthrough.json` plays from the barrow to the end of every
  quarter built so far, and passes.
- The manifest carries the title `Underground Caverns 2: The Revenge`.
- No fault in any run.
- The world is playable alone; nothing needs two visitors to finish.
- Every difference from the original's map or mechanics that the author
  was forced into is logged in `friction.md`, with the spec section it
  touches. Differences in prose need no entry.

## Showcase goal

What Zork II asks of a language that Zork I did not:

- **A wandering spellcaster** whose spells change what the visitor can do
  for a while.
- **A room that scrambles the compass** until something stops it, and a
  robot that is told what to do and does it.
- **A visitor who changes size,** and what fits through where.
- **A dragon who follows you,** and a princess who follows you home.
- **A bank whose walls of light** move you as you pass.
- **A balloon,** a vehicle the visitor rides up a volcano's air on its
  own turns.
- **A demon who grants one wish.**

Where any of these cannot be built as the original has it, that is a
finding, not a failure. Telling the robot what to do is likely to meet
Sprout's decision that a line has no addressee. Log it, and build the
nearest thing.

## Budget

- **Rounds: 8.** The odd rounds widen (1: Q1, 3: Q2, 5: Q3, 7: Q4), and
  the even rounds refine.
- **Playtests per round:** 6, one per persona. The goal-seeker is given a
  goal each round, to get as far into the place as they can.
- **Turn cap per run:** 150 for rounds 1–4, 300 for rounds 5–8, so that the
  later quarters are reached in play and not only by the walkthrough.
- **Playtesters:** sonnet. Runs that get stuck, where no run reaches an
  ending, are played again on opus (`fallback: "opus"`).
- **Spend ceiling:** the workflow's default, about 400k tokens a round.

## Author

Fable 5.1.
