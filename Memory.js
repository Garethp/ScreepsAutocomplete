/**
 * Each player has access to the global object Memory in which he/she may store any information in the JSON format.
 * All the changes written in it are automatically stored using JSON.stringify and passed from tick to tick,
 * allowing you memorize the setting, your own decisions, and temporary data.
 *
 * @type {Object}
 */
Memory = {
    /** @type {Object[]} */
    creeps: [],
    /** @type {Object[]} */
    rooms: [],
    /** @type {Object[]} */
    spawns: []
};