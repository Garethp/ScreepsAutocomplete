/**
 * Sends any resources to a Terminal in another room.
 * The destination Terminal can belong to any player.
 * If its storage is full, the resources are dropped on the ground.
 * Each transaction requires additional energy (regardless of the transfer resource type) that can be calculated using Game.market.calcTransactionCost method.
 * For example, sending 1000 mineral units from W0N0 to W10N5 will consume 742 energy units.
 * You can track your incoming and outgoing transactions and estimate range cost between rooms using the Game.market object.
 * Only one Terminal per room is allowed that can be addressed by Room.terminal property.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/207713399-StructureTerminal}
 */
StructureTerminal = function() { };

StructureTerminal.prototype =
{
    /**
     * A Store object that contains cargo of this structure.
     *
     * @see {@link https://docs.screeps.com/api/#StructureTerminal.store}
     *
     * @type {Store}
     */
    store: {},

    /**
     * @deprecated Since version 4.x, replaced by `.store.getCapacity()`.
     *
     * The total amount of resources the storage can contain.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207713399-StructureTerminal#storeCapacity}
     *
     * @type {number}
     */
    storeCapacity: 0,
    
    /**
    * The remaining amount of ticks while this terminal cannot be used to make StructureTerminal.send or Game.market.deal calls.
    *
    * @see {@link http://docs.screeps.com/api/#StructureTerminal.store}
    *
    * @type {number}
    */
    cooldown: 0,

    /**
     * Sends resource to a Terminal in another room with the specified name.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/207713399-StructureTerminal#send}
     *
     * @type {function}
     *
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} amount The amount of resources to be sent. The minimum amount is 100.
     * @param {string|undefined|null} [destination] The name of the target room. You don't have to gain visibility in this room.
     * @param {string|undefined|null} [description] The description of the transaction. It is visible to the recipient. The maximum length is 100 characters.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_ARGS}
     */
    send: function(resourceType, amount, destination, description) { },

};
