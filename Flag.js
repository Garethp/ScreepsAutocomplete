/**
 * A flag. Flags can be used to mark particular spots in a room.
 *
 * @class
 * @constructor
 */
Flag = function () {

};

Flag.prototype = {
	/**
	 * A unique object identificator.
	 *
	 * @type string
	 */
	id: "",

	/**
	 * Flag’s name. You can choose the name while creating a new flag, and it cannot be changed later. This name is a
	 * hash key to access the spawn via the Game.flags object.
	 *
	 * @type string
	 */
	name: "",

	/**
	 * The name of the room in which this flag is in.
	 *
	 * @type string
	 */
	roomName: "",

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
	 * Remove the flag.
	 */
	remove: function () {
	}
};