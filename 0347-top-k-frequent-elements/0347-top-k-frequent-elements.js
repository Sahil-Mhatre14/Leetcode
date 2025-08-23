/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

 /*
 Use bucket sort
 1. hashMap = {count frequency of each num in nums}
    res = []
 2. bucket = [].size(nums.length + 1).fill([])
 3. for key, value of hashMap.entries() {
        bucket[value].push(key)
    }
 4. find top k elements
    for (var i = bucket.length - 1; i>=0; i--) {
        if (bucket[i].length > 0) {
            for (var n in bucket[i]) {
                res.push(n)
                if (res.length == k) {
                    return res
                }
            }
        }
    }
 */
var topKFrequent = function(nums, k) {
    var hashMap = {}
    var res = []

    // var bucket = new Array(nums.length + 1).fill([])
    var bucket = []

    for (var i = 0; i <=nums.length; i++) {
        bucket[i] = []
    }

    for (var n of nums) {
        hashMap[n] = (hashMap[n] || 0) + 1
    }

    for (var [key, value] of Object.entries(hashMap)) {
        bucket[value].push(key)
    }

    for (var i = bucket.length - 1; i >=0; i--) {
        if (bucket[i].length > 0) {
            for (var n of bucket[i]) {
                res.push(parseInt(n))
            }
            if (res.length == k) {
                return res
            }
        }
    }
};