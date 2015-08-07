/**
 *
 * @class
 * @constructor
 * @extends Structure
 */
Structure_Extension = function() { };

/**
 * @type {{}}
 */
Structure_Extension.prototype =
{
    /**
     * Will always be global.STRUCTURE_EXTENSION
     *
     * @type {String}
     */
    structureType: global.STRUCTURE_EXTENSION,

    /**
     * The amount of energy containing in the extension.
     *
     * @type {Number}
     */
    energy: 0,

    /**
     * The total amount of energy the extension can contain.
     *
     * @type {Number}
     */
    energyCapacity: 0,

    /**
     * Transfer the energy from the extension to a creep
     *
     * @param {Creep} target The creep object which energy should be transferred to.
     * @param {Number} [amount] The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     *
     * @return {Number}
     */
    transferEnergy: function(target, amount) { }
};

/**
 * @class
 * @constructor
 * @extends Structure
 */
Structure_Link = function() { };

Structure_Link.prototype =
{
    /**
     * Will always be global.STRUCTURE_LINK
     *
     * @type {String}
     */
    structureType: global.STRUCTURE_LINK,

    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     *
     * @type {Number}
     */
    cooldown: 0,

    /**
     * The amount of energy containing in the link.
     *
     * @type {Number}
     */
    energy: 0,

    /**
     * The total amount of energy the link can contain.
     *
     * @type {Number}
     */
    energyCapacity: 0,

    /**
     * Transfer energy from the link to another link or a creep. If the target is a creep, it has to be at adjacent square to the link.
     * If the target is a link, it can be at any location in the same room. Remote transfer process implies 3% energy loss and cooldown delay depending on the distance.
     *
     * @param {Creep|Structure_Link} target The target object.
     * @param {Number} [amount] The amount of energy to be transferred. If omitted, all the available energy is used.
     *
     * @return {Number}
     */
    transferEnergy: function(target, amount) { }
};

/**
 * @class
 * @constructor
 * @extends Structure
 */
Structure_Keeper_Lair = function() { };

Structure_Keeper_Lair.prototype =
{
    /**
     * Will always be global.STRUCTURE_KEEPER_LAIR
     *
     * @type {String}
     */
    structureType: global.STRUCTURE_KEEPER_LAIR,

    /**
     * Time to spawning of the next Source Keeper.
     *
     * @type {Number}
     */
    ticksToSpawn: 0
};

/**
 * @class
 * @constructor
 * @extends Structure
 */
Structure_Controller = function() { };

Structure_Controller.prototype =
{
    /**
     * Will always be global.STRUCTURE_CONTROLLER
     *
     * @type {String}
     */
    structureType: global.STRUCTURE_CONTROLLER,

    /**
     * Current controller level, from 0 to 8.
     *
     * @type {Number}
     */
    level: 0,

    /**
     * The current progress of upgrading the controller to the next level.
     *
     * @type {Number}
     */
    progress: 0,

    /**
     * The progress needed to reach the next level.
     *
     * @type {Number}
     */
    progressTotal: 0,

    /**
     * The amount of game ticks when this controller will lose one level due to absense of owner's spawns in the room.
     *
     * @type {Number}
     */
    ticksToDowngrade: 0
};

/**
 * @class
 * @constructor
 * @extends Structure
 */
Structure_Rampart = function() {};

Structure_Rampart.prototype =
{
    /**
     * Will always be global.STRUCTURE_RAMPART
     *
     * @type {String}
     */
    structureType: global.STRUCTURE_RAMPART,

    /**
     * The amount of game ticks when this rampart will lose some hit points.
     *
     * @type {Number}
     */
    ticksToDecay: 0
};

/**
 * @class
 * @constructor
 * @extends Structure
 */
Structure_Road = function() { };

Structure_Road.prototype =
{
    /**
     * Will always be global.STRUCTURE_ROAD
     *
     * @type {String}
     */
    structureType: global.STRUCTURE_ROAD,

    /**
     * The amount of game ticks when this road will lose some hit points.
     *
     * @type {Number}
     */
    ticksToDecay: 0
}

/**
 * @class
 * @constructor
 * @extends Structure
 */
Structure_Wall = function() { };

Structure_Wall.prototype =
{
    /**
     * Will always be global.STRUCTURE_WALL
     *
     * @type {String}
     */
    structureType: global.STRUCTURE_WALL,

    /**
     * The amount of game ticks when the wall will disappear (only for automatically placed border walls at the start of the game).
     *
     * @type {Number}
     */
    ticksToLive: 0
};

/**
 * @class
 * @constructor
 * @extends Structure
 */
Structure_Storage = function() { };

Structure_Storage.prototype =
{
    /**
     * Will always be global.STRUCTURE_STORAGE
     *
     * @type {String}
     */
    structureType: global.STRUCTURE_STORAGE,

    /**
     * An object with the storage contents.
     *
     * @type {Object}
     */
    store: {
        /**
         * The current amount of energy in the storage.
         *
         * @type {Number}
         */
        energy: 0
    },

    /**
     * The total amount of resources the storage can contain.
     *
     * @type {Number}
     */
    storeCapacity: 0,

    /**
     * Transfer the energy from the storage to a creep.
     *
     * @param {Creep} target The creep object which energy should be transferred to.
     * @param {Number} [amount] The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     *
     * @return {Number}
     */
    transferEnergy: function(target, amount) { }
};