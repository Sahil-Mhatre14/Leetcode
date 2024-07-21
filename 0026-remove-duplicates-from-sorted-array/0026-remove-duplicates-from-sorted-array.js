/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
 1. initialize pointers l & r to 1
 2. for r from 1...nums.length - 1,
        if nums[r] != nums[r-1], (it is uniqie)
            nums[l] = nums[r]
            l++
 3. return l
 */
var removeDuplicates = function(nums) {
    var l = 1;
    for (var r = 1; r < nums.length; r++) {
        if (nums[r] != nums[r-1]) {
            nums[l] = nums[r];
            l++
        }
    }
    return l
};