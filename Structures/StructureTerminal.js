/**
 * Sends any resources to a Terminal in another room.
 * The destination Terminal can belong to any player.
 * If its storage is full, the resources are dropped on the ground.
 * Each transaction requires additional energy (regardless of the transfer resource type) according to this formula: ceil(0.1 * amount * linearDistanceBetweenRooms).
 * For example, sending 100 mineral units from W1N1 to W2N3 will consume 20 energy units.
 * You can track your incoming and outgoing transactions and estimate range cost between rooms using the Game.market object.
 * Only one Terminal per room is allowed that can be addressed by Room.terminal property.
 *
 * @class
 * @extends {OwnedStructure}
 */
StructureTerminal = function() { };

StructureTerminal.prototype =
{
    /**
     * An object with the storage contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * Use _.sum(structure.store) to get the total amount of contents.
     *
     * @type {Array<string, number>}
     */
    store: {},

    /**
     * The total amount of resources the storage can contain.
     *
     * @type {number}
     */
    storeCapacity: 0,

    /**
     * Sends resource to a Terminal in another room with the specified name.
     *
     * @type {function}
     *
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} amount The amount of resources to be sent. The minimum amount is 100.
     * @param {string} [destination] The name of the target room. You don't have to gain visibility in this room.
     * @param {string} [description] The description of the transaction. It is visible to the recipient. The maximum length is 100 characters.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_ARGS}
     */
    send: function(resourceType, amount, destination, description) { },

    /**
     * Transfer resource from this terminal to a creep.
     * The target has to be at adjacent square.
     * You can transfer resources to your creeps from hostile structures as well.
     *
     * @type {function}
     *
     * @param {Creep} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} [amount] The amount of resources to be transferred. If omitted, all the available amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { }
};
