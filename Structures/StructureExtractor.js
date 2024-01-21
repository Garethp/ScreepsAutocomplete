/**
 * Allows to harvest a mineral deposit.
 *
 * @class
 * @extends {OwnedStructure}
 *
 * @see {@link https://docs.screeps.com/api/#StructureExtractor}
 */
StructureExtractor = function() { };

StructureExtractor.prototype =
{
    /**
     * The amount of game ticks until the next harvest action is possible.
     *
     * @see {@link https://docs.screeps.com/api/#StructureExtractor.cooldown}
     *
     * @type {number}
     */
    cooldown: 0
};
