/**
 * An object representing the specified position in the room.
 * Every object in the room contains RoomPosition as the pos property.
 *
 * @note The position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
 *
 * @param {number} x X position in the room.
 * @param {number} y Y position in the room.
 * @param {string} roomName The room name.
 * @constructor
 * @class
 */
RoomPosition = function(x, y, roomName) { };

RoomPosition.prototype =
{
    /**
     * The name of the room.
     *
     * @type {string}
     */
    roomName: "",

    /**
     * X position in the room.
     *
     * @type {number}
     */
    x: 0,

    /**
     * Y position in the room.
     *
     * @type {number}
     */
    y: 0,

    /**
     * Create new ConstructionSite at the specified location.
     *
     * @param {string|STRUCTURE_EXTENSION|STRUCTURE_RAMPART|STRUCTURE_ROAD|STRUCTURE_SPAWN|STRUCTURE_WALL|STRUCTURE_LINK} structureType
     *
     * @return {number|OK|ERR_INVALID_TARGET|ERR_FULL|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    createConstructionSite: function(structureType) { },

    /**
     * Create new Flag at the specified location.
     *
     * @param {string} [name] The name of a new flag.
     *                        It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key).
     *                        If not defined, a random name will be generated.
     * @param {string|COLOR_WHITE|COLOR_GREY|COLOR_RED|COLOR_PURPLE|COLOR_BLUE|COLOR_CYAN|COLOR_GREEN|COLOR_YELLOW|COLOR_ORANGE|COLOR_BROWN} [color] The color of a new flag. Default is COLOR_WHITE.
     * @param {string|COLOR_WHITE|COLOR_GREY|COLOR_RED|COLOR_PURPLE|COLOR_BLUE|COLOR_CYAN|COLOR_GREEN|COLOR_YELLOW|COLOR_ORANGE|COLOR_BROWN} [secondaryColor] The secondary color of a new flag. The default value is equal to color.
     *
     * @return {string|ERR_NAME_EXISTS|ERR_INVALID_ARGS} The name of a new flag or an error constant.
     */
    createFlag: function(name, color, secondaryColor) { },

    /**
     * Find an object with the shortest path from the given position.
     * Uses A* search algorithm and Dijkstra's algorithm.
     *
     *
     * @param {number} type See {@link Room.find}
     * @param {object} [opts] An object containing pathfinding options (see {@link Room.findPath}), or one of the following:
     * @param {object|function|string} [opts.filter] Only the objects which pass the filter using the Lodash.filter method will be used.
     * @param {string} [opts.filter] One of the following constants:
     *                               - astar    - is faster when there are relatively few possible targets.
     *                               - dijkstra - is faster when there are a lot of possible targets or when the closest target is nearby.
     *                               The default value is determined automatically using heuristics.
     *
     * @note Another variant of this function is findClosestByPath(objects, opts) where:
     * @param {Array} objects An array of room's objects or RoomPosition objects that the search should be executed against.
     *
     * @return {object|null} The closest object if found, null otherwise.
     */
    findClosestByPath: function(type, opts) { },

    /**
     * Find an object with the shortest linear distance from the given position.
     *
     * @param {number} type See {@link Room.find}
     * @param {object} [opts] An object containing one of the following options:
     * @param {object|function|string} [opts.filter] Only the objects which pass the filter using the Lodash.filter method will be used.
     *
     * @note Another variant of this function is findClosestByPath(objects, opts) where:
     * @param {Array} objects An array of room's objects or RoomPosition objects that the search should be executed against.
     */
    findClosestByRange: function(type, opts) { },

    /**
     * Find all objects in the specified linear range.
     *
     * @param {number} type See {@link Room.find}
     * @param {number} range The range distance.
     * @param {object} [opts] See {@link Room.find}
     *
     * @note Another variant of this function is findInRange(objects, range, opts) where:
     * @param {Array} objects An array of room's objects or RoomPosition objects that the search should be executed against.
     *
     * @return {Array} An array with the objects found.
     */
    findInRange: function(type, range, opts) { },

    /**
     * Find an optimal path to the specified position using A* search algorithm.
     * This method is a shorthand for Room.findPath.
     * If the target is in another room, then the corresponding exit will be used as a target
     *
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     * @param {object} [opts] An object containing pathfinding options flags (see {@link Room.findPath} for more details).
     *
     * @note Another variant of this function is findPathTo(target, opts) where:
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {object[]} An array with path steps in the following format:
     * [
         { x: 10, y: 5, dx: 1,  dy: 0, direction: RIGHT },
         { x: 10, y: 6, dx: 0,  dy: 1, direction: BOTTOM },
         { x: 9,  y: 7, dx: -1, dy: 1, direction: BOTTOM_LEFT },
         ...
       ]
     */
    findPathTo: function(x, y, opts) { },

    /**
     * Get linear direction to the specified position.
     *
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     *
     * @note Another variant of this function is getDirectionTo(target) where:
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {number} A number representing one of the direction constants.
     */
    getDirectionTo: function(x, y) { },

    /**
     * Get linear range to the specified position.
     *
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     *
     * @note Another variant of this function is getRangeTo(target) where:
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {number} A number of squares to the given position.
     */
    getRangeTo: function(x, y) { },

    /**
     * Check whether this position is in the given range of another position.
     *
     * @param {RoomPosition} toPos The target position.
     * @param {number} range The range distance.
     *
     * @return {boolean}
     */
    inRangeTo: function(toPos, range) { },

    /**
     * Check whether this position is the same as the specified position.
     *
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     *
     * @note Another variant of this function is isEqualTo(target) where:
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * return {boolean}
     */
    isEqualTo: function(x, y) { },

    /**
     * Check whether this position is on the adjacent square to the specified position.
     * The same as inRangeTo(target, 1).
     *
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     *
     * @note Another variant of this function is isNearTo(target) where:
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * return {boolean}
     */
    isNearTo: function(x, y) { },

    /**
     * Get the list of objects at the specified room position.
     *
     * @return {object[]} An array with objects at the specified position in the following format:
     * [
         { type: 'creep', creep: {...} },
         { type: 'structure', structure: {...} },
         ...
         { type: 'terrain', terrain: 'swamp' }
       ]
     */
    look: function() { },

    /**
     * Get an object with the given type at the specified room position.
     *
     * @param {string} type One of the following constants: constructionSite, creep, exit, flag, resource, source, structure, terrain
     *
     * @return {object[]} An array of objects of the given type at the specified position if found.
     */
    lookFor: function(type) { }
};