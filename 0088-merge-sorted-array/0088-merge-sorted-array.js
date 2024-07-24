/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 /*
 1. point k to end of nums1
    point f = m -1
    point s = n - 1
 2. while(f&&s) 
        start from last elements in nums1 and nums2
            compare them and insert higher element at k
            k--
 3. copy leftover elements to nums1
 */
var merge = function(nums1, m, nums2, n) {
    var k = m + n - 1
    var f = m - 1
    var s = n - 1

    while (f>=0 && s>=0) {
        if(nums1[f] > nums2[s]) {
            nums1[k] = nums1[f]
            f--
        } else {
            nums1[k] = nums2[s]
            s--
        }
        k--
    }

    while (f >= 0 ) {
        nums1[k] = nums1[f]
        k--
        f--
    }

    while (s >= 0) {
        nums1[k] = nums2[s]
        k--
        s--
    }
    
};