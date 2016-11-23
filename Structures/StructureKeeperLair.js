/**
 * Non-player structure.
 * Spawns NPC Source Keepers that guards energy sources and minerals in some rooms.
 * This structure cannot be destroyed.
 *
 * @class
 * @extends {OwnedStructure}
 */
class StructureKeeperLair extends OwnedStructure {}

StructureKeeperLair.prototype =
{
    /**
     * Time to spawning of the next Source Keeper.
     *
     * @type {number}
     */
    ticksToSpawn: 0
};
