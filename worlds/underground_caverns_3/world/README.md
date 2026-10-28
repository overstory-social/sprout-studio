# Underground Caverns 3: The Dungeon Master

A Sprout microworld: Zork III: The Dungeon Master, ported a quarter at a
time. All four quarters are built.

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
somewhere between the 70th and the 140th move, that breaks the arch.

The third: the way to the Royal Museum (the Tight Squeeze, the Crystal
Grotto, the Royal Hall with its seal, and the Great Door, with the cleft
the earthquake opens beside it); the museum (the Museum Entrance, the
Jewel Room with its cage, its pedestal, the Crown Jewels and the plaque,
and the Technology Museum with its grey, black and gold machines); the
Royal Puzzle (the Royal Puzzle Entrance and its warning note, the Side
Room with the steel door and its slot, and the Room in a Puzzle: a
six-by-six grid of marble and sandstone, the sandstone pushed a square
at a time and the map of the squares round you drawn as you go, the two
ladders, and the ancient book in its niche); and the time machine (the
gold machine's dial, seat and button, and the museum in other years: the
same rooms between the dedication and now, and unfinished in 776, with
the guards outside the door, Lord Flathead's voice through it, the robot
that tidies, and the ring that can be hidden under the seat for two
hundred years). What the visitor does in 776 changes the present.

The fourth: beyond the secret door, the Button Room and its red button,
the Beam Room and its beam; the long hallway with the Guardians of Zork
in the middle of it, who strike what they see, and the mirror box, a
room you are inside that turns an eighth at a time on its pole and
slides along the channel from one compass rose to the next, past the
Guardians, who cannot tell a reflection from each other; the Dungeon
Entrance and the wooden door knocked at; and the dungeon itself: the
corridors round a parapet over a pit of fire, the sundial and the button
that turn eight cells round the pit, the Dungeon Master, who follows,
stays and does what he is told, the one cell with a bronze door that the
strange key fits at last, and the Treasury of Zork. Death is the old
man's visit in the cell, and the fourth is the last.

The score is a potential, out of 7, as the original counts it; all seven
are had before the dungeon, and the dungeon is the end.

`sprout check .` checks it, and `sprout test .` runs its tests, the
scripts in `tests/`: `walkthrough.json` plays from the Endless Stair to
the Treasury of Zork with 7 of 7 and the Dungeon Master's last words, `arrival.json` what a visitor
first reads and the stair's refusals, `duel.json`, `slain.json`,
`hood_pull.json` and `fight.json` the hooded figure, `ship.json`,
`hail.json` and `sword_sea.json` the ocean, `shore.json` and `death.json`
the lake, `cliff_man.json` and `ledge_cues.json` the man at the cliff,
`old_man.json` the Engravings Room, `vista.json` the viewing table,
`quake.json` the earthquake, `throw_direction.json` and `dig_bare.json`
the parser, `dark.json` the grue, and `void.json` four deaths.

## Credits

The map, the objects, the puzzles and most of the prose are from Zork III:
The Dungeon Master, by Marc Blank and Dave Lebling, (c) Copyright 1982,
1983, 1984, 1986 Infocom, Inc. Its ZIL source is published at
https://github.com/historicalsource/zork3 under the MIT licence (Copyright
2025 Microsoft), and was the reference for this port. The Sprout source
here is new; the ZIL was not copied, and could not have been.
