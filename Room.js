/**
 * An object representing the room in which your units and structures are in.
 * It can be used to look around, find paths, etc.
 * Every RoomObject in the room contains its linked Room instance in the room property.
 *
 * @class
 *
 * @see {@link https://docs.screeps.com/api/#Room}
 */
Room = {
    /**
     * Serialize a path array into a short string representation, which is suitable to store in memory.
     *
     * @see {@link https://docs.screeps.com/api/#Room.serializePath}
     *
     * @type {function}
     *
     * @param {Array} path A path array retrieved from Room.findPath.
     *
     * @return {string} A serialized string form of the given path.
     */
    serializePath: function(path) { },

    /**
     * Deserialize a short string path representation into an array form.
     *
     * @see {@link https://docs.screeps.com/api/#Room.deserializePath}
     *
     * @type {function}
     *
     * @param {string} path A serialized path string.
     *
     * return {Array} A path array.
     */
    deserializePath: function(path) { }
};

Room.prototype =
{
    /**
     * The Controller structure of this room, if present, otherwise undefined.
     *
     * @see {@link https://docs.screeps.com/api/#Room.controller}
     *
     * @type {undefined|StructureController}
     */
    controller: null,

    /**
     * Total amount of energy available in all spawns and extensions in the room.
     *
     * @see {@link https://docs.screeps.com/api/#Room.energyAvailable}
     *
     * @type {number}
     */
    energyAvailable: 0,

    /**
     * Total amount of energyCapacity of all spawns and extensions in the room.
     *
     * @see {@link https://docs.screeps.com/api/#Room.energyCapacityAvailable}
     *
     * @type {number}
     */
    energyCapacityAvailable: 0,

    /**
     * A shorthand to Memory.rooms[room.name].
     * You can use it for quick access the room’s specific memory data object.
     *
     * @see {@link https://docs.screeps.com/api/#Room.memory}
     *
     * @type {RoomMemory}
     */
    memory: {},

    /**
     * The name of the room.
     *
     * @see {@link https://docs.screeps.com/api/#Room.name}
     *
     * @type {string}
     */
    name: "",

    /**
     * The Storage structure of this room, if present, otherwise undefined.
     *
     * @see {@link https://docs.screeps.com/api/#Room.storage}
     *
     * @type {undefined|StructureStorage}
     */
    storage: null,

    /**
     * The Terminal structure of this room, if present, otherwise undefined.
     *
     * @see {@link https://docs.screeps.com/api/#Room.terminal}
     *
     * @type {undefined|StructureTerminal}
     */
    terminal: null,

    /**
     * A RoomVisual object for this room. You can use this object to draw simple shapes (lines, circles, text labels) in the room.
     * @see {@link https://docs.screeps.com/api/#Room.visual}
     *
     * @type {RoomVisual}
     */
    visual: null,

    /**
     * Create new ConstructionSite at the specified location.
     *
     * @see {@link https://docs.screeps.com/api/#Room.createConstructionSite}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x The X position.
     * @param {number|string} [y] The Y position.
     * @param {string} [structureType] One of the STRUCTURE_* constants.
     * @param {string} [name] The name of the structure, for structures that support it (currently only spawns).
     *
     * @note Alternative function: createConstructionSite(pos, structureType)
     * @param {object} pos Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_TARGET|ERR_FULL|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    createConstructionSite: function(x, y, structureType, name) { },

    /**
     * Create new Flag at the specified location.
     *
     * @see {@link https://docs.screeps.com/api/#Room.createFlag}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x The X position.
     * @param {number|string} y The Y position.
     * @param {string} [name] The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param {string} [color] The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param {string} [secondaryColor] The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     *
     * @note Alternative function: createConstructionSite(pos, name, color, secondaryColor)
     * @param {object} pos Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {number|ERR_NAME_EXISTS|ERR_INVALID_ARGS|ERR_FULL} The name of a new flag, or one of the following error codes: ERR_NAME_EXISTS, ERR_INVALID_ARGS, ERR_FULL.
     */
    createFlag: function(x, y, name, color, secondaryColor) { },

    /**
     * Find all objects of the specified type in the room.
     *
     * @see {@link https://docs.screeps.com/api/#Room.find}
     *
     * @type {function}
     *
     * @param {number} type One of the FIND_* constants.
     * @param {object} [opts] An object with additional options
     * @param {object|function|string} [opts.filter] The result list will be filtered using the Lodash.filter method.
     *
     * @return {Array} An array with the objects found.
     */
    find: function(type, opts) { },

    /**
     * Find the exit direction en route to another room.
     *
     * @see {@link https://docs.screeps.com/api/#Room.findExitTo}
     *
     * @type {function}
     *
     * @param {string|Room} room Another room name or room object.
     *
     * @return {FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|number|ERR_NO_PATH|ERR_INVALID_ARGS}
     */
    findExitTo: function(room) { },

    /**
     * Find an optimal path inside the room between fromPos and toPos using A* search algorithm.
     *
     * @see {@link https://docs.screeps.com/api/#Room.findPath}
     *
     * @type {function}
     *
     * @param {RoomPosition} fromPos The start position.
     * @param {RoomPosition} toPos The end position.
     * @param {object} [opts] An object containing additonal pathfinding flags
     * @param {boolean} [opts.ignoreCreeps] Treat squares with creeps as walkable. Can be useful with too many moving creeps around or in some other cases. The default value is false.
     * @param {boolean} [opts.ignoreDestructibleStructures] Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when you need to move through a territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square, it automatically attacks the structure. The default value is false.
     * @param {boolean} [opts.ignoreRoads] Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the new PathFinder is enabled.
     * @param {function(string, CostMatrix)} [opts.costCallback] You can use this callback to modify a CostMatrix for any room during the search. The callback accepts two arguments, roomName and costMatrix. Use the costMatrix instance to make changes to the positions costs. If you return a new matrix from this callback, it will be used instead of the built-in cached one. This option is only used when the new PathFinder is enabled.
     * @param {Array} [opts.ignore] An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. This option cannot be used when the new PathFinder is enabled (use costCallback option instead).
     * @param {Array} [opts.avoid] An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search. This option cannot be used when the new PathFinder is enabled (use costCallback option instead).
     * @param {number} [opts.maxOps] The maximum limit of possible pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     * @param {number} [opts.heuristicWeight] Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying A* algorithm mechanics! The default value is 1.2.
     * @param {boolean} [opts.serialize] If true, the result path will be serialized using Room.serializePath. The default is false.
     * @param {number} [opts.maxRooms] The maximum allowed rooms to search. The default (and maximum) is 16. This is only used when the new PathFinder is enabled.
     * @param {number} [opts.range] Find a path to a position in specified linear range of target. The default is 0.
     * @param {number} [opts.plainCost] Cost for walking on plain positions. The default is 1.
     * @param {number} [opts.swampCost] Cost for walking on swamp positions. The default is 5.
     *
     * @return {Array} An array with path steps in the following format:
                         [
                             { x: 10, y: 5, dx: 1,  dy: 0, direction: RIGHT },
                             { x: 10, y: 6, dx: 0,  dy: 1, direction: BOTTOM },
                             { x: 9,  y: 7, dx: -1, dy: 1, direction: BOTTOM_LEFT },
                             ...
                         ]

     */
    findPath: function(fromPos, toPos, opts) { },

    /**
     * Returns an array of events happened on the previous tick in this room.
     *
     * @see {@link https://docs.screeps.com/api/#Room.getEventLog}
     *
     * @type {function}
     *
     * @param {boolean} [raw] If this parameter is false or undefined, the method returns an object parsed using JSON.parse which incurs some CPU cost on the first access (the return value is cached on subsequent calls). If raw is truthy, then raw JSON in string format is returned.
     *
     * @return {Array} An array of events. Each event represents some game action in the following format:
                        {
                            event: EVENT_ATTACK,
                            objectId: '54bff72ab32a10f73a57d017',
                            data: { ... }
                        }
     */
    getEventLog: function(raw) { },

    /**
     * Creates a RoomPosition object at the specified location.
     *
     * @see {@link https://docs.screeps.com/api/#Room.getPositionAt}
     *
     * @type {function}
     *
     * @param {number} x The X position.
     * @param {number} y The Y position.
     *
     * @return {null|RoomPosition} A RoomPosition object or null if it cannot be obtained.
     */
    getPositionAt: function(x, y) { },

    /**
     * Get a Room.Terrain object which provides fast access to static terrain data. This method works for any room in the world even if you have no access to it.
     *
     * @see {@link https://docs.screeps.com/api/#Room.getTerrain}
     *
     * @type {function}
     *
     * @return {Room.Terrain} Returns new Room.Terrain object.
     */
    getTerrain: function() {},

    /**
     * Get the list of objects at the specified room position.
     *
     * @see {@link https://docs.screeps.com/api/#Room.lookAt}
     *
     * @type {function}
     *
     * @param {number} x X position in the room.
     * @param {number|RoomPosition|RoomObject} [y] Y position in the room.
     *
     * @note Alternative function: lookAt(target)
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {Array} An array with objects at the specified position in the following format:
                         [
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
     * @see {@link https://docs.screeps.com/api/#Room.lookAtArea}
     *
     * @type {function}
     *
     * @param {number} top The top Y boundary of the area.
     * @param {number} left The left X boundary of the area.
     * @param {number} bottom The bottom Y boundary of the area.
     * @param {number} right The right X boundary of the area.
     * @param {boolean} [asArray] Set to true if you want to get the result as a plain array.
     *
     * @return {object|Array} An object with all the objects in the specified area in the following format:
                        // 10,5,11,7
                         {
                            10 :
                            {
                                5 :
                                [
                                    {
                                        type : 'creep',
                                        creep :
                                        {
                                            ...
                                        }
                                    },
                                    {
                                        type : 'terrain',
                                        terrain : 'swamp'
                                    }
                                ],
                                6 :
                                [
                                    {
                                        type : 'terrain',
                                        terrain : 'swamp'
                                    }
                                ],
                                7 :
                                [
                                    {
                                        type : 'terrain',
                                        terrain : 'swamp'
                                    }
                                ]
                            },
                            11 :
                            {
                                5 :
                                [
                                    {
                                        type : 'terrain',
                                        terrain : 'normal'
                                    }
                                ],
                                6 :
                                [
                                    {
                                        type : 'structure',
                                        structure :
                                        {
                                            ...
                                        }
                                    },
                                    {
                                        type : 'terrain',
                                        terrain : 'swamp'
                                    }
                                ],
                                7 :
                                [
                                    {
                                        type : 'terrain',
                                        terrain : 'wall'
                                    }
                                ]
                            }
                        }
     */
    lookAtArea: function(top, left, bottom, right, asArray) { },

    /**
     * Get an object with the given type at the specified room position.
     *
     * @see {@link https://docs.screeps.com/api/#Room.lookForAt}
     *
     * @type {function}
     *
     * @param {string} type One of the LOOK_* constants.
     * @param {number|RoomPosition|RoomObject} x X position in the room.
     * @param {number} [y] Y position in the room.
     *
     * @note Alternative function: lookForAt(type, target)
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {Array} An array of objects of the given type at the specified position if found.
     */
    lookForAt: function(type, x, y) { },

    /**
     * Get the list of objects with the given type at the specified room area.
     *
     * @see {@link https://docs.screeps.com/api/#Room.lookForAtArea}
     *
     * @type {function}
     *
     * @param {string} type One of the LOOK_* constants.
     * @param {number} top The top Y boundary of the area.
     * @param {number} left The left X boundary of the area.
     * @param {number} bottom The bottom Y boundary of the area.
     * @param {number} right The right X boundary of the area.
     * @param {boolean} [asArray] Set to true if you want to get the result as a plain array.
     *
     * @return {object|Array} An object with all the objects of the given type in the specified area in the following format:
                        //10,5,11,7
                        {
                            10:
                            {
                                5: [{...}],
                                6: undefined,
                                7: undefined
                            },
                            11:
                            {
                                5: undefined,
                                6: [{...}, {...}],
                                7: undefined
                            }
                        }
     */
    lookForAtArea: function(type, top, left, bottom, right, asArray) { }
};

/**
 * An object which provides fast access to room terrain data. These objects can be constructed for any room in the world even if you have no access to it.
 *
 * Technically every Room.Terrain object is a very lightweight adapter to underlying static terrain buffers with corresponding minimal accessors.
 *
 * @param {string} roomName The room name.
 *
 * @class
 * @constructor
 *
 * @see {@link https://docs.screeps.com/api/#Room-Terrain}
 */
Room.Terrain = function(roomName) {};

Room.Terrain.prototype = {
    /**
     * Get terrain type at the specified room position by (x,y) coordinates. Unlike the Game.map.getTerrainAt(...) method, this one doesn't perform any string operations and returns integer terrain type values (see below).
     *
     * @see {@link https://docs.screeps.com/api/#Room.Terrain.get}
     *
     * @type {function}
     *
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     *
     * @return {number|0|TERRAIN_MASK_WALL|TERRAIN_MASK_SWAMP} An integer value. 0 if Plain.
     */
    get: function(x, y) {},

    /**
     * Get copy of underlying static terrain buffer. Current underlying representation is Uint8Array.
     *
     * @note WARNING: this method relies on underlying representation of terrain data. This is the fastest way to obtain terrain data of the whole room (2500 tiles), but users should keep in mind that it can be marked as deprecated anytime in the future, or return value type can be changed due to underlying data representation changing.
     *
     * @see {@link https://docs.screeps.com/api/#Room.Terrain.getRawBuffer}
     *
     * @type {function}
     *
     * @param {Uint8Array} [destinationArray] A typed array view in which terrain will be copied to.
     *
     * @return {Uint8Array|number|ERR_INVALID_ARGS} Copy of underlying room terrain representations as a new Uint8Array typed array of size 2500.

                                  Each element is an integer number, terrain type can be obtained by applying bitwise AND (&) operator with appropriate TERRAIN_MASK_* constant. Room tiles are stored row by row.

                                  If destinationArray is specified, function returns reference to this filled destinationArray if coping succeeded, or error code otherwise:
     */
    getRawBuffer: function(destinationArray) {}
};
