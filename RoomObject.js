/**
 * Any object with a position in a room.
 * Almost all game objects prototypes are derived from RoomObject.
 * @class
 *
 * @see {@link https://docs.screeps.com/api/#RoomObject}
 */
RoomObject = function() { };

RoomObject.prototype =
{
    /**
     * Applied effects, an array of objects
     *
     * @see {@link https://docs.screeps.com/api/#RoomObject.effects}
     *
     * @type {Array<{effect:number, level:number, ticksRemaining:number}>}
     */
    effects: null,
    /**
     * An object representing the position of this object in the room.
     *
     * @see {@link https://docs.screeps.com/api/#RoomObject.pos}
     *
     * @type {RoomPosition}
     */
    pos: null,

    /**
     * The link to the Room object.
     * May be undefined in case if an object is a flag or a construction site and is placed in a room that is not visible to you.
     *
     * @see {@link https://docs.screeps.com/api/#RoomObject.room}
     *
     * @type {Room}
     */
    room: null
};
