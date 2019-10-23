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
     * An object with the structure contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * Use _.sum(structure.store) to get the total amount of contents.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208435885-StructureContainer#store}
     *
     * @type {Array<string, number>}
     */
    store: {},

    /**
     * The total amount of resources the structure can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208435885-StructureContainer#storeCapacity}
     *
     * @type {number}
     */
    storeCapacity: 0,

};
