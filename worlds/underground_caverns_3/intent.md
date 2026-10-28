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

**Round 7 (the revision after round 6): Q1, Q2 and Q3 refined, nothing
widened, by the brief's schedule.** Three quarters are built, 60 rooms
and the puzzle's 36 squares; all seven points are in reach, and the
walkthrough plays to 7 of 7 in 208 moves. What round 6's playtest
changed:

- **Q3's gates have a voice** (P1). Before the quake the Great Door's
  description and the iron door examined name the rock beside the door,
  cracked and strained, and the cracked rock is a thing of the room
  (`examine`, `look in`, `listen`, `push`) that the quake takes away;
  the debris there is its own thing, so "rock" is the cracked rock's
  word. In 776 the stone door tried from the entrance says it has no
  keyhole and no handle on that side and is opened from inside the
  Jewel Room by somebody already there, and the way east says the same;
  the present's gold machine examined, or touched, says it stands on the
  floor and not a plinth, that the floor is scuffed in arcs toward the
  door, and that it rocks under a hand; and the puzzle's hole says the
  dark below goes on square-cut into more rooms, and that the note was
  written by somebody who expected visitors to come out by another way.
- **The odds are untouched** (P2, P14): the figure's, the grues', the
  roc's, the fish's and the man's. What moved are the lessons that were
  learned only by losing things.
- **The shore says everything** (P3): the Lake Shore's description and
  the lake examined say everything in the hands goes to the bottom, not
  the light and the sword only; the dive's plunge names the waybread as
  the walk-in's does. **The returning light's warning** (P4) says a lamp
  goes under lit or dark and comes up dead. **The plunge reads the lamp**
  (P5): lit, the hiss and the glow; dark but whole, a hiss and no glow;
  already ruined, it goes under and the lake does nothing further to it.
- **The ledge's wait is nine beats, one a move** (P6): the lock tried,
  the lid, the whistle, the coins, the recount, the gathering up, the
  pacing, the brink, the rope shifting; none is said twice. The ten
  moves are the original's.
- **The man at the brink is called up to** (P7): `call up`, `call up to
  the man`, `shout up to the person above`, `talk to man`, `hail man`
  and `hello` at the ledge are the shout, answered by stage, and before
  he has shown himself the chuckle carries a remark about how heavy that
  chest looks and what a pity there is no way of sending it up. His
  five moves are untouched. The man as the ledge hears him answers
  `greet`, `hail` and `talk` in every stage, "person", "somebody" and
  "someone" are his words, and "above", "up" and "top" his adjectives.
  "call to whoever is there" and "shout hello, can you help with the
  chest?" are still the parser's (friction 38).
- **The can's small print** (P8): `examine can` and `read can` say one
  application and a few minutes, and not to stop to admire the scenery.
  The five moves are exactly as they were.
- **The manhole after the quake is plain** (P9): the Key Room, the cover
  examined, looked in and under, and the hole all say the channel below
  goes nowhere now and the drop is not one that is climbed back. The
  trap stays, as the hint book has it; it is told at the brink.
- **`sit in machine` is the gold machine's** (P10): `board` is a verb
  typed by `Seatable`, which the gold machine and its seat compose and
  nothing else does, so a bare "machine" in it is never a draw;
  `examine machine` is still the draw of friction 49.
- **Small gaps** (P11): "gap", "break" and "breach" are the arch's words
  in every aqueduct room, and the Aqueduct has the arch too, told from
  the bottom; a throw at the balcony far below the High Arch, or at the
  chasm, is refused in round 5's voice and the thing kept; "vegetation"
  and "plants" are the trees' words at the Cliff; and `put torch back on
  wall` (or on the bracket) at the Vista sets the torch back in its
  bracket, by the hand that holds it (friction 53). `examine wall` at
  the Vista no longer reads the Engravings Room's carved wall; it has a
  wall of its own.
- **The feint reads its wound** (P12): the stroke that takes two points
  says "hurt very badly" only when the state line agrees; at three
  points left it slips the sword in and out instead.
- **The table shows nothing while the indicator changes** (P13): on the
  move the indicator is about to change, `examine`, `look in` and
  `search` on the table say the surface stays featureless and the
  indicator is flickering, and the next look has the new view; so the
  image and the indicator are never read disagreeing in one turn
  (friction 54 says why it is done this way).
- **The old man's third visit** (P15): his line says three times now he
  has sent the visitor back, that the power is not in endless store, and
  that he does not think there is a fourth in him. The lamp stays at the
  visitor's feet, as the original leaves it.
- **The cliff top says somebody is there** (P16): while he is unmet, the
  rope's line at the top ends with something among the trees that is not
  a tree, keeping very still.
- The cap of eight phrases on a verb and eight nouns on a thing shaped
  the ledge's new words (friction 55).

**Round 8 (the revision after round 7): Q1, Q2 and Q3 refined, and Q4
built whole, by the brief's schedule.** The first try of this revision
failed: the author's model hit its usage limit before the world was
widened, a round 8 was played on the unrevised world and set aside, and
this is the revision done again, answering round 7's points and the four
things the set-aside round found. All four quarters are built: 89 rooms
and the puzzle's 36 squares; all seven points are in reach, and the
walkthrough plays from the Endless Stair to the Treasury of Zork with 7
of 7 in 255 moves and the Dungeon Master's last words. The secret door's
way down leads on to the Button Room.

What round 7's playtest, and the set-aside round 8, changed:

- **The still thing among the trees is a thing** (P1): before the man has
  shown himself, "something", "thing", "shape", "figure", "watcher",
  "somebody" and "movement" at the Cliff are a scenery of the trees that
  answers `examine`, `search`, `look in`, `find`, `listen` and `talk`
  with the original's "There seems to be nobody there, but it's hard to
  tell" and a slip back among the trunks; `look among the trees` is an
  intent over `look_in`. It goes unseen the moment he shows himself, as
  the cue does.
- **`hint` is the world's; `help` is the engine's, but its line is the
  world's** (P2, S1). The world may not declare the verb `help`, and the
  library's default listing faults where there is much in range
  (friction 56); `hint` and its kin answer in one paragraph of Zork's
  voice, and the walkthrough runs it in the first puzzle square. The
  world replaces the engine's `help` line with its own: the hint's usual
  words, then the first two dozen readings in reach and no more, so it
  cannot overrun a turn anywhere. `tests/help.json` runs it at the stair,
  and the walkthrough runs it in the puzzle square with a full inventory;
  both forbid a fault.
- **The cracked rock answers the verbs it invites** (P3): it composes
  `Shakeable`, `shake` takes a tool, `attack` has "strike [target] with
  [weapon]", and the examine line says the shake it waits for is the
  earth's.
- **The table says to bring the flame** (P4): to a visitor carrying no
  light, the lean toward the hand adds that the places it shows have no
  sun of their own and that the torch beside it is the one light in the
  room that has not been near the water; `feel around` in a dark Room 8
  finds the can and says the dark keeps it.
- **The can's small print says where to start** (P5, S1): an application
  lasts about as long as the walk from a water's edge to the top of a
  slope, so spray at the edge with the hands already empty; the Southern
  Shore, entered with the repellent still on, says it is holding and good
  for the climb if you do not dawdle; the smell's going, on that shore or
  in the lair, says the dark up the slope has noticed. The five moves are
  untouched.
- **Small gaps** (P7, P8): "who is up there" and its kin are a shout;
  "walls" together is a thing of every puzzle square, answered in the
  square's own words; `wear` is an intent that takes what is worn when
  held and refuses the rest with "You can't wear the X."; `tug`, `yank`
  and `heave on` are a pull.
- **The sealed puzzle has a way out** (S1): `pray` in a square is
  answered at a death's price, `yell` there says so, the slot says plainly
  that its fee is the book and nothing less, and a push that leaves the
  good ladder where nothing can get behind it (against the west side,
  along the south, in the far north corner, or under the hole) tells the
  pusher it is past saving.
- **An underwater slip settles within reach** (S1): the dropped thing and
  the shiny object both say they are still there for another try.
- **Kept as they are** (P6, P9, P10): the ship's one command, the ledge's
  nine beats, the lake's lessons, and every trap and its odds.

What Q4 holds, and how it is built:

- **The Button Room and the Beam Room**: the red button opens the mirror's
  first side for seven moves (I-MRINT) when the beam is broken; a thing
  dropped in the Beam Room lands where it breaks the beam (MREYE-ROOM),
  and the beam can be jumped, put things into, and not taken.
- **The long hallway** is five stretches (MRA to MRD, with the Guardians'
  in the middle) between the Beam Room and the Dungeon Entrance, and the
  box's two long sides are ten narrow rooms, reached only while the box
  stands long-ways in a stretch. Every way into the box, and the wooden
  wall, the mirror and the panel seen from outside, read the world's box:
  where it stands (`:mloc`), which way its arrow points (`:mdir`, in
  eighths), its short pole, its two mirrors, and its two doors' clocks.
  Which mirror faces a room is sent to the room's mirror as a visitor
  comes in (friction 62).
- **Inside the mirror** is one place whose description is the original's,
  with the pole's and the arrow's state read from the world; its ways out
  are runs of conditional exits onto a landing that carries the visitor
  to where the box's state says (friction 60). The six panels turn
  (red and yellow clockwise, black and white the other way, pole up),
  slide (mahogany, along the channel, the way the arrow points), and open
  (pine, for five moves, I-PININ); the short pole is raised, lowered,
  pushed, or put in the channel. Every death the original has is here:
  turning in the Guardians' stretch, opening the pine into their view,
  sliding past them with the pole up, a mirror broken or a door open.
- **The Guardians of Zork** strike whoever walks into their stretch or
  its sides on foot, unless invisible, and the potion wearing off there
  is a death (I-VISIBLE); a thing thrown at them is destroyed in unison.
  The box is the way past them; the potion, drunk two moves before, is
  the other, with the box turned long-ways so the narrow rooms open.
- **The dungeon door** is knocked at; the one knocking is counted for the
  seven things (LOOK-LIKE-DM?) and let in, or told how far along they are
  (DM-REASONS) and sent to the Button Room with the two words. `say frotz
  ozmoo` at the Engravings Room, once he has given them, is the way back
  to his door.
- **The Dungeon Master** is a `Guise`, a `Creature` and an `Actor` who
  stands in the Narrow Corridor and follows at the end of each move
  (I-FOLIN) by his own walk with the world's gate open, found in the room
  the world says he is in (friction 59); he will not enter a cell, and
  says so once. Orders are verbs whose first role is him or the presence
  that stands for him in a room he is not in (MASTER-F), unseen while he
  is there: follow, stay, go a direction (north from the North Corridor
  is the parapet), go to the parapet, push the button, set or spin the
  dial, take, open, and the foolish rest. The button he pushes and the
  dial he sets he pushes and sets by acting, at the parapet; the cells
  turn in the world's body (friction 63), the visitor in the slot's cell
  goes round the pit with it to the fourth cell's own place or another's,
  and what lies in a cell nobody is in goes to one of eight stores.
- **The bronze door** is seen from the South Corridor and the slot's cell
  only while the fourth cell is in the slot, and unlocked by the strange
  key only in the fourth cell's own place (friction 58); the Treasury is
  through it, and its ending ends the game, with the score's seven kept.
- **The lore book** in the dungeon opens to the picture of the eight cells.

Choices that depart from the original, in Q4: friction 65 (the wrong
cell's heat and window, prayer in the puzzle, the Dungeon Master struck,
the entrance's diagonals, the Guardians noticed on entering, one box for
everyone).

**Round 9 (the revision after round 8): all four quarters refined,
nothing widened.** Nobody reached the Treasury in round 8; the two runs
that went deep died in the mirror box or at the Guardians' feet, and what
killed them was the original's death, unexplained. What the playtest
changed:

- **The open pine door is readable before it kills** (P1). The pine panel
  examined names the compass side it stands on, read from the arrow as
  the arrow is named, and says that a door the hallway shows through is a
  door the hallway sees through; the line that opens it, where it does
  not open into the Guardians' view, says which way it opened and that
  the box's contents are in plain view of the hall while it stands open;
  a slide made with a door open, short of the Guardians, has the door
  creaking on its hinges and the hallway going by in the gap; and the
  box's "You would hit one of the panels" says which way the open door
  is. The deaths and their odds are the original's and untouched.
- **A death in the box leaves the box where it died** (P2), as the
  original does; there is no sending it home. What changed is the
  reading: the stretch south of the statues, with the box long-ways in
  theirs, says the small hallways run on between the Guardians'
  pedestals in plain view of both; and the box's end wall, examined,
  entered or opened from a hallway, says the structure is entered by the
  mirror on its long side, which the red button opens, and from nowhere
  else. The potion route is the way on from there, and the Guardians now
  say as much.
- **The Guardians say what they strike at** (P3): examined, they strike at
  whatever they see pass between them and at nothing they do not see,
  and nobody has yet reported what they do about a visitor they cannot
  see. That is the riddle's other half; the vial's half is unchanged.
- **ALL means what is in the hands** (P4): `take all` and `drop all` pass
  over the potion, which the engine's `all` reaches through the open
  vial; only a hand that names the liquid wastes it (friction 66).
- **A pour on something in the room empties the vial** (P5): the pouring
  is the pourer's, since nothing in the room reaches into the hands, and
  the line and the state agree (friction 67).
- **`put`'s item is typed** (P6) by `Placeable`, which what can be
  carried, the short pole and the visitor compose, so `help` never offers
  a wall going into the vial.
- **The death line names every room the scatter uses** (P7): the ways in,
  between the stair and the lake or in the passages east of the junction;
  the list is the original's seven and unchanged.
- **The puzzle's shout names the fee before the prayer** (P8): with the
  book in hand it says the slot's fee is the book you are carrying, and
  prayer comes after, at the usual price. The run's grid was replayed:
  it was past saving from the push at its turn 291, which moved the
  other ladder, the one on the west wall, north into the west column,
  not the good ladder at all; the past-saving warning reads only the
  good ladder's dead positions, and a general check is not a thing a
  turn can do (friction 68). The puzzle keeps its trap; the fee is now
  pointed at.
- **The staff points at the man in the dream** (P9): examined, it is worn
  to somebody else's hand, the kind a silver-haired old man would lean
  on, the one who said to seek him; and the man's handing-over says so
  too. The dream is as the brief fixes it.
- **A hello at the top of the cliff** (P10), and "who is there", before the
  man has shown himself, go to the something among the trees and are
  answered as it answers; the yuks are kept for where nobody could be
  listening.
- **The amulet's take line ends with it round the neck** (P11).
- **Kept as they are** (P12): the ledge's beats, the watcher, the duel's
  turn to the hood.

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

- Before he has shown himself, the man at the cliff can be called up to,
  and his chuckle says what he wants: a remark about the heavy chest and
  a pity there is no way of sending it up. The rope is the way.
- The torch can be put back in its bracket on the Vista's wall, and the
  chamber is lit again by it.
- The viewing table shows nothing on the move the indicator is about to
  change; the image a move later is the new one.
- The cracked rock beside the Great Door, before the quake, listened to,
  ticks; looked into, it has a draught from a room beyond.
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
- The box can be steadied: the short pole dropped into the channel makes
  the slide steady, and a steady slide past the Guardians, with both
  mirrors whole and both doors shut, is the way; raised, it is a wobble,
  and the wobble is noticed.
- The pine side opens into the Guardians' view from the last hallway
  facing north and from the third facing south; turned half round first,
  it opens on the Dungeon Entrance.
- The potion is the other way past the Guardians, if the box has been
  turned long-ways so the narrow rooms open: two moves of it are the
  walk, and the third, spent in their sight, is a death.
- Knocking at the dungeon door with fewer than seven of his things is
  told how many short it is, by the shade of his sentence; and anyone who
  has knocked once can say the two words at the secret door and be at
  his door again.
- The lore book, read in the dungeon, is the hint book's picture of the
  eight cells and the one bronze door.
- The dial can be set by the visitor at the parapet and the button pushed
  by the Dungeon Master from the cell; or the Dungeon Master can set it
  too, told the number, from the cell.
- The wrong cell has a window, and the window is quicker than the heat.
- Prayer in the Royal Puzzle is answered, at the usual price; and the
  shout there says so.

## What "done" looks like for round 8

- `tests/walkthrough.json` plays from the Endless Stair through all four
  quarters to the Treasury of Zork with 7 of 7 and the Dungeon Master's
  last words: the beam broken, the button, the box entered, turned,
  steadied and slid past the Guardians, turned again and left by the pine
  side, the door knocked at with all seven things, the Dungeon Master
  followed to the parapet, the dial set, the cell entered, the button
  pushed by him, the bronze door unlocked and the Treasury.
- Every room of the four quarters has the original's name and ways out;
  every thing a description names answers `examine`.
- No fault in any run that does not type the engine's `help` (friction
  56); `check` and `test` pass.

## What "done" looked like for round 6

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
