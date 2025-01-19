/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */

 /*
 1. make an arrray with key as cost and value as frequency of cost
 2. iterate i from 1 to max cost {
    if (coins >= i) {
        min = min(freq[i], coins // i)
        res = res + min
        coins = coins - min * i
    }
 }
 3/ return res
 */

var maxIceCream = function(costs, coins) {
    let freq = new Array(Math.max(...costs) + 1).fill(0)
    let res = 0

    for (let cost of costs) {
        freq[cost]++
    }

    for (let i = 1; i < freq.length; i++) {
        if (coins >= i) {
            let minBuy = Math.min(freq[i], Math.floor(coins / i))
            res = res + minBuy
            coins = coins - (minBuy * i)
        } else {
            break
        }
    }

    return res
};