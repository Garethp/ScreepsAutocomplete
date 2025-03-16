/**
 * Processes power into your account, and spawns power creeps with special unique powers (in development).
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link https://docs.screeps.com/api/#StructurePowerSpawn}
 */
StructurePowerSpawn = function() { };

StructurePowerSpawn.prototype =
{
    /**
     * @deprecated Since version 4.x, replaced by `.store[RESOURCE_ENERGY]`.
     *
     * The amount of energy containing in this structure.
     *
     * @see {@link https://docs.screeps.com/api/#StructurePowerSpawn.energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * @deprecated Since version 4.x, replaced by `.store.getCapacity(RESOURCE_ENERGY)`.
     *
     * The total amount of energy this structure can contain.
     *
     * @see {@link https://docs.screeps.com/api/#StructurePowerSpawn.energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * @deprecated Since version 4.x, replaced by `.store[RESOURCE_POWER]`.
     *
     * The amount of power containing in this structure.
     *
     * @see {@link https://docs.screeps.com/api/#StructurePowerSpawn.power}
     *
     * @type {number}
     */
    power: 0,

    /**
     * @deprecated Since version 4.x, replaced by `.store.getCapacity(RESOURCE_POWER)`.
     *
     * The total amount of power this structure can contain.
     *
     * @see {@link https://docs.screeps.com/api/#StructurePowerSpawn.powerCapacity}
     *
     * @type {number}
     */
    powerCapacity: 0,

    /**
     * A Store object that contains cargo of this structure.
     *
     * @see {@link https://docs.screeps.com/api/#StructurePowerSpawn.store}
     *
     * @type {Store}
     */
    store: {},

    /**
     * Register power resource units into your account.
     * Registered power allows to develop power creeps skills.
     *
     * @see {@link https://docs.screeps.com/api/#StructurePowerSpawn.processPower}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_RCL_NOT_ENOUGH}
     */
    processPower: function() { }

};
