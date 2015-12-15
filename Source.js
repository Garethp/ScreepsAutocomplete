/**
 * An energy source object. Can be harvested by creeps with a WORK body part.
 *
 * @class
 * @constructor
 */
Source = function () {

};

Source.prototype = {
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
	 * An object representing the position of this structure in the room.
	 *
	 * @type RoomPosition
	 */
	pos: null,

	/**
	 * The remaining amount of energy.
	 *
	 * @type number
	 */
	energy: 0,

	/**
	 * The total amount of energy in the source. Equals to 3000 in most cases.
	 *
	 * @type number
	 */
	energyCapacity: 0,

	/**
	 * The remaining time after which the source will be refilled.
	 *
	 * @type number
	 */
	ticksToRegeneration: 0
};