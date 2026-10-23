# Steering

## S1 (on Round 08, at "Synthesis")

Steering for round 09, relayed by Claude from Eric (2026-10-22): "Let's update the studio sprout pin and then do a revision round."

This is a refine round: no new scope. Sprout is now at 5380ce6. It answers many entries in friction.md, so drop a workaround wherever a feature below now does its job. Each entry is: the feature (Sprout issue; friction entries).
- `drop all` with empty hands has its own answer (825).
- An NPC's act can fill a value role (826; 1).
- `as actor for any`, and `except` to leave verbs out of a wildcard (827; 3, 51, 67).
- Quotation marks in a typed line are dropped (828; 33, 38, 57, 83).
- `way` is bound in `as actor for go` (829; 58).
- A drawn exit, `-> one of (...)`, for the turning rooms (830; 12, 42, 53, 58, 65, 101).
- The exits cap counts guarded exits once per direction (831; 58, 69, 86).
- `after command` runs after the queue drains (832; 4, 27, 74, 78, 84).
- A hook can follow a refused `go` (833; 2, 42).
- A read-only look into the next place (834; 13, 47, 81).
- One fixed thing declared in several places, e.g. a door or a shared wall (835; 48, 70, 82).
- A base kind's default steps aside for a more specific one (836; 22, 29, 39, 54).
- Each scripted step takes its own seed (837; 43, 56, 59).
- `all` in a set role reaches every held thing (838; 73).
- Leftover words are dropped, and the reading is restated as "(push the menhir)" (839; 66, 86, 87).
- Lost moves and sends now warn the author (840; 44, 53, 60).
- A visitor is sent `:arrived` and `:departed` (841; 40).
- A tell reaches a visitor riding an open vessel (842; 75, 85).
- A passage can ask whether `actor` is bound (843; 71).
- Two things shut in one container reach each other (844; 14).
- A role-player sees what the actor carries (845; 16, 46, 61).
- `*` and `/` in integer expressions (846; 24, 93).
- Verbatim prose blocks; the engine never recapitalises prose (847; 17, 18, 20).
- `after command` written in an object's or the world's own body now runs (859).
The spec's Decisions dated 2026-10-21 say exactly how each works. Mark each friction entry these answer as answered.
