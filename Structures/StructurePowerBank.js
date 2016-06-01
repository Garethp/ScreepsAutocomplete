/**
 * Non-player structure.
 * Contains power resource which can be obtained by destroying the structure.
 * Hits the attacker creep back on each attack.
 *
 * @class
 * @extends {OwnedStructure}
 */
StructurePowerBank = function() { };

StructurePowerBank.prototype =
{
    /**
     * The amount of power containing.
     *
     * @type {number}
     */
    power: 0,

    /**
     * The amount of game ticks when this structure will disappear.
     *
     * @type {number}
     */
    ticksToDecay: 0
};
