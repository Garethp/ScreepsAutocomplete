/**
 * InterShardMemory object provides an interface for communicating between shards.
 *
 * @class
 *
 * @see {@link https://docs.screeps.com/api/#InterShardMemory}
 */
InterShardMemory = function() { };

InterShardMemory.prototype =
{

    /**
     * Returns the string contents of the current shard's data. 
     *
     * @see {@link https://docs.screeps.com/api/#InterShardMemory.getLocal}
     *
     * @type {function}
     *
     * @return {string}
     */
    getLocal: function() { },

    /**
     * Replace the current shard's data with the new value.
     *
     * @see {@link https://docs.screeps.com/api/#InterShardMemory.setLocal}
     *
     * @type {function}
     *
     * @param {string} value New data value in string format.
     * @return {void}
     */
    setLocal: function(value) { },

    /**
     * Returns the string contents of another shard's data.
     *
     * @see {@link https://docs.screeps.com/api/#InterShardMemory.getRemote}
     *
     * @type {function}
     *
     * @param {string} shard Shard name.
     * @return {string}
     */
    getRemote: function(shard) { }
};
