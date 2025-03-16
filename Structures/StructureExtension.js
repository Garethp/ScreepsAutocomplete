/**
 * Contains energy which can be spent on spawning bigger creeps.
 * Extensions can be placed anywhere in the room, any spawns will be able to use them regardless of distance.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link https://docs.screeps.com/api/#StructureExtension}
 */
StructureExtension = function() { };

StructureExtension.prototype =
{
    /**
     * @deprecated Since version 4.x, replaced by `.store[RESOURCE_ENERGY]`.
     *
     * The amount of energy containing in the extension.
     *
     * @see {@link https://docs.screeps.com/api/#StructureExtension.energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * @deprecated Since version 4.x, replaced by `.store.getCapacity(RESOURCE_ENERGY)`.
     *
     * The total amount of energy the extension can contain.
     *
     * @see {@link https://docs.screeps.com/api/#StructureExtension.energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * A Store object that contains cargo of this structure.
     *
     * @see {@link https://docs.screeps.com/api/#StructureExtension.store}
     *
     * @type {Store}
     */
    store: {}

};
