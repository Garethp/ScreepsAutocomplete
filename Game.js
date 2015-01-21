/**
 * The main global game object containing all the gameplay information.
 *
 * @class
 * @constructor
 */
var Game = function () {

};

Game.prototype = {
	OK: 0,
	ERR_NOT_OWNER: -1,
	ERR_NO_PATH: -2,
	ERR_NAME_EXISTS: -3,
	ERR_BUSY: -4,
	ERR_NOT_FOUND: -5,
	ERR_NOT_ENOUGH_ENERGY: -6,
	ERR_INVALID_TARGET: -6,
	ERR_FULL: -8,
	ERR_NOT_IN_RANGE: -9,
	ERR_INVALID_ARGS: -10,
	ERR_TIRED: -11,
	ERR_NO_BODYPART: -12,
	ERR_NOT_ENOUGH_EXTENSIONS: -13,

	CREEPS: 1,
	MY_CREEPS: 2,
	HOSTILE_CREEPS: 3,
	SOURCES_ACTIVE: 4,
	SOURCES: 5,
	DROPPED_ENERGY: 6,
	STRUCTURES: 7,
	MY_STRUCTURES: 8,
	HOSTILE_STRUCTURES: 9,
	FLAGS: 10,
	CONSTRUCTION_SITES: 11,
	MY_SPAWNS: 12,
	HOSTILE_SPAWNS: 13,
	EXIT_TOP: 14,
	EXIT_RIGHT: 15,
	EXIT_BOTTOM: 16,
	EXIT_LEFT: 17,

	TOP: 1,
	TOP_RIGHT: 2,
	RIGHT: 3,
	BOTTOM_RIGHT: 4,
	BOTTOM: 5,
	BOTTOM_LEFT: 6,
	LEFT: 7,
	TOP_LEFT: 8,

	MOVE: "move",
	WORK: "work",
	CARRY: "carry",
	ATTACK: "attack",
	RANGED_ATTACK: "ranged_attack",
	TOUGH: "tough",
	HEAL: "heal",

	STRUCTURE_EXTENSION: "extension",
	STRUCTURE_RAMPART: "rampart",
	STRUCTURE_ROAD: "road",
	STRUCTURE_SPAWN: "spawn",
	STRUCTURE_WALL: "constructedWall",

	COLOR_RED: "red",
	COLOR_PURPLE: "purple",
	COLOR_BLUE: "blue",
	COLOR_CYAN: "cyan",
	COLOR_GREEN: "green",
	COLOR_YELLOW: "yellow",
	COLOR_ORANGE: "orange",
	COLOR_BROWN: "brown",
	COLOR_GREY: "grey",
	COLOR_WHITE: "white",

	MODE_SIMULATION: "simulation",
	MODE_SURVIVAL: "survival",
	MODE_WORLD: "world",

	/**
	 * A hash containing all your creeps with creep names as hash keys.
	 *
	 * @type Creep[]
	 */
	creeps: null,

	/**
	 * A hash containing all your flags with flag names as hash keys.
	 *
	 * @type Flag[]
	 */
	flags: null,

	/**
	 * A hash containing all the rooms available to you with room names as hash keys.
	 *
	 * @type Room[]
	 */
	rooms: null,

	/**
	 * A hash containing all your spawns with spawn names as hash keys.
	 *
	 * @type Spawn[]
	 */
	spawns: null,

	/**
	 * A hash containing all your structures with structure id as hash keys.
	 *
	 * @type Structure[]
	 */
	structures: null,

	/**
	 * System game tick counter. It is automatically incremented on every tick.
	 *
	 * @type Number
	 */
	time: 0,

	/**
	 * Get an object with the specified unique ID. It may be a game object of any type. Only objects from the rooms which are visible to you can be accessed.
	 *
	 * @param id {String}
	 */
	getObjectById: function (id) {
	},

	/**
	 * Get an instance object of the specified room. You can gain access to a room only if you have a creep, spawn, or extension within it.
	 *
	 * @deprecated This method is deprecated and will be removed soon.
	 *
	 * @param name {String}
	 * @return Room
	 */
	getRoom: function (name) {
	},

	/**
	 * Send a custom message at your profile email. This way, you can set up notifications to yourself on any occasion within the game. Not available in the Simulation Room.
	 *
	 * @param message {string} Custom text which will be sent in the message.
	 */
	notify: function (message) {
	}
};