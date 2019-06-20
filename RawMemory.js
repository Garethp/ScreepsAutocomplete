/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 *
 * @class
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/205619121-RawMemory}
 */
RawMemory = {
    /**
     * An object with asynchronous memory segments available on this tick.
     * Each object key is the segment ID with data in string values.
     * Use setActiveSegments to fetch segments on the next tick.
     * Segments data is saved automatically in the end of the tick.
     * The maximum size per segment is 100 KB.
     *
     * @see {@link https://docs.screeps.com/api/#RawMemory.segments}
     *
     * @type {object<string,string>}
     */
    segments: {},

    /**
     * An object with a memory segment of another player available on this tick.
     * Use setActiveForeignSegment to fetch segments on the next tick.
     *
     * @see {@link https://docs.screeps.com/api/#RawMemory.foreignSegment}
     *
     * @type {object<string,object>}
     */
    foreignSegment: {},

    /**
     * A string with a shared memory segment available on every world shard. Maximum string length is 100 KB.
     *
     * Warning: this segment is not safe for concurrent usage!
     * All shards have shared access to the same instance of data.
     * When the segment contents is changed by two shards simultaneously,
     * you may lose some data, since the segment string value is written all at once atomically.
     * You must implement your own system to determine when each shard is allowed to rewrite the inter-shard memory, e.g. based on mutual exclusions.
     *
     * @deprecated use InterShardMemory instead.
     *
     * @see {@link https://docs.screeps.com/api/#RawMemory.interShardSegment}
     *
     * @type {string}
     */
    interShardSegment: "",

    /**
     * Get a raw string representation of the Memory object.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205619121-RawMemory#get}
     *
     * @type {function}
     *
     * @return {string}
     */
    get: function() { },

    /**
     * Set new memory value.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/205619121-RawMemory#set}
     *
     * @type {function}
     *
     * @param {string} value
     *
     * @return {void}
     */
    set: function(value) { },

    /**
     * Request memory segments using the list of their IDs.
     * Memory segments will become available on the next tick in segments object.
     *
     * @see {@link https://docs.screeps.com/api/#RawMemory.setActiveSegments}
     *
     * @type {function}
     *
     * @param {array} ids An array of segment IDs.
     *                    Each ID should be a number from 0 to 99.
     *                    Maximum 10 segments can be active at the same time.
     *                    Subsequent calls of setActiveSegments override previous ones.
     *
     * @return {void}
     */
    setActiveSegments: function(ids) { },

    /**
     * Request a memory segment of another user.
     * The segment should be marked by its owner as public using setPublicSegments.
     * The segment data will become available on the next tick in foreignSegment object.
     * You can only have access to one foreign segment at the same time.
     *
     * @see {@link https://docs.screeps.com/api/#RawMemory.setActiveForeignSegment}
     *
     * @type {function}
     *
     * @param {string|null} username The name of another user. Pass null to clear the foreign segment.
     * @param {number} [id] The ID of the requested segment from 0 to 99.
     *                      If undefined, the user's default public segment is requested as set by setDefaultPublicSegment.
     *
     * @return {void}
     */
    setActiveForeignSegment: function(username, id) { },

    /**
     * Set the specified segment as your default public segment.
     * It will be returned if no id parameter is passed to setActiveForeignSegment by another user.
     *
     * @see {@link https://docs.screeps.com/api/#RawMemory.setDefaultPublicSegment}
     *
     * @type {function}
     *
     * @param {number|null} id The ID of the memory segment from 0 to 99. Pass null to remove your default public segment.
     *
     * @return {void}
     */
    setDefaultPublicSegment: function(id) { },

    /**
     * Set specified segments as public.
     * Other users will be able to request access to them using setActiveForeignSegment.
     *
     * @see {@link https://docs.screeps.com/api/#RawMemory.setPublicSegments}
     *
     * @type {function}
     *
     * @param {array<number>} ids An array of segment IDs. Each ID should be a number from 0 to 99. Subsequent calls of setPublicSegments override previous ones.
     *
     * @return {void}
     */
    setPublicSegments: function(ids) { },
};
