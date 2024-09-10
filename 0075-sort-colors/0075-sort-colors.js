/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 /*
 1. i=0, l = 0, r = lastIndex
 2. Put 0s to the left and 2s to the right
 while (i <= r) {
    if nums[i] == 0 {
        swap with l
        l++
    } else if nums[i] == 2 {
        swap with r
        r--
        i-- // to handle edge case
    }
    i++
 }
 */
var sortColors = function(nums) {
    var i = 0
    var l = 0
    var r = nums.length - 1

    while (i <= r) {
        if (nums[i] == 0) {
            var temp = nums[i]
            nums[i] = nums[l]
            nums[l] = temp
            l++
        } else if (nums[i] == 2) {
            var temp = nums[i]
            nums[i] = nums[r]
            nums[r] = temp
            r--
            i--
        }
        i++
    }
};