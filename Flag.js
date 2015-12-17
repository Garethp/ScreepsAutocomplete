/**
 * A flag. Flags can be used to mark particular spots in a room. Flags are visible to their owners only.
 *
 * @class
 * @constructor
 */
Flag = function() { };

Flag.prototype =
{
    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @type {string}
     */
    id: "",

    /**
     * The flag color.
     *
     * @type {string|COLOR_WHITE|COLOR_GREY|COLOR_RED|COLOR_PURPLE|COLOR_BLUE|COLOR_CYAN|COLOR_GREEN|COLOR_YELLOW|COLOR_ORANGE|COLOR_BROWN}
     */
    color: "",

    /**
     * A shorthand to Memory.flags[flag.name].
     * You can use it for quick access the flag's specific memory data object.
     *
     * @return {object}
     */
    memory: null,

    /**
     * Flag’s name. You can choose the name while creating a new flag, and it cannot be changed later.
     *
     * @note This name is a hash key to access the spawn via the Game.flags object.
     *
     * @type {string}
     */
    name: "",

    /**
     * An object representing the position of this structure in the room.
     *
     * @type {RoomPosition}
     */
    pos: null,

    /**
     * The link to the Room object. May not be available in case a flag is placed in a room which you do not have access to.
     *
     * @type {Room}
     */
    room: null,

    /**
     * The name of the room in which this flag is in.
     * @deprecated
     *
     * @type {string}
     */
    roomName: "",

    /**
     * Remove the flag.
     *
     * @return {OK} Always returns OK.
     */
    remove: function() { },

    /**
     * Set new color of the flag.
     *
     * @param {string|COLOR_WHITE|COLOR_GREY|COLOR_RED|COLOR_PURPLE|COLOR_BLUE|COLOR_CYAN|COLOR_GREEN|COLOR_YELLOW|COLOR_ORANGE|COLOR_BROWN} color
     *
     * @return {number|OK|ERR_INVALID_ARGS}
     */
    setColor: function(color) { },

    /**
     * Set new position of the flag.
     *
     * @param {number} x The X position in the room.
     * @param {number} y The Y position in the room.
     *
     * @note Another variant of this function is setPosition(pos) where:
     * @param {object} pos Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {number|OK|ERR_INVALID_TARGET}
     */
    setPosition: function(x, y) { }
};