/**
 * An object representing one of the following structures: extension, road, rampart, constructed wall.
 *
 * @class
 * @constructor
 */
Structure = function()
{

};

Structure.prototype = {
	/**
	 * A unique object identificator.
	 *
	 * @type string
	 */
	id: "",

	/**
	 * An object with the structure’s owner info containing username
	 *
	 * @type Object
	 */
	owner: "",

	/**
	 * The link to the Room object. May not be available in case a flag is placed in a room which you do not have access to.
	 *
	 * @type Room
	 */
	room: null,

	/**
	 * An object representing the position of this structure in the room.
	 *
	 * @type RoomPosition
	 */
	pos: null,

	/**
	 * The current amount of hit points of the structure.
	 *
	 * @type number
	 */
	hits: 0,

	/**
	 * The total amount of hit points of the structure.
	 *
	 * @type number
	 */
	hitsMax: 0,

	/**
	 * One of the game constants
	 *
	 * @type number
	 */
	structureType: "",

	/**
	 * Whether this is your own structure.
	 *
	 * @type boolean
	 */
	my: true,

	/**
	 * The amount of energy containing in the extension.
	 *
	 * @type number
	 */
	energy: 0,

	/**
	 * The total amount of energy the extension can contain.
	 *
	 * @type number
	 */
	energyCapacity: 0
};