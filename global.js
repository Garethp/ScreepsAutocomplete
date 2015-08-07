/**
 * The main class, contains all the constants and global variables (such as Game)
 *
 * @class
 * @constructor
 */
global = function () {

};

global.prototype = {

    /* FIND CONSTANTS */

    /** @type {number} */
    FIND_EXIT_TOP: 1,
    /** @type {number} */
    FIND_EXIT_RIGHT: 3,
    /** @type {number} */
    FIND_EXIT_BOTTOM: 5,
    /** @type {number} */
    FIND_EXIT_LEFT: 7,
    /** @type {number} */
    FIND_EXIT: 10,
    /** @type {number} */
    FIND_CREEPS: 101,
    /** @type {number} */
    FIND_MY_CREEPS: 102,
    /** @type {number} */
    FIND_HOSTILE_CREEPS: 103,
    /** @type {number} */
    FIND_SOURCES_ACTIVE: 104,
    /** @type {number} */
    FIND_SOURCES: 105,
    /** @type {number} */
    FIND_DROPPED_ENERGY: 106,
    /** @type {number} */
    FIND_STRUCTURES: 107,
    /** @type {number} */
    FIND_MY_STRUCTURES: 108,
    /** @type {number} */
    FIND_HOSTILE_STRUCTURES: 109,
    /** @type {number} */
    FIND_FLAGS: 110,
    /** @type {number} */
    FIND_CONSTRUCTION_SITES: 111,
    /** @type {number} */
    FIND_MY_SPAWNS: 112,

    /* DIRECTIONAL CONSTANTS */

    /** @type {number} */
    TOP: 1,
    /** @type {number} */
    TOP_RIGHT: 2,
    /** @type {number} */
    RIGHT: 3,
    /** @type {number} */
    BOTTOM_RIGHT: 4,
    /** @type {number} */
    BOTTOM: 5,
    /** @type {number} */
    BOTTOM_LEFT: 6,
    /** @type {number} */
    LEFT: 7,
    /** @type {number} */
    TOP_LEFT: 8,

    /* ERROR CODES */

    /** @type {number} */
    OK: 0,
    /** @type {number} */
    ERR_NOT_OWNER: -1,
    /** @type {number} */
    ERR_NO_PATH: -2,
    /** @type {number} */
    ERR_NAME_EXISTS: -3,
    /** @type {number} */
    ERR_BUSY: -4,
    /** @type {number} */
    ERR_NOT_FOUND: -5,
    /** @type {number} */
    ERR_NOT_ENOUGH_ENERGY: -6,
    /** @type {number} */
    ERR_INVALID_TARGET: -7,
    /** @type {number} */
    ERR_FULL: -8,
    /** @type {number} */
    ERR_NOT_IN_RANGE: -9,
    /** @type {number} */
    ERR_INVALID_ARGS: -10,
    /** @type {number} */
    ERR_TIRED: -11,
    /** @type {number} */
    ERR_NO_BODYPART: -12,
    /** @type {number} */
    ERR_NOT_ENOUGH_EXTENSIONS: -13,
    /** @type {number} */
    ERR_RCL_NOT_ENOUGH: -14,
    /** @type {number} */
    ERR_GCL_NOT_ENOUGH: -15,

    /* COLORS */

    /** @type {string} */
    COLOR_RED: "red",
    /** @type {string} */
    COLOR_PURPLE: "purple",
    /** @type {string} */
    COLOR_BLUE: "blue",
    /** @type {string} */
    COLOR_CYAN: "cyan",
    /** @type {string} */
    COLOR_GREEN: "green",
    /** @type {string} */
    COLOR_YELLOW: "yellow",
    /** @type {string} */
    COLOR_ORANGE: "orange",
    /** @type {string} */
    COLOR_BROWN: "brown",
    /** @type {string} */
    COLOR_GREY: "grey",
    /** @type {string} */
    COLOR_WHITE: "white",

    /* CREEP BODY PARTS */

    /** @type {string} */
    MOVE: "move",
    /** @type {string} */
    WORK: "work",
    /** @type {string} */
    CARRY: "carry",
    /** @type {string} */
    ATTACK: "attack",
    /** @type {string} */
    RANGED_ATTACK: "ranged_attack",
    /** @type {string} */
    TOUGH: "tough",
    /** @type {string} */
    HEAL: "heal",
    /** @type {String[]} */
    BODYPARTS_ALL: ["move", "work", "carry", "attack", "ranged_attack", "tough", "heal"],

    /* STRUCTURE TYPES */

    /** @type {string} */
    STRUCTURE_SPAWN: "spawn",
    /** @type {string} */
    STRUCTURE_EXTENSION: "extension",
    /** @type {string} */
    STRUCTURE_ROAD: "road",
    /** @type {string} */
    STRUCTURE_WALL: "constructedWall",
    /** @type {string} */
    STRUCTURE_RAMPART: "rampart",
    /** @type {string} */
    STRUCTURE_KEEPER_LAIR: "keeperLair",
    /** @type {string} */
    STRUCTURE_PORTAL: "portal",
    /** @type {string} */
    STRUCTURE_CONTROLLER: "controller",
    /** @type {string} */
    STRUCTURE_LINK: "link",
    /** @type {string} */
    STRUCTURE_STORAGE: "storage",

    /* MODES */

    /** @type {string} */
    MODE_SIMULATION: "simulation",
    /** @type {string} */
    MODE_SURVIVAL: "survival",
    /** @type {string} */
    MODE_WORLD: "world",
    /** @type {string} */
    MODE_ARENA: "arena",

    /**
     * @type {Game}
     */
    Game: null,

    /**
     * @type {Object}
     */
    module: null,

    /**
     *
     * @type {Object}
     */
    exports: null,

    /**
     * @type {global}
     */
    global: this

};