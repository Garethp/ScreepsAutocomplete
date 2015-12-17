/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify
 *
 * @class
 * @constructor
 */
RawMemory = function() { };

RawMemory.prototype =
{
    /**
     * Get a raw string representation of the Memory object.
     *
     * @note Sample: var myMemory = JSON.parse(RawMemory.get());
     *
     * @return {string}
     */
    get: function() { },

    /**
     * Set new memory value.
     *
     * @param {string} value New memory value as a string.
     *
     * @return {null}
     */
    set: function(value) { }
};