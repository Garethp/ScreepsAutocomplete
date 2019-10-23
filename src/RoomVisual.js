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
          * Draw a circle.
          *
          * @see {@link https://docs.screeps.com/api/#RoomVisual.circle}
          *
          * @type {function}
          *
          * @param {number} x The X coordinate of the center.
          * @param {number} [y] The Y coordinate of the center.
          * @param {Object} [style] Style object
          *
          * @alias circle(pos, [style])
          *
          * @return {RoomVisual}
          */
        circle: function(x, y, style) { },

        /**
         * Draw a rectangle.
         *
         * @see {@link https://docs.screeps.com/api/#RoomVisual.rect}
         *
         * @type {function}
         *
         * @param {number} x The X coordinate of the top-left corner.
         * @param {number} y The Y coordinate of the top-left corner.
         * @param {number} width The width of the rectangle.
         * @param {number} height The height of the rectangle.
         * @param {object} style Style object
         *
         * @alias rect(topLeftPos, width, height, [style])
         *
         * @return {RoomVisual}
         */
        rect(x, y, width, height, style) { },

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

        /**
         * Draw a text label. You can use any valid Unicode characters, including emoji.
         *
         * @see {@link https://docs.screeps.com/api/#RoomVisual.text}
         *
         * @type {function}
         *
         * @param {string} text The text message.
         * @param {number} x The X coordinate of the label baseline point.
         * @param {number} y The Y coordinate of the label baseline point.
         * @param {object} [style] Style object
         *
         * @alias text(text, pos, [style])
         *
         * @return {RoomVisual}
         */
         text: function(text, x, y, style) { },

        /**
         * Remove all visuals from the room.
         *
         * @see {@link https://docs.screeps.com/api/#RoomVisual.clear}
         *
         * @type {function}
         *
         * @return {RoomVisual}
         */
         clear: function() { },

        /**
         * Get the stored size of all visuals added in the room in the current tick. It must not exceed 512,000 (500 KB).
         *
         * @see {@link https://docs.screeps.com/api/#RoomVisual.getSize}
         *
         * @return {number} The size of the visuals in bytes.
         */
         getSize: function() { },
    };
