/**
 * Produces mineral compounds from base minerals, boosts and unboosts creeps.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link https://docs.screeps.com/api/#StructureLab}
 */
StructureLab = function() { };

StructureLab.prototype =
{
    /**
     * The amount of game ticks the lab has to wait until the next reaction is possible.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLab.cooldown}
     *
     * @type {number}
     */
    cooldown: 0,

    /**
     * @deprecated Since version 4.x, replaced by `.store[RESOURCE_ENERGY]`.
     *
     * The amount of energy containing in the lab. Energy is used for boosting creeps.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLab.energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * @deprecated Since version 4.x, replaced by `.store.getCapacity(RESOURCE_ENERGY)`.
     *
     * The total amount of energy the lab can contain.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLab.energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * @deprecated Since version 4.x, replaced by `lab.store[lab.mineralType]`.
     *
     * The amount of mineral resources containing in the lab.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLab.mineralAmount}
     *
     * @type {number}
     */
    mineralAmount: 0,

    /**
     * The type of minerals containing in the lab.
     * Labs can contain only one mineral type at the same time.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLab.mineralType}
     *
     * @type {string}
     */
    mineralType: "",

    /**
     * @deprecated Since version 4.x, replaced by `lab.store.getCapacity(lab.mineralType || yourMineral)`.
     *
     * The total amount of minerals the lab can contain.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLab.mineralCapacity}
     *
     * @type {number}
     */
    mineralCapacity: 0,

    /**
     * A Store object that contains cargo of this structure.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLab.store}
     *
     * @type {Store}
     */
    store: {},

    /**
     * Boosts creep body parts using the containing mineral compound.
     * The creep has to be at adjacent square to the lab.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLab.boostCreep}
     *
     * @type {function}
     *
     * @param {Creep} creep The target creep.
     * @param {number|undefined|null} [bodyPartsCount] The number of body parts of the corresponding type to be boosted. Body parts are always counted left-to-right for TOUGH, and right-to-left for other types. If undefined, all the eligible body parts are boosted.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_FOUND|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_RCL_NOT_ENOUGH}
     */
    boostCreep: function(creep, bodyPartsCount) { },

    /**
     * Breaks mineral compounds back into reagents.
     * The same output labs can be used by many source labs.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLab.reverseReaction}
     *
     * @type {function}
     *
     * @param {StructureLab} lab1 The first result lab.
     * @param {StructureLab} lab2 The second result lab.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS|ERR_TIRED|ERR_RCL_NOT_ENOUGH}
     */
    reverseReaction: function(lab1, lab2) { },
        
    /**
     * Immediately remove boosts from the creep and drop 50% of the mineral compounds used to boost it onto the ground regardless of the creep's remaining time to live.
     * The creep has to be at adjacent square to the lab. Unboosting requires cooldown time equal to the total sum of the reactions needed to produce all the compounds applied to the creep.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLab.unboostCreep}
     *
     * @type {function}
     *
     * @param {Creep} creep The target creep.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_FOUND|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_TIRED|ERR_RCL_NOT_ENOUGH}
     */
    unboostCreep: function(creep) { },

    /**
     * Produce mineral compounds using reagents from two other labs.
     * The same input labs can be used by many output labs.
     *
     * @see {@link https://docs.screeps.com/api/#StructureLab.runReaction}
     *
     * @type {function}
     *
     * @param {StructureLab} lab1 The first source lab.
     * @param {StructureLab} lab2 The second source lab.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS|ERR_TIRED|ERR_RCL_NOT_ENOUGH}
     */
    runReaction: function(lab1, lab2) { }

};
