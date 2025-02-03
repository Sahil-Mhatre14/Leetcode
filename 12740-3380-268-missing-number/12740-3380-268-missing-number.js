/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let res = 0
    for (let n of nums) {
        res = res ^ n
    }

    for (let i = 0; i <= nums.length; i++) {
        res = res ^ i
    }

    return res
};
