/**
 * An exit to another room.
 *
 * @class
 * @constructor
 * @deprecated
 */
Exit = function () {

};

Exit.prototype = {
	/**
	 * A unique object identificator.
	 *
	 * @type string
	 */
	id: "",

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
	 * The direction of the exit. One of the following constants:
	 *  - Game.TOP
	 *  - Game.RIGHT
	 *  - Game.BOTTOM
	 *  - Game.LEFT
	 *
	 * @type number
	 */
	exit: 0
};