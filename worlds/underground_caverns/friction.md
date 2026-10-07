# underground_caverns: friction

Every place Sprout would not let the world say what Zork says, and every
difference from the original the author chose or was forced into. Each
entry: what Zork does (what I wanted), what the world does instead, and the
spec section it touches. Section names are `sprout-design-spec.md`'s.

Each entry carries a **Status** as of the port to Sprout fe916a5, brought
up to date after each round where the round touched it, before round 4
for Sprout 26e6124 (sprout#450 to #453) and the troll's rebuild as an NPC,
and before round 6 for Sprout 6c440f5 (sprout#466 to #474):
**resolved** (by which change), **corrected** (the entry was my misreading),
**changed** (the answer moved but something remains), or **open**. The
entries' first text is kept as it was written against 61f02bb.

## The dice

### 1. Every turn rolls the same dice

- **Wanted:** Zork's chances: the grue takes four in five who walk dark to
  dark; a melee blow is a nine-sided die read along Zork's tables; the YUKS,
  the HELLOS and the WHEEEEE lines vary.
- **Found:** under `sprout play` and `sprout mcp` (the host playtesters
  use), every turn starts from the same seed (`--seed n`, "the seed every
  turn starts from"). So the first `random(9)` of every attack turn is the
  same number, every turn: the troll could never be killed, or always be
  killed on the first blow, depending on the seed. The same holds for
  `chance` and for `{one of}`.
- **Wrote instead:** each object that rolls keeps its own counter (`:spin9`
  on the troll, `:spin5` and `:spin7` on the adventurer, `:spin3`), steps it
  by a number coprime to its modulus every roll, and adds it to the draw.
  The melee lines are chosen by that same roll rather than by `{one of}`;
  `jump` and `hello` step a `:vary` counter. The YUKS ("A valiant attempt.",
  ...) and JUMPLOSS still use `{one of}`, and so say the same thing every
  time under a constant seed.
- **Spec:** Chance › The seed (a world cannot tell a host-supplied constant
  from a varying seed, and has no way to draw fresh); The host contract.
- **Status: resolved** by sprout#414 (`sprout mcp` gives every turn a seed
  of its own). The `:spin` counters are gone: the grue is `chance(5)`, the
  songbird `chance(7)`, a blow `random(9)`, every melee line, YUK, HELLO and
  WHEEEEE line `{one of}`. `sprout play` and `sprout test` still start every
  turn of a script from the script's one seed until a `{ "seed": n }` step
  sets another, so the tests that fight or roll now carry seed steps chosen
  for the outcome each means to show.

## Moving, and the map

### 2. A direction with no exit is not understood

- **Wanted:** `up` where there is no way up: "You can't go that way."
- **Found:** a direction no exit of the place answers reads as no phrase
  at all, and is answered with the world's `unknown`.
- **Wrote instead:** `unknown` is Zork's "That sentence isn't one I
  recognize.", which is what an unknown direction now reads too. Ways Zork
  refuses with its own words are exits (see 3).
- **Spec:** Parsing › When nothing matches; Exits.
- **Status: resolved** by sprout#421: a direction no exit answers is the
  world's `no_way`, "You can't go that way.", Zork's words. `unknown` is
  only for what no phrase reads.

### 3. A refused way needs a place to refuse it

- **Wanted:** Zork's NEXIT and CEXIT strings: "The door is boarded and you
  can't remove the boards.", "You would need a machete to go further
  west.", "Only Santa Claus climbs down chimneys."
- **Wrote instead:** an exit to a `Nowhere` place (`nowhere.sprout`, 19 of
  them) whose `accept` refuses with the line. It works, and reads right, but
  each such way is offered in the view and in `go`'s readings as a real exit.
- **Spec:** Exits; An exit may be conditional; Movement and consent.
- **Status: resolved** by sprout#421: `exit west "west" refuse "You would
  need a machete to go further west."`. The 19 `Nowhere` places are gone,
  the refused ways are no longer offered, and the unbuilt edges refuse with
  a passage of their room (`refuse crawlway`). `nowhere.sprout` holds only
  the Land of the Living Dead. An exit's refusal reads as a notice, where
  the old `accept` refusal read as a refusal. **At 26e6124:** sprout#450
  makes an exit's refusal a `refused` line, as an accept's is; eight tests'
  expectations moved from `notice` to `refused`, and nothing in the world
  changed.

### 4. Eight exits are not always enough

- **Wanted:** Behind House has five ways out, plus the window west and in,
  each of which either leads to the Kitchen or says "The kitchen window is
  closed." That is nine exits written as conditional pairs.
- **Wrote instead:** the window ways are unconditional, and the Kitchen's
  and Behind House's `accept` refuse an adventurer coming through a closed
  window. The same trick lets the Cellar's way up refuse ("The trap door is
  closed.") from the Living Room's side.
- **Spec:** Limits › Static caps (`exitsPerPlace`); Exits.
- **Status: resolved** by sprout#421: a refusing exit is not counted against
  the cap, so the window, the kitchen's ways out, the trap door from both
  sides and the troll's passages are written as Zork's conditional pairs
  (`-> kitchen when (self.get(:window_open))`, then `refuse "The kitchen
  window is closed."`). The three `accept` tricks are gone.

### 5. Exit labels are exact

- **Wanted:** `climb tree`, `climb up the tree`, `climb down the tree`,
  `enter house`, `enter window`.
- **Found:** a label is matched whole and exactly, articles included, and
  an exit has one label.
- **Wrote instead:** labels chosen for the likeliest words ("tree", "house",
  "window", "chimney", "trap door", "ramp"), `go` given the synonym `climb`,
  and `climb up` / `climb down` verbs played by the tree.
- **Spec:** Exits; Parsing › Synonyms.
- **Status: resolved** by sprout#423: `climb the tree`, `enter the window`,
  `climb the stairs` take the labelled exits. `climb up the tree` and `climb
  down the tree` stay verbs the tree plays, as Zork's CLIMB-UP and
  CLIMB-DOWN are. `go through window` is still `unknown`.

### 6. Nothing can carry a visitor across the map

- **Wanted:** dying puts you in the Forest; `jump` Up a Tree lands you on
  the Forest Path; `climb up tree` and `open house` (at Behind House, with
  the window open) move you; things dropped Up a Tree fall to the path; on
  death your possessions scatter across the map.
- **Found:** `move` to a place out of range faults, and every other place is
  out of range, because the world passes nothing.
- **Wrote instead:** a gate. The world's pass rule is `pass any
  (self.get(:gate))`; whoever needs to cross the map sends the world
  `:open_gate`, the world opens the gate and answers `:gate_open`, the
  answer's handler makes the move, and sends `:close_gate`, all in one turn.
  A dark room's own pass rule also opens while the gate is open. It works,
  and is the most fragile thing in the world.
- **Spec:** Range; Movement and consent › Characters moving; The world
  model.
- **Status: changed** by sprout#420, which wrote the gate's route into the
  spec rather than replacing it: an actor may move to a place in its own
  range, and across places that means the world passes, deliberately. So
  the gate stays, now as the spec's way. What made it fragile is gone with
  darkness (9): no dark room has a pass rule to open with it any more. A
  world that passes for good would put every place's contents in reach of
  every visitor's nouns, so a world-level "send this actor there" is still
  what I would want.

### 7. A world path does not reach an object placed with `in`

- **Wanted:** `underground_caverns.forest_1` from a kind's body, as the spec
  says: an object placed by its `in` clause "stands in the tree as if its
  declaration were written where it sits: ... its path is that body's and its
  name."
- **Found:** "Nothing in `underground_caverns` is called `forest_1`."
- **Wrote instead:** every file that names a room imports it.
- **Spec:** The world model › Objects; Names › Identifiers and scope. This
  looks like a gap between the spec and the compiler, worth an issue.
- **Status: corrected.** A triage against the spec read the error as a
  cascade from a parse error elsewhere, not a gap. At fe916a5, with sprout#425,
  `underground_caverns.troll_room` and `underground_caverns.forest_1` both
  read from a kind's body. The files that name a room still import it,
  which is as good; the troll's and the trophy case's kinds use the dotted
  path (27).

### 8. Room names are nouns, and beat things

- **Wanted:** rooms named as Zork names them, "West of House", "Up a
  Tree", "The Troll Room".
- **Found:** a place's name gives it nouns ("house", "tree") and
  adjectives ("troll"), and a room is nearer than what is in it, so `x
  house` at West of House described the room, and `kill troll` after the
  troll's death attacked the room.
- **Wrote instead:** those rooms have neutral names ("front yard",
  "treetop", "chamber") and say Zork's name through a `title` passage. The
  neutral names show wherever the engine names a place (`help`, arrival
  notices).
- **Spec:** Names › Addressing and display; Parsing › Choosing a reading;
  Names › Articles (a name may not begin with "The").
- **Status: resolved** by sprout#424: the rooms have Zork's names again,
  "West of House", "Up a Tree", and "Troll Room" with article `the`, so it
  reads "The Troll Room". The `title` passages are gone. What remains: a
  place still answers to its name's words where nothing in it does, so
  after the troll's death `kill troll` and `x troll` reach the Troll Room.
  A room now refuses to be the target of any verb with "You can't see any
  such thing." (`as target for any`), and `x troll` describes the room
  where Zork says "You can't see any troll here!". Wanted still: a place
  that answers only to nouns it writes. **Before round 4:** `x troll`
  after his death is now refused by the same guard, "You can't see any such
  thing.", which is Zork's answer in all but the noun; and a room refuses as
  a tool too (`as tool for any`), so `give axe to troll` after his death is
  no longer "Nothing happens." but the same line.

## Darkness and light

### 9. There is no darkness, so a dark room is a shut box

- **Wanted:** Zork's LIT: in a dark room, nothing can be seen or named, the
  description is "It is pitch black. You are likely to be eaten by a grue.",
  and a lit lamp, carried or set down, changes that.
- **Wrote instead:** a `DarkRoom` is a place and a shut container
  (`pass any (self.get(:open) || ...)`): what is in it is out of the
  visitor's range until it opens. It opens when it counts a lit lamp on its
  floor or a visitor carrying one. This is the world's best trick, and costs:
  every message that must reach or leave a dark room (scoring, the gate, the
  trap door, the fight) needs its own `pass` rule; and the troll, in a dark
  Troll Room, cannot reach the visitor either, so he does not fight in the
  dark, where Zork's does.
- **Spec:** Places; Containment; Range; Events › Containers route.
- **Status: resolved** by sprout#419. A `DarkRoom` is `lit
  (self.sees(sprout.LightSource, :lit))`, the lamp is a
  `sprout.LightSource`, and the world's `dark` line is Zork's "It is pitch
  black. You are likely to be eaten by a grue." A visitor in the dark names
  only what they carry; a lamp lights a room in the hand, in an open bag or
  on the floor. Every dark room's thirteen pass rules are gone, and the
  troll, who can reach a visitor in his dark room now, fights in the dark
  as Zork's does. What the world still keeps for itself is under 30.

### 10. A room cannot see what its visitor carries

- **Wanted:** the room knows a lit lamp is in the hands of someone in it.
- **Found:** an actor passes nothing, so a room's handlers cannot walk the
  visitor's hands; a lamp in hand cannot send to the room either. (A
  `{for ... in actor}` in the room's `describe` prose did walk the hands,
  which handlers cannot.)
- **Wrote instead:** the lamp tells its bearer (`:light`) when it is lit,
  put out, taken or dropped; the bearer keeps a count and broadcasts
  `:relight`, which a dark room lets through.
- **Spec:** Range; Actors and visitors; Prose › Conditionals and loops.
- **Status: changed.** A place's `lit` sees into hands (sprout#419), which
  answers this for whether a room can be seen. A handler still cannot see
  into hands, so the lamp still tells its bearer, for the grue: see 30.

## The parser

### 11. `take all` names nothing, and stops at the first refusal

- **Wanted:** Zork's "leaflet: Taken." / "small mailbox: It is securely
  anchored.", one line per thing, carrying on past the refusals.
- **Found:** `all` runs one command per thing, each answered alone, with no
  way to say which thing a line is about; the first refusal stops the rest;
  and what the visitor already holds comes first in the walk.
- **Wrote instead:** `take`'s target is played only by portable things, so
  fixtures and scenery are left out of `all`; nothing refuses a take (the
  adventurer's own part says "You already have that!" and Zork's other
  answers in its `do`), so `all` carries on. The visitor reads "Taken."
  once per thing with no name, and "You already have that!" once for each
  thing already held.
- **Spec:** Parsing › Sequences, again and all.
- **Status: changed** after round 2. `take` and `drop` are set roles now
  (`role target many`), so `take all` binds every portable thing in reach
  at once, in one turn and one move, as Zork's one command is, and the
  adventurer answers each by name: "Brown sack: Taken." Two things remain.
  First, the line is capitalised ("Brown sack:", where Zork has "brown
  sack:"): see 17. Second, `all` and a list of names arrive alike in a set
  role, so the world cannot leave held things out of `all` (as Zork's
  TAKE's `all` does) and still answer "leaflet: You already have that!" to
  `take leaflet and sack`. It leaves out what is already held from any
  list that holds something else, and names each one only when everything
  listed is already held.
  **At 26e6124:** sprout#453 lets a run of things in a one-thing role run
  once for each, so `put lunch and garlic in case` now puts each in turn
  and stops at the first refusal. `take` and `drop` stay set roles, since
  that is what lets `take all` be one move that names each thing, as
  Zork's is. A thing in the troll's fist or behind a shut glass lid is in
  reach of a name now (37, 40), so `take all` leaves those out by name, and
  `take axe` alone is refused by the troll's own guard.

### 11a. `and` between things, and between commands

- **Wanted:** Zork's `take lamp and sword` ("brass lantern: Taken." /
  "sword: Taken."); Zork's command chaining with `then` and a full stop.
- **Found:** `then` and `.` chain commands, as Zork's do (`open mailbox
  then take leaflet`, `drop leaflet. take leaflet`; tested in
  `leaflet.json`). `and` between two verb phrases (`put leaflet in mailbox
  and close it`) is not a sequence; it is read as a run of nouns, and is
  answered "You can't see any such thing." Zork does not chain on `and`
  either, but says so in other words. `take lamp and sword` is refused the
  same way, because `take`'s target is a single role and a run of nouns
  binds only a set role (`many`).
- **Wrote instead:** nothing yet. Making `take`, `drop` and `put` set roles
  would need every one of their bodies rewritten over a set; left for a
  later round. `walk around the house` is refused, as Zork refuses it.
- **Spec:** Parsing › Sequences, again and all; Verbs › Set roles ("Parsing
  splits on `and` and commas literally").
- **Status: changed** after round 2, where four of six players met it.
  `take lamp and sword` and `drop sack and bottle` now work, `take` and
  `drop` being set roles (see 11); `put` is still one thing at a time.
  `and` between two verb phrases (`take leaflet and read it`, `put leaflet
  in mailbox and close it`) is still read as a run of nouns and answered
  "You can't see any such thing.", which tells the visitor something false
  (that the leaflet is not there): one player gave up on the leaflet for
  it. The world has no say in that answer; Sprout's `not_here` is the line
  for a noun nothing answers to, and the parser does not know the run held
  a verb. (Correction: round 1's note that `walk around the house` is
  refused as Zork refuses it was wrong. Zork's WHITE-HOUSE-F walks the
  visitor to the next side of the house; the world now does that: see
  Differences chosen.)
  **After round 3:** all six players met it, five of them on `take leaflet
  and read it` at the mailbox, which answered that the leaflet they could
  see was not there; two never read the leaflet for it. Sprout's `not_here`
  is the answer for a noun nothing answers to, and the parser does not
  know "and read it" held a verb; the world cannot route around it. Asked
  of Sprout: where `and` is followed by a known verb, split the line into
  two commands, or failing that answer with `unknown` rather than a
  refusal that says the thing is not there. Lists of things in a one-thing
  role are sprout#448.
  **Status: resolved** by sprout#453 at 26e6124: `and` before a verb chains
  as `then` does, so `take leaflet and read it` takes the leaflet and reads
  it, and `put lunch and garlic in case` puts each in turn. `open window
  and climb in`, the round-3 line that read "You can't see any such thing.",
  now opens the window and goes in by the way labelled "in". A bare `enter`
  is still not a sentence here, since no exit is labelled so: `open window
  and enter` opens it and then answers `unknown`.

### 12. The engine's lines have no slot for the word

- **Wanted:** "You can't see any troll here!"; "I don't know the word
  "frobozz"."
- **Wrote instead:** `not_here` is "You can't see any such thing." and
  `unknown` is "That sentence isn't one I recognize." (both Zork's own
  phrases from elsewhere).
- **Spec:** Prose › Engine lines; Parsing › When nothing matches.
- **Status: open.**

### 13. `help` lists every verb against every thing

- **Wanted:** Zork has no HELP.
- **Found:** because every thing answers every one of Zork's verbs with
  Zork's default refusal, `help` lists each verb against each thing in
  sight: several thousand characters in the Kitchen.
- **Wrote instead:** the adventurer's `help` passage is a short paragraph in
  the Empire's voice listing the commands.
- **Spec:** Verbs › Engine verbs (`help`).
- **Status: open.**

### 14. A thing's name cannot be said without its article

- **Wanted:** Zork's "a leaflet" in lists and "the leaflet" in answers.
- **Found:** a slot renders a thing with its declared article, always.
- **Wrote instead:** every thing has article `the` and a `short` passage
  holding its bare name, written out again for each object.
- **Spec:** Prose › Slots; Names › Articles.
- **Status: open.**

### 15. Names are fixed

- **Wanted:** the egg becomes the "broken jewel-encrusted egg" (Zork swaps
  in another object).
- **Wrote instead:** one egg, with `:broken`; its `short` and descriptions
  read the state, but the engine's own lines still call it "the
  jewel-encrusted egg", and "broken" is an adjective it answers to from the
  start. The canary likewise.
- **Spec:** Names › The grammar block ("Names are fixed").
- **Status: open.**

### 16. A thing that is everywhere is many things

- **Wanted:** Zork's LOCAL-GLOBALS: one white house, one kitchen window,
  one trap door, seen from several rooms.
- **Wrote instead:** one object per room, kept in step by messages the world
  passes (`:window_sync`, `:trap_sync`).
- **Spec:** The world model; Range.
- **Status: open.**

## Prose and its order

### 17. Lines are capitalised

- **Wanted:** "(with the sword)".
- **Found:** "(With the sword)": the first letter of each rendered line is
  capitalised.
- **Spec:** Prose › Passages.
- **Status: changed.** sprout#427: a line is not capitalised past a
  bracket, so the attack says "(with the sword)". But Zork's answers to
  several things at once open with the thing's bare, lower-case name,
  "brown sack: Taken.", and here read "Brown sack: Taken." (after round 2;
  see 11).

### 18. Indentation is lost

- **Wanted:** "You are carrying:" then "  A leaflet", and "The brown sack
  contains:" then "  A lunch", indented.
- **Found:** each line is its own paragraph, leading spaces gone.
- **Spec:** Prose › Passages (lines reflowed).
- **Status: open.**

### 19. A passage keeps its spaces when it is embedded

- **Found:** `passage short { leaflet }` rendered into "a {u.short}." reads
  "a leaflet ." The body's leading and trailing spaces stay.
- **Wrote instead:** every passage that is embedded in a sentence is written
  with tight braces: `passage short {leaflet}`.
- **Spec:** Prose › Passages; Prose › Slots.
- **Status: resolved** by sprout#427: a passage put into a slot is trimmed,
  and the tight braces are loosened. The trimming took with it the blank
  lines that `inside_lines` and the like opened with, so every paragraph
  break between a thing and what it holds is now written by the caller;
  see 31.

### 20. What a handler says comes before the room

- **Wanted:** Zork's order on arrival: the room, then "Your sword is
  glowing with a faint blue glow.", the songbird, the troll's first swing.
- **Found:** lines a handler tells on a move are read before the new room's
  description. (For "The trap door crashes shut..." and "You have moved into
  a dark place." that is Zork's order too.)
- **Wrote instead:** nothing; the order is the engine's. The troll's first
  strike is not made on arrival but on his own turn a minute later, so it
  does not come before the room.
- **Spec:** The runtime › Turns; Prose.
- **Status: resolved** by sprout#422: on arrival the description comes
  before the queue's lines, so the sword's glow and the songbird follow the
  room, as in Zork. Zork's GOTO says two things before the room, "You have
  moved into a dark place." and the trap door's crash; those are now said by
  the adventurer's own part of `go`, whose `do` is read before the
  description. The grue is decided there too and told from the queue; the
  visitor is in the forest by the time the description is derived, so the
  dark room is never described, as in Zork.

### 21. What a handler says does not count as an answer

- **Found:** a verb whose `do` only sends a message (the troll's blow, the
  tree's climb) is answered "Nothing happens." (the world's
  `nothing_happens`) even though a handler then tells the visitor plenty.
- **Wrote instead:** the attack's `do` says the blow's line itself,
  rendered at the end of the turn from the troll's state; a `do` that only
  moves the visitor says `""`.
- **Spec:** Verbs › How a command runs; Prose › When lines are rendered.
- **Status: open, and now decided.** sprout#422 landed only its first half;
  the spec now says the answer is decided when the effect pass ends, so a
  line from a handler is not the answer. The attack's `do` still says the
  blow, and a `do` that only sends a visitor across the map still `say`s
  `""`.

### 22. `describe` cannot tell `look` from arriving

- **Wanted:** Zork's default BRIEF mode: a room's long description the
  first time, its name alone after, and in full on `look`; `brief`,
  `verbose`, `superbrief`.
- **Wrote instead:** every room is described in full every time (Zork's
  VERBOSE). `verbose` says "Maximum verbosity."; `brief` and `superbrief`
  say, in the Empire's voice, that they are not to be had.
- **Spec:** Prose › describe; Verbs › Engine verbs.
- **Status: resolved** by sprout#426. Zork's BRIEF is the default again: a
  room's `describe` reads `seen`, and each room remembers per visitor how
  often they have come in (Zork's TOUCHBIT, counted only where there is
  light to see by). On arrival a visitor reads the room in full the first
  time and its name and contents after; `look` is always full; `verbose`,
  `brief` and `superbrief` answer as Zork's do and set the visitor's mode.
  Because the arrival description is derived once the queue is empty, the
  room's `:entered` count is already raised when it is read: "first visit"
  is a count of one.

## Score, time and the end

### 23. No move count

- **Wanted:** "Your score is 35 (total of 350 points), in 112 moves."
- **Found:** nothing runs on every turn for the visitor: `as actor for any`
  may only permit, and engine verbs run no `do`.
- **Wrote instead:** the score line leaves out the moves. Zork's ranks are
  kept.
- **Spec:** Verbs › Playing a role (`for any`); The runtime › Turns.
- **Status: corrected**, and built. The engine verbs do run the actor's
  `do`; only `for any` refuses one. The adventurer counts a move in its own
  part of every verb but `score`, `verbose`, `brief`, `superbrief`, `quit`,
  `restart`, `save` and `restore`, as Zork's CLOCKER does, and the score
  reads "Your score is 35 (total of 350 points), in 112 moves." What is
  still not Zork's: a reading refused in its consent pass, an exit's
  refusal and `no_way` run no `do`, so "It is already open." and "You can't
  go that way." are not counted, where Zork counts every command it parses.

### 24. No turns, only time

- **Wanted:** the troll's I-FIGHT demon swings every turn; wounds heal
  every thirty moves; the lamp dims after hundreds.
- **Wrote instead:** the troll swings back in the turn he is struck and, on
  his own, on a wake every minute while he fights and somebody is in his
  room (one in three wakes he strikes first). Wounds heal one per ten
  minutes. The lamp does not burn out.
- **Found, in round 1:** under a host that moves time half a minute a turn,
  a wake could fall in the same turn as a blow, and the troll swung twice
  in one move, which Zork's I-FIGHT never does: the fight was harder than
  Zork's, and a stun was followed by a second blow before the visitor could
  act. Since a world cannot tell which turn a wake falls in, the troll now
  keeps `:swung`, set by every blow at him; a wake that finds it set
  passes, clears it and waits for the next. He swings at most once between
  two of his own turns.
- **Found, in round 2:** a wake cannot be taken back. The troll's last
  wake, asked while he fought, still fell after the fog had taken him, and
  his `:woke` ran (doing nothing, since it asks `:dead` first); four
  players' logs carry "troll_room.troll woke" after his death. The world
  now destroys the troll when he dies (see 26), which drops his pending
  wakes, as Zork's REMOVE-CAREFULLY drops him from the game.
- **Spec:** Time › Wakes; The runtime › Turns (a world has no turn
  number).
- **Spec:** Time › Wakes; Limits (`shortestWakeSeconds`).
- **Status: changed** before round 6 (sprout#469). `:swung` is gone: a
  swing, his own or one struck back, takes back the turn he had asked for
  and asks the next a minute on (`cancel wakes`), so he still swings at
  most once between two of his own turns, and the turn after a blow comes
  a minute after it. A turn can now be taken back, so destroying the troll
  is no longer what drops his last wake; it stays, with its warning (26),
  because the fog takes him for good. Still open: no turns, only time; the
  lamp does not burn out.

### 25. A game cannot end

- **Wanted:** FINISH after the third death, `quit`, `restart`, `save`,
  `restore`.
- **Wrote instead:** the third death sends the visitor to the Land of the
  Living Dead, a place with no way out. `quit` reports the score and says
  there is no quitting from inside; `restart`, `save`, `restore` say the
  Empire keeps your place.
- **Spec:** The host contract › Admission and identity; Actors and
  visitors › Visitors come and go.
- **Status: open.**

### 26. A declared thing cannot be eaten without a warning

- **Wanted:** eating the lunch or garlic and drinking the water removes them
  for good.
- **Found:** `destroy self` on a declared object warns.
- **Wrote instead:** the lunch, the garlic and the water are spawned into the
  sack and the bottle the first time anyone enters the Kitchen, so eating
  and drinking may destroy them.
- **Found, in round 2:** the troll is declared, and Zork removes him for good
  when he dies (REMOVE-CAREFULLY), with whatever he has eaten. Until now a
  closed thing in his room, the fog, took the body; but the fog was a
  thing in the room, and `examine all` with the troll alive read "The fog
  has lifted." The troll now ends with `finally destroy self`, so his
  axe, his flag and the sword's dimming still arrive, and his pending wake
  goes with him (24). `sprout check` warns about it: "Destroying is meant
  for what was spawned." The warning is accepted; spawning the troll
  would need a first visitor to set him there, and he is in the Troll Room
  from the start.
- **Spec:** Spawning; Destroying; The compiler › What it warns about.
- **Status: open.**

## The language, in passing

### 27. Kinds cannot walk what they name

- **Found:** a bare object name in a kind's body has the object type, so
  `each a: Adventurer in troll_room` and `troll_room.count(...)` are refused
  there.
- **Wrote instead:** the troll's and the trophy case's handlers are written
  on the objects themselves.
- **Spec:** Names › Identifiers and scope ("Names in a kind's body").
- **Status: corrected.** Narrowing first, `if (troll_room.is(DarkRoom))`,
  would have done; now a dotted path does too (sprout#425). The troll's
  fight and the trophy case's payments are back on the `Troll` and
  `TrophyCase` kinds, naming `underground_caverns.troll_room` and
  `underground_caverns.living_room`.

### 28. Narrowing does not flow through `&&`, nor into a nested body's text

- **Found:** `if (t.is(Nest) && t.count(Egg) > 0)` is refused ("`Thing`
  holds nothing"); and a quoted line inside an `each` nested in an
  `if (t.is(Egg))` did not see `t` as an `Egg`.
- **Wrote instead:** nested `if`s, and narrowing again inside the loop.
- **Spec:** Properties, types and values › Narrowing; Walking contents.
- **Status: resolved** by sprout#429: `t.is(Nest) && t.count(Egg) > 0` and
  `actor.is(Adventurer) && actor.get(:mode) == :brief` read, and a line in
  an `each` nested in `if (t.is(Egg))` sees `t` as an `Egg`.

### 29. A `without` can come back by another route

- **Found:** a container that can be carried (`is Box, Portable`) answered
  `open` twice, because `Box`'s `without as target for open from Thing` did
  not hold against `Thing` arriving again through `Portable`. As specified,
  but easy to fall into.
- **Wrote instead:** `kind Bag is Box, Portable` writes the `without`s
  again itself.
- **Spec:** Kinds, composition and libraries › Suppressing a contribution.
- **Status: open.**

## Found in the port to fe916a5

### 30. A handler cannot ask whether a place is lit

- **Wanted:** Zork's GOTO, which reads LIT for the room left and the room
  entered: the grue takes four in five who walk from dark into dark, and
  "You have moved into a dark place." is said whenever the room entered is
  dark.
- **Found:** `x.sees(K, :p)` is read only in a place's `lit`, and nothing
  else can ask whether a place is lit. A handler or a `do` cannot read
  through a person's hands either, so it cannot see the lamp someone else
  carries.
- **Wrote instead:** the bookkeeping darkness used to need, cut down to what
  the grue needs. The lamp tells its bearer (`:light`); a dark room counts a
  lit lamp on its floor and each visitor bearing one (`:alight`) and tells
  each visitor whether it would be lit without their own (`:room_lit`); the
  adventurer's `go` reads that, and its own lamps in hand or in an open
  bag, to decide. A lamp in an open bag carried by somebody else is not
  counted for the room, though `lit` sees it.
- **Spec:** Range › Sight; Where types come from (`x.sees`).
- **Status: open.**

### 31. A passage cannot open or close with a paragraph break

- **Wanted:** a thing's `inside_lines` that begins with a paragraph break
  when it has anything to say, so that a room's listing reads "On the table
  is an elongated brown sack..." and then, as its own paragraph, "The
  glass bottle contains:".
- **Found:** a passage put into a slot is trimmed of the blank lines it
  opens and closes with (sprout#427). A `\n` written at either end is kept,
  but `\n\n` there stays inside the one line, a newline in the middle of a
  paragraph, and does not split it. A blank line written in the caller's
  passage does split it, and an empty paragraph is dropped.
- **Wrote instead:** every caller writes the break before the slot:
  `{t.fdesc}`, a blank line, `{t.inside_lines}`; likewise the inventory. The
  egg's `spill` and Zork's HO-HUM, `hacked`, lost their leading space and their
  callers write it.
- **Spec:** Prose › Passages; Prose › Slots.
- **Status: resolved** by sprout#452 at 26e6124: a slotted passage that
  renders words keeps a blank line at its edges as a paragraph break. Every
  `inside_lines` now carries its own break, and its callers (the room's
  listing, a container's, the inventory) write `{t.fdesc}{t.inside_lines}`
  with nothing between. The single spaces the egg's `spill` and Zork's
  HO-HUM lost to sprout#427 are still written by their callers: an edge's
  spaces are trimmed by design, and only a line break or a paragraph break
  survives.

## Found after round 2

### 32. The parser cannot ask

- **Wanted:** Zork's `dig` with no object: "What do you want to dig in?",
  and the next line taken as the answer.
- **Wrote instead:** bare `dig` is its own verb and answers what Zork says
  once it knows: "Digging with a pair of hands is silly."
- **Spec:** Parsing › Choosing a reading ("The parser never asks").
- **Status: open.**

### 33. A visitor's hands are out of everyone's reach

- **Wanted:** Zork's troll takes a gift from the hand that gives it.
- **Found:** the troll's range stops at the visitor, since `sprout.Actor`
  does not pass, so his `move item to self` faulted ("out of range").
- **Wrote instead:** the visitor's own part of `give`, which runs first,
  puts a gift for the troll on the floor at his feet; the troll's part then
  takes it from there (eats it, takes back his axe) or lets it lie (a
  weapon thrown back). The visitor reads only Zork's line.
- **Spec:** Range ("what another visitor carries is out of range"); Verbs ›
  The two passes.
- **Status: changed** before round 4. The troll is a `sprout.Actor` now,
  whose `accept` takes what fits, so the giver's own part of `give` moves
  the gift straight from their hand (or from the open bottle in it) into
  his, as the library's own `give` does; his part then eats it, keeps his
  axe, or throws a weapon back with `act throw`. Nothing passes through the
  floor. What remains is the rule itself: he could not take it from the
  hand, only be handed it, which is the spec's design rather than a gap.

### 34. Eight phrases a verb

- **Wanted:** every English way of going in through the kitchen window a
  player tried, as Zork's WALK IN, WALK WITH (THROUGH), CLIMB WITH and ENTER
  reach V-THROUGH.
- **Wrote instead:** `through` has eight phrases ("go in through", "walk in
  through", "climb in through", "climb through", "crawl through", "walk
  through", "walk in", "climb in"); "enter through the window" was the one
  left out, and `enter window` already goes by the exit's label.
- **Spec:** Limits › Static caps (phrases per verb or intent: 8).
- **Status: open.**

## Found answering the brief's scenery constraint

### 35. A room cannot give the object its kind holds a line of its own

- **Wanted:** Zork's WALL is one global object; here every `Room` holds its
  own `wall`, and the Cellar's walls (damp stone) and the Troll Room's
  (bloodstains, axe scratches) should each answer `examine walls` in their
  own words, by restating `object wall is Wall { passage view { … } }` in
  that room.
- **Found:** the compiler refuses it: "`cellar` holds two objects called
  `wall`". An object a kind declares cannot be restated, refined or left out
  by the object that composes the kind, and a thing cannot read its
  container's passages or properties.
- **Wrote instead:** each room keeps a `:walls` number (plain, damp,
  scarred) and sends it to its wall in a `:wall_look` message as a visitor
  comes in; the wall keeps it and picks one of three lines by it. Three
  lines live on the `Wall` kind, not in the rooms they describe.
- **Spec:** Kinds, composition and libraries › How members combine;
  Suppressing a contribution; Names › Identifiers and scope.
- **Status: open.**

### 36. `examine all` stops at a cap, so scenery crowds out what matters

- **Wanted:** `examine all` in the Troll Room reaching the troll, as it did
  before the room's passages, hole, bloodstains and scratches became
  objects the brief asks for.
- **Found:** "a line of `all` runs at most as many turns as a set role may
  bind objects", so `examine all` with the lamp, sword, sack, lunch and
  garlic in hand reads eight things and stops; with four more scenery
  objects ahead of him, the troll fell off the end.
- **Wrote instead:** the troll is declared ahead of the room's scenery, so
  the range walk reaches him first; the scenery after him is what is cut.
- **Spec:** Parsing › Sequences, again and all; Limits.
- **Status: changed** before round 4: `examine all` in the Troll Room now
  stops at once on the troll's axe, whose examine refuses (37, 48), so the
  cap no longer comes into it while he holds it.

### 37. What a person holds cannot be looked at

- **Wanted:** `examine axe` while the troll brandishes it answering with
  the axe's own description, and `take axe` with Zork's AXE-FUNCTION, "The
  troll's axe seems white-hot. You can't hold on to it."; the axe one
  object throughout, in his fist, on the floor, in the visitor's hands.
- **Found:** the troll passes nothing, so that what he has eaten stays out
  of sight, and so the axe inside him is out of range: `examine axe`
  answered `not_here`. A pass rule cannot open him for one thing and not
  another, and sight reads through a person's hands only for `lit`.
  `examine` has no consent pass, so a stand-in left in the room could not
  step aside for the real axe on the floor; the two would be drawn between.
- **Wrote instead:** a scenery `held_axe`, named as the axe is, stands in
  the Troll Room while the axe is inside the troll and waits inside him
  while it is not; the troll's own `:entered` and `:left` move it as the
  axe comes and goes, and it goes with him when he dies. By the director's
  steering, examined in his fist it answers that you cannot get a good look
  at it while he is waving it at you; taken, it is Zork's white-hot axe.
- **Spec:** Range; Sight; Events › Containers route; Engine verbs;
  Parsing › Choosing a reading.
- **Status: resolved** before round 4, by the troll's rebuild as an NPC.
  The troll passes (`pass any (true)`, replacing `sprout.Actor`'s), so the
  one axe, in his fist, is in reach of the visitor's nouns. Its own
  `as target for examine` refuses while he wields it: `examine`, an engine
  verb with no `do`, still runs its participants' permits, which this entry
  had not tried. `take
  axe` is refused by `sprout.Actor`'s own `release` guard, whose `not_yours`
  line the troll writes as Zork's AXE-FUNCTION. What he has eaten goes into
  his stomach, a container inside him that passes nothing, since a pass
  rule cannot open a person to one of his things and not another. The
  `held_axe` stand-in is gone. The cost is under 48: `examine all` in his
  room now stops on the axe. **Before round 6** (sprout#474) that cost is
  gone too: `examine all` examines everything else in his room, and leaves
  out the axe in his fist, as it leaves out the troll.

## Found after round 3

### 38. A turn already asked for cannot be taken back

- **Wanted:** Zork's knockout: the troll out cold, his I-FIGHT turns
  passing him by while V-PROB rises from nothing by a tenth a turn, so the
  next blow, "The unconscious troll cannot defend himself: He dies.", is
  almost always there to be struck.
- **Found:** mid-fight the troll always has a one-minute turn pending (each
  swing asks for the next), an object may hold one pending wake, and a wake
  cannot be cancelled or replaced, only dropped by destroying its object.
  The knockout's own three-minute wake was never asked, the pending turn
  fell at the next tick, and two times in three brought him round swinging
  before the visitor could act. One round-3 player knocked him out twice and
  never got the second blow, and died.
- **Wrote instead:** the troll keeps `:rouse`, his chance in tenths of
  coming round, set to nothing by the knockout and raised by one on each of
  his turns that finds him out; the pending turn arrives, finds the chance
  nothing, and only counts. That is Zork's own rule, so it is no loss; what
  is lost is the plain way of writing it, "this replaces his next turn".
- **Spec:** Time › Wakes; Limits (pending wakes per object: 1).
- **Status: resolved** before round 6, by `cancel wakes` (sprout#469). The
  knockout takes back the turn he had asked for and asks its own, a minute
  on, which finds him out cold. `:rouse` stays: it is Zork's V-PROB, the
  rule itself, not a workaround.

### 39. A line that reads what its own handler moves names the wrong thing

- **Wanted:** "The axe knocks your sword out of your hand." from one line
  that names whichever weapon the visitor held, through a passage that asks
  the visitor's hands.
- **Found:** a turn's lines are rendered once its work is done, so the
  passage asked the hands after the sword had gone to the floor and named
  the fallback, "your bloody axe". A round-3 player read that and then
  "You don't have the sword.", and called it a fight they could not read.
  The spec says so plainly; it is a trap all the same, since the line is
  written before the move.
- **Wrote instead:** one `tell` per weapon, each naming it in the words,
  before the move.
- **Spec:** Properties and values (a turn's lines are rendered once its
  work is done); Prose › Slots.
- **Status: open** (by design; noted as a hazard).

### 40. A glass bottle shows what it holds and will not let it be named

- **Wanted:** Zork's bottle (TRANSBIT): the water seen through the glass,
  and `give water to troll` or `pour water` answered about the water, or
  "The bottle is closed.", while the bottle is shut.
- **Found:** a shut container is out of range, whatever its glass, so the
  water cannot be named and every command about it reads "You can't see any
  such thing." A round-3 player was told so with the water in hand. The
  bottle's look-inside lines do show the water, so the world says it is
  there and then that it is not.
- **Wrote instead:** nothing; the visitor must open the bottle first.
- **Spec:** Range ("A key in a shut chest cannot be named until the chest
  is open"); Containers route.
- **Status: changed** before round 4. A transparent box (the bottle, the
  trophy case) passes while shut, so what it holds can be named, and its lid
  is written as guards instead: its `accept` and a new `release` refuse
  while it is shut ("You can't reach something that's inside a closed
  container.", Zork's PRE-TAKE), and each thing it holds keeps `:sealed`,
  told by the box as it shuts and opens, so that the water's own permits
  answer Zork's "The bottle is closed." to `pour`, `throw` and `give`, and
  "You'll have to open the glass bottle first." to `drink`. `take all` and
  a run leave a sealed thing out. So `give water to troll` with the bottle
  shut is "The bottle is closed.", and with it open the troll gets the water
  out of the bottle in the visitor's hand. What is still lost: a pass rule
  is all-or-nothing, so glass that shows but does not let hands through is
  a pass rule, two guards, a message and a flag on every thing, where the
  spec's `lit` already separates sight from reach for light alone. And the
  water cannot see where its bottle is, so a shut bottle in hand and one on
  the table both answer `take water` with "It's in the bottle. Perhaps you
  should take that instead.", where Zork says "The bottle is closed." of the
  one in hand.

### 41. A tool with no target is a verb of its own

- **Wanted:** `dig with axe` read as DIG with a tool and no object, as
  Zork reads it before asking what to dig in.
- **Found:** a verb's target is never optional, so `dig`'s "dig [target]
  with [tool]" cannot drop its target, and "dig with axe" read "with axe"
  as a thing and answered "You can't see any such thing."
- **Wrote instead:** a verb `dig_with`, whose one role is the carried tool,
  answered by the visitor: "Digging with a bloody axe is silly."
- **Spec:** Verbs › Optional tools ("the target is never optional").
- **Status: open.**

### 42. A way out cannot ask who is going, or what they carry

- **Wanted:** Zork's UP-CHIMNEY-FUNCTION as the Studio's way up: it goes
  to the Kitchen for whoever carries the lamp and at most one thing more,
  and refuses anyone else, "Going up empty-handed is a bad idea." or "You
  can't get up there with what you're carrying."
- **Found:** an exit's `when` is over the place, with no actor bound, and
  the Studio cannot see into the visitor's hands; a guard that could see
  them, the visitor's own `depart`, is told only where they are going, not
  where from or by which way.
- **Wrote instead:** the Studio's way up is an ordinary exit to the
  Kitchen; the visitor's kind keeps `:at_chimney`, set as they arrive in a
  place marked `ChimneyFoot`, and its `depart` refuses a move to a place
  marked `ChimneyTop` from there by Zork's rule. `climb chimney` by name
  goes through the gate, so the visitor's own `permit` for `climb_up` asks
  the rule again first, where its refusal can be read.
- **Spec:** Exits › An exit may be conditional; Movement and consent › The
  three roles; Object identity.
- **Status: open.**

### 43. A declared object cannot be compared with `==`

- **Wanted:** `if (to == kitchen)` in a guard.
- **Found:** identity compares bindings (a role, an `each` variable,
  `mover`, a `let` of one of these), and a declared object's path is not one.
- **Wrote instead:** marker kinds, `ChimneyFoot` on the Studio and
  `ChimneyTop` on the Kitchen, asked with `is`.
- **Spec:** Object identity.
- **Status: open.**

### 44. `pour water in bottle` is the water in the bottle

- **Wanted:** Zork's POUR ... IN, "The water slips through your fingers."
  for water poured into the bottle it is already in.
- **Found:** "in the bottle" is also one of the relative phrases that
  narrow a name, so the line reads as `pour` of "the water in the bottle",
  and that reading wins over `pour_in`'s.
- **Wrote instead:** nothing; the water is poured out on the floor, a fair
  reading of the line. `pour water into bottle` reaches `pour_in`.
- **Spec:** Parsing › Matching a line (relative phrases); Choosing a
  reading.
- **Status: open.**

## Found before round 4: the troll as an NPC

The troll is rebuilt as the brief now asks: `kind Troll is Thing,
sprout.Actor`, an NPC with nobody behind him. He swings at a visitor with
`act attack (target: a, weapon: x)`, the very verb the visitor swings at him
with, deciding in his own `as actor for attack` what the blow does on
Zork's tables; the visitor's `as target for attack` takes it, tells them the
line, and wounds, stuns, disarms or kills them. He picks his axe up off the
floor with `act take`, and throws a weapon he is given back to the floor
with `act throw`. These are what the NPC model would not let me say.

### 45. An NPC's voice does not reach the one it acts on

- **Wanted:** the troll's own part of his own blow saying the blow: "The
  troll swings his axe, but it misses." from `as actor for attack`, as a
  visitor's part of their blow says theirs.
- **Found:** nobody is behind an NPC to read its `say`, so its `say` goes
  out through `npc_says` to everyone who would hear its `tell`; and a plain
  `tell` leaves out the reading's participants. The visitor he swings at is
  the reading's target, so neither reaches them. Only `tell target "…"`
  does (checked: of `say`, `tell` and `tell target` in his part, the
  visitor read only the last). A `say` would also come out as speech, "The
  troll says "…"", unless he wrote his own `npc_says`.
- **Wrote instead:** the troll decides the blow and keeps it (`:dealt`); the
  visitor's own `as target for attack` reads it from `actor` and tells
  itself the line (`tell self`), with the wound, the stagger or the death
  that only the visitor may write. So Zork's lines for the troll's blows
  live in `adventurer.sprout`, beside the effects, rather than with him.
- **Spec:** Acting ("Nobody is behind it to read its `say` lines…"); Other
  people › Who hears it.
- **Status: resolved** before round 6 (sprout#466, which made `tell
  <role>` in the actor's own part the spec's way, and found it already
  worked, as this entry had checked). The troll tells the blow to the one
  it falls on, `tell target`, in his own `as actor for attack`: the miss,
  the wound, the knockout and whether he spares them, the killing stroke,
  and the death line after it. The visitor's part only does what `:dealt`
  says to them. One line stays theirs: a stagger costs them their weapon
  one time in four, and which weapon is in their hand is out of his range
  (33), so the stagger-or-disarm line is told by the visitor, who can see
  it.

### 46. An NPC cannot stand in a doorway

- **Wanted:** Zork's troll, who "fends you off with a menacing gesture" as
  his own act, whenever he is awake and armed.
- **Found:** a move asks three parties, the thing moving, the place it
  leaves and the place it enters; a bystander, even an actor, has no guard
  on anyone else's move, and `act` cannot refuse for somebody else.
- **Wrote instead:** as before, the Troll Room's own exits refuse while its
  `:troll_flag` is false, a flag the troll sends it as he falls, wakes and
  dies.
- **Spec:** Movement and consent › The three roles; Exits › An exit may be
  conditional.
- **Status: decided** before round 6 (sprout#466, for sprout#457): blocking
  a way is the place's to do, and an NPC guards through the place's exits,
  as the spec's new Movement and consent › A way an NPC guards shows with
  this very troll. The room's guard is kept as written. Its `when` reads
  the room's own `:troll_flag`, which the troll sends, rather than the
  troll's state as the spec's example does, because the troll is destroyed
  when he dies, and the way stays open after.

### 47. An NPC's turns are wakes it keeps asking for

- **Wanted:** Zork's I-FIGHT demon: the troll's turn every move while he
  fights, and his first strike when somebody walks in.
- **Found:** an NPC "acts on `:tick` or on a message", but only a place is
  ticked, and a tick's interval is the host's, never to be counted. An
  object may hold one pending wake, which cannot be cancelled (24, 38).
- **Wrote instead:** as before: on `:arrived` and after every swing he asks
  for a wake a minute on; the wake swings, or passes if he swung back at a
  blow since. The knockout's second chance is kept, as round 3 left it.
- **Spec:** Time › Ticks; Time › Wakes; Actors and visitors (NPCs).
- **Status: changed** before round 6 (sprout#469; ticks stay place-only by
  Sprout's decision on sprout#458). His turns are still wakes he asks for,
  which is now the spec's way for an NPC's clock. What is gone is the
  bookkeeping: each turn he asks for takes back the one he had asked for
  (`cancel wakes`), so a swing struck back at a blow puts his next turn a
  minute on, and the `:swung` flag that told a wake to pass, and the
  `:waking` flag that kept him to one, are gone. The one visible change is
  Zork's: he swings once a move, a minute after his last swing of either
  kind.

### 48. `all` in a one-thing role stops at a refusal before what comes ahead of it

- **Wanted:** `examine all` in the Troll Room reading the visitor's things,
  the walls and the troll, and then the axe's refusal, as the spec says a
  line of `all` runs "in the order the range walk reaches them, and stops
  at the first refusal".
- **Found:** the line reads only the axe's refusal, and nothing it would
  have examined first. A run of names (`examine lamp and sword and axe`) is
  read in order and stops at the axe, as it should. A minimal world shows
  it: a place holding an apple, a pear, then a lamp whose `as target for
  examine` refuses; `examine all` answers only the lamp's refusal, while
  `examine apple and pear and lamp` examines the apple and the pear first.
  This looks like a Sprout bug, not a choice.
- **Wrote instead:** nothing; `gift.json` expects the refusal alone for
  now, so that a fix shows up as a failing test. Sprout's sprout#389 option
  1 (leave out of `all` what consent refuses) would also answer it.
- **Spec:** Parsing › Sequences, again and all.
- **Status: resolved** before round 6 (sprout#474, for sprout#455): `all`
  in an engine verb's open role takes every thing in reach that is not a
  person. `gift.json` failed as it was meant to, and now expects the sack,
  the lamp, the sword, the lunch, the garlic, the walls, the Management's
  note and the passages, in that order. The axe in the troll's fist is not
  among them, so nothing refuses; a thing a person holds is not one `all`
  takes, which reads right.

### 49. A container in someone's hands cannot pour itself out

- **Wanted:** Zork's SHAKE: an open sack in hand, shaken, spills what is in
  it onto the floor, said by the sack.
- **Found:** a thing in a visitor's hands reaches the visitor and no
  further, since `sprout.Actor` passes nothing, so the sack cannot move its
  contents to the room; and the actor's part of a verb runs before the
  target's, so by the time the sack speaks it is already empty.
- **Wrote instead:** the visitor's own part of `shake` spills an open bag
  and says so, and leaves `:spilled` for the bag's part to read, which says
  "Shaken." only when nothing spilled. A shut one rattles or sounds empty.
- **Spec:** Range; Verbs › The two passes.
- **Status: open.**

### 50. `wake` is a word of the language

- **Wanted:** Zork's WAKE (ALARM) as a verb named `wake`.
- **Found:** "`wake` is a word of the language, so it cannot name a verb."
- **Wrote instead:** the verb is `alarm`, Zork's own name for it, with
  "wake", "wake up", "awaken" and "rouse" among its phrases.
- **Spec:** The compiler › Lexical rules.
- **Status: open** (a naming nuisance only).

## Found in round 4

### 51. A comma does not join two commands

- **Wanted:** Zork's own chaining, where a comma between two commands
  joins them as THEN does: `open trap door, turn on lantern, go down`.
- **Found:** the spec chains on `then`, a full stop, and `and` before a
  verb (sprout#453), and splits a run of things on `and` and commas; a
  comma before a verb is neither. One player in round 4 typed exactly that
  line: the trap door opened, and the rest was answered "You can't see any
  such thing.", as if "turn on lantern" and "go down" were more things to
  open. The answer says something false (the lantern was in hand) and does
  not say the rest went unrun.
- **Wrote instead:** nothing; the world has no say in how a line is split.
  Asked of Sprout: let a comma before a known verb chain as `and` does, or
  answer the unread rest with `unknown` rather than `not_here`.
- **Spec:** Parsing › Sequences, again and all; Verbs › Set roles
  ("Parsing splits on `and` and commas literally").
- **Status: resolved** before round 6 (sprout#471, for sprout#459): a comma
  before a verb, or before a direction, chains as `and` does, and a run of
  things keeps its commas. `open trap door, turn on lantern, go down`, `n,
  n, n` and `take sack, w` each run as Zork runs them (`commas.json`).

### 52. `enter <a way that is not here>` blames the sentence

- **Wanted:** Zork's answer to `enter window` where there is no window:
  "You can't see any window here." The noun is the trouble, not the
  grammar.
- **Found:** `enter window` reads only as `go` by the label of a way out,
  so where no way out is labelled "window" (the Clearing) it is answered
  with `unknown`, "That sentence isn't one I recognize.", while the same
  line at Behind House goes in. That is what the spec says ("Words in
  `go`'s phrases that are neither a direction nor the label of a way out
  that applies are answered with `unknown`"), but it tells a player who
  has just used the sentence that it is not one. A world verb `enter
  [target]` would give `not_here` instead, but at Behind House it would
  tie with the way out labelled "house" against the white house itself,
  and a tie is drawn from the seed, so I did not add one.
- **Wrote instead:** nothing.
- **Spec:** Exits; Parsing › Choosing a reading; Range ("`not_here`").
- **Status: open,** after sprout#472. That change answers `not_here` where
  a phrase an object's synonym gives would read the line with the object
  in reach, and its description says `enter window` in this world's
  Clearing now gets `not_here`. It does not: here `enter` is a phrase of
  `go`, "enter [way]", read by the label of a way out, and no object's
  synonym is involved, so the line is still "That sentence isn't one I
  recognize." (`commas.json` pins it, so a fix will show). An object's
  synonym cannot stand in: `synonyms through: "enter"` on the window
  replaces the word `through` in `through`'s phrases ("climb enter
  [target]"), and gives no "enter [target]". Asked of Sprout still: the
  same `not_here` for a word in `go`'s phrases that is the label of a way
  out somewhere in the world but not here.

## Found before round 5: the Maze and the grating

The Maze west of the Troll Room (fifteen rooms and four dead ends, from
`dungeon.zil`), the dead adventurer's remains in Maze 5, and the Grating
Room under the Clearing, at Sprout 26e6124. What the maze asked of Sprout,
area by area, including what it did not find hard.

### 53. A one-way tunnel cannot say so on the way

- **Wanted:** Zork's MAZE-DIODES. Four of the maze's ways down (Maze 2 to
  Maze 4, Maze 7 to the first Dead End, Maze 9 to Maze 11, Maze 12 to
  Maze 5) are an exit routine that prints "You won't be able to get back
  up to the tunnel you are going through when it gets to the next room."
  and then goes. The words belong to the exit: Maze 5 is also reached
  going down from Maze 6, with nothing said.
- **Found:** an exit is a direction, a label, a destination and a `when`;
  it may refuse with words, and it cannot go with words. The destination's
  `:entered` and the old room's `:left` are queued, so what they tell comes
  after the new room's description. The actor's own part of `go` is read
  before it, but nothing in it says which exit was taken or which room was
  left: by the time its `do` runs, `here` is the new room, the exit role
  cannot be read, a declared room cannot be compared with `==` (43), and no
  property can hold an object.
- **Wrote instead:** every `Room` has a number, `:num` (Zork's MAZE-1 to
  MAZE-15, the dead ends 16 to 19, the Grating Room 20, everything else 0),
  and tells each adventurer who comes in its number from the queue
  (`:spot`). So while the adventurer's part of the next `go` runs, they
  still hold the number of the room they left, and the `do` checks the
  pair (left, arrived) against the four diodes. It reads as Zork's, in
  Zork's order; but four pairs of numbers live in `adventurer.sprout`, far
  from the exits they describe, and the trick leans on the queue's order.
- **Asked of Sprout:** an exit that goes and says something on the way
  (`exit down "down" -> maze_4 saying diode`), or the room left (`from`)
  bound in the actor's part of `go`.
- **Spec:** Exits; Engine verbs (`go`); Object identity; Movement and
  consent › After the move.
- **Status: resolved** before round 6 (sprout#468, for sprout#462): each
  diode is `exit down "down" -> maze_4 say diode`, the `Maze` kind's
  passage. The rooms' numbers, the `:spot` message and the adventurer's
  four pairs are gone. The line comes before the new room, and before the
  adventurer's "You have moved into a dark place." or the grue, as Zork's
  exit routine prints it before GOTO (`diode_dark.json`). The trap door's
  crash is not moved onto the Living Room's way down: Zork prints it after
  the dark line, from the Cellar's M-ENTER, and an exit's line comes
  before.

### 54. A place's name beats a thing's noun, even when the place refuses

- **Wanted:** `x maze` in a maze room to examine its twisty little
  passages, a thing whose nouns include "maze".
- **Found:** the room, named "Maze", wins the reading, and refuses (every
  room refuses to be a target, "You can't see any such thing.", after 8);
  without that refusal it is described instead. Either way the thing that
  answers by its noun loses to the place that holds it, which is the
  opposite of Parsing › Choosing a reading (a reading the consent pass
  allows beats one it refuses) and of Range ("the visitor's own place is
  further than everything it holds ... named only where nothing in it
  answers as well"). A minimal world shows it: a `Room is sprout.Place`
  with `as target for any { permit { refuse "No such thing." } }`, one room
  `maze` named "Maze" holding a `sprout.Fixture` named "passages" with
  `nouns "maze"`; `x maze` reads "No such thing.", `x passages` the
  fixture. This looks like a Sprout bug.
- **Wrote instead:** the passages have no noun "maze", so `x maze` answers
  "You can't see any such thing.", which is what Zork says (it has no
  maze object).
- **Spec:** Parsing › Choosing a reading; Range; Names › Addressing and
  display.
- **Status: resolved** before round 6 (sprout#470, for sprout#461): an
  allowed reading beats a refused one whatever names the other in full.
  The passages answer to "maze" again, and `x maze` describes them
  (`maze.json`).

### 55. Rooms all alike, written once

- **Wanted:** Zork's maze is twenty rooms whose descriptions are one
  sentence, "This is part of a maze of twisty little passages, all
  alike." (or "You have come to a dead end in the maze."), and whose ways
  out are each their own.
- **Found:** this is what kinds are for, and it worked. `kind Maze is
  DarkRoom` and `kind DeadEnd is DarkRoom` give a room its name, its
  description, its dark and its passages; Maze 5 replaces the description
  (a `default` passage) with Zork's, which adds the skeleton. Exits do not
  compose, so every room writes its own, which is right for a maze, since
  no two rooms have the same ways out. Two costs: every room holds its
  own copy of the kind's passages and of the surrounding wall (16), forty
  objects for one idea; and a room cannot refine the copy its kind gives
  it (35), so the dead ends' "dead end" is a third object of the `DeadEnd`
  kind rather than a line on the passages.
- **Spec:** Kinds, composition and libraries › How members combine;
  Exits.
- **Status: works,** with the costs noted.

### 56. What the maze did not find hard

- **One-way exits.** An exit is one-way by nature: Maze 1's south goes to
  Maze 2 and Maze 2's north goes nowhere, as in Zork. Only the diodes'
  words were hard (53).
- **Loops.** An exit to its own room (Maze 1 north, Maze 6 west, Maze 8
  west, Maze 9 northwest, Maze 14 northwest) is a move into the place the
  visitor is in, and it works: the room is described again, briefly.
- **Marking rooms by dropping things.** A thing dropped in a maze room is
  listed when the visitor comes back ("There is a burned-out lantern
  here."), in BRIEF as in VERBOSE, so rooms all alike can be told apart by
  what has been left in them; in the dark, nothing shows, as in Zork.
  `maze.json` tests it.
- **The static caps.** The busiest room, Maze 9, has six ways out; the
  Grating Room's refused way up is not counted. No cap was near.
- **Darkness and the grue.** The maze is dark, and every rule the Cellar
  and the Attic follow holds in it: the dark place, the warning, nothing
  named but what is carried, the grue from dark to dark (`maze_dark.json`).
- **Spec:** Exits; Limits › Static caps; Range › Sight.
- **Status: works.**

### 57. One grating in two rooms, again

- **Wanted:** Zork's GRATE is one object in LOCAL-GLOBALS, seen from the
  Clearing and from the Grating Room, with one lock (GRUNLOCK) and one
  lid.
- **Found:** as with the window and the trap door (16), it is two objects
  kept in step by messages the world passes (`:grate_unlock`,
  `:grate_open`, `:grate_revealed`). Two things were new. The Clearing's
  grating lies inside the ground, which passes nothing until the leaves
  are moved, so the ground needs pass rules of its own for the grating's
  news while it hides the grating from every name. And a `broadcast` goes
  out and in from its sender but never back to it, so each side writes its
  own state and broadcasts it besides. The leaves that fall through the
  grating when it is first opened from below are in the Clearing, out of
  range; the grating asks the world to open its gate (6) to bring them
  down.
- **Spec:** The world model; Range; Events, messages and the bus › Sending;
  Containers route.
- **Status: open,** as 16.

### 58. A lock cannot see the key in the hand that turns it

- **Wanted:** Zork's `unlock grating`, with the skeleton key carried and no
  tool named: "(with the skeleton key)" and "The grate is unlocked.", the
  parser finding the tool.
- **Found:** the grating's part of `unlock` cannot count what the actor
  carries, since `sprout.Actor` passes nothing (33), and the parser never
  supplies a missing tool (32).
- **Wrote instead:** the adventurer counts the skeleton keys in hand
  (`:keys`, kept on `:entered` and `:left`) and the grating reads that
  count off the actor, which it can see.
- **Spec:** Range ("what another visitor carries is out of range");
  Parsing › Choosing a reading; Verbs › Optional tools.
- **Status: open.**

### 59. Two lanterns, and the parser cannot ask which

- **Wanted:** Zork's "Which lantern do you mean, the brass lantern or the
  burned-out lantern?" where both are in reach.
- **Found:** the parser never asks (32). Where both readings are allowed
  it takes the nearer, so `take lamp` in Maze 5 with the brass lantern in
  hand is "You already have that!"; where they tie it draws, and says which
  it meant.
- **Wrote instead:** the burned-out lantern refuses `turn on` in its
  `permit`, so `turn on lamp` always means the brass one. Its own
  adjectives (`useless`, `burned-out`, `rusty`, `dead`) name it outright.
- **Round 5:** the same gap cost a player a turn and nearly the treasure:
  `take bag` in Maze 5 with the brown sack in hand ("bag" is Zork's word
  for both) was "You already have that!", the sack being nearer. Zork's
  TAKE syntax looks on the ground and in the room first, so it takes the
  coins. Sprout has no way for a verb to say which things it prefers.
- **Wrote instead, after round 5:** the adventurer's part of `take`
  refuses, in its `permit`, a reading of one thing already held, with
  Zork's "You already have that!"; a reading that is allowed beats one
  that is refused, so `take bag` takes the coins and `take lamp` the
  burned-out lantern (`take_which.json`). What is lost: the refusal now
  counts no move (23), where Zork counts it. Asked of Sprout still: a way
  for a role to prefer what is not carried (Zork's ON-GROUND IN-ROOM), or
  for the parser to ask.
- **Spec:** Parsing › Choosing a reading; Verbs › Carried roles.
- **Status: changed** before round 6. sprout#470 (for sprout#463) made rule
  1 hold even against a reading that names its thing in full; it asked
  whether the studio's refusal is in a `permit`. It is, so the adventurer's
  refusal is the spec's own way to say "not what is in hand", not a
  workaround, and it stays; `take_which.json` passes unchanged at 6c440f5.
  Still open: the parser does not ask, and the refusal counts no move.

### 60. The ghost cannot take what the visitor carries

- **Wanted:** Zork's SKELETON: touch the remains and a ghost banishes the
  visitor's valuables, and the room's, to the Land of the Living Dead
  (ROB).
- **Found:** the skeleton cannot take things out of the visitor's hands
  (`sprout.Actor` releases only to the actor itself), and the Land of the
  Living Dead is out of range.
- **Wrote instead:** the skeleton sends the visitor `:banish`; the
  visitor opens the world's gate (6) and moves their own treasures, and
  those on the floor of Maze 5, named by its path
  (`underground_caverns.maze_5`, 27), to the Land. The words are the
  skeleton's and Zork's.
- **Spec:** Movement and consent › The three roles; Range.
- **Status: open,** as 6.

### 61. The rusty knife cannot vanish

- **Wanted:** Zork's RUSTY-KNIFE-FCN: turned on anything, the knife slits
  its bearer's throat and is gone (REMOVE-CAREFULLY).
- **Found:** destroying a declared object is warned against, and it would
  never come back (26).
- **Wrote instead:** the knife marks itself spent, and the death that
  follows sends a spent knife to the Land of the Living Dead instead of
  scattering it.
- **Spec:** The world model › Destroying.
- **Status: open,** as 26.

### 62. `examine all` reaches only what answers `examine` itself

- **Found:** in a maze room `examine all` answers "You can't see any such
  thing.", and in the Troll Room after the fight it examines only the axe.
  `all` takes "every thing in reach whose kind plays a part in the verb",
  and in this world only the troll's axe plays a part in `examine`. That is
  the spec. Zork itself refuses the line ("You can't use multiple direct
  objects with "examine"."), so nothing is lost but a surprise.
- **Spec:** Parsing › Sequences, again and all.
- **Status: resolved** before round 6 (sprout#474): `examine all` takes
  every thing in reach that is not a person, whatever plays `examine`.

## Found in round 5

### 63. A trailing `here` is read as a thing

- **Wanted:** Zork's `drop the leaflet here`, which drops the leaflet.
- **Found:** a player with the leaflet in hand typed exactly that and was
  answered "You can't see any such thing.": `here` was read as part of the
  noun, and the noun named nothing in reach, so the line fell to
  `not_here`, which says something false (the leaflet was right there).
  The same line without `here` worked two turns later. `on the ground` and
  `on the floor` after `drop` would go the same way.
- **Wrote instead:** nothing; the world has no say in how a noun is read,
  and a world phrase `drop [target] here` would only move the problem to
  `put`, `throw` and the rest. Asked of Sprout: let a trailing `here` (and
  `on the ground`, `on the floor`) after a verb's last role be dropped as
  articles are, or answer the line with `unknown` rather than `not_here`.
  An engine bug to file with Sprout.
- **Spec:** Parsing › Matching a line (Articles); When nothing matches.
- **Status: resolved** before round 6 (sprout#473, for sprout#464), by
  phrases rather than by the parser: the standard library's `drop` writes
  `drop [target] here`, `put down [target] here` and `put [target] down
  here`. This world's `drop` replaces the library's, so it writes the same
  three (66). `drop the leaflet here` drops it (`commas.json`); `on the
  floor` and `on the ground` are still not read, as Sprout decided.

### 64. `troll, hello` is not a sentence

- **Wanted:** Zork's way of speaking to an actor, `<actor>, <command>`:
  `troll, hello`, `troll, give me the axe`, each answered by the actor (the
  troll's own TROLL-FCN answers "The troll isn't much of a
  conversationalist."). One player tried it before and after disarming the
  troll.
- **Found:** a comma joins nothing in Sprout's parser (51), and there is
  no addressing form: `troll, hello` is answered "That sentence isn't one I
  recognize.", while `hello troll` works. A world verb cannot write a
  phrase that begins with a role and a comma as a way of addressing,
  because what follows is a whole command, not a role.
- **Wrote instead:** nothing; `hello troll`, `talk to troll` and `ask
  troll` all answer in the troll's words.
- **Spec:** Parsing › Sequences, again and all; Verbs (phrases); Actors
  and visitors.
- **Status: decided** before round 6 (sprout#471, for sprout#465): a line
  has no addressee. `troll, hello` is read as the command `troll` and then
  `hello`, and since nothing reads `troll` alone the line is `unknown`.
  Kept as Sprout decided; `commas.json` pins it beside `hello troll`.

### 65. A staircase climbed by name cannot take its own exit

- **Wanted:** Zork's V-CLIMB-UP and V-CLIMB-DOWN: `climb up the stairs`
  is DO-WALK UP, the same walk as `up`, with everything a walk brings (the
  dark, the trap door crashing shut, the grue).
- **Found:** `go` is the only way along an exit, and only a visitor's
  typed line names one; `act go` is refused, and a visitor's handler
  cannot act anyway. A world synonym (`synonyms go: "climb down"`) would
  read `climb down stairs` as the attic's way labelled "stairs", but it
  ties with `climb_down` on the stairs themselves, and a tie is drawn
  (52). So two players who typed `go down the stairs` and `climb down the
  chimney` were told "You can't do that!".
- **Wrote instead:** each room's stairs (the kitchen's, the attic's, the
  living room's and, new, the cellar's, Zork's global STAIRS) answers
  `climb_up` and `climb_down` with Zork's "The stairs don't lead
  upward/downward." the wrong way, and the right way sends the visitor
  through the world's gate (6) to where the exit leads. The gate's move is
  not `go`, so the adventurer says again what `go` would: "You have moved
  into a dark place." and the crash of the trap door. Two copies of one
  walk, to keep in step by hand.
- **Spec:** Actors and visitors › Acting ("`act go` is refused"); Exits;
  Parsing › Choosing a reading.
- **Status: open.**

## Found in the port to 6c440f5

### 66. A world's verb that replaces the library's keeps none of its phrases

- **Wanted:** `drop the leaflet here` dropping it, now that the standard
  library reads it (sprout#473).
- **Found:** this world writes its own `drop` (several things at once,
  Zork's words), which replaces the library's whole, phrases and all, so
  the library's new `here` phrases never reached it and the line was still
  `not_here`. That is the spec (a world's verb of a library verb's name
  replaces it), but a fix made in the library's phrases misses every world
  that replaced the verb, silently.
- **Wrote instead:** the same three phrases in the world's `drop`, which
  brings it to eight, the cap.
- **Spec:** Kinds, composition and libraries; Verbs (phrases); Limits
  (eight phrases a verb, 34).
- **Status: open,** noted.

### 67. What the troll cannot see, he cannot say

- **Wanted:** every line of the troll's blow told by him (45).
- **Found:** one of Zork's blow results, the stagger, costs the visitor
  their weapon one time in four, and its line names the weapon. The troll
  cannot count what is in the visitor's hands: `count` sees only what is
  in range of the one asking, and `sprout.Actor` passes nothing (33).
- **Wrote instead:** the troll decides the stagger; the visitor decides
  whether it disarms them, and tells that line, or the stagger's, itself.
- **Spec:** Range; Properties and values (`count` "a container counts only
  contents in range of `self`").
- **Status: open,** as 33.

## Found in round 6

### 68. A known verb before a preposition it does not take reads the rest as a name

- **Wanted:** `squeeze through the window` (the window just opened), `climb
  down into the chasm` (standing at its edge), `walk around to the back of
  the house`, each read as Zork's parser would read it, or at worst told
  that the sentence is not understood.
- **Found:** `squeeze [target]`, `climb down [target]` and `walk around
  [target]` match, with "through the window", "into the chasm" and "to the
  back of the house" as the name; that names nothing in reach, so the line
  is `not_here`, "You can't see any such thing.", about a thing in plain
  sight. That is the spec (a line that names nothing in reach is
  `not_here`), but to a player it reads as the world pretending not to
  see. Two players met it four times in round 6.
- **Wrote instead:** three intents, `squeeze_through` (to THROUGH),
  `climb_into` (to CLIMB DOWN) and `walk_around_to` (to WALK AROUND), for
  the phrasings players used. Every other verb-and-preposition a player
  might try still falls to `not_here`. Asked of Sprout: where a verb's
  phrase matches only by taking a leading preposition into a name that
  then names nothing, answer `unknown` rather than `not_here`.
- **Spec:** Parsing › Matching a line; When nothing matches.
- **Status: open.**

### 69. `except` takes one thing, and `but` is not `except`

- **Wanted:** at the chimney, which takes the visitor, the lamp and one
  thing more, `drop all but the painting and the lamp` (or `except`), as
  Zork's parser reads ALL BUT and ALL EXCEPT with a list. Two players
  dropped five and seven things one at a time instead.
- **Found:** `drop all except sack` works; `drop all except sack and
  bottle` and `drop everything except the sack and the bottle` are
  `not_here`; `drop all but sack` is `unknown`. The spec's `except` leaves
  things out "by kind or by name", one name, and `but` is not one of the
  parser's words; a world cannot add it, since `all` and `except` are the
  parser's own.
- **Wrote instead:** nothing; the chimney's rule is kept, and `drop all
  except <one thing>` is what a player can type.
- **Spec:** Parsing › Sequences, again and all.
- **Status: open.**

## Found before round 7: east of the Troll Room

Building v4 (the East-West Passage to the Altar) against Sprout 6c440f5.
What the new language did well first: the one-way and refusing exits are
plain `exit … refuse`, with Zork's own words ("You cannot go down without
fracturing many bones.", "It is too narrow for most insects.", "Are you out
of your mind?"); the Loud Room's ways that are not ways out are refusing
exits under a `when`; `cancel wakes` gives the candles a clock they can put
off; and the gold coffin is `Box, Treasure` with the diamond on `Portable`
contributing once, as the spec says. No NPC is new in v4.

### 70. The Loud Room cannot hear what was typed, nor catch every command

- **Wanted:** Zork's LOUD-ROOM-FCN. Until the visitor says "echo", the room
  takes over the parser: every line but a way out (west, east, up), "echo"
  and the game's own commands is answered by V-ECHO, which prints the
  line's last word twice and "...": `take the platinum bar` is "bar bar
  ...", `look` is "look look ...", `xyzzy` is "xyzzy xyzzy ...", and a line
  the parser would not even read is echoed too.
- **Found:** two things. (a) A world cannot read the words a visitor typed:
  a role binds an object, an option of an enum or an integer, never text
  (Value roles), and a line no phrase reads never reaches the world at all
  (`unknown`). (b) There is no "before every reading in this place": a
  place can refuse only where it is a reading's target, and the wildcards
  are `as target for any` and `as tool for any`, with no `as actor for any`
  (Roles compose).
- **Wrote instead:** the echo is of what the command was about. `Thing`
  carries `as target for any` and `as tool for any` permits that refuse with
  `{self.short} {self.short} ...` while the visitor's place is
  `:deafening` (the bar writes its own, "bar bar ...", Zork's word for it);
  every verb the visitor plays with no target (look, inventory, wait, help,
  score, diagnose, jump, pray, xyzzy and fifteen more) carries the same
  permit with its own word; and the Loud Room writes nine refusing exits,
  "north north ..." and the rest, under `when (self.get(:deafening))`, for
  the directions that are not ways out. `echo` (or `say echo`) sends the
  room `:hush`. What is lost: the echo is of the thing's name, not the
  word typed ("brass lantern brass lantern ..."); a line the parser cannot
  read is "That sentence isn't one I recognize."; the echo begins with a
  capital (17), "Bar bar ...", where Zork's is lower-case; and every new
  targetless verb must remember to carry the permit. Asked of Sprout: an
  `as actor for any` permit, or a place's permit over every reading made in
  it, would be one line where this is twenty-five.
- **Spec:** Verbs › Value roles; Verbs › Roles compose; Parsing › When
  nothing matches; Prose › Passages (capitals).
- **Status: open.**

### 71. A room cannot throw its visitor out after a command

- **Wanted:** Zork's Loud Room with the dam's gates open (M-END): after each
  command in the room, "It is unbearably loud here, with an ear-splitting
  roar seeming to come from all around you. ... With a tremendous effort,
  you scramble out of the room.", and the visitor is put in the Damp Cave,
  the Round Room or the Deep Canyon, at random.
- **Found:** the dam is not built (v6), so its gates are shut and Zork's
  room, in that state, only echoes (70); this is what the throw-out will
  need. A place has no part that runs after every reading made in it:
  `:tick` is ambience on the host's clock, not once a command, and a
  place's `on :entered` runs on arrival, not after what is done there. The
  move itself is possible, through the world's gate (6), as a death is.
- **Wrote instead:** nothing yet: the v4 Loud Room is Zork's with the gates
  shut, and its noise drives the visitor out in the sense that nothing but
  a way out (or "echo") works in it. When the dam arrives, the throw-out
  will have to hang off the visitor's own part of every verb they play,
  as the move count does (23), behind a `:roaring` the dam keeps.
- **Spec:** Time › Ticks; Verbs › The two passes; Range.
- **Status: changed** before round 11 (v6). The dam is built, and the
  throw-out does not need a part that runs after every command after all:
  a visitor can only be in the Loud Room while it roars by walking in, or
  by being there when the water changes. So the room's own `:entered`
  sends the visitor `:flung` when the gates are open and the water high,
  and its `changed :tide` does when the gates open with somebody inside,
  or the drained reservoir fills again (I-RFILL's "All of a sudden...");
  the visitor goes through the world's gate to the Damp Cave, the Round
  Room or the Deep Canyon. What is lost is 100.

### 72. The hole in the Altar cannot see the coffin in the hand

- **Wanted:** Zork's SOUTH-TEMPLE-FCN and its `DOWN TO TINY-CAVE IF
  COFFIN-CURE ELSE "You haven't a prayer of getting the coffin down
  there."`: the way down refuses whoever carries the coffin.
- **Found:** an exit's `when` has no actor (42), and in a refusing exit's
  words, where the manual says `actor` may be used, `actor.count(Coffin)`
  reads 0 while the visitor holds the coffin: `count` sees only what is in
  range of the place asking, and `sprout.Actor` passes nothing (33, 67).
  The compiler accepts it, and it is quietly wrong. A repro of seven lines
  shows it: a place whose refusing exit says `{actor.count(Coffin)}` says 0
  with a coffin in hand.
- **Wrote instead:** the visitor counts the coffins in hand (`:coffins`,
  kept on `:entered` and `:left`, as `:keys` is for the grating, 58), and
  the Altar's refusal reads that off the actor, after narrowing it, in a
  passage that says Zork's line or, without the coffin, the way to Hades's
  own refusal.
- **Spec:** Exits (refusal words, `actor`); Range; Properties and values
  (`count`).
- **Status: open.**

### 73. A held light cannot tell its holder it is going out

- **Wanted:** Zork's I-CANDLES and LIGHT-INT: the candles in hand burn down
  and say so, "The candles grow shorter.", "The candles are becoming quite
  short.", "The candles won't last long now.", and at last "You'd better
  have more light than from the pair of candles.", and the hand holding
  them has a light fewer.
- **Found:** the candles' wake runs while they are in a pocket, and a
  pocket passes nothing (`sprout.Actor`'s `pass any (false)`), so neither
  their `tell` nor a `broadcast` reaches anyone, not even the one holding
  them: a container receives a broadcast from inside only if it passes it
  (Containers route, rule 2).
- **Wrote instead:** the adventurer passes `:candle_burn` and `:snuffed`
  (`pass :candle_burn (true)` beside the library's `pass any (false)`); the
  candles broadcast their stage, and every adventurer who hears it (the
  holder, or anyone standing by them on the floor) tells themselves Zork's
  line; `:snuffed` takes the light out of the holder's count. The burning
  down is a wake per stage (20, 10 and 5 minutes and 150 seconds, Zork's
  40, 20, 10 and 5 turns at the studio's 30 seconds a turn), and putting
  them out is `cancel wakes`. What is lost: turns are time here (24), so a
  visitor who waits burns them faster than one who acts.
- **Spec:** Events › Containers route; Other people › Who hears it; Time ›
  Wakes.
- **Status: open.**

### 74. The rope: one rope in two rooms, and a climb that is not a walk

- **Wanted:** Zork's ROPE-FUNCTION, DOME-ROOM-FCN and TORCH-ROOM-FCN: `tie
  rope to railing` in the Dome Room drops the rope over the side and opens
  the way down; the rope cannot then be taken, can be untied, and if let go
  of untied it falls to the Torch Room floor; `climb down rope` is the walk
  down; in the Torch Room the end hangs out of reach, and is in both rooms'
  descriptions.
- **Found:** (a) the rope's own part of `tie` cannot take itself out of the
  visitor's hand (`sprout.Actor` releases only to the actor), so the
  visitor's part moves it to the floor first, and the Dome's `:entered`,
  which drops an untied rope over the edge, has to read the rope's own
  `:tied`, written in its part after the move, to tell a tie from a drop.
  (b) The tied state is kept in four places (the rope, the Dome, the Torch
  Room and the Torch Room's dome), in step by a broadcast the world passes,
  as the grating is (57). (c) The rope's end in the Torch Room is a thing
  of its own, hidden in the dome by a pass rule that opens while the rope is
  tied, as the grating under the leaves is. (d) `climb down rope` cannot
  take the Dome's exit (65), so it goes through the world's gate (6), and
  says "You have moved into a dark place." itself; the exit is labelled
  "rope", so `climb rope` and `go rope` take the real exit. (e) An untied
  rope let go of falls through the gate, as a thing dropped Up a Tree does.
- **Wrote instead:** all of the above. It works; it is a puzzle written in
  four files.
- **Spec:** Movement and consent › The three roles; Exits; Actors and
  visitors › Acting; Range.
- **Status: open.**

### 75. Weight is the world's to keep, and a box weighs only itself

- **Wanted:** Zork's load: a visitor carries 100 by weight, the gold coffin
  weighs 55 and the sceptre inside it 3 more (WEIGHT counts what a
  container holds), and every way into the hands, `take`, `take all`, and
  the implicit take of `read`, says "Your load is too heavy." when it is.
- **Found:** Sprout counts things, not weight: `sprout.Actor`'s
  `:capacity` is how many. Weight is a property the world declares and
  keeps (`:size`, and the adventurer's `:load` on `:entered` and `:left`),
  and each way into the hands checks it for itself. A container's contents
  move with it without the holder hearing of them, so the load would have
  to walk every box in hand on every move to count them.
- **Wrote instead:** the load counts each thing's own size; the coffin
  weighs 55 with or without the sceptre. `read`'s implicit take now checks
  the load in its `permit` (the black book in an overloaded hand: "Your
  load is too heavy."), where until v4 it took whatever it read.
- **Spec:** Actors and visitors (capacity); Movement and consent › The
  three roles.
- **Status: open.**

### 76. A prayer that moves the visitor

- **Wanted:** Zork's V-PRAY: at the Altar, `pray` and the visitor is in the
  Forest (GOTO FOREST-1), carrying everything, the coffin included.
- **Found:** the Forest is out of the Altar's range, and no exit joins them;
  a verb's `do` cannot move its actor across the map (6).
- **Wrote instead:** the visitor's part of `pray` sends itself through the
  world's gate with `:prayed`, as a death does, without the scattering. The
  move says nothing of its own, and the Forest's description follows, as
  Zork's GOTO prints it.
- **Spec:** Range; Actors and visitors › Acting.
- **Status: open,** as 6.

### 77. Burned, vaporized, or dropped into the chasm

- **Wanted:** Zork's REMOVE-CAREFULLY: a thing burned with the torch, the
  candles vaporized by it, the black book burned (and its burner turned to
  dust), and anything put or thrown into the chasm, gone for good.
- **Found:** these are declared things, and `destroy self` on a declared
  thing is warned (26). A thing moved into a container that passes nothing
  cannot tell its old holder it has gone (the lamp put into the chasm would
  leave its bearer's light count at one), so the chasm passes as any open
  box does, and the thing destroys itself at the end of the turn.
- **Wrote instead:** `Thing` ends itself with `finally destroy self` on
  `:consume` and on being moved into an `Abyss`; `sprout check` warns twice
  more for it. East of Chasm's chasm is the same `Abyss` now.
- **Spec:** The world model › Destroying; Events › Containers route.
- **Status: open,** as 26.

## Found in round 7

### 68, again: trailing words that name nothing read as a missing thing

- **Round 7:** three players met it a dozen times, and read it as the world
  saying a thing was absent: `open the mailbox and see what's inside`
  (the first command opens the mailbox, the rest is "You can't see any such
  thing."), `pull the rug out of the way` (the newcomer guessed the parser
  was looking for a thing called "way"), `tell the troll I won't hurt him
  if he lets me pass`, `pull the board off`, `go south through the
  crawlway`, `go west into the hole`, `crawl south`.
- **Wrote instead:** a `shift_aside` intent (`move/push/pull [x] aside`,
  `... out of the way`, `pull [x] off`); `crawl` as a world synonym of
  `go`; `go through [x]` beside `squeeze through`. Not written: `go
  <direction> through <thing>`, which wants a slot that names the thing
  gone through and gives it no role (79).
- **Asked of Sprout, again:** where a phrase matches only by swallowing
  words that name nothing in reach, answer `unknown`, or name the word that
  could not be placed, rather than `not_here`.

### 69, again: `drop everything except the lantern and the painting`

- **Round 7:** the newcomer, at the chimney, typed a list after `except`
  and was told "You can't see any such thing." As 69.

### 70, again: the echo is of the word the parser settled on

- **Round 7:** three players noticed that `shout` comes back as "Yell yell
  ..." and `examine stairway` as "Stairs stairs ...": the permit can say
  only the verb's own name or the thing's short name, never the word typed.
  Zork's V-ECHO says the line's last word as typed. One player named it as
  the one place the room did not seem to hear them.
- **Asked of Sprout:** a handler's access to the raw last word of the
  command (or the whole line), read-only, for exactly this; with it the
  twenty-five permits would also go.

### 75, again: naming the heaviest thing carried

- **Wanted:** "Your load is too heavy" to say which of what is carried
  weighs the most, so a player knows what to put down.
- **Found:** a passage does no arithmetic and cannot pick a largest; a
  handler's own writes hold still within its body, so a loop cannot keep a
  running maximum to read back.
- **Wrote instead:** a passage that names the first of the heavy kinds in
  hand, in order of Zork's weights: the coffin (55), the sword (30), the
  axe and the leaves (25), the torch (20); otherwise the plain line.
- **Spec:** Prose › Slots; Events (a body's own state holds still).
- **Status: open,** as 75.

### 78. A refusal inside `each` faults on the loop's own name

- **Wanted:** Zork's PRE-TAKE for TAKE ... FROM: "The sword isn't in the
  gold coffin.", named, from the visitor's `permit` on `take`, whose
  target is a set role walked with `each t of target`.
- **Found:** `each t of target { if (...) { refuse "The {t.short} isn't
  in the {source.short}." } }` compiles, and at run time faults: "`t`,
  which nothing binds, reached the evaluator, which the checker refuses."
  The refusal's words are rendered after the loop has let go of its name.
  The checker and the runtime disagree, so it is Sprout's bug.
- **Wrote instead:** "That isn't in the gold coffin.", which names nothing
  bound by the loop.
- **Spec:** Verbs › The two passes; Prose › Slots; Walking contents.
- **Status: open,** for an issue in Sprout.

### 79. An intent's slot must be given a role, even one nothing needs

- **Wanted:** `go south through the crawlway`, `go west into the hole`:
  an intent whose phrases name the way (`[d]`) and the thing gone through
  (`[x]`), and whose one step is `go (exit: d)`.
- **Found:** every slot a phrase names must be given to a role in some
  step ("names `x`, and no step gives it a role"). `go`'s one role is the
  exit, so there is nowhere to put the thing. For `take X from Y` the same
  rule was met by giving `take` a role of its own, `source`, that only its
  new phrases fill; the engine's `go` cannot be given one.
- **Wrote instead:** nothing for `go <direction> through <thing>`; the
  plain direction works, and `go through <thing>` is THROUGH.
- **Spec:** Parsing › Intents; Exits.
- **Status: open.**

### 80. Comparing `here` to a room out of range faults

- **Wanted:** `look down`, answered by where the visitor stands: `if (here
  == chasm_room || here == east_of_chasm)`.
- **Found:** compiled, and at run time, anywhere but the Chasm, faulted
  with NameOutOfRange: reading `chasm_room` to compare it is reading it,
  and from the Dome it is out of range. Identity against an out-of-range
  object might have been simply false.
- **Wrote instead:** marker kinds, `ChasmEdge` and `CanyonEdge`, on the
  rooms, and `here.is(...)`, as `Perilous` already is.
- **Spec:** Range; Object identity.
- **Status: open,** a question for Sprout rather than a bug: the spec's
  range rule is what faulted.

## Found in round 8

### 11, again: `take the candles and the book`, the book already held

- **Round 8:** the newcomer, holding the book, typed `take the candles and
  the book` and was answered for the candles alone. `take book` by itself
  says "You already have that!".
- **Found:** as 11: `all` and a list of names arrive alike in a set role,
  so the world cannot both leave held things out of `take all`, as Zork's
  does, and name a held thing listed on purpose.
- **Wrote instead:** nothing new; what is held is still left out of any
  list that holds something else.
- **Asked of Sprout:** a way for a set role's handler to tell `all` from a
  list of names.

### 68, again: `move the rocks in the south passage`

- **Round 8:** the rocks are a name in the Round Room, and `move the rocks`
  is answered; `move the rocks in the south passage` is "You can't see any
  such thing.", since the trailing words name nothing and are read as part
  of the name. As 68.

### 70, again: what does not parse cannot be echoed

- **Round 8:** in the Loud Room, `be quiet` and other lines the parser
  cannot place get "That sentence isn't one I recognize.", where Zork's
  LOUD-ROOM-FCN echoes any input at all. A deafening room hears only what
  parses. `what am I carrying` now parses (an intent for `inventory`).
- **Asked of Sprout:** as 70, the raw line, and a place's say in the
  `unknown` answer while someone is in it.

### 81. The grue cannot be named in the dark

- **Wanted:** Zork's global GRUE: `examine grue`, `listen to grue`, and
  `find grue` answered anywhere, in the dark above all.
- **Found:** every room now holds a grue, as it holds the wall (Sprout has
  no object that is everywhere), and it answers in any lit room. In a dark
  room a visitor can name only what they carry, so where the warning about
  the grue is printed, `examine grue` is "You can't see any such thing."
- **Wrote instead:** the grue in every room, answering where there is
  light; in the dark, the engine's `not_here`.
- **Spec:** Light and darkness; Range (what a visitor in the dark may name).
- **Status: open.** A thing that may be named in the dark (a flag on the
  kind, as `ndesc` is a world's own) would serve the grue, the wall and the
  walls' sounds alike.

### 82. An intent's slot cannot hold a way out

- **Wanted:** `go back east`, `head back up the stairs`: an intent `"go
  back [d]"` whose step is `go (way: d)`.
- **Found:** "`way` of `go` takes a way out, and a slot of an intent holds
  a thing." The engine's `go` can be reached by its own phrases only.
- **Wrote instead:** `go back up [x]` and `go back down [x]` (and `climb`,
  `head`) as CLIMB UP and CLIMB DOWN of a thing, which covers the stairs,
  the chimney and the trap door's staircase; `go back <direction>` is still
  not understood.
- **Spec:** Parsing › Intents; Exits.
- **Status: open,** beside 79.

## Found before round 9: the thief and the Cyclops

v5 adds Zork's thief and its Cyclops, both NPCs composing `sprout.Actor`,
with the troll three in one world. The thief is written from ROBBER-FUNCTION,
I-THIEF, THIEF-VS-ADVENTURER, ROB, ROB-MAZE, STEAL-JUNK, DROP-JUNK,
DEPOSIT-BOOTY, THIEF-IN-TREASURE, TREASURE-ROOM-FCN and the melee; the
Cyclops from CYCLOPS-FCN, I-CYCLOPS, CYCLOPS-ROOM-FCN and V-ODYSSEUS. What the
model let me say plainly: his blows are his own acts, told to the one they
fall on with `tell target` (sprout#456), and the visitor's own part does
what they do; his clock is wakes he asks for, put off with `cancel wakes`
(sprout#458); the Cyclops guards the stairs through the room's own exit,
which reads the room's own note of him (sprout#457). What it would not let
me say is below.

### 83. An NPC in a handler does not know where it is

- **Wanted:** Zork's I-THIEF: each move, the thief looks at the room he is
  in (is the visitor here? is it dark? has anyone been here? what lies on
  the floor?), acts on it, and moves on to the next room.
- **Found:** `here` is bound only where somebody is acting (Prose; The
  compiler, What it refuses), and an NPC acts in wakes and handlers, so in
  every turn of his own the thief cannot name the place he stands in. A
  property cannot hold an object, so he cannot keep it either (Properties,
  types and values; Object identity).
- **Wrote instead:** each turn he broadcasts `:prowl`; his own place hears
  it (the room passes it to him and his neighbours, and the world does
  not let it further), and every room answers a thief with `:survey`, in
  whose handler `from` is his room. His whole turn is written inside that
  one handler, against `from`. It works, and it costs a message round trip
  every turn and a phase flag to say which part of his turn a survey
  answers.
- **Spec:** Prose (`actor` and `here` are bound only where someone is
  acting); Acting; Events › Receiving ("A sender binding is live for the
  length of the handler and cannot be stored").
- **Status: open.**

### 84. An NPC cannot walk the map on its own

- **Wanted:** the thief moving himself from room to room. (Zork's thief
  does not walk exits at all: I-THIEF moves him to the next room in the
  ROOMS list that is on land and not sacred, wherever on the map it is.)
- **Found:** an NPC may `move self to` a place that is an exit's
  destination from his own place, or in his range (Acting). He cannot name
  "where an exit of this room leads", nor pick one of his room's exits at
  random: a `move` names its destination statically. With 83, he does not
  even know which room's exits to choose from.
- **Wrote instead:** each room in his round keeps its index (`:tour`, 1 to
  39, in `1dungeon.zil`'s order, leaving out the house, above ground and
  the two temple rooms Zork holds sacred). The thief keeps the index of
  the room he is in (`:at`, read from his survey), and goes to the next by
  the world's gate (the same gate the deaths and the prayer use) and a
  39-branch `if` that names every room. Faithful to Zork, which teleports
  him, but every new room in later versions must be added to the chain.
- **Spec:** Acting ("It changes place with `move self to <place>`…");
  Moving something; Exits.
- **Status: open.** A way to move along "this exit" (the exit as a value,
  as friction 82 also wants for an intent's slot) would let an NPC walk;
  a place-valued binding for "where I am" (83) would let him choose.

### 85. An unseen actor is announced as he comes and goes

- **Wanted:** Zork's INVISIBLE thief: in the room, robbing it, and not
  there to be seen, named, or noticed arriving.
- **Found:** an actor's move is announced by the engine to every visitor
  in range, `arrives` and `leaves`, and an actor in a room is in range and
  nameable. Sprout has no unseen object.
- **Wrote instead:** the rooms' `arrives` and `leaves` passages say nothing
  of a thief; he is `:ndesc` while unseen, so the room does not list him;
  his pass rule is his `:shown`, so his stiletto is out of reach; and
  wildcard permits (`as target for any`, `as tool for any`) refuse
  anything aimed at him while unseen in the world's own `not_here` words.
  To a visitor he is not there. Writing invisibility took four mechanisms,
  each of which a later verb or kind could forget.
- **Spec:** The world model › Places (the arrival and departure notices);
  Range; Roles compose (wildcards).
- **Status: open.**

### 86. Taking from a person's hands, and knowing what is in them

- **Wanted:** Zork's ROB of the WINNER: the thief takes every treasure the
  visitor carries; and THIEF-VS-ADVENTURER's choice, to rob the room, or,
  finding nothing on its floor, the visitor, with a line for each outcome
  ("robbed you blind first", or "finding nothing of value, left
  disgusted"); STOLE-LIGHT?'s "The thief seems to have left you in the
  dark."
- **Found:** a person's hands release only to their own move
  (`sprout.Actor`'s `release`), and what they hold is out of everyone
  else's range, so the thief can neither take nor count it. The same wall
  keeps the Cyclops from seeing the water in a bottle a visitor hands him.
- **Wrote instead:** the thief sends `:rob` to every visitor in his room,
  and each visitor's own handler hands over its treasures (`move t to
  from`), says the thief's line for what was found, and checks its own
  light. Zork's "lean and hungry" ending stops the thief where he is; here
  he cannot know he found nothing, so he goes on. For the Cyclops, the
  visitor's part of `give` puts a bottle with water in it down on the
  floor, where the Cyclops can see into it; not thirsty, he hands it back.
  A lit torch handed or robbed into the thief's bag would never tell the
  visitor it went (its `:light` message is out of range inside the bag),
  so the visitor counts it gone itself.
- **Spec:** Movement and consent › The three roles; Range ("what another
  visitor carries is out of range").
- **Status: open.** Related to sprout#477 (a carried thing and its
  holder): a rule that let a person's own NPC-facing guard consent to a
  take, or let an actor see into another's hands as `lit` does, would put
  ROB back in the thief's own body.

### 87. A bag that shows nothing hides it from its owner too

- **Wanted:** the thief's large bag: nobody can see into it, but he can
  take out of it what he likes (DEPOSIT-BOOTY, DROP-JUNK, the frightened
  thief whose bag spills).
- **Found:** a pass rule refuses in both directions: a container that
  passes nothing is "reached as a surface from inside and is a wall beyond
  that". The thief reaches his bag, not what is in it; he can put things
  in, and cannot walk, count or move them out.
- **Wrote instead:** the bag empties itself on request (`:disgorge with
  1|2|3`: his treasures, now and then a worthless thing, everything) into
  his hands, and replies when it is done (`:unloaded`); what lands in his
  hands from the bag he lets fall with `act drop`. He keeps his own count
  of what he has bagged (`:loot`), to know whether "the contents of his
  bag fall on the floor". Dying, he cannot say what he drops (the lines are
  rendered when the turn is done, and the bag is empty by then), so in his
  lair the room lists what lies on its floor, which is what Zork's F-DEAD
  does anyway.
- **Spec:** Range; Containers route; Prose (a turn's lines are rendered
  once its work is done).
- **Status: open.**

### 88. A held thing cannot set anything down in the room around its holder

- **Wanted:** CANARY-OBJECT: wound in the forest, the canary's song brings
  a songbird, which drops a brass bauble.
- **Found:** `spawn Bauble in here` in the canary's own `do` faulted, the
  first time a visitor tried it in a test: the room is out of the canary's
  range, because the visitor holding it passes nothing.
  ```
  LifecycleFault: `underground_caverns.forest_path` is out of range of
  `underground_caverns.up_a_tree.nest.egg.canary`, so nothing could be
  spawned in it.
  ```
- **Wrote instead:** the canary's part sings; the winder's own part of
  `wind` (`adventurer.sprout`) spawns the bauble, since a person reaches
  the place they stand in.
- **Spec:** Spawning ("in a container in range"); Range.
- **Status: open.** The same wall as sprout#477, from the other side.

### 89. A description that reads another room faults the turn

- **Wanted:** the Treasure Room's staircase describing what is at its foot
  (the Cyclops, or the hole he left).
- **Found:** a `describe` that reads a property of another place faults,
  and on arrival the visitor is not admitted; an exit's `when` that reads
  the same property quietly does not apply (An exit may be conditional:
  "A guard that reads through something out of the place's range does not
  fault the poll"). Both are polls. Minimal repro, at 6c440f5:
  ```sprout
  import * as sprout from 'sprout'
  kind Person is sprout.Visitor { }
  world rp is sprout.World {
    visitors are Person
    visitors arrive at hall
    object hall is sprout.Place {
      grammar { exit north "north" -> yard when (yard.get(:open)) }
      describe { text "A hall.{if yard.get(:open)} The yard door is open.{/if}" }
    }
    object yard is sprout.Place { :open true  grammar { exit south "south" -> hall } }
  }
  ```
  Arriving faults ("not admitted: … NameOutOfRange: `rp.yard` is out of
  range of `rp.hall`"); with the `describe` reading nothing else, `north`
  is "You can't go that way." though the guard's own destination is open.
- **Wrote instead:** each room keeps its own note of what it needs to
  describe (the Treasure Room's `:fled`, the Cyclops Room's `:cstate`,
  the Living Room's `:magic`), sent to it by world-passing messages.
- **Spec:** Range; Exits › An exit may be conditional; The runtime ›
  Faults. Related to friction 80.
- **Status: open.** Found again before round 11: the Deep Canyon's
  stairway, examined, read the Loud Room's `:deafening` and faulted, and
  had since v4 (a fuzzed walk found it; no playtester had examined it). It
  now reads the canyon's own note of the dam. v6 leans on this entry's
  workaround everywhere: six rooms and the boat keep their own copy of the
  dam's state (96), three rooms their own copy of the rainbow's (99).

### 90. A voice in another room

- **Wanted:** ROB-MAZE: robbing a maze room, the thief is overheard by a
  visitor elsewhere in the maze ("My, I wonder what this fine sword is
  doing here.").
- **Found:** `tell` reaches only the teller's place, and the thief knows
  neither where the visitor is nor (83) where he is.
- **Wrote instead:** the thing he has his eye on is sent `:pinch`; it
  broadcasts `:far_voice`, which the world lets through, and then, if he
  means to, moves itself into his hands. Every visitor hears the
  broadcast; one whose own last move was into the maze (`:in_maze`, kept
  on `:moved`, since a handler has no `here` for a visitor either) tells
  itself the line, naming the thing (`{from.short}`, which renders though
  the thing is by then in the thief's bag). Zork chooses ROB-MAZE over
  STEAL-JUNK only when the visitor too is in the maze; the thief cannot
  know that, so in the maze he always uses ROB-MAZE's odds.
- **Spec:** Other people › Who hears it; Events › Sending (broadcast);
  the world's pass rule.
- **Status: open.**

### 91. Three NPCs share one die, and the host's minute

- **Wanted:** the thief, the troll and the Cyclops each on Zork's clock,
  every move, each rolling its own dice.
- **Found:** each NPC's turn is a wake, no sooner than the host's floor (60
  seconds, so every other move at the studio's 30 seconds a turn; 47); and
  a script seeds each wake that falls due in one `advance` with the next
  seed after the last. Adding the thief, whose clock starts at the first
  descent into the Cellar, shifted the troll's draws in every test that
  waits for him: `troll_turns.json` had both its seeds moved down by one,
  and the "expected silence" steps of `descent.json` and `gift.json` now
  expect the thief's wake.
- **Wrote instead:** the tests, re-seeded. Nothing in the world.
- **Spec:** Time › Wakes; Chance › The seed; the test harness (2b).
- **Status: open,** and only a cost: any NPC added later will move every
  other NPC's dice in every test that advances time.

### 92. A thief who rushes in is already in the room's description

- **Noted, not forced:** the Treasure Room's description on arrival lists
  the thief who has rushed to defend it in the same turn, since the
  description is "derived from the turn's state once the queue is empty",
  and before his scream is told. Zork prints the scream (M-ENTER) before
  the room; here the room comes first, with him in it, then the scream and
  his gesture. The order is the spec's; the effect reads well, so it is
  kept.
- **Spec:** Movement and consent › After the move.
- **Resolved after round 9,** without the language: a player read the
  order as a fault (the treasures "vanish" while the chalice stays listed),
  and in Zork the scream and the gesture come first. The visitor's own
  part of `go` (and of the TREASURE word) now says both before the move is
  described, which a `do` may; the room keeps `:keeper`, which the thief
  sets, so that the visitor knows whether he is alive and awake to come.
  The lines are the visitor's because only a `say` in the mover's own
  `do` lands before the room's description; the thief's own `tell`
  lands after it. What is still lost: the line is the visitor's, not the
  thief's, and a world that wanted the NPC to speak first could not.

### 93. A wake's time cannot be read, and a number cannot be multiplied

- **Wanted:** Zork's V-DIAGNOSE, "You have a serious wound, which will be
  cured after 25 moves.", whose number is CURE-WAIT times the points still
  to heal after this one, plus what is left of I-CURE's tick.
- **Found:** a pending wake's time is not readable, so the world cannot
  ask how long until the healing wake falls; and Sprout has no `*` and no
  conditional expression, so `20 * (wounds - 1)` and a clamp are not
  expressions.
- **Wrote instead:** the adventurer keeps `:cure_at`, the move count by
  which the next point heals, set whenever the healing wake is asked; the
  number is counted in the adventurer's own moves, which skip the commands
  about the game itself, so it can run a little ahead of the host's
  clock. The multiplication is eight `if`s, one for each further point
  of wound, adding twenty; the clamp is an `if` on a scratch property.
- **Spec:** Time › Wakes; Expressions.
- **Status: open,** and small: a readable `wakes` (the soonest pending) or
  a `*` would each remove half of it.

### 94. A trailing word turns a thing present into one not here

- **Wanted:** `attack the troll again` and `get on pedestal` answered as
  Zork would (the first as an attack, or "I don't know the word"; the
  second "You can't climb onto the pedestal.").
- **Found (round 9):** both answered "You can't see any such thing." with
  the troll and the pedestal in plain sight: the trailing `again`, and
  `get on` read as `get` with `on pedestal` as its noun, leave words the
  noun does not match, and the line falls to `not_here`, which says
  something false. This is 63 again, for words other than `here`.
- **Wrote instead:** nothing; the world has no say in how a noun phrase
  that leaves words unmatched is answered. Asked of Sprout: answer such a
  line with `unknown` rather than `not_here`. An engine bug to file with
  Sprout, alongside sprout#464.
- **Spec:** Parsing › Matching a line; When nothing matches.
- **Status: open.**

### What sprout#456–458, #477 and #478 change for the thief

- **#456 (closed):** used as written. The thief's and the Cyclops's blows
  are told by them, `tell target`, from their own `as actor for attack`;
  the visitor's part does what `:dealt` says. The one line each of them
  cannot tell is a stagger that costs the visitor a weapon, since which
  weapon is in the visitor's hand is out of their range (86): the visitor
  tells it, in the thief's or the Cyclops's words.
- **#457 (closed):** used as written: the Cyclops guards the stairs through
  the Cyclops Room's exit, reading the room's `:cstate`. The thief guards
  nothing by the place: the chalice refuses `take` itself while he stands
  over it, fighting (CHALICE-FCN), which a permit can say.
- **#458 (closed):** both new clocks are wakes put off by `cancel wakes`;
  a blow struck at the thief puts his next turn a minute on, as the troll's.
  Ticks stay place-only: an NPC `:tick` while he shares a place with a
  visitor would not help the thief, whose turns matter most when nobody is
  with him.
- **#477 (open):** would change 86 and 88 if a carried thing could reach
  through its holder: the canary could set down its own bauble; a lit
  torch in the thief's bag could still tell its former holder it went.
  It would not open the thief's own bag to him (87), which is the reverse
  wall.
- **#478 (open):** no change needed for the thief, whose bag has no limit in
  Zork either. The visitor's load stays right when robbed or giving,
  because the visitor's own `:left` subtracts what leaves; weight on the
  standard library's hands would make that bookkeeping go away.

## Found in round 10

### 75, again: a box held what it could count, not what it could weigh

- **Round 10:** the newcomer put the platinum bar (20), the painting (15),
  the sword (30) and four other things into the brown sack (capacity 9),
  and went up the chimney with the sack, the lamp and one thing more. Box's
  `accept` compared `:capacity` with the number of things inside, so 9
  meant nine things of any size, where Zork's V-PUT weighs them.
- **Found:** a guard can count a container's contents but not sum their
  sizes (no sum over contents; a body's own writes hold still, so a loop
  cannot keep a running total either).
- **Wrote instead:** each box keeps `:held`, the sum of the sizes of what
  is directly inside it, on `:entered` and `:left` (initial contents arrive
  too), and `accept` refuses with Zork's "There's no room." when `:held`
  and the thing's size, and what a box put in holds directly, would pass
  `:capacity`. What is lost: a box inside a box does not tell its holder
  when its own contents change, so Zork's recursive WEIGHT is one level
  deep; and the visitor's load still counts a carried bag at its own size,
  not with what is in it, which the sack's capacity of 9 now bounds.
- **Spec:** Kinds › Containers (`accept`); Events (a body's own state
  holds still).
- **Status: open,** as 75; asked of Sprout: a sum over contents
  (`self.sum(:size)`), or weight on the standard library's hands (#478).

### 94, again: words a noun cannot place, read as a missing thing

- **Round 10:** nine times for the parser-breaker and once for the
  newcomer, who was looking at the window: `open the window wider`, `kick
  the boarded door open`, `put leaflet back in mailbox`, `tie the troll up
  with the leaflet`, `dig through the cave-in with the sword`, `tell the
  cyclops a joke`, `give the thief my coins as a peace offering`. All
  answered "You can't see any such thing." with the thing in plain sight.
- **Wrote instead:** nothing; the world cannot change how a noun phrase
  that leaves words unmatched is answered. Asked of Sprout, again: answer
  such a line `unknown`, or as Zork does, "I don't know the word
  'wider'.", never `not_here`.
- **Status: open,** an engine bug, with 68.

### 11 and 59, again: a list item, held, vanishes without a line

- **Round 10:** in Maze 5 with the brown sack in hand and the bag of coins
  on the floor, `take bag and key` answered "Skeleton key: Taken." and
  nothing for the bag. Alone, `take bag` takes the coins (the permit that
  refuses a single held reading, 59); inside a list there is no single
  reading to refuse, the parser settles "bag" on the nearer sack, and the
  world leaves held things out of any list that holds something fresh, so
  `take all` does not say "You already have that!" for every held thing.
- **Wrote instead:** nothing new. A line for the held thing in a list
  would come back for every held thing in `take all` (11). Not added to
  `take_which.json`, since the test would pin the fault.
- **Asked of Sprout, again:** a way for a set role's handler to tell `all`
  from a list of names, and for a role to prefer what is not carried.
- **Status: open.**

### 82, again: `go into the crack`

- **Round 10:** at the Chasm, `enter crack` goes south (the library's `go`
  reads `enter [way]` by the exit's label), and `go into the crack` was
  not recognised; the newcomer took it to mean the crack was no way at
  all.
- **Wrote instead:** `go into`, `walk into` and `crawl into` join the
  `squeeze_through` intent, which stands for `through`; the Chasm's crack
  answers `through` by sending the visitor south through the world's gate
  (a new `Dest`, `ns_passage`), since an intent's slot cannot hold a way
  out (82). Every other thing gone into answers as `through` does.
- **Status: open,** as 82.

### 32, again: `feed cyclops`

- **Wanted:** Zork's orphan question, "What do you want to feed the
  cyclops?", and the next line (`lunch`) taken as its answer.
- **Wrote instead:** `feed [target]` is its own verb, which asks the
  question; the visitor must then say the whole sentence, `feed lunch to
  cyclops`, since the parser cannot take an answer (32).
- **Status: open,** as 32.

## Found before round 11: the dam and the river

v6 adds Flood Control Dam #3 and the Frigid River: a dam that is global
state on a clock, a room that floods, a lake that drains and fills, a
rainbow three rooms share, and a boat the visitor sits in while it moves.
What the language let me say plainly: the clocks are wakes (`wake in 4
minutes`, `cancel wakes` when the bolt turns back), every room's change
of shape is a conditional exit over its own property (the reservoir's
shores, the Falls and the End of Rainbow), the boat is a place inside a
place (Places inside places) that a visitor can board, be carried in and
get out of, and the gate (6) carries it, the visitor and all, across the
map. What it would not let me say is below. Issues sprout#481 (an NPC that
knows where it is and walks by an exit) and sprout#482 (a thing present but
unseen) are named where they would have helped.

### 95. A vehicle the visitor is inside, moving between places

- **Wanted:** Zork's magic boat (RBOAT-FUNCTION, V-LAUNCH, V-DISEMBARK,
  GOTO's vehicle rules, I-RIVER). The visitor gets in; in it, LAUNCH puts
  out onto the river, LAND or a direction to a shore brings it in, and
  the visitor stays in the boat ("Sandy Beach, in the magic boat") until
  they get out; the current carries boat and visitor on by itself; any
  other direction is "Read the label for the boat's instructions."
- **Found:** the boat can be a place (`sprout.Place`, and a `Bag` so things
  go in it and it can be carried), and boarding, being carried and getting
  out all work. Six things did not come for free.
  (a) **A way out of a moving place moves only the one who takes it.** In
  the boat, the visitor's place is the boat, so `east` is one of the
  boat's exits; an exit can only move the visitor, never the boat with the
  visitor in it.
  (b) **Nobody can tell which way was taken.** The way around (a) is an
  exit that leads back into the boat itself (`exit east "east" -> boat`):
  the visitor moves from the boat to the boat, and the boat's `:entered`,
  from itself, sets off the boat's own move through the gate. But
  `:entered` is told only where from, the visitor's own part of `go` binds
  no `way` (only `arrives` and `leaves` do, and they are prose), and an
  exit's `say` is words, not an act. So the boat knows only that some way
  back into itself was taken, and at any reach at most one such way can
  apply. At the fourth reach (west to the White Cliffs, east to Sandy
  Beach) and on the lake (west to the stream, north and south to the
  shores) there is more than one; there, the one Zork's players use most
  (east to Sandy Beach, west up the stream) is the boat's own, and the
  others are ordinary exits to the shore: the visitor steps out, and the
  boat, told by its `:left` where they went (`to.get(:reach)`), follows
  them through the gate. Zork leaves them sitting in it.
  (c) **Eight ways out, counting every guarded one.** The boat needs one
  per reach and direction; seven fit (launch, land, west, east, and the
  three shores), with the refusals, which do not count, after them.
  (d) **A place that moves tells its occupants nothing.** When the current
  carries the boat on, the visitor in it does not move, so the engine
  describes nothing; the boat tells them the room it has come to, as a
  `tell inside` (read as told, not described), and decides for itself
  whether they can see it.
  (e) **A place cannot describe the room it lies in.** The boat's
  `describe` cannot render its container's description (a describe has no
  name for "where I am", and reading another place faults, 89); it names
  each of the fifteen rooms it can lie in by world path, by its reach, and
  says something general anywhere else (the boat may be carried into the
  Kitchen and boarded there, as in Zork).
  (f) **Nobody can get out.** Getting out is a move to the room the boat
  lies in, which neither the visitor nor the boat can name. The visitor
  broadcasts `:where`; the room it reaches answers `:berth`, and in that
  answer `from` is the room, so the visitor moves there. A punctured boat
  is swapped by its room the same way (`:wreck`).
- **Wrote instead:** all of the above: `boat.sprout`, and the visitor's
  parts of `board`, `disembark`, `launch` and `land` in `adventurer.sprout`.
  LAUNCH and LAND said bare are the boat's own ways out (labelled "launch"
  and "land"); said with the boat named they are verbs, whose effect is the
  same errand by message (an intent cannot name a way out, 82). The
  difference a player sees: landing at the fourth reach's west bank or on
  the lake's shores leaves them standing beside the boat, not in it, and
  the river's rooms reached by the current are told, not described.
- **Spec:** Places inside places; Exits; Movement and consent › After the
  move; Range; Engine verbs (`go`'s own part); Limits (`exitsPerPlace`).
- **Status: open.** sprout#481 is half of it: a place that knows where it
  stands (a `container`, or `here` in a handler) would make (e) and (f)
  one line each, and a `move` along an exit by its direction (`move self
  by east`) would let the boat take the visitor's way itself, which is (a)
  and (b). What remains is (d): a vehicle wants its occupants to read where
  it has come to as the engine reads a new place.

### 96. Global state that many rooms read

- **Wanted:** Zork's GATES-OPEN and LOW-TIDE: two globals that the Dam, the
  three reservoir rooms, the Deep Canyon, the Loud Room and the boat read in
  their descriptions, exits and turns.
- **Found:** a describe and an exit's `when` cannot read another place (89),
  and a world property is out of range of every place, since the world
  passes nothing (Range). So there is no global.
- **Wrote instead:** the bolt keeps the state and broadcasts it (`:tide`)
  through a world pass rule; each room that cares keeps its own copy
  (`Tidal`) and says its own lines in `changed :tide`. Every listener must
  be reachable by the broadcast: the folded boat, in a pile that passes
  nothing, needed `pass :tide (true)` on the pile and the punctured boat,
  or it woke up thinking the lake was full; and the sceptre's `:rainbow`,
  waved in a hand, needed the adventurer to pass `:rainbow` (73 again). A
  room added later that forgets to compose `Tidal` describes a lake that
  is not there.
- **Spec:** Range; The world model (the world's pass rule); Events ›
  Sending (broadcast); Containers route.
- **Status: open.** A property of the world readable from everywhere (or
  places allowed to read the world, as every object reads its own
  container's surface) would be the global Zork has.

### 97. A room that changes as the water drains, and things the water hides

- **Wanted:** the reservoir's shores, which open across the lake bed while
  it is drained; descriptions in four states; the trunk, INVISIBLE in the
  Reservoir until it drains and again when it fills; the leak, INVISIBLE
  until the blue button; the scarab, INVISIBLE in the sand until dug; the
  pot of gold, INVISIBLE until the rainbow is first made solid.
- **Found:** the shapes were the easy part: an exit's `when` over the room's
  own `:tide`, and a description over the same, are exactly what Exits ›
  An exit may be conditional promises. What is present and unseen is not
  (sprout#482, friction 85).
- **Wrote instead:** each hidden thing a different way: the trunk lies in
  the mud, a scenery container that passes nothing, which moves it out onto
  the lake bed when the water goes down and back in when it comes up and
  the trunk is still lying there; the scarab lies in the Sandy Cave's sand
  the same way; the leak is spawned when the blue button is pushed, and
  the pot of gold when the rainbow is first solid. The mud and the sand are
  nameable things in their own right, which is lucky; a hider with nothing
  in the room to be would need a name nobody types.
- **Spec:** Range; Spawning; Containment is a declaration.
- **Status: open,** with sprout#482.

### 98. A room that floods, and a river that runs, on a clock coarser than a move

- **Wanted:** Zork's I-MAINT-ROOM: the water rises a level every move,
  thirteen messages from the ankles to the neck, and then you drown;
  I-RIVER: the current moves the boat after 4, 4, 3, 2 and 1 moves.
- **Found:** a wake is no sooner than the host's floor, a minute: every
  other move at the studio's half-minute a turn (47, 91). And a line is
  rendered when the turn is done (Properties and values), so a leak whose
  handler says "The water level here is now {level}" and then raises the
  level says the next level.
- **Wrote instead:** the leak rises two levels a minute, so the room
  floods in seven messages over seven minutes (fourteen moves); each
  message is chosen by an `if` before the level changes, not by a slot.
  The current waits two minutes, two, ninety seconds, one, and one (the
  last is Zork's single move, raised to the floor). The dam drains and
  fills in four minutes, Zork's eight moves.
- **Spec:** Time › Wakes; Limits (`shortestWakeSeconds`); Properties and
  values (lines rendered against what the turn wrote).
- **Status: open,** and the same as 24.

### 99. The rainbow, one bit for three rooms

- **Wanted:** RAINBOW-FLAG, read by Aragain Falls' and the End of Rainbow's
  ways onto the rainbow and their descriptions, and cleared by the sceptre
  waved again; with whatever is on the rainbow falling when it goes.
- **Found:** as 96: no room can read another's state, and the sceptre, in
  a hand, cannot reach any room at all.
- **Wrote instead:** the Falls and the End of Rainbow each keep `:solid`;
  the sceptre reads its own room's, and broadcasts `:rainbow`, which the
  adventurer and the world let through; On the Rainbow, told it is light
  again, drops whatever and whoever is on it. The exits up are labelled
  "rainbow", so `climb rainbow` is going up it, and refuse "Can you walk on
  water vapor?" while it is not solid.
- **Spec:** as 96; Exits (labels).
- **Status: open.**

### 100. A room passed through in one turn is never described

- **Wanted:** LOUD-ROOM-FCN with the gates open: the Loud Room's description,
  then "It is unbearably loud here...", then the room the visitor scrambles
  into.
- **Found:** the visitor walks in, and the room's `:entered` sends them on
  through the gate in the same turn; a description is derived once the
  queue is empty (Movement and consent › After the move), so only the last
  place is described, and the Loud Room never is.
- **Wrote instead:** the roar, told, then the room the visitor lands in.
  The player learns they were in the Loud Room only from the roar.
- **Spec:** Movement and consent › After the move.
- **Status: open,** and small.

### 101. A world verb that answers a bare direction overrules the rooms' own refusals

- **Wanted:** in the boat, `east`, `west` and `land` steering the boat,
  as one world verb with phrases "east", "e", "go east".
- **Found:** a world verb whose phrase is a bare direction is read beside
  `go` everywhere. Where a room's way refuses ("The mountains are
  impassable."), the verb's own refusal was the answer instead (no draw
  was logged); where a room's way leads, the two allowed readings tied and
  one was drawn. So no world verb may say a direction.
- **Wrote instead:** the boat's own ways out (95). Where a bare word is
  both a label of the boat's ways and a verb's phrase (`launch`, `land`,
  which also answer when not in a boat), the verb refuses in the boat with
  exactly the words the boat's own way would, so that whichever reading
  wins, the visitor reads the same thing. The same ranking cost `enter
  boat`: a verb that reads `enter [target]`, even one whose target must be
  a boat, answers `enter house` at Behind House, with the window shut,
  with its own refusal or its `cannot`, where the house's way in says "The
  kitchen window is closed."; a refusing way is not a reading, and any
  reading, even a partial one, outranks it. So ENTER is left to `go`, and
  the boat is boarded by BOARD, GET IN, CLIMB IN and SIT IN.
- **Spec:** Parsing › Choosing a reading; Exits; Engine verbs.
- **Status: open.** Either an exit's refusal outranking a verb's, or a way
  for a place's exits to win the direction words outright, would do.

### 102. Four buttons and the word "button"

- **Wanted:** `push button` answered as Zork's parser answers it, by asking
  which; `push yellow button`, `push yellow` pushing the yellow one.
- **Found:** four things that answer to "button" tie, and one is drawn
  (32, 59): `push button` pressed a random button, and the blue one floods
  the room.
- **Wrote instead:** each button is named by its color, with "button" an
  adjective, and the group of buttons is the only thing whose noun is
  "button"; so `push button` names the group, which says "You'll have to say
  which: blue, yellow, brown, or red.", and a color named outranks it.
- **Spec:** Parsing › Choosing a reading; Addressing and display.
- **Status: open** (32).

### 103. A message and a verb may not share a name

- **Found:** `message :launch` in the file that imports `verb launch` is
  refused ("`launch` is imported, and this file declares a `launch` of its
  own"). The boat's messages are `:put_out` and `:come_ashore`.
- **Spec:** Names › Identifiers and scope.
- **Status: open,** and only a naming matter.

### 104. A kind's body naming the place its instance stands in faults

- **Found, building the boat:** a name in a kind's body that names the
  place the instance stands in compiles, and reading through it faults at
  run time with an internal error, not the out-of-range fault the spec
  describes ("a name no object in the bundle declares is refused; ... one
  that reaches nothing when it runs is out of range, so a `get` through it
  faults"). Here the place is in range (an object reaches its own
  container's surface). Minimal repro, at 6c440f5:
  ```sprout
  import * as sprout from 'sprout'
  kind Person is sprout.Visitor { }
  kind Hall is sprout.Place { :lamps 2 }
  kind Plaque {
    describe { if (hall.is(Hall)) { text "The hall has {hall.get(:lamps)} lamps." } else { text "No hall." } }
  }
  world rp is sprout.World {
    visitors are Person
    visitors arrive at hall
    object hall is Hall {
      object plaque is Plaque { grammar { name "plaque" } }
    }
  }
  ```
  `sprout check` says "ok"; `x plaque` faults: "Error: `hall`, which
  nothing binds, reached the evaluator, which the checker refuses." The
  world path `rp.hall` works.
- **Wrote instead:** world paths (`underground_caverns.maintenance_room`)
  wherever a kind names a room.
- **Spec:** Names › Identifiers and scope; The runtime › Faults.
- **Status: open.** It looks like a Sprout bug.

### 105. An intent that gives its slot to a set role faults

- **Wanted:** Zork's LEAVE, which is DROP, and of the vehicle the visitor
  is in, DISEMBARK: an intent, `"leave [x]"`, `do disembark (target: x)
  when (x.is(Vessel)) then drop (target: x) when (!x.is(Vessel))`.
- **Found:** `drop`'s target is a set role (`many`), and any line the intent
  reads faults ("a reading of `drop` fills `target` with what it does not
  take"); `sprout check` says nothing. Minimal repro, at 6c440f5:
  ```sprout
  import * as sprout from 'sprout'
  kind Person is sprout.Visitor { }
  kind Toy { }
  verb toss { role target many  "toss [target]" }
  intent fling { "fling [x]"  do toss (target: x) }
  kind Tosser is sprout.Actor { as actor for toss { do { say "Tossed." } } }
  kind Pal is Person, Tosser { }
  world rp is sprout.World {
    visitors are Pal
    visitors arrive at hall
    object hall is sprout.Place { object ball is Toy { grammar { name "ball" } } }
  }
  ```
  `toss ball` says "Tossed."; `fling ball` faults. (`act toss (target: x)`
  with one object is fine; the troll and the thief do it.) And a slot
  given to a carried role in any step takes only what is carried (Intents),
  so even without the fault `leave boat` could not have reached
  `disembark` through it.
- **Wrote instead:** "leave" is a synonym of both `drop` and `disembark`,
  and the reading that is allowed wins: `leave boat` from inside it gets out,
  `leave sword` drops it.
- **Spec:** Parsing › Intents; Verbs › Set roles; The runtime › Faults.
- **Status: open.** It looks like a Sprout bug.

## Found in round 11

### 94, again: `kick the mailbox open`

- **Round 11:** three players, four lines, each about a thing in plain
  sight: `kick the mailbox open`, `land on the west shore`, `turn pile
  over` (before `turn [target] over` was a phrase), `drop everything except
  the lantern and the trunk`. All answered "You can't see any such thing.",
  and each player came away believing the thing was not there.
- **Wrote instead:** nothing for the engine's line; the world cannot change
  how leftover words are answered. `turn [target] over`, `turn over
  [target]` and `flip [target] over` are now phrases of TURN (and `turn` is
  at the eight phrases a verb may have), and `dig through` and `dig into`
  of DIG, so the commonest of these now read.
- **Status: open,** an engine bug, with 68 and 94: answer leftover words
  `unknown`, never `not_here`.

### 69, again: `except` with a list

- **Round 11:** `drop everything except the lantern and the trunk`, at the
  chimney again, answered `not_here` (and so also 94).
- **Status: open,** as 69.

### 106. A wait that passes more than one move

- **Wanted:** Zork's V-WAIT: "Time passes...", and then three moves, cut
  short by the first clock routine that prints something. On the river,
  one WAIT after launching reaches I-RIVER and the next reach; in the
  Reservoir, two or three see it drain.
- **Found:** a world cannot move the clock. `wait` is the engine's verb and
  a turn is whatever time the host gives it (half a minute at the studio);
  no statement asks for time to pass, and a wake cannot be made to fall
  sooner than it was asked for, only cancelled and asked again. Three
  players launched, waited, saw nothing, and decided the boat did not move.
  And the world's `waited` line is said after the turn's work, so a line
  the wait causes comes before "Time passes...", where Zork's comes after.
- **Wrote instead:** in the boat, WAIT sends the boat `:hurry`, and the
  boat, if it is on the river with somebody in it, takes back its wake and
  does at once what the current would have done: "The flow of the river
  carries you downstream." and the next reach, or the Falls from the last.
  Everywhere else WAIT is one move: the reservoir drains in four minutes of
  whatever the visitor does.
- **Spec:** Verbs (the engine's six, `wait`); Time › Wakes.
- **Status: open.** Asked of Sprout: a way for a world's `wait` to stand
  for more than one turn's time, or for a wake to be brought forward.

### 107. A visitor in a vehicle is not credited with the room it is in

- **Found:** the round's reach report listed the five reaches of the
  Frigid River as never reached, though five players rode the boat down
  them and read "Frigid River, in the magic boat" at each. The visitor's
  place is the boat, and the report counts only the place a visitor
  stands in, not the place that place lies in.
- **Wrote instead:** nothing; this is the test reporter's, not the world's.
  Read `reach.places.never` with the river's reaches taken off.
- **Spec:** Places (a place inside a place); the host's reach metrics.
- **Status: open,** to raise with Sprout's reporter.

## Found in round 12

### 94, again: an adverb or a trailing phrase

- **Round 12:** two players, four lines, each about a thing in plain
  sight: `kick the mailbox gently`, `read leaflet aloud to the house`, `go
  in through the window backwards`, `push open the trap door` (in the
  Cellar, under it). Each answered "You can't see any such thing.", and
  the same commands without the extra words work.
- **Wrote instead:** nothing. The world cannot change how leftover words
  are answered, and a phrase for every adverb is not a fix.
- **Status: open,** an engine bug, with 68 and 94: an unknown word in a
  noun phrase should be answered `unknown` ("I don't know the word ..."),
  never `not_here`.

### 36, again: `take all` with eight things in hand

- **Round 12:** at the drained Reservoir, carrying eight things, `take
  all` answered "You already have that!" eight times and never reached the
  trunk lying half buried in front of the visitor. The range walk reaches
  what the visitor holds first, and the cap on a set role is filled by
  held things before anything on the floor; Zork's TAKE ALL leaves out
  what is held, so the trunk would have been the first thing it took.
- **Also found, the world's own:** v6 gave the water, the mud, the sand,
  the rainbow, the bolt, the bubble and the leak `as target for take`
  with a `permit` that refuses. Any thing with a part in `take` is in
  `all`, and in a set role one refusal refuses the whole line, so with
  fewer things in hand `take all` at the Reservoir answered only "It
  squelches through your fingers..." and took nothing. Those refusals are
  now `no_take` passages, as the rug's and the trophy case's are, so they
  stay out of `all` and are still answered when named.
- **Wrote instead:** nothing for the cap or the order. A visitor with
  fewer than eight things in hand now gets the trunk (`take_all.json`).
- **Spec:** Parsing › Sequences, again and all ("for a role only the actor
  plays, as `take`'s target, every thing in reach..."); Limits.
- **Status: open.** Asked of Sprout: for `take`, let `all` leave out what
  the actor already holds, or walk the place before the actor, so the cap
  is spent on what can be taken.

### 108. `all` reaches into open boxes

- **Wanted:** Zork's TAKE ALL in the Kitchen: "brown sack: Taken." and
  "glass bottle: Taken.", the lunch and the garlic coming along inside the
  sack; and in the Troll Room, with the open sack in hand, nothing taken
  out of it.
- **Found:** `all` is every thing in reach, and what is in an open box is
  in reach, so `take all` took the sack and then the lunch and the garlic
  out of it, and with the sack in hand took them out of that too. Two
  players noticed.
- **Wrote instead:** the adventurer's `take` leaves out of a line of
  several anything inside a box that is also in the line, so the sack is
  taken whole, and what is in a held sack stays there (`take_all.json`,
  `npc_troll.json`). `drop all` still drops what is in a held open sack
  one by one; nobody has met it.
- **Spec:** Parsing › Sequences, again and all; Range.
- **Status: open.** Asked of Sprout: `all` for a verb whose target is the
  actor's only (`take`) might take only what lies loose in the place, as
  Zork's does, rather than everything in reach.

## Differences chosen, not forced

- **The troll can be given things, or thrown them.** After round 2 the
  troll takes gifts as Zork's TROLL-FCN does: he eats food and treasure
  alike, takes back his axe, throws a sword or knife back four times in
  five and eats it, and dies, the fifth; a gift wakes him if he is out cold.
  Anything else given to anything else is "You can't give a ... to a ...!".
  Before round 4, THROW: at the troll, he catches it ("who is remarkably
  coordinated") and does as he does with a gift; at anyone else, they duck;
  anything else is "Thrown.", and the thing falls (Up a Tree, to the path).
  Water thrown splashes on the walls.
- **The songbird** is not an object; asking after it reads "You can't see
  any such thing.", close to Zork's "You can't see any songbird here."
- **Up a Tree** does not list what lies on the path below ("On the ground
  below you can see: ..."): the path is out of range (see 6).
- **The troll's room after his death** answers `x troll`, and every other
  verb that names the troll, with "You can't see any such thing." (see 8).
- **`turn on lamp`** works on the lantern where it lies, on the trophy case,
  without taking it. That is Zork's: LAMP-ON's syntax finds a light source
  held, carried, on the ground or in the room, and takes nothing.
- **Eating from an open sack you carry** needs the food in hand; Zork lets
  it be eaten from a held container. Drinking needs the bottle open, as
  Zork's does, but not in hand, where Zork wants it held.
- **Weight.** Zork's load is weights against 100, as here, but wounds do not
  lower it, and there is no fumbling.
- **BURN arrives with v4,** with the torch and the candles to burn things
  with (PRE-BURN, V-BURN): what burns (the book, the leaflet, the sack, the
  painting, the leaves, the nest; see below) is consumed, or kills whoever
  holds it; anything else is "You can't burn a ...". Until v4 there was
  nothing to burn anything with. THROW, TIE, SWIM, KICK, RUB (and TOUCH), WAVE, SHAKE, SQUEEZE, KISS, LOOK
  BEHIND, FILL, WAKE (Zork's ALARM), TALK TO (Zork's TELL), HELLO to
  someone, and PRAY are built before round 4 with Zork's answers from
  `gverbs.zil` and TROLL-FCN; FILL has no water to fill from, since the
  slice has no stream or reservoir.
- **The unbuilt edges** (east of the Clearing, east and west of the Troll
  Room; south of the Cellar until round 4 opened the crawlway) refuse in
  new prose in the Empire's voice, as the brief asks. After round 2 each refuses in a different way, so they do not
  read as one joke told three times: a sign at the canyon, a note from the
  Management in the east passage, a choked crawlway with someone digging
  beyond it, a hole you think better of. The pick the east passage used to
  mention is gone: it could not be named, and three players tried. After
  round 4 the canyon's rope and sign, and the Management's note, are
  things in their rooms that can be examined and read and not taken.
- **The surrounding wall** is in every room, as Zork's WALL is a global
  object, and is named "surrounding wall". Zork has nothing to say about
  it; the brief asks that every named thing answer in its own words, so
  `examine walls` describes the plain wall, the Cellar's damp stone or the
  Troll Room's scarred rock (see 35). Each room holds its own copy (see
  16), so `examine all` includes it, where Zork's `all` leaves out global
  objects.
- **Knocking, walking around, digging, going through.** KNOCK ("Nobody's
  home." at a door, "Why knock on a ...?" elsewhere), WALK AROUND (Zork's
  HOUSE-AROUND: west, north, behind, south; "Use compass directions for
  movement." elsewhere, and for a bare `walk`), DIG ("Digging with a pair
  of hands is silly.") and THROUGH (the kitchen window to its other side;
  "You hit your head against the ... as you attempt this feat.") are Zork's
  own answers from `gverbs.zil` and `actions.zil`. The forest's own WALK
  AROUND (FOREST-AROUND) is not built: every forest room now has a forest
  to examine, but walking around it still says to use compass directions.
- **Breaking things (MUNG).** `break`, `destroy`, `damage`, `smash` and
  `vandalize` answer "Nice try." save for the painting (Zork's vandal's
  congratulations, and it is worth nothing after) and the egg (BAD-EGG).
  Zork wants something to break a thing with and asks what; here a bare
  `break painting` is taken as the hands (see 32). Zork's own MUNG of the
  troll is an attack; here it is "Nice try.", and `attack` is the way.
- **POUR.** Zork's POUR is DROP, PUT or POUR-ON by its preposition, and
  only water is anything but "You can't pour that."; that is built, with
  WATER-F's lines. The bottle must be open (see 40).
- **The Studio's chimney** clears the barred trap door, as Zork's does: the
  next one down through it hears it crash shut and barred again.
- **Treasures spoiled in the trophy case** take back what the case paid for
  them, so a painting slashed or an egg broken in the case is worth what
  it is now worth.
- **A death says where the belongings went.** Zork says nothing; after
  round 4, where both players who died woke empty-handed and gave up, the
  narrator adds that they are scattered, and that the lamp is back in the
  living room when it was carried. The scattering itself is Zork's.
- **The troll, examined,** has a description of his own (awake and armed,
  out cold, or disarmed), where Zork repeats nothing but his room line.
- **The chimney's refusal** keeps Zork's line and adds its rule: the
  chimney has room for a light and one thing more.
- **Scattered treasures** go, on a death, to the Attic, the Cellar, East of
  Chasm, the Studio or the Troll Room, as before v4: Zork's JIGS-UP picks
  among every dark place, and the v4 rooms east of the troll are left out
  so that a treasure lost to a death stays findable without the rope.

## Differences chosen in v4

- **The Engravings Cave** is built, though the brief's list leaves it out:
  it is the only way from the Round Room to the Dome Room in `dungeon.zil`.
- **The way out of the temple is the prayer,** as in Zork when the hole to
  Hades is shut: there is no way back up the rope ("You cannot reach the
  rope."), and the hole in the Altar refuses everyone, in words of its own
  without the coffin and in Zork's with it. A visitor who goes down the
  rope and does not pray stays down.
- **The sceptre is not a weapon.** Zork's has WEAPONBIT, and a visitor
  could fight the troll with it; the troll is past by the time the sceptre
  is found, and the melee here knows the sword, the knives and the axe.
- **The sceptre in the coffin in the trophy case scores nothing** for the
  sceptre: Zork's OTVAL-FROB recurses into a container in the case without
  adding what it finds, so only what lies in the case itself counts. The
  case here pays for what enters it directly, which is the same rule.
- **The Temple's words TREASURE and TEMPLE** (V-TREASURE) are heard: in the
  Temple the air leans toward somewhere else and thinks better of it,
  since the thief's lair is not built; anywhere else, "Nothing happens.".
  *v5:* the lair is built, and the words now carry the visitor between the
  Temple and the Treasure Room, as V-TREASURE does.
- **The candles burn down by time, not turns** (73), and only once
  disturbed (taken, moved), where Zork starts them on any verb.
- **Things that burn** are Zork's BURNBIT things in scope: the black book,
  the leaflet, the brown sack, the painting, the pile of leaves and the
  nest. Only the book's burning is Zork's own (BLACK-BOOK); the others take
  V-BURN's default. The leaves burned do not uncover the grating, which
  Zork's LEAF-PILE does (not built).
- **The unbuilt ways east of the troll** refuse in the Management's voice,
  as the old ones do: the Round Room's south passage is choked by a cave-in
  someone has started sorting; the dam and the reservoir are boarded off
  by the Flood Control Dam's notices (which can be read, in the Deep
  Canyon, and on a card at the Chasm); the Damp Cave's east way ends above
  the river without a boat; the hole in the Altar breathes up from Hades.
- **The intact canary's aria and the brass bauble** are not built: only the
  thief opens the egg intact, and he is not in this slice. Winding the
  ruined canary gives Zork's "unpleasant grinding noise". *v5:* built; see
  "Differences chosen in v5".
- **The Maze has no thief.** Zork's thief walks the maze and is out of
  scope by the brief; the dead adventurer's remains lie undisturbed until
  a visitor finds them. The way southeast from Maze 15 to the Cyclops Room
  refuses with a sign from the Management, in the voice of the Troll
  Room's note. *v5:* the thief walks the maze, the sign is gone, and the
  way southeast leads to the Cyclops Room.
- **The grating opens from above as "The grating opens."** Zork's
  GRATE-FUNCTION compares HERE with CLEARING, the other clearing, so in
  Zork the line from the Grating Clearing is the one meant for below, "The
  grating opens to reveal trees above you."; here it is the line Zork's
  code meant.
- **Nothing goes through the grating.** Zork lets a thing of size 20 or
  less be put through the grating into the darkness below; `put` here
  takes a container, and the grating is not one. Not built.
- **`unlock grating` with nothing to unlock it with** answers "You'll need
  something to unlock it with.", where Zork asks what with (32).
- **The rusty knife chooses itself.** `attack troll` with no weapon named
  and only the rusty knife in hand is "(with the rusty knife)" and the
  knife's will, as Zork's parser would choose it.
- **The ghost's curse spares what has no trophy value,** as ROB does, and
  what lies in a container, which ROB never reaches.
- **A death clears the barred trap door,** as Zork's JIGS-UP clears its
  TOUCHBIT: whoever next opens it from above and goes down hears it crash
  shut and barred behind them again. Until round 5 only the chimney did
  (`death_trap.json`). A death also puts out a glowing sword, which was
  still glowing, and said so, when picked up above ground.
- **`climb down chimney` in the Kitchen** is "Only Santa Claus climbs down
  chimneys.", the kitchen's own way down; Zork's V-CLIMB-DOWN answers a
  string exit with "The chimney doesn't lead downward.", which it keeps for
  `climb up chimney` there.
- **SEARCH is Zork's,** "You find nothing unusual.", a verb of its own;
  until round 5 it was a phrase of LOOK INSIDE, so `search the walls` was
  answered as if the walls were a container. `search sack` now finds
  nothing unusual, as in Zork; `look in sack` still shows what is in it.
- **`listen` alone** is answered: the songbird in the forest, the maze's
  sameness in the maze, nothing out of the ordinary elsewhere. Zork asks
  what to listen to, which the parser here cannot (32).
- **The canyon rope** answers being climbed, crossed, stepped or jumped
  over and ducked or crawled under, all with one line from the Frobozz
  Magic Scenery Company; Zork has no rope there. CROSS is Zork's ("You
  can't cross that!") everywhere else.
- **The chasm** answers `look into` with a line of its own.
- **The front door** has a description of its own, naming the boards,
  before Zork's "The door is closed."
- **`smell` alone** is answered, as `listen` alone is: the forest, the
  maze's sameness, nothing out of the ordinary elsewhere. Zork asks what
  to smell, which the parser here cannot (32).
- **The open field** at West of House is a thing, to examine; Zork has no
  field object, but the brief asks that everything a room's description
  names answer with a description of its own.
- **The grating from above, locked,** says its lock is beneath, and the
  skeleton key's description says the lock it fits wears its skull and is
  somewhere below the remains. Zork's key and grating have no
  descriptions; the lock and the key are still joined only as
  GRATE-FUNCTION joins them.
- **The chimney says why without the lamp.** Zork's UP-CHIMNEY-FUNCTION
  answers "You can't get up there with what you're carrying." to anyone
  without the brass lamp, whatever else they hold; here that line goes on
  to say that the draught would have a flame out and the climb wants a
  lamp, and the overload line names the lamp, not "a light".
- **The Chasm's way south is labelled "crack",** so `enter crack` and `go
  crack` take it; `go south` still does.
- **The Round Room's heaps** are a thing of their own, beside the
  cave-ins, with a closer description; both answer every hand laid on them
  with the roof still coming down. Zork has neither.
- **The grue is in every room,** as the wall is: Zork's global GRUE, with
  GRUE-FUNCTION's description, its silence and its absence; it answers
  only where there is light (81). `examine all` in a lit room includes it,
  as it includes the wall.
- **With the torch and the lamp both in hand,** a load too heavy names the
  lamp, though the torch weighs more: down there, where the torch never
  goes out, the lamp is the one a visitor can spare.

## Differences chosen in v5

- **The thief's clock starts at the Cellar.** Zork's I-THIEF runs from the
  first move; here it starts the first time anyone goes down into the
  Cellar, since above ground there is nothing he may enter, and starting
  it there keeps the above-ground tests his. He begins, as in Zork, in the
  Round Room.
- **His round is `1dungeon.zil`'s order of the rooms built,** 39 of them,
  one a turn, from the Cellar to the Torch Room, leaving out the house,
  above ground and the two temple rooms, all of which Zork holds sacred.
- **Treasures only vanish in his lair.** THIEF-IN-TREASURE makes everything
  in the Treasure Room but the chalice invisible while he defends it; here
  he puts its treasures (not the chalice) in his bag, which comes to the
  same thing, and anything else a visitor left there stays in sight. When
  he is next alone there he empties his bag again, as HACK-TREASURES and
  DEPOSIT-BOOTY have it.
- **"The thief gestures mysteriously, and the treasures in the room
  suddenly vanish."** is said, after round 9, only when there is a
  treasure besides the chalice to vanish. Zork's test (at least two
  objects in the room, the visitor and the thief among them) always
  passes, and a player read the line over a lone chalice as a fault.
- **His stiletto answers only to "stiletto"** (and "dagger"), as Zork's
  does; "knife" means the nasty knife or the rusty one.
- **The visitor's strength grows with the score** in fights with the thief
  and the Cyclops, as Zork's FIGHT-STRENGTH does (2, and one more for
  every 70 points). The troll's fight is as round 8 left it.
- **The bauble falls to the Forest Path** when the canary is wound up the
  tree, as Zork's does, and the canary's aria and the bauble are as
  CANARY-OBJECT has them. The canary, intact or broken, now has a
  description of its own.
- **The Cyclops answers `listen` asleep with Zork's default** ("The cyclops
  makes no sound."), as CYCLOPS-FCN's sleeping branch does not catch it;
  and a thing thrown at him asleep, he ducks, as V-THROW has it.
- **Fighting the Cyclops** is CYCLOPS-FCN's: a blow at him awake he shrugs
  off, and his clock starts; asleep, it wakes him, and he fights with his
  fists on Zork's tables until the visitor leaves. He cannot be killed, as
  he cannot in Zork.
- **The Living Room's way west is labelled "opening"** once the Cyclops has
  gone through the door, and the door and the Strange Passage's end of it
  can be gone through by name.
- **DIAGNOSE's cure time counts twenty moves a point** (ten minutes at the
  host's half-minute a turn) where Zork's CURE-WAIT is thirty, as friction
  24 has healing; it is counted in the adventurer's moves (93).

## Differences chosen in v6

- **The scarab is in the Sandy Cave,** as the ZIL has it, not on Sandy Beach
  as the brief has it; the shovel is on the beach. The red buoy and its
  emerald are Zork's, on the fourth reach.
- **The boat's ways and the visitor's place.** Landing west at the fourth
  reach or on the lake's north and south shores puts the visitor ashore
  beside the boat; everywhere else they stay in it, as in Zork (95). The
  boat is described from inside as Zork's DESCRIBE-ROOM shows a room from a
  vehicle ("Dam Base, in the magic boat"), and what it holds after.
- **IN and OUT in the boat** mean LAUNCH and LAND, being the directions
  those ways are written in; Zork answers them "Read the label for the
  boat's instructions." OUT, where there is nowhere to land, still does.
- **Getting in and out** answer to BOARD, GET IN, CLIMB IN and SIT IN the
  boat (not ENTER, 101), and to GET OUT, DISEMBARK, CLIMB OUT, EXIT BOAT, LEAVE BOAT
  and GET OUT OF BOAT. Not in anything, a bare GET OUT says "You are
  already on your own two feet."
- **The punctured boat on the water.** Something sharp let go of in the
  boat on the river or the lake drowns the visitor, as in Zork, and the
  boat stays where it was, inflated, out of reach; Zork leaves a punctured
  boat there, equally out of reach.
- **The rising water and the boat.** I-MAINT-ROOM carries a visitor sitting
  in the boat in the Maintenance Room, the Lobby or the Dam over the dam;
  here the flood drowns whoever is in the Maintenance Room, boat or no.
- **The gunk is put in nothing but the leak and the punctured boat:**
  PUTTY-FCN's "The all-purpose gunk isn't a lubricant." answers every other
  PUT, as in Zork. "Putty", "glue" and "goo" are added to its names.
- **The dam's clock** is four minutes for Zork's eight moves; the leak's,
  seven minutes for thirteen; the current's, as 98 has it.
- **On the lake bed with the water rising,** RESERVOIR-FCN warns after every
  command; here the warning comes on arrival and when the gates close.
- **The thief's round** takes in the eight new rooms Zork does not hold
  sacred and that are always land (Reservoir South and North, Stream View,
  Atlantis, the Dam, the Lobby, the Maintenance Room and the Sandy Cave),
  after the Torch Room; the Reservoir itself, land only while drained, is
  left out.
- **Matches** last a minute (two moves, Zork's I-MATCH); STRIKE MATCH and
  LIGHT MATCH both light one, and BURN MATCH says to light it.
- **The rainbow's way up** is labelled "rainbow", so CLIMB RAINBOW and UP
  are the same way, and both refuse "Can you walk on water vapor?" while it
  is light; Zork's UP there is "You can't go that way."
- **The canyon wall** climbs by name (CLIMB UP CLIFF, CLIMB DOWN CLIFF) as
  well as UP and DOWN; JUMP at Canyon View is CANYON-VIEW-F's "Nice view,
  lousy place to jump.", and death.
- **The Clearing's rope and sign** (the edge of the map since round 4) are
  gone: the Clearing leads east to Canyon View, as in Zork. The Deep
  Canyon's board and its flooded passage, the Chasm's standing water and
  the Damp Cave's ledge over the river went the same way.
- **Round 11: the river's UP and DOWN.** RBOAT-FUNCTION answers every
  direction but LAND, EAST and WEST "Read the label for the boat's
  instructions." before the river's own exits are asked; here, on the
  river, UP and UPSTREAM are the river's "You cannot go upstream due to
  strong currents." (RIVER-1 to RIVER-5's own line), and DOWN and DOWNSTREAM
  say the current needs no help. Players reach for the words, and the
  label's line told them nothing.
- **Round 11: a beached boat.** Sitting in the boat on dry land, a way out
  on foot is answered "You can't go anywhere on foot while you are sitting
  in a magic boat. Get out of it first." (and OUT, that the boat is on dry
  land already), where Zork answers the label's line or GOTO's "You can't
  go there in a magic boat."
- **Round 11: WAIT in the boat** brings the current on at once (106).
- **Round 11: the thief in a lit room.** I-THIEF robs a lit room the visitor
  stands in silently (THIEF-VS-ADVENTURER runs only in the dark); here each
  treasure he takes from under the visitor's eyes is told with STEAL-JUNK's
  own line, "You suddenly notice that the painting vanished." The robbery
  and its odds are Zork's.
- **Round 12: the last reach.** RIVER-5 has only EAST, and WEST there is
  "You can't go that way."; here it is "The west bank is sheer rock straight
  down into the water, and the current will not let you near it. The only
  landing left is the one on the east shore." Launching from the Shore,
  the boat says the current takes it at once. The one-move current is
  Zork's and stays.
- **Round 12: the rumbling** on the third, fourth and fifth reaches can be
  listened to, by name or with LISTEN alone in the boat; Zork has no such
  object.
- **Round 12: taking scenery** that refuses (the water, the mud, the bolt)
  is answered by the adventurer, as the rug is, and costs a move, as Zork's
  TAKE of a non-takeable thing does.
