# underground_caverns: intent

_The author's. Sealed from playtesters; never quoted in the world._

## What this is

Zork I, ported as faithfully as Sprout allows, beginning with the v1 slice
the brief names: the fields and forest around the white house, the
clearings and the grating, the tree and its egg, the house (kitchen, attic,
living room with its trophy case, rug and trap door, lamp and sword), the
cellar, and the Troll Room with its troll. Every room's name and description
is the original's, word for word, from the ZIL source (`dungeon.zil`,
`actions.zil`, and the shared substrate's `verbs.zil`). The narrator is
Zork's narrator: "Taken.", "Dropped.", "Opened.", the YUKS, "A hollow voice
says "Fool."".

The world is half a game and half an instrument. Faithfulness is the
yardstick, and `friction.md` is where every gap between Zork and Sprout is
written down. That log is a product of the world as much as the rooms are.

## The arc a visitor walks

1. West of House. The mailbox, the leaflet ("WELCOME TO ZORK!"), the
   boarded front door that will not open.
2. Around the house: north and south sides with their boarded windows,
   then Behind House, where the kitchen window is "slightly ajar". `open
   window` takes great effort; `enter house` or `w` goes in.
3. The forest: four Forest rooms, the Forest Path with its climbable tree,
   Up a Tree with the bird's nest and the jewel-encrusted egg, the two
   Clearings, the pile of leaves hiding a grating (locked; its key lies
   in a part of the Empire not yet built).
4. The house: the Kitchen (10 points the first time), its table with the
   brown sack (lunch, garlic) and the bottle of water; the dark Attic with
   the rope and the nasty knife; the Living Room with the trophy case, the
   brass lantern, the elvish sword, the wooden door with gothic lettering,
   and the oriental rug.
5. `move rug` reveals the trap door; `open trap door` reveals the rickety
   staircase. Going down at all: the trap door crashes shut and someone
   bars it (25 points for the Cellar). Going down without a light: "You
   have moved into a dark place." and "It is pitch black. You are likely to
   be eaten by a grue." The way back up is gone, as in Zork.
6. The Troll Room. The troll fends the visitor off every passage but the
   one they came by, and fights: with the sword (best), the knife or the
   axe, on Zork's own melee tables, with Zork's own melee lines. He swings
   back in the same turn and, while he is fighting, on his own turns
   besides, but never twice in one move, as in Zork. Dying sends the
   visitor back to the Forest with their possessions scattered and ten
   points lost; a third death ends their welcome.

"Done", for this slice, is: the egg in the trophy case (or ruined and in
it anyway), the visitor in the cellar with a light, and the troll dead or
out cold with the passages beyond him open onto country not yet built.
45 points is the ceiling with the egg intact.

## Secrets and interactions I hope players find

- **Darkness is real.** In a dark room nothing can be named but what the
  visitor carries, and the room is the grue's warning, until light comes.
  Light comes from a lit lamp, in the hand, in an open sack, or set down
  there; carrying it out leaves the room dark again behind you. Leaving a
  lit lamp in the Cellar makes it a safe place to walk back into.
- **The grue is real.** Walking from one dark room into another dark room
  with no light is fatal four times in five, as in Zork ("Oh, no! A lurking
  grue slithered into the room and devoured you!").
- **Rooms remember you.** As in Zork's default BRIEF mode, a room is
  described in full the first time and named after; `look` and `verbose`
  give it all, `superbrief` only the names.
- **The tree is high.** Anything dropped Up a Tree falls to the Forest Path
  below. The egg does not survive the fall, and neither does the canary
  inside it. Dropping the nest with the egg in it spills the egg, ruined,
  and leaves the nest on its branch, exactly as Zork's own code does.
- **The egg cannot be opened** without "the tools and the expertise". The
  sword or the knife will open it, and ruin it and the clockwork canary
  inside; the ruined egg is still worth two points in the trophy case.
- **The sword glows** faint blue in the Cellar while the troll lives next
  door, and very brightly in the Troll Room.
- **The troll** spits in the face of anyone who tries to take him, can be
  knocked out (and wakes up later, angry), disarmed (and recovers his axe
  if it is still on the floor), staggered, or killed, when the black fog
  takes the body.
- **The trophy case** pays a treasure's value when it goes in and takes it
  back when it comes out; `score` reports Zork's ranks.
- Zork's jokes: `xyzzy`, `plugh`, `hello`, `jump`, `count leaves`, `read
  wooden door`, `look under rug`, `raise rug`, `take mailbox`, `climb
  chimney`, `eat lunch`, `drink water`, `smell sack`, `wind canary`.

## Things deliberately left out of this slice

- The lamp's battery life (Zork's lamp lasts several hundred turns; a run
  here is capped well short of it).
- The thief, who is the only one who can open the egg intact, and so the
  intact canary's song and the brass bauble.
- The skeleton key and everything below the grating.
- The map in the trophy case, which only appears at 350 points.

## The shape of the source

- `underground_caverns.sprout`: the world, Zork's engine lines (with the
  grue's warning as the `dark` line and "You can't go that way." as
  `no_way`), and the gate by which a body or a thing crosses the map in one
  turn.
- `above_ground.sprout`, `house.sprout`, `cellar.sprout`: the rooms and
  what is in them. A shut way is an exit that refuses in Zork's own words,
  or, for country not yet built, in a passage of its room in Zork's voice.
- `nowhere.sprout`: the Land of the Living Dead.
- `thing.sprout` (Thing, Portable, Scenery: Zork's default answers to every
  verb), `box.sprout` (containers, PRINT-CONT), `room.sprout` (rooms and
  their BRIEF descriptions, dark rooms and what they keep for the grue, the
  room-listing rule), `adventurer.sprout` (the visitor: going, taking,
  fighting, light, wounds, moves, score, death), `lamp.sprout` (a
  `sprout.LightSource`), `items.sprout` (weapons, treasures, food, water,
  readables), `tree.sprout` (the tree top, the nest, the egg, the canary),
  `scenery.sprout`, `grating.sprout`, `troll.sprout` (the troll and his
  whole fight), `person.sprout` (the visitor kind).
- `verbs.sprout`: Zork's verbs, the messages, the enums of gate
  destinations and description modes.

## Notes to self for revisions

- Every roll is Sprout's own `random`, `chance` or `{one of}`: the host
  playtesters use draws every turn from its own seed. `sprout test` does
  not: a script's turns share one seed until a seed step changes it, so the
  tests that fight carry seed steps.
- Being trapped in the cellar is Zork's design: once the trap door is barred
  the only ways on lead to unbuilt country, and the only way back to the
  surface is to die. Playtesters will find this; it is the edge of the slice.

## After round 1

- The drops five playtesters met ("Arrive first.", a fresh start at West
  of House) are not the world's: that answer comes only from a play door
  whose process has just started, and a replay of the same path through the
  same session code, half a minute to a turn, keeps the visitor present
  through the cellar, the fight, a death and the forest. `descent.json`
  plays that path as a test.
- The troll now swings at most once between two of his own turns.
- Nobody has yet reached the forest, the tree, the attic or the trophy
  case's score; those are still the secrets to watch for.

## After the port to Sprout fe916a5

- Darkness is the engine's (`lit`, the `dark` line), and the troll now
  fights in his dark room, as Zork's does. Zork's room names are back.
- Zork's BRIEF is the default, and the score counts moves.
- Things to watch in round 2: whether anyone finds that a lit lamp left in
  the Cellar keeps it safe; whether BRIEF's short returns confuse anyone
  walking the forest; whether the move count reads as Zork's.
