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
back to the surface; and, from round 7, the land east of the Troll Room:
the East-West Passage, the Round Room, the Loud Room with its echo and its
platinum bar, the Deep Canyon and the Damp Cave, the Chasm and the
North-South Passage, the Engravings Cave, the Dome Room and its railing,
the Torch Room with the ivory torch, the Temple with its bell, the Altar
with the black book and the candles, and the Egyptian Room with the gold
coffin and the sceptre in it; the way out of the temple is a prayer, up to
the Forest; and, from round 9, the thief, who walks all of it unseen and
robs it, his lair the Treasure Room with the silver chalice, and the
Cyclops beyond Maze 15, who guards the stairs up to it and leaves, when he
leaves, through the wall into the Living Room; and, from round 11, Flood
Control Dam #3 and the river below it: the Dam, its Lobby and Maintenance
Room, the bolt that opens the sluice gates and drains the reservoir, the
reservoir's shores, its stream and the Atlantis Room, the magic boat on
the Frigid River, the White Cliffs, Sandy Beach and its cave, the Shore,
Aragain Falls and the rainbow over them, and the canyon up to the forest.
Every room's name and description
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

10. East of the Troll Room, once the troll is down (v4, `east.sprout` and
   `temple.sprout`, from `1dungeon.zil` and `1actions.zil`): the
   East-West Passage (5 points the first time, Zork's VALUE), the Round
   Room, and the Loud Room, deafening until the visitor says "echo": until
   then every command but a way out comes back as an echo, and the
   platinum bar (10 taken, 5 in the case) cannot be had. Beyond it the Damp
   Cave, the Deep Canyon up the stairway, the North-South Passage and the
   Chasm, which loop back to the East-West Passage. All dark.
11. Southeast of the Round Room, the Engravings Cave and the Dome Room. The
   rope from the Attic, tied to the Dome's railing, is the only way down to
   the Torch Room, and the only way down is the only way: the rope hangs
   out of reach from below. The ivory torch on the pedestal (14 and 6) is a
   light that never goes out. South, the Temple (lit) with the brass bell
   and the prayer inscription; down from it, the Egyptian Room with the
   gold coffin of Ramses II (10 and 15), which opens on the sceptre (4 and
   6) and weighs 55 of the 100 a visitor can carry; south of the Temple,
   the Altar (lit), with the black book open to page 569 and the burning
   candles.
12. The way out is to pray at the Altar, which puts the visitor in the
   Forest with everything they carry, coffin and all. The hole in the
   Altar's floor leads on toward Hades (not built), and will not take the
   coffin in any case ("You haven't a prayer of getting the coffin down
   there.").

13. The thief (v5, `thief.sprout`), from the first descent into the Cellar:
   unseen, he goes round the 39 rooms underground that Zork does not hold
   sacred, one a turn, robbing treasures off the floor of any room a
   visitor has been in, and now and then a lesser thing. In a dark room
   with a visitor in it he sometimes lets himself be seen, leaning on a wall
   with his large bag, and sometimes robs the visitor instead, seen or
   unseen; seen, he may start a fight, with his stiletto, on Zork's tables,
   and he fights hard: against a fresh visitor two blows in nine kill
   outright, and one in nine knocks out, which is usually worse.
   Given a treasure he stops to admire it and fights the worse for it.
   Killed, he leaves his stiletto and his treasures where he fell. Alone in
   his lair he empties his bag, and opens the jewel-encrusted egg, as only
   he can, so the clockwork canary inside it is whole.
14. The Cyclops Room, southeast of Maze 15 (dark): the Cyclops blocks the
   stairs. Fed the lunch he wants a drink, and grows agitated while he
   waits; given the water (the bottle, open or not), he falls asleep, and
   the stairs are free. Provoked, he grows angry on his own clock until he
   eats the visitor. "Ulysses" (or "Odysseus") sends him through the east
   wall, which opens the Strange Passage to the Living Room's nailed door,
   now a cyclops-shaped hole: a third way home, and the shortest.
15. The Treasure Room, up the stairs (dark, 25 points the first time): the
   thief rushes to defend it from wherever he is and makes its treasures
   vanish into his bag; while he stands over it, fighting, the silver
   chalice is not to be had. Killed there, his hoard reappears. The words
   TREASURE and TEMPLE carry the visitor between it and the Temple.
16. The canary, wound in the forest (the three Forests, the Forest Path, up
   the tree), sings an aria, and a songbird drops a brass bauble.

17. The dam (v6, `dam.sprout`), east of the Deep Canyon: the Dam (lit),
   with its control panel, bolt and green bubble; north, the Dam Lobby (lit)
   with the guidebooks and the matchbook; north again, the Maintenance Room
   (dark until its red button works the lights), with the wrench, the
   screwdriver, the tube of gunk, the rusting tool chests and four buttons.
   The yellow button frees the bolt (the bubble glows) and the brown locks
   it; the blue one bursts a pipe, and the room fills over seven minutes
   and drowns whoever is in it, unless the gunk, squeezed from the tube,
   is put on the leak. Turned with the wrench, the bolt opens the sluice
   gates, and four minutes later (eight moves) the reservoir has drained;
   turned again, it fills four minutes after.
18. The reservoir (v6, `reservoir.sprout`): Reservoir South (west of the
   Dam, and northwest of the Deep Canyon and northeast of the Chasm), a
   lake too deep to cross until it drains; then the Reservoir itself is a
   mud pile with the trunk of jewels half buried in it (15 and 5), and
   Reservoir North beyond it, with the hand-held air pump, and up a slimy
   stairway the Atlantis Room, with Poseidon's crystal trident (4 and 11).
   West of Reservoir South, Stream View; the Stream above it is for the
   boat. Caught on the lake bed as it refills, the visitor goes over the
   dam. The Loud Room follows the dam: with the gates open and the water
   high it throws its visitor out; with the gates shut and the water low
   it is quiet, and the bar can be had without the word.
19. The river (v6, `boat.sprout`, `river.sprout`): at the Dam Base, below
   the dam, a folded pile of plastic; the pump blows it up into the magic
   boat, with a tan label in it. Something sharp in hand (the sword, the
   knives, the axe, the stiletto, the sceptre) punctures it as the visitor
   gets in; the gunk mends it. In it, LAUNCH puts out onto the Frigid River,
   and the current carries the boat on by itself, reach by reach (two
   minutes, two, a minute and a half, one, one), past a red buoy with an
   emerald in it (5 and 10), and over Aragain Falls, the end of it. LAND,
   or the way to a shore, brings it in: west to the Dam Base or the White
   Cliffs Beach, east to Sandy Beach or the Shore. The White Cliffs' paths
   are too narrow for an inflated boat; it deflates.
20. Sandy Beach has the shovel; northeast, the Sandy Cave, whose sand, dug
   four times, shows a jeweled scarab (5 and 5), and a fifth time falls in.
   South, the Shore and Aragain Falls (lit), with a rainbow over them.
21. The sceptre, waved at the Falls or at the End of Rainbow (reached from
   the canyon, below Canyon View), makes the rainbow solid, and a pot of
   gold appears at its end (10 and 10); the rainbow crosses between the two.
   Waved again, it is light; waved on the rainbow, it drops the waver into
   the Falls. Canyon View joins the Clearing east of the house and the
   forest: a way home with whatever the rainbow side holds.

"Done", for this slice, is: the egg (whole), the canary, the bauble, the
painting, the bag of coins, the platinum bar, the torch, the gold coffin,
the sceptre and the chalice in the trophy case (the sceptre on its own,
not in the coffin), the thief dead, the visitor having been past the troll
both ways, through the maze, round by the Gallery and up the chimney, down
the rope and up by prayer, and past the Cyclops to the lair; and, since
v6, the trunk, the trident, the emerald, the scarab and the pot of gold in
the case too, the dam opened and the river run. 277 points is the ceiling
with every treasure intact: the Kitchen 10, the Cellar 25, the East-West
Passage 5, the Treasure Room 25; the egg 5 and 5, the canary 6 and 4, the
bauble 1 and 1, the painting 4 and 6, the coins 10 and 5, the bar 10 and
5, the torch 14 and 6, the coffin 10 and 15, the sceptre 4 and 6, the
chalice 10 and 5; the trunk 15 and 5, the trident 4 and 11, the pot of
gold 10 and 10, the scarab 5 and 5, the emerald 5 and 10. Until round 11
it was 197; until round 9, 145, with the canary unreachable whole. A single visit cannot carry it all: the coffin, the
torch and the bar together are 95 of the 100, so the lamp and the sword
stay below.

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
- **The Loud Room listens for one word.** Until "echo" (or `say echo`) the
  room answers everything with its own echo, "Bar bar ...", "Look look
  ...", "North north ..."; west, east and up still lead out. Said once, the
  room is quiet for good, and the bar is free. Zork's own puzzle, and the
  prayer in the Temple, the engravings and the black book say nothing of
  it: players find it by trying, or by knowing.
- **The rope has one use.** Tied to the Dome's railing it is the way down,
  and it cannot be taken back; untied it can; let go of untied, at the
  rail, it drops to the Torch Room floor and the way down is gone for
  good. Jumping at the Dome without it is death.
- **No way back up.** From the Torch Room the rope is out of reach, so the
  visitor who goes down is committed, as in Zork: the way out is the
  prayer at the Altar, which the brass bell, the prayer inscription and
  the book's "certain noises, lights, and prayers" all lean toward
  without saying. "If you pray enough, your prayers may be answered."
  anywhere else.
- **The torch is a better lamp.** It never goes out ("You nearly burn your
  hand trying to extinguish the flame."), so with it the brass lantern
  can be left below to make room for the coffin. It is also the first
  fire: it burns what Zork lets burn (the book, the leaflet, the sack, the
  painting, the leaves, the nest), and burning what you hold kills you.
  Burning the black book is death with Zork's "Wrong, cretin!".
- **The candles burn down** once disturbed, telling the hand that holds
  them so, and go out for good; they light a dark room while they last.
  Put out, nothing down here lights them again but the torch, which
  vaporizes them.
- **The coffin is heavy and holy.** It will not go down the hole in the
  Altar's floor, and jumping at the Altar while holding it is death (the
  way down is shut to its bearer, and Zork's V-LEAP reads a shut way down
  as a drop). The sceptre in it shows its colors when waved; in the
  coffin in the trophy case it scores nothing, as Zork's OTVAL-FROB
  reckons, and on its own it scores 6.
- **What a barrier names answers.** The Round Room's cave-in, cleared,
  dug, shifted, taken a rock of or climbed, answers with the roof that is
  still coming down; the dam's board, pulled, cut, climbed over or ducked
  under, with the hum of the water behind it. `look down` and `look over`
  show the drop at the Dome, the chasm and the canyon; climbing over the
  Dome's railing is Zork's leap, and its end.
- **The chasm takes things.** Put or thrown into the Chasm's chasm (or East
  of Chasm's), anything is gone for good, treasures included.
- **The Temple knows a word,** TREASURE (or TEMPLE), and since v5 it is the
  way to the thief's lair and back, past the Cyclops and the maze.
- **The thief is everywhere and nowhere.** A treasure left on a floor
  anywhere underground is likely gone the next time you look; carried, it
  may go anyway. "Someone carrying a large bag is casually leaning against
  one of the walls here" means a fight is coming, or a robbery, and the
  sword blazes while he is in sight. In the maze, his voice carries ("My, I
  wonder what this fine sword is doing here.").
- **Gifts disarm him, a little.** Given a treasure he stops to admire it;
  struck while he admires it, he defends at a strength of two, not five,
  and stays there: Zork's own strategy. Given the egg, he opens it, which nobody else can do
  without ruining it; the way to the canary is through him.
- **The nasty knife is his bane** (one less to his defence), and thrown at
  him before a fight it either misses and angers him or, one time in ten,
  frightens him off with his bag spilling. Disarmed, he picks his stiletto
  up again unless you take it first; unarmed, the next blow kills him. Out
  cold, he lies on his bag, and a gift brings him round.
- **His lair hides what he takes.** Going up to the Treasure Room brings him
  running; he makes its treasures vanish, guards the chalice, and in his own
  lair he does not run: the chalice is had only over his dead body. Killed
  there, everything he hid reappears, the egg open, the canary whole.
- **The Cyclops wants feeding,** and Zork says so only in his hungry looks.
  The lunch makes him thirsty; the water, given in the bottle, sleeps him.
  "Ulysses" is the other way, and only Zork's lore (or the name of his
  father's nemesis) points to it.
- **A third way home.** With the Cyclops gone through the wall, the Strange
  Passage runs from his room to the Living Room: the lair's treasures can
  be carried straight to the trophy case.
- **The canary sings once,** in the forest, and the songbird's bauble is
  worth a point in the hand and a point in the case.
- **The dam is a clock.** The bolt opens the gates at once and drains the
  lake over eight moves; the Dam, the shores, the Deep Canyon and the
  Loud Room all say how the water stands, and change as it does. The
  bubble glows while the bolt is free.
- **The Loud Room has three moods.** Roaring with the gates open (out you
  go, to one of three rooms), echoing as ever with the reservoir full or
  drained, and quiet, the bar free without the word, while the drained
  reservoir refills; when it is full the roar comes back all at once.
- **The lake bed is a trap.** Walk out onto the drained reservoir, shut the
  gates, and stay: "Staying here seems quite perilous!", and then the dam.
- **The leak is a puzzle with no reward.** The blue button floods the
  Maintenance Room; the gunk stops it, and the button stays jammed. The
  gunk is also the only way to mend a punctured boat, so squeezing it out
  on the leak first is a waste worth noticing.
- **Sharp things and plastic.** Getting into the boat with the sword in hand
  punctures it, as Zork's does ("Oops! Something sharp seems to have
  slipped..."); so does letting go of a knife in it, which on the water is
  the end of you.
- **The boat goes by itself.** Out on the river, waiting is travel; the
  current gives the visitor two minutes at the first reach and one at the
  last, and the label's "Land" is the only thing between them and the
  Falls.
- **The rainbow is a switch.** The sceptre makes it solid and ordinary in
  turn; the pot of gold appears once. Waving it while standing on the
  rainbow is Zork's best joke and its last.
- Zork's jokes: `xyzzy`, `plugh`, `hello`, `jump`, `count leaves`, `read
  wooden door`, `look under rug`, `raise rug`, `take mailbox`, `climb
  chimney` and `climb down chimney` (in the Kitchen), `eat lunch`, `drink water`, `smell sack`,
  `wind canary`, `dig with axe`, `read manual`, `close door` in the Studio,
  `count candles`, `kiss dome`, `turn page`, `close book`, `ring bell`,
  `wave sceptre`, `pour water on torch`; and, since v6, `oil bolt`,
  `plug dam`, `read buttons`, `open tool chests`, `put gunk in sack`,
  `count matches`, `jump` at Canyon View, `cross rainbow` from it.

## Things deliberately left out of this slice

- The lamp's battery life (Zork's lamp lasts several hundred turns; a run
  here is capped well short of it).
- Putting things through the grating (Zork lets a small one fall into
  the Grating Room).
- The map in the trophy case, which only appears at 350 points.
- The mirrors south of the Round Room and up from the Atlantis Room (v8);
  the coal mine (v7); Hades below the Altar, and the exorcism the bell, the
  book and the candles are for (v8); the hot bell.
- Filling the bottle at the river or the reservoir (Zork's FILL with
  GLOBAL-WATER): the bottle's water is the Kitchen's only.
- The thief on the drained Reservoir (Zork's I-THIEF goes there once it is
  land); his round is fixed, and skips it.

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
  no line should promise more than that someone has been here. Since v5
  the someone is there to meet: the thief is never named as the caretaker,
  and needs no more than the player's own conclusion. The Management's
  sign at Maze 15 is gone with the edge it marked; its notice at the dam
  stays, and stays the Management's.

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
- `east.sprout` (v4): the East-West Passage, the Round Room, the Loud Room
  and its bar, the Deep Canyon, the Damp Cave, the North-South Passage, the
  Chasm, the Engravings Cave, and the `Crack` and `Abyss` kinds (the
  chasm here and East of Chasm). `temple.sprout` (v4): the Dome Room, the
  Torch Room, the Temple, the Altar and the Egyptian Room, and the `Rope`,
  `Railing`, `Dome`, `Pedestal`, `AltarStone`, `Torch`, `Candles`,
  `BlackBook`, `Coffin` and `Sceptre` kinds. `lamp.sprout` now holds
  `Light` (anything lit that lights a dark room, counted for the grue)
  and `Lamp`, the brass lantern, one of them; `Flame` (`thing.sprout`) is
  a light that burns things.
- The Loud Room's echo is `Thing`'s wildcard permits and a permit on each
  targetless verb of the adventurer's, read off the place's `:deafening`
  (friction 70).
- `verbs.sprout`: Zork's verbs, the messages, the enums of gate
  destinations and description modes.
- `thief.sprout` (v5): the `Thief` NPC, his `LargeBag` and `Stiletto`, his
  turns (`:prowl` and `:survey`), his round of the rooms (`:tour`, and the
  39-branch move through the world's gate), his robbing, his fights on
  Zork's tables, his gifts, his lair and his death. The thief himself sits
  in the Round Room, where Zork's starts. Each room keeps `:visited` and
  `:tour` (`room.sprout`), and hides his comings and goings.
- `cyclops.sprout` (v5): the Cyclops Room (`CyclopsRoom`, keeping
  `:cstate` and `:magic`), the `Cyclops` NPC, the Strange Passage, the
  Treasure Room (`TreasureRoom`) and the `Chalice`. The visitor's side of
  their blows, gifts, robberies and the bauble is in `adventurer.sprout`;
  the egg the thief opens and the canary's aria are in `tree.sprout`.

- `dam.sprout` (v6): the Dam (its panel, the bolt that keeps the dam's
  clock and broadcasts `:tide`, the bubble), the Dam Lobby, the Maintenance
  Room and its buttons, the Dam Base; the `Tidal` kind every room that
  follows the water composes; the `Wrench`, `Screwdriver`, `Tube`,
  `Putty`, `ToolChests`, `Button`, `Leak` (spawned by the blue button, the
  room's flood clock) and `Matchbook` kinds.
- `reservoir.sprout` (v6): Reservoir South, the Reservoir, Reservoir North,
  Stream View, the Stream (`in_stream`), the Atlantis Room; the `Lake`,
  `Stream`, `Mud` (which hides the trunk while the water is up), `Trunk`,
  `Pump` and `Trident` kinds.
- `river.sprout` (v6): the five reaches of the Frigid River, the White
  Cliffs Beaches, Sandy Beach, the Sandy Cave, the Shore, Aragain Falls, On
  the Rainbow, End of Rainbow, Canyon Bottom, Rocky Ledge (`cliff_middle`)
  and Canyon View; the `River`, `WaterAbout`, `Cliffs`, `ClimbableCliff`,
  `Falls`, `Rainbow`, `Buoy`, `Emerald`, `Shovel`, `Sand` (which hides the
  scarab), `Scarab`, `PotOfGold` and `FarDam` kinds, and the marker kinds
  `Riverside`, `OnTheRiver`, `Narrows`, `RainbowFoot`, `RainbowTop`,
  `RainbowEnd`, `CanyonRim`, `SandyCave` and `CliffCave`.
- `boat.sprout` (v6): the `Pile`, the `MagicBoat` (a place and a bag at
  once: its reach, its errands through the gate, its current, its own ways
  out), the `Wreck` and the `BoatLabel`, and the boat itself, declared
  folded in the Dam Base's pile. Every room keeps `:reach` (`room.sprout`)
  and answers `:where` (a visitor getting out) and `:wreck` (a boat
  punctured on its floor). The visitor's side of boarding, getting out,
  launching, landing and the puncture is `adventurer.sprout`'s.

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


## Before round 7: v4, east of the Troll Room

The director widened the scope to v4. Built from `1dungeon.zil` (EW-PASSAGE
to EGYPT-ROOM, with ENGRAVINGS-CAVE, which is the only way from the Round
Room to the Dome; the objects in them) and `1actions.zil` (LOUD-ROOM-FCN,
DEEP-CANYON-F, DOME-ROOM-FCN, TORCH-ROOM-FCN, ROPE-FUNCTION, TORCH-OBJECT,
CANDLES-FCN and I-CANDLES, BLACK-BOOK, BELL-F, SCEPTRE-FUNCTION,
SOUTH-TEMPLE-FCN's COFFIN-CURE, CRACK-FCN, CHASM-PSEUDO, DUMB-CONTAINER),
and `gverbs.zil` (V-ECHO, V-PRAY, V-TREASURE, V-BURN and PRE-BURN, V-LEAP,
V-TURN, V-UNTIE, V-RING).

- **Rooms (13):** East-West Passage, Round Room, Loud Room, Deep Canyon,
  Damp Cave, North-South Passage, Chasm, Engravings Cave, Dome Room, Torch
  Room (all dark), Temple and Altar (lit), Egyptian Room (dark). The Troll
  Room's east passage now leads to the East-West Passage once the troll is
  down; its "Back soon" note is gone with the edge it marked.
- **Objects:** the platinum bar; the rope's end, the railing and the dome;
  the pedestal and the ivory torch; the brass bell and the prayer; the
  altar, the black book and the candles; the gold coffin and the sceptre;
  and the scenery every room description names, each with a description
  of its own.
- **Points:** the East-West Passage 5; the bar 10 and 5; the torch 14 and
  6; the coffin 10 and 15; the sceptre 4 and 6. The ceiling is 145.
- **Out of scope, refusing in-world:** south of the Round Room (a cave-in
  someone has begun to sort), east and northwest of the Deep Canyon (the
  Flood Control Dam's notices), northeast of the Chasm (a card), east of
  the Damp Cave (the river, without a boat), down the Altar's hole (Hades
  sighs up it, and the coffin never fits). Since round 7 only the dam's is
  a notice; see "After round 7".
- **The language as it now stands:** the refusing and one-way exits are
  plain exits; the candles' clock is wakes put off by `cancel wakes`; the
  coffin is a `Box, Treasure` diamond. What it made hard is friction 70 to
  77: the echo (70), the throw-out (71), the coffin in the hand (72), the
  candles' voice (73), the rope (74), weight (75), the prayer (76), and
  things gone for good (77).
- **Tests:** `loud_room.json` (the echo and the bar), `dome.json` (the
  rope, the railing, the Torch Room and the torch), `rope_fall.json`
  (untying, the rope dropped over the rail, the leap), `coffin.json` (the
  coffin, the sceptre, the weight, the Altar's hole), `prayer.json` (the
  prayer to the Forest, and burning), `altar.json` (the book and the
  candles put out and vaporized), `candles.json` (burning down, by time),
  `chasm_room.json` (the Chasm's loop, the chasm taking things, the stairs
  by name, the unbuilt edges), `treasures.json` (the four new treasures
  home by prayer, into the case, 110 points).

### What round 7 should test

- **Does anyone go east?** The east passage opens only with the troll down,
  as the hole west does. Whether players who win the fight now choose east
  over the maze, and how far 150 turns takes them.
- **The echo.** Whether the Loud Room's echoes read as a puzzle or as the
  world breaking; whether anyone says "echo" without knowing Zork, and how
  long they stay trying other words. Watch for players reading "Bar bar
  ..." as a fault, and for which commands they try first.
- **The rope.** Whether anyone carries the Attic's rope this far, ties it
  to the railing (and with what words: `tie rope to railing`, `tie rope`,
  `attach`, `fasten`, `put rope over railing`, `throw rope over railing`,
  which last two are not read as tying), and whether anyone drops it over
  the rail untied and loses the way down.
- **The one-way descent.** Whether visitors who climb down notice there is
  no way back up, and whether they find the prayer: the bell, the
  inscription and the book are the only hints, as in Zork.
- **The coffin's weight.** Whether players read "Your load is too heavy."
  at the coffin as a puzzle (leave the lamp: the torch is light), and
  whether anyone tries the hole with it.
- **Fire.** Whether anyone burns things with the torch, burns the black
  book, vaporizes the candles, or puts a treasure into the chasm.
- **The score.** Whether anyone carries the new treasures home and casts
  them, and whether the sceptre left in the coffin in the case reads as a
  bug (it is Zork's own rule).
- Carried, still unmet: the Grating Room and the key from below; the grue;
  the skeleton's ghost; the tree's drop; the egg broken.

## After round 7

- **The Round Room's cave-in stops promising a passage.** Four of six
  players read the old refusal ("you decide not to be the one who does") as
  the world taking a choice from them, and three tried to finish the job.
  The heaps stay, sorted, and stay the caretaker's; the refusal now ends on
  the world's own reason, a roof that is still coming down, and the
  cave-ins answer CLEAR, DIG, TAKE (a rock), MOVE, PULL, KICK, BREAK and
  CLIMB OVER with that same reason. The caretaker thread is otherwise
  untouched until round 9: no line promises more than that someone has been
  here.
- **One Management notice in the east, not three.** The dam's board stays.
  The reservoir, from the Deep Canyon and from the Chasm, is now water:
  a flooded passage and a flooded path, prose of the place in Zork's voice,
  each something to examine. The Chasm's cord and card are gone with the
  notice that named them. The dam's board is one board, and answers being
  pulled, cut, climbed over and ducked under.
- **The edges can be looked over.** `look down` (and `look over the
  edge`) at the Dome, the chasm's two edges, the Deep Canyon and Up a Tree;
  `look over the railing`; `climb over the railing` (and `jump over` it) at
  the Dome is Zork's leap, "I'm afraid that the leap you attempted has done
  you in."
- **The Dome leans once more toward the rope**, without naming it: the
  railing's posts are "the sort of thing a careful person makes something
  fast to before trusting the drop." The puzzle is Zork's and stays.
- **The load says what weighs.** "Your load is too heavy, the sword not
  least of it." names the heaviest of the heavy things in hand (friction
  75); the axe's description owns its heft; `read` with a refused implicit
  take says it tried: "(Taking the black book first) ...".
- **A treasure scores the first time it is held in any way.** Put or
  dropped straight out of a box in hand (the sceptre from the coffin into
  the case), it pays what taking it pays, as Zork's PUT and DROP take it
  first (`treasures.json`, `barriers.json`).
- **Parser:** `take X from Y` and `take X out of Y` (with Zork's PRE-TAKE
  refusal, unnamed, friction 78); `crawl <direction>`; `go through X`;
  moving a thing aside, out of the way, or off; CUT (Zork's V-CUT, short of
  slicing what burns; turned on the troll it is an attack); CLEAR, CLIMB
  OVER and DUCK UNDER for every thing, in Zork's voice. `go <direction>
  through X` could not be written (79).
- **Kept, by choice:** the echo (five of six got the bar, four by trying);
  the rope puzzle; Zork's weights and the limit of 100; the trophy case's
  "Done."; the four alike Forest rooms; the grating pointer.
- **For the director:** the slice no longer fits 150 turns. All four
  150-turn runs ended mid-plan, and the most efficient run reached 126 of
  145 with the maze and the coins untouched. Nobody has reached the Grating
  Room in 42 runs. Raising this world's turn cap (250 to 300) is the
  brief's budget, and so the director's call; until then the grating from
  below and the coins are known only from `grating.json` and `coins.json`.
- **To Sprout:** 68 and 69 again (round 7's misreadings), 70 (the echo of
  the typed word), 78 (a refusal in `each` faults), 79 (an intent's unused
  slot), 80 (identity out of range).

### What round 8 should watch

- Whether anyone now goes back for the rope after seeing the Dome, and how
  long it takes; whether `look down` at the Dome is tried.
- Whether the cave-in still reads as a door to open, or as the caretaker's
  tidiness at a dead end.
- Whether the reservoir's water reads as a place rather than a fence, and
  the dam's one notice still as a joke.
- Whether the load's named weight changes what players drop.
- Carried, still unmet: the Grating Room and the key from below; the grue;
  the skeleton's ghost; the tree's drop; the egg broken; the prayer found
  by a player who does not know Zork.

## After round 8

The slice holds: all three runs with a goal reached it, 145 in about 170
moves for a player who knows Zork, about 120 in 250 turns for a careful
first-timer. The edges read as places, the caretaker as the intent hopes,
and nothing about the slice's shape changes. What changed is small answers.

- **The heaps are their own thing.** Four players looked closer at the
  sorted heaps and got the cave-ins' paragraph back. Now `examine heaps`
  has a line of its own: five heaps graded like gravel, a swept cone of
  dust, the marks of two knees, and nothing to say which way whoever knelt
  there went. Someone has been there, and no further; the thief pays it off
  in round 9. The cave-ins answer to `stones` and `debris` as well, and
  both they and the heaps meet every hand (move, push, pull, take, touch,
  kick, break, clear, dig, look under) with the roof still coming down;
  `search` and `look behind` the heaps say what is there and behind.
- **The chimney's rule is true.** "a light to climb by" was untrue for the
  candles, which Zork's chimney never took. The overload line now says
  "you, your lamp and one thing more", and without the lamp the chimney
  says its own reason: the draught would have a flame out halfway; it is a
  climb for a lamp.
- **The load names the lamp beside the torch.** With both in hand, a load
  too heavy names the brass lantern: the torch never goes out, and the
  explorer who dropped both walked home by candles that burned down.
- **Putting out the candles** says "It's really dark in here...." only when
  no other light is left, counted as the lamp counts.
- **The Altar's hole** answers `go down the hole`, `jump into the hole` and
  `go through the hole` as its way down does: the coffin refused, or
  Hades' sigh.
- **Zork's global grue** is in every room, as the wall is: its
  description, its silence, and "There is no grue here, but I'm sure there
  is at least one lurking in the darkness nearby." In the dark it cannot
  be named (friction 81).
- **The Deep Canyon's water** is heard with `listen` alone.
- **Parser:** `enter crack` at the Chasm takes the way south (its label is
  now "crack"); `go back up the stairs` and its kin climb; `look down into
  X` looks in, and `look down into the room below` at the Dome looks down;
  `what am I carrying` and its kin are INVENTORY. `go back <direction>`
  could not be written (82).
- **Kept, by choice:** the trap door's silence after its TOUCHBIT is
  cleared, the prayer's unannounced move to the Forest, and the rope's
  one-way drop, all Zork's; the edges; the caretaker, untouched. The
  optional dust line on the trap door is not written: from above, there is
  no bar to see, and it would explain what Zork leaves to be noticed.
- **For the director:** nobody has reached the Grating Room in 48 runs, and
  the longer cap did not change it. A run given a goal that leads there
  ("find another way out of the maze") is the only way left to see the
  grating from below, the grue, the ghost and the tree's drop met in play.
  Two of six runs filed no report (the parser-breaker at turn 37, the
  newcomer at 145); that is the harness, and the parser-breaker is worth
  running again.
- **To Sprout:** 11 again (a list and `all`), 68 again, 70 again (what does
  not parse cannot echo), 81 (naming in the dark), 82 (an intent's slot and
  a way out).

### What round 9 should watch

- Whether the heaps' closer line satisfies the look, or pulls harder.
- Whether a player with the candles meets the chimney's lamp line and
  understands it at once.
- Whether anyone with the torch drops the lamp when the load names it.
- Carried, still unmet: the Grating Room and the key from below; the grue
  in play; the skeleton's ghost; the tree's drop; the egg broken; the
  prayer found by a player who does not know Zork.

## Before round 9: v5, the thief and the Cyclops

The director widened the scope to v5. Built from `1dungeon.zil` (THIEF,
LARGE-BAG, STILETTO, CYCLOPS, CHALICE, BAUBLE, CYCLOPS-ROOM, STRANGE-PASSAGE,
TREASURE-ROOM, LIVING-ROOM's west way) and `1actions.zil` (ROBBER-FUNCTION,
THIEF-VS-ADVENTURER, I-THIEF, ROB, ROB-MAZE, STEAL-JUNK, DROP-JUNK,
DEPOSIT-BOOTY, RECOVER-STILETTO, LARGE-BAG-F, CHALICE-FCN,
TREASURE-ROOM-FCN, THIEF-IN-TREASURE, CYCLOPS-FCN, I-CYCLOPS,
CYCLOPS-ROOM-FCN, CANARY-OBJECT, THIEF-MELEE, CYCLOPS-MELEE, HERO-BLOW,
VILLAIN-BLOW, WINNING?, the DEF tables), and `gverbs.zil` (V-ODYSSEUS,
V-TREASURE).

- **Rooms (3):** the Cyclops Room (southeast of Maze 15), the Strange
  Passage, the Treasure Room; all dark. Maze 15's way southeast opens, and
  its sign is gone; the Living Room's nailed door opens west once the
  Cyclops has gone through it. The Treasure Room and the Temple are joined
  by the words TREASURE and TEMPLE.
- **NPCs (2 more):** the thief and the Cyclops, each composing
  `sprout.Actor`, each acting by `act` and telling his blows with
  `tell target`. With the troll, three.
- **Objects:** the thief's large bag and stiletto; the silver chalice; the
  brass bauble; and the scenery the new rooms name (the stairs, the
  bloodstains, the east wall and its opening, the exit, the wooden door and
  its opening, the long passage, the discarded bags, the granite), each
  with a description of its own. The canary has one now too.
- **Points:** the Treasure Room 25; the chalice 10 and 5; the canary, whole,
  6 and 4; the bauble 1 and 1. The ceiling is 197.
- **How the thief is built.** Every turn of his (a wake a minute, or a blow
  struck at him) he broadcasts `:prowl`; his room answers `:survey`, and in
  that handler `from` is his room, against which the whole of I-THIEF and
  his share of I-FIGHT run, in Zork's order: in his lair alone, he empties
  his bag (`:disgorge`) and so opens the egg; with a visitor in a dark room
  without the troll, THIEF-VS-ADVENTURER (show himself, flee, leave, or rob
  the room or the visitor, who hands over by `:rob`); anywhere else he
  robs the room unseen (ROB at three in four, then ROB-MAZE in the maze and
  STEAL-JUNK elsewhere); then, seen and with company, he fights (`act
  attack`, on Zork's tables, his lines told to the one hit); then, unseen,
  he moves on, through the world's gate, to the next room of his round
  (`:tour`), whose `:entered` surveys it for him in turn; and he drops a
  worthless thing now and then (DROP-JUNK). He is unseen as Zork's
  INVISIBLE thief is: in the room, unlisted, unnamable, his hands out of
  reach, his arrivals unannounced. The visitor's blow at him is `:blow`
  (HERO-BLOW, with his defence written back as VILLAIN-RESULT does), and
  dying (`:expire`) he drops his stiletto and his treasures where he falls;
  in his lair, the room lists them as they reappear. The Treasure Room
  summons him (`:summon`, through the world) or rouses him where he stands
  unseen (`:defend`). What the model would not let him do, and how he does
  it anyway, is friction 83 to 92.
- **The Cyclops** keeps his wrath (`:wrath`) and his sleep, tells the room
  what to say of him (`:cyc_state`), runs I-CYCLOPS and his fists on wakes
  while a visitor is with him, and on "Ulysses" broadcasts `:magic` (the
  wall, the passage and the door) and `:cyclops_gone` (the sword) and goes.
- **The tests:** `thief_seen.json` (he shows himself, is looked at and
  refused, and leaves robbing the visitor blind), `thief_unseen.json` (he
  robs unseen in the Round Room, and in the maze is overheard taking the
  sword), `thief_hungry.json` (nothing to rob), `thief_fight.json` (given a
  treasure, fought and killed: the booty remains, and the stiletto is
  anyone's), `thief_lair.json` (after round 9: in his lair he stands
  and fights, neither fleeing nor leaving, and the chalice stays guarded;
  this replaced `thief_flee.json`, which had him flee there, against
  THIEF-VS-ADVENTURER), `thief_egg.json` (the egg given, the thief killed, the
  egg open and the canary whole, carried up the chimney and wound on the
  Forest Path for the bauble), `thief_hoard.json` (the egg given, his round
  through the maze for the coins, his lair emptied and the egg opened, the
  rush, the vanishing, his death there and the hoard reappearing),
  `treasure_room.json` (25 points, the chalice guarded, the thief killed,
  the chalice home by the Strange Passage, TREASURE and TEMPLE),
  `cyclops_sleep.json` (the bottle refused, the garlic, the lunch, the
  agitation, the water and the sleep, the stairs), `cyclops_wake.json`
  (kicked awake, he fights), `cyclops_wrath.json` (provoked, he eats you),
  `cyclops_ulysses.json` (the wall, the passage, the door, the sailor),
  `v5_score.json` (the new points, into the case). `coffin.json` and
  `hole.json` no longer say TREASURE in the Temple, and `maze.json` goes
  southeast into the Cyclops Room instead of reading the sign.

### What round 9 should test

- **Does anyone meet the thief, and what do they make of him?** He passes
  any one room every 39 turns of his and comes forward only a third of the
  times he finds somebody in a dark room; at the studio's 30 seconds a
  turn he moves every other turn. A 150-turn run underground meets him
  perhaps twice. Watch whether players read the unseen robbery ("A
  seedy-looking individual…") as theft by someone, and go after him;
  whether they notice treasures missing from floors; whether the caretaker
  reading settles on him.
- **The fight.** He is deadly to a fresh visitor (two in nine of his blows
  kill outright at a score under 70). Whether players fight him, die, and come back;
  whether anyone gives him a treasure first (and finds that it weakens him),
  throws the knife, takes his dropped stiletto, or lets him leave.
- **The egg.** Whether anyone gives him the egg, or carries it underground
  where he can take it, and then finds it open in his lair or where he
  fell; whether anyone winds the whole canary in the forest.
- **The Cyclops.** Whether players feed him the lunch and then think of the
  water; whether "Ulysses" is found without knowing Zork (nothing in this
  world points at it but his father, and the Cyclops himself, which is
  Zork's own hint); whether anyone attacks him, or waits too long.
- **The lair.** Whether anyone reaches the Treasure Room, by the stairs or
  by the Temple's word, and what they do when the treasures vanish; whether
  the chalice's "stabbed in the back" reads as a puzzle, and whether
  anyone kills him there.
- **The way home by the Strange Passage,** and whether the hole in the
  Living Room's door is noticed from the house side.
- **Faults:** none in 25 fuzzed runs of 120 to 200 random commands with
  random waits, from the Troll Room, with the thief in sight, in his lair
  and before the Cyclops.
  Watch for any fault in play with three NPCs and the gate in use by more
  than one of them in a turn.
- Carried, still unmet: the Grating Room and the key from below; the grue
  in play; the skeleton's ghost; the tree's drop; the egg broken; the
  prayer found by a player who does not know Zork. The thief now makes
  the egg's fate and the maze's coins less certain.

## After round 9

Six runs; every one met the thief, and everyone who reported read him as
meant: a robber who roams, a caretaker's tidiness that is probably his.
Nobody killed him, nobody saw the hoard come back, nobody wound the
canary, nobody fed the Cyclops (one player who knew Zork said "odysseus").

- **The lair was wrong, and is fixed.** He fled from the strong
  goal-seeker in his own lair after every exchange (WINNING? lost), with
  the egg in his bag, so the hoard could never be won there. Zork's
  THIEF-VS-ADVENTURER does nothing at all while the visitor is in the
  Treasure Room: he neither runs, nor robs, nor leaves in disgust. Now he
  stands and fights there until one of them is dead, and the hoard and the
  open egg are there for whoever kills him. That was the canary arc's
  one door, and it was shut; it is open now. The discretion clause stays
  where Zork has it, which in practice almost never comes up: he must be
  seen without having announced himself.
- **The lair's arrival reads in Zork's order.** The scream and the gesture
  are told by the visitor as they come in, before the room is described,
  so the room is then described as it is after the treasures have gone;
  and the gesture is told only when there is something besides the
  chalice to vanish. The lair keeps `:keeper` (the thief tells it whether
  he is alive and awake) so that the visitor knows whether he will come.
  Friction 92 is resolved this way.
- **DIAGNOSE says when the wound will heal,** as V-DIAGNOSE does: "which
  will be cured after N moves", twenty moves a point (ten minutes at the
  host's half-minute a turn), and what is left counts the score as Zork's
  FIGHT-STRENGTH does. Wounds are now counted in Zork's points: a serious
  wound from the thief or the Cyclops is two, and heals as two, where it
  used to cost two strength and give back one.
- **The thief's double blow is Zork's.** DO-FIGHT repeats the villain's
  blow, one to three more times, when the first knocks the visitor out,
  in the same move, and every repeat but a stagger is the sitting-duck
  death. It stays. What changed is the death's own line, which is mine:
  it now says where things went (the plain things about the forest and
  fields around the house, anything of value into a dark corner in or
  under it, the lamp to the living room), so a player who loses the lunch
  or the sword knows where to look.
- **BLOW OUT** turns things off, as Zork's syntax has it ("You nearly burn
  your hand trying to extinguish the flame."). EVERYTHING is not Zork's
  word for ALL, and stays unknown.
- **Kept as they are:** the thief's voice and the caretaker (P5); a
  staggered thief may still leave in disgust in the same move, since
  Zork's STAGGERED costs him only his blow and I-THIEF's 30 per cent leave
  runs regardless; the maze (P9); the sack in the case counts nothing
  (OTVAL-FROB, as the sceptre in the coffin); the echo, the prayer, the
  chimney's rule, the lamp named in the load.

### What round 10 should watch

- **Whether anyone kills the thief in his lair,** now that he stays, and
  wins the hoard, the open egg and the canary; and whether players at a
  low score read the lair as a place to come back to later, stronger.
- **Whether DIAGNOSE's number changes what wounded players do.**
- **Whether the new death line sends anyone back for the lunch or the
  sword.**
- Carried, still unmet after 54 runs: feeding the Cyclops (lunch, then
  water); the Grating Room and the key from below; the grue in play; the
  ghost; the tree's drop; the egg broken; winding the canary. A goal aimed
  at them (getting past the one-eyed guard without a fight; finding where
  stolen things went; another way out of the maze) is the director's to
  give.

## After round 10

Six runs; the lair worked as round 9 meant it to. Four climbed to it,
met the thief standing his ground, and one killed him there (the
goal-seeker, with the nasty knife) and took the hoard; three died, two of
them on their way back stronger. Nobody typed DIAGNOSE. The new death
line sent two back for the sword. The Cyclops was fed, lunch then water,
for the first time in sixty runs.

- **A box holds by weight now, as Zork's V-PUT weighs it** (P1). The sack's
  capacity of 9 had meant nine things, so the newcomer carried the bar,
  the painting and the sword up the chimney inside it. Each box keeps
  `:held`, the sizes of what is directly inside it, and refuses with
  Zork's "There's no room." The sack is full with the lunch and the
  garlic; the trophy case's capacity is Zork's 10000; the chimney rule is
  whole again, the sack being the one honest way to carry small things up
  it (friction 75 again).
- **The egg points at the thief** (P2). Nobody has given him the egg in
  sixty runs, and the goal-seeker killed him without knowing he was the
  only one who could open it. The egg, examined, now says its clasp
  "would take a professional's fingers to undo without harm: deft
  fingers, and not, one suspects, entirely honest ones." Zork's "You have
  neither the tools nor the expertise." stays as it is, and so does the
  silence when he dies with the egg safe in the case.
- **The lair's death lists only his treasures** (P11): the stiletto he
  drops lies in plain sight, as F-DEAD moves it, and with nothing hidden
  the line is only "The chalice is now safe to take."
- **The sword glows once going into the lair** (P10): while its keeper
  will come, it settles at once on the bright glow, rather than the
  room's faint one and then his.
- **FEED alone asks what with; OFFER takes Zork's second order; `go into`
  is `through`, and the Chasm's crack goes south by it; HOW AM I DOING is
  SCORE** (P7, P8, P14).
- **Kept as they are:** the lair's stand-and-fight and Zork's tables (P3);
  the maze and his robbing in it (P4); the Cyclops Room in BRIEF, as
  CYCLOPS-ROOM-FCN tells him only in its long description (P9); the edges
  (P12); "Done." at the case (P13). Engine faults logged, not worked
  round: 94 (P5), 11 and 59 (P6).

### What round 11 should watch

- **Whether anyone gives the thief the egg,** now that the egg says who
  could open it, and whether the canary is ever wound.
- **Whether the sack's weight reads as a puzzle or a wall:** what players
  carry up the chimney now, and whether anyone takes two trips.
- **DIAGNOSE,** still never typed.
- Carried, still unmet: the Grating Room and the key from below; the grue
  in play; the ghost; the tree's drop; the egg broken. A goal aimed at
  them is the director's to give.

## Before round 11: v6, the dam and the river

The director widened the scope to v6. Built from `1dungeon.zil` (DAM-ROOM,
DAM-LOBBY, MAINTENANCE-ROOM, DAM-BASE, RESERVOIR-SOUTH, RESERVOIR,
RESERVOIR-NORTH, STREAM-VIEW, IN-STREAM, ATLANTIS-ROOM, RIVER-1 to RIVER-5,
WHITE-CLIFFS-NORTH and -SOUTH, SANDY-BEACH, SANDY-CAVE, SHORE,
ARAGAIN-FALLS, ON-RAINBOW, END-OF-RAINBOW, CANYON-BOTTOM, CLIFF-MIDDLE,
CANYON-VIEW, and their objects), `1actions.zil` (DAM-ROOM-FCN, BOLT-F,
BUBBLE-F, DAM-FUNCTION, BUTTON-F, TOOL-CHEST-FCN, I-MAINT-ROOM,
LEAK-FUNCTION, PUTTY-FCN, TUBE-FUNCTION, I-REMPTY, I-RFILL, the three
RESERVOIR functions, LOUD-ROOM-FCN, DEEP-CANYON-F, RBOAT-FUNCTION,
IBOAT-FUNCTION, DBOAT-FUNCTION, RIVER-FUNCTION, I-RIVER, RIVR4-ROOM,
WHITE-CLIFFS-FUNCTION, SAND-FUNCTION, FALLS-ROOM, RAINBOW-FCN,
SCEPTRE-FUNCTION, CANYON-VIEW-F, CLIFF-OBJECT, WCLIF-OBJECT, LAKE-PSEUDO,
STREAM-PSEUDO, TRUNK-F, MATCH-FUNCTION, I-MATCH, CANDLES-FCN) and
`gverbs.zil` (PRE-BOARD, V-BOARD, V-DISEMBARK, V-LAUNCH, V-INFLATE,
V-DEFLATE, V-PLUG, V-PUMP, V-OIL, PRE-TURN, V-DIG, V-SWIM, GOTO's
vehicle rules, NO-GO-TELL). The brief puts the scarab on Sandy Beach; the
ZIL puts it in the sand of the Sandy Cave, northeast of the beach, with the
shovel on the beach, and so does this world. The buoy and its emerald are
Zork's, on the fourth reach, though the brief does not name them.

- **Rooms (27):** the Dam, Dam Lobby, Maintenance Room and Dam Base;
  Reservoir South, the Reservoir, Reservoir North, Stream View, the Stream
  and the Atlantis Room; the Frigid River's five reaches; the two White
  Cliffs Beaches, Sandy Beach, the Sandy Cave and the Shore; Aragain Falls,
  On the Rainbow and End of Rainbow; Canyon Bottom, Rocky Ledge and Canyon
  View. Dark as Zork has them: the Maintenance Room (until its lights), the
  reservoir's rooms, Stream View, the Stream, Atlantis, the second to fourth
  reaches, both White Cliffs Beaches, Sandy Beach and its cave. The Deep
  Canyon, the Chasm and the Damp Cave now lead there; the Clearing east of
  the house leads to Canyon View. Atlantis's staircase up refuses (the
  mirrors are not built).
- **Objects:** the control panel, the bolt, the green bubble and the dam;
  the guidebook, the matchbook (five matches, a minute each; they light the
  candles), the reception desk; the wrench, the screwdriver, the tube and
  its gunk, the tool chests, four buttons and the group of them, the leak;
  the pile of plastic, the magic boat and its tan label, the punctured
  boat; the trunk, the pump, the trident; the red buoy and the emerald, the
  shovel, the sand and the scarab, the pot of gold; and the scenery every
  new room names (the lake, the stream, the mud, the river, the water, the
  White Cliffs, the canyon wall, the falls, the rainbow and the rest), each
  with a description of its own.
- **Points:** the trunk 15 and 5, the trident 4 and 11, the pot of gold 10
  and 10, the scarab 5 and 5, the emerald 5 and 10. The ceiling is 277.
- **How the dam is built.** The bolt keeps the dam's state (0 shut and
  full, 1 open and full, 2 open and drained, 3 shut and refilling) and its
  clock, a wake four minutes on; it broadcasts `:tide`, which the world
  lets through, and every room that cares keeps its own note (`Tidal`) and
  says what its own room hears of the change (`changed :tide`), since no
  room may read another's (friction 89). The folded boat hears it too, by a
  pass rule on the pile, so it knows the lake when it is blown up. The
  yellow and brown buttons broadcast `:gate_flag` to the bolt, the bubble
  and the Dam; the red one asks its room to switch its `:daylight`; the
  blue one spawns the leak, whose own wakes fill the room.
- **How the boat is built.** The magic boat is a place (`sprout.Place`) and
  a bag at once, declared folded in the pile at the Dam Base, and swapped in
  and out of a spawned pile or punctured boat by being moved into them. It
  keeps its reach (`:at`, from the room's `:reach`) and goes by the world's
  gate on four errands: put out or land or row on (a way out of the boat
  that leads back into itself, taken by the visitor; its own `:entered`
  says which by its reach), drift (its own wake), land or launch by name
  (`launch boat`, `land`, which are messages), and follow (a visitor who
  steps ashore by a real way out). It describes the room it lies in by
  naming each room it can lie in, and a visitor gets out of it by asking
  the room it lies in (`:where`, answered `:berth`). What Sprout would not
  let it do directly is friction 95 to 105.
- **The tests:** `dam_bolt.json` (the bolt, the buttons, the gates, the
  draining and the trunk, the refilling), `leak.json` (the lights, the
  chests, the tube, the leak and the gunk), `leak_drown.json` (the room
  fills and drowns; the lobby's doors shut), `atlantis.json` (across the
  lake bed to the pump and the trident), `loud_noise.json` (thrown out,
  echoing, quiet, and the roar returning), `river.json` (the boat blown up,
  punctured, mended, launched, carried down the river, landed and over the
  Falls), `scarab.json` (the buoy and the emerald, the shovel, the scarab,
  the hole falling in), `rainbow.json` (the sceptre, the solid rainbow, the
  pot of gold, the death on it), `v6_score.json` (the pot and the sceptre
  home by Canyon View and into the case). `barriers.json`,
  `chasm_room.json`, `climbing.json` and `edges.json` lost the dam's board,
  the flood and the canyon rope and now walk through to the new rooms; the
  thief's round is eight rooms longer, so `thief_hoard.json`,
  `v5_score.json` and `thief_unseen.json` wait eight minutes more (seven in
  the last).

### What round 11 should test

- **Does anyone open the dam?** The bolt says only that it will not turn;
  the bubble is dark until the yellow button; the guidebook and the
  maintenance room's "group of buttons" are the only hints, as in Zork.
  Watch whether players press every button (and flood the room), find the
  wrench and connect the bubble to the bolt, and what they make of the
  draining: whether they wait, and whether they notice the trunk.
- **The boat.** Whether anyone fetches the pump across the drained lake,
  blows up the pile at the Dam Base, reads the label, and gets in with the
  sword in hand (and so punctures it, and whether the gunk on the leak was
  then already spent); whether anyone realizes the current will not wait,
  and lands; whether the Falls kill anyone, and whether that reads as fair.
- **The Loud Room's moods.** Whether players who opened the gates are
  confused at being thrown out, and whether anyone takes the bar while the
  room is quiet without saying the word.
- **The rainbow.** Whether anyone carries the sceptre to the Falls or the
  End of Rainbow and waves it (nothing in this world points there but the
  "dazzling display of color", which is Zork's own hint), and whether
  anyone finds the canyon from Canyon View, east of the Clearing.
- **Faults:** none in the new tests or in fuzzed walks through the dam,
  the reservoir, the boat's whole run and the rainbow route. Watch the
  boat above all: a visitor in a place that moves is the newest thing the
  world asks of the engine.
- Carried from round 10, still unmet: the egg given to the thief; the sack's
  weight; DIAGNOSE; the Grating Room and the key from below; the grue in
  play; the ghost; the tree's drop; the egg broken.

## After round 11

Six runs, the first with the dam and the river. Players opened the dam,
fetched the pump across the lake bed, blew up the boat, rode the river,
dug the scarab and took the emerald from the buoy; three went over the
Falls and all three called it fair. Only the goal-seeker found a heavier
way up than the chimney (praying with the coffin); nobody found the canyon.

- **The canyon is seen from the Falls** (P1). The rainbow at Aragain Falls
  now comes down "on a little sunlit beach on the far side, where the canyon
  opens to the sky", and the far side is a thing: a path down the canyon,
  walls a person might climb "to somewhere with trees on it", and between
  here and there the rainbow. The weights, the chimney's rule, the sack's
  weight and the re-barring trap door stay Zork's: the hauling is the
  puzzle, and the other ways up (the prayer, the canyon, the grating, the
  Strange Passage) are the answers to it.
- **A treasure taken from under the visitor's eyes is told** (P2): I-THIEF
  robs a lit room the visitor is in, and Zork says nothing; here STEAL-JUNK's
  "You suddenly notice that the painting vanished." says it.
  `thief_gallery.json`.
- **WAIT in the boat brings the current** (P3, friction 106): Zork's three
  moves reach the next reach, so here one wait does.
- **The river's words** (P4, P5): UP and UPSTREAM are the river's "You
  cannot go upstream due to strong currents."; DOWN and DOWNSTREAM say the
  current needs no help; in a beached boat, a way out on foot says to get
  out first. The label's line is kept for open water. `river_words.json`.
- **The lunch and garlic are eaten from a held sack** (P8), as V-EAT has it.
- **The pile's instructions read** (P9): READ, TURN OVER and LOOK BEHIND the
  pile give the back of the fold, pointing at the valve, a pump and the
  label inside.
- **The dam follows the tide from below** (P10): at the Dam Base and on the
  Dam, the shut gates over a refilling reservoir no longer spill.
- **DIG THROUGH and DIG INTO** reach the Round Room's rubble (P11); the
  rubble and heaps were things already, and the Atlantis stair's chalked
  arrow stays a refusal, since its rubble is in a room not built.
- **Kept:** the Falls and the river's speeds (P6). Logged, not worked
  round: 94 and 69 again (P7), 107, the reach report and the boat (P12).

### What round 12 should watch

- **Whether anyone crosses to the canyon,** now that the Falls point at it:
  whether the sceptre is carried to the rainbow, and the pot of gold and a
  load carried up the canyon wall to the Clearing.
- **The river with the new words:** whether WAIT now reads as drifting, and
  whether anyone still goes over the Falls by a parser turn.
- **The thief in the Gallery,** and whether the new line reads as his.
- Carried, still unmet: the egg given to the thief; DIAGNOSE; the Grating
  Room and the key from below; the grue in play; the ghost; the tree's
  drop; the egg broken.

## After round 12

Six runs, all of them spent on the dam and the river. WAIT in the boat,
the death's scatter line and "the sword not least of it" landed (P10).
Three runs died at the Falls, every one by launching from the Shore onto
the last reach, two of them trying to cross west toward the rainbow's
beach (P1, P2). Nobody reached the canyon, the Cyclops, the lair or the
Egyptian Room.

- **The last reach says what it is** (P1). Launching from the Shore, the
  boat says the current takes it at once and the roar is very close; WEST
  there is the sheer bank and "The only landing left is the one on the east
  shore." The map and the one-move current stay Zork's: the Shore is a
  known risk now, not a parser turn wasted. `shore_launch.json`.
- **The rainbow's far side is reached by land** (P2). The Falls' rainbow
  line now goes on: a path from that beach down the canyon, under walls a
  person might climb, to somewhere with trees on it, and nothing that
  floats gets there in one piece. It points at the Clearing without naming
  it; the sceptre's hint stays Zork's.
- **Names given back** (P4): the Atlantis Room's carvings, the knee marks
  at the heaps (a thing of their own: whoever knelt there is tidy even
  about leaving), a pebble, the bird's nest, the back of the pile.
  `named_back.json`.
- **The rumbling is heard** (P5), by name and with LISTEN alone in the
  boat on the third to fifth reaches, louder as the Falls come nearer.
- **The reservoir from the Dam follows the tide** (P6): gates open and the
  water still high, it runs out through the gates and no longer over the
  top.
- **TAKE ALL** (P7). The v6 water, mud, sand, rainbow, bolt, bubble and
  leak refused take in a `permit`, which put them in `all` and refused the
  whole line; they are `no_take` passages now. The sack is taken whole and
  nothing comes out of a held one (108). With eight things in hand the cap
  still never reaches the floor (36, open with Sprout). `take_all.json`.
- **The chimney names the load** (P9): "...with what you're carrying,
  which is the brass lantern, the tan label and the trunk of jewels." The
  rule and the re-barring stay.
- **Kept:** the unseen robbing (P8). STEAL-JUNK may take the pump, as Zork's
  takes any lesser thing, and DROP-JUNK lets it fall somewhere later; a
  dropped tool gone from its room is the thief's signature, to be
  concluded and not told. The Loud Room's echo and the beach's swimming
  (P11). Logged, not worked round: 94 again (P3).

### What round 13 should watch

- **The Shore:** whether anyone still launches from it, and whether a
  death there now reads as fair.
- **The canyon:** whether the rainbow line sends anyone east from the
  Clearing, and whether the sceptre ever reaches the rainbow.
- **The chimney's line:** whether naming the load shortens the ferrying,
  or sends anyone looking for a heavier way up.
- **The thief and the pump:** whether a player who loses a tool to him
  works out where it went.
- Carried, still unmet: the egg given to the thief; DIAGNOSE; the Grating
  Room and the key from below; the grue in play; the ghost; the tree's
  drop; the egg broken; the Cyclops, the lair and the Egyptian Room. These
  now need goals aimed at them (P12), which is the director's call.
