/**
 * A step in a path
 *
 * @class
 * @constructor
 */
PathStep = function()
{

};

PathStep.prototype = {
	/**
	 * The x position of a RoomPosition
	 *
	 * @type number
	 */
	x: 0,

	/**
	 * The y position of a RoomPosition
	 *
	 * @type number
	 */
	y: 0,

	/**
	 * The relative x position
	 *
	 * @type number
	 */
	dx: 0,

	/**
	 * The relative y position
	 *
	 * @type number
	 */
	dy: 0,

	/**
	 * The relative direction constant
	 *
	 * @type number
	 */
	direction: null
};