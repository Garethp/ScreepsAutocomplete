/**
 * Creeps are your units. Creeps can move, harvest energy, construct structures, attack another creeps, and perform other actions. Each creep consists of the following body parts:
 *  - MOVE Cost: 50 Effect: Moves a creep 1 square per tick per 1 other body part
 *  - WORK Cost: 100 Effect: Harvests 2 energy units from a source per tick; constructs a structure for 5 energy per tick; repairs a structure for 100 hits per tick.
 *  - CARRY Cost: 50 Effect: Can contain up to 50 energy units.
 *  - ATTACK Cost: 80 Effect: Attacks another creep/structure with 30 hits per tick in a short-ranged attack.
 *  - RANGED_ATTACK: Cost: 150 Effect: Attacks another creep/structure with 10 hits per tick in a long-ranged attack up to 3 squares long.
 *  - HEAL: Cost: 200 Effect: Heals another creep restoring 12 hits per tick.
 *  - TOUGH: Cost: 10 Effect: No effect
 *
 * @class
 * @constructor
 */
Creep = function () {

};

Creep.prototype = {
	/**
	 * A unique object identificator.
	 *
	 * @type string
	 */
	id: null,

	/**
	 * Creep’s name. You can choose the name while creating a new creep, and it cannot be changed later. This name is a
	 * hash key to access the creep via the Game.creeps object.
	 *
	 * @type string
	 */
	name: null,

	/**
	 * An object with the creep’s owner info containing the following properties:
	 *  - username
	 *
	 * @type Owner
	 */
	owner: null,

	/**
	 * The link to the Room object of this creep.
	 *
	 * @type Room
	 */
	room: null,

	/**
	 * An object representing the position of this creep in a room.
	 *
	 * @type RoomPosition
	 */
	pos: null,

	/**
	 * Shorthand to Memory.creeps[creep.name]. You can use it for quick access the creep’s specific memory data object.
	 * Note: you can't access the memory property of the creep object which has been just scheduled to spawn.
	 */
	memory: null,

	/**
	 * Whether it is your creep or foe.
	 *
	 * @type boolean
	 */
	my: true,

	/**
	 * Whether this creep is still being spawned.
	 *
	 * @type boolean
	 */
	spawning: true,

	/**
	 * An array describing the creep’s body. Each element contains the following properties:
	 *  - type
	 *  - hits
	 *
	 * @type Object[]
	 */
	body: [ ],

	/**
	 * An object with the creep's cargo contents
	 *
	 * @type Object
	 */
	carry: {
		/**
		 * The current amount of energy the creep is carrying.
		 *
		 * @type number
		 */
		energy: 0
	},

	/**
	 * The total amount of items the creep can carry.
	 *
	 * @type number
	 */
	carryCapacity: 0,

	/**
	 * The current amount of hit points of the creep.
	 *
	 * @type number
	 */
	hits: 0,

	/**
	 * The maximum amount of hit points of the creep.
	 *
	 * @type number
	 */
	hitsMax: 0,

	/**
	 * The remaining amount of game ticks after which the creep will die.
	 *
	 * @type number
	 */
	ticksToLive: 0,

	/**
	 * The movement fatigue indicator. If it is greater than zero, the creep cannot move.
	 *
	 * @type number
	 */
	fatigue: 0,

	/**
	 * Attack another creep or structure in a short-ranged attack. Needs the ATTACK body part. If the target is inside a
	 * rampart, then the rampart is attacked instead.
	 *
	 * @param target {Creep|Spawn|Structure} The target object to be attacked
	 * @return {number}
	 */
	attack: function (target) {
	},

	/**
	 * Build a structure at the target construction site using carried energy. Needs WORK and CARRY body parts.
	 *
	 * @param target {ConstructionSite}
	 * @return {number}
	 */
	build: function (target) {
	},

	/**
	 * Cancel the order given during the current game tick.
	 * @param methodName {string} The name of a creep's method to be cancelled.
	 * @return {number}
	 */
	cancelOrder: function (methodName) {
	},

	/**
	 * Claim a neutral controller under your control. The target has to be at adjacent square to the creep
	 * @param target {Structure} The target controller object.
	 * @return {number}
	 */
	claimController: function (target) {
	},

	/**
	 * Drop a piece of energy on the ground.
	 * @param [amount] {number} The amount of energy to be dropped. If omitted, all the available carried energy is used.
	 * @return {number}
	 */
	dropEnergy: function (amount) {
	},

	/**
	 * Get the quantity of live body parts of the given type. Fully damaged parts do not count.
	 *
	 * @param type {string} A body part type, one of body part constants.
	 * @return {number} A number representing the quantity of body parts.
	 */
	getActiveBodyparts: function (type) {
	},

	/**
	 * Harvest energy from the source. Needs the WORK body part. If the creep has an empty CARRY body part, the harvested
	 * energy is put into it; otherwise it is dropped on the ground.
	 *
	 * @param target {Source} The source object to be harvested.
	 * @return {number}
	 */
	harvest: function (target) {
	},

	/**
	 * Heal another creep. It will restore the target creep’s damaged body parts function and increase the hits counter.
	 * Needs the HEAL body part.
	 *
	 * @param target {Creep} The target creep object.
	 * @return {number}
	 */
	heal: function (target) {
	},

	/**
	 * Move the creep one square in the specified direction. Needs the MOVE body part.
	 *
	 * @param direction One of the Game direction constants
	 * @return {number}
	 */
	move: function (direction) {
	},

	/**
	 * Move the creep using the specified predefined path. Needs the MOVE body part.
	 * @param path {Array<PathStep>} An array with path steps as returned from Room.findPath or RoomPosition.findPathTo methods.
	 * @return {number}
	 */
	moveByPath: function(path) {
	},

	/**
	 * Find the optimal path to the target within the same room and move to it. A shorthand to consequent calls of pos.findPathTo()
	 * and move() methods. Needs the MOVE body part.
	 *
	 * @param target {Object} Can be a RoomPosition object or any object containing RoomPosition.
	 * @param [opts] An object containing pathfinding options flags (see Room.findPath for more info).
	 * @param [opts.reusePath] {number} This option enables reusing the path found along multiple game ticks.
	 *  It allows to save CPU time, but can result in a slightly slower creep reaction behavior. The path is stored
	 *  into the creep's memory to the _move property. The reusePath value defines the amount of ticks which the path
	 *  should be reused for. The default value is 5. Increase the amount to save more CPU, decrease to make the movement
	 *  more consistent. Set to 0 if you want to disable path reusing.
	 *
	 * @note An alternative function is moveTo(x, y, opts)
	 *
	 */
	moveTo: function (target, opts) {
	},

	/**
	 * Toggle auto notification when the creep is under attack. The notification will be sent to your account email. Turned on by default.
	 *
	 * @param enabled {boolean} Whether to enable notification or disable.
	 * @return {number}
	 */
	notifyWhenAttacked: function(enabled){
	},

	/**
	 * Pick up an item (a dropped piece of energy). Needs the CARRY body part.
	 * The target has to be at adjacent square to the creep or at the same square.
	 *
	 * @param target {Energy} The target object to be picked up.
	 * @return {number}
	 */
	pickup: function (target) {
	},

	/**
	 * A ranged attack against another creep or structure. Needs the RANGED_ATTACK body part. If the target is inside a
	 * rampart, the rampart is attacked instead. The target has to be within 3 squares range of the creep.
	 *
	 * @param target {Creep|Spawn|Structure} The target object to be attacked.
	 * @return {number}
	 */
	rangedAttack: function (target) {
	},

	/**
	 * Heal another creep at a distance. It will restore the target creep’s damaged body parts function and increase the
	 * hits counter. Needs the HEAL body part. The target has to be within 3 squares range of the creep.
	 *
	 * @param target {Creep} The target creep object
	 * @return {number}
	 */
	rangedHeal: function(target) { },

	/**
	 * A ranged attack against all hostile creeps or structures within 3 squares range. Needs the RANGED_ATTACK body part.
	 * The attack power depends on the range to each target. Friendly units are not affected.
	 *
	 * @return {number}
	 */
	rangedMassAttack: function() { },

	/**
	 * Repair a damaged structure (spawn, extension, rampart, or road) using carried energy. Needs the WORK and CARRY body parts.
	 *
	 * @param target {Spawn|Structure} The target structure to be repaired.
	 *
	 * @return {number}
	 */
	repair: function (target) {
	},

	/**
	 * Display a visual speech balloon above the creep with the specified message. The message will disappear after a few
	 * seconds. Useful for debugging purposes. Only the creep's owner can see the speech message.
	 *
	 * @param message {string} The message to be displayed. Maximum length is 10 characters.
	 * @return {number}
	 */
	say: function(message) { },

	/**
	 * Kill the creep immediately.
	 *
	 * @return {number}
	 */
	suicide: function () {
	},

	/**
	 * Transfer energy from the creep to another object which can contain energy.
	 *
	 * @param target {Creep|Spawn|Structure} The target object.
	 * @param [amount] {Number} The amount of energy to be transferred. If omitted, all the available carried energy is used.
	 *
	 * @return {number}
	 */
	transferEnergy: function (target, amount) {
	},

	/**
	 * Make your claimed controller neutral again. The target has to be at adjacent square to the creep.
	 *
	 * @param target {Structure} The target controller object.
	 * @return {number}
	 */
	unclaimController: function(target) {
	},

	/**
	 * Upgrade your controller to the next level using carried energy. Upgrading controllers raises your Global Control Level in parallel.
	 * Needs WORK and CARRY body parts. The target has to be at adjacent square to the creep.
	 *
	 * @param target {Structure} The target controller object to be upgraded.
	 * @return {number}
	 */
	upgradeController: function(target) {
	}
};