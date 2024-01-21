/**
 * Blocks movement of hostile creeps, and defends your creeps and structures on the same tile.
 * Can be used as a controllable gate.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link https://docs.screeps.com/api/#StructureRampart}
 */
StructureRampart = function() { };

StructureRampart.prototype =
{
    /**
     * If false (default), only your creeps can step on the same square. If true, any hostile creeps can pass through.
     *
     * @see {@link https://docs.screeps.com/api/#StructureRampart.isPublic}
     *
     * @type {boolean}
     */
    isPublic: false,
    
    /**
     * The amount of game ticks when this rampart will lose some hit points.
     *
     * @see {@link https://docs.screeps.com/api/#StructureRampart.ticksToDecay}
     *
     * @type {number}
     */
    ticksToDecay: 0,

    /**
     * Make this rampart public to allow other players' creeps to pass through.
     *
     * @see {@link https://docs.screeps.com/api/#StructureRampart.setPublic}
     *
     * @type {function}
     *
     * @param {boolean} isPublic Whether this rampart should be public or non-public.
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    setPublic: function(isPublic) { }
};
