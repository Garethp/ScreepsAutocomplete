/**
 * A global object representing world map.
 * Use it to navigate between rooms.
 * The object is accessible via Game.map property.
 *
 * @class
 */
Map = function() { };

Map.prototype =
{
    /**
     * List all exits available from the room with the given name.
     *
     * @type {function}
     *
     * @param {string} roomName The room name.
     *
     * @return {null|object} The exits information in the following format, or null if the room not found.
                             {
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
     * @type {function}
     *
     * @param {string|Room} fromRoom Start room name or room object.
     * @param {string|Room} toRoom Finish room name or room object.
     * @param {object} [opts] An object with the pathfinding options. See findRoute.
     *
     * @return {FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|number|ERR_NO_PATH|ERR_INVALID_ARGS}
     */
    findExit: function(fromRoom, toRoom, opts) { },

    /**
     * Find route from the given room to another room.
     *
     * @type {function}
     *
     * @param {string|Room} fromRoom Start room name or room object.
     * @param {string|Room} toRoom Finish room name or room object.
     * @param {object} [opts] An object with the pathfinding options.
     * @param {function} [opts.routeCallback] This callback accepts two arguments: function(roomName, fromRoomName). It can be used to calculate the cost of entering that room. You can use this to do things like prioritize your own rooms, or avoid some rooms. You can return a floating point cost or Infinity to block the room.
     *
     * @return {Array|number|ERR_NO_PATH} The route array in the following format:
                                         [
                                             { exit: FIND_EXIT_RIGHT, room: 'arena21' },
                                             { exit: FIND_EXIT_BOTTOM, room: 'arena22' }
                                         ]
     */
    findRoute: function(fromRoom, toRoom, opts) { },

    /**
     * Get the linear distance (in rooms) between two rooms.
     * You can use this function to estimate the energy cost of sending resources through terminals, or using observers and nukes.
     *
     * @type {function}
     *
     * @param {string} roomName1 The name of the first room.
     * @param {string} roomName2 The name of the second room.
     *
     * @return {number} A number of rooms between the given two rooms.
     */
    getRoomLinearDistance: function(roomName1, roomName2) { },

    /**
     * Get terrain type at the specified room position.
     * This method works for any room in the world even if you have no access to it.
     *
     * @type {function}
     *
     * @param {number} x X position in the room.
     * @param {number} y Y position in the room.
     * @param {string} roomName The room name.
     *
     * @note Alternative function: getTerrainAt(pos)
     * @param {RoomPosition} pos The position object.
     *
     * @return {"plain"|"swamp"|"wall"}
     */
    getTerrainAt: function(x, y, roomName) { },

    /**
     * Check if the room with the given name is protected by temporary "newbie" walls.
     *
     * @type {function}
     *
     * @param {string} roomName The room name.
     *
     * @return {boolean}
     */
    isRoomProtected: function(roomName) { }
};
