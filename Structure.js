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
	 * The amount of energy containing in the extension.
	 *
	 * @note Link, Spawn & Extensions only
	 *
	 * @type {Number}
	 */
	energy: 0,

	/**
	 * The total amount of energy the extension can contain.
	 *
	 * @note Link, Spawn & Extensions only
	 *
	 * @type {Number}
	 */
	energyCapacity: 0,

	/**
	 * An object with the storage contents
	 *
	 * @type {Object}
	 */
	store: {

		/**
		 * The current amount of energy in the storage.
		 * @type {Number}
		 */
		energy: 0
	},

	/**
	 * The total amount of resources the storage can contain.
	 *
	 * @type {Number}
	 */
	storeCapacity: 0,

	/**
	 * The amount of game ticks when this road will lose some hit points.
	 *
	 * @note Roads Only
	 *
	 * @type {Number}
	 */
	ticksToDecay: 0,

	/**
	 * The amount of game ticks when the wall will disappear (only for automatically placed border walls at the start of the game).
	 *
	 * @note Newbie walls Only
	 *
	 * @type {Number}
	 */
	ticksToLive: 0,

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