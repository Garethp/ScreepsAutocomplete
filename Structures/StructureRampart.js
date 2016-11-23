/**
 * Blocks movement of hostile creeps, and defends your creeps and structures on the same tile.
 *
 * @class
 * @extends {OwnedStructure}
 */
class StructureRampart extends OwnedStructure {}

StructureRampart.prototype =
{
    /**
     * The amount of game ticks when this rampart will lose some hit points.
     *
     * @type {number}
     */
    ticksToDecay: 0
};
