/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = 0
    for (var num of nums) {
        result = result ^ num
    }
    return result
};