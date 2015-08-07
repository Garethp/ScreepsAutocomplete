/**
 * The main global game object containing all the gameplay information.
 *
 * @class
 * @constructor
 */
Game = function () {

};

Game.prototype = {

	/**
	 * An amount of available CPU time at the current game tick.
	 *
	 * @type number
	 */
	cpuLimit: 0,

	/**
	 * A hash containing all your creeps with creep names as hash keys.
	 *
	 * @type Object<String, Creep>
	 */
	creeps: null,

	/**
	 * A global object representing world map.
	 *
	 * @type Map
	 */
	map: null,

	/**
	 * A hash containing all your flags with flag names as hash keys.
	 *
	 * @type Object<String, Flag>
	 */
	flags: null,

	/**
	 * A hash containing all the rooms available to you with room names as hash keys.
	 *
	 * @type Object<String, Room>
	 */
	rooms: null,

	/**
	 * A hash containing all your spawns with spawn names as hash keys.
	 *
	 * @type Object<String, Spawn>
	 */
	spawns: null,

	/**
	 * A hash containing all your structures with structure id as hash keys.
	 *
	 * @type Object<String, Structure>
	 */
	structures: null,

	/**
	 * System game tick counter. It is automatically incremented on every tick.
	 *
	 * @type Number
	 */
	time: 0,

	/**
	 * Get an object with the specified unique ID. It may be a game object of any type. Only objects from the rooms which are visible to you can be accessed.
	 *
	 * @param id {String}
	 */
	getObjectById: function (id) {
	},

	/**
	 * Get an instance object of the specified room. You can gain access to a room only if you have a creep, spawn, or extension within it.
	 *
	 * @deprecated
	 * @param name {String}
	 * @return Room
	 */
	getRoom: function (name) {
	},

	/**
	 * Get amount of CPU time used during the current game tick.
	 *
	 * @param {Function} callback {function(number)} The callback function to be called with the used CPU value as its first argument
	 */
	getUsedCpu: function(callback) { },

	/**
	 * Send a custom message at your profile email. This way, you can set up notifications to yourself on any occasion within the game. Not available in the Simulation Room.
	 * You can schedule up to 20 notifications during one game tick.
	 *
	 * @param message {string} Custom text which will be sent in the message. Maximum length is 1000 characters.
	 * @param [groupInterval] {number} If set to 0 (default), the notification will be scheduled immediately.
	 * Otherwise, it will be grouped with other notifications and mailed out later using the specified time in minutes.
	 */
	notify: function (message, groupInterval) {
	}
};

