/**
 * Creeps are your units.
 * Creeps can move, harvest energy, construct structures, attack another creeps, and perform other actions.
 * Each creep consists of up to 50 body parts.
 *
 * @class
 * @constructor
 */
Creep = function() { };

Creep.prototype =
{
    /**
     * An array describing the creep’s body.
     * Each element contains the following properties:
     * boost {string|undefined} If the body part is boosted, this property specifies the mineral type which is used for boosting. One of the RESOURCE_* constants.
     * type {string|MOVE|WORK|CARRY|ATTACK|RANGED_ATTACK|HEAL|TOUGH|CLAIM} One of the body part types constants.
     * hits {number} The remaining amount of hit points of this body part.
     *
     * @type {object[]}
     */
    body: [],

    /**
     * An object with the creep's cargo.
     *
     * @type {object}
     */
    carry: {
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
     * The total amount of resources the creep can carry.
     *
     * @type {number}
     */
    carryCapacity: 0,

    /**
     * The movement fatigue indicator. If it is greater than zero, the creep cannot move.
     *
     * @type {number}
     */
    fatigue: 0,

    /**
     * The current amount of hit points of the creep.
     *
     * @type {number}
     */
    hits: 0,

    /**
     * The maximum amount of hit points of the creep.
     *
     * @type {number}
     */
    hitsMax: 0,

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @type {string}
     */
    id: "",

    /**
     * A shorthand to Memory.creeps[creep.name].
     * You can use it for quick access the creep’s specific memory data object.
     *
     * @note you can't access the memory property of the creep object which has been just scheduled to spawn
     *
     * @type {object}
     */
    memory: { },

    /**
     * Whether it is your creep or foe.
     *
     * @type {boolean}
     */
    my: true,

    /**
     * Creep’s name. You can choose the name while creating a new creep, and it cannot be changed later.
     *
     * @note This name is a hash key to access the creep via the Game.creeps object.
     *
     * @type {string}
     */
    name: "",

    /**
     * An object with the creep’s owner info.
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
     * An object representing the position of this creep in a room.
     *
     * @type {RoomPosition}
     */
    pos: null,

    /**
     * The link to the Room object of this creep.
     *
     * @type {Room}
     */
    room: null,

    /**
     * Whether this creep is still being spawned.
     *
     * @type {boolean}
     */
    spawning: false,

    /**
     * The remaining amount of game ticks after which the creep will die.
     *
     * @type {number}
     */
    ticksToLive: 0,

    /**
     * Attack another creep or structure in a short-ranged attack.
     * Needs the ATTACK body part. If the target is inside a rampart, then the rampart is attacked instead.
     * The target has to be at adjacent square to the creep.
     *
     * @param {Creep|Spawn|Structure} target The target object to be attacked.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    attack: function(target) { },

    /**
     * Build a structure at the target construction site using carried energy.
     * Needs WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     *
     * @param {ConstructionSite} target The target construction site to be built.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART|ERR_RCL_NOT_ENOUGH}
     */
    build: function(target) { },

    /**
     * Cancel the order given during the current game tick.
     *
     * @param {string} methodName The name of a creep's method to be cancelled.
     *
     * @return {number|OK|ERR_NOT_FOUND}
     */
    cancelOrder: function(methodName) { },

    /**
     * Claim a neutral controller under your control.
     * The target has to be at adjacent square to the creep.
     *
     * @param {Structure} target The target controller object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_GCL_NOT_ENOUGH|ERR_FULL}
     */
    claimController: function(target) { },

    /**
     * Dismantles any (even hostile) structure returning 50% of the energy spent on its repair.
     * Requires the WORK body part. If the creep has an empty CARRY body part,
     * the energy is put into it; otherwise it is dropped on the ground.
     * The target has to be at adjacent square to the creep.
     *
     * @param {Spawn|Structure} target The target structure.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    dismantle: function(target) { },

    /**
     * Drop this resource on the ground.
     *
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} [amount] The amount of resource units to be dropped. If omitted, all the available carried amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES}
     */
    drop: function(resourceType, amount) { },

    /**
     * An alias for creep.drop(RESOURCE_ENERGY, amount)
     * @deprecated
     *
     * @param {number} [amount] The amount of energy to be dropped.If omitted, all the available carried amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES}
     */
    dropEnergy: function(amount) { },

    /**
     * Get the quantity of live body parts of the given type.
     * Fully damaged parts do not count.
     *
     * @param {string|MOVE|WORK|CARRY|ATTACK|RANGED_ATTACK|HEAL|TOUGH} type A body part type
     *
     * @return {number} A number representing the quantity of body parts.
     */
    getActiveBodyparts: function(type) { },

    /**
     * Harvest energy from the source. Needs the WORK body part.
     * If the creep has an empty CARRY body part, the harvested energy is put into it;
     * otherwise it is dropped on the ground. The target has to be at an adjacent square to the creep.
     *
     * @param {Source} target The source object to be harvested.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    harvest: function(target) { },

    /**
     * Heal self or another creep.
     * It will restore the target creep’s damaged body parts function and increase the hits counter.
     * Needs the HEAL body part. The target has to be at adjacent square to the creep.
     *
     * @param {Creep} target
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    heal: function(target) { },

    /**
     * Move the creep one square in the specified direction.
     * Needs the MOVE body part.
     *
     * @param {number|TOP|TOP_RIGHT|RIGHT|BOTTOM_RIGHT|BOTTOM|BOTTOM_LEFT|LEFT|TOP_LEFT} direction
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_TIRED|ERR_NO_BODYPART}
     */
    move: function(direction) { },

    /**
     * Move the creep using the specified predefined path.
     * Needs the MOVE body part.
     *
     * @param {object[]|string} path A path value as returned from Room.findPath or RoomPosition.findPathTo methods. Both array form and serialized string form are accepted.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_FOUND|ERR_INVALID_ARGS|ERR_TIRED|ERR_NO_BODYPART}
     */
    moveByPath: function(path) { },

    /**
     * Find the optimal path to the target within the same room and move to it.
     * A shorthand to consequent calls of pos.findPathTo() and move() methods.
     * If the target is in another room, then the corresponding exit will be used as a target.
     * Needs the MOVE body part.
     *
     * @param {number} x X position of the target in the room.
     * @param {number} y Y position of the target in the room.
     * @param {object} [opts] An object containing pathfinding options flags (see Room.findPath for more info) or one of the following:
     * @param {number} [opts.reusePath] This option enables reusing the path found along multiple game ticks.
     *                                  It allows to save CPU time, but can result in a slightly slower creep reaction behavior.
     *                                  The path is stored into the creep's memory to the _move property.
     *                                  The reusePath value defines the amount of ticks which the path should be reused for.
     *                                  The default value is 5. Increase the amount to save more CPU, decrease to make the movement more consistent.
     *                                  Set to 0 if you want to disable path reusing.
     * @param {boolean} [opts.serializeMemory] If reusePath is enabled and this option is set to true,
     *                                         the path will be stored in memory in the short serialized form using Room.serializePath.
     *                                         The default value is true.
     * @param {boolean} [opts.noPathFinding] If this option is set to true, moveTo method will return ERR_NOT_FOUND if there is no memorized path to reuse.
     *                                       This can significantly save CPU time in some cases. The default value is false.
     *
     * @note Another variant of this function is moveTo(target, opts) where:
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_TIRED|ERR_NO_BODYPART|ERR_INVALID_TARGET|ERR_NO_PATH}
     */
    moveTo: function(x, y, opts) { },

    /**
     * Toggle auto notification when the creep is under attack.
     * The notification will be sent to your account email. Turned on by default.
     *
     * @param {boolean} enabled Whether to enable notification or disable.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_ARGS}
     */
    notifyWhenAttacked: function(enabled) { },

    /**
     * Pick up an item (a dropped piece of energy). Needs the CARRY body part.
     * The target has to be at adjacent square to the creep or at the same square.
     *
     * @param {Resource} target The target object to be picked up.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    pickup: function(target) { },

    /**
     * A ranged attack against another creep or structure.
     * Needs the RANGED_ATTACK body part. If the target is inside a rampart, the rampart is attacked instead.
     * The target has to be within 3 squares range of the creep.
     *
     * @param {Creep|Spawn|Structure} target The target object to be attacked.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    rangedAttack: function(target) { },

    /**
     * Heal another creep at a distance.
     * It will restore the target creep’s damaged body parts function and increase the hits counter.
     * Needs the HEAL body part. The target has to be within 3 squares range of the creep.
     *
     * @param {Creep} target The target creep object.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    rangedHeal: function(target) { },

    /**
     * A ranged attack against all hostile creeps or structures within 3 squares range.
     * Needs the RANGED_ATTACK body part. The attack power depends on the range to each target.
     * Friendly units are not affected.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NO_BODYPART}
     */
    rangedMassAttack:  function() { },

    /**
     * Repair a damaged structure using carried energy.
     * Needs the WORK and CARRY body parts.
     * The target has to be within 3 squares range of the creep.
     *
     * @param {Spawn|Structure} target The target structure to be repaired.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    repair: function(target) { },

    /**
     * Temporarily block a neutral controller from claiming by other players.
     * Each tick, this command spends 1 energy units and increases the counter of the period during which the controller is unavailable by 5 ticks.
     * The maximum reservation period to maintain is 5,000 ticks. Reserving controllers raises your Global Control Level in parallel.
     * Needs at least 40xWORK and 1xCARRY body parts. The target has to be at adjacent square to the creep.
     *
     * @param {Structure} target The target controller object to be reserved.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    reserveController: function(target) { },

    /**
     * Display a visual speech balloon above the creep with the specified message.
     * The message will disappear after a few seconds. Useful for debugging purposes.
     * Only the creep's owner can see the speech message.
     *
     * @param {string} message The message to be displayed. Maximum length is 10 characters.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY}
     */
    say: function(message) { },

    /**
     * Kill the creep immediately.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY}
     */
    suicide: function() { },

    /**
     * Transfer resource from the creep to another object. The target has to be at adjacent square to the creep.
     *
     * @param {Creep|Spawn|Structure} target The target object.
     * @param {string} resourceType One of the RESOURCE_* constants.
     * @param {number} [amount] The amount of resources to be transferred. If omitted, all the available carried amount is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
     */
    transfer: function(target, resourceType, amount) { },

    /**
     * An alias for creep.transfer(target, RESOURCE_ENERGY, amount).
     * This method is deprecated.
     * @deprecated
     *
     * @param {Creep|Spawn|Structure} target target The target object.
     * @param {number} [amount] The amount of energy to be transferred. If omitted, all the available carried energy is used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    transferEnergy: function(target, amount) { },

    /**
     * Upgrade your controller to the next level using carried energy.
     * Upgrading controllers raises your Global Control Level in parallel.
     * Requires WORK and CARRY body parts.
     * The target has to be at adjacent square to the creep.
     * A fully upgraded level 8 controller can't be upgraded with the power over 15 energy units per tick regardless of creeps power.
     * The cumulative effect of all the creeps performing upgradeController in the current tick is taken into account.
     * The effect can be boosted by ghodium mineral compounds (including limit increase).
     *
     * @param {Structure} target The target controller object to be upgraded.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
     */
    upgradeController: function(target) { }
};