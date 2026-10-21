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
- **After round 2.5:** `wait` passes ninety seconds (friction 37), so a
  frozen visitor who waits sees the spell run out in two to twelve waits;
  and in a visitor's first thirty moves a spell lasts the shortest three
  minutes and is never Freeze or Fence (round 2's P14).

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
- **After round 2.5:** `wait` passes the clock, so in interactive play he
  comes to whoever waits; and his first call is not a roll: the first time
  his clock finds a visitor out of the barrow he appears and casts one of
  Feeble, Fumble and Fantasize (round 1's P15, a departure from I-WIZARD's
  one in ten, the director's).

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
- **After round 3:** the robot's rooms each keep a stand-in (`AbsentRobot`,
  unseen while the robot is there) that answers an order in voice and says
  where the robot has got to, so `robot, lift cage` from the cage with the
  robot in the Low Room is no longer `unknown` (round 3's P3). What still
  falls to `unknown` is an order naming a thing out of reach, `robot, push
  square button` from the closet: the phrase's `item` binds nothing, the
  comma reading fails, and the line is split; the spec's `not_here` for a
  noun that names nothing in reach is never reached.
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
- **After round 2.5:** nothing rolls at render time. Each room's illusion
  rolls itself once, in its handler for `:fantasize`, when the spell is
  cast, and is listed by the room's own description until the spell ends
  (round 1's P6).

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
  on `look`. **Spec:** Verbs › After a command. The
  bucket's going is the same: it leaves on the move after it was poured
  into from outside, from the Circular Room's `after command`, so when
  that move is `look`, "The bucket swiftly rises up, and is gone." reads
  before the room.

### 28. `:unseen` is the library's, and was not used

- Not friction, a note: the standard library declares `:unseen` on every
  object, which hides the dented box until the carousel stops and the
  cage until it falls better than the refusing `as target for any` permit
  this world uses for them. Left as is this round; worth adopting.
  **Spec:** The world model › Unseen.
- **After round 2.5:** adopted for the illusion: `:unseen` while it shows
  nothing, so its words name nothing then, and the closet's crystal sphere
  is never shadowed by a yellow one that is not there.

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
- **After round 3:** the northwest passage leads to the Cool Room, so the
  draw is `random(5)`; south and southwest still refuse.

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
- **Answered by the language (Sprout 9bfb5add):** `seen` has a fourth
  value, `:examine`, given for `examine X` and `look at X` of anything, the
  reader's own place included. The bucket's `describe` renders `viewed`,
  which reads `{if seen == :examine}` for the bucket's own words and the
  well seen from it otherwise; the adventurer's refusal and its
  `bucket_close_up` passage are gone, and `examine bucket` from inside is
  a description, not a refusal (round 2's P11). No `seen == :look` was
  written anywhere in this world meaning "examined"; the rooms read
  `:arrival` only. Tested in `bucket_strain.json`.

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
- **Answered by the language (Sprout 9bfb5add):** a known verb with a noun
  that names nothing in reach is `not_here`, whatever the noun's words.
  The Elsewhere scenery went in round 2, when the illusion became every
  room's own for its voice (round 2's P5); nothing of this workaround
  remains. The illusion object stays, but for what the language does not
  give: it carries the fixed illusion (round 1's P6) and answers a touch of
  something the room lists in the narrator's voice; it is `:unseen` while
  it shows nothing, so a word for a thing never shown is the parser's
  "You can't see any such thing.", which is now also Zork's answer. The
  fence stays a thing, for the same reason.

## After round 2

### 36. `all` cannot be limited to what a thing holds, or to a plural noun

- **Wanted:** Zork's "take all from table" and "take all cakes", which
  both opus runs typed at the gazebo's table and the Tea Room's.
- **Found:** `all` "fills a role with everything it may take, and
  `except` leaves things out, by kind or by name": there is no form that
  narrows it to a container's contents, and a plural noun after `all` is
  no sentence. A relative phrase narrows a *name* by containment ("the key
  on the shelf"), not `all`.
- **Wrote instead:** `take_from`, a verb whose one role is the table (typed
  `Box`), eight phrases of "take all from", "take everything off" and the
  like; the adventurer's part takes each portable thing on it by `act
  take`, with `:listing` set so each answers with its name before it, as
  Zork's does. "take all cakes" stays `unknown`.
- **Spec:** Parsing › Sequences, again and all; Matching a line.
- **Answered by the language (Sprout 9bfb5add):** `all` narrows by a noun
  and by `from`, `off`, `out of`, `in` or `on` a thing. `take_from` and the
  adventurer's `:listing` are removed; `take all from the table`, `take
  everything off the table except the newspaper`, `take all newspapers`
  and `take all cakes` are read by `take` as written, and the adventurer's
  own several-things part names each ("Newspaper: Taken."). One difference
  stays: a narrowed `all` that leaves nothing (the table empty) is the
  spec's `not_here`, "You can't see any such thing.", where Zork says there
  is nothing here to take; a line the parser answers reaches no `do`, so
  the world cannot say its own line there. Tested in `take_all.json` and
  the walkthrough.

### 37. A hundred moves is a hundred commands, and nothing in the world can run the clock

- **Wanted:** I-BUCKET: water poured into the bucket from outside sends it
  up alone, and a hundred moves later it is dry and comes down. Zork's
  player types WAIT (three moves each) thirty-four times.
- **Found:** every clock here is the host's, half a minute a command
  (friction 2, 4): the bucket's `wake in 50 minutes` is a hundred
  *commands*, and `wait` passes one of them. Both sonnet runs that lost
  the bucket had fifty-odd turns left and never saw it return. Nothing a
  world writes can advance the host's clock, and the engine's `wait`
  has no `do` to pass more than its turn.
- **Wrote instead:** `wait_for_bucket` ("wait for the bucket to come
  down"), a verb with no role, since the bucket's absence is the point:
  at the bottom of the well it says the wait, adds the ninety-nine moves
  Zork would have counted to the score line, and broadcasts `:hurry`,
  which the world passes and the bucket at the top answers by drying its
  water and coming down at once (unless somebody is riding it). The
  Circular Room's own `waited` line, while the bucket is up, says that
  the wait is possible and long. Zork's "wait" passing three moves was
  not copied: a counter that said three moves passed when one did would
  lie about what ran.
- **Spec:** Time › Wakes; Verbs › Engine verbs (`wait`); Prose › Engine
  lines (`waited`).
- **Answered by the language (Sprout 9bfb5add):** `pass`. Plain `wait` is
  the adventurer's part of `wait` with `pass 90 seconds`, Zork's three
  moves at half a minute each, and counts three on the score line; the
  wakes due in the pass are delivered, so a visitor who waits is visited
  by the Wizard and sees a spell run out. The bucket's hundred moves are a
  count now, not a wake: an `after command` of the adventurer's lowers it
  one a command (three for a `wait`) and at nought broadcasts
  `:bucket_dry`, which the bucket at the top answers by drying its water
  and coming down in that turn (`bucket_count.json`: thirty-four waits).
  "wait for the bucket" is `wait_for`, a verb typed by `Awaited`, which the
  bucket composes and so does the stand-in that holds its name at the end
  of the well it has left, so the phrase reads only near the well; it
  brings the count to nought, adds what remained to the moves, and the
  bucket's arrival is told in the same turn (`bucket_wait.json`).
  `wait_for_bucket` and `:hurry` are gone. What the language still does not
  give is the bucket counting for itself (friction 41).

### 38. The article before a value is dropped after all (amends 32)

- Round 1 gave "answer a well" a verb of its own, `answer_article`
  (friction 32). Tested this round, "answer a well" and "answer the well"
  both read as `answer` with `word: :well`, the article dropped before the
  value as before a noun, so the second verb only tied with the first and
  drew. Removed; 32 stands as a record of what was not tried. The quoted
  form, `answer "a well"`, is still friction 33.
- **Spec:** Parsing › Matching a line (articles); Verbs › Value roles.

### 39. A thing's answer to a verb is not the thing's alone

- Not new, a note: "pour water on roses" printed its line twice, once
  from the water (`as item for pour_on`) and once from the roses (Thing's
  `as target for pour_on`), since every participant's `do` speaks. Thing's
  parts for `pour_in` and `pour_on` are now silent and the water says
  what came of it. The same as caverns 29 and friction 22, seen from the
  other side: a verb with two participants that both have something to
  say says it twice.
- **Spec:** Verbs › Playing a role; The two passes.

## After round 2.5

### 40. A visitor is sent no `:arrived`

- **Wanted:** I-SWORD: the sword glows very brightly when the Wizard is in
  the room. The adventurer's `on :arrived (actor, from)` set the glow when
  he appeared and `on :departed` cleared it.
- **Found:** neither ever ran. When an actor enters a place "every visitor
  in range of the place reads the `arrives` line, every *other* object in
  range of it is sent `:arrived`": a visitor reads the line and is not sent
  the message, and the Wizard's `arrives` line is empty by design, since
  his appearance is told in his own words. Two rounds of play never saw
  the sword answer him.
- **Wrote instead:** the Wizard says so himself: `:wizard_near with
  boolean`, sent to the visitor he has come to once he stands beside them,
  and to each visitor in the room as he vanishes; the adventurer sets the
  glow from it, as it did from the dead handlers.
- **Spec:** Movement and consent › Places (`arrives`, `:arrived`); Prose ›
  Engine lines.

### 41. The bucket cannot count its own moves

- **Wanted:** I-BUCKET on the bucket: the bucket at the top of the well
  counts a hundred moves and comes down.
- **Found:** `after command` runs for "what they carry, …; then the
  visitor; then each container that holds them, out to the world". The
  bucket at the top holds nobody standing at the bottom, so its own `after
  command` runs only while someone rides it; and the Circular Room's
  cannot reach a sibling room's bucket (friction 13). Nothing but a
  visitor's command is a move, and only what holds the visitor hears one.
- **Wrote instead:** the count is the adventurer's: the bucket broadcasts
  `:bucket_up` as it arrives at the top and `:bucket_down` as it settles at
  the bottom, each visitor keeps `:bucket_wait` and lowers it, and at
  nought broadcasts `:bucket_dry` back. With two visitors there would be
  two counts, and the first to reach nought would bring the bucket down;
  the brief's world is played alone.
- **Spec:** Verbs › After a command; Range.

## After round 3

### 42. The dragon's claw costs no anger

- **Wanted:** DRAGON-FCN: walking north past the dragon is blocked with
  the claw line and adds three to its anger.
- **Found:** a refusing exit's words are pure, and a `go` its exit refused
  runs no `after command`, so nothing in the world runs on that move.
- **Wrote instead:** the exit refuses with the claw line and the dragon's
  anger is untouched; examining it, greeting it, striking it and giving to
  it anger it as Zork's do (the actor's own part of `examine` has a `do`,
  which the spec does not promise for an engine verb and the compiler
  allows).
- **Spec:** Verbs › Exits; After a command.

### 43. Consecutive turns draw alike

- **Wanted:** I-PRINCESS, queued for one move three times in four and for
  two otherwise: a roll each move for whether she steps.
- **Found:** rolled each move in her handler, `random(4) < 3` failed on
  eight consecutive turns, and in the same turns the garden's own rolls
  (`random(3) == 0`, `random(4) == 0`) alternated with a period of exactly
  two, as every recorded script here shows ("The unicorn bounds lightly
  away" every other `look`). The turns' seeds are not independent of each
  other for a draw at the same point in the same handler.
- **Wrote instead:** she takes her step every move, and rolls once after
  it for a one-move pause, so no roll decides whether she walks; the
  dragon's "looks bored" roll and the carousel's draw are left as they
  are. The observation is the finding: a `{one of}` or a `random` read at
  the same point of successive turns is not a fair coin.
- **Spec:** Chance › The seed; Time › Determinism.

### 44. What an actor carries, only the actor gives

- **Wanted:** I-UNICORN: the princess takes the ribbon and the key goes to
  the visitor; written as the visitor's own handler moving the key out of
  the unicorn with the gate open.
- **Found:** `sprout.Actor`'s `release` refuses any mover but itself, a
  refused `move` ends the handler, and a handler has nobody to say the
  refusal to: the scene's words printed and the key stayed round the
  unicorn's neck, with nothing to say why.
- **Wrote instead:** the visitor sends the unicorn `:unicorn_scene` and
  the unicorn moves the key itself, to the sender.
- **Spec:** Movement and consent › The three roles; Verbs › Moving
  something; Events › Handlers do not refuse.

### 45. A roamer's way home must not be narrowed

- **Wanted:** the princess, in the Marble Hall, going through the wall she
  has opened to the Path Near Stream: `move self to stream_path`, which a
  roaming NPC may do from anywhere.
- **Found:** the compiler asks that an imported name be narrowed with
  `is()` before a property is read through it or its contents walked
  (friction 18), and I narrowed the moves the same way; but `is()` on a
  name out of range is `NameOutOfRange`, a fault, while the roaming move
  itself is in range by definition. Two faults in a playtest-length script
  before the princess had crossed the hall.
- **Wrote instead:** every roaming move is written bare, as the Wizard's
  always were; names are narrowed only where they are read or walked, with
  the gate open.
- **Spec:** Actors and visitors (`roams`); Names › Identifiers and scope;
  Range.

### 46. A thing in a hand speaks to nobody

- **Wanted:** PLACE-MAT-FCN: the mat taken from under the door, and the key
  lying on it falls to the floor: the mat broadcasts `:mat_moved` from its
  `on :moved`, and the key on the floor hears it.
- **Found:** by then the mat is in the visitor's hands, and `sprout.Actor`
  passes nothing, so the broadcast went up to the visitor and stopped: the
  key stayed unlisted and the fall was never told.
- **Wrote instead:** the adventurer passes `:mat_moved` and `:mat_under`,
  as it passes `:snuffed`.
- **Spec:** Events › Containers route; Range.

### 47. A window into a room that is out of range

- **Wanted:** PWINDOW-FCN and PKH-FCN: looking through the barred window or
  the keyhole of the Tiny Room's door describes the room on the other side
  (GO&LOOK), and the keyhole shows light only if the far room is lit.
- **Found:** a room is out of range of a room, and a `describe` cannot read
  through a name that is out of range (friction 13).
- **Wrote instead:** each window's view is written by hand, in the voice,
  naming what is really there and no more; the keyhole says it sees a
  lighted room from the Tiny Room's side (the Dreary Room is always lit)
  and no light from the other, since whether somebody stands in the Tiny
  Room with a lamp is not readable from the Dreary Room.
- **Spec:** Range; Prose › Describing.

### 48. One door in two rooms, one wall in four

- **Wanted:** PDOOR, LID-1/2, KEYHOLE-1/2, and the Bank's SEWL, SWWL, SSWL
  and SNWL: LOCAL-GLOBALS, one object each, seen from several rooms.
- **Found:** a thing is in one place. The door is two doors that keep each
  other told by broadcast (`:pdoor_locked`, `:pdoor_open`, `:mat_under`),
  the keyholes two that each know whether the far one holds the key
  (`:key_far`), and the Bank's four walls are sixteen objects, four to a
  room, with the room's own stand-in wall (friction, room.sprout's `Wall`)
  stepping aside as unseen there so that "east wall" never ties.
- **Spec:** Objects; The world model › Unseen; Events › Sending.

### 49. Two keys, one word, and a draw

- Round 3's P5, seen again in the walkthrough: with the gold key and the
  rusty key both in hand, "unlock door with key" is a tie the parser draws
  from the seed and announces with `meant`, "(the delicate gold key)", and
  the door says it doesn't fit. Zork would have asked which. Nothing in the
  world can ask either; the walkthrough says "iron key". The same for
  "examine cakes" naming one of four: a plural has no reading over every
  match.
- **Spec:** Parsing › Choosing a reading; Sequences, again and all.

### 50. The curtain's room is chosen by the room left, not the way walked

- Not friction, a note: DEPOSITORY-FCN keys the curtain's destination on
  the direction the visitor walked in by; `on :entered (item, from)` gives
  the room they left instead, which here comes to the same table (the West
  Teller's Room is only ever entered from by walking east), and takes the
  return through a wall of light in its stride, since the Vault and the
  Small Room are only ever left that way.
- **Spec:** Events › Receiving.

## After round 4

### 51. A wildcard's permit answers before the verb's own

- **Wanted:** round 4's P11: the Fantasize illusion's refusal opening with
  the verb's clause, an eye for `examine`, a blow for `attack`, a hand for
  `take`, written as `as target for examine { permit { refuse gone_look } }`
  beside its `as target for any { permit { refuse gone } }`.
- **Found:** a participant's wildcard permits run before its permits for
  the verb, and the first refusal is the whole answer, so the verb's play
  was never reached: every verb read "Your hand closes on nothing". A
  wildcard cannot know the verb, and a passage cannot read it either.
- **Wrote instead:** the clause is chosen in the actor's own part, whose
  permit runs before any role's: `as actor for examine` refuses with
  `{target.gone_look}` where the target is an `Illusion`, and `attack`,
  `mung`, `kick`, `throw` and `give` likewise; the illusion keeps the
  passages and the wildcard keeps the long tail. The same for the
  conjured grue's `attack`. A thing that wants one voice for most verbs
  and another for three has to be answered for by whoever acts on it.
- **Spec:** Verbs › Roles compose; The two passes.

### 52. A passage is rendered after the move's clocks have run

- **Wanted:** the princess's "her eyes fix on the passage east" (PRINCESS-
  FCN) naming the way out of the room she is spoken to in, read off her
  `:step`; and the dragon's strike reply graded by his anger as the blow
  lands (round 4's P10 and P6).
- **Found:** what a body says is rendered after the turn's bodies have
  run, the `after command` and the queue among them, so `{self.get(:step)}`
  in the `ignores` passage read the step she had already taken by the end
  of the move ("her eyes fix on the passage east. The princess walks
  south."), and a reply graded on `:anger` would have read him two cooler.
- **Wrote instead:** a snapshot property written in the `do` and read by
  the passage: `:seen_step`, `:blow_at`. Nothing else in the turn writes
  them, so the words are the moment's. The spec says where rendering falls
  (The seed: "after every draw the turn's bodies made"); that a slot reads
  the end of the turn rather than the moment of the `say` is a consequence
  worth a sentence under Prose.
- **Spec:** Chance › The seed; Prose › Slots.

### 53. A declared object's path does not follow it

- **Wanted:** I-UNICORN: the visitor's part, with the gate open, asking the
  unicorn for the key with `send garden_north.unicorn :unicorn_scene`.
- **Found:** round 4's P1. The path names what `garden_north` holds when
  the body runs; the unicorn had bounded off to Elsewhere on that same
  move (the garden's clock runs before the princess's in the visitor's
  `after command`), the send reached nothing, and nothing said so: the
  scene's words printed, the key stayed on the unicorn, and the unicorn
  came back wearing it. The walkthrough had passed by luck of the draw.
- **Wrote instead:** a broadcast, `:unicorn_rides`, that the unicorn hears
  wherever it is while the gate is open, and that the princess also sends
  when there was nobody to give the key to, so the unicorn goes with her
  either way, as Zork's REMOVE takes it. The stand-ins hear
  `:unicorn_gone` with whether the key was given.
- **Spec:** Names › Identifiers and scope; Events › Sending.

### 54. A member left out along one path still arrives by another

- Round 4's P9, and the spec's own rule (Suppressing a contribution): the
  place mat is a `Bag`, which is `Box, Portable`; `Portable` leaves out
  `Thing`'s `shift` and writes its own, but `Box` does not, so the mat
  answered "pull" twice, once as a thing and once as a portable. Two
  `without`s on the mat, naming both sources, and then its own play. Not
  friction so much as a trap: a kind that composes two kinds of one root
  has to leave out the root's member as many times as it arrives.
- **Spec:** Kinds › Suppressing a contribution.

### 55. A glow that begins and ends in one move says nothing

- A note. Arriving at the north end with the sword, with the unicorn
  there, sends the sword `:settle with 1`; the garden's clock on the same
  move may send the unicorn off and the sword `:settle with 0`. Both
  handlers run, each `tell self` a different line, and the visitor reads
  neither: the move ends with the sword as it began, and the words of the
  two tells are gone with it. Harmless here (nothing happened, nothing is
  said), and consistent with round 3's reading of I-SWORD, but a `tell`
  from a queued handler is not, it seems, a line of its own: the turn's
  account is read at its end. The spec's Prose table says a `tell` reaches
  its audience; it does not say two in one turn may cancel.
- **Spec:** Prose; Events › Sending.

### 56. The same draw at the same point, again (amends 43)

- Round 4's P2 and P8: the rotten chest's one-in-four roll failed six
  times across two visits, and the Wizard's first-call draw, two in four
  for Fantasize, came up Fantasize in six runs of seven. Both are at the
  same point of the same handler on successive turns, as 43 found. The
  chest is a counter now (the second try opens it, as its line promised),
  and the first call draws evenly among three; the observation stands.
- **Spec:** Chance › The seed; Time › Determinism.
