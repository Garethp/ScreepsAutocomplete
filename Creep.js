/**
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link https://docs.screeps.com/api/#Creep}
 */
Creep = function() { };

Creep.prototype =
{
    /**
     * An array describing the creep’s body.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.body}
     *
     * @type {Array<{boost:string, type:string, hits:number}>}
     *
     * @note boost: If the body part is boosted, this property specifies the mineral type which is used for boosting. One of the RESOURCE_* constants.
     * @note type: One of the body part types constants.
     * @note hits: The remaining amount of hit points of this body part.
     *
     */
    body: [],

    /**
     * @deprecated Since version 4.x, replaced by `.store`.
     *
     * An object with the creep's cargo contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * Use _.sum(creep.carry) to get the total amount of contents.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.carry}
     *
     * @type {object<string, number>}
     */
    carry: {},

    /**
     * @deprecated Since version 4.x, replaced by `.store.getCapacity()`.
     *
     * The total amount of resources the creep can carry.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.carryCapacity}
     *
     * @type {number}
     */
    carryCapacity: 0,

    /**
     * The movement fatigue indicator. If it is greater than zero, the creep cannot move.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.fatigue}
     *
     * @type {number}
     */
    fatigue: 0,

    /**
     * The current amount of hit points of the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.hits}
     *
     * @type {number}
     */
    hits: 0,

    /**
     * The maximum amount of hit points of the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.hitsMax}
     *
     * @type {number}
     */
    hitsMax: 0,

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.id}
     *
     * @type {string}
     */
    id: "",

    /**
     * A shorthand to Memory.creeps[creep.name].
     * You can use it for quick access the creep’s specific memory data object.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.memory}
     *
     * @type {*}
     */
    memory: {},

    /**
     * Whether it is your creep or foe.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.my}
     *
     * @type {boolean}
     */
    my: true,

    /**
     * Creep’s name.
     * You can choose the name while creating a new creep, and it cannot be changed later.
     * This name is a hash key to access the creep via the Game.creeps object.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.name}
     *
     * @type {string}
     */
    name: "",

    /**
     * The text message that the creep was saying at the last tick.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.saying}
     *
     * @type {string}
     */
    saying: "",

    /**
     * An object with the creep’s owner info
     *
     * @see {@link https://docs.screeps.com/api/#Creep.owner}
     *
     * @type {{username:string}}
     */
    owner:
    {
        username: ""
    },

    /**
     * Whether this creep is still being spawned.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.spawning}
     *
     * @type {boolean}
     */
    spawning: false,

    /**
     * A Store object that contains cargo of this creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.store}
     *
     * @type {Store}
     */
    store: {},

    /**
     * The remaining amount of game ticks after which the creep will die.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.ticksToLive}
     *
     * @type {number}
     */
    ticksToLive: 0,

    /**
     * Attack another creep, power creep, or structure in a short-ranged attack.
     * Requires the ATTACK body part.
     * If the target is inside a rampart, then the rampart is attacked instead.
     * The target has to be at adjacent square to the creep.
     * If the target is a creep with ATTACK body parts and is not inside a rampart, it will automatically hit back at the attacker.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.attack}
     *
     * @type {function}
     *
     * @param {Creep|PowerCreep|Structure} target The target object to be attacked.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    attack: function(target) { },

    /**
     * Decreases the controller's downgrade timer by 300 ticks per every CLAIM body part, or reservation timer by 1 tick per every CLAIM body part.
     * If the controller under attack is owned, it cannot be upgraded or attacked again for the next 1,000 ticks.
     * The target has to be at adjacent square to the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.attackController}
     *
     * @type {function}
     *
     * @param {StructureController} target The target controller object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_TIRED|ERR_NO_BODYPART}
     */
    attackController: function(target) { },

    /**
     * Build a structure at the target construction site using carried energy.
     * Requires WORK and CARRY body parts.
     * The target has to be within 3 squares range of the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.build}
     *
     * @type {function}
     *
     * @param {ConstructionSite} target The target construction site to be built.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    build: function(target) { },

    /**
     * Cancel the order given during the current game tick.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.cancelOrder}
     *
     * @type {function}
     *
     * @param {string} methodName The name of a creep's method to be cancelled.
     *
     * @return {number|OK|ERR_NOT_FOUND}
     */
    cancelOrder: function(methodName) { },

    /**
     * Claims a neutral controller under your control.
     * Requires the CLAIM body part.
     * The target has to be at adjacent square to the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.claimController}
     *
     * @type {function}
     *
     * @param {StructureController} target The target controller object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_NO_BODYPART|ERR_GCL_NOT_ENOUGH}
     */
    claimController: function(target) { },

    /**
     * Dismantles any structure that can be constructed (even hostile) returning 50% of the energy spent on its repair.
     * Requires the WORK body part.
     * If the creep has an empty CARRY body part, the energy is put into it; otherwise it is dropped on the ground.
     * The target has to be at adjacent square to the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.dismantle}
     *
     * @type {function}
     *
     * @param {Structure} target The target structure.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    dismantle: function(target) { },

    /**
     * Drop this resource on the ground.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.drop}
     *
     * @type {function}
     *
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} [amount] The amount of resource units to be dropped. If omitted, all the available carried amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_ARGS}
     */
    drop: function(resourceType, amount) { },

    /**
     * Add one more available safe mode activation to a room controller.
     * The creep has to be at adjacent square to the target room controller and have 1000 ghodium resource.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.generateSafeMode}
     *
     * @type {function}
     *
     * @param {StructureController} target The target room controller.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE}
     */
    generateSafeMode: function(target) { },
    
    /**
     * Get the quantity of live body parts of the given type.
     * Fully damaged parts do not count.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.getActiveBodyparts}
     *
     * @type {function}
     *
     * @param {string} type A body part type, one of the following body part constants: MOVE, WORK, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH
     *
     * @return {number} A number representing the quantity of body parts.
     */
    getActiveBodyparts: function(type) { },

    /**
     * Harvest energy from the source or resources from minerals and deposits.
     * Requires the WORK body part.
     * If the creep has an empty CARRY body part, the harvested resource is put into it; otherwise it is dropped on the ground.
     * The target has to be at an adjacent square to the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.harvest}
     *
     * @type {function}
     *
     * @param {Source|Mineral|Deposit} target The object to be harvested.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_FOUND|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_TIRED|ERR_NO_BODYPART}
     */
    harvest: function(target) { },

    /**
     * Heal self or another creep.
     * It will restore the target creep’s damaged body parts function and increase the hits counter.
     * Requires the HEAL body part.
     * The target has to be at adjacent square to the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.heal}
     *
     * @type {function}
     *
     * @param {Creep|PowerCreep} target The target creep object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    heal: function(target) { },

    /**
     * Move the creep one square in the specified direction.
     * Requires the MOVE body part, or another creep nearby pulling the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.move}
     *
     * @type {function}
     *
     * @param {Creep|number} direction A creep nearby, or one of the following constants: TOP, TOP_RIGHT, RIGHT, BOTTOM_RIGHT, BOTTOM, BOTTOM_LEFT, LEFT, TOP_LEFT
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS|ERR_TIRED|ERR_NO_BODYPART}
     */
    move: function(direction) { },

    /**
     * Move the creep using the specified predefined path.
     * Requires the MOVE body part.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.moveByPath}
     *
     * @type {function}
     *
     * @param {Array|string} path A path value as returned from Room.findPath, RoomPosition.findPathTo, or PathFinder.search methods. Both array form and serialized string form are accepted.
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
     * @see {@link https://docs.screeps.com/api/#Creep.moveTo}
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
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_TIRED|ERR_NO_BODYPART|ERR_INVALID_TARGET|ERR_NO_PATH|ERR_NOT_FOUND}
     */
    moveTo: function(x, y, opts) { },

    /**
     * Toggle auto notification when the creep is under attack.
     * The notification will be sent to your account email.
     * Turned on by default.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.notifyWhenAttacked}
     *
     * @type {function}
     *
     * @param {boolean} enabled Whether to enable notification or disable.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_ARGS}
     */
    notifyWhenAttacked: function(enabled) { },

    /**
     * Pick up an item (a dropped piece of energy).
     * Requires the CARRY body part.
     * The target has to be at adjacent square to the creep or at the same square.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.pickup}
     *
     * @type {function}
     *
     * @param {Resource} target The target object to be picked up.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    pickup: function(target) { },

    /**
     * Help another creep to follow this creep.
     * The fatigue generated for the target's move will be added to the creep instead of the target. Requires the MOVE body part.
     * The target has to be at adjacent square to the creep. The creep must move elsewhere, and the target must move towards the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.pull}
     *
     * @type {function}
     *
     * @param {Creep} target The target creep.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE}
     */
    pull: function(target) { },

    /**
     * A ranged attack against another creep or structure.
     * Requires the RANGED_ATTACK body part.
     * If the target is inside a rampart, the rampart is attacked instead.
     * The target has to be within 3 squares range of the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.rangedAttack}
     *
     * @type {function}
     *
     * @param {Creep|PowerCreep|Structure} target The target object to be attacked.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    rangedAttack: function(target) { },

    /**
     * Heal another creep at a distance.
     * It will restore the target creep’s damaged body parts function and increase the hits counter.
     * Requires the HEAL body part.
     * The target has to be within 3 squares range of the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.rangedHeal}
     *
     * @type {function}
     *
     * @param {Creep|PowerCreep} target The target creep object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    rangedHeal: function(target) { },

    /**
     * A ranged attack against all hostile creeps or structures within 3 squares range.
     * Requires the RANGED_ATTACK body part.
     * The attack power depends on the range to each target.
     * Friendly units are not affected.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.rangedMassAttack}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NO_BODYPART}
     */
    rangedMassAttack: function() { },

    /**
     * Repair a damaged structure using carried energy.
     * Requires the WORK and CARRY body parts.
     * The target has to be within 3 squares range of the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.repair}
     *
     * @type {function}
     *
     * @param {Structure} target The target structure to be repaired.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    repair: function(target) { },

    /**
     * Temporarily block a neutral controller from claiming by other players and restore energy sources to their full capacity.
     * Each tick, this command increases the counter of the period during which the controller is unavailable by 1 tick per each CLAIM body part.
     * The maximum reservation period to maintain is 5,000 ticks.
     * The target has to be at adjacent square to the creep.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.reserveController}
     *
     * @type {function}
     *
     * @param {StructureController} target The target controller object to be reserved.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    reserveController: function(target) { },

    /**
     * Display a visual speech balloon above the creep with the specified message. The message will be
     * available for one tick. You can read the last message using the saying property.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.say}
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
     * @see {@link https://docs.screeps.com/api/#Creep.signController}
     *
     * @type {function}
     *
     * @param {StructureController} target The target controller object to be signed.
     * @param {string} text The sign text. The string is cut off after 100 characters.
     *
     * @return {number|OK|ERR_INVALID_TARGET|ERR_BUSY|ERR_NOT_IN_RANGE}
     */
    signController: function(target, text) { },

    /**
     * Kill the creep immediately.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.suicide}
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
     * @see {@link https://docs.screeps.com/api/#Creep.transfer}
     *
     * @type {function}
     *
     * @param {Creep|PowerCreep|Structure} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number|undefined|null} [amount] The amount of resources to be transferred. If omitted, all the available carried amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { },

    /**
     * Upgrade your controller to the next level using carried energy.
     * Upgrading controllers raises your Global Control Level in parallel.
     * Requires WORK and CARRY body parts.
     * The target has to be within 3 squares range of the creep.
     * A fully upgraded level 8 controller can't be upgraded over 15 energy units per tick regardless of creeps abilities.
     * The cumulative effect of all the creeps performing upgradeController in the current tick is taken into account.
     * This limit can be increased by using ghodium mineral boost.
     * Upgrading the controller raises its ticksToDowngrade timer by 100. The timer must be full in order for controller to be levelled up.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.upgradeController}
     *
     * @type {function}
     *
     * @param {StructureController} target The target controller object to be upgraded.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    upgradeController: function(target) { },

    /**
     * Withdraw resources from a structure or tombstone.
     * The target has to be at adjacent square to the creep.
     * Multiple creeps can withdraw from the same object in the same tick.
     * Your creeps can withdraw resources from hostile structures/tombstones as well, in case if there is no hostile rampart on top of it.
     *
     * @see {@link https://docs.screeps.com/api/#Creep.withdraw}
     *
     * @type {function}
     *
     * @param {Structure|Tombstone|Ruin} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number|undefined|null} [amount] The amount of resources to be transferred. If omitted, all the available amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    withdraw: function(target, resourceType, amount) { }
};
