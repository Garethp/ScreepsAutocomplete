/**
 * The main global game object containing all the gameplay information.
 *
 * @class
 */
Game =
{
    /**
     * An object containing information about your CPU usage
     */
    cpu:
    {
        /**
         * Your CPU limit depending on your Global Control Level.
         *
         * @type {number}
         */
        limit: 0,

        /**
         * An amount of available CPU time at the current game tick.
         * It can be higher than Game.cpu.limit.
         *
         * @type {number}
         */
        tickLimit: 0,

        /**
         * An amount of unused CPU accumulated in your bucket.
         *
         * @type {number}
         */
        bucket: 0,

        /**
         * Get amount of CPU time used from the beginning of the current game tick.
         * Always returns 0 in the Simulation mode.
         *
         * @type {function}
         *
         * @return {number}
         */
        getUsed: function() { }
    },

    /**
     * A hash containing all your creeps with creep names as hash keys.
     *
     * @type {Array<string, Creep>}
     */
    creeps: {},

    /**
     * A hash containing all your flags with flag names as hash keys.
     *
     * @type {Array<string, Flag>}
     */
    flags: {},

    /**
     * Your Global Control Level
     */
    gcl:
    {
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
     * A global object representing the in-game market.
     *
     * @type {Market}
     */
    market: null,

    /**
     * A hash containing all the rooms available to you with room names as hash keys.
     *
     * @type {Array<string, Room>}
     */
    rooms: {},

    /**
     * A hash containing all your spawns with spawn names as hash keys.
     *
     * @type {Array<string, Spawn>}
     */
    spawns: {},

    /**
     * A hash containing all your structures with structure id as hash keys.
     *
     * @type {Array<string, Structure>}
     */
    structures: {},

    /**
     * System game tick counter. It is automatically incremented on every tick.
     *
     * @type {number}
     */
    time: 0,

    /**
     * Get an object with the specified unique ID.
     * It may be a game object of any type.
     * Only objects from the rooms which are visible to you can be accessed.
     *
     * @type {function}
     *
     * @param {string} id The unique identificator.
     *
     * @return {object|null}
     */
    getObjectById: function(id) { },

    /**
     * Send a custom message at your profile email.
     * This way, you can set up notifications to yourself on any occasion within the game.
     * You can schedule up to 20 notifications during one game tick.
     * Not available in the Simulation Room.
     *
     * @param {string} message Custom text which will be sent in the message. Maximum length is 1000 characters.
     * @param {number} [groupInterval] If set to 0 (default), the notification will be scheduled immediately. Otherwise, it will be grouped with other notifications and mailed out later using the specified time in minutes.
     *
     * @return {void}
     */
    notify: function(message, groupInterval) { }
};
