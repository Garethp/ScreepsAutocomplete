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
     * @return {number}
     */
    cooldown: 0,

    /**
     * The deposit type
     * @see {@link https://docs.screeps.com/api/#Deposit.depositType}
     *
     * @return {string|RESOURCE_MIST|RESOURCE_BIOMASS|RESOURCE_METAL|RESOURCE_SILICON}
     */
    depositType: "",

    /**
     * The cooldown of the last harvest operation on this deposit.
     *
     * @see {@link https://docs.screeps.com/api/#Deposit.lastCooldown}
     *
     * @return {number}
     */
    lastCooldown: 0,

    /**
     * The amount of game ticks when this deposit will disappear.
     *
     * @see {@link https://docs.screeps.com/api/#Deposit.ticksToDecay}
     *
     * @return {number}
     */
    ticksToDecay: 0,


};
