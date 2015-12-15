
/** CREEP BODY PARTS **/

/**
 * @constant
 * @type {string}
 */
const MOVE = "move";

/**
 * @constant
 * @type {string}
 */
const WORK = "work";

/**
 * @constant
 * @type {string}
 */
const CARRY = "carry";

/**
 * @constant
 * @type {string}
 */
const ATTACK = "attack";

/**
 * @constant
 * @type {string}
 */
const RANGED_ATTACK = "ranged_attack";

/**
 * @constant
 * @type {string}
 */
const HEAL = "heal";

/**
 * @constant
 * @type {string}
 */
const TOUGH = "tough";

/** DIRECTION CONSTANTS **/

/**
 * @constant
 * @type {number}
 */
const TOP = 1;

/**
 * @constant
 * @type {number}
 */
const TOP_RIGHT = 2;

/**
 * @constant
 * @type {number}
 */
const RIGHT = 3;

/**
 * @constant
 * @type {number}
 */
const BOTTOM_RIGHT = 4;

/**
 * @constant
 * @type {number}
 */
const BOTTOM = 5;

/**
 * @constant
 * @type {number}
 */
const BOTTOM_LEFT = 6;

/**
 * @constant
 * @type {number}
 */
const LEFT = 7;

/**
 * @constant
 * @type {number}
 */
const TOP_LEFT = 8;

/** ERROR CONSTANTS **/

/**
 * @constant
 * @type {number}
 */
const OK = 0;

/**
 * @constant
 * @type {number}
 */
const ERR_NOT_OWNER = -1;

/**
 * @constant
 * @type {number}
 */
const ERR_NO_PATH = -2;

/**
 * @constant
 * @type {number}
 */
const ERR_NAME_EXISTS = -3;

/**
 * @constant
 * @type {number}
 */
const ERR_BUSY = -4;

/**
 * @constant
 * @type {number}
 */
const ERR_NOT_FOUND = -5;

/**
 * @constant
 * @type {number}
 */
const ERR_NOT_ENOUGH_ENERGY = -6;

/**
 * @constant
 * @type {number}
 */
const ERR_NOT_ENOUGH_RESOURCES = -6;

/**
 * @constant
 * @type {number}
 */
const ERR_NOT_ENOUGH_EXTENSIONS = -6;

/**
 * @constant
 * @type {number}
 */
const ERR_INVALID_TARGET = -7;

/**
 * @constant
 * @type {number}
 */
const ERR_FULL = -8;

/**
 * @constant
 * @type {number}
 */
const ERR_NOT_IN_RANGE = -9;

/**
 * @constant
 * @type {number}
 */
const ERR_INVALID_ARGS = -10;

/**
 * @constant
 * @type {number}
 */
const ERR_TIRED = -11;

/**
 * @constant
 * @type {number}
 */
const ERR_NO_BODYPART = -12;

/**
 * @constant
 * @type {number}
 */
const ERR_RCL_NOT_ENOUGH = -14;

/**
 * @constant
 * @type {number}
 */
const ERR_GCL_NOT_ENOUGH = -16;

/** COLOR CONSTANTS **/

/**
 * @constant
 * @type {string}
 */
const COLOR_WHITE = "white";

/**
 * @constant
 * @type {string}
 */
const COLOR_GREY = "grey";

/**
 * @constant
 * @type {string}
 */
const COLOR_RED = "red";

/**
 * @constant
 * @type {string}
 */
const COLOR_PURPLE = "purple";

/**
 * @constant
 * @type {string}
 */
const COLOR_BLUE = "blue";

/**
 * @constant
 * @type {string}
 */
const COLOR_CYAN = "cyan";

/**
 * @constant
 * @type {string}
 */
const COLOR_GREEN = "green";

/**
 * @constant
 * @type {string}
 */
const COLOR_YELLOW = "yellow";

/**
 * @constant
 * @type {string}
 */
const COLOR_ORANGE = "orange";

/**
 * @constant
 * @type {string}
 */
const COLOR_BROWN = "brown";

/** FIND CONSTANTS **/

/**
 * @constant
 * @type {number}
 */
const FIND_EXIT_TOP = 1;

/**
 * @constant
 * @type {number}
 */
const FIND_EXIT_RIGHT = 3;

/**
 * @constant
 * @type {number}
 */
const FIND_EXIT_BOTTOM = 5;

/**
 * @constant
 * @type {number}
 */
const FIND_EXIT_LEFT = 7;

/**
 * @constant
 * @type {number}
 */
const FIND_EXIT = 10;

/**
 * @constant
 * @type {number}
 */
const FIND_CREEPS = 101;

/**
 * @constant
 * @type {number}
 */
const FIND_MY_CREEPS = 102;

/**
 * @constant
 * @type {number}
 */
const FIND_HOSTILE_CREEPS = 103;

/**
 * @constant
 * @type {number}
 */
const FIND_SOURCES_ACTIVE = 104;

/**
 * @constant
 * @type {number}
 */
const FIND_SOURCES = 105;

/**
 * @constant
 * @type {number}
 */
const FIND_DROPPED_RESOURCES = 106;

/**
 * @constant
 * @type {number}
 */
const FIND_STRUCTURES = 107;

/**
 * @constant
 * @type {number}
 */
const FIND_MY_STRUCTURES = 108;

/**
 * @constant
 * @type {number}
 */
const FIND_HOSTILE_STRUCTURES = 109;

/**
 * @constant
 * @type {number}
 */
const FIND_FLAGS = 110;

/**
 * @constant
 * @type {number}
 */
const FIND_CONSTRUCTION_SITES = 111;

/**
 * @constant
 * @type {number}
 */
const FIND_MY_SPAWNS = 112;

/**
 * @constant
 * @type {number}
 */
const FIND_HOSTILE_SPAWNS = 113;

/**
 * @constant
 * @type {number}
 */
const FIND_MY_CONSTRUCTION_SITES = 114;

/** GAME MODE CONSTANTS **/

/**
 * @constant
 * @type {string}
 */
const MODE_SIMULATION = "simulation";

/**
 * @constant
 * @type {string}
 */
const MODE_SURVIVAL = "survival";

/**
 * @constant
 * @type {string}
 */
const MODE_WORLD = "world";

/**
 * @constant
 * @type {string}
 */
const MODE_ARENA = "arena";

/** STRUCTURE CONSTANTS **/

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_EXTENSION = "extension";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_RAMPART = "rampart";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_ROAD = "road";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_SPAWN = "spawn";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_WALL = "constructedWall";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_LINK = "link";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_KEEPER_LAIR = "keeperLair";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_CONTROLLER = "controller";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_STORAGE = "storage";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_TOWER = "tower";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_OBSERVER = "observer";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_POWER_BANK = "powerBank";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_POWER_SPAWN = "powerSpawn";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_PORTAL = "portal";

/** RESOURCE CONSTANTS **/

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ENERGY = "energy";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_POWER = "power";