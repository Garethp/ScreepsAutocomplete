Creep = function()
{

};

Creep.prototype = {

	id: null,

	name: null,

	owner: null,

	/**
	 * @type Room
	 */
	room: null,

	/**
	 * @type RoomPosition
	 */
	pos: null,

	memory: null,

	my: true,

	spawning: true,

	body: [ ],

	energy: 0,

	energyCapacity: 0,

	hits: 0,

	hitsMax: 0,

	ticksToLive: 0,

	fatigue: 0,

	attack: function(target) { },

	build: function(target) { },

	dropEnergy: function(amount) { },

	getActiveBodyparts: function(type) { },

	harvest: function(target) { },

	move: function(direction) { },

	moveTo: function(target, opts) { },

	pickup: function(target) { },

	rangedAttack: function(target) { },

	suicide: function() { },

	transferEnergy: function(target, amount) { }
};