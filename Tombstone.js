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
     * An object with the tombstone contents. Each object key is one of the RESOURCE_* constants, values are resources amounts. RESOURCE_ENERGY is always defined and equals to 0 when empty, other resources are undefined when empty. You can use lodash.sum to get the total amount of contents.
     *
     * @see {@link https://docs.screeps.com/api/#Tombstone.store}
     *
     * @type {object}
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