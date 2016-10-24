/**
 * Claim this structure to take control over the room.
 * The controller structure cannot be damaged or destroyed.
 * It can be addressed by Room.controller property.
 *
 * @class
 * @extends {OwnedStructure}
 */
StructureController = function() { };

StructureController.prototype =
{
    /**
     * Current controller level, from 0 to 8.
     *
     * @type {number}
     */
    level: 0,

    /**
     * The current progress of upgrading the controller to the next level.
     *
     * @type {number}
     */
    progress: 0,

    /**
     * The progress needed to reach the next level.
     *
     * @type {number}
     */
    progressTotal: 0,

    /**
     * An object with the controller reservation info if present
     *
     * @type {null|{username: string, ticksToEnd: number}}
     */
    reservation: {},

    /**
     * How many ticks of safe mode remaining, or undefined.
     *
     * @type {number}
     */
    safeMode: 0,

    /**
     * Safe mode activations available to use.
     *
     * @type {number}
     */
    safeModeAvailable: 0,

    /**
     * During this period in ticks new safe mode activations will be blocked,
     * undefined if cooldown is inactive.
     *
     * @type {number}
     */
    safeModeCooldown: 0,

    /**
     * The amount of game ticks when this controller will lose one level.
     * This timer can be reset by using Creep.upgradeController.
     *
     * @type {number}
     */
    ticksToDowngrade: 0,

    /**
     * The amount of game ticks while this controller cannot be upgraded due to attack.
     *
     * @type {number}
     */
    upgradeBlocked: 0,

    /**
     * Activate safe mode if available.
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_TIRED}
     */
    activateSafeMode: function() { },

    /**
     * Make your claimed controller neutral again.
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    unclaim: function() { }
};
