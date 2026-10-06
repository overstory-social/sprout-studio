# underground_caverns: friction

Every place Sprout would not let the world say what Zork says, and every
difference from the original the author chose or was forced into. Each
entry: what Zork does (what I wanted), what the world does instead, and the
spec section it touches. Section names are `sprout-design-spec.md`'s.

Each entry carries a **Status** as of the port to Sprout fe916a5, brought
up to date after round 2 where round 2 touched it:
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
- **Status: open.**

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
- **Status: open.**

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
- **Status: open.**

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
- **Status: open.**

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
- **Status: open.**

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
- **Status: open.**

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

## Differences chosen, not forced

- **The troll can be given things, not thrown them.** After round 2 the
  troll takes gifts as Zork's TROLL-FCN does: he eats food and treasure
  alike, takes back his axe, throws a sword or knife back four times in
  five and eats it, and dies, the fifth; a gift wakes him if he is out cold.
  Anything else given to anything else is "You can't give a ... to a ...!".
  `throw` is not built.
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
- **The unbuilt edges** (east of the Clearing, east and west of the Troll
  Room; south of the Cellar until round 4 opened the crawlway) refuse in
  new prose in the Empire's voice, as the brief asks. After round 2 each refuses in a different way, so they do not
  read as one joke told three times: a sign at the canyon, a note from the
  Management in the east passage, a choked crawlway with someone digging
  beyond it, a hole you think better of. The pick the east passage used to
  mention is gone: it could not be named, and three players tried.
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
- **Scattered treasures** go, on a death, to the Attic, the Cellar, East of
  Chasm, the Studio or the Troll Room: the dark places built so far.
- **The intact canary's aria and the brass bauble** are not built: only the
  thief opens the egg intact, and he is not in this slice. Winding the
  ruined canary gives Zork's "unpleasant grinding noise".
