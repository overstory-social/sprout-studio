# underground_caverns: friction

Every place Sprout would not let the world say what Zork says, and every
difference from the original the author chose or was forced into. Each
entry: what Zork does (what I wanted), what the world does instead, and the
spec section it touches. Section names are `sprout-design-spec.md`'s.

Each entry carries a **Status** as of the port to Sprout fe916a5:
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
  the old `accept` refusal read as a refusal.

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
  that answers only to nouns it writes.

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
- **Status: open.**

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
- **Status: open.**

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
- **Status: resolved** by sprout#427: a line is not capitalised past a
  bracket. The attack says "(with the sword)".

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
- **Spec:** Time › Wakes; The runtime › Turns (a world has no turn
  number).
- **Spec:** Time › Wakes; Limits (`shortestWakeSeconds`).
- **Status: open.**

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
- **Status: open.**

## Differences chosen, not forced

- **The troll cannot be given or thrown things.** Zork's troll eats gifts
  and throws weapons back. He is a thing here, not an actor, so `give` is
  refused with the library's "You can't give the ... to the troll."
- **The songbird** is not an object; asking after it reads "You can't see
  any such thing.", close to Zork's "You can't see any songbird here."
- **Up a Tree** does not list what lies on the path below ("On the ground
  below you can see: ..."): the path is out of range (see 6).
- **The troll's room after his death** answers `x troll` with its own
  description, and every other verb with "You can't see any such thing."
  (see 8).
- **`turn on lamp`** works on the lantern where it lies, on the trophy case,
  without taking it. That is Zork's: LAMP-ON's syntax finds a light source
  held, carried, on the ground or in the room, and takes nothing.
- **Eating from an open sack you carry** needs the food in hand; Zork lets
  it be eaten from a held container. Drinking needs only the bottle open;
  Zork wants the bottle in hand.
- **Weight.** Zork's load is weights against 100, as here, but wounds do not
  lower it, and there is no fumbling.
- **No `throw`, `break`, `burn`, `tie`, `swim`.** Not in this slice.
- **The unbuilt edges** (east of the Clearing, south of the Cellar, east and
  west of the Troll Room) refuse in new prose in the Empire's voice, as the
  brief asks.
- **The intact canary's aria and the brass bauble** are not built: only the
  thief opens the egg intact, and he is not in this slice. Winding the
  ruined canary gives Zork's "unpleasant grinding noise".
