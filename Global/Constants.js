
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
const TOUGH = "tough";

/**
 * @constant
 * @type {string}
 */
const HEAL = "heal";

/**
 * @constant
 * @type {string}
 */
const CLAIM = "claim";

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
const ERR_GCL_NOT_ENOUGH = -15;

/** COLOR CONSTANTS **/

/**
 * @constant
 * @type {number}
 */
const COLOR_RED = 1;

/**
 * @constant
 * @type {number}
 */
const COLOR_PURPLE = 2;

/**
 * @constant
 * @type {number}
 */
const COLOR_BLUE = 3;

/**
 * @constant
 * @type {number}
 */
const COLOR_CYAN = 4;

/**
 * @constant
 * @type {number}
 */
const COLOR_GREEN = 5;

/**
 * @constant
 * @type {number}
 */
const COLOR_YELLOW = 6;

/**
 * @constant
 * @type {number}
 */
const COLOR_ORANGE = 7;

/**
 * @constant
 * @type {number}
 */
const COLOR_BROWN = 8;

/**
 * @constant
 * @type {number}
 */
const COLOR_GREY = 9;

/**
 * @constant
 * @type {number}
 */
const COLOR_WHITE = 10;

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

/**
 * @constant
 * @type {number}
 */
const FIND_HOSTILE_CONSTRUCTION_SITES = 115;

/**
 * @constant
 * @type {number}
 */
const FIND_MINERALS = 116;

/**
 * @constant
 * @type {number}
 */
const FIND_NUKES = 117;

/**
 * @constant
 * @type {number}
 */
const FIND_TOMBSTONES = 118;

/**
 * @constant
 * @type {number}
 */
const FIND_POWER_CREEPS = 119;

/**
 * @constant
 * @type {number}
 */
const FIND_MY_POWER_CREEPS = 120;

/**
 * @constant
 * @type {number}
 */
const FIND_HOSTILE_POWER_CREEPS = 121;

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

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_EXTRACTOR = "extractor";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_LAB = "lab";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_TERMINAL = "terminal";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_CONTAINER = "container";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_NUKER = "nuker";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_FACTORY = "factory";

/**
 * @constant
 * @type {string}
 */
const STRUCTURE_INVADER_CORE = "invaderCore";

/** RESOURCE CONSTANTS **/

/**
 * @constant
 * @type {string}
 */
const SUBSCRIPTION_TOKEN = 'token';

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
/**
 * @constant
 * @type {string}
 */
const RESOURCE_HYDROGEN = "H";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_OXYGEN = "O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_UTRIUM = "U";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_KEANIUM = "K";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_LEMERGIUM = "L";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ZYNTHIUM = "Z";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYST = "X";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_OPS = "ops";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_HYDROXIDE = "OH";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ZYNTHIUM_KEANITE = "ZK";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_UTRIUM_LEMERGITE = "UL";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_GHODIUM = "G";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_UTRIUM_HYDRIDE = "UH";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_UTRIUM_OXIDE = "UO";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_KEANIUM_HYDRIDE = "KH";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_KEANIUM_OXIDE = "KO";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_LEMERGIUM_HYDRIDE = "LH";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_LEMERGIUM_OXIDE = "LO";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ZYNTHIUM_HYDRIDE = "ZH";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ZYNTHIUM_OXIDE = "ZO";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_GHODIUM_HYDRIDE = "GH";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_GHODIUM_OXIDE = "GO";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_UTRIUM_ACID = "UH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_UTRIUM_ALKALIDE = "UHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_KEANIUM_ACID = "KH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_KEANIUM_ALKALIDE = "KHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_LEMERGIUM_ACID = "LH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_LEMERGIUM_ALKALIDE = "LHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ZYNTHIUM_ACID = "ZH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ZYNTHIUM_ALKALIDE = "ZHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_GHODIUM_ACID = "GH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_GHODIUM_ALKALIDE = "GHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_UTRIUM_ACID = "XUH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_UTRIUM_ALKALIDE = "XUHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_KEANIUM_ACID = "XKH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_KEANIUM_ALKALIDE = "XKHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_LEMERGIUM_ACID = "XLH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = "XLHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_ZYNTHIUM_ACID = "XZH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = "XZHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_GHODIUM_ACID = "XGH2O";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CATALYZED_GHODIUM_ALKALIDE = "XGHO2";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_SILICON = "silicon";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_METAL = "metal";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_BIOMASS = "biomass";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_MIST = "mist";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_UTRIUM_BAR = "utrium_bar";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_LEMERGIUM_BAR = "lemergium_bar";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ZYNTHIUM_BAR = "zynthium_bar";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_KEANIUM_BAR = "keanium_bar";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_GHODIUM_MELT = "ghodium_melt";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_OXIDANT = "oxidant";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_REDUCTANT = "reductant";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_PURIFIER = "purifier";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_BATTERY = "battery";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_COMPOSITE = "composite";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CRYSTAL = "crystal";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_LIQUID = "liquid";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_WIRE = "wire";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_SWITCH = "switch";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_TRANSISTOR = "transistor";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_MICROCHIP = "microchip";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CIRCUIT = "circuit";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_DEVICE = "device";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CELL = "cell";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_PHLEGM = "phlegm";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_TISSUE = "tissue";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_MUSCLE = "muscle";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ORGANOID = "organoid";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ORGANISM = "organism";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ALLOY = "alloy";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_TUBE = "tube";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_FIXTURES = "fixtures";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_FRAME = "frame";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_HYDRAULICS = "hydraulics";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_MACHINE = "machine";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CONDENSATE = "condensate";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_CONCENTRATE = "concentrate";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_EXTRACT = "extract";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_SPIRIT = "spirit";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_EMANATION = "emanation";

/**
 * @constant
 * @type {string}
 */
const RESOURCE_ESSENCE = "essence";


/**
 * @constant
 * @type {object}
 */
const REACTIONS = {
    H: {
        O: "OH",
        L: "LH",
        K: "KH",
        U: "UH",
        Z: "ZH",
        G: "GH"
    },
    O: {
        H: "OH",
        L: "LO",
        K: "KO",
        U: "UO",
        Z: "ZO",
        G: "GO"
    },
    Z: {
        K: "ZK",
        H: "ZH",
        O: "ZO"
    },
    L: {
        U: "UL",
        H: "LH",
        O: "LO"
    },
    K: {
        Z: "ZK",
        H: "KH",
        O: "KO"
    },
    G: {
        H: "GH",
        O: "GO"
    },
    U: {
        L: "UL",
        H: "UH",
        O: "UO"
    },
    OH: {
        UH: "UH2O",
        UO: "UHO2",
        ZH: "ZH2O",
        ZO: "ZHO2",
        KH: "KH2O",
        KO: "KHO2",
        LH: "LH2O",
        LO: "LHO2",
        GH: "GH2O",
        GO: "GHO2"
    },
    X: {
        UH2O: "XUH2O",
        UHO2: "XUHO2",
        LH2O: "XLH2O",
        LHO2: "XLHO2",
        KH2O: "XKH2O",
        KHO2: "XKHO2",
        ZH2O: "XZH2O",
        ZHO2: "XZHO2",
        GH2O: "XGH2O",
        GHO2: "XGHO2"
    },
    ZK: {
        UL: "G"
    },
    UL: {
        ZK: "G"
    },
    LH: {
        OH: "LH2O"
    },
    ZH: {
        OH: "ZH2O"
    },
    GH: {
        OH: "GH2O"
    },
    KH: {
        OH: "KH2O"
    },
    UH: {
        OH: "UH2O"
    },
    LO: {
        OH: "LHO2"
    },
    ZO: {
        OH: "ZHO2"
    },
    KO: {
        OH: "KHO2"
    },
    UO: {
        OH: "UHO2"
    },
    GO: {
        OH: "GHO2"
    },
    LH2O: {
        X: "XLH2O"
    },
    KH2O: {
        X: "XKH2O"
    },
    ZH2O: {
        X: "XZH2O"
    },
    UH2O: {
        X: "XUH2O"
    },
    GH2O: {
        X: "XGH2O"
    },
    LHO2: {
        X: "XLHO2"
    },
    UHO2: {
        X: "XUHO2"
    },
    KHO2: {
        X: "XKHO2"
    },
    ZHO2: {
        X: "XZHO2"
    },
    GHO2: {
        X: "XGHO2"
    }
};

/**
 * @constant
 * @type {object}
 */
const BOOSTS = {
    work: {
        UO: {
            harvest: 2
        },
        UHO2: {
            harvest: 3
        },
        XUHO2: {
            harvest: 4
        },
        LH: {
            build: 1.3,
            repair: 1.3
        },
        LH2O: {
            build: 1.65,
            repair: 1.65
        },
        XLH2O: {
            build: 2,
            repair: 2
        },
        ZH: {
            dismantle: 2
        },
        ZH2O: {
            dismantle: 3
        },
        XZH2O: {
            dismantle: 4
        },
        GH: {
            upgradeController: 1.3
        },
        GH2O: {
            upgradeController: 1.65
        },
        XGH2O: {
            upgradeController: 2
        }
    },
    attack: {
        UH: {
            attack: 2
        },
        UH2O: {
            attack: 3
        },
        XUH2O: {
            attack: 4
        }
    },
    ranged_attack: {
        KO: {
            rangedAttack: 2,
            rangedMassAttack: 2
        },
        KHO2: {
            rangedAttack: 3,
            rangedMassAttack: 3
        },
        XKHO2: {
            rangedAttack: 4,
            rangedMassAttack: 4
        }
    },
    heal: {
        LO: {
            heal: 2,
            rangedHeal: 2
        },
        LHO2: {
            heal: 3,
            rangedHeal: 3
        },
        XLHO2: {
            heal: 4,
            rangedHeal: 4
        }
    },
    carry: {
        KH: {
            capacity: 2
        },
        KH2O: {
            capacity: 3
        },
        XKH2O: {
            capacity: 4
        }
    },
    move: {
        ZO: {
            fatigue: 2
        },
        ZHO2: {
            fatigue: 3
        },
        XZHO2: {
            fatigue: 4
        }
    },
    tough: {
        GO: {
            damage: .7
        },
        GHO2: {
            damage: .5
        },
        XGHO2: {
            damage: .3
        }
    }
};

/**
 * @constant
 * @type {string[]}
 */
const RESOURCES_ALL = [
    RESOURCE_ENERGY,
    RESOURCE_POWER,
    RESOURCE_HYDROGEN,
    RESOURCE_OXYGEN,
    RESOURCE_UTRIUM,
    RESOURCE_KEANIUM,
    RESOURCE_LEMERGIUM,
    RESOURCE_ZYNTHIUM,
    RESOURCE_CATALYST,
    RESOURCE_GHODIUM,
    RESOURCE_HYDROXIDE,
    RESOURCE_ZYNTHIUM_KEANITE,
    RESOURCE_UTRIUM_LEMERGITE,
    RESOURCE_UTRIUM_HYDRIDE,
    RESOURCE_UTRIUM_OXIDE,
    RESOURCE_KEANIUM_HYDRIDE,
    RESOURCE_KEANIUM_OXIDE,
    RESOURCE_LEMERGIUM_HYDRIDE,
    RESOURCE_LEMERGIUM_OXIDE,
    RESOURCE_ZYNTHIUM_HYDRIDE,
    RESOURCE_ZYNTHIUM_OXIDE,
    RESOURCE_GHODIUM_HYDRIDE,
    RESOURCE_GHODIUM_OXIDE,
    RESOURCE_UTRIUM_ACID,
    RESOURCE_UTRIUM_ALKALIDE,
    RESOURCE_KEANIUM_ACID,
    RESOURCE_KEANIUM_ALKALIDE,
    RESOURCE_LEMERGIUM_ACID,
    RESOURCE_LEMERGIUM_ALKALIDE,
    RESOURCE_ZYNTHIUM_ACID,
    RESOURCE_ZYNTHIUM_ALKALIDE,
    RESOURCE_GHODIUM_ACID,
    RESOURCE_GHODIUM_ALKALIDE,
    RESOURCE_CATALYZED_UTRIUM_ACID,
    RESOURCE_CATALYZED_UTRIUM_ALKALIDE,
    RESOURCE_CATALYZED_KEANIUM_ACID,
    RESOURCE_CATALYZED_KEANIUM_ALKALIDE,
    RESOURCE_CATALYZED_LEMERGIUM_ACID,
    RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE,
    RESOURCE_CATALYZED_ZYNTHIUM_ACID,
    RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE,
    RESOURCE_CATALYZED_GHODIUM_ACID,
    RESOURCE_CATALYZED_GHODIUM_ALKALIDE,
    RESOURCE_OPS
];

/**
 * @constant
 * @type {string[]}
 */
const BODYPARTS_ALL = [
    MOVE,
    WORK,
    CARRY,
    ATTACK,
    RANGED_ATTACK,
    TOUGH,
    HEAL,
    CLAIM
];

/**
 * @constant
 * @type {string[]}
 */
const COLORS_ALL = [
    COLOR_RED,
    COLOR_PURPLE,
    COLOR_BLUE,
    COLOR_CYAN,
    COLOR_GREEN,
    COLOR_YELLOW,
    COLOR_ORANGE,
    COLOR_BROWN,
    COLOR_GREY,
    COLOR_WHITE
];

const REACTION_TIME = {
    OH: 20,
    ZK: 5,
    UL: 5,
    G: 5,
    UH: 10,
    UH2O: 5,
    XUH2O: 60,
    UO: 10,
    UHO2: 5,
    XUHO2: 60,
    KH: 10,
    KH2O: 5,
    XKH2O: 60,
    KO: 10,
    KHO2: 5,
    XKHO2: 60,
    LH: 15,
    LH2O: 10,
    XLH2O: 65,
    LO: 10,
    LHO2: 5,
    XLHO2: 60,
    ZH: 20,
    ZH2O: 40,
    XZH2O: 160,
    ZO: 10,
    ZHO2: 5,
    XZHO2: 60,
    GH: 10,
    GH2O: 15,
    XGH2O: 80,
    GO: 10,
    GHO2: 30,
    XGHO2: 150,
};

/**
 * @constant
 * @type {object}
 */
const BODYPART_COST = {
    move:           50,
    work:          100,
    attack:         80,
    carry:          50,
    heal:          250,
    ranged_attack: 150,
    tough:          10,
    claim:         600
};

/**
 * Spawn time per body part in ticks
 * @constant
 * @type {number}
 */
const CREEP_SPAWN_TIME = 3;

/**
 * @constant
 * @type {number}
 */
const CREEP_RENEW_RATIO = 1.2;

/**
 * Lifetime of a creep
 * @constant
 * @type {number}
 */
const CREEP_LIFE_TIME = 1500;

/**
 * Lifetime of a creep with CLAIM body parts
 * @constant
 * @type {number}
 */
const CREEP_CLAIM_LIFE_TIME = 500;

/**
 * use unknown
 * @constant
 * @type {number}
 */
const CREEP_CORPSE_RATE = 0.2;

/**
 * @constant
 * @type {string[]}
 */
const OBSTACLE_OBJECT_TYPES = ["spawn", "creep", "powerCreep", "source", "mineral", "controller", "constructedWall", "extension", "link", "storage", "tower", "observer", "powerSpawn", "powerBank", "lab", "terminal", "nuker", "factory"];

/**
 * @constant
 * @type {number}
 */
const ENERGY_REGEN_TIME = 300;

/**
 * @constant
 * @type {number}
 */
const ENERGY_DECAY = 1000;

/**
 * @constant
 * @type {number}
 */
const MINERAL_REGEN_TIME = 50000;

/**
 * @constant
 * @type {object}
 */
const MINERAL_MIN_AMOUNT = {
    H: 140000,
    O: 140000,
    L: 70000,
    K: 70000,
    Z: 70000,
    U: 70000,
    X: 70000
};

/**
 * @constant
 * @type {number}
 */
const MINERAL_RANDOM_FACTOR = 2;

/**
 * @constant
 * @type {number}
 */
const REPAIR_COST = 0.01;

/**
 * @constant
 * @type {number}
 */
const DISMANTLE_COST = 0.005;

/**
 * @constant
 * @type {number}
 */
const RAMPART_DECAY_AMOUNT = 300;

/**
 * @constant
 * @type {number}
 */
const RAMPART_DECAY_TIME = 100;

/**
 * @constant
 * @type {number}
 */
const RAMPART_HITS = 1;

/**
 * @constant
 * @type {object}
 */
const RAMPART_HITS_MAX = {
    2: 300000,
    3: 1000000,
    4: 3000000,
    5: 10000000,
    6: 30000000,
    7: 100000000,
    8: 300000000
};

/**
 * @constant
 * @type {number}
 */
const SPAWN_HITS = 5000;

/**
 * @constant
 * @type {number}
 */
const SPAWN_ENERGY_START = 300;

/**
 * @constant
 * @type {number}
 */
const SPAWN_ENERGY_CAPACITY = 300;

/**
 * @constant
 * @type {number}
 */
const SOURCE_ENERGY_CAPACITY = 3000;

/**
 * @constant
 * @type {number}
 */
const SOURCE_ENERGY_NEUTRAL_CAPACITY = 1500;

/**
 * @constant
 * @type {number}
 */
const SOURCE_ENERGY_KEEPER_CAPACITY = 4500;

/**
 * @constant
 * @type {number}
 */
const ROAD_HITS = 5000;

/**
 * @constant
 * @type {number}
 */
const WALL_HITS = 1;

/**
 * @constant
 * @type {number}
 */
const WALL_HITS_MAX = 300000000;

/**
 * @constant
 * @type {number}
 */
const EXTENSION_HITS = 1000;

/**
 * @constant
 * @type {object}
 */
const EXTENSION_ENERGY_CAPACITY = {
    0: 50,
    1: 50,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 100,
    8: 200
};

/**
 * @constant
 * @type {number}
 */
const ROAD_WEAROUT = 1;

/**
 * @constant
 * @type {number}
 */
const ROAD_DECAY_AMOUNT = 100;

/**
 * @constant
 * @type {number}
 */
const ROAD_DECAY_TIME = 1000;

/**
 * @constant
 * @type {number}
 */
const LINK_HITS = 1000;

/**
 * @constant
 * @type {number}
 */
const LINK_HITS_MAX = 1000;

/**
 * @constant
 * @type {number}
 */
const LINK_CAPACITY = 800;

/**
 * @constant
 * @type {number}
 */
const LINK_COOLDOWN = 1;

/**
 * @constant
 * @type {number}
 */
const LINK_LOSS_RATIO = 0.03;

/**
 * @constant
 * @type {number}
 */
const CONTAINER_HITS = 250000;

/**
 * @constant
 * @type {number}
 */
const CONTAINER_CAPACITY = 2000;

/**
 * @constant
 * @type {number}
 */
const CONTAINER_DECAY = 5000;

/**
 * @constant
 * @type {number}
 */
const CONTAINER_DECAY_TIME = 100;

/**
 * @constant
 * @type {number}
 */
const CONTAINER_DECAY_TIME_OWNED = 500;

/**
 * @constant
 * @type {number}
 */
const NUKER_HITS = 1000;

/**
 * @constant
 * @type {number}
 */
const NUKER_COOLDOWN = 100000;

/**
 * @constant
 * @type {number}
 */
const NUKER_ENERGY_CAPACITY = 300000;

/**
 * @constant
 * @type {number}
 */
const NUKER_GHODIUM_CAPACITY = 5000;

/**
 * @constant
 * @type {number}
 */
const NUKE_LAND_TIME = 50000;

/**
 * @constant
 * @type {number}
 */
const NUKE_RANGE = 10;

/**
 * @constant
 * @type {object}
 */
const NUKE_DAMAGE = {
    0: 10000000,
    2: 5000000
}; 

/**
 * @constant
 * @type {number}
 */
const FACTORY_HITS = 1000;
      
/**
 * @constant
 * @type {number}
 */
const FACTORY_CAPACITY = 50000;

/**
 * @constant
 * @type {number}
 */
const PORTAL_DECAY = 30000;

/**
 * @constant
 * @type {number}
 */
const TOMBSTONE_DECAY_PER_PART = 5;

/**
 * @constant
 * @type {string}
 */
const ORDER_SELL = 'sell';

/**
 * @constant
 * @type {string}
 */
const ORDER_BUY = 'buy';

/**
 * @constant
 * @type {number}
 */
const STORAGE_CAPACITY = 1000000;

/**
 * @constant
 * @type {number}
 */
const STORAGE_HITS = 10000;

/**
 * @constant
 * @type {number}
 */
const CARRY_CAPACITY = 50;

/**
 * @constant
 * @type {number}
 */
const HARVEST_POWER = 2;

/**
 * @constant
 * @type {number}
 */
const HARVEST_MINERAL_POWER = 1;

/**
 * @constant
 * @type {number}
 */
const REPAIR_POWER = 100;

/**
 * @constant
 * @type {number}
 */
const DISMANTLE_POWER = 100;

/**
 * @constant
 * @type {number}
 */
const BUILD_POWER = 5;

/**
 * @constant
 * @type {number}
 */
const ATTACK_POWER = 30;

/**
 * @constant
 * @type {number}
 */
const UPGRADE_CONTROLLER_POWER = 1;

/**
 * @constant
 * @type {number}
 */
const RANGED_ATTACK_POWER = 10;

/**
 * @constant
 * @type {number}
 */
const HEAL_POWER = 12;

/**
 * @constant
 * @type {number}
 */
const RANGED_HEAL_POWER = 4;

/**
 * @constant
 * @type {object}
 */
const CONSTRUCTION_COST = {
    spawn: 15000,
    extension: 3000,
    road: 300,
    constructedWall: 1,
    rampart: 1,
    link: 5000,
    storage: 30000,
    tower: 5000,
    observer: 8000,
    powerSpawn: 100000,
    extractor: 5000,
    lab: 50000,
    terminal: 100000,
    container: 5000,
    nuker: 100000
};

/**
 * @constant
 * @type {number}
 */
const CONSTRUCTION_COST_ROAD_SWAMP_RATIO = 5;

/**
 * @constant
 * @type {object}
 */
const CONTROLLER_LEVELS = {
    1: 200,
    2: 45000,
    3: 135000,
    4: 405000,
    5: 1215000,
    6: 3645000,
    7: 10935000
};

/**
 * @constant
 * @type {object}
 */
const CONTROLLER_STRUCTURES = {
    spawn: { 0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 2, 8: 3 },
    extension: { 0: 0, 1: 0, 2: 5, 3: 10, 4: 20, 5: 30, 6: 40, 7: 50, 8: 60 },
    link: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 2, 6: 3, 7: 4, 8: 6 },
    road: { 0: 2500, 1: 2500, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500 },
    constructedWall: { 1: 0, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500 },
    rampart: { 1: 0, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500 },
    storage: { 1: 0, 2: 0, 3: 0, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1 },
    tower: { 1: 0, 2: 0, 3: 1, 4: 1, 5: 1, 6: 2, 7: 2, 8: 4 },
    observer: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1 },
    powerSpawn: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1 }
};

/**
 * @constant
 * @type {object}
 */
const CONTROLLER_DOWNGRADE = {
    1: 20000,
    2: 5000,
    3: 10000,
    4: 20000,
    5: 40000,
    6: 60000,
    7: 100000,
    8: 150000
};

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_DOWNGRADE_RESTORE = 100;

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_DOWNGRADE_SAFEMODE_THRESHOLD = 5000;

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_CLAIM_DOWNGRADE = 0.2;

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_RESERVE = 1;

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_RESERVE_MAX = 5000;

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_MAX_UPGRADE_PER_TICK = 15;

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_ATTACK_BLOCKED_UPGRADE = 1000;

/**
 * @constant
 * @type {number}
 */
const CONTROLLER_NUKE_BLOCKED_UPGRADE = 200;

/**
 * @constant
 * @type {number}
 */
const TERMINAL_CAPACITY = 300000;

/**
 * @constant
 * @type {number}
 */
const TERMINAL_HITS = 3000;

/**
 * @constant
 * @type {number}
 */
const TERMINAL_SEND_COST = 0.1;

/**
 * @constant
 * @type {number}
 */
const TERMINAL_MIN_SEND = 100;

/**
 * @constant
 * @type {number}
 */
const TOWER_HITS = 3000;

/**
 * @constant
 * @type {number}
 */
const TOWER_CAPACITY = 1000;

/**
 * @constant
 * @type {number}
 */
const TOWER_ENERGY_COST = 10;

/**
 * @constant
 * @type {number}
 */
const TOWER_POWER_ATTACK = 600;

/**
 * @constant
 * @type {number}
 */
const TOWER_POWER_HEAL = 400;

/**
 * @constant
 * @type {number}
 */
const TOWER_POWER_REPAIR = 800;

/**
 * @constant
 * @type {number}
 */
const TOWER_OPTIMAL_RANGE = 5;

/**
 * @constant
 * @type {number}
 */
const TOWER_FALLOFF_RANGE = 20;

/**
 * @constant
 * @type {number}
 */
const TOWER_FALLOFF = 0.75;

/**
 * @constant
 * @type {number}
 */
const OBSERVER_HITS = 500;

/**
 * @constant
 * @type {number}
 */
const OBSERVER_RANGE = 10;

/**
 * @constant
 * @type {number}
 */
const POWER_BANK_HITS = 2000000;

/**
 * @constant
 * @type {number}
 */
const POWER_BANK_CAPACITY_MAX = 5000;

/**
 * @constant
 * @type {number}
 */
const POWER_BANK_CAPACITY_MIN = 500;

/**
 * @constant
 * @type {number}
 */
const POWER_BANK_CAPACITY_CRIT = 0.3;

/**
 * @constant
 * @type {number}
 */
const POWER_BANK_DECAY = 5000;

/**
 * @constant
 * @type {number}
 */
const POWER_BANK_HIT_BACK = 0.5;

/**
 * @constant
 * @type {number}
 */
const POWER_SPAWN_HITS = 5000;

/**
 * @constant
 * @type {number}
 */
const POWER_SPAWN_ENERGY_CAPACITY = 5000;

/**
 * @constant
 * @type {number}
 */
const POWER_SPAWN_POWER_CAPACITY = 100;

/**
 * @constant
 * @type {number}
 */
const POWER_SPAWN_ENERGY_RATIO = 50;

/**
 * @constant
 * @type {number}
 */
const LAB_HITS = 500;

/**
 * @constant
 * @type {number}
 */
const LAB_MINERAL_CAPACITY = 3000;

/**
 * @constant
 * @type {number}
 */
const LAB_ENERGY_CAPACITY = 2000;

/**
 * @constant
 * @type {number}
 */
const LAB_BOOST_ENERGY = 20;

/**
 * @constant
 * @type {number}
 */
const LAB_BOOST_MINERAL = 30;

/**
 * @constant
 * @type {number}
 */
const LAB_COOLDOWN = 10;

/**
 * @constant
 * @type {number}
 */
const GCL_POW = 2.4;

/**
 * @constant
 * @type {number}
 */
const GCL_MULTIPLY = 1000000;

/**
 * @constant
 * @type {number}
 */
const GCL_NOVICE = 3;

/**
 * @constant
 * @type {number}
 */
const TERRAIN_MASK_WALL = 1;

/**
 * @constant
 * @type {number}
 */
const TERRAIN_MASK_SWAMP = 2;

/**
 * @constant
 * @type {number}
 */
const TERRAIN_MASK_LAVA = 4;

/**
 * @constant
 * @type {number}
 */
const MAX_CONSTRUCTION_SITES = 100;

/**
 * @constant
 * @type {number}
 */
const MAX_CREEP_SIZE = 50;

/** LOOK CONSTANTS **/

/**
 * @constant
 * @type {string}
 */
const LOOK_CREEPS = "creep";

/**
 * @constant
 * @type {string}
 */
const LOOK_ENERGY = "energy";

/**
 * @constant
 * @type {string}
 */
const LOOK_RESOURCES = "resource";

/**
 * @constant
 * @type {string}
 */
const LOOK_SOURCES = "source";

/**
 * @constant
 * @type {string}
 */
const LOOK_MINERALS = "mineral";

/**
 * @constant
 * @type {string}
 */
const LOOK_STRUCTURES = "structure";

/**
 * @constant
 * @type {string}
 */
const LOOK_FLAGS = "flag";

/**
 * @constant
 * @type {string}
 */
const LOOK_CONSTRUCTION_SITES = "constructionSite";

/**
 * @constant
 * @type {string}
 */
const LOOK_NUKES = "nuke";

/**
 * @constant
 * @type {string}
 */
const LOOK_TERRAIN = "terrain";

/**
 * @constant
 * @type {string}
 */
const LOOK_TOMBSTONES = "tombstone";

/**
 * @constant
 * @type {string}
 */
const SYSTEM_USERNAME = 'Screeps';

/**
 * @constant
 * @deprecated use SIGN_PLANNED_AREA instead.
 * @type {string}
 */
const SIGN_NOVICE_AREA = 'A new Novice Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';

/**
 * @constant
 * @deprecated use SIGN_PLANNED_AREA instead.
 * @type {string}
 */
const SIGN_RESPAWN_AREA = 'A new Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';

/**
 * @constant
 * @type {string}
 */
const SIGN_PLANNED_AREA = 'A new Novice or Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';

/**
 * @constant
 * @type {number}
 */
const TERMINAL_COOLDOWN = 10;

/**
 * @constant
 * @type {number}
 */
const POWER_LEVEL_MULTIPLY = 1000;

/**
 * @constant
 * @type {number}
 */
const POWER_LEVEL_POW = 2;

/**
 * @constant
 * @type {number}
 */
const POWER_CREEP_SPAWN_COOLDOWN = 8*3600*1000;

/**
 * @constant
 * @type {number}
 */
const POWER_CREEP_DELETE_COOLDOWN = 24*3600*1000;

/**
 * @constant
 * @type {number}
 */
const POWER_CREEP_MAX_LEVEL = 25;

/**
 * @constant
 * @type {number}
 */
const POWER_CREEP_LIFE_TIME = 5000;

/**
 * @constant
 * @type {object}
 */
const POWER_CLASS = { OPERATOR: 'operator' };

/**
 * @constant
 * @type {number}
 */
const PWR_GENERATE_OPS = 1;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_SPAWN = 2;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_TOWER = 3;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_STORAGE = 4;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_LAB = 5;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_EXTENSION = 6;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_OBSERVER = 7;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_TERMINAL = 8;

/**
 * @constant
 * @type {number}
 */
const PWR_DISRUPT_SPAWN = 9;

/**
 * @constant
 * @type {number}
 */
const PWR_DISRUPT_TOWER = 10;

/**
 * @constant
 * @type {number}
 */
const PWR_DISRUPT_SOURCE = 11;

/**
 * @constant
 * @type {number}
 */
const PWR_SHIELD = 12;

/**
 * @constant
 * @type {number}
 */
const PWR_REGEN_SOURCE = 13;

/**
 * @constant
 * @type {number}
 */
const PWR_REGEN_MINERAL = 14;

/**
 * @constant
 * @type {number}
 */
const PWR_DISRUPT_TERMINAL = 15;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_POWER = 16;

/**
 * @constant
 * @type {number}
 */
const PWR_FORTIFY = 17;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_CONTROLLER = 18;

/**
 * @constant
 * @type {number}
 */
const PWR_OPERATE_FACTORY = 19;

/**
 * @constant
 * @type {object}
 */
const POWER_INFO = {
        [exports.PWR_GENERATE_OPS]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 50,
            effect: [1, 2, 4, 6, 8]
        },
        [exports.PWR_OPERATE_SPAWN]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 300,
            duration: 1000,
            range: 3,
            ops: 100,
            effect: [0.9, 0.7, 0.5, 0.35, 0.2]
        },
        [exports.PWR_OPERATE_TOWER]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 10,
            duration: 100,
            range: 3,
            ops: 10,
            effect: [1.1, 1.2, 1.3, 1.4, 1.5]
        },
        [exports.PWR_OPERATE_STORAGE]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 800,
            duration: 1000,
            range: 3,
            ops: 100,
            effect: [500000,1000000,2000000,4000000,7000000]
        },
        [exports.PWR_OPERATE_LAB]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 50,
            duration: 1000,
            range: 3,
            ops: 10,
            effect: [2,4,6,8,10]
        },
        [exports.PWR_OPERATE_EXTENSION]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 50,
            range: 3,
            ops: 2,
            effect: [0.2, 0.4, 0.6, 0.8, 1.0]
        },
        [exports.PWR_OPERATE_OBSERVER]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 400,
            duration: [200,400,600,800,1000],
            range: 3,
            ops: 10,
        },
        [exports.PWR_OPERATE_TERMINAL]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 500,
            duration: 1000,
            range: 3,
            ops: 100,
            effect: [0.9, 0.8, 0.7, 0.6, 0.5]
        },
        [exports.PWR_DISRUPT_SPAWN]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 5,
            range: 20,
            ops: 10,
            duration: [1,2,3,4,5]
        },
        [exports.PWR_DISRUPT_TOWER]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 0,
            duration: 5,
            range: 3,
            ops: 10,
            effect: [0.9, 0.8, 0.7, 0.6, 0.5],
        },
        [exports.PWR_DISRUPT_SOURCE]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 100,
            range: 3,
            ops: 100,
            duration: [100, 200, 300, 400, 500]
        },
        [exports.PWR_SHIELD]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            effect: [5000, 10000, 15000, 20000, 25000],
            duration: 50,
            cooldown: 20,
            energy: 100,
        },
        [exports.PWR_REGEN_SOURCE]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [10, 11, 12, 14, 22],
            cooldown: 100,
            duration: 300,
            range: 3,
            effect: [50,100,150,200,250],
            period: 15
        },
        [exports.PWR_REGEN_MINERAL]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [10, 11, 12, 14, 22],
            cooldown: 100,
            duration: 100,
            range: 3,
            effect: [2,4,6,8,10],
            period: 10
        },
        [exports.PWR_DISRUPT_TERMINAL]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [20, 21, 22, 23, 24],
            cooldown: 8,
            duration: 10,
            range: 50,
            ops: [50,40,30,20,10]

        },
        [exports.PWR_FORTIFY]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 5,
            range: 3,
            ops: 5,
            duration: [1, 2, 3, 4, 5]
        },
        [exports.PWR_OPERATE_POWER]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [10, 11, 12, 14, 22],
            cooldown: 1000,
            range: 3,
            duration: 800,
            ops: 200,
            effect: [1, 2, 3, 4, 5]
        },
        [exports.PWR_OPERATE_CONTROLLER]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [20, 21, 22, 23, 24],
            cooldown: 1000,
            range: 3,
            duration: 800,
            ops: 200,
            effect: [10, 20, 30, 40, 50]
        },
        [exports.PWR_OPERATE_FACTORY]: {
            className: exports.POWER_CLASS.OPERATOR,
            level: [0, 2, 7, 14, 22],
            cooldown: 1000,
            range: 3,
            duration: 800,
            ops: 100
        },
    };


global.MOVE = MOVE;
global.WORK = WORK;
global.CARRY = CARRY;
global.ATTACK = ATTACK;
global.RANGED_ATTACK = RANGED_ATTACK;
global.TOUGH = TOUGH;
global.HEAL = HEAL;
global.CLAIM = CLAIM;
global.TOP = TOP;
global.TOP_RIGHT = TOP_RIGHT;
global.RIGHT = RIGHT;
global.BOTTOM_RIGHT = BOTTOM_RIGHT;
global.BOTTOM = BOTTOM;
global.BOTTOM_LEFT = BOTTOM_LEFT;
global.LEFT = LEFT;
global.TOP_LEFT = TOP_LEFT;
global.OK = OK;
global.ERR_NOT_OWNER = ERR_NOT_OWNER;
global.ERR_NO_PATH = ERR_NO_PATH;
global.ERR_NAME_EXISTS = ERR_NAME_EXISTS;
global.ERR_BUSY = ERR_BUSY;
global.ERR_NOT_FOUND = ERR_NOT_FOUND;
global.ERR_NOT_ENOUGH_ENERGY = ERR_NOT_ENOUGH_ENERGY;
global.ERR_NOT_ENOUGH_RESOURCES = ERR_NOT_ENOUGH_RESOURCES;
global.ERR_NOT_ENOUGH_EXTENSIONS = ERR_NOT_ENOUGH_EXTENSIONS;
global.ERR_INVALID_TARGET = ERR_INVALID_TARGET;
global.ERR_FULL = ERR_FULL;
global.ERR_NOT_IN_RANGE = ERR_NOT_IN_RANGE;
global.ERR_INVALID_ARGS = ERR_INVALID_ARGS;
global.ERR_TIRED = ERR_TIRED;
global.ERR_NO_BODYPART = ERR_NO_BODYPART;
global.ERR_RCL_NOT_ENOUGH = ERR_RCL_NOT_ENOUGH;
global.ERR_GCL_NOT_ENOUGH = ERR_GCL_NOT_ENOUGH;
global.COLOR_RED = COLOR_RED;
global.COLOR_PURPLE = COLOR_PURPLE;
global.COLOR_BLUE = COLOR_BLUE;
global.COLOR_CYAN = COLOR_CYAN;
global.COLOR_GREEN = COLOR_GREEN;
global.COLOR_YELLOW = COLOR_YELLOW;
global.COLOR_ORANGE = COLOR_ORANGE;
global.COLOR_BROWN = COLOR_BROWN;
global.COLOR_GREY = COLOR_GREY;
global.COLOR_WHITE = COLOR_WHITE;
global.FIND_EXIT_TOP = FIND_EXIT_TOP;
global.FIND_EXIT_RIGHT = FIND_EXIT_RIGHT;
global.FIND_EXIT_BOTTOM = FIND_EXIT_BOTTOM;
global.FIND_EXIT_LEFT = FIND_EXIT_LEFT;
global.FIND_EXIT = FIND_EXIT;
global.FIND_CREEPS = FIND_CREEPS;
global.FIND_MY_CREEPS = FIND_MY_CREEPS;
global.FIND_HOSTILE_CREEPS = FIND_HOSTILE_CREEPS;
global.FIND_SOURCES_ACTIVE = FIND_SOURCES_ACTIVE;
global.FIND_SOURCES = FIND_SOURCES;
global.FIND_DROPPED_RESOURCES = FIND_DROPPED_RESOURCES;
global.FIND_STRUCTURES = FIND_STRUCTURES;
global.FIND_MY_STRUCTURES = FIND_MY_STRUCTURES;
global.FIND_HOSTILE_STRUCTURES = FIND_HOSTILE_STRUCTURES;
global.FIND_FLAGS = FIND_FLAGS;
global.FIND_CONSTRUCTION_SITES = FIND_CONSTRUCTION_SITES;
global.FIND_MY_SPAWNS = FIND_MY_SPAWNS;
global.FIND_HOSTILE_SPAWNS = FIND_HOSTILE_SPAWNS;
global.FIND_MY_CONSTRUCTION_SITES = FIND_MY_CONSTRUCTION_SITES;
global.FIND_HOSTILE_CONSTRUCTION_SITES = FIND_HOSTILE_CONSTRUCTION_SITES;
global.FIND_MINERALS = FIND_MINERALS;
global.FIND_NUKES = FIND_NUKES;
global.FIND_TOMBSTONES = FIND_TOMBSTONES;
global.FIND_POWER_CREEPS = FIND_POWER_CREEPS;
global.FIND_MY_POWER_CREEPS = FIND_MY_POWER_CREEPS;
global.FIND_HOSTILE_POWER_CREEPS = FIND_HOSTILE_POWER_CREEPS;
global.MODE_SIMULATION = MODE_SIMULATION;
global.MODE_SURVIVAL = MODE_SURVIVAL;
global.MODE_WORLD = MODE_WORLD;
global.MODE_ARENA = MODE_ARENA;
global.STRUCTURE_EXTENSION = STRUCTURE_EXTENSION;
global.STRUCTURE_RAMPART = STRUCTURE_RAMPART;
global.STRUCTURE_ROAD = STRUCTURE_ROAD;
global.STRUCTURE_SPAWN = STRUCTURE_SPAWN;
global.STRUCTURE_WALL = STRUCTURE_WALL;
global.STRUCTURE_LINK = STRUCTURE_LINK;
global.STRUCTURE_KEEPER_LAIR = STRUCTURE_KEEPER_LAIR;
global.STRUCTURE_CONTROLLER = STRUCTURE_CONTROLLER;
global.STRUCTURE_STORAGE = STRUCTURE_STORAGE;
global.STRUCTURE_TOWER = STRUCTURE_TOWER;
global.STRUCTURE_OBSERVER = STRUCTURE_OBSERVER;
global.STRUCTURE_POWER_BANK = STRUCTURE_POWER_BANK;
global.STRUCTURE_POWER_SPAWN = STRUCTURE_POWER_SPAWN;
global.STRUCTURE_PORTAL = STRUCTURE_PORTAL;
global.STRUCTURE_EXTRACTOR = STRUCTURE_EXTRACTOR;
global.STRUCTURE_LAB = STRUCTURE_LAB;
global.STRUCTURE_TERMINAL = STRUCTURE_TERMINAL;
global.STRUCTURE_CONTAINER = STRUCTURE_CONTAINER;
global.STRUCTURE_NUKER = STRUCTURE_NUKER;
global.STRUCTURE_FACTORY = STRUCTURE_FACTORY;
global.STRUCTURE_INVADER_CORE = STRUCTURE_INVADER_CORE;
global.SUBSCRIPTION_TOKEN = SUBSCRIPTION_TOKEN;
global.RESOURCE_ENERGY = RESOURCE_ENERGY;
global.RESOURCE_POWER = RESOURCE_POWER;
global.RESOURCE_HYDROGEN = RESOURCE_HYDROGEN;
global.RESOURCE_OXYGEN = RESOURCE_OXYGEN;
global.RESOURCE_UTRIUM = RESOURCE_UTRIUM;
global.RESOURCE_KEANIUM = RESOURCE_KEANIUM;
global.RESOURCE_LEMERGIUM = RESOURCE_LEMERGIUM;
global.RESOURCE_ZYNTHIUM = RESOURCE_ZYNTHIUM;
global.RESOURCE_CATALYST = RESOURCE_CATALYST;
global.RESOURCE_OPS = RESOURCE_OPS;
global.RESOURCE_HYDROXIDE = RESOURCE_HYDROXIDE;
global.RESOURCE_ZYNTHIUM_KEANITE = RESOURCE_ZYNTHIUM_KEANITE;
global.RESOURCE_UTRIUM_LEMERGITE = RESOURCE_UTRIUM_LEMERGITE;
global.RESOURCE_GHODIUM = RESOURCE_GHODIUM;
global.RESOURCE_UTRIUM_HYDRIDE = RESOURCE_UTRIUM_HYDRIDE;
global.RESOURCE_UTRIUM_OXIDE = RESOURCE_UTRIUM_OXIDE;
global.RESOURCE_KEANIUM_HYDRIDE = RESOURCE_KEANIUM_HYDRIDE;
global.RESOURCE_KEANIUM_OXIDE = RESOURCE_KEANIUM_OXIDE;
global.RESOURCE_LEMERGIUM_HYDRIDE = RESOURCE_LEMERGIUM_HYDRIDE;
global.RESOURCE_LEMERGIUM_OXIDE = RESOURCE_LEMERGIUM_OXIDE;
global.RESOURCE_ZYNTHIUM_HYDRIDE = RESOURCE_ZYNTHIUM_HYDRIDE;
global.RESOURCE_ZYNTHIUM_OXIDE = RESOURCE_ZYNTHIUM_OXIDE;
global.RESOURCE_GHODIUM_HYDRIDE = RESOURCE_GHODIUM_HYDRIDE;
global.RESOURCE_GHODIUM_OXIDE = RESOURCE_GHODIUM_OXIDE;
global.RESOURCE_UTRIUM_ACID = RESOURCE_UTRIUM_ACID;
global.RESOURCE_UTRIUM_ALKALIDE = RESOURCE_UTRIUM_ALKALIDE;
global.RESOURCE_KEANIUM_ACID = RESOURCE_KEANIUM_ACID;
global.RESOURCE_KEANIUM_ALKALIDE = RESOURCE_KEANIUM_ALKALIDE;
global.RESOURCE_LEMERGIUM_ACID = RESOURCE_LEMERGIUM_ACID;
global.RESOURCE_LEMERGIUM_ALKALIDE = RESOURCE_LEMERGIUM_ALKALIDE;
global.RESOURCE_ZYNTHIUM_ACID = RESOURCE_ZYNTHIUM_ACID;
global.RESOURCE_ZYNTHIUM_ALKALIDE = RESOURCE_ZYNTHIUM_ALKALIDE;
global.RESOURCE_GHODIUM_ACID = RESOURCE_GHODIUM_ACID;
global.RESOURCE_GHODIUM_ALKALIDE = RESOURCE_GHODIUM_ALKALIDE;
global.RESOURCE_CATALYZED_UTRIUM_ACID = RESOURCE_CATALYZED_UTRIUM_ACID;
global.RESOURCE_CATALYZED_UTRIUM_ALKALIDE = RESOURCE_CATALYZED_UTRIUM_ALKALIDE;
global.RESOURCE_CATALYZED_KEANIUM_ACID = RESOURCE_CATALYZED_KEANIUM_ACID;
global.RESOURCE_CATALYZED_KEANIUM_ALKALIDE = RESOURCE_CATALYZED_KEANIUM_ALKALIDE;
global.RESOURCE_CATALYZED_LEMERGIUM_ACID = RESOURCE_CATALYZED_LEMERGIUM_ACID;
global.RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE;
global.RESOURCE_CATALYZED_ZYNTHIUM_ACID = RESOURCE_CATALYZED_ZYNTHIUM_ACID;
global.RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE;
global.RESOURCE_CATALYZED_GHODIUM_ACID = RESOURCE_CATALYZED_GHODIUM_ACID;
global.RESOURCE_CATALYZED_GHODIUM_ALKALIDE = RESOURCE_CATALYZED_GHODIUM_ALKALIDE;
global.RESOURCE_SILICON = RESOURCE_SILICON;
global.RESOURCE_METAL = RESOURCE_METAL;
global.RESOURCE_BIOMASS = RESOURCE_BIOMASS;
global.RESOURCE_MIST = RESOURCE_MIST;
global.RESOURCE_UTRIUM_BAR = RESOURCE_UTRIUM_BAR;
global.RESOURCE_LEMERGIUM_BAR = RESOURCE_LEMERGIUM_BAR;
global.RESOURCE_ZYNTHIUM_BAR = RESOURCE_ZYNTHIUM_BAR;
global.RESOURCE_KEANIUM_BAR = RESOURCE_KEANIUM_BAR;
global.RESOURCE_GHODIUM_MELT = RESOURCE_GHODIUM_MELT;
global.RESOURCE_OXIDANT = RESOURCE_OXIDANT;
global.RESOURCE_REDUCTANT = RESOURCE_REDUCTANT;
global.RESOURCE_PURIFIER = RESOURCE_PURIFIER;
global.RESOURCE_BATTERY = RESOURCE_BATTERY;
global.RESOURCE_COMPOSITE = RESOURCE_COMPOSITE;
global.RESOURCE_CRYSTAL = RESOURCE_CRYSTAL;
global.RESOURCE_LIQUID = RESOURCE_LIQUID;
global.RESOURCE_WIRE = RESOURCE_WIRE;
global.RESOURCE_SWITCH = RESOURCE_SWITCH;
global.RESOURCE_TRANSISTOR = RESOURCE_TRANSISTOR;
global.RESOURCE_MICROCHIP = RESOURCE_MICROCHIP;
global.RESOURCE_CIRCUIT = RESOURCE_CIRCUIT;
global.RESOURCE_DEVICE = RESOURCE_DEVICE;
global.RESOURCE_CELL = RESOURCE_CELL;
global.RESOURCE_PHLEGM = RESOURCE_PHLEGM;
global.RESOURCE_TISSUE = RESOURCE_TISSUE;
global.RESOURCE_MUSCLE = RESOURCE_MUSCLE;
global.RESOURCE_ORGANOID = RESOURCE_ORGANOID;
global.RESOURCE_ORGANISM = RESOURCE_ORGANISM;
global.RESOURCE_ALLOY = RESOURCE_ALLOY;
global.RESOURCE_TUBE = RESOURCE_TUBE;
global.RESOURCE_FIXTURES = RESOURCE_FIXTURES;
global.RESOURCE_FRAME = RESOURCE_FRAME;
global.RESOURCE_HYDRAULICS = RESOURCE_HYDRAULICS;
global.RESOURCE_MACHINE = RESOURCE_MACHINE;
global.RESOURCE_CONDENSATE = RESOURCE_CONDENSATE;
global.RESOURCE_CONCENTRATE = RESOURCE_CONCENTRATE;
global.RESOURCE_EXTRACT = RESOURCE_EXTRACT;
global.RESOURCE_SPIRIT = RESOURCE_SPIRIT;
global.RESOURCE_EMANATION = RESOURCE_EMANATION;
global.RESOURCE_ESSENCE = RESOURCE_ESSENCE;
global.REACTIONS = REACTIONS;
global.BOOSTS = BOOSTS;
global.RESOURCES_ALL = RESOURCES_ALL;
global.BODYPARTS_ALL = BODYPARTS_ALL;
global.COLORS_ALL = COLORS_ALL;
global.REACTION_TIME = REACTION_TIME;
global.BODYPART_COST = BODYPART_COST;
global.CREEP_SPAWN_TIME = CREEP_SPAWN_TIME;
global.CREEP_RENEW_RATIO = CREEP_RENEW_RATIO;
global.CREEP_LIFE_TIME = CREEP_LIFE_TIME;
global.CREEP_CLAIM_LIFE_TIME = CREEP_CLAIM_LIFE_TIME;
global.CREEP_CORPSE_RATE = CREEP_CORPSE_RATE;
global.OBSTACLE_OBJECT_TYPES = OBSTACLE_OBJECT_TYPES;
global.ENERGY_REGEN_TIME = ENERGY_REGEN_TIME;
global.ENERGY_DECAY = ENERGY_DECAY;
global.MINERAL_REGEN_TIME = MINERAL_REGEN_TIME;
global.MINERAL_MIN_AMOUNT = MINERAL_MIN_AMOUNT;
global.MINERAL_RANDOM_FACTOR = MINERAL_RANDOM_FACTOR;
global.REPAIR_COST = REPAIR_COST;
global.DISMANTLE_COST = DISMANTLE_COST;
global.RAMPART_DECAY_AMOUNT = RAMPART_DECAY_AMOUNT;
global.RAMPART_DECAY_TIME = RAMPART_DECAY_TIME;
global.RAMPART_HITS = RAMPART_HITS;
global.RAMPART_HITS_MAX = RAMPART_HITS_MAX;
global.SPAWN_HITS = SPAWN_HITS;
global.SPAWN_ENERGY_START = SPAWN_ENERGY_START;
global.SPAWN_ENERGY_CAPACITY = SPAWN_ENERGY_CAPACITY;
global.SOURCE_ENERGY_CAPACITY = SOURCE_ENERGY_CAPACITY;
global.SOURCE_ENERGY_NEUTRAL_CAPACITY = SOURCE_ENERGY_NEUTRAL_CAPACITY;
global.SOURCE_ENERGY_KEEPER_CAPACITY = SOURCE_ENERGY_KEEPER_CAPACITY;
global.ROAD_HITS = ROAD_HITS;
global.WALL_HITS = WALL_HITS;
global.WALL_HITS_MAX = WALL_HITS_MAX;
global.EXTENSION_HITS = EXTENSION_HITS;
global.EXTENSION_ENERGY_CAPACITY = EXTENSION_ENERGY_CAPACITY;
global.ROAD_WEAROUT = ROAD_WEAROUT;
global.ROAD_DECAY_AMOUNT = ROAD_DECAY_AMOUNT;
global.ROAD_DECAY_TIME = ROAD_DECAY_TIME;
global.LINK_HITS = LINK_HITS;
global.LINK_HITS_MAX = LINK_HITS_MAX;
global.LINK_CAPACITY = LINK_CAPACITY;
global.LINK_COOLDOWN = LINK_COOLDOWN;
global.LINK_LOSS_RATIO = LINK_LOSS_RATIO;
global.CONTAINER_HITS = CONTAINER_HITS;
global.CONTAINER_CAPACITY = CONTAINER_CAPACITY;
global.CONTAINER_DECAY = CONTAINER_DECAY;
global.CONTAINER_DECAY_TIME = CONTAINER_DECAY_TIME;
global.CONTAINER_DECAY_TIME_OWNED = CONTAINER_DECAY_TIME_OWNED;
global.NUKER_HITS = NUKER_HITS;
global.NUKER_COOLDOWN = NUKER_COOLDOWN;
global.NUKER_ENERGY_CAPACITY = NUKER_ENERGY_CAPACITY;
global.NUKER_GHODIUM_CAPACITY = NUKER_GHODIUM_CAPACITY;
global.NUKE_LAND_TIME = NUKE_LAND_TIME;
global.NUKE_RANGE = NUKE_RANGE;
global.NUKE_DAMAGE = NUKE_DAMAGE;
global.FACTORY_HITS = FACTORY_HITS;
global.FACTORY_CAPACITY = FACTORY_CAPACITY;
global.PORTAL_DECAY = PORTAL_DECAY;
global.TOMBSTONE_DECAY_PER_PART = TOMBSTONE_DECAY_PER_PART;
global.ORDER_SELL = ORDER_SELL;
global.ORDER_BUY = ORDER_BUY;
global.STORAGE_CAPACITY = STORAGE_CAPACITY;
global.STORAGE_HITS = STORAGE_HITS;
global.CARRY_CAPACITY = CARRY_CAPACITY;
global.HARVEST_POWER = HARVEST_POWER;
global.HARVEST_MINERAL_POWER = HARVEST_MINERAL_POWER;
global.REPAIR_POWER = REPAIR_POWER;
global.DISMANTLE_POWER = DISMANTLE_POWER;
global.BUILD_POWER = BUILD_POWER;
global.ATTACK_POWER = ATTACK_POWER;
global.UPGRADE_CONTROLLER_POWER = UPGRADE_CONTROLLER_POWER;
global.RANGED_ATTACK_POWER = RANGED_ATTACK_POWER;
global.HEAL_POWER = HEAL_POWER;
global.RANGED_HEAL_POWER = RANGED_HEAL_POWER;
global.CONSTRUCTION_COST = CONSTRUCTION_COST;
global.CONSTRUCTION_COST_ROAD_SWAMP_RATIO = CONSTRUCTION_COST_ROAD_SWAMP_RATIO;
global.CONTROLLER_LEVELS = CONTROLLER_LEVELS;
global.CONTROLLER_STRUCTURES = CONTROLLER_STRUCTURES;
global.CONTROLLER_DOWNGRADE = CONTROLLER_DOWNGRADE;
global.CONTROLLER_DOWNGRADE_RESTORE = CONTROLLER_DOWNGRADE_RESTORE;
global.CONTROLLER_DOWNGRADE_SAFEMODE_THRESHOLD = CONTROLLER_DOWNGRADE_SAFEMODE_THRESHOLD;
global.CONTROLLER_CLAIM_DOWNGRADE = CONTROLLER_CLAIM_DOWNGRADE;
global.CONTROLLER_RESERVE = CONTROLLER_RESERVE;
global.CONTROLLER_RESERVE_MAX = CONTROLLER_RESERVE_MAX;
global.CONTROLLER_MAX_UPGRADE_PER_TICK = CONTROLLER_MAX_UPGRADE_PER_TICK;
global.CONTROLLER_ATTACK_BLOCKED_UPGRADE = CONTROLLER_ATTACK_BLOCKED_UPGRADE;
global.CONTROLLER_NUKE_BLOCKED_UPGRADE = CONTROLLER_NUKE_BLOCKED_UPGRADE;
global.TERMINAL_CAPACITY = TERMINAL_CAPACITY;
global.TERMINAL_HITS = TERMINAL_HITS;
global.TERMINAL_SEND_COST = TERMINAL_SEND_COST;
global.TERMINAL_MIN_SEND = TERMINAL_MIN_SEND;
global.TOWER_HITS = TOWER_HITS;
global.TOWER_CAPACITY = TOWER_CAPACITY;
global.TOWER_ENERGY_COST = TOWER_ENERGY_COST;
global.TOWER_POWER_ATTACK = TOWER_POWER_ATTACK;
global.TOWER_POWER_HEAL = TOWER_POWER_HEAL;
global.TOWER_POWER_REPAIR = TOWER_POWER_REPAIR;
global.TOWER_OPTIMAL_RANGE = TOWER_OPTIMAL_RANGE;
global.TOWER_FALLOFF_RANGE = TOWER_FALLOFF_RANGE;
global.TOWER_FALLOFF = TOWER_FALLOFF;
global.OBSERVER_HITS = OBSERVER_HITS;
global.OBSERVER_RANGE = OBSERVER_RANGE;
global.POWER_BANK_HITS = POWER_BANK_HITS;
global.POWER_BANK_CAPACITY_MAX = POWER_BANK_CAPACITY_MAX;
global.POWER_BANK_CAPACITY_MIN = POWER_BANK_CAPACITY_MIN;
global.POWER_BANK_CAPACITY_CRIT = POWER_BANK_CAPACITY_CRIT;
global.POWER_BANK_DECAY = POWER_BANK_DECAY;
global.POWER_BANK_HIT_BACK = POWER_BANK_HIT_BACK;
global.POWER_SPAWN_HITS = POWER_SPAWN_HITS;
global.POWER_SPAWN_ENERGY_CAPACITY = POWER_SPAWN_ENERGY_CAPACITY;
global.POWER_SPAWN_POWER_CAPACITY = POWER_SPAWN_POWER_CAPACITY;
global.POWER_SPAWN_ENERGY_RATIO = POWER_SPAWN_ENERGY_RATIO;
global.LAB_HITS = LAB_HITS;
global.LAB_MINERAL_CAPACITY = LAB_MINERAL_CAPACITY;
global.LAB_ENERGY_CAPACITY = LAB_ENERGY_CAPACITY;
global.LAB_BOOST_ENERGY = LAB_BOOST_ENERGY;
global.LAB_BOOST_MINERAL = LAB_BOOST_MINERAL;
global.LAB_COOLDOWN = LAB_COOLDOWN;
global.GCL_POW = GCL_POW;
global.GCL_MULTIPLY = GCL_MULTIPLY;
global.GCL_NOVICE = GCL_NOVICE;
global.TERRAIN_MASK_WALL = TERRAIN_MASK_WALL;
global.TERRAIN_MASK_SWAMP = TERRAIN_MASK_SWAMP;
global.TERRAIN_MASK_LAVA = TERRAIN_MASK_LAVA;
global.MAX_CONSTRUCTION_SITES = MAX_CONSTRUCTION_SITES;
global.MAX_CREEP_SIZE = MAX_CREEP_SIZE;
global.LOOK_CREEPS = LOOK_CREEPS;
global.LOOK_ENERGY = LOOK_ENERGY;
global.LOOK_RESOURCES = LOOK_RESOURCES;
global.LOOK_SOURCES = LOOK_SOURCES;
global.LOOK_MINERALS = LOOK_MINERALS;
global.LOOK_STRUCTURES = LOOK_STRUCTURES;
global.LOOK_FLAGS = LOOK_FLAGS;
global.LOOK_CONSTRUCTION_SITES = LOOK_CONSTRUCTION_SITES;
global.LOOK_NUKES = LOOK_NUKES;
global.LOOK_TERRAIN = LOOK_TERRAIN;
global.LOOK_TOMBSTONES = LOOK_TOMBSTONES;
global.SYSTEM_USERNAME = SYSTEM_USERNAME;
global.SIGN_NOVICE_AREA = SIGN_NOVICE_AREA;
global.SIGN_RESPAWN_AREA = SIGN_RESPAWN_AREA;
global.SIGN_PLANNED_AREA = SIGN_PLANNED_AREA;
global.TERMINAL_COOLDOWN = TERMINAL_COOLDOWN;
global.POWER_LEVEL_MULTIPLY = POWER_LEVEL_MULTIPLY;
global.POWER_LEVEL_POW = POWER_LEVEL_POW;
global.POWER_CREEP_SPAWN_COOLDOWN = POWER_CREEP_SPAWN_COOLDOWN;
global.POWER_CREEP_DELETE_COOLDOWN = POWER_CREEP_DELETE_COOLDOWN;
global.POWER_CREEP_MAX_LEVEL = POWER_CREEP_MAX_LEVEL;
global.POWER_CREEP_LIFE_TIME = POWER_CREEP_LIFE_TIME;
global.POWER_CLASS = POWER_CLASS;
global.PWR_GENERATE_OPS = PWR_GENERATE_OPS;
global.PWR_OPERATE_SPAWN = PWR_OPERATE_SPAWN;
global.PWR_OPERATE_TOWER = PWR_OPERATE_TOWER;
global.PWR_OPERATE_STORAGE = PWR_OPERATE_STORAGE;
global.PWR_OPERATE_LAB = PWR_OPERATE_LAB;
global.PWR_OPERATE_EXTENSION = PWR_OPERATE_EXTENSION;
global.PWR_OPERATE_OBSERVER = PWR_OPERATE_OBSERVER;
global.PWR_OPERATE_TERMINAL = PWR_OPERATE_TERMINAL;
global.PWR_DISRUPT_SPAWN = PWR_DISRUPT_SPAWN;
global.PWR_DISRUPT_TOWER = PWR_DISRUPT_TOWER;
global.PWR_DISRUPT_SOURCE = PWR_DISRUPT_SOURCE;
global.PWR_SHIELD = PWR_SHIELD;
global.PWR_REGEN_SOURCE = PWR_REGEN_SOURCE;
global.PWR_REGEN_MINERAL = PWR_REGEN_MINERAL;
global.PWR_DISRUPT_TERMINAL = PWR_DISRUPT_TERMINAL;
global.PWR_OPERATE_POWER = PWR_OPERATE_POWER;
global.PWR_FORTIFY = PWR_FORTIFY;
global.PWR_OPERATE_CONTROLLER = PWR_OPERATE_CONTROLLER;
global.PWR_OPERATE_FACTORY = PWR_OPERATE_FACTORY;
global.POWER_INFO = POWER_INFO;
