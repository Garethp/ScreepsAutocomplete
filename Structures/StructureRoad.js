/**
 * Decreases movement cost to 1.
 * Using roads allows creating creeps with less MOVE body parts.
 * You can also build roads on top of natural terrain walls which are otherwise impassable.
 *
 * @class
 * @extends {Structure}
 *
 * @see {@link https://docs.screeps.com/api/#StructureRoad}
 */
StructureRoad = function() { };

StructureRoad.prototype =
{
    /**
     * The amount of game ticks when this road will lose some hit points.
     *
     * @see {@link https://docs.screeps.com/api/#StructureRoad.ticksToDecay}
     *
     * @type {number}
     */
    ticksToDecay: 0
};
