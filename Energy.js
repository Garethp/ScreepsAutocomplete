/**
 * A dropped piece of energy. It will decay after a while if not picked up.
 *
 * @class
 * @constructor
 */
Energy = function () {

};

Energy.prototype = {
	/**
	 * A unique object identificator.
	 *
	 * @type string
	 */
	id: "",

	/**
	 * The link to the Room object of this structure.
	 *
	 * @type Room
	 */
	room: null,

	/**
	 * An object representing the position in the room.
	 *
	 * @type RoomPosition
	 */
	pos: null,

	/**
	 * The amount of energy containing.
	 *
	 * @type number
	 */
	energy: 0
};