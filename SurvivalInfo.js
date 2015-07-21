/**
 * Contains a Room's SurvivalInfo
 *
 * @class
 * @constructor
 */
SurvivalInfo = function () {

};

SurvivalInfo.prototype =
{
    /**
     * Current score.
     *
     * @type {number}
     */
    score: 0,

    /**
     * Time to the next wave of invaders.
     *
     * @type {number}
     */
    timeToWave: 0,

    /**
     * The number of the next wave.
     *
     * @type {number}
     */
    wave: 0
}