/**
 * Sends any resources to a Terminal in another room.
 * The destination Terminal can belong to any player.
 * Each transaction requires additional energy (regardless of the transfer resource type) that can be calculated using Game.market.calcTransactionCost method.
 * For example, sending 1000 mineral units from W0N0 to W10N5 will consume 742 energy units.
 * You can track your incoming and outgoing transactions using the Game.market object. 
 * Only one Terminal per room is allowed that can be addressed by Room.terminal property.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link https://docs.screeps.com/api/#StructureTerminal}
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
     * @see {@link https://docs.screeps.com/api/#StructureTerminal.storeCapacity}
     *
     * @type {number}
     */
    storeCapacity: 0,
    
    /**
    * The remaining amount of ticks while this terminal cannot be used to make StructureTerminal.send or Game.market.deal calls.
    *
    * @see {@link https://docs.screeps.com/api/#StructureTerminal.cooldown}
    *
    * @type {number}
    */
    cooldown: 0,

    /**
     * Sends resource to a Terminal in another room with the specified name.
     *
     * @see {@link https://docs.screeps.com/api/#StructureTerminal.send}
     *
     * @type {function}
     *
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} amount The amount of resources to be sent.
     * @param {string} destination The name of the target room. You don't have to gain visibility in this room.
     * @param {string|undefined|null} [description] The description of the transaction. It is visible to the recipient. The maximum length is 100 characters.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_ARGS|ERR_TIRED}
     */
    send: function(resourceType, amount, destination, description) { }

};
