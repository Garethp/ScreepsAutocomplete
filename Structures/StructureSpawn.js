/**
 * Spawn is your colony center.
 * This structure can create, renew, and recycle creeps.
 * All your spawns are accessible through Game.spawns hash list.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn}
 */
StructureSpawn = function() { };

/**
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn}
 */
Spawn = StructureSpawn;
Spawn.prototype = StructureSpawn.prototype;

StructureSpawn.prototype =
{
    /**
     * @deprecated Since version 4.x, replaced by `.store[RESOURCE_ENERGY]`.
     *
     * The amount of energy containing in the spawn.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#energy}
     *
     * @type {number}
     */
    energy: 0,

    /**
     * @deprecated Since version 4.x, replaced by `.store.getCapacity(RESOURCE_ENERGY)`.
     *
     * The total amount of energy the spawn can contain
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#energyCapacity}
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * A shorthand to Memory.spawns[spawn.name].
     * You can use it for quick access the spawn’s specific memory data object.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#memory}
     *
     * @type {*}
     */
    memory: {},

    /**
     * Spawn’s name.
     * You choose the name upon creating a new spawn, and it cannot be changed later.
     * This name is a hash key to access the spawn via the Game.spawns object.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#name}
     *
     * @type {string}
     */
    name: "",

    /**
     * If the spawn is in process of spawning a new creep, this object will contain the new creep’s information, or null otherwise.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#spawning}
     *
     * @type {object|null}
     */
    spawning: null,

    /**
     * A Store object that contains cargo of this structure.
     *
     * @see {@link https://docs.screeps.com/api/#StructureSpawn.store}
     *
     * @type {Store}
     */
    store: {},

    /**
     * Check if a creep can be created.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#canCreateCreep}
     *
     * @type {function}
     *
     * @param {Array<string>} body An array describing the new creep’s body. Should contain 1 to 50 elements.
     * @param {string|undefined|null} [name] The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     *
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NAME_EXISTS|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    canCreateCreep: function(body, name) { },

    /**
     * Start the creep spawning process.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#createCreep}
     *
     * @type {function}
     *
     * @param {Array<string>} body An array describing the new creep’s body. Should contain 1 to 50 elements.
     * @param {string|undefined|null} [name] The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     * @param {*} [memory] The memory of a new creep. If provided, it will be immediately stored into Memory.creeps[name].
     *
     * @return {string|number|ERR_NOT_OWNER|ERR_NAME_EXISTS|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    createCreep: function(body, name, memory) { },
    
    /**
     * Start the creep spawning process. The required energy amount can be withdrawn from all spawns and extensions in the room.
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.spawnCreep}
     *
     * @type {function}
     *
     * @param {Array<string>} body An array describing the new creep’s body. Should contain 1 to 50 elements.
     * @param {string} name The name of a new creep. It must be a unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key).
     * @param {Object} [opts] An object with additional options for the spawning process.
     * @param {*} [opts.memory] Memory of the new creep. If provided, it will be immediately stored into Memory.creeps[name].
     * @param {Array<StructureSpawn|StructureExtension>} [opts.energyStructures] Array of spawns/extensions from which to draw energy for the spawning process. Structures will be used according to the array order.
     * @param {boolean} [opts.dryRun] If dryRun is true, the operation will only check if it is possible to create a creep.
     * @param {Array<number>} [opts.directions] Set desired directions where the creep should move when spawned. 
     *
     * @return {OK|number|ERR_NOT_OWNER|ERR_NAME_EXISTS|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    spawnCreep: function(body, name, memory) { },
    
    /**
     * Kill the creep and drop up to 100% of resources spent on its spawning and boosting depending on remaining life time.
     * The target should be at adjacent square.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#recycleCreep}
     *
     * @type {function}
     *
     * @param {Creep} target The target creep object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE}
     */
    recycleCreep: function(target) { },

    /**
     * Increase the remaining time to live of the target creep.
     * The target should be at adjacent square.
     * The spawn should not be busy with the spawning process.
     * Each execution increases the creep's timer by amount of ticks according to this formula: floor(500/body_size).
     * Energy required for each execution is determined using this formula: ceil(creep_cost/3/body_size).
     * Renewing a creep removes all of its boosts.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#renewCreep}
     *
     * @type {function}
     *
     * @param {Creep} target The target creep object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    renewCreep: function(target) { },

    /**
     * @deprecated Since version 2016-07-11, replaced by `Creep.withdraw()`.
     *
     * Transfer the energy from the spawn to a creep.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205990342-StructureSpawn#transferEnergy}
     *
     * @type {function}
     *
     * @param {Creep} target The creep object which energy should be transferred to.
     * @param {number|undefined|null} [amount] The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    transferEnergy: function(target, amount) { }
};

/**
 * Details of the creep being spawned currently that can be addressed by the StructureSpawn.spawning property.
 *
 * @class
 *
 * @see {@link http://docs.screeps.com/api/#StructureSpawn-Spawning}
 */
StructureSpawn.Spawning = function () { };

StructureSpawn.Spawning.prototype = {

    /**
     * An array with the spawn directions
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.Spawning.directions}
     *
     * @type {Array}
     */
    directions: [],

    /**
     * The name of a new creep.
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.Spawning.name}
     *
     * @type {string}
     */
    name: "",

    /**
     * Time in ticks needed in total to complete the spawning.
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.Spawning.needTime}
     *
     * @type {number}
     */
    needTime: 0,

    /**
     * Remaining time to go.
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.Spawning.remainingTime}
     *
     * @type {number}
     */
    remainingTime: 0,

    /**
     * A link to the spawn.
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.Spawning.spawn}
     *
     * @type {StructureSpawn}
     */
    spawn: {},

    /**
     * Cancel spawning immediately. Energy spent on spawning is not returned.
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.Spawning.cancel}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    cancel: function() { },

    /**
     * Set desired directions where the creep should move when spawned.
     *
     * @see {@link http://docs.screeps.com/api/#StructureSpawn.Spawning.setDirections}
     *
     * @type {function}
     *
     * @param {Array<number>} {directions} An array with the direction constants: TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_ARGS}
     */
    setDirections: function(directions) { }
};
