# Steering

## S1 (on Round 16)

Steering for round 17, relayed by Claude from Eric (2026-10-22): "Let's update the studio sprout pin and then do a revision round for underground caverns 1 and 2 (there may be improvements to the original Zork port too)."

This is a refine round: no new scope, and Zork I stays whole. Sprout is now at 5380ce6. Check friction.md against this list, and drop a workaround wherever a feature now does its job.
- `drop all` with empty hands has its own answer.
- An NPC's act can fill a value role.
- `as actor for any`, and `except` to leave verbs out of a wildcard.
- Quotation marks in a typed line are dropped.
- `way` is bound in `as actor for go`.
- A drawn exit, `-> one of (...)`, e.g. the Round Room's spin.
- The exits cap counts guarded exits once per direction.
- `after command` runs after the queue drains, and runs when written in an object's or the world's own body.
- A hook can follow a refused `go`.
- A read-only look into the next place, e.g. through a window.
- One fixed thing declared in several places, e.g. a door seen from both sides.
- A base kind's default steps aside for a more specific one.
- Each scripted step takes its own seed.
- `all` in a set role reaches every held thing.
- Leftover words are dropped, and the reading is restated in parentheses.
- Lost moves and sends now warn the author.
- A visitor is sent `:arrived` and `:departed`.
- A tell reaches a visitor riding an open vessel, e.g. the boat.
- A passage can ask whether `actor` is bound.
- Two things shut in one container reach each other.
- A role-player sees what the actor carries.
- `*` and `/` in integer expressions.
- Verbatim prose blocks; the engine never recapitalises prose.
The spec's Decisions dated 2026-10-21 say exactly how each works. Mark each friction entry these answer as answered.
