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
climbs to the Kitchen. Every room's name and description
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
   is still barred; whoever opens it from above and goes down hears it
   crash shut and barred behind them again.

"Done", for this slice, is: the egg and the painting in the trophy case
(the egg ruined or not), the visitor having been down, round by the
Gallery and up the chimney, and the troll dead or out cold with the
passages beyond him open onto country not yet built. 55 points is the
ceiling with both treasures intact: the Kitchen 10, the Cellar 25, the
egg 5 and 5, the painting 4 and 6.

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
- Zork's jokes: `xyzzy`, `plugh`, `hello`, `jump`, `count leaves`, `read
  wooden door`, `look under rug`, `raise rug`, `take mailbox`, `climb
  chimney` (in the Kitchen), `eat lunch`, `drink water`, `smell sack`,
  `wind canary`, `dig with axe`, `read manual`, `close door` in the Studio.

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
  `scenery.sprout`, `grating.sprout`, `troll.sprout` (the troll, an NPC:
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
  tells them the line and wounds, stuns, disarms or kills them. He picks up
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

