/**
 * Claim this structure to take control over the room.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Controller = function() { };

Structure_Controller.prototype =
{
    /**
     * Current controller level, from 0 to 8.
     *
     * @type {number}
     */
    level: 0,

    /**
     * The current progress of upgrading the controller to the next level.
     *
     * @type {number}
     */
    progress: 0,

    /**
     * The progress needed to reach the next level.
     *
     * @type {number}
     */
    progressTotal: 0,

    /**
     * An object with the controller reservation info if present.
     *
     * @type {object}
     */
    reservation: {
        /**
         * The name of a player who reserved this controller.
         *
         * @type {string}
         */
        username: "",

        /**
         * The amount of game ticks when the reservation will end.
         *
         * @type {number}
         */
        ticksToEnd: 0
    },

    /**
     * The amount of game ticks when this controller will lose one level.
     * This timer can be reset by using Creep.upgradeController.
     *
     * @type {number}
     */
    ticksToDowngrade: 0,

    /**
     * Make your claimed controller neutral again.
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    unclaim: function() { }
};

/**
 * Contains up to 200 energy units which can be spent on spawning bigger creeps.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Extension = function() { };

Structure_Extension.prototype =
{
    /**
     * The amount of energy containing in the extension.
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy the extension can contain.
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * Transfer the energy from the extension to a creep.
     *
     * @param {Creep} target The creep object which energy should be transferred to.
     * @param {number} [amount] The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    transferEnergy: function(target, amount) { }
};

/**
 * Non-player structure.
 * Spawns source keepers.
 *
 * @class
 * @constructor
 * @extends {Structure}
*/
Structure_Keeper_Lair = function() { };

Structure_Keeper_Lair.prototype =
{
    /**
     * Time to spawning of the next Source Keeper.
     *
     * @type {number}
     */
    ticksToSpawn: 0
};

/**
 * Remotely transfers up to 500 energy to another Link.
 * Cooldown period equals to 1 tick per tile of the linear distance to the target.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Link = function() { };

Structure_Link.prototype =
{
    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     *
     * @type {number}
     */
    cooldown: 0,

    /**
     * The amount of energy containing in the link.
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy the link can contain.
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * Transfer energy from the link to another link or a creep.
     * If the target is a creep, it has to be at adjacent square to the link.
     * If the target is a link, it can be at any location in the same room.
     * Remote transfer process implies 3% energy loss and cooldown delay depending on the distance.
     *
     * @param {Creep|Structure|Structure_Link} target The target object.
     * @param {number} [amount] The amount of energy to be transferred. If omitted, all the available energy is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS|ERR_TIRED|ERR_RCL_NOT_ENOUGH}
     */
    transferEnergy: function(target, amount) { }
};

/**
 * Provides visibility into a distant room from your script.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Observer = function() { };

Structure_Observer.prototype =
{
    /**
     * Provide visibility into a distant room from your script.
     * The target room object will be available on the next tick. The maximum range is 5 rooms.
     *
     * @param {string} roomName The name of the target room.
     *
     * @return {number|OK|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    observeRoom: function(roomName) { }
};

/**
 * Non-player structure.
 * Contains power resource.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Power_Bank = function() { };

Structure_Power_Bank.prototype =
{
    /**
     * The amount of power containing.
     *
     * @type {number}
     */
    power: 0,

    /**
     * The amount of game ticks when this structure will disappear.
     *
     * @type {number}
     */
    ticksToDecay: 0
};

/**
 * 	Spawns power creeps with special unique powers.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Power_Spawn = function() { };

Structure_Power_Spawn.prototype =
{
    /**
     * The amount of energy containing in this structure.
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy this structure can contain.
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * The amount of power containing in this structure.
     *
     * @type {number}
     */
    power: 0,

    /**
     * The total amount of power this structure can contain.
     *
     * @type {number}
     */
    powerCapacity: 0,

    /**
     * Create a power creep.
     *
     * @note This method is under development.
     *
     * @param {string} name The name of the power creep.
     */
    createPowerCreep: function(name) { },

    /**
     * Register power resource units into your account.
     * Registered power allows to develop power creeps skills.
     * Consumes 1 power resource unit and 50 energy resource units.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_RCL_NOT_ENOUGH}
     */
    processPower: function() { },

    /**
     * Transfer the energy from this structure to a creep.
     *
     * @param {Creep} target The creep object which energy should be transferred to.
     * @param {number} [amount] The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    transferEnergy: function(target, amount) { }
};

/**
 * Blocks movement of hostile creeps, and defends your creeps and structures.
 * Decays for 300 hits per 100 game ticks.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Rampart = function() { };

Structure_Rampart.prototype =
{
    /**
     * The amount of game ticks when this rampart will lose some hit points.
     *
     * @type {number}
     */
    ticksToDecay: 0
};

/**
 * Decreases movement cost to 1. Can be constructed in neutral rooms.
 * Decays for 100 hits per 1,000 ticks if built on plain land.
 * Decays for 500 hits per 1,000 ticks if built on swamp.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Road = function() { };

Structure_Road.prototype =
{
    /**
     * The amount of game ticks when this road will lose some hit points.
     *
     * @type {number}
     */
    ticksToDecay: 0
};

/**
 * 	Stores up to 1,000,000 resource units.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Storage = function() { };

Structure_Storage.prototype =
{
    /**
     * An object with the storage contents.
     *
     * @type {object}
     */
    store: {
        /**
         * The amount of energy resource units.
         *
         * @type {number}
         */
        energy: 0,

        /**
         * The amount of power resource units if present, undefined otherwise.
         *
         * @type {number|undefined}
         */
        power: 0
    },

    /**
     * The total amount of resources the storage can contain.
     *
     * @type {number}
     */
    storeCapacity: 0,

    /**
     * Transfer resource from this storage to a creep. The target has to be at adjacent square.
     *
     * @param {Creep} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} [amount] The amount of resources to be transferred. If omitted, all the available amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { },

    /**
     * An alias for storage.transfer(target, RESOURCE_ENERGY, amount).
     * @deprecated
     *
     * @param {Creep} target The target object.
     * @param {number} [amount] The amount of resources to be transferred. If omitted, all the available amount is used.
     */
    transferEnergy: function(target, amount) { }
};

/**
 * Remotely attacks or heals any creep in a room, or repairs a structure.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Tower = function() { };

Structure_Tower.prototype =
{
    /**
     * The amount of energy containing in this structure.
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy this structure can contain.
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * Remotely attack any creep in the room.
     * Consumes 10 energy units per tick.
     * Attack power depends on the distance to the target: from 600 hits at range 10 to 300 hits at range 40.
     *
     * @param {Creep} target The target creep.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    attack: function(target) { },

    /**
     * Remotely heal any creep in the room.
     * Consumes 10 energy units per tick.
     * Heal power depends on the distance to the target: from 400 hits at range 10 to 200 hits at range 40.
     *
     * @param {Creep} target The target creep.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    heal: function(target) { },

    /**
     * Remotely repair any structure in the room.
     * Consumes 10 energy units per tick.
     * Repair power depends on the distance to the target: from 600 hits at range 10 to 300 hits at range 40.
     *
     * @param {Spawn|Structure} target The target structure.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    repair: function(target) { }
};

/**
 * Blocks movement of all creeps.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Wall = function() { };

Structure_Wall.prototype =
{
    /**
     * The amount of game ticks when the wall will disappear
     *
     * @note only for automatically placed border walls at the start of the game.
     *
     * @type {number}
     */
    ticksToLive: 0
};

/**
 * Allows to harvest mineral deposits.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Extractor = function() { };

Structure_Extractor.prototype =
{

};

/**
 * Produces mineral compounds from base minerals and boosts creeps.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Lab = function() { };

Structure_Lab.prototype =
{
    /**
     * The amount of game ticks the lab has to wait until the next reaction is possible.
     *
     * @type {number}
     */
    cooldown: 0,

    /**
     * The amount of energy containing in the lab. Energy is used for boosting creeps.
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy the lab can contain.
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * The amount of mineral resources containing in the lab.
     *
     * @type {number}
     */
    mineralAmount: 0,

    /**
     * The type of minerals containing in the lab. Labs can contain only one mineral type at the same time.
     * One of the RESOURCE_* constants.
     *
     * @type {string}
     */
    mineralType : "",

    /**
     * The total amount of minerals the lab can contain.
     *
     * @type {number}
     */
    mineralCapacity: 0,

    /**
     * Boosts creep body part using the containing mineral compound.
     * The creep has to be at adjacent square to the lab.
     * Boosting one body part consumes 30 mineral units and 20 energy units.
     *
     * @param {Creep} creep The target creep.
     * @param {number} [bodyPartsCount] The number of body parts of the corresponding type to be boosted. Body parts are always counted left-to-right for TOUGH, and right-to-left for other types. If undefined, all the eligible body parts are boosted.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE}
     */
    boostCreep: function(creep, bodyPartsCount) { },

    /**
     * Produce mineral compounds using reagents from two another labs.
     * Labs have to be within 2 squares range. Each reaction produces 10 mineral units and has a 10 ticks cooldown period.
     * The same input labs can be used by many output labs.
     *
     * @param {Structure|Structure_Lab} lab1 The first source lab.
     * @param {Structure|Structure_Lab} lab2 The second source lab.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS|ERR_TIRED}
     */
    runReaction: function(lab1, lab2) { },

    /**
     * Transfer resource from this structure to a creep.
     * The target has to be at adjacent square.
     *
     * @param {Creep} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} [amount] The amount of resources to be transferred. If omitted, all the available amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { }
};

/**
 * Sends any resources to a Terminal in another room.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Terminal = function() { };

Structure_Terminal.prototype =
{
    /**
     * An object with the storage contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * Use _.sum(structure.store) to get the total amount of contents.
     *
     * @type {object}
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
     * If the target Terminal's storage is full, the resources are dropped on the ground.
     * Each transaction requires additional energy according to this formula: ceil(0.2 * amount * linearDistanceBetweenRooms).
     * For example, sending 100 resource units from W1N1 to W2N3 will consume 40 energy units.
     * You can track your incoming and outgoing transactions and estimate range cost between rooms using the Game.market object.
     *
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} amount The amount of resources to be sent. The minimum amount is 100.
     * @param {string} destination The name of the target room. You don't have to gain visibility in this room.
     * @param {string} [description] The description of the transaction. It is visible to the recipient. The maximum length is 100 characters.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_ARGS}
     */
    send: function(resourceType, amount, destination, description) { },

    /**
     * Transfer resource from this terminal to a creep.
     * The target has to be at adjacent square.
     *
     * @param {Creep} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} [amount] The amount of resources to be transferred. If omitted, all the available amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { }
};

/**
 * Contains up to 2,000 resource units.
 * Can be constructed in neutral rooms.
 * Decays for 5,000 hits per 100 ticks.
 *
 * @class
 * @constructor
 * @extends {Structure}
 */
Structure_Container = function() { };

Structure_Container.prototype =
{
    /**
     * An object with the structure contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * Use _.sum(structure.store) to get the total amount of contents.
     *
     * @type {object<string, number>}
     */
    store: {},

    /**
     * The total amount of resources the structure can contain.
     *
     * @type {number}
     */
    storeCapacity: 0,

    /**
     * Transfer resource from this structure to a creep.
     * The target has to be at adjacent square.
     *
     * @param {Creep} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} [amount] The amount of resources to be transferred. If omitted, all the available amount is used.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { }
};