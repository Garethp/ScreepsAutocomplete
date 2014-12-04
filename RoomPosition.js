RoomPosition = function()
{
};

RoomPosition.prototype = {
	x: 0,

	y: 0,

	roomName: 0,

	inRangeTo: function(toPos, range) { },

	isNearTo: function(x, y) { },

	getDirectionTo: function(x, y) { },

	findPathTo: function(target, opts) { },

	findNearest: function(type, opts) { },

	findInRange: function(type, range, opts) { },

	equalsTo: function(x, y) { }
};