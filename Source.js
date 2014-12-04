Source = function()
{

};

Source.prototype = {
	id: "",

	/**
	 * @type Room
	 */
	room: null,

	/**
	 * @type RoomPosition
	 */
	pos: null,

	energy: 0,

	energyCapacity: 0,

	ticksToRegeneration: 0
};