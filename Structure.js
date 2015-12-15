/**
 * An object representing one of the following structures: extension, road, rampart, constructed wall.
 *
 * @class
 * @constructor
 */
Structure = function () {

};

Structure.prototype = {
	/**
	 * A unique object identificator.
	 *
	 * @type {String}
	 */
	id: "",

	/**
	 * An object with the structure’s owner info containing username
	 *
	 * @type {Owner}
	 */
	owner: null,

	/**
	 * The link to the Room object. May not be available in case a flag is placed in a room which you do not have access to.
	 *
	 * @type {Room}
	 */
	room: null,

	/**
	 * An object representing the position of this structure in the room.
	 *
	 * @type {RoomPosition}
	 */
	pos: null,

	/**
	 * The current amount of hit points of the structure.
	 *
	 * @type {Number}
	 */
	hits: 0,

	/**
	 * The total amount of hit points of the structure.
	 *
	 * @type {Number}
	 */
	hitsMax: 0,

	/**
	 * One of the game constants
	 *
	 * @type {String}
	 */
	structureType: "",

	/**
	 * Whether this is your own structure.
	 *
	 * @type {Boolean}
	 */
	my: true,

	/**
	 * Destroy this structure immediately.
	 *
	 * @return {Number}
	 */
	destroy: function() { },

	/**
	 * Toggle auto notification when the structure is under attack. The notification will be sent to your account email. Turned on by default.
	 *
	 * @param {Boolean} enabled Whether to enable notification or disable.
	 *
	 * @return {Number}
	 */
	notifyWhenAttacked: function(enabled) { }
};