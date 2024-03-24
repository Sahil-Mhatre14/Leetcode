/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
1. iterate over nums
2. check if nums[i] is present in hashMap, if true
  return true
  else
   add nums[i] to hashMap & move to next element in nums
3. return false if entire array is iterated
*/

var containsDuplicate = function(nums) {
    if(nums.length === 1) {
        return false
    }
    var hashMap = {}
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] in hashMap) {
            return true
        } else {
            hashMap[nums[i]] = i
        }
    }
    return false
};