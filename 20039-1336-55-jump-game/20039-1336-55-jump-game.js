/**
 * @param {number[]} nums
 * @return {boolean}
 */
 /*
 1. Use greedy approach
 goal = last index
 if we reach from an index to goal index {
    goal = that index
 }
 2. return true if goal == 0th index
 */
var canJump = function(nums) {
    let goal = nums.length - 1

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i
        }
    }
    return goal == 0
};