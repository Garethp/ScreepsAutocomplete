/**
 * A site of a structure which is currently under construction.
 * A construction site can be created using the 'Construct' button at the left of the game field or the Room.createConstructionSite method.
 * To build a structure on the construction site, give a worker creep some amount of energy and perform Creep.build action.
 *
 * @class
 * @extends {RoomObject}
 */
ConstructionSite = function() { };

ConstructionSite.prototype =
{
    /**
     * A unique object identificator.
     * You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @type {string}
     */
    id: "",

    /**
     * Whether this is your own construction site.
     *
     * @type {boolean}
     */
    my: true,

    /**
     * An object with the structure’s owner info
     *
     * @type {{username: ""}}
     */
    owner:
    {
        username: ""
    },

    /**
     * The current construction progress.
     *
     * @type {number}
     */
    progress: 0,

    /**
     * The total construction progress needed for the structure to be built.
     *
     * @type {number}
     */
    progressTotal: 0,

    /**
     * One of the STRUCTURE_* constants.
     *
     * @type {string}
     */
    structureType: "",

    /**
     * Remove the construction site.
     *
     * @type {function}
     *
     * @return {number|OK|ERR_NOT_OWNER}
     */
    remove: function() { }
};
