/**
 * Provides visibility into a distant room from your script.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link https://docs.screeps.com/api/#StructureObserver}
 */
StructureObserver = function() { };

StructureObserver.prototype =
{
    /**
     * Provide visibility into a distant room from your script.
     * The target room object will be available on the next tick.
     *
     * @see {@link https://docs.screeps.com/api/#StructureObserver.observeRoom}
     *
     * @type {function}
     *
     * @param {string} roomName The name of the target room.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    observeRoom: function(roomName) { }
};
