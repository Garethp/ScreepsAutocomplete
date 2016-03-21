/**
 * An object representing the room in which your units and structures are in.
 * It can be used to look around, find paths, etc.
 * Every object in the room contains its linked Room instance in the room property.
 *
 * @class
 * @constructor
 */
Room = function() { };

Room.prototype =
{
    /**
     * The Controller structure of this room, if present, otherwise undefined.
     *
     * @type {Structure}
     */
    controller: null,

    /**
     * Total amount of energy available in all spawns and extensions in the room.
     *
     * @type {number}
     */
    energyAvailable: 0,

    /**
     * Total amount of energyCapacity of all spawns and extensions in the room.
     *
     * @type {number}
     */
    energyCapacityAvailable: 0,

    /**
     * A shorthand to Memory.rooms[room.name].
     * You can use it for quick access the room’s specific memory data object.
     *
     * @type {object}
     */
    memory: null,

    /**
     * The current gamemode.
     *
     * @type {string|MODE_SIMULATION|MODE_SURVIVAL|MODE_WORLD|MODE_ARENA}
     */
    mode: "",

    /**
     * The name of the room.
     *
     * @type {string}
     */
    name: "",

    /**
     * The Storage structure of this room, if present, otherwise undefined.
     *
     * @type {Structure|Structure_Storage|undefined}
     */
    storage: null,

    /**
     * The Terminal structure of this room, if present, otherwise undefined.
     *
     * @type {Structure|Structure_Terminal|undefined}
     */
    terminal: null,

    /**
     * An object with survival game info.
     *
     * @type {object}
     */
    survivalInfo: {
        /**
         * Current score.
         *
         * @type {number}
         */
        score: 0,

        /**
         * Time to the next wave of invaders.
         *
         * @type {number}
         */
        timeToWave: 0,

        /**
         * The number of the next wave.
         *
         * @type {number}
         */
        wave: 0
    },

    /**
     * Serialize a path array into a short string representation, which is suitable to store in memory.
     * @static
     *
     * @param {Array} path A path array retrieved from Room.findPath.
     *
     * @return {string} A serialized string form of the given path.
     */
    serializePath: function(path) { },

    /**
     * Deserialize a short string path representation into an array form.
     * @static
     *
     * @param {string} path A serialized path string.
     *
     * @return {Array} A path array.
     */
    deserializePath: function(path) { },

    /**
     * Create new ConstructionSite at the specified location.
     *
     * @param {number} x The X position.
     * @param {number} y The Y position.
     * @param {string|STRUCTURE_EXTENSION|STRUCTURE_RAMPART|STRUCTURE_ROAD|STRUCTURE_SPAWN|STRUCTURE_WALL|STRUCTURE_LINK} structureType
     *
     * @note Another variant of this function is createConstructionSite(pos, structureType) where:
     * @param {object} pos Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @note A maximum of 100 construction sites per player.
     *
     * @return {number|OK|ERR_INVALID_TARGET|ERR_FULL|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    createConstructionSite: function(x, y, structureType) { },

    /**
     * Create new Flag at the specified location.
     *
     * @param {number} x The X position.
     * @param {number} y The Y position.
     * @param {string} [name] The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param {string|COLOR_WHITE|COLOR_GREY|COLOR_RED|COLOR_PURPLE|COLOR_BLUE|COLOR_CYAN|COLOR_GREEN|COLOR_YELLOW|COLOR_ORANGE|COLOR_BROWN} [color] The color of a new flag. Default value is COLOR_WHITE.
     * @param {string|COLOR_WHITE|COLOR_GREY|COLOR_RED|COLOR_PURPLE|COLOR_BLUE|COLOR_CYAN|COLOR_GREEN|COLOR_YELLOW|COLOR_ORANGE|COLOR_BROWN} [secondaryColor] The secondary color of a new flag. The default value is equal to color.
     *
     * @note Another variant of the function is createFlag(pos, name, color) where:
     * @param {object} pos Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {string|number|ERR_NAME_EXISTS|ERR_INVALID_ARGS} The name of the new flag or an error constant.
     */
    createFlag: function(x, y, name, color, secondaryColor) { },

    /**
     * Find all objects of the specified type in the room.
     *
     * @param {number|FIND_CREEPS|FIND_MY_CREEPS|FIND_HOSTILE_CREEPS|FIND_MY_SPAWNS|FIND_HOSTILE_SPAWNS|FIND_SOURCES|FIND_SOURCES_ACTIVE|FIND_DROPPED_RESOURCES|
     *         FIND_STRUCTURES|FIND_MY_STRUCTURES|FIND_HOSTILE_STRUCTURES|FIND_FLAGS|FIND_CONSTRUCTION_SITES|FIND_MY_CONSTRUCTION_SITES|FIND_EXIT_TOP|FIND_EXIT_RIGHT|
     *         FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|FIND_EXIT} type
     * @param {object} [opts]
     * @param {object|function|string} [opts.filter] The result list will be filtered using the Lodash.filter method.
     *
     * @return {object[]}
     */
    find: function(type, opts) { },

    /**
     * Find the exit direction en route to another room.
     *
     * @param {string|Room} room Another room name or room object.
     *
     * @return {number|FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|ERR_NO_PATH|ERR_INVALID_ARGS} A room direction constant or an error constant.
     */
    findExitTo: function(room) { },

    /**
     * Find an optimal path inside the room between fromPos and toPos using A* search algorithm.
     *
     * @param {RoomPosition} fromPos The start position.
     * @param {RoomPosition} toPos The end position.
     * @param {object} [opts] An object containing additonal pathfinding flags.
     * @param {boolean} [opts.ignoreCreeps] Treat squares with creeps as walkable.
     *                                      Can be useful with too many moving creeps around or in some other cases. The default value is false.
     * @param {boolean} [opts.ignoreDestructibleStructures] Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable.
     *                                                      Use this flag when you need to move through a territory blocked by hostile structures.
     *                                                      If a creep with an ATTACK body part steps on such a square, it automatically attacks the structure.
     *                                                      The default value is false.
     * @param {boolean} [opts.ignoreRoads] Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the new PathFinder is enabled.
     * @param {function} [opts.costCallback] You can use this callback to modify a CostMatrix for any room during the search.
     *                                       The callback accepts two arguments, roomName and costMatrix.
     *                                       Use the costMatrix instance to make changes to the positions costs.
     *                                       This is only used when the new PathFinder is enabled.
     * @param {Array} [opts.ignore] An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. Cannot be used when the new PathFinder is enabled.
     * @param {Array} [opts.avoid] An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search.  Cannot be used when the new PathFinder is enabled.
     * @param {number} [opts.maxOps] The maximum limit of possible pathfinding operations. The greater the value, the more accurate path will be found, but more CPU time could be used.
     *                               The default value is 2000.
     * @param {number} [opts.heuristicWeight] Weight to apply to the heuristic to allow for suboptimal paths (for example, not using the roads or going through swamps),
     *                                        in order to speed up the search. Set any large value (say, 1000) in order to ignore terrain costs.
     *                                        The default value is 1.
     * @param {boolean} [opts.serialize] If true, the result path will be serialized using Room.serializePath. The default is false.
     * @param {number} [opts.maxRooms] The maximum allowed rooms to search. The default (and maximum) is 16. This is only used when the new PathFinder is enabled.
     *
     * @return {object[]} An array with path steps in the following format:
     *  [
            { x: 10, y: 5, dx: 1,  dy: 0, direction: RIGHT },
            { x: 10, y: 6, dx: 0,  dy: 1, direction: BOTTOM },
            { x: 9,  y: 7, dx: -1, dy: 1, direction: BOTTOM_LEFT },
            ...
        ]

     */
    findPath: function(fromPos, toPos, opts) { },

    /**
     * Creates a RoomPosition object at the specified location.
     *
     * @param {number} x The X position.
     * @param {number} y The Y position.
     *
     * @return {RoomPosition|null} A RoomPosition object or null if it cannot be obtained.
     */
    getPositionAt: function(x, y) { },

    /**
     * Get the list of objects at the specified room position.
     *
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     *
     * @note Another variant of the function is lookAt(target) where:
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {object[]} An array with objects at the specified position in the following format:
     *  [
            { type: 'creep', creep: {...} },
            { type: 'structure', structure: {...} },
            ...
            { type: 'terrain', terrain: 'swamp' }
        ]
     */
    lookAt: function(x, y) { },

    /**
     * Get the list of objects at the specified room area.
     *
     * @param {number} top The top Y boundary of the area.
     * @param {number} left The left X boundary of the area.
     * @param {number} bottom The bottom Y boundary of the area.
     * @param {number} right The right X boundary of the area.
     *
     * @return {object} An object with all the objects in the specified area in the following format:
     *
     *   // 10,5,11,7
         {
             10: {
                 5: [{ type: 'creep', creep: {...} },
                     { type: 'terrain', terrain: 'swamp' }],
                 6: [{ type: 'terrain', terrain: 'swamp' }],
                 7: [{ type: 'terrain', terrain: 'swamp' }]
             },
             11: {
                 5: [{ type: 'terrain', terrain: 'normal' }],
                 6: [{ type: 'structure', structure: {...} },
                     { type: 'terrain', terrain: 'swamp' }],
                 7: [{ type: 'terrain', terrain: 'wall' }]
             }
         }
     */
    lookAtArea: function(top, left, bottom, right) { },

    /**
     * Get an object with the given type at the specified room position.
     *
     * @param {string} type One of the following string constants: constructionSite, creep, exit, flag, resource, source, structure, terrain
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     *
     * @note Another variant of the function is lookForAt(type, target) where:
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {object[]} An array of objects of the given type at the specified position if found.
     */
    lookForAt: function(type, x, y) { },

    /**
     * Get the list of objects with the given type at the specified room area.
     *
     * @param {string} type One of the following string constants: constructionSite, creep, exit, flag, resource, source, structure, terrain
     * @param {number} top The top Y boundary of the area.
     * @param {number} left The left X boundary of the area.
     * @param {number} bottom The bottom Y boundary of the area.
     * @param {number} right The right X boundary of the area.
     *
     * @return {object} An object with all the objects of the given type in the specified area in the following format:
     *
     *   // 10,5,11,7
         {
             10: {
                 5: [{...}],
                 6: undefined,
                 7: undefined
             },
             11: {
                 5: undefined,
                 6: [{...}, {...}],
                 7: undefined
             }
         }
     */
    lookForAtArea: function(type, top, left, bottom, right) { }
};