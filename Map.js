/**
 * A global object representing world map. Use it to navigate between rooms. The object is accessible via Game.map property.
 *
 * @class
 * @constructor
 */
Map = function() { };

Map.prototype =
{
    /**
     * List all exits available from the room with the given name.
     *
     * @param {string} roomName
     *
     * @return {object<string,string>} The exits information in the following format, or null if the room not found.
     *  {
            "1": "W8N4",    // TOP
            "3": "W7N3",    // RIGHT
            "5": "W8N2",    // BOTTOM
            "7": "W9N3"     // LEFT
        }
     */
    describeExits: function(roomName) { },

    /**
     * Find the exit direction from the given room en route to another room.
     *
     * @param {string|Room} fromRoom Start room name or room object.
     * @param {string|Room} toRoom Finish room name or room object.
     *
     * @return {number|FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|ERR_NO_PATH|ERR_INVALID_ARGS} The room direction constant or an error constant
     */
    findExit: function(fromRoom, toRoom) { },

    /**
     * Find route from the given room to another room.
     *
     * @param {string|Room} fromRoom Start room name or room object.
     * @param {string|Room} toRoom Finish room name or room object.
     *
     * @return {object[]|ERR_NO_PATH} The route array in the following format or an error constant
     *  [
            { exit: FIND_EXIT_RIGHT, room: 'arena21' },
            { exit: FIND_EXIT_BOTTOM, room: 'arena22' }
        ]
     */
    findRoute: function(fromRoom, toRoom) { },

    /**
     * Get terrain type at the specified room position.
     * This method works for any room in the world even if you have no access to it.
     *
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     * @param {string} roomName The room name.
     *
     * @note Another variant of this function is getTerrianAt(pos) where:
     * @param {RoomPosition} pos The position object.
     *
     * @return {string} Returns either "plain", "swamp" or "wall".
     */
    getTerrianAt: function(x, y, roomName) { },

    /**
     * Check if the room with the given name is protected by temporary "newbie" walls.
     *
     * @param {string} roomName The room name.
     *
     * @return {boolean}
     */
    isRoomProtected: function(roomName) { }
}