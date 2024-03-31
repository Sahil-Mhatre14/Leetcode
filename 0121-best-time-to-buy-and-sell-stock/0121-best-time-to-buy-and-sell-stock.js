/**
 * @param {number[]} prices
 * @return {number}
 */

 /*
 1. profits = []
 2. iterate over prices,
    profits[i] = 0
    j = i + 1
    deltaProfit = prices[j] - prices[i]
    profits[i] = max(deltaProfit, profits[i])
3. return max of profits
 */
// var maxProfit = function(prices) {
//     var profits = []
//     for (let i = 0; i < prices.length; i++) {
//         profits[i] = 0
//         for (let j = i + 1; j < prices.length; j++) {
//             let deltaProfit = prices[j] - prices[i]
//             profits[i] = Math.max(profits[i], deltaProfit)
//         }
//     }
//     return Math.max(...profits)
// };

/*
 1. left = 0, right = 1, maxProfit = 0
 2. iterate till right < prices.length
 3. if transacition is profitable,
     maxProfit = max(maxProfit, currentTransactionProfit)
     increment right
    else
      left = right
4. right++
5. return maxP
*/

var maxProfit = function(prices) {
    var maxP = 0;
    var left = 0;
    var right = 1;

    while (right < prices.length) {
        if (prices[right] > prices[left]) {
            var profitFromTransaction = prices[right] - prices[left]
            maxP = Math.max(maxP, profitFromTransaction)
        } else {
            left = right
        }
        right++
    }
    return maxP
};

