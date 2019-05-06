/**
 * The main global game object containing all the gameplay information.
 *
 * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game}
 *
 * @class
 */
Game = {
    /**
     * A hash containing all your construction sites with their id as hash keys.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#constructionSites}
     * @type {Array<string, ConstructionSite>}
     */
    constructionSites: {},

    /**
     * An object containing information about your CPU usage
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#cpu}
     */
    cpu: {
        /**
         * Your CPU limit depending on your Global Control Level.
         *
         * @type {number}
         */
        limit: 0,

        /**
         * An amount of available CPU time at the current game tick.
         * It can be higher than Game.cpu.limit.
         *
         * @type {number}
         */
        tickLimit: 0,

        /**
         * An amount of unused CPU accumulated in your bucket.
         *
         * @type {number}
         */
        bucket: 0,

        /**
         * An object with limits for each shard with shard names as keys. You can use setShardLimits method to re-assign them.
         *
         * @type {object<string,number>}
         */
        shardLimits: {},

        /**
         * This method is only available when Virtual machine is set to Isolated in your account runtime settings.
         * Use this method to get heap statistics for your virtual machine. The return value is almost identical to the Node.js function v8.getHeapStatistics().
         * This function returns one additional property: externally_allocated_size which is the total amount of currently allocated memory which is not included in the v8 heap but counts against this isolate's memory limit.
         * ArrayBuffer instances over a certain size are externally allocated and will be counted here.
         *
         * @return {object} Returns an objects with heap statistics in the following format:
         * {
               "total_heap_size": 29085696,
               "total_heap_size_executable": 3670016,
               "total_physical_size": 26447928,
               "total_available_size": 319649520,
               "used_heap_size": 17493824,
               "heap_size_limit": 343932928,
               "malloced_memory": 8192,
               "peak_malloced_memory": 1060096,
               "does_zap_garbage": 0,
               "externally_allocated_size": 38430000
           }
         */
        getHeapStatistics: function() {},

        /**
         * Get amount of CPU time used from the beginning of the current game tick. Always returns 0 in the Simulation mode.
         *
         * @return {number} Returns the currently used CPU time as a float number
         */
        getUsed: function () {},

        /**
         * This method is only available when Virtual machine is set to Isolated in your account runtime settings.
         * Reset your runtime environment and wipe all data in heap memory.
         */
        halt: function() {},

        /**
         * Allocate CPU limits to different shards. Total amount of CPU should remain equal to Game.cpu.shardLimits. This method can be used only once per 12 hours.
         * @param {object<string, number>} limits An object with CPU values for each shard in the same format as Game.cpu.shardLimits.
         *
         * @return {OK|ERR_BUSY|ERR_INVALID_ARGS}
         */
        setShardLimits: function(limits) {},
    },


    /**
     * A hash containing all your creeps with creep names as hash keys.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#creeps}
     * @type {object<string, Creep>}
     * @example
     * for(var i in Game.creeps) {
     *     Game.creeps[i].moveTo(flag);
     * }
     */
    creeps: {},


    /**
     * A hash containing all your power creeps with their names as hash keys. Even power creeps not spawned in the world can be accessed here.
     *
     * @see {@link https://docs.screeps.com/api/#Game.powerCreeps}
     * @type {object<string, PowerCreep>}
     * @example
     * for(var i in Game.powerCreeps) {
     *     Game.powerCreeps[i].moveTo(flag);
     * }
     */
    powerCreeps: {},

    /**
     * A hash containing all your flags with flag names as hash keys.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#flags}
     * @type {object<string, Flag>}
     * @example
     * creep.moveTo(Game.flags.Flag1);
     */
    flags: {},

    /**
     * Your Global Control Level
     *
     * @see {@link http://docs.screeps.com/control.html}
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#gcl}
     */
    gcl: {
        /**
         * The current level.
         *
         * @type {number}
         */
        level: 0,

        /**
         * The current progress to the next level.
         *
         * @type {number}
         */
        progress: 0,

        /**
         * The progress required to reach the next level.
         *
         * @type {number}
         */
        progressTotal: 0
    },

    /**
     * Your Global Power Level, an object with the following properties :
     *
     * @see {@link http://docs.screeps.com/power.html}
     * @see {@link https://docs.screeps.com/api/#Game.gpl}
     */
    gpl: {
        /**
         * The current level.
         *
         * @type {number}
         */
        level: 0,

        /**
         * The current progress to the next level.
         *
         * @type {number}
         */
        progress: 0,

        /**
         * The progress required to reach the next level.
         *
         * @type {number}
         */
        progressTotal: 0
    },

    /**
     * A global object representing world map.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203079191-Map}
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#map}
     */
    map: {
        /**
         * List all exits available from the room with the given name.
         *
         * @param {string} roomName The room name.
         *
         * @return {null|object} The exits information in the following format, or null if the room not found.
           {
               "1": "W8N4",    // TOP
               "3": "W7N3",    // RIGHT
               "5": "W8N2",    // BOTTOM
               "7": "W9N3"     // LEFT
           }
         *
         * @type {function}
         * @see {@link http://support.screeps.com/hc/en-us/articles/203079191-Map#describeExits}
         * @example
         * var exits = Game.map.describeExits('W8N3');
         */
        describeExits: function (roomName) {},

        /**
         * Find the exit direction from the given room en route to another room.
         *
         * @param {string|Room} fromRoom Start room name or room object.
         * @param {string|Room} toRoom Finish room name or room object.
         * @param {object} [opts] An object with the pathfinding options. See findRoute.
         *
         * @return {number|FIND_EXIT_TOP|FIND_EXIT_RIGHT|FIND_EXIT_BOTTOM|FIND_EXIT_LEFT|ERR_NO_PATH|ERR_INVALID_ARGS}
         * @type {function}
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/203079191-Map#findExit}
         */
        findExit: function (fromRoom, toRoom, opts) {},

        /**
         * Find route from the given room to another room.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/203079191-Map#findRoute}
         *
         * @type {function}
         *
         * @param {string|Room} fromRoom Start room name or room object.
         * @param {string|Room} toRoom Finish room name or room object.
         * @param {object} [opts] An object with the pathfinding options.
         * @param {function} [opts.routeCallback] This callback accepts two arguments: function(roomName, fromRoomName). It can be used to calculate the cost of entering that room. You can use this to do things like prioritize your own rooms, or avoid some rooms. You can return a floating point cost or Infinity to block the room.
         *
         * @return {Array|number|ERR_NO_PATH} The route array in the following format:
            [
                { exit: FIND_EXIT_RIGHT, room: 'arena21' },
                { exit: FIND_EXIT_BOTTOM, room: 'arena22' }
            ]
         */
        findRoute: function (fromRoom, toRoom, opts) {},

        /**
         * Get the linear distance (in rooms) between two rooms.
         * You can use this function to estimate the energy cost of sending resources through terminals, or using observers and nukes.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/203079191-Map#getRoomLinearDistance}
         *
         * @type {function}
         *
         * @param {string} roomName1 The name of the first room.
         * @param {string} roomName2 The name of the second room.
         * @param {boolean} [continuous] Whether to treat the world map continuous on borders. Set to true if you want to calculate the trade or terminal send cost. Default is false.
         *
         * @return {number} A number of rooms between the given two rooms.
         */
        getRoomLinearDistance: function (roomName1, roomName2, continuous) {},

        /**
         * Get a Room.Terrain object which provides fast access to static terrain data. This method works for any room in the world even if you have no access to it.
         *
         * @see {@link https://docs.screeps.com/api/#Game.map.getRoomTerrain}
         *
         * @type {function}
         *
         * @param {string} roomName The room name.
         *
         * @return {Room.Terrain} Returns new Room.Terrain object.
         */
        getRoomTerrain: function(roomName) {},

        /**
         * Get terrain type at the specified room position.
         * This method works for any room in the world even if you have no access to it.
         *
         * @deprecated use Game.map.getRoomTerrain instead.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/203079191-Map#getTerrainAt}
         *
         * @type {function}
         *
         * @param {number|RoomPosition} x X position in the room.
         * @param {number} [y] Y position in the room.
         * @param {string} [roomName] The room name.
         *
         * @note Alternative function: getTerrainAt(pos)
         * @param {RoomPosition} pos The position object.
         *
         * @return {"plain"|"swamp"|"wall"}
         */
        getTerrainAt: function (x, y, roomName) {},

        /**
         * Check if the room with the given name is available to move into
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/203079191-Map#isRoomAvailable}
         *
         * @type {function}
         *
         * @param {string} roomName The room name.
         *
         * @return {boolean}
         */
        isRoomAvailable: function (roomName) {}
    },

    /**
     * A global object representing the in-game market.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#market}
     * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market}
     * @see {@link http://docs.screeps.com/market.html}
     */
    market: {
        /**
         * Your current credits balance.
         *
         * @type {number}
         */
        credits: 0,

        /**
         * An array of the last 100 incoming transactions to your terminals with the following format:
         [{
            transactionId : "56dec546a180ce641dd65960",
            time : 10390687,
            sender : {username: "Sender"},
            recipient : {username: "Me"},
            resourceType : "U",
            amount : 100,
            from : "W0N0",
            to : "W10N10",
            description : "trade contract #1",
            order: {		// optional
                id : "55c34a6b5be41a0a6e80c68b",
                type : "sell",
                price : 2.95
            }
        }]
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#incomingTransactions}
         *
         * @type {Array}
         */
        incomingTransactions: [],

        /**
         * An array of the last 100 outgoing transactions from your terminals with the following format:
         [{
            transactionId : "56dec546a180ce641dd65960",
            time : 10390687,
            sender : {username: "Me"},
            recipient : {username: "Recipient"},
            resourceType : "U",
            amount : 100,
            from : "W0N0",
            to : "W10N10",
            description : "trade contract #1",
            order: {		// optional
                id : "55c34a6b5be41a0a6e80c68b",
                type : "sell",
                price : 2.95
            }
         }]
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#outgoingTransactions}
         *
         * @type {Array}
         */
        outgoingTransactions: [],

        /**
         *An object with your active and inactive buy/sell orders on the market.
         * {
                "55c34a6b5be41a0a6e80c68b": {
                    id : "55c34a6b5be41a0a6e80c68b",
                    created : 13131117,
                    active: true,
                    type : "sell"
                    resourceType : "OH",
                    roomName : "W1N1",
                    amount : 15821,
                    remainingAmount : 30000,
                    totalAmount : 50000,
                    price : 2.95
                },
                "55c34a6b52411a0a6e80693a": {
                    id : "55c34a6b52411a0a6e80693a",
                    created : 13134122,
                    active: true,
                    type : "buy"
                    resourceType : "energy",
                    roomName : "W1N1",
                    amount : 94000,
                    remainingAmount : 94000,
                    totalAmount : 94000
                    price : 0.45
                },
                "55c34a6b5be41a0a6e80c123": {
                    id : "55c34a6b5be41a0a6e80c123",
                    created : 13105123,
                    active: false,
                    type : "sell"
                    resourceType : "token",
                    amount : 0,
                    remainingAmount : 10,
                    totalAmount : 10,
                    price : 50000
                }
            }
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#orders}
         *
         * @type {Array<string,Order>}
         */
        orders: [],

        /**
         * Estimate the energy transaction cost of StructureTerminal.send and Market.deal methods.
         * The formula: Math.ceil( amount * ( Math.log( 0.1 * linearDistanceBetweenRooms + 0.9) + 0.1) )
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#calcTransactionCost}
         *
         * @type {function}
         *
         * @param {number} amount Amount of resources to be sent.
         * @param {string} roomName1 The name of the first room.
         * @param {string} roomName2 The name of the second room.
         *
         * @return {number} The amount of energy required to perform the transaction.
         */
        calcTransactionCost: function (amount, roomName1, roomName2) {
        },

        /**
         * This method is still under development.
         * Cancel a previously created order.
         * If a buy order provided, then the reserved credits amount will be refunded in full.
         * The 5% fee is not returned.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#cancelOrder}
         *
         * @type {function}
         *
         * @param {string} orderId The order ID as provided in Game.market.myOrders.
         *
         * @return {number|OK|ERR_INVALID_ARGS}
         */
        cancelOrder: function (orderId) {
        },

        /**
         * Change the price of an existing order.
         * If newPrice is greater than old price, you will be charged (newPrice-oldPrice) * remainingAmount * 0.05 credits.
         *
         * @param {string} orderId The order ID as provided in Game.market.orders.
         * @param {number} newPrice The new order price.
         * @return {OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_ARGS}
         */
        changeOrderPrice: function (orderId, newPrice) {
        },

        /**
         * Create a market order in your terminal.
         * You will be charged price * amount * 0.05 credits when the order is placed.
         * The maximum orders count is 50 per player.
         * You can create an order at any time with any amount, it will be automatically activated and deactivated depending on the resource/credits availability.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#createBuyOrder}
         *
         * @type {function}
         *
         * @param {string|ORDER_SELL|ORDER_BUY} type The order type, either ORDER_SELL or ORDER_BUY.
         * @param {string} resourceType Either one of the RESOURCE_* constants or SUBSCRIPTION_TOKEN.
         * @param {number} price The price for one resource unit in credits. Can be a decimal number.
         * @param {number} totalAmount The amount of resources to be traded in total.
         * @param {string} [roomName] The room where your order will be created. You must have your own Terminal structure in this room, otherwise the created order will be temporary inactive. This argument is not used when resourceType equals to GAMETIME_TOKEN.
         *
         * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_FULL|ERR_INVALID_ARGS}
         */
        createOrder: function (type, resourceType, price, totalAmount, roomName) {
        },

        /**
         * Execute a trade deal from your Terminal in yourRoomName to another player's Terminal using the specified buy/sell order.
         * Your Terminal will be charged energy units of transfer cost regardless of the order resource type.
         * You can use Game.market.calcTransactionCost method to estimate it.
         * When multiple players try to execute the same deal, the one with the shortest distance takes precedence.
         * You cannot execute more than 10 deals during one tick.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#deal}
         *
         * @type {function}
         *
         * @param {string} orderId The order ID as provided in Game.market.getAllOrders
         * @param {number} amount The amount of resources to transfer.
         * @param {string} [yourRoomName] The name of your room which has to contain an active Terminal with enough amount of energy. This argument is not used when the order resource type equals to SUBSCRIPTION_TOKEN.
         *
         * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_FULL|ERR_INVALID_ARGS}
         */
        deal: function (orderId, amount, yourRoomName) {
        },

        /**
         * This method is still under development.
         * Add more capacity to an existing order. It will affect remainingAmount and totalAmount properties. You will
         * be charged price*addAmount*0.05 credits.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#extendOrder}
         *
         * @type {function}
         *
         * @param {string} orderId The order ID as provided in Game.market.orders.
         * @param {number} addAmount How much capacity to add. Cannot be a negative value.
         *
         * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_ARGS}
         */
        extendOrder: function (orderId, addAmount) {
        },

        /**
         * This method is still under development.
         * Get other players' orders currently active on the market.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#getAllOrders}
         *
         * @type {function}
         *
         * @param {object|function} [filter] An object or function that will filter the resulting list using the lodash.filter method.
         *
         * @return {Array<Order>} An array of Orders
         */
        getAllOrders: function (filter) {
        },

        /**
         * This method is still under development.
         * Retrieve info for specific market order.
         *
         * @see {@link http://support.screeps.com/hc/en-us/articles/207928635-Market#getOrderById}
         *
         * @type {function}
         *
         * @param {string} id The order ID
         *
         * @return {Order} An order
         */
        getOrderById: function (id) {
        }
    },

    /**
     * An object with your global resources that are bound to the account, like subscription tokens.
     * Each object key is a resource constant, values are resources amounts.
     *
     * @type {Array<string>}
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#resources}
     */
    resources: {},

    /**
     * A hash containing all the rooms available to you with room names as hash keys.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#rooms}
     *
     * @type {Array<string, Room>}
     */
    rooms: {},

    /**
     * An object describing the world shard where your script is currently being executed in.
     *
     * @return {object} name - The name of the shard; type - Currently always equals to normal; ptr - Wether this shard belongs to the PTR.
     */
    shard: {},

    /**
     * A hash containing all your spawns with spawn names as hash keys.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#spawns}
     *
     * @type {Array<string, StructureSpawn>}
     */
    spawns: {},

    /**
     * A hash containing all your structures with structure id as hash keys.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#structures}
     *
     * @type {Array<string, Structure>}
     */
    structures: {},

    /**
     * System game tick counter. It is automatically incremented on every tick.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#time}
     *
     * @type {number}
     */
    time: 0,

    /**
     * Get an object with the specified unique ID.
     * It may be a game object of any type.
     * Only objects from the rooms which are visible to you can be accessed.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#getObjectById}
     *
     * @type {function}
     *
     * @param {string} id The unique identificator.
     *
     * @return {object|null}
     */
    getObjectById: function (id) {
    },

    /**
     * Send a custom message at your profile email.
     * This way, you can set up notifications to yourself on any occasion within the game.
     * You can schedule up to 20 notifications during one game tick.
     * Not available in the Simulation Room.
     *
     * @see {@link http://support.screeps.com/hc/en-us/articles/203016382-Game#notify}
     *
     * @param {string} message Custom text which will be sent in the message. Maximum length is 1000 characters.
     * @param {number} [groupInterval] If set to 0 (default), the notification will be scheduled immediately. Otherwise, it will be grouped with other notifications and mailed out later using the specified time in minutes.
     *
     * @return {void}
     */
    notify: function (message, groupInterval) {
    }
};
