/**
 * An object representing the specified position in the room. Every object in the room contains RoomPosition as the pos
 * property. The position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
 *
 * @class
 * @constructor
 *
 * @param x {number} X position in the room.
 * @param y {number} Y position in the room.
 * @param roomName {String} The room name.
 *
 */
RoomPosition = function (x, y, roomName) {
};

RoomPosition.prototype = {
	/**
	 * X position in the room.
	 *
	 * @type number
	 */
	x: 0,

	/**
	 * Y position in the room.
	 *
	 * @type number
	 */
	y: 0,

	/**
	 * The name of the room.
	 *
	 * @type string
	 */
	roomName: "",

	/**
	 * Check whether this position is in the given range of another position.
	 *
	 * @param {RoomPosition} toPos The target position.
	 * @param {number} range The range distance.
	 * @return {boolean}
	 */
	inRangeTo: function (toPos, range) {
	},

	/**
	 * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1)
	 *
	 * @param {Object|RoomPosition} target Can be a RoomPosition object or any object containing RoomPosition.
	 *
	 * @note An alternative function is isNearTo(x, y)
	 *
	 * @return {boolean}
	 */
	isNearTo: function (target) {
	},

	/**
	 * Get linear direction to the specified position.
	 *
	 * @param {Object|RoomPosition} target Can be a RoomPosition object or any object containing RoomPosition.
	 *
	 * @note An alternative function is getDirectionTo(x, y)
	 *
	 * @return A number representing one of the direction constants.
	 */
	getDirectionTo: function (target) {
	},

	/**
	 * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath.
	 *
	 * @param {Object|RoomPosition} target Can be a RoomPosition object or any object containing RoomPosition.
	 * @param {Object} [opts] An object containing pathfinding options flags (see Room.findPath for more details).
	 *
	 * @note An alternative function is findPathTo(x, y, opts)
	 *
	 * @return {PathStep[]}
	 */
	findPathTo: function (target, opts) {
	},

	/**
	 * An alias for findClosest method. This method is deprecated and will be removed soon.
	 *
	 * @deprecated
	 * @param {number} type See Room.find.
	 * @param {Object} [opts] An object containing pathfinding options (see Room.findPath), or filter
	 * @param {Object|Function|String} [opts.filter] Only the objects which pass the filter using the Lodash.filter
	 *  method will be used.
	 * @param {String} [opts.algorithm] One of the following constants:
	 *  - astar is faster when there are relatively few possible targets;
	 *  - dijkstra is faster when there are a lot of possible targets or when the closest target is nearby.
	 *  The default value is determined automatically using heuristics.
	 */
	findNearest: function (type, opts) {
	},

	/**
	 * Find all objects in the specified linear range of the given type.
	 *
	 * @param {number} type See Room.find.
	 * @param {number} range The range distance.
	 * @param {Object} [opts] See Room.find.
	 * @return {Object[]} An array with the objects found.
	 */
	findInRange: function (type, range, opts) {
	},

	/**
	 * Find an object with the shortest path. Uses A* search algorithm and Dijkstra's algorithm.
	 *
	 * @param {number} type See Room.find.
	 * @param {Object} [opts] An object containing pathfinding options (see Room.findPath), or filter
	 * @param {Object|Function|String} [opts.filter] Only the objects which pass the filter using the Lodash.filter
	 *  method will be used.
	 * @param {String} [opts.algorithm] One of the following constants:
	 *  - astar is faster when there are relatively few possible targets;
	 *  - dijkstra is faster when there are a lot of possible targets or when the closest target is nearby.
	 *  The default value is determined automatically using heuristics.
	 *
	 *  @note An alternative function is findClosest(objects, opts)
	 *  - objects {Array} An array of room's objects or RoomPosition objects that the search should be executed against.
	 *
	 *  @return {Object|null} The closest object if found, null otherwise.
	 */
	findClosest: function(type, opts) { },

	/**
	 * Find an object with the shortest linear distance from the given position.
	 *
	 * @param {number} type See Room.find.
	 * @param {Object} [opts] An object containing a filter
	 * @param {Object|Function|String} [opts.filter] Only the objects which pass the filter using the Lodash.filter method will be used.
	 *
	 * @return {Object|null} The closest object if found, null otherwise.
	 */
	findClosestByRange: function(type, opts) { },

	/**
	 * Get linear range to the specified position.'
	 *
	 * @param {RoomPosition|Object} target Can be a RoomPosition object or any object containing RoomPosition.
	 *
	 * @note An alternative function is getRangeTo(x, y)
	 *
	 * @return {number} A number of squares to the given position.
	 */
	getRangeTo: function(target) { },

	/**
	 * Check whether this position is the same as the specified position.
	 *
	 * @param {Object|RoomPosition} target Can be a RoomPosition object or any object containing RoomPosition.
	 *
	 * @note An alternative function is equalsTo(x, y)
	 *
	 * @return {boolean}
	 */
	equalsTo: function (target) {
	},

	/**
	 * Get the list of objects at the specified room position.
	 *
	 * @return {Object[]}
	 */
	look: function() { },

	/**
	 * Get an object with the given type at the specified room position.
	 *
	 * @param {String} type One of the following string constants:
	 * - constructionSite
	 * - creep
	 * - energy
	 * - exit
	 * - flag
	 * - source
	 * - structure
	 * - terrain
	 *
	 * @return {Object[]|Undefined} An array of objects of the given type at the specified position if found, otherwise undefined.
	 */
	lookFor: function(type) { },

	/**
	 * Create new Flag at the specified location.
	 *
	 * @param {String} [name] The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
	 * @param {String} [color] The color of a new flag. Should be one of the global.COLOR_* constants.
	 *
	 * @return {Number}
	 */
	createFlag: function(name, color) { },

	/**
	 * Create new ConstructionSite at the specified location.
	 *
	 * @param structureType One of the global.STRUCTURE_* constants.
	 *
	 * @return {Number}
	 */
	createConstructionSite: function(structureType) { }
};