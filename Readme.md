Screeps Autocomplete
====================
The purpose of this is to add screeps autocomplete to IDEs by creating a definition from the documents. People can then
add this project as a library in their IDE, and their IDE should be able to start autocompleting their code. Tested
somewhat in JetBrain's WebStorm

## How to Install

#### Webstorm (Or Other Jetrains IDE's)
This can be done by quite simply copying the `ScreepsAutcomplete` folder in their project, and Webstorm should automatically
detect it and add it to the autocompletion

#### Visual Studio
Copy the `ScreepsAutcompete` folder in to your project, then create a file called `_references.js`. Right click your newly
created and empty file, and then select `Update JavaScript References`. The file should now be populated autocomplete should
be available.

#### Sublime Text
There are two ways to enable Autocomplete in Sublime Text, both of them require installing a plugin through 
[`Package Control`](https://packagecontrol.io/installation), and copying `ScreepsAutocomplete` in to your project.

 * `TernJS` - Install `TernJS` through `Package Control`, restart Sublime Text and try `var room = new Room(); room.lookAt(x, y)` 
 to see if Autocomplete is working. If not, try the next options
 
 * `SublimeCodeIntel` - Install `SublimeCodeIntel` through `Package Control`. Go to `Preferences > Package Settings > SublimeCodeIntel > Settings -- User`
 and copy the contents of `ScreepsAutocomplete/config/SublimeCodeIntel.json` in to the file that opens. Save and restart Sublime
 Text. After waiting for CodeIntel to process JavaScript, Autocomplete should be working