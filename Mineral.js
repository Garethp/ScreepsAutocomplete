
/**
 * A mineral deposit object. Can be harvested by creeps with a WORK body part using the extractor structure.
 *
 * @class
 * @constructor
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
     * @type {string}
     */
    mineralType: "",

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @type {string}
     */
    id: "",

    /**
     * An object representing the position of this structure in the room.
     *
     * @type {RoomPosition}
     */
    pos: null,

    /**
     * The link to the Room object of this structure.
     *
     * @type {Room}
     */
    room: null,

    /**
     * The remaining time after which the deposit will be refilled.
     *
     * @type {number}
     */
    ticksToRegeneration: 0

};