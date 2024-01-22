/**
 * A non-player structure.
 * Instantly teleports your creeps to a distant room acting as a room exit tile.
 * Portals appear randomly in the central room of each sector.
 *
 * @class
 * @extends {Structure}
 *
 * @see {@link https://docs.screeps.com/api/#StructurePortal}
 */
StructurePortal = function() { };

StructurePortal.prototype =
{
    /**
     * If this is an inter-room portal, then this property contains a RoomPosition object leading to the point in the destination room.
     * If this is an inter-shard portal, then this property contains an object with shard and room string properties.
     *
     * @see {@link https://docs.screeps.com/api/#StructurePortal.destination}
     *
     * @type {RoomPosition|object}
     */
    destination: null,

    /**
     * The amount of game ticks when the portal disappears, or undefined when the portal is stable.
     *
     * @see {@link https://docs.screeps.com/api/#StructurePortal.ticksToDecay}
     *
     * @type {undefined|number}
     */
    ticksToDecay: 0
};
