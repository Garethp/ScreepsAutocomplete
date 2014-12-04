Room = function()
{

};

Room.prototype = {
	name: "",

	createFlag: function(x, y, name) { },

	createConstructionSite: function(x, y, structureType) { },

	find: function(type, opts) { },

	lookAt: function(x, y, opts) { },

	findPath: function(fromPos, toPos, opts) { },

	/**
	 *
	 * @param x {Number} The X position.
	 * @param y {Number} The Y position.
	 *
	 * @return RoomPosition
	 */
	getPositionAt: function(x, y) { },

	makeSnapshot: function(description) { }
};