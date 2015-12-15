/**
 *  A site of a structure which is currently under construction.
 *  A construction site can be created using the 'Construct' button at the left of the game field or the Room.createConstructionSite() method.
 *  Construction sites are visible to their owners only.
 *  To build a structure on the construction site, give a worker creep some amount of energy and perform Creep.build() action.
 *
 *  @class
 *  @constructor
 */
ConstructionSite = function() { };

ConstructionSite.prototype =
{
    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     *
     * @type {number}
     */
    id: 0,

    /**
     * Whether this is your own construction site.
     *
     * @type {boolean}
     */
    my: true,

    /**
     * An object with the structure’s owner info.
     *
     * @type {object}
     */
    owner: {
        /**
         * The name of the owner user.
         *
         * @type {string}
         */
        username: ""
    },

    /**
     * An object representing the position of this structure in the room.
     *
     * @type {RoomPosition}
     */
    pos: null,

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
     * The link to the Room object of this structure.
     *
     * @type {Room}
     */
    room: null,

    /**
     * One of the STRUCTURE_* constants.
     *
     * @type {string}
     */
    structureType: "",

    /**
     * Remove the construction site.
     *
     * @return {number|OK|ERR_NOT_OWNER} Returns one of the following codes:
     * OK if the operation has been scheduled or
     * ERR_NOT_FOUND if you are not the owner of this construction site
     */
    remove: function() { }
};