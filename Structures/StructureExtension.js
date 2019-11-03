/**
 * Contains energy which can be spent on spawning bigger creeps.
 * Extensions can be placed anywhere in the room, any spawns will be able to use them regardless of distance.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207711949-StructureExtension}
 */
StructureExtension = function() { };

StructureExtension.prototype =
{
    /**
     * @deprecated Since version 4.x, replaced by `.store[RESOURCE_ENERGY]`.
     *
     * The amount of energy containing in the extension.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711949-StructureExtension#energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * @deprecated Since version 4.x, replaced by `.store.getCapacity(RESOURCE_ENERGY)`.
     *
     * The total amount of energy the extension can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711949-StructureExtension#energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * A Store object that contains cargo of this structure.
     *
     * @see {@link https://docs.screeps.com/api/#StructureExtension.store}
     *
     * @type {Store}
     */
    store: {},

    /**
     * @deprecated Since version 2016-07-11, replaced by `Creep.withdraw()`.
     *
     * Transfer the energy from the extension to a creep.
     * You can transfer resources to your creeps from hostile structures as well.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207711949-StructureExtension#transferEnergy}
     *
     * @type {function}
     *
     * @param {Creep} target The creep object which energy should be transferred to.
     * @param {number|undefined|null} [amount] The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    transferEnergy: function(target, amount) { }
};
