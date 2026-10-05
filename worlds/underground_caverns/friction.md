# underground_caverns: friction

Every place Sprout would not let the world say what Zork says, and every
difference from the original the author chose or was forced into. Each
entry: what Zork does (what I wanted), what the world does instead, and the
spec section it touches. Section names are `sprout-design-spec.md`'s.

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

## Moving, and the map

### 2. A direction with no exit is not understood

- **Wanted:** `up` where there is no way up: "You can't go that way."
- **Found:** a direction no exit of the place answers reads as no phrase
  at all, and is answered with the world's `unknown`.
- **Wrote instead:** `unknown` is Zork's "That sentence isn't one I
  recognize.", which is what an unknown direction now reads too. Ways Zork
  refuses with its own words are exits (see 3).
- **Spec:** Parsing › When nothing matches; Exits.

### 3. A refused way needs a place to refuse it

- **Wanted:** Zork's NEXIT and CEXIT strings: "The door is boarded and you
  can't remove the boards.", "You would need a machete to go further
  west.", "Only Santa Claus climbs down chimneys."
- **Wrote instead:** an exit to a `Nowhere` place (`nowhere.sprout`, 19 of
  them) whose `accept` refuses with the line. It works, and reads right, but
  each such way is offered in the view and in `go`'s readings as a real exit.
- **Spec:** Exits; An exit may be conditional; Movement and consent.

### 4. Eight exits are not always enough

- **Wanted:** Behind House has five ways out, plus the window west and in,
  each of which either leads to the Kitchen or says "The kitchen window is
  closed." That is nine exits written as conditional pairs.
- **Wrote instead:** the window ways are unconditional, and the Kitchen's
  and Behind House's `accept` refuse an adventurer coming through a closed
  window. The same trick lets the Cellar's way up refuse ("The trap door is
  closed.") from the Living Room's side.
- **Spec:** Limits › Static caps (`exitsPerPlace`); Exits.

### 5. Exit labels are exact

- **Wanted:** `climb tree`, `climb up the tree`, `climb down the tree`,
  `enter house`, `enter window`.
- **Found:** a label is matched whole and exactly, articles included, and
  an exit has one label.
- **Wrote instead:** labels chosen for the likeliest words ("tree", "house",
  "window", "chimney", "trap door", "ramp"), `go` given the synonym `climb`,
  and `climb up` / `climb down` verbs played by the tree.
- **Spec:** Exits; Parsing › Synonyms.

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

### 7. A world path does not reach an object placed with `in`

- **Wanted:** `underground_caverns.forest_1` from a kind's body, as the spec
  says: an object placed by its `in` clause "stands in the tree as if its
  declaration were written where it sits: ... its path is that body's and its
  name."
- **Found:** "Nothing in `underground_caverns` is called `forest_1`."
- **Wrote instead:** every file that names a room imports it.
- **Spec:** The world model › Objects; Names › Identifiers and scope. This
  looks like a gap between the spec and the compiler, worth an issue.

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

### 12. The engine's lines have no slot for the word

- **Wanted:** "You can't see any troll here!"; "I don't know the word
  "frobozz"."
- **Wrote instead:** `not_here` is "You can't see any such thing." and
  `unknown` is "That sentence isn't one I recognize." (both Zork's own
  phrases from elsewhere).
- **Spec:** Prose › Engine lines; Parsing › When nothing matches.

### 13. `help` lists every verb against every thing

- **Wanted:** Zork has no HELP.
- **Found:** because every thing answers every one of Zork's verbs with
  Zork's default refusal, `help` lists each verb against each thing in
  sight: several thousand characters in the Kitchen.
- **Wrote instead:** the adventurer's `help` passage is a short paragraph in
  the Empire's voice listing the commands.
- **Spec:** Verbs › Engine verbs (`help`).

### 14. A thing's name cannot be said without its article

- **Wanted:** Zork's "a leaflet" in lists and "the leaflet" in answers.
- **Found:** a slot renders a thing with its declared article, always.
- **Wrote instead:** every thing has article `the` and a `short` passage
  holding its bare name, written out again for each object.
- **Spec:** Prose › Slots; Names › Articles.

### 15. Names are fixed

- **Wanted:** the egg becomes the "broken jewel-encrusted egg" (Zork swaps
  in another object).
- **Wrote instead:** one egg, with `:broken`; its `short` and descriptions
  read the state, but the engine's own lines still call it "the
  jewel-encrusted egg", and "broken" is an adjective it answers to from the
  start. The canary likewise.
- **Spec:** Names › The grammar block ("Names are fixed").

### 16. A thing that is everywhere is many things

- **Wanted:** Zork's LOCAL-GLOBALS: one white house, one kitchen window,
  one trap door, seen from several rooms.
- **Wrote instead:** one object per room, kept in step by messages the world
  passes (`:window_sync`, `:trap_sync`).
- **Spec:** The world model; Range.

## Prose and its order

### 17. Lines are capitalised

- **Wanted:** "(with the sword)".
- **Found:** "(With the sword)": the first letter of each rendered line is
  capitalised.
- **Spec:** Prose › Passages.

### 18. Indentation is lost

- **Wanted:** "You are carrying:" then "  A leaflet", and "The brown sack
  contains:" then "  A lunch", indented.
- **Found:** each line is its own paragraph, leading spaces gone.
- **Spec:** Prose › Passages (lines reflowed).

### 19. A passage keeps its spaces when it is embedded

- **Found:** `passage short { leaflet }` rendered into "a {u.short}." reads
  "a leaflet ." The body's leading and trailing spaces stay.
- **Wrote instead:** every passage that is embedded in a sentence is written
  with tight braces: `passage short {leaflet}`.
- **Spec:** Prose › Passages; Prose › Slots.

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

### 21. What a handler says does not count as an answer

- **Found:** a verb whose `do` only sends a message (the troll's blow, the
  tree's climb) is answered "Nothing happens." (the world's
  `nothing_happens`) even though a handler then tells the visitor plenty.
- **Wrote instead:** the attack's `do` says the blow's line itself,
  rendered at the end of the turn from the troll's state; a `do` that only
  moves the visitor says `""`.
- **Spec:** Verbs › How a command runs; Prose › When lines are rendered.

### 22. `describe` cannot tell `look` from arriving

- **Wanted:** Zork's default BRIEF mode: a room's long description the
  first time, its name alone after, and in full on `look`; `brief`,
  `verbose`, `superbrief`.
- **Wrote instead:** every room is described in full every time (Zork's
  VERBOSE). `verbose` says "Maximum verbosity."; `brief` and `superbrief`
  say, in the Empire's voice, that they are not to be had.
- **Spec:** Prose › describe; Verbs › Engine verbs.

## Score, time and the end

### 23. No move count

- **Wanted:** "Your score is 35 (total of 350 points), in 112 moves."
- **Found:** nothing runs on every turn for the visitor: `as actor for any`
  may only permit, and engine verbs run no `do`.
- **Wrote instead:** the score line leaves out the moves. Zork's ranks are
  kept.
- **Spec:** Verbs › Playing a role (`for any`); The runtime › Turns.

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

### 25. A game cannot end

- **Wanted:** FINISH after the third death, `quit`, `restart`, `save`,
  `restore`.
- **Wrote instead:** the third death sends the visitor to the Land of the
  Living Dead, a place with no way out. `quit` reports the score and says
  there is no quitting from inside; `restart`, `save`, `restore` say the
  Empire keeps your place.
- **Spec:** The host contract › Admission and identity; Actors and
  visitors › Visitors come and go.

### 26. A declared thing cannot be eaten without a warning

- **Wanted:** eating the lunch or garlic and drinking the water removes them
  for good.
- **Found:** `destroy self` on a declared object warns.
- **Wrote instead:** the lunch, the garlic and the water are spawned into the
  sack and the bottle the first time anyone enters the Kitchen, so eating
  and drinking may destroy them.
- **Spec:** Spawning; Destroying; The compiler › What it warns about.

## The language, in passing

### 27. Kinds cannot walk what they name

- **Found:** a bare object name in a kind's body has the object type, so
  `each a: Adventurer in troll_room` and `troll_room.count(...)` are refused
  there.
- **Wrote instead:** the troll's and the trophy case's handlers are written
  on the objects themselves.
- **Spec:** Names › Identifiers and scope ("Names in a kind's body").

### 28. Narrowing does not flow through `&&`, nor into a nested body's text

- **Found:** `if (t.is(Nest) && t.count(Egg) > 0)` is refused ("`Thing`
  holds nothing"); and a quoted line inside an `each` nested in an
  `if (t.is(Egg))` did not see `t` as an `Egg`.
- **Wrote instead:** nested `if`s, and narrowing again inside the loop.
- **Spec:** Properties, types and values › Narrowing; Walking contents.

### 29. A `without` can come back by another route

- **Found:** a container that can be carried (`is Box, Portable`) answered
  `open` twice, because `Box`'s `without as target for open from Thing` did
  not hold against `Thing` arriving again through `Portable`. As specified,
  but easy to fall into.
- **Wrote instead:** `kind Bag is Box, Portable` writes the `without`s
  again itself.
- **Spec:** Kinds, composition and libraries › Suppressing a contribution.

## Differences chosen, not forced

- **The troll cannot be given or thrown things.** Zork's troll eats gifts
  and throws weapons back. He is a thing here, not an actor, so `give` is
  refused with the library's "You can't give the ... to the troll."
- **The songbird** is not an object; asking after it reads "You can't see
  any such thing.", close to Zork's "You can't see any songbird here."
- **Up a Tree** does not list what lies on the path below ("On the ground
  below you can see: ..."): the path is out of range (see 6).
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
