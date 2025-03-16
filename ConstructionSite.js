/**
 * A site of a structure which is currently under construction.
 * A construction site can be created using the 'Construct' button at the left of the game field or the Room.createConstructionSite method.
 * To build a structure on the construction site, give a worker creep some amount of energy and perform Creep.build action.
 *
 * @class
 * @extends {RoomObject}
 *
 * @see {@link https://docs.screeps.com/api/#ConstructionSite}
 */
ConstructionSite = function() { };

ConstructionSite.prototype =
{
    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @see {@link https://docs.screeps.com/api/#ConstructionSite.id}
     *
     * @type {string}
     */
    id: "",

    /**
     * Whether this is your own construction site.
     *
     * @see {@link https://docs.screeps.com/api/#ConstructionSite.my}
     *
     * @type {boolean}
     */
    my: true,

    /**
     * An object with the structure’s owner info
     *
     * @see {@link https://docs.screeps.com/api/#ConstructionSite.owner}
     *
     * @type {{username: string}}
     */
    owner:
    {
        username: ""
    },

    /**
     * The current construction progress.
     *
     * @see {@link https://docs.screeps.com/api/#ConstructionSite.progress}
     *
     * @type {number}
     */
    progress: 0,

    /**
     * The total construction progress needed for the structure to be built.
     *
     * @see {@link https://docs.screeps.com/api/#ConstructionSite.progressTotal}
     *
     * @type {number}
     */
    progressTotal: 0,

    /**
     * One of the STRUCTURE_* constants.
     *
     * @see {@link https://docs.screeps.com/api/#ConstructionSite.structureType}
     *
     * @type {string}
     */
    structureType: "",

    /**
     * Remove the construction site.
     *
     * @see {@link https://docs.screeps.com/api/#ConstructionSite.remove}
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    remove: function() { }
};
