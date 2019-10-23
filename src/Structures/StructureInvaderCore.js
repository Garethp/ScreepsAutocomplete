/**
 * This NPC structure is a control center of NPC Strongholds, and also rules all invaders in the sector. It spawns NPC
 * defenders of the stronghold, refill towers, repairs structures. While it's alive, it will spawn invaders in all rooms
 * in the same sector. It also contains some valuable resources inside, which you can loot from its ruin if you destroy
 * the structure.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link https://docs.screeps.com/api/#StructureInvaderCore}
 */
StructureInvaderCore = function () {
};

StructureInvaderCore.prototype = {

    /**
     * The level of the stronghold. The amount and quality of the loot depends on the level
     *
     * @see {@link https://docs.screeps.com/api/#StructureInvaderCore.level}
     *
     * @return {number}
     */
    level: 0,

    /**
     * Shows the timer for a not yet deployed stronghold, undefined otherwise
     *
     * @see {@link https://docs.screeps.com/api/#StructureInvaderCore.ticksToDeploy}
     *
     * @return {number|undefined}
     */
    ticksToDeploy: 0

};