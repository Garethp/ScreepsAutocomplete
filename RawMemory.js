/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 *
 * @class
 */
RawMemory = function() { };

RawMemory.prototype =
{
    /**
     * Get a raw string representation of the Memory object.
     *
     * @type {function}
     *
     * @return {string}
     */
    get: function() { },

    /**
     * Set new memory value.
     *
     * @type {function}
     *
     * @param {string} value
     *
     * @return {void}
     */
    set: function(value) { }
};
