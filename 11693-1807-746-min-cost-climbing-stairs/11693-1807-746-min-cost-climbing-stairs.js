/**
 * @param {number[]} cost
 * @return {number}
 */

 /*
 use DP
 1. append 0 to cost
 2. cost from ith stair = min(cost[i] + cost [i+1], cost[i], cost[i+2])
    so, we need to know i+1 and i+2 first
 3. return min(cost[0], cost[1])
 */
var minCostClimbingStairs = function(cost) {
    cost.push(0)

    for (let i = cost.length - 3; i >= 0; i--) {
        cost[i] = Math.min(cost[i] + cost[i+1], cost[i] + cost[i+2])
    }

    return Math.min(cost[0], cost[1])
};