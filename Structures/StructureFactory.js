/**
 * Produces trade commodities from base minerals and other commodities.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link https://docs.screeps.com/api/#StructureFactory}
 */
StructureFactory = function () {
};

StructureFactory.prototype = {
    /**
     * The amount of game ticks the factory has to wait until the next production is possible.
     *
     * @see {@link https://docs.screeps.com/api/#StructureFactory.cooldown}
     *
     * @return number
     */
    cooldown: 0,

    /**
     * The factory's level. Can be set by applying the PWR_OPERATE_FACTORY power to a newly built factory. Once set,
     * the level cannot be changed.
     *
     * @see {@link https://docs.screeps.com/api/#StructureFactory.level}
     *
     * @return {number}
     */
    level: 0,

    /**
     * A Store object that contains cargo of this structure.
     *
     * @see {@link https://docs.screeps.com/api/#StructureFactory.store}
     *
     * @return {Store}
     */
    store: {},

    /**
     * @deprecated An alias for .store.getCapacity().
     *
     * @see {@link https://docs.screeps.com/api/#StructureFactory.storeCapacity}
     *
     * @return {number}
     */
    storeCapacity: 0,

    /**
     * Produces the specified commodity. All ingredients should be available in the factory store.
     *
     * @see {@link https://docs.screeps.com/api/#StructureFactory.produce}
     *
     * @type {function}
     *
     * @param {string} resourceType One of the Resource_* constants
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_INVALID_ARGS|ERR_TIRED|ERR_RCL_NOT_ENOUGH}
     */
    produce: function (resourceType) {
    }
};
