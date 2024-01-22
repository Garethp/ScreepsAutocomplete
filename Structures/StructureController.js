/**
 * Claim this structure to take control over the room.
 * The controller structure cannot be damaged or destroyed.
 * It can be addressed by Room.controller property.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link https://docs.screeps.com/api/#StructureController}
 */
StructureController = function() { };

StructureController.prototype =
{

    /**
     * During this period in ticks new safe mode activations will be blocked, undefined if cooldown is inactive.
     *
     * @see {@link https://docs.screeps.com/api/#StructureController.safeModeCooldown}
     *
     * @type {number}
     */
    safeModeCooldown: 0,
    
    /**
     * Safe mode activations available to use.
     *
     * @see {@link https://docs.screeps.com/api/#StructureController.safeModeAvailable}
     *
     * @type {number}
     */
    safeModeAvailable: 0,

    /**
     * How many ticks of safe mode remaining, or undefined.
     *
     * @see {@link https://docs.screeps.com/api/#StructureController.safeMode}
     *
     * @type {number|undefined}
     */
    safeMode: 0,

    /**
     * Activate safe mode if available.
     *
     * @see {@link https://docs.screeps.com/api/#StructureController.activateSafeMode}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_BUSY|ERR_NOT_ENOUGH_RESOURCES|ERR_TIRED}
     */
    activateSafeMode: function() {},
    
    /**
     * Whether using power is enabled in this room. Use PowerCreep.enableRoom to turn powers on.
     *
     * @see {@link https://docs.screeps.com/api/#StructureController.isPowerEnabled}
     *
     * @type {boolean}
     */
    isPowerEnabled: false,
    
    /**
     * Current controller level, from 0 to 8.
     *
     * @see {@link https://docs.screeps.com/api/#StructureController.level}
     *
     * @type {number}
     */
    level: 0,

    /**
     * The current progress of upgrading the controller to the next level.
     *
     * @see {@link https://docs.screeps.com/api/#StructureController.progress}
     *
     * @type {number}
     */
    progress: 0,

    /**
     * The progress needed to reach the next level.
     *
     * @see {@link https://docs.screeps.com/api/#StructureController.progressTotal}
     *
     * @type {number}
     */
    progressTotal: 0,

    /**
     * An object with the controller reservation info if present
     *
     * @see {@link https://docs.screeps.com/api/#StructureController.reservation}
     *
     * @type {null|object}
     */
    reservation: {

        /**
         * The name of a player who reserved this controller.
         *
         * @type {string}
         */
        username: "",

        /**
         * The amount of game ticks when the reservation will end.
         *
         * @type {number}
         */
        ticksToEnd: 0
    },

    /**
     * An object with the controller sign info
     *
     * @see {@link https://docs.screeps.com/api/#StructureController.sign}
     *
     * @type {object|undefined}
     */
    sign: {
        /**
         * The name of a player who signed this controller.
         *
         * @type {string}
         */
        username: "",

        /**
         * The sign text.
         *
         * @type {string}
         */
        text: "",
        
        /**
         * The sign time in game ticks.
         *
         * @type {number}
         */
        time: 0,
        
        /**
         * The sign real date.
         *
         * @type {Date}
         */
        datetime: ""
    },
    
    /**
     * The amount of game ticks when this controller will lose one level.
     * This timer is set to 50% on level upgrade or downgrade, and it can be increased by using Creep.upgradeController. Must be full to upgrade the controller to the next level.
     *
     * @see {@link https://docs.screeps.com/api/#StructureController.ticksToDowngrade}
     *
     * @type {number}
     */
    ticksToDowngrade: 0,

    /**
     * The amount of game ticks while this controller cannot be upgraded due to attack.
     * Safe mode is also unavailable during this period.
     *
     * @see {@link https://docs.screeps.com/api/#StructureController.upgradeBlocked}
     *
     * @type {number}
     */
    upgradeBlocked: 0,

    /**
     * Make your claimed controller neutral again.
     *
     * @see {@link https://docs.screeps.com/api/#StructureController.unclaim}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    unclaim: function() { }
};
