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
     * A Store object that contains cargo of this structure.
     *
     * @see {@link https://docs.screeps.com/api/#StructureStorage.store}
     *
     * @type {Store}
     */
    store: {},

    /**
     * @deprecated Since version 4.x, replaced by `.store.getCapacity()`.
     *
     * The total amount of resources the storage can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/208436805-StructureStorage#storeCapacity}
     *
     * @type {number}
     */
    storeCapacity: 0,

};
