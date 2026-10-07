# Brief: underground_caverns

_Eric's. The author reads it before writing and before every revision; the
brief-checker holds every revision to its constraints. Playtesters never
see it._

## Direction

Recreate Zork I: The Great Underground Empire in Sprout: its geography,
its objects and puzzles, its parser conventions, and its prose. The map,
the objects and the puzzles stay faithful. The prose starts from Zork's
own words, but it need not stop there: the author may extend or tweak it
to give the place more life, and every piece of scenery a description
names deserves a description of its own. Later cycles will mutate the
whole space; for now, a little spice, in Zork's voice. The visitor
starts in an open field west of a white house with a boarded front door,
and the Great Underground Empire is beneath them.

The point is to pressure-test Sprout as a language: what it can build,
and what it cannot, measured against a titan of the genre. Faithfulness
to Zork's map and mechanics is the yardstick. Where Sprout cannot do what Zork does, the author writes
the nearest thing Sprout can do, and logs what was lost in `friction.md`.
That log is as much a product of this world as the world itself.

### Sources

Zork I's source has been released under permissive terms, and the author
may read it and the transcript below. Neither is Sprout, so neither can be
copied as code; they are the reference to be faithful to.

- The original ZIL source: https://github.com/the-infocom-files/zork1
  (room descriptions, object text, and the logic of every puzzle).
- A complete winning transcript:
  https://web.mit.edu/marleigh/www/portfolio/Files/zork/transcript.html

### Scope, for now

Zork I is about 110 rooms and a winning game takes more than 350 moves.
This world grows toward all of it over many rounds, beginning with this
slice:

- **v1, and the first rounds:** above ground (the fields around the white
  house, the forest, the clearing and its grating, the tree with the
  jewel-encrusted egg), the house (kitchen, living room, attic, the trophy
  case, the rug and the trap door, the lamp and the sword), the cellar,
  and the troll room with its troll.
- **v2, from round 4:** the v1 slice, plus at least one of Zork's own
  routes from the Troll Room back up to the surface, with the rooms,
  objects and puzzles on it as Zork has them. The author chooses the route
  from Zork's map and says why in `intent.md`. A player who goes down the
  trap door can come back up without dying.
- **v3, from round 5:** v2, plus the Maze west of the Troll Room as Zork
  has it: its rooms and their twisty, one-way passages, the dead
  adventurer's remains (the bag of coins, the rusty knife, the useless
  lantern, the skeleton key), and the Grating Room below the grating, so
  the key unlocks the grating and a second way leads up to the Clearing.
  The thief, his lair and the Cyclops stay out of scope: their exits
  refuse in-world.
- **v4, from round 7:** v3, plus the land east of the Troll Room as Zork
  has it: the East-West Passage, the Round Room, the Loud Room (its echo
  and the platinum bar), the Deep Canyon and Damp Cave, the Chasm's
  north-south passages, the Dome Room (the rope down), the Torch Room (the
  ivory torch), the Temple (the brass bell), the Egyptian Room (the gold
  coffin and the sceptre in it) and the Altar (the black book, the
  candles, and the prayer that leads up to the Forest). Their treasures
  score and go in the trophy case. The way past the Round Room to the
  thief, the Cyclops, the dam, the mirrors and Hades stays out of scope:
  those exits refuse in-world.
- Exits into territory not built yet are present, as in Zork, and turn the
  visitor back with an in-world line.

The scope widens by the director's steering, not by the author on their
own initiative.

## Tone

Zork's own: dry, wry, laconic, a little arch ("a game of adventure,
danger, and low cunning"). The world's narrator is Zork's narrator. New
prose, where the original has none (a Sprout-specific refusal, an exit to
an unbuilt region), is written in that same voice.

## Constraints

- A visitor arriving reads, before anything else they do:

  ```
  West of House

  You are standing in an open field west of a white house, with a boarded front door.

  There is a small mailbox here.
  ```

- `open mailbox` there reads: `Opening the small mailbox reveals a leaflet.`
- `read leaflet` then takes the leaflet without being asked, and reads:

  ```
  (Taken)

  "WELCOME TO ZORK!

  ZORK is a game of adventure, danger, and low cunning. In it you will explore some of the most amazing territory ever seen by mortals. No computer should be without one!"
  ```

- Every room in scope has Zork's name, and its description keeps what
  Zork's says is there and which ways lead out; added or changed prose is
  in Zork's voice.
- Every thing a room's description names can be examined, and answers
  with a description of its own.
- Zork's movement abbreviations work: `n`, `s`, `e`, `w`, `ne`, `nw`,
  `se`, `sw`, `u`, `d`, and `l` for look and `i` for inventory.
- An exit to a part of Zork not built yet answers with an in-world line,
  never a fault or a silent refusal.
- The troll is an NPC: its kind composes `sprout.Actor`, and what it does
  to the player it does by acting.
- No fault in any run.
- The world is playable alone; nothing needs two visitors to finish.
- Every difference from Zork's map or mechanics that the author was forced
  into is logged in `friction.md`, with the spec section it touches.
  Differences in prose need no entry.

## Showcase goal

How far Sprout's parser, kinds and events stretch to a classic of the
genre: a parser that meets Zork's conventions (`take all`, `it`,
abbreviations, implicit takes), containers and surfaces (mailbox, trophy
case, sack), light and darkness (the lamp, the grue), a hidden passage
revealed by moving something (the rug and the trap door), an adversary
with its own turns built as a Sprout NPC (the troll, composing
`sprout.Actor` and acting with `act`), and a score. Where any of those cannot be
built as Zork has it, that is a finding, not a failure.

## Budget

- Rounds: to the whole of Zork I: odd rounds widen (round 7 east of the troll), even rounds refine; see status.md
- Playtests per round: 6 (one per persona)
- Turn cap per run: 150
- Spend ceiling: the workflow's default, about 400k tokens a round

## Author

Opus 5.5.
