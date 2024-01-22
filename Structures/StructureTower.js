/**
 * Remotely attacks or heals creeps, or repairs structures.
 * Can be targeted to any object in the room.
 * However, its effectiveness linearly depends on the distance.
 * Each action consumes energy.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link https://docs.screeps.com/api/#StructureTower}
 */
StructureTower = function() { };

StructureTower.prototype =
{
    /**
     * @deprecated Since version 4.x, replaced by `.store[RESOURCE_ENERGY]`.
     *
     * @see {@link https://docs.screeps.com/api/#StructureTower.energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * @deprecated Since version 4.x, replaced by `.store.getCapacity(RESOURCE_ENERGY)`.
     *
     * @see {@link https://docs.screeps.com/api/#StructureTower.energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * A Store object that contains cargo of this structure.
     *
     * @see {@link https://docs.screeps.com/api/#StructureTower.store}
     *
     * @type {Store}
     */
    store: {},

    /**
     * Remotely attack any creep, power creep or structure in the room.
     *
     * @see {@link https://docs.screeps.com/api/#StructureTower.attack}
     *
     * @type {function}
     *
     * @param {Creep|PowerCreep|Structure} target The target creep.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    attack: function(target) { },

    /**
     * Remotely heal any creep or power creep in the room.
     *
     * @see {@link https://docs.screeps.com/api/#StructureTower.heal}
     *
     * @type {function}
     *
     * @param {Creep|PowerCreep} target The target creep.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    heal: function(target) { },

    /**
     * Remotely repair any structure in the room.
     *
     * @see {@link https://docs.screeps.com/api/#StructureTower.repair}
     *
     * @type {function}
     *
     * @param {Structure} target The target structure.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    repair: function(target) { }
};
