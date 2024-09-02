/**
 
@param {number[]} nums
@param {number} val
@return {number}
*/

 /*
1. set k to first index
2. iterate over nums
    if num != val,
      set element at index k to num
      k = k + 1
3. return k
*/

var removeElement = function(nums, val) {
    var k = 0

    for(var i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[k] = nums[i]
            k = k + 1
        }
    }
    return k
};