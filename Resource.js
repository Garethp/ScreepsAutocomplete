/**
 * A dropped piece of resource.
 * It will decay after a while if not picked up.
 * Dropped resource pile decays for ceil(amount/1000) units per tick.
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link https://docs.screeps.com/api/#Resource}
 */
Resource = function() { };

Resource.prototype =
{
    /**
     * The amount of resource units containing.
     *
     * @see {@link https://docs.screeps.com/api/#Resource.amount}
     *
     * @type {number}
     */
    amount: 0,

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link https://docs.screeps.com/api/#Resource.id}
     *
     * @type {string}
     */
    id: "",

    /**
     * One of the RESOURCE_* constants.
     *
     * @see {@link https://docs.screeps.com/api/#Resource.resourceType}
     *
     * @type {string}
     */
    resourceType: ""
};
