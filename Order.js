Order = {
    /**
     * The unique order ID.
     *
     * @type {string}
     */
    id: "",

    /**
     * The order creation time in game ticks.
     *
     * @type {number}
     */
    created: 0,

    /**
     * The order creation time in milliseconds since UNIX epoch time.
     *
     * @type {number}
     */
    createdTimestamp: 0,
    
    /**
     * Whether this order is active and visible to other players. An order can become non-active when the terminal doesn't have enough resources to sell or you are out of credits to buy.Whether this order is active and visible to other players. An order can become non-active when the terminal doesn't have enough resources to sell or you are out of credits to buy.
     *
     * @type {boolean|undefined}
     */
    active: true,

    /**
     * Either ORDER_SELL or ORDER_BUY.
     *
     * @type {string|ORDER_SELL|ORDER_BUY}
     */
    type: 'sell',

    /**
     * Either one of the RESOURCE_* constants or one of account-bound resources.
     *
     * @type {string}
     */
    resourceType: "",

    /**
     * The room where this order is placed.
     * @type {string}
     */
    roomName: "",

    /**
     * Currently available amount to trade.
     * @type {number}
     */
    amount: 0,

    /**
     * How many resources are left to trade via this order.
     * @type {number}
     */
    remainingAmount: 0,

    /**
     * Initial order amount.
     * @type {number|undefined}
     */
    totalAmount: 0,

    /**
     * The current price per unit.
     * @type {number}
     */
    price: 0
};
