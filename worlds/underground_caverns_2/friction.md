# underground_caverns_2: friction

_The author's log of what Sprout would not let the port say, and what was
written instead. Each entry names the spec section it touches. An entry
may cite the caverns' own log (`worlds/underground_caverns/friction.md`)
by number where nothing has changed. Entries are numbered from 1; the
caverns' numbers are written "caverns N"._

## The Wizard

### 1. An NPC cannot act with a chosen value

- **Wanted:** the Wizard casts one of twelve spells: `act enchant (target:
  from, spell: :feeble)`, the spell a value role of the verb, so the
  visitor's own part reads which it was.
- **Found:** `act` takes a binding for every role and refuses a symbol
  literal: "`spell` is filled by the name of something in reach, and
  `:fear` is not one." A value role can only be bound from what a visitor
  types.
- **Wrote instead:** the Wizard keeps the spell he is casting on his own
  `:spell`, and the visitor's `as target for enchant` reads
  `actor.get(:spell)`. It works, and it means the verb carries nothing:
  anyone reading the reading sees `enchant`, not which spell.
- **Spec:** Verbs › Acting; Verbs › Value roles.

### 2. A spell that refuses every move never sees a move pass

- **Wanted:** Zork's spells run for a counted number of moves, and every
  input is a move, so Freeze, Float and Fence wear off whatever the
  visitor types.
- **Found:** `after command` "does not follow a reading its consent pass
  refused", and a spell that refuses `go` is a refusal: a visitor who
  kept trying to walk under Float would never see the spell count down.
  Only `wait` would do it, and nothing tells them so.
- **Wrote instead:** a spell lasts a wake, three to eighteen minutes
  (five to thirty-five moves at the host's half minute a move), set when
  it is cast and answered in the adventurer's `on :woke`. In scripted
  play nothing passes the clock but an `advance` step, so a frozen tester
  is frozen until the script advances it.
- **Spec:** Verbs › After a command; Time › Wakes.

### 3. No `as actor for any`

- **Wanted:** one permit for the Freeze spell: "You are frozen solid. You
  might as well wait it out" on everything but `wait` and `diagnose`.
- **Found:** the wildcard is `as target for any` and `as tool for any`
  only: "`as actor for any` names a role, and `for any` plays every verb
  at once, so it names what kind of role instead."
- **Wrote instead:** the same permit on every verb's actor part, some
  seventy lines of it, as the caverns wrote the dead visitor's (caverns
  125).
- **Spec:** Verbs › Playing a role (the wildcard).

### 4. The Wizard cannot find the visitor; the visitor's clock cannot wait for the room

- **Wanted:** I-WIZARD, every four moves, looks at where the visitor is
  and appears there.
- **Found:** an NPC has no way to learn a visitor's place (caverns 83,
  84). Driven from the visitor's `after command` instead, his lines came
  before the room on `look`, since `after command` runs "before what an
  engine verb answers" (caverns 20).
- **Wrote instead:** the Wizard keeps his own wake, every two minutes,
  and broadcasts `:where_are_you`; each visitor with no spell on them
  answers `:wizard_turn` with their room's `:id` (every room keeps one,
  an option of `Dest`, as caverns 96 and 115 kept rooms as values); he
  moves himself there by a twenty-five-way `if` and does his turn. His
  lines then arrive as a turn of their own, after the visitor's. The cost
  is that his clock is the host's clock and not the visitor's moves: in
  interactive play with no clock he never comes, and a visitor who stands
  still is visited as often as one who walks.
- **Spec:** Actors and visitors (`roams`); Events › Sending; Time › Wakes.

### 5. An NPC's `say` is reported speech

- **Wanted:** the robot's "Whirr, buzz, click!" and the button's "A dull
  thump is heard in the distance." as Zork prints them, when the robot
  is the one acting.
- **Found:** a `say` in a part the robot's `act` runs "comes from it
  instead", rendered through `npc_says` as `the robot says "…"`.
- **Wrote instead:** `tell` throughout the robot's parts and in the
  buttons' when the actor is the robot, with the quotation marks written
  into the words. It reads as Zork does; a second visitor in the room
  reads it too, which Zork never had to think about.
- **Spec:** Verbs › Acting; Prose › Engine lines (`npc_says`).

### 6. An NPC's way that does not apply says nothing

- **Wanted:** "ROBOT, GO UP" in the Low Room: Zork's robot is walked by
  V-WALK and answers "You can't go that way."
- **Found:** `move self up` where no exit applies "moves nothing and
  nothing is said to anyone", by design.
- **Wrote instead:** nothing: the robot whirrs and stays where it is.
- **Spec:** Verbs › Moving something.

## Orders, answers and words

### 7. "ROBOT, GO EAST" — a line has no addressee, but a comma may be in a phrase

- **Wanted:** Zork's `ROBOT, <things to do>`, the parser switching the
  actor to the robot and running any verb as it.
- **Found:** the spec says a line has no addressee form (caverns 64).
  But a phrase may contain a comma: `"[target], go [way]"` compiles and
  reads `robot, go east` whole, before the comma is tried as a command
  separator.
- **Wrote instead:** eight order verbs with the robot as first role
  (`robot_go` with a `Direction` value role, `robot_push` typed by
  `Button`, `robot_lift`, `robot_drop`, `robot_other`, `robot_eat`,
  `robot_see`, `robot_stuck`), each phrased with and without the comma
  and as "tell the robot to …". The robot does the thing by `act` or
  `move self`. What it cannot take is an arbitrary verb: "robot, sing"
  needs a phrase of its own or is `unknown`. And `robot, lift cage` with
  no cage in reach is answered `unknown` rather than `not_here`, since the
  comma reading fails and the parser falls back to splitting the line.
- **Spec:** Parsing › Sequences, again and all; Verbs › Declaring a verb.

### 8. `in` and `out` cannot be a robot's directions

- **Wanted:** "robot, go out" of the closet.
- **Found:** "`in` is a word of the language, so it cannot be an option
  of `Direction`."
- **Wrote instead:** the options are `inside` and `outside`; "robot, go
  out" is a wrong guess, and the robot says its programming is
  insufficient.
- **Spec:** Reserved names; Properties › Enums.

### 9. The riddle's answer is a value role, and an unknown word arrives unbound

- **Wanted:** Zork's ANSWER and SAY, listening for WELL.
- **Found:** this fits: `verb answer { role word: symbol }` with `word from
  :answers`, a list of one option. "answer bucket" arrives with `word`
  unbound and the stone door laughs; "say well" binds. Two verbs reading
  "say well" tied until the duplicate phrase came out.
- **Wrote instead:** as wanted. A bare "well" is a verb of its own.
- **Spec:** Verbs › Value roles; A role-player narrows its own options.

### 10. The thunder, told from a handler, left the reading unanswered

- **Wanted:** the door's thunder as the answer to "say well".
- **Found:** caverns 21 again: a `tell self` in the handler the `do` sent
  to does not count as the reading's answer, so the engine added "Nothing
  happens." before the thunder.
- **Wrote instead:** the `do` says the thunder; the handler scores and
  opens the door.
- **Spec:** Verbs › The actor's own part (`nothing_happens`).

### 11. Eight phrases, eight nouns, one `{one of}` too many

- `answer` had nine phrases and the topiary hedges nine nouns (caverns
  34): trimmed. A `permit` may not use `{one of}`, so Zork's DUMMY lines
  ("Look around.", "You think it isn't?", "I think you've already done
  that.") for opening an open box are one line. **Spec:** Limits › Static
  caps; Chance › Where chance is forbidden.

## Rooms that turn the visitor

### 12. The Carousel Room's random turn happens after the step, not instead of it

- **Wanted:** CAROUSEL-ROOM-FCN: a walk out of the spinning room, west or
  four times in five any way, goes a random one of seven ways instead.
- **Found:** a way out cannot be redirected before the move (caverns 42,
  53, 101): the engine's `go` moves the visitor first, and the actor's
  own part runs after, in the room they chose.
- **Wrote instead:** the visitor's `as actor for go`, finding itself just
  out of the Carousel while it spins, says Zork's line and, four times in
  five, picks one of the seven and goes there through the world's gate.
  The room they passed through is told not to count them (`:spun`): no
  visit, no points, no description. West while it spins leads back into
  the room itself, which the part reads as "always random". The three
  ways into quarters not built are refusing exits, so a random draw of
  them says the refusal and leaves the visitor in the Carousel, where
  Zork would have moved them on. The Low Room's "You cannot get your
  bearings…" is the same trick, between the Machine Room and the Tea Room;
  a bad direction typed there is `no_way` where Zork would still move
  the visitor.
- **Spec:** Verbs › Exits; Moving something; After the move.

### 13. A way out cannot read the room it leads to

- **Wanted:** the Posts Room's way east refused once the Pool Room is
  blown up (MUNG-ROOM), and the Machine Room's way south once the closet
  is full of gas: `exit east -> pool_room when (!pool_room.get(:munged))`.
- **Found:** a sibling room is out of range, and "a guard that reads
  through something out of the place's range does not fault the poll: the
  exit does not apply", so the way was refused from the start.
- **Wrote instead:** a room blown up broadcasts `:room_sealed` with its
  `:id`, which the world passes; each room whose way leads there keeps
  its own flag and reads that. The cage's `:poisoned` likewise. The same
  wall stood between the Machine Room's buttons and the Carousel Room's
  `:zooming`: a button reading it faulted the turn (`NameOutOfRange`), so
  each button keeps its own copy, set by the `:zoom` the world passes.
- **Spec:** Range; Verbs › An exit may be conditional.

## Containers, range and hands

### 14. Inside a shut cage, the robot was out of reach

- **Wanted:** IN-CAGE: the visitor and the robot in the cage together,
  "ROBOT, LIFT CAGE".
- **Found:** a container that does not pass "is reached as a surface from
  inside and is a wall beyond that", and its other contents are reached
  only "when it passes too": the robot was in the cage (the description
  could count it) and could not be named from the cage.
- **Wrote instead:** the cage passes, and the sphere refuses to depart
  with a caged mover ("You can't reach it through the bars of the cage."),
  a `depart` guard reading the visitor's `:caged`. The gas and the
  Wizard's clock reach a caged visitor too, which does no harm.
- **Spec:** Range.

### 15. A message sent from inside the cage reached nobody

- **Wanted:** `broadcast :cage_fall` as the cage falls, so the robot in
  the closet follows the visitor in.
- **Found:** the broadcast is queued and delivered after the visitor's
  own move into the (then shut) cage, so it never left the cage.
- **Wrote instead:** the fall is sent to the cage and to each robot in
  the closet by name, and the visitor's own move into the cage is a
  message to itself queued after them.
- **Spec:** Events › Sending; Receiving (handlers are queued).

### 16. What a hand holds cannot reach the bucket

- Caverns 88 again: water in the teapot in the visitor's hands cannot
  `move self to` the bucket, since `sprout.Actor` passes nothing. The
  adventurer's own `pour`, `pour_in` and `take` parts do the moving; the
  water only says what came of it. **Spec:** Range.

### 17. A declared vehicle's way out cannot be connected before it moves

- **Wanted:** the bucket's `link get_out "get out"` connected to the
  room it stands in, as the caverns' boat connects its (caverns 137).
- **Found:** a link is unset until something runs `connect`, and a
  declared object has no first-turn hook: until the bucket had moved once,
  "get out" was `not_here`.
- **Wrote instead:** the way out is two `exit out` lines, one per end of
  the well, chosen by the bucket's `:at`; "get out" is a verb of the
  adventurer's, since the engine's `go` does not read it.
- **Spec:** Verbs › Links; Engine verbs.

### 18. The bucket cannot name the room it is in

- Caverns 83 and 95 again: the bucket keeps `:at`, an option of `Dest`,
  and reads the Top of Well's and the Circular Room's `bucket_view` by
  name, narrowed with `is()` since an imported object "is whatever is
  called that nearest each instance". **Spec:** Names › Identifiers and
  scope; Object identity.

### 19. The load refused a little early

- **Wanted:** Zork's LOAD-MAX 100 by weight.
- **Found:** with the lamp (15), sword (30), teapot (5) with water (4),
  newspaper (2), pearls (10), candy (8), sphere (10) and can (5) in hand,
  the engine's `capacity 100 by :size` refused the violin (10): 99 by my
  sum. Zork's own weights refuse it too (102), so nothing is lost; which
  sum the engine makes I could not read.
- **Spec:** Containment is a declaration (`capacity … by`).

## Prose

### 20. Verse and etchings lose their shape

- Caverns 17 and 18 again: the riddle's four lines, the well's ring of
  letters, the EBCDIC sign's indentation and the closet's notice. A
  paragraph break keeps a line but capitalises it ("Round as a cup,"),
  and the etching's spaced letters collapse. The riddle is one sentence
  here, the closet notice is four paragraphs, and the etchings are
  described in prose rather than drawn. **Spec:** Prose › Passages.

### 21. Fantasize cannot roll in a description

- **Wanted:** DESCRIBE-OBJECTS: under Fantasize, one time in five, "There
  is a basilisk here." among a room's objects.
- **Found:** `{one of}` in a passage a `describe` renders is refused, and a
  room's passage rendered from the bucket's description has no `actor`.
- **Wrote instead:** the adventurer rolls it in `after command` after a
  `look` or a move, and says it after the room.
- **Spec:** Chance › Where chance is forbidden; Prose › Slots.

### 22. A Thing's default comes back by a second route

- Caverns 29 again: the cakes (Food and Readable), the candy, the flask
  and the repellent each got Thing's "How does one read a cake…" and "I
  don't think that the cake would agree with you" back through their
  second kind, printed beside the real answer. Each writes `without … from
  Thing` itself. **Spec:** Kinds › Suppressing a contribution.

### 23. Things that are eaten warn

- Caverns 26 again: the cakes, the flask, the lamp thrown: eleven
  warnings that a declared thing "never comes back". It is meant not to.
  **Spec:** Objects › Destroying.

## Found in passing

### 24. No multiplication

- Caverns 93: Zork's `<PROB <* .CNT ,FUMBLE-PROB>>` is `random(4) <
  count - 3`. **Spec:** Properties › What the compiler checks.

### 25. `here.cage` is not a path

- A path starts at a name, never at a binding: `send here.cage …` is
  refused; `send dingy_closet.cage …` is written. **Spec:** Names ›
  Addressing and display.

### 26. An object inside another cannot be imported

- `object wizard is Wizard in elsewhere` is reached as `elsewhere.wizard`,
  not by `import {wizard}`. **Spec:** Objects (written with `in`); Imports.

### 27. The unicorn bounds away before the room is described

- Caverns 20 again: the garden's clock is the adventurer's `after
  command`, so "The unicorn bounds lightly away." reads before the room
  on `look`. **Spec:** Verbs › After a command.

### 28. `:unseen` is the library's, and was not used

- Not friction, a note: the standard library declares `:unseen` on every
  object, which hides the dented box until the carousel stops and the
  cage until it falls better than the refusing `as target for any` permit
  this world uses for them. Left as is this round; worth adopting.
  **Spec:** The world model › Unseen.

## After round 1

### 29. The Carousel Room draws among the built passages only

- **Wanted:** CAROUSEL-ROOM-FCN's draw among all seven passages but west,
  as friction 12 built it.
- **Found:** three of the seven lead into quarters not yet built, so a
  draw of them said the rockfall and left the visitor in the Carousel,
  where Zork would have moved them on; players read the room as a room
  of rockfalls. A departure from the quarter's boundary, not the
  language's: logged so that round 3 widens the draw as the passages open.
- **Wrote instead:** `random(4)` among the Marble Hall, the Path Near
  Stream, the Topiary and the Riddle Room, until the quarters beyond the
  south, southwest and northwest passages are built. The three refusing
  exits still answer a deliberate direction with the rockfall.
- **Spec:** none; the brief's Scope.

### 30. A `describe` cannot tell `examine` from `look`

- **Wanted:** `examine bucket` from inside the bucket giving the bucket's
  own description, and `look` from inside it the room seen from the
  bucket, as Zork's vehicles do.
- **Found:** `seen` is `:look` for both, "where the reader typed `look` or
  `examine`, of anything, the place included", and the bucket is both the
  place and the thing.
- **Wrote instead:** the adventurer's `as actor for examine` refuses, when
  the target is the bucket they are in, with a passage that renders the
  bucket's `examined`; the refusal reads as the description, and counts
  as one in the host's figures.
- **Spec:** Prose › Describing (`seen`).

### 31. Declared contents are never `:entered`

- **Wanted:** the tea table's newspaper, place mat and teapot listed with
  the Gazebo, as DESCRIBE-OBJECTS lists an open surface's contents.
- **Found:** the box counts what it holds to list plainly (`:plain`, the
  caverns' PRINT-CONT) in `on :entered`, and "spawning a lantern spawns
  its wick with it, telling only the lantern `:spawned` and its container
  `:entered`": what an object's body declares inside it arrives with it,
  and sends nothing. The count stood at nought until something was put
  on the table, and the table was listed empty.
- **Wrote instead:** each declared box writes its own `:plain` by hand:
  the tea table 3, the oblong table 4, the steel box 1. A passage cannot
  count what a loop would, so there is no deriving it at render time.
- **Spec:** Objects (a kind's body may hold objects); Events › Receiving.

### 32. An intent's slot cannot hold a value

- **Wanted:** "answer a well", "say a well", "the answer is a well" as an
  intent over `answer`: `do answer (word: w)`.
- **Found:** "`word` of `answer` takes a value, and a slot of an intent
  holds a thing."
- **Wrote instead:** a second verb, `answer_article`, with the same value
  role and its own part on the adventurer, a copy of `answer`'s.
- **Spec:** Verbs › Intents; Value roles.

### 33. Quotation marks in a line are not stripped

- **Wanted:** `answer "a well"` and `say "well"` heard as the word, as a
  player who has been asked a riddle types them.
- **Found:** the parser reads `"well"` as a word that is not `well`: the
  reading is `answer` with `word` unbound, the stone door laughs. A phrase
  written with a quotation mark in it (`"answer \"a [word]\""`) compiles
  and never matches.
- **Wrote instead:** nothing; the laugh stands for a quoted answer.
- **Spec:** Parsing › Matching a line; The compiler › Lexical rules.

### 34. "enter gazebo" was the engine's `go`, read in part

- **Wanted:** `enter gazebo` from the north end of the garden, where the
  gazebo is scenery and the way in is `exit in`.
- **Found:** the engine's `go` has "enter [way]" with `way: exit`, and read
  the line in part, the gazebo scenery in the exit's role, which it
  cannot take: the world's `cannot` line, "You can't enter the gazebo."
  Nothing warned, since a partial reading is an answer. The world's
  `board` had "enter [target]" for the bucket only, typed by `Vessel`.
- **Wrote instead:** "enter [target]" is a phrase of `through`, which
  every thing plays and the gazebo plays by sending the actor in; a full
  reading outranks a partial one. The bucket is boarded through `through`
  too, by the adventurer's own part. "crawl into [target]" came out to
  stay under eight phrases.
- **Spec:** Verbs › Engine verbs (`go`); Parsing › When nothing matches
  (`cannot`).

### 35. A noun nobody declared is `unknown`, however the room describes it

- **Wanted:** "take jewels" under Fantasize, "examine fence" under Fence,
  answered as Zork answers a thing that is not there: "You can't see any
  jewels here!"
- **Found:** "a noun holding a word nothing in the world is named by …
  is the grammar's failure rather than reach's, and the line is answered
  with `unknown`", by design; and the illusions and the fence were words
  of the narrator's, not of any thing. Players read "That sentence isn't
  one I recognize" as the verb failing.
- **Wrote instead:** the illusions are one scenery thing in Elsewhere
  with their words for nouns, so that naming one is `not_here`; the fence
  is a thing of its own, spawned into the room with the spell and
  destroyed with it, that can be examined, pushed and walked into.
- **Spec:** Parsing › When nothing matches; Range.
