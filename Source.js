/**
 * An energy source object.
 * Can be harvested by creeps with a WORK body part.
 *
 * @class
 * @extends {RoomObject}
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
     * The total amount of energy in the source.
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @type {string}
     */
    id: "",

    /**
     * The remaining time after which the source will be refilled.
     *
     * @type {number}
     */
    ticksToRegeneration: 0
};
