/**
 * A flag. Flags can be used to mark particular spots in a room.
 *
 * @class
 * @constructor
 */
Flag = function()
{

};

Flag.prototype = {
	/**
	 * A unique object identificator.
	 *
	 * @type string
	 */
	id: "",

	/**
	 * Flag color. One of the following constants:
	 *  - Game.COLOR_RED,
	 *  - Game.COLOR_PURPLE
	 *  - Game.COLOR_BLUE
	 *  - Game.COLOR_CYAN
	 *  - Game.COLOR_GREEN
	 *  - Game.COLOR_YELLOW
	 *  - Game.COLOR_ORANGE
	 *  - Game.COLOR_BROWN
	 *  - Game.COLOR_GREY
	 *  - Game.COLOR_WHITE
	 *
	 *  @type {Game.COLOR_RED|Game.COLOR_PURPLE|Game.COLOR_BLUE|Game.COLOR_CYAN|Game.COLOR_GREEN|Game.COLOR_YELLOW
	 *  |Game.COLOR_ORANGE|Game.COLOR_BROWN|Game.COLOR_GREY|Game.COLOR_WHITE}
	 */
	color: '',

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
	remove: function() { }
};