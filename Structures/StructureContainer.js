/**
 * A small container that can be used to store resources.
 * This is a walkable structure.
 * All dropped resources automatically goes to the container at the same tile.
 *
 * @class
 * @extends {Structure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208435885-StructureContainer}
 */
StructureContainer = function() { };

StructureContainer.prototype =
{


    /**
     * A Store object that contains cargo of this structure.
     *
     * @see {@link https://docs.screeps.com/api/#StructureContainer.store}
     *
     * @type {Store}
     */
    store: {},

    /**
     * @deprecated Since version 4.x, replaced by `.store.getCapacity()`.
     *
     * The total amount of resources the structure can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208435885-StructureContainer#storeCapacity}
     *
     * @type {number}
     */
    storeCapacity: 0,

};
