# underground_caverns: intent

_The author's. Sealed from playtesters; never quoted in the world._

## What this is

Zork I, ported as faithfully as Sprout allows, beginning with the v1 slice
the brief names: the fields and forest around the white house, the
clearings and the grating, the tree and its egg, the house (kitchen, attic,
living room with its trophy case, rug and trap door, lamp and sword), the
cellar, and the Troll Room with its troll; and, from round 4, by the
director's word, Zork's own way home from the cellar: the crawlway south to
East of Chasm, the Gallery with its painting, and the Studio, whose chimney
climbs to the Kitchen; and, from round 5, the Maze west of the Troll Room,
the dead adventurer's remains in it, and the Grating Room under the
Clearing, whose grating the skeleton key opens from below: a second way
back to the surface. Every room's name and description
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
   Clearings, the pile of leaves hiding a grating (locked from beneath;
   its key lies with the remains in the Maze).
4. The house: the Kitchen (10 points the first time), its table with the
   brown sack (lunch, garlic) and the bottle of water; the dark Attic with
   the rope and the nasty knife; the Living Room with the trophy case, the
   brass lantern, the elvish sword, the wooden door with gothic lettering,
   and the oriental rug.
5. `move rug` reveals the trap door; `open trap door` reveals the rickety
   staircase. Going down at all: the trap door crashes shut and someone
   bars it (25 points for the Cellar). Going down without a light: "You
   have moved into a dark place." and "It is pitch black. You are likely to
   be eaten by a grue." The way back up the stairs is gone, as in Zork.
6. The Troll Room. The troll is an NPC, a `sprout.Actor` with nobody
   behind him, and what he does to a visitor he does by acting. He fends
   the visitor off every passage but the one they came by, and fights:
   they with the sword (best), the knife or the axe, on Zork's own melee
   tables, with Zork's own melee lines; he with his axe, by `act attack`,
   the same verb, the visitor's own part of it taking the blow. He swings
   back in the same turn and, while he is fighting, on his own turns
   besides, but never twice in one move, as in Zork. Disarmed, he picks his
   axe up again (`act take`); given a weapon, he throws it back (`act
   throw`). Dying sends the
   visitor back to the Forest with their possessions scattered and ten
   points lost; a third death ends their welcome.
7. The way home, south of the Cellar: the crawlway to East of Chasm (dark;
   the chasm goes "straight to the infernal regions", and jumping there is
   fatal), east along the edge to the Gallery (lit), where the vandals left
   one painting of unparalleled beauty (4 points taken, 6 in the case), and
   north to the Studio (dark), with the ZORK owner's manual loosely attached
   to a wall and a chimney up out of the fireplace. The chimney takes only
   a visitor with the lamp and at most one thing besides, as Zork's
   UP-CHIMNEY-FUNCTION does, and lets them out in the Kitchen. The trap door
   bars itself once, as Zork's does (TOUCHBIT): after a climb up the
   chimney, or a death (JIGS-UP), whoever opens it from above and goes down
   hears it crash shut and barred behind them again; otherwise, once barred
   and opened again from above, it stays open.
8. The Maze, west through the forbidding hole once the troll is dead or
   out cold: fifteen rooms of twisty little passages, all alike, and four
   dead ends, all dark, joined as `dungeon.zil` joins them, loops and
   one-way tunnels down and all. In Maze 5 (through the hole, then south,
   east and up) lie a skeleton and what its owner carried: a useless lantern, a
   rusty knife, a skeleton key and a leather bag of coins (10 points taken,
   5 in the case).
9. The Grating Room, northeast of Maze 11 (from Maze 5: southwest, up,
   east, up, northeast; or down from Maze 9 by a one-way tunnel). Above it
   is a grating with a skull-and-crossbones lock. The skeleton key unlocks
   it from below and only from below; opened for the first time, it lets
   the pile of leaves fall through onto the visitor's head, and the day in.
   Up through it is the Clearing, north of the Forest Path: the second way
   home, and the only one that brings a load heavier than the chimney's.

"Done", for this slice, is: the egg, the painting and the bag of coins in
the trophy case (the egg ruined or not), the visitor having been down,
past the troll, through the maze to the remains and up through the
grating, and round by the Gallery and up the chimney. 70 points is the
ceiling with every treasure intact: the Kitchen 10, the Cellar 25, the egg
5 and 5, the painting 4 and 6, the coins 10 and 5.

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
- **The troll** looks you over (examine him: his axe is in his fist). He
  spits in the face of anyone who tries to take him, can be
  knocked out (and wakes up later, angry), disarmed (and recovers his axe
  if it is still on the floor), staggered, or killed, when the black fog
  takes the body. He takes gifts as Zork's does: he eats the lunch, the
  garlic, a treasure, anything; he takes his axe back; he throws a sword or
  knife back, and one time in five eats it instead and dies of it.
- **The house can be walked around** (`walk around house`), a side at a
  time, and knocked on ("Nobody's home.").
- **The trophy case** pays a treasure's value when it goes in and takes it
  back when it comes out; `score` reports Zork's ranks. A treasure spoiled
  in the case (an egg broken, a painting slashed) takes back the
  difference there and then.
- **The chimney is narrow.** Up it only with the lamp and one other thing:
  so the egg or the painting, not both, and the sword stays below. Going
  home with both treasures means two trips, or one by the stairs and the
  trap door after the first.
- **The painting can be ruined.** `break painting` (with anything, or
  nothing) earns the vandal's congratulations and leaves a worthless piece
  of canvas. `break egg` is Zork's BAD-EGG.
- **A knockout is a second chance.** The troll out cold never comes round
  on his first turn after the blow, and a tenth likelier on each turn
  after, so the next blow almost always finds him helpless.
- **Water pours.** Into anything but its bottle it leaks away, onto
  anything it spills and evaporates; nothing else pours. Thrown, it
  splashes on the walls.
- **Glass shows and does not give.** The water in the shut bottle and a
  treasure in the shut trophy case can be seen and named, and are answered
  that the bottle is closed, or that you can't reach inside a closed
  container, until the lid comes off. With the bottle open in hand, `give
  water to troll` gives him the water out of it, and he drinks it as he
  eats everything.
- **The troll's axe is in his fist.** It is in plain sight, and named, but
  "you can't get a good look at it while he is waving it at you", and taken
  it is white-hot: his own hands' guard says so. Knocked out of his hand or
  dropped as he falls, it is an axe like any other; he will pick it up
  again if he can, and coming round, he takes it back off the floor.
- **The troll catches.** Throw something at him and he catches it ("who is
  remarkably coordinated") and treats it as a gift: eats it, keeps his axe,
  or throws a weapon back to the floor. What he eats goes into his stomach,
  which can be examined and not looked into.
- **The troll can be woken.** Out cold, `wake troll` (or breaking him, or
  moving him, or a gift) brings him round "rudely awakened", axe in hand,
  which is a bad idea that Zork allows.
- **The maze is a maze.** Its rooms are all alike, so the classic way
  through is to drop something in each and read the rooms by what lies in
  them; a dropped thing shows when the visitor comes back, even in BRIEF.
  Four of the ways down are one-way, and say so on the way ("You won't be
  able to get back up to the tunnel you are going through when it gets to
  the next room."). Some ways lead back into the room they leave.
- **The maze is dark.** A visitor who lets the lamp go out in the Troll
  Room walks into the maze's dark, and then into the grue.
- **The remains bite.** Taking, moving, touching, raising, kicking,
  kissing or attacking the skeleton brings his ghost, who banishes the
  visitor's treasures and the room's to the Land of the Living Dead (the
  bag of coins, if it is still on the floor). The rusty knife makes the
  sword pulse blue when it is picked up, and turned on anything it slits
  its bearer's throat.
- **The load is Zork's.** The sword, the lamp, the rusty knife, the useless
  lantern and the key weigh 95; the bag of coins will not go on top. Some
  of it has to stay.
- **The grating is two-sided.** From the Clearing it can be opened and
  shut once it is unlocked, never unlocked or locked; from below it takes
  the key. Open, it lights the Grating Room with the day; shut, the room
  is dark again. The chimney takes the lamp and one thing; the grating
  takes everything, so a visitor with all three treasures goes home this
  way.
- **Stairs are climbed by name.** `climb up the stairs` and `go down the
  stairs` go the way the stairs lead, as `up` and `down` do, the trap
  door's crash and all; the wrong way, "The stairs don't lead downward."
- **Take means the one lying there.** Where a name fits a thing in hand and
  a thing on the floor (the sack and the bag of coins, the two lanterns),
  `take` takes the one on the floor, as Zork's TAKE does.
- Zork's jokes: `xyzzy`, `plugh`, `hello`, `jump`, `count leaves`, `read
  wooden door`, `look under rug`, `raise rug`, `take mailbox`, `climb
  chimney` and `climb down chimney` (in the Kitchen), `eat lunch`, `drink water`, `smell sack`,
  `wind canary`, `dig with axe`, `read manual`, `close door` in the Studio.

## Things deliberately left out of this slice

- The lamp's battery life (Zork's lamp lasts several hundred turns; a run
  here is capped well short of it).
- The thief, who is the only one who can open the egg intact, and so the
  intact canary's song and the brass bauble.
- Putting things through the grating (Zork lets a small one fall into
  the Grating Room).
- The thief, who walks the maze in Zork, and the Cyclops beyond it.
- The map in the trophy case, which only appears at 350 points.

## Two voices, and the Management

- **Zork's voice in the rooms, the author's in the things.** Every room's
  name and description is Zork's, word for word. Zork gives most of its
  objects no description at all; the examine layer is mine, in Zork's dry
  voice, and it is what players quote most (the chasm, the skeleton, the
  knife, the dead lantern, the trophy case). It is deliberate, and it is
  where the brief's "a little spice" lives. Every thing a player can carry
  answers `examine` with a sentence of its own; Zork's "There's nothing
  special about…" is kept only for what a sentence would not improve.
- **The caretaker is deliberate.** Zork gives one hint of someone else
  down here: the trap door barred behind you. This world adds a few more,
  on purpose: the Management's notes on the unbuilt passages, the
  crawlway someone "has cleared lately", the trap door's dust scuffed by
  "somebody's comings and goings", the leaves swept together "as though
  someone had swept them together on purpose", and the lamp put back after
  a death by "somebody tidy". Players read the world as being about this
  presence, and that reading is welcome: it is the faithful explanation of
  Zork's own barring, and Zork has a someone, the thief, who walks the
  dungeon and tidies it into his bag. It pays off when he arrives (v5,
  round 9). Until then the caretaker is never seen and never followed, and
  no line should promise more than that someone has been here.

## The shape of the source

- `underground_caverns.sprout`: the world, Zork's engine lines (with the
  grue's warning as the `dark` line and "You can't go that way." as
  `no_way`), and the gate by which a body or a thing crosses the map in one
  turn.
- `above_ground.sprout`, `house.sprout`, `cellar.sprout`, `gallery.sprout`
  (East of Chasm, the Gallery and its painting, the Studio and its
  chimney): the rooms and
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
  `scenery.sprout`, `grating.sprout` (the leaves, the ground, and the
  grating from above and below), `maze.sprout` (the `Maze` and `DeadEnd`
  kinds, every maze room's number and ways out, the Grating Room),
  `remains.sprout` (the skeleton, the useless lantern, the rusty knife, the
  skeleton key, the bag of coins), `troll.sprout` (the troll, an NPC:
  his own parts of `attack`, `take` and `throw`, his turns, the visitor's
  blow at him, his gifts and his stomach), `person.sprout` (the visitor
  kind). The visitor's side of the troll's blow is `adventurer.sprout`'s
  `as target for attack`.
- `verbs.sprout`: Zork's verbs, the messages, the enums of gate
  destinations and description modes.

## Notes to self for revisions

- Every roll is Sprout's own `random`, `chance` or `{one of}`. Each turn
  draws its own seed, but in round 2 every run started from seed 1, so two
  runs that reached the troll at the same step fought the same fight word
  for word: a round's fight outcomes are not independent samples until the
  studio gives each run its own seed. `sprout test` does
  not: a script's turns share one seed until a seed step changes it, so the
  tests that fight carry seed steps.
- Being barred in the cellar is Zork's design. Until round 4 the only ways
  on led to unbuilt country, and the only way back to the surface was to
  die; from round 4 the crawlway leads round to the Studio's chimney.

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

## After round 2

- Every run went the short way (window, lamp, sword, rug, trap door), was
  barred in, killed or passed the troll, and met the unbuilt edges. Nobody
  has reached the forest, the tree, the egg, the attic or the trophy case
  in twelve runs, so half the slice and the whole of "done" are known only
  from `sprout test`. The brief is clear that the scope widens only on the
  director's word, so I have not opened a way back up from the cellar.
  **For the director:** the faithful way to close the loop is Zork's own
  route home: south from the Cellar down the crawlway to East of Chasm,
  east to the Gallery, north to the Studio, and up its chimney to the
  Kitchen (`dungeon.zil`). Three rooms, all Zork's, none needing the troll;
  they would let a visitor who has gone down come back up and finish the
  slice. Opening them is the director's call.
- Still to watch, carried from round 2 since no one met them: darkness
  without a lamp, the grue, a lit lamp left in the Cellar (now tested in
  `lamp_left.json`), BRIEF on a forest walk, and the score and its ranks.
- The troll's fight was checked against Zork's tables, not retuned. With the
  sword (his weakness, one off his defence of 2) and the visitor's strength
  of 2 at score 0, Zork reads DEF1 from its third entry: of nine, two miss,
  two stagger, two knock out, three kill. So a third of first blows kill
  him and two-ninths knock him out for the next blow to finish: "too easy"
  is Zork's own troll at 0 points.
- Round 2's changes: `take` and `drop` take several things, each answered
  by name; KNOCK, WALK AROUND, DIG, THROUGH and GIVE, with Zork's answers;
  the troll's gifts; the surrounding wall; the troll destroyed when he dies,
  with his pending wake, and no fog left standing in his room; no pick in
  the east passage, and the crawlway refuses in a different way from the
  other edges.

## After round 3

- The barred trap door ended every run that went down, for the third
  round: four players were walled in, two only got out by dying, and no
  one with a goal reached it. The brief and the director both put the
  widening at round 4, so round 4 opens Zork's own route home (the crawlway,
  East of Chasm, the Gallery, the Studio, the chimney), all Zork's, none of
  it needing the troll. The trap door stays barred, as Zork's is.
- The troll's knockout now holds: the turn he had already asked for finds
  him out cold and only counts (friction 38). The tables are not retuned.
- The disarm line names the weapon lost, not a fallback read after it had
  gone (friction 39).
- `pour`, `dig with`, and MUNG (`break`, `destroy` and the rest) are
  Zork's; the crawlway's digging is gone with the rock that choked it, and
  the cleared rock and pick marks are what is left of it.
- The troll's axe, in his fist, answers `examine` that you cannot get a
  good look at it while he is waving it at you, and `take` with Zork's
  white-hot axe, as the director asked for round 4.
- Still to watch: whether anyone finds the crawlway now that it goes
  somewhere; whether the chimney's rule reads as a puzzle or a wall;
  whether the painting is slashed; darkness and the grue (East of Chasm and
  the Studio are dark, so a visitor who leaves the lamp behind meets them
  now); and the attic, still unvisited in eighteen runs.

## Before round 4

The director's steering for this pass, and what came of it.

- **Sprout 26e6124.** An exit's refusal is a `refused` line (sprout#450);
  the eight tests that expected `notice` now expect `refused`, and nothing
  else changed. A slotted passage keeps its edge breaks (sprout#452), so
  `inside_lines` carries its own paragraph break and its callers write
  none. `take leaflet and read it`, `take x, y and z` and `put lunch and
  garlic in case` work (sprout#453): the round-3 complaint about `and`
  that six players met is gone.
- **The route home, and why it.** Zork has four ways from the Troll Room
  back to daylight: west through the Maze to the Grating Room and up
  through the grating into the Clearing, which needs the skeleton key from
  the Maze and a dozen or more maze rooms; east by the Round Room, the
  Cyclops and the strange passage into the Living Room, which needs the
  troll dead, the cyclops seen off and the better part of the dungeon
  built; the river and the rainbow to the Canyon, which needs the dam, the
  boat and the Rainbow; and south past the Cellar, down the crawlway to
  East of Chasm, east to the Gallery, north to the Studio and up its
  chimney into the Kitchen. The last is three rooms, every one Zork's, and
  it is the only one that does not need the troll dead: a visitor who goes
  down the trap door and cannot or will not win the fight still has a way
  home, by Zork's own puzzle, the narrow chimney that takes only the lamp
  and one thing more. It is the way Zork's own map offers the player the
  trap door shuts behind, and the cheapest faithful one. It was opened at
  the end of round 3 on the director's word (round 3's P1); this pass
  checks it from the Troll Room itself (`troll_room_home.json`). The other
  three stay refused in-world: the hole west, the passage east, and the
  grating, locked from below.
- **The troll as an NPC.** `kind Troll is Thing, sprout.Actor`. He swings
  by `act attack (target: a, weapon: axe)`, deciding the blow on Zork's
  tables in his own part (`:dealt`); the visitor's `as target for attack`
  tells them the line and wounds, stuns, disarms or kills them (since
  round 6 he tells the line himself; see below). He picks up
  his axe with `act take` and throws back a weapon with `act throw`. He
  passes, so his axe is in reach in his fist; the axe's own `examine`
  refuses while he wields it, and `sprout.Actor`'s `release` refuses `take`
  with his `not_yours` line, Zork's white-hot axe. What he eats goes into a
  stomach inside him that passes nothing. The knockout's second chance and
  the fight's randomness are as round 3 left them. What the NPC model
  would not let me say is friction 45 to 47.
- **Verbs.** GIVE water from the bottle (open: the troll drinks it; shut:
  "The bottle is closed."), POUR from a shut bottle refused in Zork's
  words, THROW (at the troll he catches it), KICK, RUB and TOUCH, WAVE,
  SHAKE, SQUEEZE, KISS, LOOK BEHIND, FILL, TIE, WAKE, TALK TO, HELLO to
  someone, PRAY and SWIM, with Zork's answers. P8's other gaps: DIG WITH
  and POUR were built in round 3; the digging beyond the crawlway that
  could not be listened to went with the rock that choked it.

### What round 4 should test

- **The way home.** Whether a visitor barred in the Cellar finds the
  crawlway, reads the chimney's rule as a puzzle (the lamp and one thing),
  and comes up into the Kitchen; and whether anyone then goes back down
  for a second treasure. Nobody has yet been barred in and come home alive.
- **The troll as an NPC.** Whether his fight still reads as Zork's, now
  that his blows are his own acts; whether the knockout's second chance is
  found; whether anyone tries the axe in his fist (looking, taking), throws
  things at him, wakes him, or gives him water from the bottle.
- **The new verbs,** and whether any player meets the `examine all` stop
  on the axe (friction 48).
- **Glass.** Whether the shut bottle's "The bottle is closed." reads well,
  and whether the trophy case, shut, is read as keeping its treasures.
- Still unvisited after eighteen runs: the attic, darkness and the grue,
  dropping things from the tree, the score's ranks. East of Chasm and the
  Studio are dark, so the route home is where a visitor who has let the
  lamp go first meets the grue.


## After round 4

- **The way home works.** All four players barred in the Cellar who lived
  went down the crawlway, round by the Gallery and up the chimney; one went
  back down for a second trip and came home the same way. Kept as built.
  The two-treasure trip up the chimney is still unmet, because the egg is
  above ground; it waits for a second treasure below.
- **The chimney says its rule.** Zork's refusal now goes on: "The chimney
  has room for you, a light to climb by and one thing more, and not an inch
  besides." The explorer, who examined it first, already read the rule;
  now a player who climbs first does too.
- **The troll has his own description**, awake and armed (the axe in his
  fist, said plainly, as a pointer to the axe's own answers), out cold, or
  disarmed. His room line is unchanged. The fight is not retuned: the
  director keeps Zork's randomness.
- **A death says where things went.** Both players who died woke
  empty-handed in the Forest and stopped. The scattering is Zork's (the
  lamp back in the living room, treasures to the dark rooms, the rest
  above ground); the narrator now says so after "another chance".
- **What a refusal names can be named.** The canyon's rope and sign in the
  Clearing, and the Management's note in the Troll Room, are things there,
  to examine and read and not to take.
- **The trap door's dust remembers.** Once opened, it is scuffed, not
  undisturbed.
- **Kept, by choice:** the forest's one-way exits (Zork's map); the shut
  trophy case and its "isn't open"; the "yet" on the west hole, which is
  true; the edges' voices, which players quote. Comma chaining and `enter
  <no such way>` are Sprout's (friction 51, 52).
- **Still unmet after 24 runs:** darkness and the grue in play (every run
  lit the lamp first and kept it), a lamp left in the Cellar, dropping
  things from the tree, the painting slashed, `verbose`. These stay
  tested by script only. The troll's come-round, the axe's guard, throwing
  at him and waking him are tested only by script too.
- **The slice is now smaller than its players.** Both treasure-hunters
  reached 55 points by turn 80 and walked the edges after. Widening further
  is the director's call; the brief's budget ends at round 4.

## Before round 5

The director widened the scope to v3: the Maze, the remains and the
grating. Built from `dungeon.zil` (MAZE-1 to MAZE-15, DEAD-END-1 to 4,
GRATING-ROOM, and the objects IN MAZE-5) and `actions.zil` (MAZE-DIODES,
MAZE-11-FCN, GRATE-FUNCTION, SKELETON, RUSTY-KNIFE-FCN, STUPID-CONTAINER,
ROB).

- **Rooms:** 15 Maze rooms and 4 Dead Ends, all dark, every one Zork's
  name, description and ways out; Maze 5 adds the skeleton line. The
  Grating Room, dark while the grating is shut and lit by the day while it
  is open. The Troll Room's hole now leads into Maze 1 once the troll is
  down; Maze 15's way southeast, to the Cyclops, refuses with a sign from
  the Management.
- **Objects:** the skeleton, the burned-out lantern, the rusty knife, the
  skeleton key and the leather bag of coins in Maze 5; the twisty little
  passages in every maze room, the dead end in every dead end; the
  grating, its skull-and-crossbones lock and the sunlight in the Grating
  Room; the sign in Maze 15. Each examines in its own words.
- **Points:** the coins, 10 taken and 5 in the trophy case. The ceiling is
  70.
- **How the maze is written:** two kinds, `Maze` and `DeadEnd`, each a
  `DarkRoom`, give a room its name, description and passages; each room
  writes its own exits, since exits do not compose. The one-way tunnels'
  warning was the adventurer's, read in its part of `go` from the number of
  the room it left (friction 53); since round 6 it is the tunnel's own,
  an exit that says it as the visitor goes.
- **Darkness** in the maze is the Cellar's: `maze_dark.json`.
- **Tests:** `maze.json` (the walk to the remains, a loop, a one-way
  tunnel, the knife's pulse, a dropped marker seen again, the Cyclops
  sign), `grating.json` (the key and the grating from below and above,
  the leaves, the day), `coins.json` (the coins home through the grating
  and into the case, and the score), `maze_dark.json` (the dark and the
  grue), `skeleton.json` (the ghost and the knife). `troll.json` now walks
  into the maze through the hole.

### What round 5 should test

- **Does anyone go west?** The hole opens only once the troll is down.
  Whether players who win the fight try it, and whether they read "a
  forbidding hole leading west" as an invitation.
- **The maze as a maze.** Whether players map it, drop things to mark
  rooms, notice the one-way tunnels' warning, or give up; how many turns
  it takes to reach the remains (four moves from the hole, if you know)
  and the Grating Room (five more). The 150-turn cap is tight for a
  visitor who also wants the egg and the painting.
- **Darkness at last.** The maze is the likeliest place yet for a lamp to
  be put down and lost: whether anyone meets the dark place, the warning
  and the grue, after 24 runs that never did.
- **The remains.** Whether anyone touches the skeleton (and loses the
  coins to the ghost), attacks with the rusty knife, or notices the
  sword's pulse; whether the load (95 with everything but the coins) reads
  as a puzzle.
- **The grating.** Whether a visitor with the key finds the Grating Room,
  works out that the key turns from below only, and comes up into the
  Clearing; whether anyone carries all three treasures home that way;
  whether the leaves falling through read as Zork's joke.
- **The Clearing from above,** for anyone who found the grating there in
  earlier rounds: whether they come back to it with the key and are told
  the lock is out of reach.

## After round 5

- **The maze ate the budget, as Zork's does.** All six runs went west;
  three reached the remains and took the key; none found the Grating Room,
  and three ran out of turns in the maze. The maze stays exactly as
  `dungeon.zil` joins it: the synthesis and I agree that rooms all alike are
  the puzzle, and five players solved it Zork's way, by dropping markers.
  **For the director:** at 150 turns a visitor who also wants the egg and
  the painting cannot reach this slice's "done"; raising the turn cap for
  this world is the brief's budget, and so the director's call. Until it
  changes, the grating from below, the skeleton key in its lock, the
  leaves falling through and the second way home are covered only by
  `grating.json` and `coins.json`; no player has reached them.
- **Fixed:** the troll, asked, says he is no conversationalist once, not
  after Thing's refusal (`take_which.json`). The stairs, the cellar's
  among them, climb by name, and the kitchen chimney answers `climb down`
  with Santa Claus (`climbing.json`). `listen` alone is answered. SEARCH is
  Zork's own verb. The front door names its boards. The chasm can be looked
  into. The canyon rope answers being climbed, crossed or ducked under.
  `take` prefers what is not in hand (`take bag` in Maze 5 takes the
  coins). A death clears the barred trap door as JIGS-UP does, and puts a
  glowing sword out (`death_trap.json`).
- **Kept, by choice:** the maze; Zork's "Done." at the trophy case, whose
  listing does the celebrating; no inventory synonyms or `exits`, as in
  Zork.
- **To Sprout:** a trailing `here` read as a thing (friction 63),
  `troll, hello` addressing (64), a staircase that cannot take its exit
  (65), and 59 again, for the bag and the sack.

### What round 6 should watch (carried, still unmet in 30 runs)

- The Grating Room, the key in the grating from below, the leaves falling,
  the Clearing reached from below, all three treasures home that way.
- The grue: darkness was met once (the Attic, harmlessly); nobody has let
  the lamp go out in the maze or been eaten.
- The skeleton touched and the ghost's banishing; the rusty knife turned
  on anything.
- Dropping things from the tree (the fall and the landing).
- Throwing things at the troll, waking him, putting the egg at risk.
- Whether anyone climbs the stairs by name, and whether a death and a
  second descent now read as Zork's barred trap door.

## Before round 6: the port to Sprout 6c440f5

No scope changed. Sprout fixed most of what the port had asked of it
(sprout#466 to #474), and the world now says those things the plain way:

- **The one-way tunnels say their own warning,** an exit with a `say`
  (#468), so the rooms have no numbers and the adventurer no longer
  remembers where it came from. The warning comes first, before the dark
  place or the grue, as Zork's exit routine prints it before GOTO
  (`diode_dark.json`). The trap door's crash stays the visitor's: Zork
  prints it after "You have moved into a dark place.", and an exit's line
  comes before.
- **The troll says his own blows,** `tell target` in his own part of
  `attack` (#466): the misses, the wounds, the knockout and his
  hesitation over it, the killing strokes. The visitor's part only does
  what the blow does to them. A stagger is the one exception: one time in
  four it costs the visitor their weapon, the troll cannot see into their
  hands, so that line is still theirs. The Troll Room keeps its guard on
  the ways out, which is now the spec's own way for an NPC to guard.
- **The troll's turns are taken back, not skipped** (`cancel wakes`,
  #469). A swing, his own or one struck back, puts his next turn a minute
  on; the knockout takes back the turn he had asked for and asks its own.
  So he swings once a move, as Zork's troll does, and the flags that told
  a wake to pass are gone. One visible change: after a blow struck back,
  his next own swing is a minute after it, not at the turn asked for
  before it (`descent.json`).
- **`x maze` examines the passages again** (#470): the room named Maze no
  longer beats a thing that answers to "maze". `take bag` with the sack in
  hand takes the coins by the same rule; the adventurer's refusal of what
  it already holds was always the way to say so, and stays.
- **`examine all`** in the Troll Room examines everything there, and no
  longer stops at the troll's axe (#474); the axe in his fist is his, and
  `all` leaves it out, as it leaves out the troll.
- **Commas chain** (#471): `open trap door, turn on lantern, go down` is
  three commands. `troll, hello` stays unread by Sprout's decision
  (`commas.json`).
- **`drop leaflet here`** drops it (#473). The world's own `drop` replaces
  the library's, so it writes the same three `here` phrases.
- **Not changed:** `enter window` where there is no window is still "That
  sentence isn't one I recognize." (friction 52): #472 answers `not_here`
  for an object's synonym out of reach, and this world's `enter` is `go`'s,
  by the label of a way out.

### What round 6 should watch

As carried above, and: whether the troll's fight reads as his now that
his blows come from him; whether anyone chains commands with commas;
whether the tunnels' warning is noticed.

## After round 6

- **The grating has a pointer now.** For a second round nobody reached the
  Grating Room, and three of four key-holders went looking for a lock
  above ground. The key's description now says the lock it fits wears its
  skull and is somewhere down here, past where its owner fell; the
  grating from the Clearing, locked, says its lock faces down into the
  dark. The rooms are joined as `dungeon.zil` joins them, and the grating
  is still Zork's secret, only less of one. `unlock grating with key` from
  the Clearing already gave Zork's "You can't reach the lock from here."
- **The caretaker is written down** (above, "Two voices, and the
  Management"), kept, and not extended.
- **Names the room text uses answer:** the open field at West of House,
  the forest path behind the house and north of it, the lunch and the
  garlic (each a sentence of its own, as the sack has). `smell` alone is
  answered as `listen` alone is.
- **Prepositions:** `squeeze through`, `climb down into` and `walk around
  to (the back of)` are read (`names_and_ways.json`); the general case is
  friction 68.
- **The chimney's drops:** `drop all except <one thing>` works; a list
  after `except`, and `but`, do not (friction 69). The chimney is kept.
- **Kept, by choice:** the barred trap door on every return (TOUCHBIT),
  which all six players read as Zork's one-way door; the maze as
  `dungeon.zil` joins it, BRIEF and all (the skeleton is part of Maze 5's
  description, as in Zork, so BRIEF hides it on a return visit); the
  troll's fight on Zork's tables. All six read his blows as his.
- **Not the world's:** the goal-seeker's run stopped at 136 lines with no
  report; that is the studio's playtest harness, for the director.

### What round 7 should watch (carried, still unmet in 36 runs)

- The Grating Room: whether the key's pointer sends anyone looking for the
  skull lock below; the key in the grating, the leaves falling, the
  Clearing reached from below. A goal such as "find another way out of the
  maze" would test it directly.
- The grue (its handler has never fired in play); the skeleton's ghost and
  banishing; dropping things from the tree; the egg broken.
- Throwing things at the troll, waking him, his coming round.
- Off the list, met and reading as intended: the rusty knife and its
  pulse, the stairs by name, comma chaining, the tunnels' warning, the
  troll's blows as his, the re-barred trap door.

