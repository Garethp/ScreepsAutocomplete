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
	 */
	createFlag: function (x, y, name) {
	},

	/**
	 * Create new ConstructionSite at the specified location.
	 *
	 * @param {Object} pos Can be a RoomPosition object or any object containing RoomPosition.
	 * @param {Object} structureType One of the game structure constants
	 */
	createConstructionSite: function (x, y, structureType) {
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
	 * Get the list of objects at the specified room position.
	 *
	 * @param {Object|RoomPosition} target Can be a RoomPosition object or any object containing RoomPosition.
	 * @param {Object} [opts] See Room.find
	 */
	lookAt: function (x, y, opts) {
	},

	/**
	 * Find an optimal path between fromPos and toPos using A* search algorithm.
	 *
	 * @param {RoomPosition} fromPos The start position.
	 * @param {RoomPosition} toPos The end position.
	 * @param {Object} [opts] An object containing additonal pathfinding flags:
	 * @param {Number} [opts.maxOps] The maximum limit of possible pathfinding operations. The greater the value, the
	 *  more accurate path will be found, but more CPU time could be used. The default value is 2000.
	 * @param {Boolean} [opts.ignoreCreeps] Treat squares with creeps as walkable. Can be useful with too many moving
	 *  creeps around or in some other cases. The default value is false.
	 * @param {Boolean} [opts.ignoreDestructibleStructures] Treat squares with destructible structures
	 *  (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when you need to move through a
	 *  territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square, it
	 *  automatically attacks the structure. The default value is false.
	 * @param {Number} [opts.heuristicWeight] Weight to apply to the heuristic to allow for suboptimal paths, in order to
	 *  speed up the search. The less the value, the more accurate path will be found, but more CPU time could be used.
	 *  The default value is 10.
	 * @param {Boolean} [opts.withinRampartsOnly] The path will be found only within the area of your ramparts. Use it to
	 *  move your creeps safely. The default value is false.
	 *
	 *  @return {PathStep[]}
	 */
	findPath: function (fromPos, toPos, opts) {
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