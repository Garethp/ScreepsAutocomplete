

Market = function() { };

Market.prototype =
{
    /**
     * An array of the last 100 incoming transactions to your terminals
     *
     * @type {Array<{transactionId: string, time: number, sender: {username: string}, recipient: {username: string}, resourceType: string, amount: number, from: string, to: string, description: string}>}
     */
    incomingTransactions: [],

    /**
     * An array of the last 100 outgoing transactions from your terminals
     *
     * @type {Array<{transactionId: string, time: number, sender: {username: string}, recipient: {username: string}, resourceType: string, amount: number, from: string, to: string, description: string}>}
     */
    outgoingTransactions: []
};