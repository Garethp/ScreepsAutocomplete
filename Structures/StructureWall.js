/**
 * Blocks movement of all creeps.
 *
 * @class
 * @extends {Structure}
 */
class StructureWall extends Structure {}

StructureWall.prototype =
{
    /**
     * The amount of game ticks when the wall will disappear (only for automatically placed border walls at the start of the game).
     *
     * @type {number}
     */
    ticksToLive: 0
};
