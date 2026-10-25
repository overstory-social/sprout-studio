# Underground Caverns 3: The Dungeon Master

A Sprout microworld: Zork III: The Dungeon Master, ported a quarter at a
time. The first quarter is built: the Endless Stair and the way in (the
Junction and the sword in its great rock, the Barren Area, the Creepy
Crawl, the Foggy Room); the Land of Shadow, eight rooms of one name,
with the hooded figure who fights like you, the quicksand, the mist, and
the Flathead Ocean with the Viking ship that passes once and the sailor
who has waited three ages to be greeted; and the lake (the Lake Shore, the
Aqueduct View, On the Lake and Underwater), the cold, the air, the fish,
the roc, and the shiny thing in the sand. The ways into the later quarters
are there, and turn the visitor back. Death is the old man's visit in the
cell, and the fourth is the last.

The score is a potential, out of 7, as the original counts it; three of
the seven are in this quarter.

`sprout check .` checks it, and `sprout test .` runs its tests, the
scripts in `tests/`: `walkthrough.json` plays from the Endless Stair to
the end of the first quarter with 3 of 7, `arrival.json` what a visitor
first reads and the stair's refusals, `death.json` the lake and the
drowning, and `void.json` four deaths.

## Credits

The map, the objects, the puzzles and most of the prose are from Zork III:
The Dungeon Master, by Marc Blank and Dave Lebling, (c) Copyright 1982,
1983, 1984, 1986 Infocom, Inc. Its ZIL source is published at
https://github.com/historicalsource/zork3 under the MIT licence (Copyright
2025 Microsoft), and was the reference for this port. The Sprout source
here is new; the ZIL was not copied, and could not have been.
