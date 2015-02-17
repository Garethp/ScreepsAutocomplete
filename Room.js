/**
 * An object representing the room in which your creeps, spawns, and extensions are in. It can be used to look around,
 * find paths, etc. Every object in the room contains its linked Room instance as the room property.
 *
 * @class
 * @constructor
 */
Room = function()
{

};

Room.prototype = {
	/**
	 * One of the following constants:
	 *  - Game.MODE_SIMULATION
	 *  - Game.MODE_SURVIVAL
	 *  - Game.MODE_WORLD
	 *
	 * @type {Game.MODE_SIMULATION|Game.MODE_SURVIVAL|Game.MODE_WORLD}
	 */
	mode: '',

	/**
	 * The name of the room.
	 *
	 * @type string
	 */
	name: "",

	/**
	 * Create new Flag at the specified location.
	 *
	 * @param {Object} pos Can be a RoomPosition object or any object containing RoomPosition.
	 * @param {String} [name] The name of a new flag. It should be unique name, i.e. the Game.flags object should not
	 *  contain another flag with the same name (hash key). If not defined, a random name will be generated.
	 * @param {Game.COLOR_RED|Game.COLOR_PURPLE|Game.COLOR_BLUE|Game.COLOR_CYAN|Game.COLOR_GREEN|Game.COLOR_YELLOW
	 *  |Game.COLOR_ORANGE|Game.COLOR_BROWN|Game.COLOR_GREY|Game.COLOR_WHITE} color
	 *  The color of a new flag. Should be one of the Game.COLOR constants. The default value is Game.COLOR_WHITE.
	 */
	createFlag: function(pos, name, color) { },

	/**
	 * Create new ConstructionSite at the specified location.
	 *
	 * @param {Object} pos Can be a RoomPosition object or any object containing RoomPosition.
	 * @param {Object} structureType One of the game structure constants
	 */
	createConstructionSite: function(pos, structureType) { },

	/**
	 * Find all objects of the specified type in the room.
	 * @param {number} type One of the Game Constants
	 * @param {Object} [opts] An object with additional options
	 * @param {Object|function|string} [opts.filter] The result list will be filtered using the Lodash.filter method.
	 * @return {Object[]} An array with the objects found.
	 */
	find: function(type, opts) { },

	/**
	 * Get the list of objects at the specified room position.
	 *
	 * @param {Object|RoomPosition} target Can be a RoomPosition object or any object containing RoomPosition.
	 * @param {Object} [opts] See Room.find
	 */
	lookAt: function(target, opts) { },

	/**
	 * Get the list of objects at the specified room area. This method is more CPU efficient in comparison to multiple lookAt calls.
	 *
	 * @param top {number} The top Y boundary of the area.
	 * @param left {number} The left X boundary of the area.
	 * @param bottom {number} The bottom Y boundary of the area.
	 * @param right {number} The right X boundary of the area.
	 *
	 * @return {Object[]} An object with all the objects in the specified area in the following format:
	 *  // 10,5,11,7
	 *	 {
	 *		10: {
	 *			5: [{ type: ‘creep’, creep: {...} },
	 *				{ type: ‘terrain’, terrain: ‘swamp’ }],
	 *			6: [{ type: ‘terrain’, terrain: ‘swamp’ }],
	 *			7: [{ type: ‘terrain’, terrain: ‘swamp’ }]
	 *		},
	 *		11: {
	 *			5: [{ type: ‘terrain’, terrain: ‘normal’ }],
	 *			6: [{ type: ‘spawn’, spawn: {...} },
	 *				{ type: ‘terrain’, terrain: ‘swamp’ }],
	 *			7: [{ type: ‘terrain’, terrain: ‘wall’ }]
	 *		}
	 *	}
	 */
	lookAtArea: function(top, left, bottom, right) { },

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
	 * @param {Array} [opts.ignore] An array of the room's objects or RoomPosition objects which should be treated as
	 *  walkable tiles during the search.
	 * @param {Array} [opts.avoid] An array of the room's objects or RoomPosition objects which should be treated as
	 *  obstacles during the search.
	 * @param {Number} [opts.maxOps] The maximum limit of possible pathfinding operations. The greater the value, the
	 *  more accurate path will be found, but more CPU time could be used. The default value is 2000.
	 * @param {Number} [opts.heuristicWeight] Weight to apply to the heuristic to allow for suboptimal paths, in order
	 *  to speed up the search. The less the value, the more accurate path will be found, but more CPU time could be used. The default value is 3.
	 *
	 *  @return {PathStep[]}
	 */
	findPath: function(fromPos, toPos, opts) { },

	/**
	 * Creates a RoomPosition object at the specified location.
	 *
	 * @param x {Number} The X position.
	 * @param y {Number} The Y position.
	 *
	 * @return RoomPosition
	 */
	getPositionAt: function(x, y) { },

	/**
	 * Create a room snapshot with all objects currently present in the room. Room snapshots are saved in your account
	 * so that you can later check out if something happened in the game when you were offline. Not available in the
	 * Simulation Room.
	 *
	 * @param {string} [description] The description message which will be attached to the snapshot.
	 */
	makeSnapshot: function(description) { }
};