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
     * @return {number}
     */
    destroyTime: 0,

    /**
     * A unique object identificator. You can use {@link Game.getObjectById()} method to retrieve an object instance by its id.
     *
     * @see {@link https://docs.screeps.com/api/#Ruin.id}
     *
     * @return {string}
     */
    id: "",

    /**
     * A Store object that contains resources of this structure.
     *
     * @see {@link https://docs.screeps.com/api/#Ruin.store}
     *
     * @return {Store}
     */
    store: {},

    /**
     * An object containing basic data of the destroyed structure.
     *
     * @see {@link https://docs.screeps.com/api/#Ruin.structure}
     *
     * @return {Structure|OwnedStructure}
     */
    structure: {},

    /**
     * The amount of game ticks before this ruin decays.
     *
     * @see {@link https://docs.screeps.com/api/#Ruin.ticksToDecay}
     *
     * @return {number}
     */
    ticksToDecay: 0
};
