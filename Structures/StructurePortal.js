/**
 * A non-player structure.
 * Instantly teleports your creeps to a distant room acting as a room exit tile.
 * Portals appear randomly in the central room of each sector.
 *
 * @class
 * @extends {Structure}
 */
StructurePortal = function() { };

StructurePortal.prototype =
{
    /**
     * The position object in the destination room.
     *
     * @type {RoomPosition}
     */
    destination: null,

    /**
     * The amount of game ticks when the portal disappears, or undefined when the portal is stable.
     *
     * @type {undefined|number}
     */
    ticksToDecay: 0
};
