/**
 * Creeps are your units. Creeps can move, harvest energy, construct structures, attack another creeps, and perform other actions. Each creep consists of the following body parts:
 *  - MOVE Cost: 50 Effect: Moves a creep 1 square per tick per 1 other body part
 *  - WORK Cost: 20 Effect: Harvests 2 energy units from a source per tick; constructs a structure for 5 energy units per tick; Repairs a structure for 20 hits per tick consuming 2 energy unit per tick.
 *  - CARRY Cost: 50 Effect: Can contain up to 50 energy units.
 *  - ATTACK Cost: 80 Effect: Attacks another creep/structure with 30 hits per tick in a short-ranged attack.
 *  - RANGED_ATTACK: Cost: 150 Effect: Attacks another creep/structure with 10 hits per tick in a long-ranged attack up to 3 squares long.
 *  - HEAL: Cost: 200 Effect: Heals another creep restoring 12 hits per tick in short range or 4 hits per tick at a distance.
 *  - TOUGH: Cost: 5 Effect: No effect
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
	 * Note: you can't access the memory property of the creep object which has been just scheduled to spawn, but you
	 * still can write its memory like that:
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
	 * @type array<object>
	 */
	body: [ ],

	/**
	 * The current amount of energy the creep is carrying.
	 *
	 * @type number
	 */
	energy: 0,

	/**
	 * The total amount of energy the creep can carry.
	 *
	 * @type number
	 */
	energyCapacity: 0,

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
	 */
	attack: function (target) {
	},

	/**
	 * Build a structure at the target construction site using carried energy. Needs WORK and CARRY body parts.
	 *
	 * @param target {ConstructionSite}
	 */
	build: function (target) {
	},

	/**
	 * Drop a piece of energy on the ground.
	 * @param [amount] {number} The amount of energy to be dropped. If omitted, all the available carried energy is used.
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
	 */
	harvest: function (target) {
	},

	/**
	 * Heal another creep. It will restore the target creep’s damaged body parts function and increase the hits counter.
	 * Needs the HEAL body part.
	 *
	 * @param target {Creep} The target creep object.
	 */
	heal: function (target) {
	},

	/**
	 * Move the creep one square in the specified direction. Needs the MOVE body part.
	 *
	 * @param direction One of the Game direction constants
	 */
	move: function (direction) {
	},

	/**
	 * Find the optimal path to the target within the same room and move to it. A shorthand to consequent calls of
	 * pos.findPathTo() and move() methods. Needs the MOVE body part.
	 *
	 * @param target {Object} Can be a RoomPosition object or any object containing RoomPosition.
	 * @param [opts] {Object} An object containing pathfinding options flags (see Room.findPath for more info).
	 * @param [opts.reusePath] {Number} This option enables reusing the path found along multiple game ticks.
	 *  It allows to save CPU time, but can result in a slightly slower creep reaction behavior.
	 *  The path is stored into the creep's memory to the _move property.
	 *  The reusePath value defines the amount of ticks which the path should be reused for.
	 *  The default value is 5. Increase the amount to save more CPU, decrease to make the movement more consistent.
	 *  Set to 0 if you want to disable path reusing.
	 */
	moveTo: function (target, opts) {
	},

	/**
	 * Pick up an item (a dropped piece of energy). Needs the CARRY body part.
	 *
	 * @param target {Energy} The target object to be picked up.
	 */
	pickup: function (target) {
	},

	/**
	 * A ranged attack against another creep or structure. Needs the RANGED_ATTACK body part. If the target is inside a
	 * rampart, the rampart is attacked instead.
	 *
	 * @param target {Creep|Spawn|Structure} The target object to be attacked.
	 */
	rangedAttack: function (target) {
	},

	/**
	 * Heal another creep at a distance. It will restore the target creep’s
	 * damaged body parts function and increase the hits counter. Needs the HEAL body part.
	 * The target has to be within 3 squares range of the creep.
	 *
	 * @param target {Creep} The creep target object
	 */
	rangedHeal: function (target) {
	},

	/**
	 * A ranged attack against all hostile creeps or structures within 3 squares range.
	 * Needs the RANGED_ATTACK body part. The attack power depends on the range to each target.
	 * Friendly units are not affected.
	 */
	rangedMassAttack: function () {
	},

	/**
	 * Repair a damaged structure (spawn, extension, rampart, or road) using carried energy. Needs the WORK and CARRY body parts.
	 *
	 * @param target {Spawn|Structure} The target structure to be repaired.
	 */
	repair: function (target) {
	},

	/**
	 * Display a visual speech balloon above the creep with the specified message.
	 * The message will disappear after a few seconds. Useful for debugging purposes.
	 * Only the creep's owner can see the speech message.
	 *
	 * @param message {String} The message to be displayed. Maximum length is 10 characters.
	 */
	say: function (message) {
	},

	/**
	 * Kill the creep immediately.
	 */
	suicide: function () {
	},

	/**
	 * Transfer energy from the creep to another object which can contain energy.
	 *
	 * @param target {Creep|Spawn|Structure} The target object.
	 * @param [amount] {Number} The amount of energy to be transferred. If omitted, all the available carried energy is used.
	 */
	transferEnergy: function (target, amount) {
	}
};

/**
 * Find the optimal path to the target within the same room and move to it. A shorthand to consequent calls of
 * pos.findPathTo() and move() methods. Needs the MOVE body part.
 *
 * @param x {Number} X position of the target in the room.
 * @param y {Number} Y position of the target in the room.
 */
Creep.prototype.move = function(x, y) {
};
