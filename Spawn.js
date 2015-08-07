/**
 * Spawns are your colony centers. You can transfer energy into it and create new creeps using createCreep() method.
 *
 * @class
 * @constructor
 */
Spawn = function () {

};

Spawn.prototype = {
	/**
	 * A unique object identificator.
	 *
	 * @type {string}
	 */
	id: "",

	/**
	 * Spawn’s name. You choose the name upon creating a new spawn, and it cannot be changed later. This name is a hash
	 * key to access the spawn via the Game.spawns object.
	 *
	 * @type {string}
	 */
	name: "",

	/**
	 * An object with the spawn’s owner info containing the following properties:
	 *
	 * @type {Owner}
	 */
	owner: null,

	/**
	 * The link to the Room object of this spawn.
	 *
	 * @type {Room}
	 */
	room: null,

	/**
	 * An object representing the position of this spawn in a room.
	 *
	 * @type {RoomPosition}
	 */
	pos: null,

	/**
	 * A shorthand to Memory.spawns[spawn.name]. You can use it for quick access the spawn’s specific memory data object.
	 *
	 * @type {any[]}
	 */
	memory: [ ],

	/**
	 * Whether it is your spawn or foe.
	 *
	 * @type {boolean}
	 */
	my: true,

	/**
	 * Always equal to ‘spawn’.
	 *
	 * @type {string}
	 */
	structureType: 'spawn',

	/**
	 * If the spawn is in process of spawning a new creep, this object will contain the new creep’s information, or null otherwise.
	 *
	 * @return {Creep|null}
	 */
	spawning: null,

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
	energyCapacity: 0,

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
	 * Check if a creep can be created.
	 *
	 * @param {String[]} body An array describing the new creep’s body. Should contain 1 to 30 elements
	 * @param {String} [name] The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key).
	 * 						  If not defined, a random name will be generated.
	 *
	 * @return {number}
	 */
	canCreateCreep: function(body, name) {
	},

	/**
	 * Start the creep spawning process.
	 *
	 * @param {string[]} bodyParts An array describing the new creep’s body. Should contain 1 to 30 elements
	 * @param {string} [name] The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not
	 *  contain another creep with the same name (hash key). If not defined, a random name will be generated.
	 * @param {any[]} [memory] The memory of a new creep. If provided, it will be immediately stored into Memory.creeps[name].
	 *
	 * @return {String, number} The name of a new creep or an error code
	 */
	createCreep: function (bodyParts, name, memory) {
	},

	/**
	 * Destroy this spawn immediately.
	 * @return {number}
	 */
	destroy: function() {
	},

	/**
	 * Toggle auto notification when the spawn is under attack. The notification will be sent to your account email. Turned on by default.
	 * @param {boolean} enabled Whether to enable notification or disable.
	 *
	 * @return {number}
	 */
	notifyWhenAttacked: function(enabled) {
	},

	/**
	 * Transfer the energy from the spawn to a creep
	 *
	 * @param {Creep} target The creep object which energy should be transferred to.
	 * @param {number} [amount] The amount of energy to be transferred. If omitted, all the remaining amount of energy
	 *  will be used.
	 *
	 *  @return {number}
	 */
	transferEnergy: function (target, amount) {
	}
};