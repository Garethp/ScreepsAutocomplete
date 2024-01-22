/**
 * Remotely transfers energy to another Link in the same room.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link https://docs.screeps.com/api/#StructureLink}
 */
StructureLink = function() { };

StructureLink.prototype =
{
    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLink.cooldown}
     *
     * @type {number}
     */
    cooldown: 0,

    /**
     * @deprecated Since version 4.x, replaced by `.store[RESOURCE_ENERGY]`.
     *
     * The amount of energy containing in the link.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLink.energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * @deprecated Since version 4.x, replaced by `.store.getCapacity(RESOURCE_ENERGY)`.
     *
     * The total amount of energy the link can contain.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLink.energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * A Store object that contains cargo of this structure.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLink.store}
     *
     * @type {Store}
     */
    store: {},

    /**
     * Remotely transfer energy to another link at any location in the same room.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLink.transferEnergy}
     *
     * @type {function}
     *
     * @param {StructureLink} target The target object.
     * @param {number|undefined|null} [amount] The amount of energy to be transferred. If omitted, all the available energy is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS|ERR_TIRED|ERR_RCL_NOT_ENOUGH}
     */
    transferEnergy: function(target, amount) { }
};
