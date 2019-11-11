/**
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link https://docs.screeps.com/power.html#Power-Creeps}
 */
PowerCreep = function() { };

PowerCreep.prototype =
{


    /**
     * A static method to create new Power Creep instance in your account. 
     * It will be added in an unspawned state, use spawn method to spawn it in the world.
     * You need one free Power Level in your account to perform this action.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.PowerCreep-create}
     *
     * @type {function}
     *
     * @param {string} The name of the new power creep.
     *
     * @param {string} The class of the new power creep, one of the POWER_CLASS constants.
     *
     * @return {number|OK|ERR_NAME_EXISTS|ERR_NOT_ENOUGH_RESOURCES}
     */
    create: function(name, className) { },
    
    /**
     * @deprecated Since version 4.x, replaced by `.store`.
     *
     * An object with the PowerCreep's cargo contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * Use _.sum(creep.carry) to get the total amount of contents.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.carry}
     *
     * @type {object<string, number>}
     */
    carry: {},

    /**
     * @deprecated Since version 4.x, replaced by `.store.getCapacity()`.
     *
     * The total amount of resources the PowerCreep can carry.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.carryCapacity}
     *
     * @type {number}
     */
    carryCapacity: 0,

    /**
     * The power creep's class, one of the POWER_CLASS constants.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.className}
     *
     * @type {string}
     */
    className: "",


    /**
     * A timestamp when this creep is marked to be permanently deleted from the account, or undefined otherwise.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.deleteTime}
     *
     * @type {number}
     */
    deleteTime: 0,

    /**
     * The current amount of hit points of the PowerCreep.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.hits}
     *
     * @type {number}
     */
    hits: 0,

    /**
     * The maximum amount of hit points of the PowerCreep.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.hitsMax}
     *
     * @type {number}
     */
    hitsMax: 0,

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.id}
     *
     * @type {string}
     */
    id: "",

    /**
     * The PowerCreep's level.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.level}
     *
     * @type {number}
     */
    level: 0,

    /**
     * A shorthand to Memory.creeps[creep.name].
     * You can use it for quick access the creep’s specific memory data object.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.memory}
     *
     * @type {*}
     */
    memory: {},

    /**
     * Whether it is your creep or foe.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.my}
     *
     * @type {boolean}
     */
    my: true,

    /**
     * Creep’s name.
     * You can choose the name while creating a new creep, and it cannot be changed later.
     * This name is a hash key to access the creep via the Game.creeps object.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.name}
     *
     * @type {string}
     */
    name: "",

    /**
     * The text message that the creep was saying at the last tick.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.saying}
     *
     * @type {string}
     */
    saying: "",

    /**
     * An object with the creep’s owner info
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.owner}
     *
     * @type {{username:string}}
     */
    owner:
    {
        username: ""
    },

    /**
     * A Store object that contains cargo of this creep.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.store}
     *
     * @type {Store}
     */
    store: {},

    /**
     * Available powers, an object with power ID as a key, and the following properties:
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.powers}
     *
     * @type {object}
     */
    powers:
    {
        level: "",
        cooldown: ""
    },

    /**
     * The name of the shard where the power creep is spawned, or undefined.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.shard}
     *
     * @type {string}
     */
    shard: "",

    /**
     * The timestamp when spawning or deleting this creep will become available. Undefined if the power creep is spawned in the world.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.spawnCooldownTime}
     *
     * @type {number}
     */
    spawnCooldownTime: 0,

    /**
     * TheThe remaining amount of game ticks after which the creep will die and become unspawned. Undefined if the creep is not spawned in the world.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.ticksToLive}
     *
     * @type {number}
     */
    ticksToLive: 0,

    /**
     * Cancel the order given during the current game tick.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.cancelOrder}
     *
     * @type {function}
     *
     * @param {string} methodName The name of a creep's method to be cancelled.
     *
     * @return {number|OK|ERR_NOT_FOUND}
     */
    cancelOrder: function(methodName) { },

    /**
     * Delete the power creep permanently from your account. It should NOT be spawned in the world. 
     * The creep is not deleted immediately, but a 24-hours delete timer is started instead (see deleteTime). 
     * You can cancel deletion by calling delete(true).
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.delete}
     *
     * @type {function}
     *
     * @param {boolean} Set this to true to cancel previously scheduled deletion.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY}
     */
    delete: function([cancel]) { },

    /**
     * Drop this resource on the ground.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.drop}
     *
     * @type {function}
     *
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} [amount] The amount of resource units to be dropped. If omitted, all the available carried amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES}
     */
    drop: function(resourceType, amount) { },

    /**
     * Enable powers usage in this room. The room controller should be at adjacent tile.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.enableRoom}
     *
     * @type {function}
     *
     * @param {StructureController} The room controller.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE}
     */
    enableRoom: function(controller) { },

    /**
     * Move the creep one square in the specified direction.
     * Requires the MOVE body part.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.move}
     *
     * @type {function}
     *
     * @param {number} direction One of the following constants: TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_TIRED|ERR_NO_BODYPART}
     */
    move: function(direction) { },

    /**
     * Move the creep using the specified predefined path.
     * Requires the MOVE body part.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.moveByPath}
     *
     * @type {function}
     *
     * @param {Array|string} path A path value as returned from Room.findPath or RoomPosition.findPathTo methods. Both array form and serialized string form are accepted.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_FOUND|ERR_INVALID_ARGS|ERR_TIRED|ERR_NO_BODYPART}
     */
    moveByPath: function(path) { },

    /**
     * Find the optimal path to the target within the same room and move to it.
     * A shorthand to consequent calls of pos.findPathTo() and move() methods.
     * If the target is in another room, then the corresponding exit will be used as a target.
     * Requires the MOVE body part.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.moveTo}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x X position of the target in the same room.
     * @param {number} [y] Y position of the target in the same room.
     * @param {object} [opts] An object containing additional options
     * @param {number} [opts.reusePath] This option enables reusing the path found along multiple game ticks. It allows to save CPU time, but can result in a slightly slower creep reaction behavior. The path is stored into the creep's memory to the _move property. The reusePath value defines the amount of ticks which the path should be reused for. The default value is 5. Increase the amount to save more CPU, decrease to make the movement more consistent. Set to 0 if you want to disable path reusing.
     * @param {boolean} [opts.serializeMemory] If reusePath is enabled and this option is set to true, the path will be stored in memory in the short serialized form using Room.serializePath. The default value is true.
     * @param {boolean} [opts.noPathFinding] If this option is set to true, moveTo method will return ERR_NOT_FOUND if there is no memorized path to reuse. This can significantly save CPU time in some cases. The default value is false.
     * @param {object} [opts.visualizePathStyle] Draw a line along the creep’s path using RoomVisual.poly. You can provide either an empty object or custom style parameters.
     * @param {string} [opts.visualizePathStyle.fill] Fill color in any web format
     * @param {string} [opts.visualizePathStyle.stroke] Stroke color in any web format
     * @param {string} [opts.visualizePathStyle.lineStyle] Either undefined (solid line), dashed, or dotted
     * @param {number} [opts.visualizePathStyle.strokeWidth] Stroke line width
     * @param {number} [opts.visualizePathStyle.opacity] Opacity value
     * @param {boolean} [opts.ignoreCreeps] Treat squares with creeps as walkable. Can be useful with too many moving creeps around or in some other cases. The default value is false.
     * @param {boolean} [opts.ignoreDestructibleStructures] Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when you need to move through a territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square, it automatically attacks the structure. The default value is false.
     * @param {boolean} [opts.ignoreRoads] Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the new PathFinder is enabled.
     * @param {function(string, CostMatrix)} [opts.costCallback] You can use this callback to modify a CostMatrix for any room during the search. The callback accepts two arguments, roomName and costMatrix. Use the costMatrix instance to make changes to the positions costs. If you return a new matrix from this callback, it will be used instead of the built-in cached one. This option is only used when the new PathFinder is enabled.
     * @param {Array} [opts.ignore] An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. This option cannot be used when the new PathFinder is enabled (use costCallback option instead).
     * @param {Array} [opts.avoid] An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search. This option cannot be used when the new PathFinder is enabled (use costCallback option instead).
     * @param {number} [opts.maxOps] The maximum limit of possible pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     * @param {number} [opts.heuristicWeight] Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying A* algorithm mechanics! The default value is 1.2.
     * @param {boolean} [opts.serialize] If true, the result path will be serialized using Room.serializePath. The default is false.
     * @param {number} [opts.maxRooms] The maximum allowed rooms to search. The default (and maximum) is 16. This is only used when the new PathFinder is enabled.
     * @param {number} [opts.range] Find a path to a position in specified linear range of target. The default is 0.
     * @param {number} [opts.plainCost] Cost for walking on plain positions. The default is 1.
     * @param {number} [opts.swampCost] Cost for walking on swamp positions. The default is 5.
     *
     * @alias moveTo(target, [opts])
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_TIRED|ERR_NO_BODYPART|ERR_INVALID_TARGET|ERR_NO_PATH}
     */
    moveTo: function(x, y, opts) { },

    /**
     * Toggle auto notification when the creep is under attack.
     * The notification will be sent to your account email.
     * Turned on by default.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.notifyWhenAttacked}
     *
     * @type {function}
     *
     * @param {boolean} enabled Whether to enable notification or disable.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_ARGS}
     */
    notifyWhenAttacked: function(enabled) { },

    /**
     * Pick up an item (a dropped piece of energy).
     * Requires the CARRY body part.
     * The target has to be at adjacent square to the creep or at the same square.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.pickup}
     *
     * @type {function}
     *
     * @param {Resource} target The target object to be picked up.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    pickup: function(target) { },

    /**
     * Rename the power creep. It must not be spawned in the world.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.rename}
     *
     * @type {function}
     *
     * @param {string} The new name of the power creep.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NAME_EXISTS|ERR_BUSY}
     */
    rename: function(name) { },

    /**
     * Instantly restore time to live to the maximum using a Power Spawn or a Power Bank nearby. It has to be at adjacent tile.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.renew}
     *
     * @type {function}
     *
     * @param {StructurePowerBank|StructurePowerSpawn} The target structure.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE}
     */
    renew: function(target) { },

    /**
     * Display a visual speech balloon above the creep with the specified message. The message will be
     * available for one tick. You can read the last message using the saying property.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.say}
     *
     * @type {function}
     *
     * @param {string} message The message to be displayed. Maximum length is 10 characters.
     * @param {boolean} [public] Set to true to allow other players to see this message. Default is false.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY}
     */
    say: function(message, public) { },
    
    /**
     * Sign a controller with an arbitrary text visible to all players. 
     * This text will appear in the room UI, in the world map, and can be accessed via the API. 
     * You can sign unowned and hostile controllers. The target has to be at adjacent square to the creep. 
     * Pass an empty string to remove the sign.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.spawn}
     *
     * @type {function}
     *
     * @param {StructurePowerSpawn} Your Power Spawn structure.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_TIRED|ERR_RCL_NOT_ENOUGH}
     */
    spawn: function(powerSpawn) { },

    /**
     * Kill the creep immediately.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.suicide}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY}
     */
    suicide: function() { },

    /**
     * Transfer resource from the creep to another object.
     * The target has to be at adjacent square to the creep.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.transfer}
     *
     * @type {function}
     *
     * @param {Creep|Spawn|Structure} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number|undefined|null} [amount] The amount of resources to be transferred. If omitted, all the available carried amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { },

    /**
     * Upgrade the creep, adding a new power ability to it or increasing level of the existing power. 
     * You need one free Power Level in your account to perform this action.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.upgrade}
     *
     * @type {function}
     *
     * @param {number} The power ability to upgrade, one of the PWR_* constants.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_FULL|ERR_INVALID_ARGS}
     */
    upgrade: function(power) { },

    /**
     * Apply one the creep's powers on the specified target. 
     * You can only use powers in rooms either without a controller, or with a power-enabled controller. 
     * Only one power can be used during the same tick, each usePower call will override the previous one. 
     * If the target has the same effect of a lower or equal level, it is overridden. 
     * If the existing effect level is higher, an error is returned.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.usePower}
     *
     * @type {function}
     *
     * @param {number} The power ability to use, one of the PWR_* constants.
     * @param {RoomObject} A target object in the room.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS|ERR_TIRED|ERR_NO_BODYPART}
     */
    usePower: function(power, [target]) { },

    /**
     * Withdraw resources from a structure.
     * The target has to be at adjacent square to the creep.
     * Multiple creeps can withdraw from the same structure in the same tick.
     * Your creeps can withdraw resources from hostile structures as well, in case if there is no hostile rampart on top of it.
     *
     * @see {@link https://docs.screeps.com/api/#PowerCreep.withdraw}
     *
     * @type {function}
     *
     * @param {Structure} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number|undefined|null} [amount] The amount of resources to be transferred. If omitted, all the available carried amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    withdraw: function(target, resourceType, amount) { }
};