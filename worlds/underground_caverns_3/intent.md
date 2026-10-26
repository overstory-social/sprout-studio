# underground_caverns_3: intent

_The author's own notes: the arc, the secrets, what "done" looks like, and
the interactions I hope players find. Sealed from playtesters._

## Which quarters are built

**Round 1: Q1 only.** The stair, the Land of Shadow and the lake: 18 rooms.

- The way in: Endless Stair, Junction, Barren Area, Creepy Crawl, Foggy
  Room.
- The Land of Shadow, eight rooms all named "Land of Shadow", and the
  Flathead Ocean.
- Lake Shore, Aqueduct View, On the Lake, Underwater.

Every exit into Q2 or Q3 (Junction east, Barren Area west and northwest,
Creepy Crawl east, Land of Shadow's cliff-top north, Flathead Ocean north,
and the lake's west and south shores) is present and turns the visitor
back with a line in Zork's voice. Three of the seven points are in Q1: the
hooded figure's first appearance, the first stroke of the sword against
it, and the first entry into the lake. The score line says "of a possible
7" as the original does, so a visitor who reaches 3 has every point this
quarter holds; the README and the score's own voice do not say so, since
the original never did.

**Round 2: Q1 refined, nothing widened.** What the first playtest changed,
and what it did not:

- A bare `attack figure` (and `kill`, `hit`, `fight`) is made with the
  sword where the sword is in hand, and says "(with the sword)" first, as
  Zork's parser fills an orphaned instrument. The feeble line is kept for
  a visitor with no sword.
- The hooded figure is a thing of the light it appears in. If the room
  goes dark around it (the lamp turned off, thrown, or burned out), it
  withdraws with a line, the fight is off, and the sword's glow goes; it
  can be met again by lamplight. The original keeps striking from the
  dark at a visitor who cannot name it, which I take for an accident of
  its engine rather than a design.
- The defenceless state pulls toward the hood: the stroke that brings the
  figure to its last point says it lowers its sword and waits, and
  `examine figure` then says the hood hangs within reach. Killing it still
  reads as a victory at the time; the death line now carries the hood and
  the cloak away with it and a note that something has stopped. The trap
  stays a trap.
- The hood can be had by the figure's name: `unhood figure`, `remove hood
  from figure`, `take hood from figure`, `pull back hood of figure` and
  the like. The possessive, "figure's hood", is not a line Sprout reads.
- The lake soft-lock stands. The shore now says what the water does to a
  hand, the plunge names the lamp going under, and `examine lake` says the
  shore is lit and will keep what is left on it. A visitor who fries the
  lamp in Q1 has no second light until Q2's torch, as in the original;
  the way that is left is the old man's three returns and the void, and
  `restart`, refused in character, now says so honestly instead of
  implying the lamp is still of use.
- `take all` works: the set is typed by what can be carried, so a room's
  seven shared presences no longer fill it before anything on the floor,
  and underwater it reaches for the shiny thing and each sunk item with
  the slip roll. With the figure standing, `take all` reaches for its hood
  and cloak, as Zork's ALL does.
- The sailor can be spoken to; in the ship's one command he answers with
  a nudge toward the greeting, and the ship sails at the end of that
  command, after what was said. `board the boat` in that command is
  refused with the surf and the same nudge.
- `dive` on the lake says so before it goes under.
- Noun ties are gone: "light" is the lamp's word at the stair and the
  shore, "sand" the beach's at the ocean, "floor" the ground's underwater,
  "shadow" the figure's, "path", "trail" and "way" the room's own
  scenery's; "wall" still answers two ways where a stone wall stands, and
  both answers describe the stone wall.
- The duel's most repeated lines (the disarm-and-return, the block at the
  figure's last point) have variants; the odds are the original's
  (SHADOW-F and I-SHADOW-REPLY: 10 + 10 × strength) and are kept.
- The "not today" refusals at the unbuilt exits are as the brief wants
  them until round 3; most of the round's unread rate is those refusals,
  not misreads.

**Round 3: Q1 refined a second time, nothing widened; Q2 comes with the
revision after round 3.** What the second playtest changed:

- The ship's one command is the original's (QUEUE I-BOAT-DISAPPEAR 2 is
  one command after the one it appears in), and stays. What changed is
  that the nudge now lands before the window closes: the arrival text has
  the sailor with a hand cupped to his ear, turned to the shore. A call
  that is nearly the words and is not them (`hail`, `ahoy`, `wave`,
  `shout ahoy`, `say hello`, `talk to sailor`) is answered with the nudge,
  and holds the ship one command longer, once; a second such call is
  answered with the sailor turning back to the prow, and the ship sails.
  The two words are still the only thing that brings it in. The ship that
  sails ungreeted says it will not be back, `examine ship` after says the
  same, and at the empty shore `wait`, every greeting and every call are
  answered in the "Nothing happens anymore" voice.
- The figure's wounds after a stroke are chosen in code and said as
  literals, since the figure's reply in the same turn may kill the
  visitor and reset its strength before a slot is rendered; `examine
  figure` is chosen the same way.
- The early refusal of the hood points at the figure's guard, and the
  miss that sends the figure to the ground says it is up again at once.
- The footsteps are a thing in every shadow room: `examine`, `listen to`,
  `follow`, `find`, `hug` and `hello` reach them, and `who is there` is
  read; they keep the visitor's pace, and say that standing in the light,
  or walking the hills in it, is how the one walking is met. The odds of
  the figure are the original's, untouched.
- The Lake Shore's own description now says, plainly, to leave on the
  lit shore whatever cannot be lost to the bottom, the light first of all.
  Bare `swim` there is still "Go jump in a lake!", which is V-SWIM's own
  answer at the shore (only ON-LAKE, IN-LAKE and the ocean say otherwise).
- The sword thrown into the ocean comes back when the figure next calls
  it, as the original's does (OCEAN-F REMOVEs it; SHADOW-ARRIVAL and
  I-SHADOW-REPLY MOVE it by name from wherever it is). Nothing inside the
  ocean can hear the call, so the ocean itself answers it and gives the
  sword up, the one thing it ever gives back.
- Walking out past the figure is told: "Behind you, the hooded figure
  steps back into the shadows." The visitor says it to themselves on
  arriving, since the room they left cannot reach them.
- The brief's rule that a verb is offered only where something it
  applies to is in range, held after round 2: open, close, read, search,
  look under and behind, eat, kick, rub, shake, squeeze, hello and hail
  are typed by the kinds that answer them, so the stair no longer offers
  `open wall` or `eat ceiling`; the bare `hail`, `wave` and `who is
  there` are gone, and a call names the sailor, the ship or the
  footsteps; and the sailor stands at the Flathead Ocean only, so "hello
  sailor" anywhere else is "You can't see any such thing." rather than
  Zork's "Nothing happens here." (friction 9, 26, 27).

**Round 4 (the revision after round 3): Q1 refined a third time, and Q2
built whole, by the brief's schedule.** Two quarters are built: 42
rooms. Q1's exits now lead on: Junction east to the Damp Passage, the
Barren Area west to the Cliff and northwest to the Hairpin Loop, the
cliff-top of the Land of Shadow north to the Cliff, the Flathead Ocean
north to the Cliff Base, and the lake's west and south shores to the
Western Shore and the Southern Shore, so On the Lake's promise about
them is true. The Creepy Crawl's way east is the Tight Squeeze, which is
Q3's, and still turns the visitor back; so does the way down beyond the
secret door, which is Q4's. Five of the seven points are now in reach:
the ledge and the table join the figure, the stroke and the lake.

What round 3's playtest changed in Q1:

- The stroke that brings the figure to its last point names the hood
  within reach, the figure at its last point does not strike (it waits,
  and says so, with the hood in the line), and it does not mend while it
  stands before the visitor and waits; I-CURE heals it only once the
  visitor has walked away and it has gone back into the dark, so the
  window a defenceless figure opens stays open for as long as the
  visitor stays. That departs from I-CURE, which heals the figure from
  1 to 2 under the visitor's hand without a word; logged.
- `pull hood`, `push hood back`, `lift the hood`, `raise hood` and
  `lower hood` reach the hood as `take hood` does.
- The disarm that said the sword was on the ground says it hangs
  useless from the hand, since the sword never leaves it; and a visitor
  struck with no sword in hand is not struck at all: the figure lowers
  its blade and waits for the sword to come back, which it does,
  leaping, in the same turn, so the leap is never contradicted by a
  line that assumed it had already happened.
- A bare `shout`, `yell`, `hail`, `ahoy`, `wave` or `call out` at the
  shore with the ship passing is a call across the water, and holds the
  ship once as a named hail does; `say <anything>` and `who is there`
  there do the same; at the empty shore all of them answer in the
  "Nothing happens anymore" voice. `who is there` is read, with or
  without a "hello?" before it, and `call out to the footsteps`.
- A command the water refused, a swim toward the swamp, does not spend
  the roc's one move, and the roc's line says the water is the only
  cover.
- After a wound, the figure's stroke says the visitor's own state in
  DIAGNOSE's words; after three misses in a row with the visitor below
  four, the hint book's word that it fights as you fight, and that a
  bad fight can be walked away from and mended.
- Bare `dive` enters the lake from any shore and goes under from the
  surface; bare `swim` is still "Go jump in a lake!".
- The plunge says what goes and what stays; the shore names the sword
  beside the light.
- `drink vial` and `pour vial` are the potion's.

What Q2 holds, and how it is built:

- **The man at the cliff** is a `Guise` and a `sprout.Actor` who lives at
  the top of the cliff, unseen until he has hauled the visitor up; while
  he talks down to the ledge, a thing of the ledge answers for him in
  his words (GLOBAL-MAN). His stage and whether the rope is down are the
  world's, since the cliff's way down must read them; his clocks are
  the visitor's. What he does to the visitor, the haul, he does by
  acting, with the gate open. The chest cannot be tied while held, so
  it is lifted from the ledge and never from the visitor's arms. He is
  faithful in his impatience: ten moves of nagging and he is gone for
  good, and a visitor who leaves the ledge while he waits, or is away
  when he comes back, has lost him and the staff with him, as the
  original's MAN-SEEN does; the chest turns up at the top, open and
  empty.
- **The old man** in the Engravings Room is a `Guise` and a `sprout.Actor`
  spawned into the room three times in ten as a visitor enters, until he
  has been fed or affronted; he sleeps until shaken, wakes three moves,
  takes the waybread (from the visitor's hand, by the visitor's own
  `give`, since nothing else may reach into it) and points to the door.
  Attacked, "Not yet," and he is gone, and the door with him.
- **The viewing table** shows one of four places, changing every four
  moves on the world's clock, and sends whoever touches it there for
  three moves on their own; the four places are built as the brief
  lists them, the Timber Room with its narrow way west that refuses a
  load, Room 8 with the can, the Damp Passage, and the altar, which
  kills on entering. The torch on the vista's wall is a light that
  burns until it is put out or wetted, and the lake wets it.
- **The grue repellent** gives five moves in which a grue only gurgles;
  the two Dark Places above the Southern Shore are a lair, where a
  walk in the dark meets dozens of them. The five moves are exactly the
  crossing: spray on the Western Shore, into the lake, south, up, up,
  and the Key Room is lit.
- **The key** changes shape each time it is looked at, and fits nothing
  yet. A death in its country sends it home to the Key Room.
- **The aqueduct** is crossed from the Key Room down through the manhole
  to the channel, north over the High Arch to the Water Slide, and down
  to the Damp Passage, one way. The earthquake, once, at a move the
  world draws between 70 and 140 on the first move of the game, breaks
  the arch; the tremor is felt everywhere in the words for where the
  visitor stands, and a visitor on the arch when it falls is stuck, as
  the hint book says.

Choices that depart from the original, in Q2:

- **The Machine Room has a way out.** The original's has none, which
  reads as an oversight in a room the table shows for three moves; north
  leads back to the Drafty Room.
- **The Ladder Top's staircase up** answers with a line rather than
  "You can't go that way", since the description names it.
- **The chest is not tied while held**, so the man never lifts it from
  the visitor's arms; the line that said so ("All at once, the chest is
  lifted from you") is said when a chest tied before he appeared is
  lifted from the ledge.
- **The figure does not mend at its last point while it waits** (above).
- **One earthquake, one indicator, one man and one rope** for every
  visitor, with the clocks that count a visitor's moves kept per visitor
  (friction 31, 34).
- **Waybread in the lake is mush**, as the original removes it; a lamp
  and a torch are fried.

**Round 5 (the revision after round 4): Q1 and Q2 refined, nothing
widened, by the brief's schedule.** Two quarters are built, 42 rooms;
five of the seven points are in reach. What round 4's playtest changed:

- **The table asks for a hand.** Nobody touched it in six runs, so the
  repellent chain never started and eight of the round's thirteen
  unreached places were the table's. `examine`, `look in` and `search`
  now end with the surface leaning nearer, "the way a thing does that
  would rather be touched than looked at"; `push` and `press` on it are
  a hand on it and send the visitor as `touch` does; `put hand on the
  table` is an intent over `touch`. The dark slope above the Southern
  Shore, entered without a light, says the dark is thicker than the
  usual kind and breathing, in the hint book's spirit; the grue lair
  itself is unchanged.
- **The torch says what it is for,** a flame for dry land that the lake
  puts out for good, and the Western Shore's description says the water
  is the north shore's water and will open the hands as readily. Both
  runs that reached the vista carried the torch straight into the lake.
- **The ledge is a scene before the man speaks.** Three of six runs
  quit on the ledge before he appeared. Arriving there while he is unmet
  now reads that something not a tree moves at the brink and the rope
  twitches; the failed climb twitches the rope and chuckles; and the
  chest tried is found funny from above. His timing is the original's
  five moves, untouched, since the cues give a visitor a reason to stay
  them.
- **While he is away, the ledge says so:** the description, `examine
  rope`, a climb at the missing rope, and `wait` all say the rope went
  up with the chest and that he said he would be back. Leaving still
  loses him, as MAN-SEEN does; the visitor who leaves now does it told.
- **The figure blocks a real way out,** drawn from the room's own
  exits, as SHADOW-ARRIVAL does, never a direction whose only answer is
  a wall (friction 40).
- **"Runes" is the wall's word.** The sword no longer answers to it, so
  `read runes` in the Engravings Room reads the carved wall and not the
  blade; the sword's runes are `read sword`, and `read runes on sword`
  is a phrase of `read`.
- **A throw with a direction in it is read whole** and answered without
  the throw: the lake is too wide to throw across, and a lamp thrown
  anywhere is a lamp in pieces, so say what it is thrown at. The bare
  `throw lamp` still smashes it, as LANTERN-F does; what is gone is the
  parser's silent drop of "south" (friction 37). `throw X at the lake`
  and `across the lake` are refused the same way, the thing kept.
- **`scramble down`** is the ledge's own word, and takes the way down;
  bare `climb down` and `scramble` are the same verb, which at the cliff
  top is the rope and anywhere else asks for a direction. **Bare `dig`**
  works everywhere: the quicksand digs back, sand and shore are slow and
  tedious, and rock is rock.
- **The secret door's refusal** says plainly that what is lacking is not
  anything left undone in that room, but to be gathered in places not
  yet been, so the stairs stop reading as a puzzle; this stands until
  Q4 arrives with round 7.
- The duel's turn toward the hood is kept as it is (round 4's P11): two
  of three runs took the hood on the first try after the waiting line,
  and the one that struck on named the hood afterwards as the choice it
  had missed, which is the trap working.
- Logged, not changed: the parser's false answers to compound lines
  (friction 38), the greeting-plus-sentence that spent the ship's one
  command (friction 39), and the reach metric that misses the Prison
  Cell (friction 24, status).

**Round 6 (the revision after round 5): Q1 and Q2 refined, and Q3 built
whole, by the brief's schedule.** Three quarters are built: 60 rooms and
the puzzle's 36 squares; all seven points are in reach, and the
walkthrough plays to 7 of 7 in 208 moves. The Creepy Crawl's way east
now leads on to the Tight Squeeze; the way down beyond the secret door
is still Q4's and turns the visitor back.

What round 5's playtest changed in Q1 and Q2:

- **The repellent chain is told** (P1): the Southern Shore and its dark
  passage say that no light crosses the lake and that what keeps a grue
  off a person is sold in a can, in a tiny room with an eight on its
  wall that the table shows; and the table's image of Room 8 names the
  spray can in its corner.
- **The fallen arch is told before the manhole** (P2, P8): after the
  quake the Key Room's cover and its description carry a draught and
  the smell of open air, the cover examined says the channel below has
  lost a piece to the chasm, and the Aqueduct's own description, from
  the bottom, says the channel stops against the air to the north.
- **The amulet was not a bug** (P3): the drowning scattered it in the
  same turn, and the inventory line, rendered after, read empty hands.
  The old man's waking line now says that what was carried is lying
  along the way in with the lamp alone brought back, and the sand's
  glint depends on the shiny thing still being there.
- **The shores warn a returning light** (P4): each of the three shores
  tells a visitor who comes back carrying a lit light that the water
  takes it, in brief mode too; the Western Shore says no light crosses
  from either side and the far side's dark is got through another way.
- **The man at the cliff hears a shout** (P5): `shout`, `shout for help`,
  `hello` and `who is there` at the ledge are answered in his voice by
  stage: a chuckle from the trees before he shows himself, "keep your
  shirt on" while he is away with the chest, "grab the rope" when he is
  back, and silence once he is gone; at the top, with him there, a wince.
  "man, who are you?" is the no-addressee decision, logged.
- **The ledge's wait is a sequence** (P6): the lock tried, the lid, the
  coins counted, the pacing, the footsteps back to the brink, keyed on
  the moves he has left; the timing is the original's.
- **The altar does not ask for a hand** (P7): the table's lean toward
  the hand is said for views I to III; for the altar the surface "seems
  content to be looked at", and the trap rests on the image.
- **The parser's dropped remainders** (P9): `shout hello`, `shout up`,
  `shout for help`, `call out hello` are an intent over the shout; `say
  hello, sailor` and `say hello to the sailor` over the greeting; `wait
  20` and its kin a verb that waits one move and says so; `sleep`,
  `rest`, `nap`, `wait a while` are waits. Logged in friction 38/39 and
  48.
- **Diagnose names the cure** (P10): "You will be cured after N moves."
  while wounded, as the original's does.
- **Small gaps** (P11): `pull back hood` and its kin reach the hood;
  every shadow room has the mist; bare `search` reads the room; `feel
  around` is answered, in the dark and out of it; `dry lamp` says the
  lake got in where drying does not reach; `climb stair` has one answer
  (friction 47).
- **The narrow way's refusal says the load is anything bigger than a
  hand** (P12), the light included.
- **The ship's sailing says he was listening for something** (P14), after
  the fact, as the recommendation asked; the window is unchanged.
- **Waiting at the Vista has texture** (P15): the image under the surface
  lies quiet, stirs, and goes thin as the indicator nears its change.
- Logged, not changed: the reach metric's miss of the altar (P13,
  friction 24).

What Q3 holds, and how it is built:

- **The way in:** the Tight Squeeze (dark), the Crystal Grotto (lit by
  its moss), the Royal Hall (dark, with the Royal Seal), and the Great
  Door (dark), where the earthquake opens a cleft beside the iron door;
  the cleft is unseen until the quake's broadcast reaches it, and the
  museum's west door reads the world's `:quaked`.
- **The museum in three years** is three sets of rooms, each with an
  `:era`: the present (948), the years between (883 to 947, the mid
  rooms: entrance, jewel room, technology museum, puzzle entrance and
  side room, with the puzzle's hole blocked), and 776 (the old rooms:
  entrance, jewel room and technology museum, unfinished, with the
  guards outside). The three doors are one thing each in every year, as
  the original's local-globals are, and their open state is the world's,
  shut by every trip. The history a trip out of 776 settles (the ring
  stolen; a clumsy robbery, which takes the machine off exhibit; a
  mystery and a different plaque) is the world's, read by the present's
  descriptions, cage, jewels and plaque.
- **The gold machine** is a `Place` inside a room that passes everything,
  so whoever sits in it sees the room; it is `Pushable`, and its push is
  a value role over the compass, so "push machine east" is one reading.
  The pusher walks first and the machine follows by a broadcast carrying
  the room's `Dest` (friction 44); into the puzzle's entrance or through
  the cleft damages it, as the original's does. There is one machine in
  each year, since each year is its own rooms; the present's is the one
  that moves, and the dial's year is set on every dial by a trip, as the
  original's one dial is. The robot carries the present's machine home
  from the Jewel Room one move in twenty-five and shuts the doors.
- **The trip** (TGOTO) is the visitor's: the button says the first
  sentence, the visitor's `:time_trip` decides the landing by room and
  year and tells the rest, and the gate carries it out: what is held and
  what lies in the machine is left in the room, in that year; the doors
  shut; leaving 776 judges the robbery by counting the pedestal; the
  jewels go home to the pedestal on every arrival in 776; the present's
  machine goes home to its hall on every return; forty moves in another
  year and the present takes you back to the room you left (the snap).
  Years before 776 are the stone death; 777 is the dedication and Lord
  Flathead's sentence; 778 to 882 the guards; 883 on, the same room in
  that year; past 948, the present with the cleft filled in, which the
  visitor's `go` refuses by their year.
- **776:** the guards' clock starts on entering any old room with them
  present, three to fourteen moves; one command in thirty-three while
  they are there brings a guard in, and Lord Flathead is heard through
  the door once, six times in a hundred; the stone door opens only from
  the jewel room's side, the doors peeked through are shut again while
  the guards are there, and the voices answer `listen`. The ring hidden
  under a seat is concealed in every machine at once, and found under
  any; a found ring is a spawned one, and the sceptre and the knife go
  unseen once the ring is stolen (friction 50).
- **The Royal Puzzle** is 36 places of one kind, generated from the
  original's table, with the grid itself the world's; each square keeps
  copies of the twelve cells it needs and reads them again on every push
  (friction 45, 46); the four walls and the ladder are one thing each in
  every square. The map is three rows of prose with two-letter cells
  (friction 42), the legend is told once per visitor, and the first push
  is the sixth point. A wall pushed into the square under the hole
  blocks the way in; a wall pushed onto what lies in a square snaps it to
  the Side Room; the good ladder, pushed under the hole, is the way out;
  the book in the slot opens the steel door and is confiscated.
- **The seven things:** the book joins the hood, the cloak, the amulet,
  the staff and the key; the ring is the sixth; only the asking is Q4's.

Choices that depart from the original, in Q3:

- **A death in another year is a death like any other.** The original's
  REALLY-DEAD (the stone, the guards, Lord Flathead's sentence) ends the
  game; this world has no restore, so these are the old man's visit, the
  year reset to the present, and the possessions already left behind in
  the room the trip began in.
- **The machine is pushed within the museum and the Great Door only.** The
  original walks it anywhere; here a push out of the hall is refused in
  character, since the machine's ways are a table the world keeps.
- **The machine in 776 and in the years between does not move**, since
  the original moves one machine and this world has one in each year; a
  push there is refused in character. The clumsy robbery, which the
  original can reach by pushing the machine out of the old museum, is
  reached here only by hiding the ring with the other jewels off the
  pedestal.
- **The present's machine goes home to its hall on every return**, as the
  original's does, and the visitor is put in it by a second move after it
  arrives, so the hall is described and then the seat.
- **The sceptre and the knife go unseen** rather than being removed, and
  the hidden ring too (friction 50).
- **Bare `machine` and bare `door` are draws** among three; the original
  asks which (friction 49).

## The arc

Zork III is the melancholy one. The visitor wakes with a dream of an old
man and a brass lantern at their feet, and the first quarter is three
things: a fight they cannot win by winning, a ship they have waited three
games for, and a lake that takes everything they are holding.

1. **The sword in the stone.** It cannot be pulled ("Who do you think you
   are? Arthur?"). It comes to the hand when it is needed, which is when
   the hooded figure appears, and after that it is the visitor's.
2. **The hooded figure** appears in the Land of Shadow, when the room is
   lit and the figure is not already badly hurt, three times in ten per
   move. It blocks one way out, chosen at random. It fights back on its
   own, strikes with the same odds the visitor has, heals when the
   visitor heals, and leaps its sword back into the visitor's hand when
   the visitor drops it. Killing it is the trap: it dies with "deep and
   sorrowful eyes", and the hood and the cloak go with it, so the game is
   unwinnable from then on. The way through is to wound it to its last
   point and then **take its hood**: the face under it is the visitor's
   own, which turns into an old man's, and the cloak is left on the
   ground. Hood and cloak are worn when held, as Zork III wears things.
3. **The Viking ship** passes the Flathead Ocean once, one time in five
   per move while the visitor stands on the shore, and stays for exactly
   one more command. "Hello, sailor" in that command brings it in; the
   sailor throws a vial into the sand and sails off singing. The vial
   holds an invisible, heavy, sweet-smelling liquid: the invisibility
   potion, three moves of it, which Q4's guardians need. "Hello sailor"
   at the ocean before the ship answers "Nothing happens yet", after it
   "Nothing happens anymore"; anywhere else the sailor is not there to
   be named.
4. **The lake.** The lamp cannot go in: everything not worn drops into the
   lake, and the lamp is fried for good. Cold counts the moves (warnings
   at 4 and 6, drowning at 8); a roc comes one time in ten and gives one
   move to dive or swim ashore; underwater the air lasts two commands and
   the third brings the visitor up; a fish may swallow them (about one in
   thirty); and the shiny thing in the sand is the golden amulet, taken
   one time in two. Everything dropped in the lake can be picked up
   underwater, except that each pick slips three times in ten and a load
   over 25 is too much underwater.
5. **Death** is the old man's visit: a prison cell over a pit of fire, an
   old man in hood and cloak with amulet, ring, book, staff and key, who
   walks in and sends the visitor back to the Endless Stair by his own
   act, the visitor being in the cell with him for the length of the
   turn. The lamp (fried, broken
   or whole) goes back to the stair; everything else carried is scattered
   among Junction, Barren Area, Creepy Crawl and Foggy Room (the original
   also uses the Damp Passage, Tight Squeeze and Dead End, which Q2 and
   Q3 will add to the list). The fourth death is the last: a voice from
   the void, and a place with no way out.

## The Dungeon Master in four bodies

One character, four guises, and the author's call is this: a kind,
`Guise`, that every body he wears composes, carrying the one thing they
share, his eyes. The voice in the dream is the stair's own first
description. The hooded figure is a `Guise` and a `sprout.Actor`, spawned
into a shadow room when it appears and destroyed when it goes, so there
is never more than one and it is never anywhere a visitor is not; its
face, unhooded, is the visitor's and then an old man's. The old man in
the cell is a `Guise` and a `sprout.Actor` too, with a body of his own:
he stands in the Prison Cell, a place the world's gate carries a dead
visitor to, and when one arrives he performs a verb only he can (no
phrase reads it) whose target is the visitor; his part tells them his
entrance, his look and his staff raised, and the visitor's own part takes
the power that wells up, scatters what they carried and wakes them at the
stair, all in the one turn. Q2 brings the sleeping
old man and the man at the cliff as `Guise`s with bodies of their own; Q4
brings the Dungeon Master himself, and at his door the visitor sees all of
them in his face. What `Guise` holds grows as the guises arrive; in Q1 it
is the eyes and the word "worthy".

## Secrets a player can find

- The man at the cliff can be robbed by killing him with the sword once
  he is at the top, and it breaks the staff if the staff is in hand or
  on the ground; throwing the staff off the cliff first keeps it, in
  pieces. Either way the old man will not want it. The valuables are
  worth nothing to anyone.
- The torch can be left in the Damp Passage by touching the table when
  it shows view III, which is the only way a light reaches the far side
  of the aqueduct; the hint book calls this pre-positioning.
- `examine key` never says the same thing twice running, or tries not to.
- The repellent's five moves are exactly enough, and a `look` on the way
  is one too many.
- Sprayed, a visitor in the dark reads only "It is pitch black."
- The Sacrificial Altar is a death the table offers one time in four; the
  table shows it first.
- Jumping at the Cliff, the High Arch and the Aqueduct View is fatal.
- The ledge can be left by its own word, `scramble down`, and the
  Western Shore and the Southern Shore both say which light the lake
  takes; a torch left in the Damp Passage through the table is the only
  light that crosses the aqueduct.
- `throw lamp south` at the lake keeps the lamp; the lake is too wide,
  and the world says so before anything is lost.
- The puzzle can be left by the slot, at the price of the book, or by the
  good ladder pushed under the hole, which keeps it; a wall pushed under
  the hole from inside blocks the way in for everyone after.
- The dial set past 948 lands in a present whose cleft has filled in, for
  forty moves.
- The ring can be hidden under the present's seat too, and found again;
  only a ring hidden in 776, with the other jewels left on the pedestal,
  changes the plaque.
- A trip from the Side Room, the puzzle's entrance or the Great Door goes
  nowhere, and says so; the museum was built round the machine.

- Looking under the figure's hood, or at the figure, is the hint the hint
  book gives: it fights the way you fight; and at its last point of
  strength, that it has stopped fighting at all.
- `take all` with the figure standing reaches for its hood, which is the
  original's own shortcut.
- Turning the lamp off mid-fight sends the figure away, which is a way
  out of a losing duel the original does not offer.
- A hail, an ahoy or a wave at the passing ship holds it one command
  longer, once, which the original does not do; the two words are still
  the only thing that brings it in.
- The footsteps can be asked, and they answer that waiting in the light
  is how the one walking is met.
- The sword thrown into the ocean is not lost: it comes back, wet and
  glowing, the next time the figure appears.
- Dropping the lamp on the Lake Shore before going in saves it; the
  Aqueduct View is lit, and so is the shore, so the lamp is safe there.
- The vial can be opened and smelled before anyone knows what it is; the
  potion can be spilled, shaken out, or wasted by trying to take it.
- "Odysseus" is answered "Wasn't he a sailor?", which, here, is a hint.
- Jumping at the Aqueduct View is fatal, as in the original.
- A worn thing weighs one, as in the original, so the hood, cloak and
  amulet never sink.

## What "done" looks like for round 6

- `tests/walkthrough.json` plays from the Endless Stair through all three
  quarters to 7 of 7: the Royal Puzzle's first push, the book from its
  niche and the ladder out, the machine pushed to the Jewel Room, the
  trip to 776, the ring hidden under the seat, the ride home and the ring
  found, and the plaque rewritten.
- Every room of the three quarters has the original's name and ways out;
  every thing a description names answers `examine`.
- No fault in any run; `check` and `test` pass without a warning.

## What "done" looked like for round 4

- `tests/walkthrough.json` plays from the Endless Stair through Q1 and
  then the cliff, the man and the staff, the old man and the secret
  door, the vista and the table, the repellent, the key and the
  aqueduct crossed before the earthquake, with 5 of 7 potential.
- Every room of the two quarters has the original's name and ways out;
  every thing a description names answers `examine`.
- No fault in any run; `check` and `test` pass.

## What "done" looked like for round 1

- `tests/walkthrough.json` plays from the Endless Stair through the fight,
  the hood and cloak, the ship and the vial, and the lake and the amulet,
  with 3 of 7 potential, and the lamp recovered after.
- Every room has the original's name and ways out; every thing a
  description names answers `examine`.
- `score` reads "Your potential is N of a possible 7, in M moves."
- `up` and `n` at the stair read "The stairs are endless."
- No fault in any run; `check` and `test` pass.

## Choices that depart from the original, and why

- **Wait is one move**, not Zork's three clock ticks (caverns 2 friction
  37 and 106 cover the same ground). The lake's and the ship's clocks
  count commands, so a visitor who waits on the lake loses one move of
  cold, not three.
- **Jumping underwater** is not a death. The original's V-LEAP kills
  anyone who jumps where "down" is a refusal, and Underwater refuses
  "down" with "You are already at the bottom of the lake."; I took that
  for a bug and wrote a swim instead. Jumping at the Aqueduct View, where
  the refusal is "The drop would be fatal.", kills as it should.
- **The shadow leaves when the visitor leaves the room.** In the original
  it lingers in the room it was met in until the visitor enters any other
  shadow room; here a visitor leaving a shadow room sends it away, which
  is the same from the visitor's side and keeps one figure in the world.
- **The ship's clock is the visitor's**, not the room's, so a visitor who
  walks away during the one command the ship allows still loses it. A
  world with several visitors has one ship per visitor, which is the
  nearest thing to one ship per game.
- **A lamp thrown into the ocean stays there.** The ocean keeps what it
  is given behind a wall nothing passes, which is the original's "lost
  forever"; the original's death would still have fetched the lamp back
  to the stair from there, since it moves the lamp by name, and this one
  cannot reach it (friction 4). The visitor has thrown their only light
  into the sea, and the world lets that stand.
- **A sword thrown into the ocean comes back,** which is the original's
  own behaviour (OCEAN-F REMOVEs it, and the figure's arrival MOVEs it by
  name from nowhere). The broadcast that calls the sword cannot reach
  inside the ocean, so the ocean answers it itself and gives the sword up
  (friction 25); the lamp is not called by anything and stays.
- **The ship holds once** for a call that is nearly the words, which the
  original's ship does not; the window is otherwise the original's one
  command, and the two words are still the only greeting that counts.
- **The figure withdraws in the dark** (round 2, above). The original's
  I-SHADOW-REPLY goes on striking a visitor who cannot see to strike back.
- **Zork's YUKS do not vary.** "A valiant attempt." is the one answer to
  taking what stays where it is, since the refusal is a `permit`'s and a
  `permit` may not draw (friction 14); a thing with words of its own still
  says them.
- **A wall walked into in the dark** does not feed the grue. Sprout's
  `no_way` never reaches an `after command`, so the grue takes only a
  visitor who walks from a dark room into another (four times in five),
  as the original's GOTO does; the original's V-WALK death at a wall is
  logged in `friction.md`.
