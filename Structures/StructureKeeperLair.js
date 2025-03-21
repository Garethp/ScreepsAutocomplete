/**
 * Non-player structure.
 * Spawns NPC Source Keepers that guards energy sources and minerals in some rooms.
 * This structure cannot be destroyed.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link https://docs.screeps.com/api/#StructureKeeperLair}
 */
StructureKeeperLair = function() { };

StructureKeeperLair.prototype =
{
    /**
     * Time to spawning of the next Source Keeper.
     *
     * @see {@link https://docs.screeps.com/api/#StructureKeeperLair.ticksToSpawn}
     *
     * @type {number}
     */
    ticksToSpawn: 0
};
