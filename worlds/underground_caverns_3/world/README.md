# Underground Caverns 3: The Dungeon Master

A Sprout microworld: Zork III: The Dungeon Master, ported a quarter at a
time. Two quarters are built.

The first: the Endless Stair and the way in (the Junction and the sword
in its great rock, the Barren Area, the Creepy Crawl, the Foggy Room); the
Land of Shadow, eight rooms of one name, with the hooded figure who fights
like you, the quicksand, the mist, and the Flathead Ocean with the Viking
ship that passes once and the sailor who has waited three ages to be
greeted; and the lake (the Lake Shore, the Aqueduct View, On the Lake and
Underwater), the cold, the air, the fish, the roc, and the shiny thing in
the sand.

The second: the cliff (the Hairpin Loop, the Cliff Base, the Cliff with
its trees and its rope and its waybread, and the Cliff Ledge with the
locked chest and the man at the brink who wants it, and gives a staff);
the old man's corner (the Damp Passage, the Dead End and the Engravings
Room, with the runes, the sleeping old man, the waybread given and the
secret door it reveals); the Scenic Vista (the Western Shore, the chamber
with the table that shows a far place and sends you there for three
moves, its indicator and its torch, and the four places it shows: the
Timber Room and the mine, Room 8 and the grue repellent, the Damp
Passage, and the Sacrificial Altar); and the key and the aqueduct (the
Southern Shore, the two Dark Places that are a grue lair, the Key Room
with its key and its manhole cover, and the Aqueduct, the High Arch and
the Water Slide down to the Damp Passage), with the earthquake, once,
somewhere between the 70th and the 140th move, that breaks the arch. The
ways into the later quarters are there, and turn the visitor back. Death
is the old man's visit in the cell, and the fourth is the last.

The score is a potential, out of 7, as the original counts it; five of
the seven are in these two quarters.

`sprout check .` checks it, and `sprout test .` runs its tests, the
scripts in `tests/`: `walkthrough.json` plays from the Endless Stair to
the end of the second quarter with 5 of 7, `arrival.json` what a visitor
first reads and the stair's refusals, `duel.json`, `slain.json`,
`hood_pull.json` and `fight.json` the hooded figure, `ship.json`,
`hail.json` and `sword_sea.json` the ocean, `shore.json` and `death.json`
the lake, `cliff_man.json` the man at the cliff, `old_man.json` the
Engravings Room, `vista.json` the viewing table, `quake.json` the
earthquake, and `void.json` four deaths.

## Credits

The map, the objects, the puzzles and most of the prose are from Zork III:
The Dungeon Master, by Marc Blank and Dave Lebling, (c) Copyright 1982,
1983, 1984, 1986 Infocom, Inc. Its ZIL source is published at
https://github.com/historicalsource/zork3 under the MIT licence (Copyright
2025 Microsoft), and was the reference for this port. The Sprout source
here is new; the ZIL was not copied, and could not have been.
