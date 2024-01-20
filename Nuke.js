/**
 * A nuke landing position.
 * This object cannot be removed or modified.
 * You can find incoming nukes in the room using the FIND_NUKES constant.
 * @class
 * @extends {RoomObject}
 *
 * @see {@link https://docs.screeps.com/api/#Nuke}
 */
Nuke = function() { };

Nuke.prototype =
{
    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link https://docs.screeps.com/api/#Nuke.id}
     *
     * @type {string}
     */
    id: "",

    /**
     * The name of the room where this nuke has been launched from.
     *
     * @see {@link https://docs.screeps.com/api/#Nuke.launchRoomName}
     *
     * @type {string}
     */
    launchRoomName: "",

    /**
     * The remaining landing time.
     *
     * @see {@link https://docs.screeps.com/api/#Nuke.timeToLand}
     *
     * @type {number}
     */
    timeToLand: 0
};
