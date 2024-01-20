/**
 * An object that can contain resources in its cargo.
 * There are two types of stores in the game: general purpose stores and limited stores.
 *
 * - General purpose stores can contain any resource within its capacity (e.g. creeps, containers, storages, terminals).
 * - Limited stores can contain only a few types of resources needed for that particular object (e.g. spawns, extensions, labs, nukers).
 *
 * The Store prototype is the same for both types of stores, but they have different behavior depending on the resource argument in its methods.
 * You can get specific resources from the store by addressing them as object properties:
 * console.log(creep.store[RESOURCE_ENERGY]);
 *
 * @class
 *
 * @see {@link https://docs.screeps.com/api/#Store}
 */
Store = function() { };

Store.prototype =
{
    /**
     * Returns capacity of this store for the specified resource.
     * For a general purpose store, it returns total capacity if resource is undefined.
     *
     * @see {@link https://docs.screeps.com/api/#Store.getCapacity}
     *
     * @type {function}
     *
     * @param {string} [resource] The type of the resource. One of the RESOURCE_* constants.
     *
     * @return {number|null} Returns capacity number, or null in case of an invalid resource for this store type.
     */
    getCapacity: function(resource) { },

    /**
     * Returns free capacity for the store.
     * For a limited store, it returns the capacity available for the specified resource if resource is defined and valid for this store.
     *
     * @see {@link https://docs.screeps.com/api/#Store.getFreeCapacity}
     *
     * @type {function}
     *
     * @param {string} [resource] The type of the resource. One of the RESOURCE_* constants.
     *
     * @return {number|null} Returns available capacity number, or null in case of an invalid resource for this store type.
     */
    getFreeCapacity: function(resource) { },

    /**
     * Returns the capacity used by the specified resource.
     * For a general purpose store, it returns total used capacity if resource is undefined.
     *
     * @see {@link https://docs.screeps.com/api/#Store.getUsedCapacity}
     *
     * @type {function}
     *
     * @param {string} [resource] The type of the resource. One of the RESOURCE_* constants.
     *
     * @return {number|null} Returns used capacity number, or null in case of a not valid resource for this store type.
     */
    getUsedCapacity: function(resource) { }
};
