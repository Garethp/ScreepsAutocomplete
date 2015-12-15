/**
 * A site of a structure which is currently under construction. A construction site can be created using the 'Construct'
 * button at the left of the game field or the Room.createConstructionSite() method.
 *
 * Construction sites are visible to their owners only.
 *
 *
 * @class
 * @constructor
 */
ConstructionSite = function () {

};

ConstructionSite.prototype = {
	/**
	 * A unique object identificator.
	 *
	 * @type {string}
	 */
	id: "",

	/**
	 * An object with the structure’s owner info.
	 *
	 * @type Owner
	 */
	owner: null,

	/**
	 * The link to the Room object of this structure.
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
	 * The current construction progress.
	 *
	 * @type Number
	 */
	progress: 0,

	/**
	 * The total construction progress needed for the structure to be built.
	 *
	 * @type Number
	 */
	progressTotal: 0,

	/**
	 * One of the following constants:
	 *  - global.STRUCTURE_EXTENSION
	 *  - global.STRUCTURE_RAMPART
	 *  - global.STRUCTURE_ROAD
	 *  - global.STRUCTURE_SPAWN
	 *  - global.STRUCTURE_WALL
	 *  - global.STRUCTURE_LINK
	 *  - global.STRUCTURE_STORAGE
	 *
	 *  @type string
	 */
	structureType: null,

	/**
	 * The remaining amount of game ticks after which the construction site will decay. The counter is refreshed on each
	 * build action.
	 *
	 * @type {Number}
	 */
	ticksToLive: 0,

	/**
	 * Whether this is your own construction site.
	 *
	 * @type Boolean
	 */
	my: true,

	/**
	 * Remove the construction site.
	 */
	remove: function () {
	}
};