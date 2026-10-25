# Brief: underground_caverns_3

_Eric's. The author reads it before writing and before every revision; the
brief-checker holds every revision to its constraints. Playtesters never
see it._

## Direction

Recreate Zork III: The Dungeon Master in Sprout, as the world
`underground_caverns_3`, titled **Underground Caverns 3: The Dungeon
Master**. Port its geography, its objects and puzzles, its parser
conventions, and its prose. The map, the objects and the puzzles stay
faithful. The prose starts from the game's own words, but it need not stop
there: the author may extend or tweak it to give the place more life, and
every piece of scenery a description names deserves a description of its
own. For now, a little spice, in Zork's voice. The visitor dreams of an
old man who calls this the final test, and wakes at the foot of an endless
stair with the old brass lantern at their feet. Below lie the last corners
of the Great Underground Empire: a land of shadow, a cold lake, a ruined
aqueduct, Flathead's Royal Museum, and the Dungeon Master's own door.

The point, as with Zork I and II, is to pressure-test Sprout as a
language: what it can build and what it cannot, measured against a classic
of the genre. Faithfulness to the original's map and mechanics is the
yardstick. Where Sprout cannot do what Zork III does, the author writes the
nearest thing Sprout can do and logs what was lost in `friction.md`. That
log is as much a product of this world as the world itself.

The game starts fresh. Nothing carries over from Zork I or II: no score,
no inventory. Zork III's score is out of 7, and it counts as the original
does: a point is had for starting down a path with promise, not for a
treasure brought home, and the score line says so ("Your potential is 3
of a possible 7, in 120 moves."). The seven points are: the hooded figure
first appearing, first striking it with the sword, first reaching the Cliff
Ledge, first entering the lake, first touching the Scenic Vista's table,
first pushing a wall of the Royal Puzzle, and pressing the time machine's
button with its dial at 776.

### Sources

Zork III's source is released under the MIT licence (Copyright 2025
Microsoft). The author may read it. It is not Sprout, so it cannot be
copied as code; it is the reference to be faithful to.

- The ZIL source: https://github.com/historicalsource/zork3. The game is
  what `zork3.zil` compiles: `3dungeon.zil` for the endgame's rooms and
  objects and the Royal Puzzle's, `3actions.zil` for every other room and
  object and the logic of every puzzle (the opening is `GO`, at the end of
  `3dungeon.zil`; the ending is `NIRVANA-F` in `3actions.zil`), and the
  shared `g*` files (`gglobals.zil`, `gverbs.zil`, `gparser.zil`,
  `gsyntax.zil`, `gmain.zil`, `gclock.zil`) for the parser, the common
  verbs, darkness and the grue, the sailor, and the earthquake's timing
  (`gmain.zil`). `shadow.zil`, `tm.zil`, `dungeon.zil`, `actions.zil` and
  the other un-prefixed files are older copies that the game does not
  compile; where they differ from `3actions.zil` or `3dungeon.zil`, those
  two win. `invisicluesiii.mss`, the hint book, may be read for what a
  puzzle intends.
- Only Zork I, II and III are in scope. Other Infocom titles are archived
  in ZIL but are not licensed for release, and are not to be read or used.
- The world's README credits the source and its licence, and so will the
  published index entry.

### Reuse

Copy whatever is useful from `worlds/underground_caverns/world` and
`worlds/underground_caverns_2/world` (the verbs, the parser conventions,
darkness and the grue, the adventurer, the lamp, the NPC machinery, the
orders the robot took, timed events, Room 8), and adapt it. Nothing is
shared by import. This is the third of the three; by round 8,
`friction.md` ends with a short section naming the pieces all three
worlds now copy, for promotion to Sprout's standard library.
`friction.md` otherwise starts fresh. An entry may cite the earlier logs by
number rather than repeat them, where nothing has changed: "caverns N" for
`worlds/underground_caverns/friction.md`, "caverns 2 N" for
`worlds/underground_caverns_2/friction.md`.

### Scope: four quarters, in eight rounds

Zork III is 89 rooms (35 in `3dungeon.zil`, 54 in `3actions.zil`) and
139 objects (58, 63, and 18 in `gglobals.zil`). Nine of the objects are
the parser's own machinery (the global and local-global holders, the room
list, "it", "a number", "a direction", the not-here and pseudo objects,
the adventurer), so about 130 are things a visitor can meet, about 40
of them scenery or presences that several rooms share. Some rooms are
more than one place in play: the Room in a Puzzle is a six-by-six grid of
36 squares, the three Prison Cells stand for eight cells around a pit,
and eight of the museum's rooms are the same rooms in another year. It is
built a quarter at a time:

- **Odd rounds widen.** Each adds a quarter of the game, built whole: its
  rooms, objects, puzzles and characters.
- **Even rounds refine.** Each revises what the playtests found, adding
  no new territory.

The quarters below follow the map's regions, and no puzzle chain is split
between them. The seven things the Dungeon Master asks for at the end
(the hood, the cloak, the amulet, the staff, the book, the ring and the
key) come one or two from each of the first three quarters; each one's
own puzzle lies whole in its quarter, and only the asking is the fourth's.
The author may still move a room or a puzzle across a boundary so that no
chain is split, and says why in `intent.md`.

- **Q1, round 1: the stair, the Land of Shadow and the lake (18 rooms).**
  - **The way in:** the Endless Stair, the Junction (the great rock, and
    the Elvish sword in it), the Barren Area, the Creepy Crawl and the
    Foggy Room.
  - **The Land of Shadow:** its eight rooms, all named Land of Shadow, with
    the quicksand and the mist; the hooded figure, the fight and its
    strength on both sides, the hood and the cloak; and the Flathead
    Ocean, with the Viking ship that passes once, its sailor, and the vial.
  - **The lake:** the Lake Shore, the Aqueduct View, On the Lake and
    Underwater, the cold, the air, the fish and the roc, and the shiny
    object that is the amulet.
  - Death and its return: the old man's visit in the cell, the possessions
    scattered, the fourth death the last.
- **Q2, round 3: the cliff, the old man, the far shores and the aqueduct
  (24 rooms).**
  - **The cliff:** the Cliff (the trees, the rope, the waybread), the
    Cliff Ledge (the chest), the Cliff Base and the Hairpin Loop; the man
    at the cliff, the chest hauled up, and the staff.
  - **The old man:** the Damp Passage, the Dead End beside it, and the
    Engravings Room, with the runes, the sleeping old man, the waybread
    given, and the secret door it reveals.
  - **The Scenic Vista:** the Western Shore and the Scenic Vista, its
    torch, its indicator and its table; the four places the table shows
    and sends the visitor to for three moves: the Timber Room and the mine
    rooms within reach of it in those moves (the Ladder Bottom, the Ladder
    Top, the mine's Dead End, the Drafty Room and the Machine Room), Room
    8 and the grue repellent, the Damp Passage, and the Sacrificial Altar.
  - **The key and the aqueduct:** the Southern Shore, the two Dark Places
    (the grue lair), the Key Room, its key and its manhole cover, and the
    Aqueduct, the High Arch and the Water Slide down to the Damp Passage.
  - **The earthquake,** once, between the 70th and the 140th move: the
    tremor everywhere, the pillar at the Aqueduct View, and the arch that
    falls, so the aqueduct is crossed before it or not at all. The cleft
    it opens at the Great Door is Q3's.
- **Q3, round 5: the Royal Museum (18 rooms).**
  - **The way to it:** the Tight Squeeze, the Crystal Grotto, the Royal
    Hall and the Great Door, with the cleft the earthquake opened.
  - **The museum:** the Museum Entrance, the Jewel Room (the cage, the
    pedestal, the Crown Jewels, the plaque) and the Technology Museum (the
    gold, grey and black machines).
  - **The Royal Puzzle:** the Royal Puzzle Entrance and its warning note,
    the Side Room with the steel door and its slot, and the Room in a
    Puzzle: the sliding sandstone walls, the grid drawn around the
    visitor, the ladder, and the ancient book.
  - **The time machine:** the dial, the seat and the button, and the
    museum in other years: its Museum Entrance, Jewel Room, Technology
    Museum, Royal Puzzle Entrance and Side Room after it closed, and its
    Museum Entrance, Jewel Room and Technology Museum unfinished in 776,
    with the guards outside the door, Lord Flathead, the robot that tidies
    the machine away, and the ring hidden under the seat. What the visitor
    does in 776 changes the present.
- **Q4, round 7: the Dungeon Master's domain and the end (29 rooms).**
  - **The way down:** the stairs beyond the secret door, the Button Room
    and its red button, and the Beam Room and its beam.
  - **The mirror box:** the five Hallways and the ten Narrow Rooms either
    side of them, the Guardians of Zork, and Inside Mirror, with its
    panels, its poles, its T-bar and its compass rose, rotating and
    sliding along the channel; "FROTZ OZMOO".
  - **The dungeon:** the Dungeon Entrance and its door, the Narrow
    Corridor, the South, East, West and North Corridors, the Parapet with
    its sundial and button, and the three Prison Cells; the Dungeon
    Master himself, who follows, stays, and does what he is told; the
    bronze door; and the Treasury of Zork. This is the end of Zork III,
    with the score at 7 and the Dungeon Master's last words, and anything
    of the game still missing.
- **The Dungeon Master** is one character in several guises, and he
  first must appear in Q1, in round 1: his voice in the opening dream, the
  hooded figure in the Land of Shadow (whose face, unhooded, becomes an
  old man's), and the old man who visits the visitor's cell after a
  death. Q2 brings the sleeping old man in the Engravings Room and the man
  at the cliff; Q4 brings him as himself, and at his door the visitor
  sees all three in his face. How one character wears four bodies is the
  author's call, said in `intent.md`.
- **Exits into a quarter not built yet** are present, as in Zork III, and
  turn the visitor back with an in-world line. So does swimming toward an
  unbuilt shore.

**The scope widens by this brief's schedule, on the author's own
initiative.** No director's steering is needed to widen, and the author
does not wait for one. The revisions after rounds 1 and 2 refine Q1. The
revision after round 3 first answers that round's points, then builds Q2
whole, opens Q1's exits onto it, and extends the walkthrough through it;
the revision after round 4 refines. The revision after round 5 adds Q3 in
the same way, and the revision after round 7 adds Q4; those after rounds
6 and 8 refine. Every revision says in `intent.md` which quarters are
built. A widening is the brief's own change, made on top of the accepted
ones; since the revision plan ties every change to a point, its changes
cite the round's point that bears most on the unbuilt exits or the
visitors' reach, or failing one the round's first accepted point, and
their `what` begins "By the brief's schedule".

**Round 8 also finishes the world for release:** the revision after it
leaves the ending reachable, the score at 7 of 7 reachable in one game,
the walkthrough playing from the Endless Stair to the Treasury of Zork
with 7 of 7 and the Dungeon Master's last words, the README current, and
`sprout check` and `sprout test` passing.

Steering comments, if any appear, still win: one that holds a quarter
back, brings one forward or changes what it holds outranks this schedule.

## Tone

Zork's own: dry, wry, laconic, a little arch. Zork III is the most
melancholy of the three: an empire in ruins, a sense of loss at the
aqueduct, a test whose examiner is grave, patient and kind, and an ending
that is a reward and a burden at once. The jokes stay (Flathead's
excesses, the guards with the intelligence of an unripe grapefruit, "Who
do you think you are? Arthur?"). The narrator is Zork's narrator. New
prose, where the original has none, is written in that same voice.

## Constraints

- A visitor arriving reads, before anything else they do:

  ```
  As in a dream, you see yourself tumbling down a great, dark staircase. All about you are shadowy images of struggles against fierce opponents and diabolical traps. These give way to another round of images: of imposing stone figures, a cool, clear lake, and, now, of an old, yet oddly youthful man. He turns toward you slowly, his long, silver hair dancing about him in a fresh breeze. "You have reached the final test, my friend! You are proved clever and powerful, but this is not yet enough! Seek me when you feel yourself worthy!" The dream dissolves around you as his last words echo through the void....
  ```

  followed by:

  ```
  Endless Stair

  You are at the bottom of a seemingly endless stair, winding its way upward beyond your vision. An eerie light, coming from all around you, casts strange shadows on the walls. To the south is a dark and winding trail.

  Your old friend, the brass lantern, is at your feet.
  ```

  The original prints its version banner between the two; the world does
  not, since its title is its own.

- `up` and `n` there read: `The stairs are endless.`
- `score` reads `Your potential is N of a possible 7, in M moves.` (and
  `in 1 move.` after one), with N the points had so far.
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
  scope as their quarters arrive: the hooded figure, the man at the cliff,
  the old man, and the Dungeon Master.
- A verb is offered only where something it applies to is in range. A
  verb for a few things types its role by a kind those things compose, as
  the caverns' friction 135 does; a verb with no role is kept for what
  works everywhere.
- `tests/walkthrough.json` plays from the Endless Stair to the end of
  every quarter built so far, and passes.
- The manifest carries the title `Underground Caverns 3: The Dungeon Master`.
- No fault in any run.
- The world is playable alone; nothing needs two visitors to finish.
- Every difference from the original's map or mechanics that the author
  was forced into is logged in `friction.md`, with the spec section it
  touches. Differences in prose need no entry.

## Showcase goal

What Zork III asks of a language that Zork I and II did not:

- **A duel with a figure who is yourself.** Strength on both sides,
  wounds that heal with time, a sword that leaps back to your hand, a
  hood that can be taken only when the figure is nearly beaten, and a
  killing blow that leaves the game unwinnable.
- **A lake that takes what you carry.** Everything not worn sinks; the
  cold counts down, the air lasts three moves below, a shiny thing slips
  from the hand half the time, and a fish and a roc wait.
- **A ship that passes once,** and the two words that bring it to shore.
- **A table that shows a far place and sends you there,** for three
  moves, before snapping you back; one of its places kills.
- **An earthquake on a clock,** once, that closes one way and opens
  another wherever the visitor happens to be.
- **A time machine and a changed past:** the same rooms in three eras,
  possessions that do not make the journey, a ring hidden in 776 that is
  still under the seat in 948, and a present whose plaque and cage are
  rewritten by what was done.
- **The Royal Puzzle:** one room that is a grid of sliding walls, pushed
  square by square and drawn around the visitor as a map.
- **A room you are inside that moves:** the mirror box, rotated an eighth
  at a time and slid along a channel past guardians who strike what they
  see.
- **The Dungeon Master,** one character in four guises, who at the last
  follows, stays, and does what he is told: he turns the dial and pushes
  the button while you wait in a cell that turns around a pit of fire.

Where any of these cannot be built as the original has it, that is a
finding, not a failure. Telling the Dungeon Master what to do is likely
to meet Sprout's decision that a line has no addressee, as the robot did
(caverns 2 friction 7). A dial set to a number ("turn dial to 776", "set
dial to 4") may find no way to read a number from a line. The Royal
Puzzle's map wants fixed-width type, which prose may not keep. And a world
several visitors share has one past, one earthquake and one puzzle grid:
what one visitor's trip to 776 does to another's present is a question
the original never had to answer. Log each, and build the nearest thing.

## Budget

- **Rounds: 8.** The odd rounds widen (1: Q1, 3: Q2, 5: Q3, 7: Q4), by
  this brief's schedule, and the even rounds refine.
- **Playtests per round:** 6, one per persona. The goal-seeker is given a
  goal each round, to get as far into the place as they can.
- **Turn cap per run:** 250 for rounds 1–4, 500 for rounds 5–8, so that
  the later quarters are reached in play and not only by the walkthrough.
  Playtesters may end early when stuck or bored. The casual player keeps
  the workflow's own short cap.
- **Playtesters:** sonnet. Runs that get stuck, where no run reaches an
  ending, are played again on opus (`fallback: "opus"`).
- **Spend ceiling:** the workflow's default, about 400k tokens a round.
- **Launching:** rounds 1–4 as one `studio-round` call
  (`new: true, rounds: 4, turnCap: 250`), rounds 5–8 as another
  (`rounds: 4, turnCap: 500`), each with `author: "fable"` and
  `fallback: "opus"`.

## Author

Fable 5.1.
