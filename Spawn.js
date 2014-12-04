Spawn = function()
{

};

Spawn.prototype = {
	id: "",

	name: "",

	owner: "",

	/**
	 * @type Room
	 */
	room: null,

	/**
	 * @type RoomPosition
	 */
	pos: null,

	memory: [ ],

	my: true,

	structureType: 'spawn',

	spawning: null,

	energy: 0,

	energyCapacity: 0,

	hits: 0,

	hitsMax: 0,

	createCreep: function(bodyParts, name, memory) { },

	transferEnergy: function(target, amount) { }
};