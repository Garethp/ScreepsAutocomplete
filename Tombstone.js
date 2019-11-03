/**
 * A remnant of dead creeps. This is a walkable object.
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link https://docs.screeps.com/api/#Tombstone}
 */
Tombstone = function() { };

Tombstone.prototype =
{
    /**
     * An object containing the deceased creep.
     *
     * @see {@link https://docs.screeps.com/api/#Tombstone.creep}
     *
     * @type {Creep}
     */
    creep: { },

    /**
     * Time of death.
     *
     * @see {@link https://docs.screeps.com/api/#Tombstone.deathTime}
     *
     * @type {number}
     */
    deathTime: 0,

    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link https://docs.screeps.com/api/#Tombstone.id}
     *
     * @type {string}
     */
    id: "",

    /**
     * A Store object that contains cargo of this structure.
     *
     * @see {@link https://docs.screeps.com/api/#Tombstone.store}
     *
     * @type {Store}
     */
    store: { },

    /**
     * The amount of game ticks before this tombstone decays.
     *
     * @see {@link https://docs.screeps.com/api/#Tombstone.ticksToDecay}
     *
     * @type {number}
     */
    ticksToDecay: 0,
};