var Game = function()
{

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

	/**
	 * @type Creep[]
	 */
	creeps: null,

	flags: null,

	/**
	 * @type Spawn[]
	 */
	spawns: null,

	/**
	 * @type Structure[]
	 */
	structures: null,

	time: 0,

	getObjectById: function(id) { },

	getRoom: function(name) { },

	notify: function(message) { }
};