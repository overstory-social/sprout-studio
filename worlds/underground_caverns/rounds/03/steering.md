# Steering

## S1 (on Round 02, at "Commands joined with 'and' or 'then' are read as one noun phrase and answered 'You can't see any such thing.' This covers Zork'…")

we should add functionality to the sprout runtime to parse "take x and y" or "take x, y and z" into three joined "take x" "take y" "take z".  I think "take x and take y and take z" should work but that is unnatural

## S2 (on Round 02, at "The line invites an action the world then denies with 'You can't see any such thing.'")

good feedback to the author for round three

## S3 (on Round 02, at "seed 1 and")

agree, let's run new seeds on each run in the future. file it as a bug against studio for the future

## S4 (on Round 02, at "o not retune ye")

agreed

## S5 (on Round 02, at "d Zork's KNOCK and")

agreed - give this feedback to the author to refine

## S6 (on Round 02, at "ork's 'brown sack: Taken.' prefix")

yeah, take all should list out what was taken

## S7 (on Round 02, at "It also counts things already carried ('You already have that!' for the leaflet in hand), which Zork's 'all' leaves out")

this is a sprout runtime bug. take all should attempt to take all in range that is takeable, and something that is already carried is not takeable

## S8 (on Round 02, at "Recommendation")

pass to author

## S9 (on Round 02, at "Recommendation")

pass to author

## S10 (on Round 02, at "Recommendation")

pass to author, but ask the author to expand on the prose whenever it feels needed. If we are adding new scenery, it should be well-described.

## S11 (on Round 02, at "Recommendation")

agreed. keep the dead ends for one more round, with a different refusal. round 4 will have the expansion

## S12 (on Round 02, at "Every player lit the lamp before going down")

is the problem here that all the agents know too much about Zork in general, and they know to light the lamp?

## S13 (on Round 02, at "s. Nobody reached the forest, the tree, the egg, the attic or the trophy case, in this round or in round 1. That is 12 runs, an…")

Why did nobody go to the forest? It is reachable, right? A correct pathing would get there? Can you confirm that?

Can we shape the instructions to tell the players that this is a modified version of zork and that things will be a little different and they should explore fully?

## S14 (on Round 02)

Yes, the forest is reachable: n, n, climb tree reaches the egg in 3 moves. Five of six players opened S, E, open window, Zork's canonical route, then the barred trap door kept them below. Round 3 will tell players it is a changed Zork and give some of them goals.

## S15 (on Round 02)

Very likely. Their opening moves follow Zork's walkthrough almost exactly, so the lamp was lit from memory, not from the room. Round 3's goals and framing test this.

## S16 (on Round 02)

Filed as sprout#449 (studio label). I'm fixing it before round 3, so each run gets its own seed.

## S17 (on Round 02)

Filed as sprout#448: a list of things in a one-thing role runs the verb once for each.

## S18 (on Round 02)

Recorded as your decision on sprout#389 (option 1 there: all leaves out what would be refused).

## S19 (on Round 02)

From Eric, in chat, for the author: "If someone attempts to examine the troll's axe while the troll is alive and is holding it, that should be a refusal on the axe 'you can't see it easily while the troll is wielding it' or something." It can be modelled: the troll's own `pass any (false)` is what hides the axe. Let it be reached, have the axe refuse examine while a live troll holds it, and guard release.

## S20 (on Round 02)

Eric, in chat: not for round 3. Leave the axe as it is in this revision; it goes on the backlog for round 4, with the wider scope.
