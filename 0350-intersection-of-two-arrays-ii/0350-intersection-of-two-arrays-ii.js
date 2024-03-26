/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/*
1. create a hashMap of nos in nums2 along with their occurance count
2. for each num in nums1,
  if num is present in hashMap with count > 0,
    push num to res
    decrement count in hashMap
3. return res
*/

var intersect = function(nums1, nums2) {
    var hashMap = {}
    var res = []
    for (var num of nums2) {
        hashMap[num] = (hashMap[num] || 0)+ 1
    }
    for (var num of nums1) {
        if (hashMap[num] > 0) {
            res.push(num)
            hashMap[num] = hashMap[num] - 1
        }
    }
    return res
};