/**
 * Any object with a position in a room.
 * Almost all game objects prototypes are derived from RoomObject.
 * @class
 */
RoomObject = function() { };

RoomObject.prototype =
{
    /**
     * An object representing the position of this object in the room.
     *
     * @type {RoomPosition}
     */
    pos: null,

    /**
     * The link to the Room object.
     * May be undefined in case if an object is a flag and is placed in a room that is not visible to you.
     *
     * @type {Room}
     */
    room: null
};
