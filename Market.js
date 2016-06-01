/**
 * A global object representing the in-game market.
 * You can use this object to track resource transactions to/from your terminals, and your buy/sell orders (in development).
 * The object is accessible via the singleton Game.market property.
 *
 * @class
 */
Market = function() { };

Market.prototype =
{
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

     * @type {Array}
     */
    outgoingTransactions: [],

    /**
     * This property is still under development.
     * An array of your active and inactive buy/sell orders on the market, in the following format:
     [
         {
            id : "55c34a6b5be41a0a6e80c68b",
            active : true,
            type : "sell"
            resourceType : "OH",
            roomName : "W1N1",
            amount : 15821,
            price : 2.95
        }, {
            id : "55c34a6b52411a0a6e80693a",
            active : true,
            type : "buy"
            resourceType : "energy",
            roomName : "W1N1",
            amount : 94000,
            price : 0.45
        }, {
            id : "55c34a6b5be41a0a6e80c123",
            active : true,
            type : "sell"
            resourceType : "token",
            amount : 3,
            price : 50000
        }
     ]

     * @type {Array}
     */
    myOrders: [],

    /**
     * This property is still under development.
     * An array of all available buy/sell orders on the market.
     * Only active orders are visible.
     [
         {
             id : "55c34a6b5be41a0a6e80c68b",
             type : "sell"
             resourceType : "OH",
             roomName : "W1N1",
             amount : 15821,
             price : 2.95
         }, {
            id : "55c34a6b52411a0a6e80693a",
            type : "buy"
            resourceType : "energy",
            roomName : "W1N1",
            amount : 94000,
            price : 0.45
        }, {
            id : "55c34a6b5be41a0a6e80c123",
            type : "sell"
            resourceType : "token",
            amount : 3,
            price : 50000
        }
     ]

     * @type {Array}
     */
    orders: [],

    /**
     * This method is still under development.
     * Cancel a previously created order.
     * If a buy order provided, then the reserved credits amount will be refunded in full.
     * The 5% fee is not returned.
     *
     * @type {function}
     *
     * @param {string} orderId The order ID as provided in Game.market.myOrders.
     *
     * @return {number|OK|ERR_INVALID_ARGS}
     */
    cancelOrder: function(orderId) { },

    /**
     * This method is still under development.
     * Create a buy order in your terminal.
     * You will be charged price*amount*0.05 credits when the order is placed, and the price*amount credits will be reserved.
     * The maximum buy orders count is 50 per player.
     * You can cancel an order to refund the reserved credits amount.
     *
     * @type {function}
     *
     * @param {string} resourceType Either one of the RESOURCE_* constants or GAMETIME_TOKEN.
     * @param {number} price The price for one resource unit in credits. Can be a decimal number.
     * @param {number} totalAmount The amount of resources to be bought in total.
     * @param {string} [roomName] The room where your order will be created. You must have your own Terminal structure in this room, otherwise the created order will be temporary inactive. This argument is not used when resourceType equals to GAMETIME_TOKEN.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_FULL|ERR_INVALID_ARGS}
     */
    createBuyOrder: function(resourceType, price, totalAmount, roomName) { },

    /**
     * This method is still under development.
     * Create a sell order in your terminal.
     * You will be charged price*amount*0.05 credits when the order is placed.
     * The maximum sell orders count is 50 per player.
     *
     * @type {function}
     *
     * @param {string} resourceType Either one of the RESOURCE_* constants or GAMETIME_TOKEN. If your Terminal doesn't have the specified resource, the order will be temporary inactive.
     * @param {number} price The price for one resource unit in credits. Can be a decimal number.
     * @param {number} totalAmount The amount of resources to be sold in total. The Terminal doesn't have to contain all the given amount at the same time. If Infinity is provided, the order will remain active until the Terminal contains the specified resource.
     * @param {string} [roomName] The room where your order will be created. You must have your own Terminal structure in this room, otherwise the created order will be temporary inactive. This argument is not used when resourceType equals to GAMETIME_TOKEN.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_FULL|ERR_INVALID_ARGS}
     */
    createSellOrder: function(resourceType, price, totalAmount, roomName) { },

    /**
     * This method is still under development.
     * Execute a trade deal from your Terminal to another player's Terminal using the specified buy/sell order.
     * Your Terminal will be charged amount*linearDistanceBetweenRooms*0.1 energy units of transfer cost regardless of the order resource type.
     * You can use Game.map.getRoomLinearDistance method to estimate it.
     *
     * @type {function}
     *
     * @param {string} orderId The order ID as provided in Game.market.orders.
     * @param {string} targetRoomName The name of your room which has to contain an active Terminal with enough amount of energy.
     * @param {number} amount The amount of resources to transfer.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_ARGS}
     */
    deal: function(orderId, targetRoomName, amount) { }
};
