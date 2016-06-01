/**
 * Decreases movement cost to 1.
 * Using roads allows creating creeps with less MOVE body parts.
 *
 * @class
 * @extends {Structure}
 */
StructureRoad = function() { };

StructureRoad.prototype =
{
    /**
     * The amount of game ticks when this road will lose some hit points.
     *
     * @type {number}
     */
    ticksToDecay: 0
};
