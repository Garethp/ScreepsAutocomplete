/**
 * An energy source object. Can be harvested by creeps with a WORK body part.
 *
 * @class
 * @constructor
 */
Source = function() { };

Source.prototype =
{
    /**
     * The remaining amount of energy.
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy in the source. Equals to 3000 in most cases.
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
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
     * The remaining time after which the source will be refilled.
     *
     * @type {number}
     */
    tickToRegeneration: 0
};