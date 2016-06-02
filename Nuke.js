/**
 * A nuke landing position.
 * This object cannot be removed or modified.
 * You can find incoming nukes in the room using the FIND_NUKES constant.
 * @class
 * @extends {RoomObject}
 */
Nuke = function() { };

Nuke.prototype =
{
    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @type {string}
     */
    id: "",

    /**
     * The name of the room where this nuke has been launched from.
     *
     * @type {string}
     */
    launchRoomName: "",

    /**
     * The remaining landing time.
     *
     * @type {number}
     */
    timeToLand: 0
};
