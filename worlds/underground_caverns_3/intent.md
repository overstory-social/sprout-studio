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
   anywhere else answers "Nothing happens here", at the ocean before the
   ship "Nothing happens yet", after it "Nothing happens anymore".
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

## What "done" looks like for round 1

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
