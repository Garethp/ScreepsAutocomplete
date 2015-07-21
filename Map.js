/**
 * A global object representing world map. Use it to navigate between rooms. The object is accessible via Game.map property.
 *
 * @class
 * @constructor
 */
Map = function () {

};

Map.prototype =
{
    /**
     * Find the exit direction from the given room en route to another room.
     *
     * @param {String|Room} fromRoom Start room name or room object.
     * @param {String|Room} toRoom Finish room name or room object.
     *
     * @return {number} The room direction constant or an error code
     */
    findExit: function(fromRoom, toRoom) { },

    /**
     * Find route from the given room to another room.
     *
     * @param {String|Room} fromRoom Start room name or room object.
     * @param {String|Room} toRoom Finish room name or room object.
     *
     * @return {Object[]} The route array in the following format (or an error code)
     *  - [
            { exit: FIND_EXIT_RIGHT, room: 'arena21' },
            { exit: FIND_EXIT_BOTTOM, room: 'arena22' }
          ]
     */
    findRoute: function(fromRoom, toRoom) { }
};