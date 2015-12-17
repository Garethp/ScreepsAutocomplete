/**
 * The main global game object containing all the gameplay information.
 *
 * @class
 * @constructor
 */
Game = function() { };


Game.prototype =
{
    /**
     * An amount of available CPU time at the current game tick. It can be higher than your account CPU limit.
     *
     * @type {number}
     */
    cpuLimit: 0,

    /**
     * A hash containing all your creeps with creep names as hash keys.
     *
     * @type {object<string, Creep>}
     */
    creeps: null,

    /**
     * A hash containing all your flags with flag names as hash keys.
     *
     * @type {object<string, Flag>}
     */
    flags: null,

    /**
     * Your Global Control Level
     *
     * @type {object}
     */
    gcl: {

        /**
         * The current level.
         *
         * @type {number}
         */
        level: 0,

        /**
         * The current progress to the next level.
         *
         * @type {number}
         */
        progress: 0,

        /**
         * The progress required to reach the next level.
         *
         * @type {number}
         */
        progressTotal: 0
    },

    /**
     * A global object representing world map.
     *
     * @type {Map}
     */
    map: null,

    /**
     * A hash containing all the rooms available to you with room names as hash keys.
     *
     * @type {object<string, Room>}
     */
    rooms: null,

    /**
     * A hash containing all your spawns with spawn names as hash keys.
     *
     * @type {object<string, Spawn>}
     */
    spawns: null,

    /**
     * A hash containing all your structures with structure id as hash keys.
     *
     * @type {object<string, Structure>}
     */
    structures: null,

    /**
     * System game tick counter. It is automatically incremented on every tick.
     *
     * @type {number}
     */
    time : 0,

    /**
     * Get an object with the specified unique ID. It may be a game object of any type.
     * Only objects from the rooms which are visible to you can be accessed.
     *
     * @param {string} id The unique identificator.
     *
     * @return {object|null} Returns an object instance or null if it cannot be found.
     */
    getObjectById: function(id) { },

    /**
     * Get amount of CPU time used from the beginning of the current game tick.
     * Always returns 0 in the Simulation mode.
     *
     * @return {number} Returns currently used CPU time as a float number.
     */
    getUsedCpu: function() { },

    /**
     * Send a custom message at your profile email.
     * This way, you can set up notifications to yourself on any occasion within the game.
     * You can schedule up to 20 notifications during one game tick.
     * Not available in the Simulation Room.
     *
     * @param {string} message Custom text which will be sent in the message. Maximum length is 1000 characters.
     * @param {number} [groupInterval] If set to 0 (default), the notification will be scheduled immediately.
     * Otherwise, it will be grouped with other notifications and mailed out later using the specified time in minutes.
     *
     * @return {null}
     */
    notify: function(message, groupInterval) { }
}