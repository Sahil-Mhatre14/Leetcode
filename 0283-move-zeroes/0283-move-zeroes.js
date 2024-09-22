/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var l = 0

    for (var r = 0; r < nums.length; r++) {
        if (nums[r] != 0) {
            var temp = nums[l]
            nums[l] = nums[r]
            nums[r] = temp
            l++
        }
    }
};