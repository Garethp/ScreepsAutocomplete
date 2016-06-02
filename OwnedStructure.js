/**
 * The base prototype for a structure that has an owner.
 * Such structures can be found using FIND_MY_STRUCTURES and FIND_HOSTILE_STRUCTURES constants.
 *
 * @class
 * @extends {Structure}
 */
OwnedStructure = function() { };

OwnedStructure.prototype =
{
    /**
     * Whether this is your own structure.
     *
     * @type {boolean}
     */
    my: true,

    /**
     * An object with the structure’s owner info
     *
     * @type {{username: string}}
     */
    owner:
    {
        username: ""
    }
};
