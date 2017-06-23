/**
 * Room visuals provide a way to show various visual debug info in game rooms.
 * You can use the RoomVisual object to draw simple shapes that are visible only to you.
 * Every existing Room object already contains the visual property, but you also can create new RoomVisual objects for any room (even without visibility) using the constructor.
 *
 * Room visuals are not stored in the database, their only purpose is to display something in your browser.
 * All drawings will persist for one tick and will disappear if not updated.
 * All RoomVisual API calls have no added CPU cost (their cost is natural and mostly related to simple JSON.serialize calls).
 * However, there is a usage limit: you cannot post more than 500 KB of serialized data per one room (see getSize method).
 *
 * All draw coordinates are measured in game coordinates and centered to tile centers, i.e. (10,10) will point to the center of the creep at x:10; y:10 position.
 * Fractional coordinates are allowed.
 *
 * @param {string} roomName
 *
 * @class
 * @constructor
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/208488525-Nuke}
 */
RoomVisual = function(roomName) { };

RoomVisual.prototype =
    {
        /**
         * The name of the room.
         *
         * @see {@link http://docs.screeps.com/api/#RoomVisual.roomName}
         *
         * @type {string}
         */
        roomName: "",

        /**
         * Draw a line.
         *
         * @see {@link http://docs.screeps.com/api/#RoomVisual.line}
         *
         * @type {function}
         *
         * @param {number} x1 The start X coordinate.
         * @param {number} y1 The start Y coordinate.
         * @param {number} x2 The finish X coordinate.
         * @param {number} y2 The finish Y coordinate.
         * @param {Object} [style] Style object
         *
         * @return {RoomVisual}
         */
        line: function(x1, y1, x2, y2, style) { },

        /**
         * Draw a line.
         *
         * @see {@link http://docs.screeps.com/api/#RoomVisual.poly}
         *
         * @type {function}
         *
         * @param {Array<Array<number>>|Array<RoomPosition>} points An array of points. Every item should be either an array with 2 numbers (i.e. [10,15]), or a RoomPosition object.
         * @param {Object} [style] Style object
         *
         * @return {RoomVisual}
         */
        poly: function(points, style) { },
    };
