# underground_caverns_3: friction

_The author's log of what Sprout would not let the port say, and what was
written instead. Each entry names the spec section it touches. An entry
may cite the caverns' logs by number where nothing has changed: "caverns
N" is `worlds/underground_caverns/friction.md`, "caverns 2 N" is
`worlds/underground_caverns_2/friction.md`. Entries are numbered from 1._

## Round 1: the stair, the Land of Shadow and the lake

### 1. A wall walked into in the dark does not feed the grue

- **Wanted:** Zork's V-WALK: in a dark room, a direction with no exit at
  all is, four times in five, "Oh, no! You have walked into the slavering
  fangs of a lurking grue!", and the fifth time "You can't go that way."
- **Found:** a direction no exit answers is the world's `no_way`, and an
  `after command` "does not follow a line the parser answered with one of
  the world's lines, `unknown`, `not_here`, `no_way`", so nothing of the
  world runs on that turn. Only an exit that refuses reaches `after
  command`, and a dark room would need a refusing exit in every direction
  it does not lead, which Zork's rooms do not have (and which `no_way`
  exists to spare the author).
- **Wrote instead:** the grue takes a visitor who walks from a dark room
  into another, four times in five, as Zork's GOTO does (the adventurer's
  `as actor for go`); a wall in the dark is "You can't go that way." every
  time. Caverns 2 made the same choice without logging it.
- **Spec:** Verbs › After a command; Verbs › Exits.

### 2. The figure's hood is in its hands, and only it can hand the hood over

- **Wanted:** Zork's HOOD and CLOAK are inside the SHADOW, a transparent
  open container, so `take hood` names them while the figure stands, and
  HOOD-F moves the hood to the visitor when the figure is nearly beaten.
- **Found:** the figure is a `sprout.Actor`, whose `release` guard refuses
  any mover but itself, and guards are conjunctive, so no guard the figure
  adds can let a visitor's `take` move the hood out of it. Its `pass any
  (true)` makes the hood nameable, but not takeable.
- **Wrote instead:** the visitor's own `take` reads the figure's wounds and
  says the reveal, and sends the figure `:unhood`; the figure moves the
  hood into the sender's hands and the cloak to the ground itself (mover
  is self, so its own guard allows), and destroys itself. The hood and
  cloak are objects in the figure's kind body, so each spawned figure has
  its own, and a figure killed with the sword takes them with it, which
  is the original's unwinnable state.
- **Spec:** Movement and consent › The three roles; Kinds › Consent under
  composition; Verbs › Playing a role.

### 3. The sword comes from wherever it lies, by broadcast, not by path

- **Wanted:** SHADOW-ARRIVAL and I-SHADOW-REPLY `MOVE ,SWORD ,WINNER` from
  wherever the sword is: the great rock, a room's floor, the bottom of
  the lake.
- **Found:** caverns 2 53 still holds: a declared object's path names where
  it was declared (`junction.rock.sword`), and does not follow it. And a
  sword in another room is out of the visitor's range until the world's
  gate opens (caverns 6).
- **Wrote instead:** the visitor opens the gate and broadcasts
  `:sword_come`; the sword, wherever it lies, hears it and moves itself to
  the sender, saying Zork's line for how it came (from the stone, leaping
  back, or appearing). The same gate carries the lake's plunge (everything
  not worn into Underwater) and the death's scattering, as caverns 2's
  carried its own; the gate is now the third world to copy it.
- **Spec:** Names › Identifiers and scope; The world model › Range.

### 4. A thing inside a person reaches nothing past them, even with the gate open

- **Wanted:** the lamp sent home to the stair by a death (JIGS-UP's
  CURRENT-LAMP) by one broadcast, wherever it is: in the hands, on a
  floor, in the lake.
- **Found:** a lamp in the dying visitor's hands heard the broadcast and
  faulted the whole turn moving itself: "`endless_stair` is out of range
  of `endless_stair.lamp`". `sprout.Actor` passes nothing, so what a
  person holds reaches its holder as a surface and no further, and the
  world's gate opens nothing to it. The fault abandoned the death.
- **Wrote instead:** the visitor moves a lamp in their own hands to the
  stair themselves, and the broadcast brings home a lamp lying in a room.
  A lamp thrown into the ocean, which holds what it is given behind a
  `pass any (false)` so it is "lost forever", is past the broadcast too,
  where Zork's would come back; logged in `intent.md` as a departure.
- **Spec:** The world model › Range (a person's hands); Events › Sending
  (a broadcast through a container that refuses).

### 5. A light moved behind a wall cannot tell its old holder

- **Wanted:** a lit lamp thrown into the ocean counted off the thrower's
  light, as any light moved out of a hand is (the Light kind's `:moved`
  sends its old holder `:light with -1`).
- **Found:** by the time `:moved` runs the lamp is inside the ocean, which
  passes nothing, and the send reached nothing: the log's warning, and a
  visitor who still counted one light in the dark. Caverns 73 is the same
  shape from the other side.
- **Wrote instead:** the thrower counts the light off before the move, and
  the lamp's `:moved` only puts itself out when its destination is the
  ocean.
- **Spec:** The world model › Range; Events › Sending.

### 6. A passage rendered in a slot loses the space it begins with

- **Wanted:** Zork's SHADOW-DIAG strings, which begin with a space so that
  "The hooded figure" and " has a great deal of strength" join; one
  passage, said after "The figure" in the fight and after "The hooded
  figure" in the room.
- **Found:** "the spaces at either end of what it renders are trimmed
  before it is put in the slot", so `The figure{self.diag}` read "The
  figurehas". The same bit Zork's HO-HUM table (" doesn't seem to work.")
  in `{self.short}{self.hacked}`.
- **Wrote instead:** the passages begin at their first letter and the
  slot's caller writes the space. A note, not a gap: the rule is sound,
  and the fix is one character; logged because the Zork tables are built
  the other way and the next port will hit it again.
- **Spec:** Prose › Slots.

### 7. A clock that must outlive the visitor's stay in a room lives on the visitor

- **Wanted:** FLATHEAD-OCEAN-F's ship: seen once, one time in five per move
  on the shore, and gone two clock ticks later whether or not the visitor
  is still there to see it go (I-BOAT-DISAPPEAR is an interrupt, not the
  room's).
- **Found:** a room's `after command` runs only "while it holds them", so
  a ship timed by the room would stay in view for a visitor who walked
  away in the one move it allows and came back later. The same is true of
  the lake's cold, air and roc, and the potion's three moves.
- **Wrote instead:** every clock of the quarter is the visitor's, in the
  adventurer's one `after command`, as caverns 2 kept the Wizard's and the
  bucket's (caverns 2 37, 41). The ocean room and the ship read the
  visitor's `:ship_visible` with `{if bound actor}`; a world with several
  visitors has a ship for each, which is the nearest thing to one per
  game.
- **Spec:** Verbs › After a command.

### 8. Zork's three-tick WAIT is one move

- Caverns 2 37 and 106: `wait` is one command and one move here, where
  Zork's V-WAIT runs the clock three times and stops early at the first
  interrupt that speaks. Kept as one move; a visitor who waits on the lake
  loses one move of cold.
- **Spec:** Verbs › Engine verbs (`wait`).

### 9. The sailor is in every room

- Caverns 16: a thing that is everywhere is many things. Zork's SAILOR is a
  GLOBAL-OBJECT so that "hello sailor" is answered anywhere; here the
  sailor is an object in the `Room` kind's body, so every room has one,
  and the visitor's `greet` answers for him (the count and the ship are
  the visitor's). `examine sailor` anywhere but the ocean with the ship in
  view reads "There is no sailor to be seen."
- **Spec:** Objects (a kind's body gives every instance its own copy).
- **Status: changed** after round 2, for the brief's rule that a verb is
  offered only where something it applies to is in range: a sailor in
  every room offered `talk to`, `follow`, `kiss`, `wake`, `give` and
  `take` against him at the Endless Stair, where he is not. He is a thing
  of the Flathead Ocean now and of nowhere else, so "hello sailor" at the
  stair is `not_here`, "You can't see any such thing.", where Zork's
  GLOBAL-OBJECT answered "Nothing happens here." The running joke is kept
  only where the sailor is. A verb with no role whose words are "hello
  sailor" would answer everywhere and tie with `greet` at the ocean; not
  tried.

### 10. `take all` is filtered by the world, not the parser

- Caverns 11: Zork's ALL under TAKE skips what has no TAKEBIT; Sprout's
  `all` for the actor's own `take` binds everything in reach that is not a
  person. The adventurer's `take` passes over what it could not take when
  several are named, and says "There's nothing here you can take." where
  nothing could be, as Zork does.
- **Spec:** Parsing › Sequences, again and all.

### 11. Darkness, the score's moves, and the rest already logged

- A handler cannot ask whether a place is lit (caverns 30), so the dark
  rooms keep `:alight`, and the hooded figure appears only where the room
  says it is lit.
- The move count is the world's (caverns 23): every command counts one
  but those about the game itself, marked `:aside`.
- An NPC's lines are reported speech (caverns 2 5): the figure never
  speaks, which is the original's own choice, so nothing was lost; its
  strokes are told to the one struck by the target's own part.
- The lake is one object in three places, and the fish one in two, which
  the spec's One thing in several places carries without a workaround
  (caverns 2 48 and 93 wanted this).
- `act` with a value role (caverns 2 1) was not needed: the figure's
  `strike` carries no value, since the wound is rolled by the one struck.

## Round 2: the first revision of Q1

### 12. An instrument left unsaid is not filled from the hands

- **Wanted:** Zork's parser, which fills an orphaned instrument from what
  is held, so that `attack figure` with the sword in hand is a stroke with
  the sword, and prints "(with the sword)" to say so (gparser's ORPHAN
  and the SHADOW-F check of ,SWORD as PRSI).
- **Found:** a role not named in the line stays unbound, and nothing fills
  it; `bound weapon` is false, whatever the hands hold, and the world's
  `understood` line names only the words that were read. Four of eight
  playtesters typed the bare verb and read the feeble line while the
  figure fought on.
- **Wrote instead:** the adventurer's own `attack` reads its hands when
  `weapon` is unbound, treats a held sword as the weapon, and says "(with
  the sword)" itself.
- **Spec:** Verbs › Roles (`bound`); Parsing › When nothing matches.

### 13. A slot in a line is rendered after `after command` has run

- **Wanted:** the ship's `through`, "It is too far out to board…" while the
  ship is in sight, from `{if actor.get(:ship_visible)}` in its `say`.
- **Found:** "what a body says is rendered after the bodies have run", and
  that is after the visitor's `after command` too: in the one command the
  ship allows, the adventurer's clock cleared `:ship_visible` at the end
  of the turn, and the line, rendered then, read "There is no ship here to
  board." to a visitor looking straight at it, followed by the ship
  sailing. The room's `body` and the ship's `describe` read the same flag
  harmlessly, since a `look` and a departure in one turn agree.
- **Wrote instead:** the ship and the sailor branch in code, `if (…) { say
  too_far } else { say not_here }`, which reads the flag as the body runs.
  A `{if}` over state a clock changes is now something to avoid in any
  `say` whose turn may tick that clock.
- **Spec:** Prose › Chance in prose ("What a body says is rendered after
  the bodies have run"); Verbs › After a command.

### 14. A set role binds eight things in walk order, the room's own presences first

- **Wanted:** Zork's `take all` (ITAKE under ALL): every takeable thing in
  the room tried in turn, what lacks TAKEBIT skipped before anything is
  counted.
- **Found:** a set role "takes them all at once, in the order the range
  walk reaches them, up to as many as a set role may bind objects", and
  that is eight. Every room here holds seven shared presences (the wall,
  the grue, the passage, the ground, the ceiling, the room, the sailor),
  the lake and the fish stand in three rooms, and the walk reached all of
  them before anything lying on the floor: underwater `take all` bound the
  lake, the fish and six presences, never the lamp, and was answered by
  the fish's refusal, since one refusing participant refuses a set whole.
  With the fish out of the way it was "There's nothing here you can
  take." over a lamp and a sword. Caverns 2's rooms carry the same seven
  and the same `role target many`, so its `take all` has the same bound.
- **Wrote instead:** `take`'s set role is typed, `role target: Portable
  many`, so `all` binds only what can be carried. What stays where it is
  is reached by a second verb of the same words, `take_fixed`, typed by a
  kind `Fixed` that scenery and the figure compose, since every phrase of
  one verb must name its first role and a verb cannot offer `[target]`
  and `[scenery]` as alternatives. `Fixed` refuses `take_fixed` in a
  `permit` with the thing's own `no_take`, so that `take all`, which both
  verbs read, is read by `take`: a reading its consent allows beats one it
  refuses. The cost: a `permit` may not draw, so Zork's YUKS table ("A
  valiant attempt." / "You can't be serious." / …) is one line now.
- **Spec:** Limits › objects bound by one set role; Parsing › Sequences,
  again and all; Verbs › Phrases ("Every phrase names the first role");
  Chance › Where chance is forbidden; Parsing › Choosing a reading.

### 15. The parser reads no possessive

- **Wanted:** "remove figure's hood", typed by a playtester with the figure
  defenceless before them, to reach HOOD-F as "take hood" does.
- **Found:** no reading of "X's Y" or "the Y of X" as containment; the line
  is `not_here`. Nouns resolve by a thing's own words, and "figure's" is
  none of the hood's.
- **Wrote instead:** a verb `unmask` whose target is the hooded one, with
  the eight phrases a verb may have: `unhood`, `unmask`, `remove hood
  from`, `take hood from`, `pull hood off`, `pull back hood of`, `remove
  [figure] hood` and `take [figure] hood`. The possessive itself stays
  unread. (The verb is `unmask` and not `unhood` because a verb and a
  message may not share a name in one import list.)
- **Spec:** Parsing › Nouns; Limits › phrases per verb (8).
- **Status: still open** after round 3 (P12): a playtester typed "remove
  the figure's hood" with the figure defenceless before them. The stroke
  that brings the figure to its last point now names the hood within
  reach, so "take hood" is the wording the line suggests; the possessive
  itself is still for Sprout.

### 16. Two things answering one word in one place are drawn between

- **Wanted:** "light" at the stair to be the lamp, "sand" at the ocean the
  beach, "floor" underwater the ground, "shadow" the figure, "wall" the
  stone wall where one stands: Zork's parser takes the first object in the
  room's list, so its global objects lose to the room's own.
- **Found:** readings are ranked by consent, by words matched, then by
  nearness, and two things in one room with one word are a draw from the
  seed, logged as a warning; there is no `prefer`, and a global presence
  (the wall in every room) is as near as the room's own stone wall. An
  object's identifier is one of its nouns, and so is each word of its
  `name`, which is how `object light` and `object glow` collided with the
  lamp's "light" without either grammar saying so.
- **Wrote instead:** identifiers and names chosen so that one thing owns
  each word where it matters (`eerie_light` named "eerie glow", `dim_glow`,
  the lake's sand without "floor", the ocean's quicksand without "sand",
  the shared passage without "path", "trail" and "way", the room without
  "land" and "area", the shadows without "shadow"). "wall" cannot be
  parted this way, since both things are walls by name; the shared wall's
  text in the three rooms with a stone wall now describes the stone wall,
  so the draw is between two answers that agree.
- **Spec:** Parsing › Choosing a reading; Names › Identifiers and scope;
  Objects › grammar (`name`).

### 17. A move through a way with nothing said is "Nothing happens.", and a handler cannot say it

- **Wanted:** `dive` on the lake to go under and say the new room, as Zork's
  V-LEAP does with a bare GOTO.
- **Found:** "a reading whose `do` moves self through a way and has then
  said nothing to its person is answered with `nothing_happens`", and the
  room's description follows it, so `dive` read "Nothing happens." over
  "Underwater". And the fix cannot be moved into a handler the `do` sends
  to: "a line from a handler the queue runs afterward is not the reading's
  answer", so a plunge said from `on :plunge` would also have followed a
  "Nothing happens.".
- **Wrote instead:** a line said before each such move, and the plunge's
  words written out in both verbs that make it (`through` and `leap_at`)
  rather than once in a handler.
- **Spec:** Verbs › Moving something (`move self <direction>`); Verbs ›
  The actor's own part (what answers a reading).

### 18. A thing has eight nouns, a verb eight phrases, a `tell` six hundred characters

- Three caps met in one revision, each sound and each logged once: the
  figure's nouns, the `unmask` phrases, and the disarm line's variants,
  which went into a passage, which has no cap of its own.
- **Spec:** Limits.

### 19. A place passed through in one turn is never read

- **Wanted:** JIGS-UP's cell as a place: the dead visitor carried to it,
  where the old man stands, reads it on arriving ("You find yourself deep
  within the earth in a barren prison cell..."), the old man sends them
  back by his own act, and they wake at the stair, all in the one turn.
- **Found:** "the one arriving reads the place's description", but a
  turn's lines are rendered once its work is done, and a visitor who was
  moved on to the stair before the turn ended read the stair alone: the
  cell's description was dropped without a word, though the old man's
  `tell target` lines from the same stay all arrived.
- **Wrote instead:** the cell tells its words to whoever enters it, from
  `on :entered`, and keeps a `describe` nobody will read; the old man's
  entrance, his look and his staff are his own `tell target` lines in the
  actor's part of a verb only he performs. The transcript is the
  original's, in the original's order.
- **Spec:** The world model › Places (what the one arriving reads); The
  runtime › Effects (lines rendered against the state the turn commits).

## Round 3: the second revision of Q1

### 20. A passage cannot say what was true when it was said

- **Wanted:** SHADOW-DIAG as a table read once, in the stroke, so that
  "The figure is hurt, and its strength appears to be fading." is what
  the stroke found, whatever happens later in the turn.
- **Found:** the stroke left the figure's strength at 2, the figure's
  reply in the same turn killed the visitor, `on :die` reset the strength
  to 5, and `say "The figure {self.s_diag}"`, rendered after the bodies
  had run, read "has a great deal of strength". Friction 13 is the same
  rule seen from a clock; this is it seen from a death.
- **Wrote instead:** the line is chosen in code by the strength just
  computed and said as a literal, in both strokes, and the figure's
  `describe` branches in code the same way. A passage with a slot over
  state a later handler may change is now something this world avoids in
  any line said in a turn that fights.
- **Spec:** Prose › Chance in prose ("What a body says is rendered after
  the bodies have run"); Events (the queue drains after the body).

### 21. A room cannot tell a visitor who has just left it

- **Wanted:** the figure's withdrawal told as the visitor walks out of
  the room it stood in, from the room's own `on :left`, in the voice of
  the room's dark-withdrawal.
- **Found:** `tell item` from the room's `:left` handler reached nobody:
  the visitor was in the next room by then, out of the room's voice,
  since speech carries as range does. The `send f :vanish` beside it
  worked, the figure being still in the room.
- **Wrote instead:** the visitor keeps `:figure_near`, set when the figure
  appears and cleared when it goes by any road, and their own `on :moved`
  from a shadow room tells them "Behind you, the hooded figure steps back
  into the shadows." The line is the figure's act, said by the one who
  saw it, which is tolerable; what is lost is the room's own voice.
- **Spec:** Prose › Speech ("Pass rules govern speech as they govern
  range"); Containment › `:left`.

### 22. An engine line given nothing reads only the one who owns it

- **Wanted:** Zork's "Time passes..." everywhere but the empty shore,
  where waiting is for a ship that has passed and the line should say so.
- **Found:** `wait` has no `do`; the actor's own part may `say`, but the
  `waited` line is said as well, so the shore read both. `waited` is
  "given nothing", so a `passage waited` on the place cannot ask who is
  waiting or whether their ship is gone; on the visitor it can read
  `self` and not `here`. And it is rendered after the clock, so a flag the
  clock sets this turn is read as already set: on the turn the ship
  sailed, the line said the shore was empty before the ship had gone.
- **Wrote instead:** `passage waited` on the Adventurer, reading
  `:shore_empty`, which the visitor's `after command` sets as it begins
  from where they stand and whether the ship had already gone; so the
  sailing turn reads "Time passes..." and the next reads the surf.
- **Spec:** Verbs › Engine verbs (`wait`); Prose › Engine lines (how a
  line is found, and what `waited` is given).

### 23. A `do` that only sends is answered "Nothing happens."

- **Wanted:** one piece of logic for a call to the sailor that is nearly
  the words (`hail`, `ahoy`, `wave`, `talk to sailor`), reached from four
  verbs by one message, saying its answer once.
- **Found:** "a `do` that only sends a message is answered with
  `nothing_happens`, and what the handler then tells the actor follows
  it", and the checker warns of it. The handler's `tell` is not the
  reading's answer.
- **Wrote instead:** the block is written out in the three verbs' own
  `do`s, with `say`; the sailor's `talk` says its own line and sends the
  message, whose handler tells the rest. There is no way to share a body
  between verbs but a message, and a message cannot answer.
- **Spec:** Verbs › Readings (what answers a reading); Compiler warnings.

### 24. The reach metric misses a place passed through in one turn

- A note for the reporter, not a gap in the language: the round's metrics
  count `prison_cell` as never reached though three deaths passed through
  it, while its `on :entered` and its passages are counted as reached.
  `reach.places` seems to sample where a visitor ends the turn. The world
  cannot change this and should not try; the studio's steward may file it
  with Sprout's test reporter. Read `prison_cell` in `reach.places.never`
  as an artifact until then.
- **Spec:** Tooling › `sprout test` reports (reach).

### 25. What the ocean holds cannot hear the call, so the ocean answers it

- **Wanted:** OCEAN-F's `REMOVE` and SHADOW-ARRIVAL's `MOVE ,SWORD
  ,WINNER`: a sword thrown into the sea is "lost forever" until the figure
  needs it, and then it is in the hand.
- **Found:** friction 3's broadcast reaches the ocean, which is in the
  room, and not the sword inside it, since the ocean passes nothing; the
  sword's own `:sword_come` never ran, and the fight was unwinnable
  without a word. The ocean's `release` refused every mover, the ocean
  included.
- **Wrote instead:** the ocean handles `:sword_come` itself, walks its
  own contents for a sword (`each` from inside a container that passes
  nothing does see its contents), moves it to the caller as its own mover
  (`release` now refuses every mover but `self`), sets the glow and tells
  the caller. The lamp stays lost, as intent.md says; nothing calls it.
- **Spec:** Events › Sending (a broadcast through a container that
  refuses); Movement and consent › `mover`.

### 26. A verb a few things answer is offered against everything until its role is typed

- Caverns 135, met again: `open`, `close`, `read`, `search`, `look
  under`, `look behind`, `eat`, `kick`, `rub`, `shake`, `squeeze`, `greet`
  and `hail` had an untyped `role target`, and `Thing` answered each with
  Zork's default, so the stair offered `open wall`, `read lurking grue`
  and `eat ceiling`.
- **Wrote instead:** each is typed by a kind the things that answer it in
  their own words compose: `Openable` (the vial, the great rock),
  `Readable` (the sword), `Searchable` (the ground, the room, the grue,
  the rubble, the quicksand, the footsteps, the lake's sand, the beach),
  `Concealing` (the rock, the hood, the cloak, the lake, the ground, the
  grue), `Food` (the algae), `Touchable` (the figure, the old man, the
  quicksand), `Shakeable` (what can be carried, and a creature),
  `Squeezable` (a creature, the footsteps), `Greetable` (a creature, the
  ship, the footsteps), and `kick` by `Creature`, which nothing answered
  in its own words and which "taunt" fits. Zork's default stays on the
  kind as a `default` play. The cost is caverns 135's: Zork's jokes for
  these verbs said of anything else ("How does one read a wall?", "I
  don't think that the ceiling would agree with you.", "Kicking the
  ground doesn't seem to work.", "It's a well known fact that only
  schizophrenics say \"Hello\" to a lamp.") are the engine's `cannot`
  now. The general verbs (move, raise, lower, find, smell, listen, climb,
  break, burn, cut, turn, tie, play, count, enter, cross, jump, unlock)
  keep Zork's default on `Thing` and are offered against everything, as
  caverns 135 kept them.
- **Spec:** Verbs › Declaring a verb; The runtime › The view (a verb is
  offered when its roles can be filled).

### 27. A bare call cannot be said only where there is somebody to call

- **Wanted:** bare `hail`, `ahoy`, `wave` and `shout hello` at the shore
  with the ship passing, and "who is there?" asked of the footsteps in
  the land of shadow, offered there and nowhere else.
- **Found:** caverns 137: a verb with no role is offered everywhere, and
  every phrase of a verb with a role names it, so a bare call cannot be
  tied to a place or a thing. `hail_bare`, `wave_bare` and `who_there`
  were on the stair's list with nobody to call and nobody to ask; the
  brief keeps a verb with no role for what works everywhere.
- **Wrote instead:** they are gone. The call names whom it is for: `ahoy
  sailor`, `hail ship`, `wave to the sailor`, `call sailor`, `hail
  footsteps`, `call to the footsteps`, `hello footsteps`, each typed by
  `Greetable` (26) and offered only where one is in range; they answer as
  the bare ones did, and hold the ship the same once. Bare `hail`,
  `ahoy`, `wave` and `who is there` are `unknown`, where Zork would ask
  "What do you want to hail?" and this world's footsteps answered a
  question. A no-role verb typed but never offered is still asked of
  Sprout (caverns 137, sprout#787).
- **Spec:** Verbs › Declaring a verb ("A phrase always names the
  target"); The runtime › The view.
- **Status: changed** after round 3 (P4, P10): the first things two
  playtesters typed at the passing ship were bare `hail`, which was
  `unknown`, and bare `shout`, which was Zork's yell and spent the ship's
  one command. A shout works everywhere, and `yell` was already a verb
  with no role, so `hail`, `ahoy`, `wave` and `call out` are now words
  for it, and a yell at the shore with the ship in sight is the call
  across the water the sailor holds for, once; elsewhere it is still
  "Aaaarrrrgggghhhh!". "Who is there" is a verb with no role too, since
  a question into the dark is asked anywhere and answered everywhere,
  by the footsteps, the sailor, the man at the cliff or nobody. The
  rule that a verb is offered where something it applies to is in range
  is kept by reading both as things that work everywhere, which they
  do; what is given up is caverns 137's wish for a bare call tied to a
  place. "Call out to the footsteps" is an intent over `hail`.

## Round 4: the first revision after round 3, and the second quarter

### 28. An NPC cannot take a thing from a visitor's hand; the visitor hands it over

- **Wanted:** OLD-MAN-F's GIVE: the old man takes the waybread from the
  visitor (REMOVE and the eating), and MAN-F's lift of the chest from the
  visitor's arms ("All at once, the chest is lifted from you").
- **Found:** `sprout.Actor` "releases only to its own hand, so nobody is
  picked": a `move item to self` in the old man's `as recipient for give`
  is refused by the giver's own `release`, since the mover is the old
  man. Guards are conjunctive, so nothing the old man composes can let
  him through.
- **Wrote instead:** the adventurer's own `give` moves the waybread into
  the old man when he is awake and it is the waybread, and the old man's
  part says what he does with it and destroys himself with it inside.
  The chest is not tied while it is held ("put the chest down first"),
  so the man lifts it from the ledge and never from the visitor's arms;
  the world moves it into him, since only the world reaches both the
  ledge and the top of the cliff, and he lets it down himself, since
  only he may release what he holds.
- **Spec:** Movement and consent › The three roles; Kinds › Consent under
  composition.

### 29. A room's `after command` cannot tell an aside from a move

- **Wanted:** CLIFF-F's M-END weather (movement among the trees, the sea
  from the southwest) and I-OLD-MAN-SLEEPS's count, on the room, running
  only on moves that count (`score`, `verbose` and the like are no move).
- **Found:** what runs after a command runs nearest the visitor first,
  so the adventurer's own `after command`, which counts the move and
  clears its `:aside`, has run before the room's; the room reads
  `:aside` as already false and cannot tell `score` from `wait`. The
  lamp, which is carried, runs before the visitor and reads it right,
  which is why the battery counts moves correctly.
- **Wrote instead:** both clocks are in the adventurer's own counted
  block, keyed on `here`; the rooms keep no `after command`. The same
  fold the ship's and the lake's clocks took in round 1 (friction 7),
  for a different reason.
- **Spec:** Verbs › After a command (the order things run in).

### 30. A verb whose phrases do not write its name gets nothing from `synonyms`

- **Wanted:** "grab rope" at the ledge, where the man has said "grab onto
  the rope", read by `take_fixed`, whose words are `take`'s.
- **Found:** a synonym "takes every phrase of the verb that writes the
  verb's name", and `take_fixed`'s phrases write `take`, so its
  `synonyms "grab", "hold", …` generated nothing, silently; "grab rope"
  was `unknown`, though "take rope" was read. The spec says so; what is
  missing is a warning for a `synonyms` line that generates no phrase.
- **Wrote instead:** the words written out as phrases, eight of them.
- **Spec:** Parsing › Synonyms; The compiler › What it warns about.

### 31. An exit's guard cannot read the actor, so the rope is the world's

- **Wanted:** CLIFF's `DOWN TO CLIFF-LEDGE IF ROPE-FLAG`, with ROPE-FLAG
  changed by what the man does for one visitor.
- **Found:** an exit's `when` binds neither `actor` nor `here`, and may
  read the place, the place it leads to, and the world. A per-visitor
  rope, kept on the adventurer as the ship is, could not decide the
  cliff's way down.
- **Wrote instead:** whether the rope is down, and the man's stage
  (unmet, waiting, away, returned, at the cliff, gone), are the world's,
  set by messages from whoever changes them; his clocks (the five moves
  to his appearing, the ten to his return, his patience) are the
  visitor's, as every clock here is (friction 7). A world with several
  visitors has one man and one rope, which is right, and one set of his
  clocks per visitor, which is the nearest thing. The Timber Room's "You
  cannot fit through this passage with that load" is the same shape: the
  exit cannot weigh the visitor's hands, so the adventurer's own part of
  `go` refuses it, reading a `:bulky` flag its `after command` set at
  the end of the previous command.
- **Spec:** Verbs › An exit may be conditional; Verbs › Engine verbs
  (`go`, the actor's own part).

### 32. A description may not draw, but a look may set what it reads

- A note, not a gap. KEY-F's EXAMINE picks one of five shapes for the
  strange key each time it is looked at. A `describe` may not draw, so
  the key plays `as target for examine { do { self.set(:shape,
  random(5)) } }`, which the compiler accepts for an engine verb, and the
  description, rendered after the turn's work, reads the shape the look
  chose. The spec's Chance says a description re-runs on every poll and
  must not shimmer; this one changes only when somebody looks, which is
  what the original wanted.
- **Spec:** Chance › Where chance is forbidden; Verbs › Engine verbs.

### 33. The man hauls across two places through the gate

- **Wanted:** I-MAN-LIFT: the man at the top of the cliff hauls the
  visitor up from the ledge and hands them the staff.
- **Found:** the man is an actor in the Cliff, the visitor in the Cliff
  Ledge, and an `act haul (target: …)` on a target out of range tells
  it nothing and could move nothing. The brief asks that what he does to
  the visitor he does by acting.
- **Wrote instead:** the visitor's clock opens the world's gate (friction
  3) and asks the man to haul; with the gate open he acts, tells the
  target, lets the chest down and hands the staff over, and the
  visitor's own part of `haul` moves them to the top while the gate is
  still open, which it is, since the gate shuts in the message queued
  after his. Order of delivery is the spec's, and the test pins it.
- **Spec:** Verbs › Acting; Events › Sending; The runtime › Turns.

### 34. One earthquake and one indicator for every visitor

- **Wanted:** I-CLEFT (once, 70 to 140 moves in) and I-VIEW-CHANGE (every
  four moves), game clocks; and the brief's question of what one
  visitor's earthquake does to another's aqueduct.
- **Found:** a clock that counts moves is a visitor's, so a world-level
  clock has to be fed by each visitor's `after command`.
- **Wrote instead:** each counted move sends the world `:move_made`; the
  world draws the quake's move on the first of them, counts down, and
  broadcasts `:quake` once, which each adventurer tells themselves in
  the words for where they stand; the world cycles the indicator the
  same way and broadcasts `:view_changed`, which the vista tells its
  occupants. There is one earthquake and one aqueduct: the first
  visitor's seventieth-odd move breaks the arch for everyone, which is
  what one world should do, and the brief's open question is answered
  this way for the table and the quake; the time machine is the third
  quarter's to answer.
- **Spec:** Verbs › After a command; Events › Sending (broadcast).

### 35. A death's own room is never read, again

- Friction 19, met again at the Sacrificial Altar: ZORK-IV-F kills on
  entering, with the room's text as the death's. A visitor carried to
  the cell and the stair in the same turn never reads the altar, so the
  altar tells them its name and its text itself from `on :entered`, as
  the cell does, and keeps a `describe` nobody reads.
- **Spec:** The world model › Places; The runtime › Effects.

### 36. A declared object that is eaten, broken or spent

- The waybread is eaten, crushed or given; the staff is broken; the
  repellent can explode. A declared object destroyed "never comes back",
  which the compiler warns of, so each is spawned instead: the waybread
  into the Cliff and the staff into the man's hands when a visitor first
  comes to the top, the can into Room 8 when one first arrives there. The
  warning is right and the cost is small; logged because every port has
  consumables and will do this.
- **Spec:** The world model › Destroying; The compiler › What it warns
  about.

## Round 5: the second revision after Q2, nothing widened

### 37. A direction after a thrown thing is dropped without a word, and the throw goes ahead

- **Wanted:** `throw lamp south`, typed at the Lake Shore to get the lamp
  across the water, answered as what it is: a throw in a direction, which
  Zork's parser would have asked about ("What do you want to throw the
  lamp at?") and never performed.
- **Found:** the parser read the line as `throw [target]` with "south"
  left over, said so only as "(throw lamp)", and ran the bare throw's
  `do`, which smashes a lamp. A reading that discards trailing words
  went ahead with an irreversible act; the visitor lost their only light
  to a line that did not say the thing they typed. Round 4's P7.
- **Wrote instead:** two verbs whose phrases read the whole line,
  `throw_dir` (the eight compass directions) and `throw_far` (up, down,
  across, away, over, far, ahead, overboard), answered by the visitor's
  own part without a throw: at the lake, that it is too wide to throw
  across; elsewhere, that the thing would land that way, in pieces if it
  is the lamp, and to say what it is thrown at. Sixteen phrases to say
  "this line has a direction in it" is a cost; the gap is Sprout's: a
  reading that leaves words unread should not win over nothing, or
  should at least be refused where the verb is destructive. For
  overstory-social/sprout.
- **Spec:** Parsing › Matching a line; Parsing › Choosing a reading;
  Parsing › When nothing matches.

### 38. A compound line answers falsely for the clause it could not read

- **Wanted:** `take the lantern and politely ask the stair where it goes`
  and `push the rock, then pull the sword` answered as Zork would, with
  the first clause done and the second said to be unread.
- **Found:** the first was answered "You can't take the lamp." at the
  stair with the lamp at the visitor's feet, and `get lamp` two lines
  later took it; the second "You can't see any such thing." at the
  Junction with the rock and the sword in plain view. The split on "and"
  and "then" seems to have bound the whole remainder as a noun phrase
  and reported the failure as the world's `cannot` or `not_here`, which
  are untrue of the world. Round 4's P8. Nothing in the world can
  intercept a line before the parser splits it. For
  overstory-social/sprout: a clause that cannot be read should be
  reported as unread, not as a missing or untakeable thing.
- **Spec:** Parsing › Sequences, again and all; Parsing › When nothing
  matches.

### 39. A greeting followed by a sentence is read as a greeting of the sentence

- **Wanted:** `hello, can you stop the ship?`, typed at the Flathead Ocean
  with the ship passing, heard as a call across the water, which any
  `say <anything>` there is.
- **Found:** `greet`'s phrase `"hello, [target]"` bound "can you stop the
  ship" as the target, found nothing by that name, and answered
  `not_here`; the bare `hello` verb could not read it either, since its
  phrase is the one word. The ship's one command was spent on it. Round
  4's P10, and caverns 2's 7 (no addressee reading) from the other end:
  there is no way to say that a leading vocative or greeting may be
  followed by free text the world does not need to parse. Not worked
  around: a phrase cannot end in a slot that swallows the rest of the
  line, and `say [anything]` is already as wide as a phrase goes.
- **Spec:** Parsing › Matching a line; Verbs › Phrases.

### 40. A draw's bound is a literal, and a list cannot be drawn from

- **Wanted:** SHADOW-ARRIVAL's pick of a way for the figure to block: one
  of the room's real exits, drawn at random, so that the figure never
  blocks a direction whose only answer is a wall (round 4's P6, where it
  blocked the northeast of a room with no northeast, and the visitor
  walked into the wall five times after the fight).
- **Found:** "the bound of `random` ... [is a] positive integer literal",
  so `random(self.get(:nways))` is refused; and a list property can be
  walked and asked `includes`, but not indexed or drawn from, so a
  `:ways [Direction]` on each room could not give up one member.
- **Wrote instead:** each shadow room declares its count of real exits
  and names them in eight `Direction` properties, `:w0` to `:w7`; the
  pick branches on the count (3, 6, 7 or 8, the counts the eight rooms
  have) to a `random` with that literal, carries the draw out of the
  branch in a property, and chains eight `if`s to the direction. Correct
  and uniform, and three times the text the idea needs.
- **Spec:** Chance (the bound of `random`); Properties and values (lists).

### 41. Friction 22, again: the wait on the ledge

- The ledge while the man is away needed `wait` to say where the rope
  went and that he said he would be back (round 4's P4), and `waited` is
  given nothing, so the visitor sets `:ledge_waiting` at the top of
  their `after command`, as `:shore_empty` is set, and the passage reads
  it. The same shape as 22, for the same reason; noted, not re-argued.
- **Spec:** Prose › Engine lines (`waited`).

### 24, status after round 4

- Still open: round 4's metrics list `prison_cell` as never reached
  through five deaths across two runs (P13). Read it as a measurement
  gap until Sprout's reporter counts a place a visitor was carried
  through within a turn.

## Round 6: the revision after round 5, and the third quarter

### 42. A verbatim block holds no slots, so the Royal Puzzle's map is rows of prose

- **Wanted:** CPWHERE: the three-by-three map of the squares round the
  visitor, set in a fixed-width face, redrawn every move from the grid.
- **Found:** `{verbatim}` keeps every space and line break and "holds
  only words: a slot or a block inside one is refused", and a passage
  outside it reflows every run of spaces to one. A map whose cells are
  read from state cannot be set in a block that keeps its columns.
- **Wrote instead:** three one-line passages, one a row, each a paragraph
  of its own, with two-letter cells (`MM`, `SS`, `..`, `??`) as the
  original's and `__` for open floor where the original has two spaces,
  since two spaces reflow to one and vanish. In a proportional face the
  columns drift; the glyphs are two characters each so they drift
  together. The brief foresaw this one.
- **Spec:** Prose › Verbatim; Prose (reflow).

### 43. A dial set to a number: the integer role does it

- A finding the other way. The brief expected "turn dial to 776" to find
  no way to read a number from a line; the spec's Value roles read one:
  `role year: integer`, `"turn [target] to [year]"`, and the dial plays
  `year from 0 to 999`, so 776 binds and 1200 arrives unbound and is
  answered "You can't set it beyond 999." A whole-line reading beats
  `turn`'s partial one, so "set dial to 776" is never "set dial" with the
  rest dropped. Nothing was lost. The push of the gold machine is the same
  shape with a `symbol` role over the compass directions, so "push machine
  east" is one reading and never a bare push with "east" dropped
  (friction 37's gap, closed by typing the role).
- **Spec:** Verbs › Value roles; Parsing › Choosing a reading.

### 44. A vehicle that is pushed cannot follow its pusher by itself

- **Wanted:** V-PUSH-TO: the gold machine walked from room to room with
  whoever pushes it, and ridden as a vehicle.
- **Found:** the machine is a place inside a room (Places inside places),
  which is the vehicle the spec means; but only an actor may `move self
  <direction>`, and an actor passes nothing and releases only to its own
  hand, so a machine made an actor would hold its rider in. It cannot be
  an actor, so it cannot take the exit its pusher takes; and its pusher,
  once through the exit, cannot name it, since a declared object's path
  names where it was declared and does not follow it (caverns 2 53), and
  a handler cannot store the binding `:moved` gives it.
- **Wrote instead:** the pusher walks through the way as `go` would, and
  their own `:moved`, which binds the new place, reads its `:id` and, with
  the gate open, broadcasts `:machine_follow` with that `Dest`; the
  machine hears it wherever it stands and moves itself by an `if` chain
  over the enum. The same broadcast carries it home when the robot takes
  it and when a trip ends. A visitor landing in the present's Technology
  Museum is moved to the room and then, by a message queued after the
  machine's, into the machine, since the machine's path cannot be trusted
  to resolve once it has moved.
- **Spec:** Verbs › Moving something; Names › Identifiers and scope;
  Events › Receiving (a sender binding cannot be stored).

### 45. The one who pushes a wall must be the one who asks the world to move it

- **Wanted:** CPWALL-OBJECT: the wall's own action slides it and moves
  the visitor after it.
- **Found:** the grid is the world's, since it is one puzzle for everyone,
  and the squares' ways out read copies of it; so the wall must ask the
  world, the world must tell the squares, and the visitor must move only
  after the squares have heard. A handler's `from` is the sender, so a
  world told by the wall could tell only the wall when it was done, and
  the wall cannot keep the visitor's binding to pass the word on.
- **Wrote instead:** the wall decides and says, and sends the visitor
  `:cp_push` with the direction; the visitor sends the world the cell the
  wall leaves and the cell it enters; the world moves the wall, carries
  what lay in its path to the Side Room, broadcasts `:cp_changed` to every
  square, and sends `:cp_done` to its sender, the visitor, who then walks
  through the way that has just opened. Breadth-first delivery puts the
  squares' refresh before the visitor's step, which the test pins.
- **Spec:** Events › Sending (order); The runtime › Turns (the queue).

### 46. One grid, thirty-six squares, and a square cannot read its neighbour

- A description cannot read another place's properties, and an exit's
  `when` reads only the place it leads to, so a square that drew itself
  from its neighbours would have to be the world. Each square instead
  keeps twelve copies of the cells round it, set by the generator from the
  original's table and refreshed on `:cp_changed`; the kind draws itself
  and decides its diagonals from the copies, and only the exits and the
  refresh are written per square, by a script, since a property cannot be
  named by a computed index. The world's own handlers are the same shape:
  thirty-six-way `if` chains to read and write a cell by number.
- **Spec:** The world model › Range; Verbs › An exit may be conditional;
  Properties and values (no indexing).

### 47. A composer's own play does not replace a composed one

- **Wanted:** `climb stair` at the Endless Stair answered once, "The
  stairs are endless."
- **Found:** `EndlessStairs is Stairs` wrote its own `as target for
  climb_up`, and both ran: the spec's table has every `do` of a role run
  (How members combine), so the stair said "You should say whether you
  want to go up or down." and then its own line. Round 5's P11.
- **Wrote instead:** `without as target for climb_up from Stairs` and the
  same for `through`, on the endless stair and on the Ladder Top's
  staircase. A kind that means to replace a composed play writes the
  `without`; a `default` play on the base would have done it by every
  path, and the Stairs kind now ought to be written that way.
- **Spec:** Kinds › How members combine; Suppressing a contribution.

### 48. `wait 20` is eight phrases, and a number nowhere

- `wait` is an engine verb with no `do` and no roles, so a number after
  it cannot be read as a value role; the remainder is dropped and the
  visitor waits one move, told "(wait)". A no-role verb `wait_long` with
  eight literal phrases (`wait 2` … `wait 100`) answers in character that
  this world waits one move at a time. A `sleep`, `rest` or `wait a while`
  is an intent over `wait`. Round 5's P9 and P10.
- **Spec:** Verbs › Engine verbs; Parsing › When nothing matches.

### 49. Three machines and three doors answer one noun

- Zork's parser asks "Which machine do you mean?"; Sprout's draws among
  equally near things and says which it took. The grey, black and gold
  machines all answer to "machine", and the iron, stone and wooden doors to
  "door", so `examine machine` is a draw. The gold machine is the one that
  is boarded and pushed, so the grey and black ones refuse `through` and
  `climb_up` in a `permit`, which lets the gold one's reading win (a
  reading whose consent allows beats one refused), and `push_to` is typed
  by `Pushable`, which only the gold one composes. `examine machine` and
  `open door` stay draws, told by the `meant` line; the original's question
  has no equivalent.
- **Spec:** Parsing › Choosing a reading; Spawning (nearness).

### 50. A declared thing that history removes goes unseen

- Friction 36 again, for the Crown Jewels: TGOTO REMOVEs the sceptre and
  the knife once the ring is stolen, and the ring itself when it is hidden
  under the seat. They are declared on the pedestal of 776, since a
  robbery is judged by counting what stands there, so they cannot be
  spawned on first sight, and a declared thing destroyed never comes back
  and warns. They set `:unseen` instead, which `count`, `holds`, the
  listing and the nouns all pass over; the ring found under the seat is a
  spawned one. The same to everyone, and no warning.
- **Spec:** The world model › Unseen; Destroying.

### 51. `{one of}` may not stand in a description

- The guards' voices wanted to vary the topic of their debate when looked
  at; a `describe` may not draw, since it is run on every poll. The draw
  is in `listen`'s `do`, and the description says they are debating and
  that listening would tell what about.
- **Spec:** Chance › Where chance is forbidden.

### 38 and 39, status after round 5

- Still open, and seen again (round 5's P9): `shout hello`, `shout up`
  and `shout "who is up there?"` were read as a bare shout with the rest
  dropped and only "(shout)" to say so; `wait 20` as one move; `say
  hello, who is up there?` split at the comma into three answers; `say
  hello, sailor` was `unknown`. The common forms are now phrases of their
  own (an intent `shout_more` over `yell`, `say_hello_comma` over `greet`,
  `wait_long`), which is coverage, not a fix: for overstory-social/sprout,
  a remainder dropped should be refused or read, not silently dropped,
  and a greeting with a comma should reach the greeted.
- `man, who are you?` is the no-addressee decision (caverns 2 7), met
  again at the top of the cliff; the man answers `talk to man` and
  `hello man`, and the line with the comma is `unknown`.

### 24, status after round 5

- Still open, and a second place: the Sacrificial Altar joins the Prison
  Cell among places a visitor is carried into and out of in one turn and
  never counted as reached (round 5's P13); `reach.places.never`
  overstates by two. For Sprout's test reporter.

### 3, a note after round 5

- Round 5's P3 took the amulet's vanishing for a bug in `spawn … in
  self`; it was the death the same turn: the inventory line is rendered
  after the turn's work, so it read the hands the old man had already
  emptied. Not a gap; the death's own line now says what became of what
  was carried, and the sand's line about the glint reads whether the
  shiny thing is still there.

### 52. `take all` with full hands binds the hands

- **Wanted:** the spec's `all` for a role only the actor plays and takes,
  which "first leaves out what the visitor already carries", so that
  `take all` in a room with eleven things on its floor and eight in hand
  reaches for the floor.
- **Found:** in the Jewel Room, after a trip through time had left eleven
  things on the floor, the first `take all` bound the one thing worn and
  seven of the floor's eleven, and the second bound the eight in hand and
  nothing on the floor, answered by this world's own "There's nothing here
  you can take." The walk takes the hands first and the cap of eight
  closes before the floor is reached; what is carried is not left out.
  The adventurer's `take` moves `t` to `self` inside `each t of target`,
  which is the shape the spec names.
- **Wrote instead:** nothing in the world can change the binding; the
  walkthrough takes the last four by name. For overstory-social/sprout:
  either the exclusion the spec describes is not applied, or the cap is
  counted before it.
- **Spec:** Parsing › Sequences, again and all (`all` and what is
  carried); Limits (objects bound by one set role).

## Round 7: the revision after round 6, nothing widened

### 53. A thing cannot move what it does not hold

- **Wanted:** the Scenic Vista's wall (and the torch's bracket), as the
  `surface` of `put torch on wall`, to take the torch out of the
  visitor's hand and set it back in its bracket: `move item to here` in
  the surface's `do`.
- **Found:** a MoveFault, "`scenic_vista.torch` is out of range of
  `scenic_vista.wall`, so it could not be moved": a thing's body reaches
  only what is in its own range, and the torch in a visitor's hand is
  not in a wall's. The adventurer's own `as actor for put_on` moves the
  torch, as it already moved a jewel onto the pedestal of 776 and as the
  old man took the waybread from a hand by the visitor's own `give`
  (round 4), and the wall's part says the line.
- **Status:** the same shape as caverns 2's finding that only the hand
  lets go of what it holds; not a gap, but every surface that takes a
  thing needs a branch in the visitor's own part.
- **Spec:** Objects › Moving something (range); Verbs › Readings and
  parts (the actor's part and the target's).

### 54. A `describe` cannot send, so a flicker cannot be hushed

- **Wanted:** round 6's P13: when the viewing table is examined on the
  move the indicator is about to change, to tell the flicker first and
  then the new image, and to hush the end-of-turn flicker line for that
  visitor, so the two never disagree in one turn. The hush wanted a
  per-visitor flag set by the examine; a `describe` is run on every poll
  and may not `send` or `set`, so it cannot mark anything.
- **Wrote instead:** on that move the table shows no image and says the
  indicator is flickering and will settle; the flicker line comes at the
  end of the move as always, and the next look has the new view. One
  move's image is lost; nothing disagrees.
- **Spec:** Chance › Where chance is forbidden (a description re-runs on
  every poll); Prose › describe.

### 55. Eight phrases, eight nouns

- **Wanted:** `yell` to read "call up", "call upward", "yell up", "call
  up the cliff", "shout up the cliff" and "call up to the top" beside
  its eight; the man as the ledge hears him to answer "person",
  "somebody", "someone", "anyone", "anybody" and "whoever" beside his
  five nouns; `board` to take twelve ways of sitting in a thing.
- **Found:** a verb or an intent may have eight phrases and a thing
  eight nouns, and the compiler refuses the ninth. The extra shouts are
  an intent `call_up` of their own over `yell`, `board` keeps the eight
  most likely, and the man keeps "person", "somebody" and "someone" and
  loses "anyone", "anybody" and "whoever", which "call to whoever is
  there" would not have reached in any case (38).
- **Status:** the caps are the spec's and are reasonable; a second
  intent over the same verb is the way round, at the cost of a name.
- **Spec:** Limits (phrases of a verb, nouns of a thing).

### 38, status after round 6

- Still open, and seen again (round 6's P7): "call up to the person
  above" and "call up to whoever is there" were `not_here`, and "shout
  hello, can you help with the chest?" `unknown`. The first is now read
  ("person" is the man's word and `call up to [x]` an intent over
  `hail`); the other two are a relative clause and a sentence after a
  comma, which no phrase reads. For overstory-social/sprout, as before:
  a remainder should be refused or read, not silently dropped, and a
  greeting with a comma should reach the greeted.

### 49, status after round 6

- `sit in machine` no longer draws (round 6's P10): the sitting verb's
  role is typed by `Seatable`, which the gold machine and its seat alone
  compose, so there is one machine for it to mean. Bare `examine
  machine` and bare `open door` in the museum still draw among three,
  with the engine's warning, where the original asks which.
