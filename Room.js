/**
 * An object representing the room in which your creeps, spawns, and extensions are in. It can be used to look around,
 * find paths, etc. Every object in the room contains its linked Room instance as the room property.
 *
 * @class
 * @constructor
 */
Room = function () {

};

Room.prototype = {
	/**
	 * The name of the room.
	 *
	 * @typs string
	 */
	name: "",

	/**
	 * Create new Flag at the specified location.
	 *
	 * @param {Object} pos Can be a RoomPosition object or any object containing RoomPosition.
	 * @param {String} [name] The name of a new flag. It should be unique name, i.e. the Game.flags object should not
	 *  contain another flag with the same name (hash key). If not defined, a random name will be generated.
	 * @param {String} [color] The color of a new flag. Should be one of the Game.COLOR_* constants. The default value is Game.COLOR_WHITE.
	 */
	createFlag: function (pos, name, color) {
	},

	/**
	 * Create new ConstructionSite at the specified location.
	 *
	 * @param {Object} pos Can be a RoomPosition object or any object containing RoomPosition.
	 * @param {Object} structureType One of the game structure constants
	 */
	createConstructionSite: function (pos, structureType) {
	},

	/**
	 * Find all objects of the specified type in the room.
	 * @param {number} type One of the Game Constants
	 * @param {Object} [opts] An object with additional options
	 * @param {Object|function|string} [opts.filter] The result list will be filtered using the Lodash.filter method.
	 * @return {Object[]} An array with the objects found.
	 */
	find: function (type, opts) {
	},

	/**
	 * Find an optimal path between fromPos and toPos using A* search algorithm.
	 *
	 * @param {RoomPosition} fromPos The start position.
	 * @param {RoomPosition} toPos The end position.
	 * @param {Object} [opts] An object containing additonal pathfinding flags:
	 * @param {Boolean} [opts.ignoreCreeps] Treat squares with creeps as walkable. Can be useful with too many moving
	 *  creeps around or in some other cases. The default value is false.
	 * @param {Boolean} [opts.ignoreDestructibleStructures] Treat squares with destructible structures
	 *  (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when you need to move through a
	 *  territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square, it
	 *  automatically attacks the structure. The default value is false.
	 * @param {Boolean} [opts.withinRampartsOnly] The path will be found only within the area of your ramparts. Use it to
	 *  move your creeps safely. The default value is false.
	 * @param {RoomPosition|Object} [opts.ignore] An array of the room's objects or RoomPosition objects which should be
	 *  treated as walkable tiles during the search.
	 * @param {RoomPosition|Object} [opts.avoid] An array of the room's objects or RoomPosition objects which should be
	 *  treated as obstacles tiles during the search.
	 * @param {Number} [opts.maxOps] The maximum limit of possible pathfinding operations. The greater the value, the
	 *  more accurate path will be found, but more CPU time could be used. The default value is 2000.
	 * @param {Number} [opts.heuristicWeight] Weight to apply to the heuristic to allow for suboptimal paths, in order to
	 *  speed up the search. The less the value, the more accurate path will be found, but more CPU time could be used.
	 *  The default value is 10.
	 *
	 *  @return {PathStep[]}
	 */
	findPath: function (fromPos, toPos, opts) {
	},

	/**
	 * Get the list of objects at the specified room position.
	 *
	 * @param {Object|RoomPosition} pos target Can be a RoomPosition object or any object containing RoomPosition.
	 */
	lookAt: function (pos) {
	},

	/**
	 * Get the list of objects at the specified room area.
	 * This method is more CPU efficient in comparison to multiple lookAt calls.
	 *
	 * @param {Number} top The top Y boundary of the area.
	 * @param {Number} left The left X boundary of the area.
	 * @param {Number} bottom The bottom Y boundary of the area.
	 * @param {Number} right The right X boundary of the area.
	 */
	lookAtArea: function(top, left, bottom, right) {
	},

	/**
	 * Creates a RoomPosition object at the specified location.
	 *
	 * @param x {Number} The X position.
	 * @param y {Number} The Y position.
	 *
	 * @return RoomPosition
	 */
	getPositionAt: function (x, y) {
	},

	/**
	 * Create a room snapshot with all objects currently present in the room. Room snapshots are saved in your account
	 * so that you can later check out if something happened in the game when you were offline. Not available in the
	 * Simulation Room.
	 *
	 * @param {string} [description] The description message which will be attached to the snapshot.
	 */
	makeSnapshot: function (description) {
	}
};

/**
 * Create new Flag at the specified location.
 *
 * @param {Number} x The X position.
 * @param {Number} y The Y position.
 * @param {String} [name] The name of a new flag. It should be unique name, i.e. the Game.flags object should not
 *  contain another flag with the same name (hash key). If not defined, a random name will be generated.
 * @param {String} [color] The color of a new flag. Should be one of the Game.COLOR_* constants. The default value is Game.COLOR_WHITE.
 */
Room.prototype.createFlag = function(x, y, name, color) {
};

/**
 * Create new ConstructionSite at the specified location.
 *
 * @param {Number} x The X position.
 * @param {Number} y The Y position.
 * @param {Object} structureType One of the game structure constants
 */
Room.prototype.createConstructionSite = function(x, y, structureType) {
};

/**
 * Get the list of objects at the specified room position.
 *
 * @param {Number} x X position in the room.
 * @param {Number} y Y position in the room.
 */
Room.prototype.lookAt = function(x, y) {
};
