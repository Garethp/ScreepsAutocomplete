/**
 * A structure that can store huge amount of resource units.
 * Only one structure per room is allowed that can be addressed by Room.storage property.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208436805-StructureStorage}
 */
StructureStorage = function() { };

StructureStorage.prototype =
{
    /**
     * An object with the storage contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * Use _.sum(structure.store) to get the total amount of contents.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436805-StructureStorage#store}
     *
     * @type {Array<string, number>}
     */
    store: {},

    /**
     * The total amount of resources the storage can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436805-StructureStorage#storeCapacity}
     *
     * @type {number}
     */
    storeCapacity: 0,

};
