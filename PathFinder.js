/**
 * Contains powerful methods for pathfinding in the game world.
 * Support exists for custom navigation costs and paths which span multiple rooms.
 * Additionally PathFinder can search for paths through rooms you can't see,
 * although you won't be able to detect any dynamic obstacles like creeps or buildings.
 *
 * @note This module is experimental and disabled by default. Run PathFinder.use(true) to enable it in the game methods.
 *
 * @class
 * @constructor
 */
PathFinder = function() { };


PathFinder.prototype =
{
    /**
     * Find an optimal path between origin and goal.
     *
     * @param {RoomPosition} origin
     * @param {RoomPosition|RoomPosition[]|object|object[]} goal A goal or an array of goals.
     *                                                      If more than one goal is supplied then the cheapest path found out of all the goals will be returned.
     *                                                      A goal is either a RoomPosition or an object as defined below.
     *                                                      Important: Please note that if your goal is not walkable (for instance, a source)
     *                                                      then you should set range to at least 1 or else you will waste many CPU cycles searching for a target that you can't walk on.
     * @param {object} [opts]
     * @param {function} [opts.roomCallback] Request from the pathfinder to generate a CostMatrix for a certain room.
     *                                       The callback accepts one argument, roomName.
     *                                       This callback will only be called once per room per search.
     *                                       If you are running multiple pathfinding operations in a single room and
     *                                       in a single tick you may consider caching your CostMatrix to speed up your code.
     * @param {number} [opts.plainCost] Cost for walking on plain positions. The default is 1.
     * @param {number} [opts.swampCost] Cost for walking on swamp positions. The default is 5.
     * @param {boolean} [opts.flee] Instead of searching for a path to the goals this will search for a path away from the goals.
     *                              The cheapest path that is out of range of every goal will be returned. The default is false.
     * @param {number} [opts.maxOps] The maximum allowed pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     * @param {number} [opts.maxRooms] The maximum allowed rooms to search. The default (and maximum) is 16.
     * @param {number} [opts.heuristicWeight] Weight to apply to the heuristic in the A* formula F = G + weight * H.
     *                                        Use this option only if you understand the underlying A* algorithm mechanics! The default value is 1.
     *
     * @static
     *
     * @return {object} An object containing:
     *                  path - An array of RoomPosition objects.
     *                  ops - Total number of operations performed before this path was calculated.
     */
    search: function(origin, goal, opts) { },

    /**
     * Specify whether to use this new experimental pathfinder in game objects methods.
     * This method should be invoked every tick.
     *
     * @note It affects the following methods behavior: Room.findPath, RoomPosition.findPathTo, RoomPosition.findClosestByPath, Creep.moveTo
     *
     * @param {boolean} isEnabled Whether to activate the new pathfinder or deactivate.
     *
     * @static
     *
     * @return {null}
     */
    use: function(isEnabled) { },

    /**
     * Creates a new CostMatrix containing 0's for all positions.
     *
     * @static
     * @constructor
     *
     * @return {CostMatrix}
     */
    CostMatrix: function() { }
};

/**
 * Container for custom navigation cost data.
 * By default PathFinder will only consider terrain data (plain, swamp, wall)
 * if you need to route around obstacles such as buildings or creeps you must put them into a CostMatrix.
 * Generally you will create your CostMatrix from within roomCallback.
 * If a non-0 value is found in a room's CostMatrix then that value will be used instead of the default terrain cost.
 * You should avoid using large values in your CostMatrix and terrain cost flags.
 * For example, running PathFinder.search with { plainCost: 1, swampCost: 5 } is faster than running it with {plainCost: 2, swampCost: 10 } even though your paths will be the same.
 *
 * @note Use PathFinder.CostMatrix() to create a new CostMatrix object.
 *
 * @class
 */
CostMatrix = function() { }

CostMatrix.prototype =
{
    /**
     * Set the cost of a position in this CostMatrix.
     *
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     * @param {number} cost Cost of this position. Must be a whole number. A cost of 0 will use the terrain cost for that tile. A cost greater than or equal to 255 will be treated as unwalkable.
     */
    set: function(x, y, cost) { },

    /**
     * Get the cost of a position in this CostMatrix.
     *
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     *
     * @return {number}
     */
    get: function(x, y) { },

    /**
     * Copy this CostMatrix into a new CostMatrix with the same data.
     *
     * @return {CostMatrix}
     */
    clone: function() { },

    /**
     * Returns a compact representation of this CostMatrix which can be stored via JSON.stringify
     *
     * @return {number[]}
     */
    serialize: function() { },

    /**
     * Static method which deserializes a new CostMatrix using the return value of serialize.
     * @static
     *
     * @param {object} val Whatever serialize returned
     *
     * @return {CostMatrix}
     */
    deserialize: function(val) { }
};