/**
 * Spawns are your colony centers. You can transfer energy into it and create new creeps using createCreep() method.
 *
 * @class
 * @constructor
 */
Spawn = function() { };

Spawn.prototype =
{
    /**
     * The amount of energy containing in the spawn.
     *
     * @type {number}
     */
    energy: 0,

    /**
     * The total amount of energy the spawn can contain
     *
     * @type {number}
     */
    energyCapacity:0,

    /**
     * The current amount of hit points of the spawn.
     *
     * @type {number}
     */
    hits: 0,

    /**
     * The maximum amount of hit points of the spawn.
     *
     * @type {number}
     */
    hitsMax: 0,

    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @type {string}
     */
    id: "",

    /**
     * A shorthand to Memory.spawns[spawn.name].
     * You can use it for quick access the spawn’s specific memory data object.
     *
     * @type {object}
     */
    memory: null,

    /**
     * Whether it is your spawn or foe.
     *
     * @type {boolean}
     */
    my: true,

    /**
     * Spawn’s name. You choose the name upon creating a new spawn, and it cannot be changed later.
     * This name is a hash key to access the spawn via the Game.spawns object.
     *
     * @type {string}
     */
    name: "",

    /**
     * An object with the spawn’s owner info.
     *
     * @type {object}
     */
    owner: {
        /**
         * The name of the owner user.
         *
         * @type {string}
         */
        username: ""
    },

    /**
     * An object representing the position of this spawn in a room.
     *
     * @type {RoomPosition}
     */
    pos: null,

    /**
     * The link to the Room object of this spawn.
     *
     * @type {Room}
     */
    room: null,

    /**
     * Always equal to ‘spawn’.
     *
     * @type {string|STRUCTURE_SPAWN}
     */
    structureType: STRUCTURE_SPAWN,

    /**
     * If the spawn is in process of spawning a new creep,
     * this object will contain the new creep’s information, or null otherwise.
     *
     * @type {object|null}
     */
    spawning: false,

    /**
     * Check if a creep can be created.
     *
     * @param {string[]} body An array describing the new creep’s body.
     *                   Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH
     * @param {string} [name] The name of a new creep.
     *                        It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key).
     *                        If not defined, a random name will be generated.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NAME_EXISTS|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    canCreateCreep: function(body, name) { },

    /**
     * Start the creep spawning process.
     *
     * @param {string[]} body An array describing the new creep’s body.
     *                   Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH
     * @param {string} [name] The name of a new creep.
     *                        It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key).
     *                        If not defined, a random name will be generated.
     * @param {object} [memory] The memory of a new creep. If provided, it will be immediately stored into Memory.creeps[name].
     *
     * @return {string|number|ERR_NOT_OWNER|ERR_NAME_EXISTS|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    createCreep: function(body, name, memory) { },

    /**
     * Destroy this spawn immediately.
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    destroy: function() { },

    /**
     * Check whether this spawn can be used.
     * If the room controller level is not enough, then this method will return false,
     * and the structure will be highlighted with red in the game.
     *
     * @return {boolean}
     */
    isActive: function() { },
    /**
     * Toggle auto notification when the spawn is under attack.
     * The notification will be sent to your account email. Turned on by default.
     *
     * @param {boolean} enabled Whether to enable notification or disable.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_ARGS}
     */
    notifyWhenAttacked: function(enabled) { },

    /**
     * Increase the remaining time to live of the target creep.
     * The target should be at adjacent square.
     * The spawn should not be busy with the spawning process.
     * Each execution increases the creep's timer by amount of ticks according to this formula:
     *  floor(500/body_size).
     * Energy required for each execution is determined using this formula:
     *  ceil(creep_cost/3/body_size).
     *
     * @param {Creep} target The target creep object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    renewCreep: function(target) { },

    /**
     * Transfer the energy from the spawn to a creep.
     *
     * @param {Creep} target The creep object which energy should be transferred to.
     * @param {number} [amount] The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    transferEnergy: function(target, amount) { }
};