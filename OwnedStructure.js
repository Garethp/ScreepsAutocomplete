/**
 * The base prototype for a structure that has an owner.
 * Such structures can be found using FIND_MY_STRUCTURES and FIND_HOSTILE_STRUCTURES constants.
 *
 * @class
 * @extends {Structure}
 *
 * @see {@link https://docs.screeps.com/api/#OwnedStructure}
 */
OwnedStructure = function() { };

OwnedStructure.prototype =
{
    /**
     * Whether this is your own structure.
     *
     * @see {@link https://docs.screeps.com/api/#OwnedStructure.my}
     *
     * @type {boolean}
     */
    my: true,

    /**
     * An object with the structure’s owner info
     *
     * @see {@link https://docs.screeps.com/api/#OwnedStructure.owner}
     *
     * @type {{username: string}}
     */
    owner:
    {
        username: ""
    }
};
