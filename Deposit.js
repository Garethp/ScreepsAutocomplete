/**
 * A rare resource deposit needed for producing commodities. Can be harvested by creeps with a WORK body part. Each
 * harvest operation triggers a cooldown period, which becomes longer and longer over time.
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link https://docs.screeps.com/api/#Deposit}
 */
Deposit = function () {
};

Deposit.prototype = {

    /**
     * The amount of game ticks until the next harvest action is possible.
     *
     * @see {@link https://docs.screeps.com/api/#Deposit.cooldown}
     *
     * @type {number}
     */
    cooldown: 0,

    /**
     * The deposit type
     * @see {@link https://docs.screeps.com/api/#Deposit.depositType}
     *
     * @type {string|RESOURCE_MIST|RESOURCE_BIOMASS|RESOURCE_METAL|RESOURCE_SILICON}
     */
    depositType: "",

    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     * @see {@link https://docs.screeps.com/api/#Deposit.id}
     *
     * @type {string}
     */
    id: "",

    /**
     * The cooldown of the last harvest operation on this deposit.
     *
     * @see {@link https://docs.screeps.com/api/#Deposit.lastCooldown}
     *
     * @type {number}
     */
    lastCooldown: 0,

    /**
     * The amount of game ticks when this deposit will disappear.
     *
     * @see {@link https://docs.screeps.com/api/#Deposit.ticksToDecay}
     *
     * @type {number}
     */
    ticksToDecay: 0

};
