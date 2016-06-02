/**
 * A mineral deposit.
 * Can be harvested by creeps with a WORK body part using the extractor structure.
 *
 * @class
 * @extends {RoomObject}
 */
Mineral = function() { };

Mineral.prototype =
{
    /**
     * The remaining amount of resources.
     *
     * @type {number}
     */
    mineralAmount: 0,

    /**
     * The resource type, one of the RESOURCE_* constants.
     *
     * @type {number}
     */
    mineralType: 0,

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @type {string}
     */
    id: "",

    /**
     * The remaining time after which the deposit will be refilled.
     *
     * @type {number}
     */
    ticksToRegeneration: 0
};
