/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
 1. create a hashMap of numbes from 0 to n
 2. Iterate over nums, delete num from hashMap
 3. result is remaining key in the hashMap
 */
var missingNumber = function(nums) {
    var hashMap = {}
    for (var i = 0; i <= nums.length; i++) {
        hashMap[i] = i
    }
    for (var i=0; i < nums.length; i++) {
        delete hashMap[nums[i]]
    }
    return Object.keys(hashMap)[0]
};

var missingNumber = function(nums) {
    var res = 0
    for (var num of nums) {
        res = res ^ num
    }

    for (var i = 0; i <= nums.length; i++) {
        res = res ^ i
    }
    return res
};