/**
 * This is the base class for all Structures in the game.
 *
 * @class
 * @constructor
 */
Structure = function() { };

Structure.prototype =
{
    /**
     * The current amount of hit points of the structure.
     *
     * @type {number}
     */
    hits: 0,

    /**
     * The total amount of hit points of the structure.
     *
     * @type {number}
     */
    maxHits: 0,

    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @type {string}
     */
    id: "",

    /**
     * Whether this is your own structure.
     * Walls and roads don't have this property as they are considered neutral structures.
     *
     * @type {boolean}
     */
    my: true,

    /**
     * An object with the structure’s owner info (if present).
     *
     * @type {object}
     */
    owner: {
        /**
         * The name of the owner user.
         *
         * @type {string}
         */
        username: ""
    },

    /**
     * An object representing the position of this structure in the room.
     *
     * @type {RoomPosition}
     */
    pos: null,

    /**
     * The link to the Room object.
     * May not be available in case a flag is placed in a room which you do not have access to.
     *
     * @type {Room|null}
     */
    room: null,

    /**
     * One of the STRUCTURE_* constants.
     *
     * @type {string}
     */
    structureType: "",

    /**
     * Destroy this structure immediately.
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    destroy: function() { },

    /**
     * Toggle auto notification when the structure is under attack.
     * The notification will be sent to your account email. Turned on by default.
     *
     * @param {boolean} enabled Whether to enable notification or disable.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_INVALID_ARGS}
     */
    notifyWhenAttacked: function(enabled) { }
};