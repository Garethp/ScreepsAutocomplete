/**
 * A destroyed structure. This is a walkable object.
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link https://docs.screeps.com/api/#Ruin}
 */
Ruin = function () {
};

Ruin.prototype = {

    /**
     * The time when the structure has been destroyed.
     *
     * @see {@link https://docs.screeps.com/api/#Ruin.destroyTime}
     *
     * @type {number}
     */
    destroyTime: 0,

    /**
     * A unique object identificator. You can use {@link Game.getObjectById()} method to retrieve an object instance by its id.
     *
     * @see {@link https://docs.screeps.com/api/#Ruin.id}
     *
     * @type {string}
     */
    id: "",

    /**
     * A Store object that contains resources of this structure.
     *
     * @see {@link https://docs.screeps.com/api/#Ruin.store}
     *
     * @type {Store}
     */
    store: {},

    /**
     * An object containing basic data of the destroyed structure.
     *
     * @see {@link https://docs.screeps.com/api/#Ruin.structure}
     *
     * @type {Structure|OwnedStructure}
     */
    structure: {},

    /**
     * The amount of game ticks before this ruin decays.
     *
     * @see {@link https://docs.screeps.com/api/#Ruin.ticksToDecay}
     *
     * @type {number}
     */
    ticksToDecay: 0
};
