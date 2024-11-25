/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

 /*
 1. l = 0
    r = 0
    res = 0
    hashMap = {}
 2. iterte over r
    for r = 0 to end {
        hashMap[r] = (hashMap[r] || 0) + 1
        while ((r - l + 1) - Max(hashMap.values()) < k) {
            hashMap[l] = hashMap[l] - 1
            l++
        }
        res = Math.max(res, r - l + 1)
    }
    return res
 */
var characterReplacement = function(s, k) {
    var l = 0
    var hashMap = {}
    var res = 0

    for (var r = 0; r < s.length; r++) {
        hashMap[s[r]] = (hashMap[s[r]] || 0) + 1
        while ((r - l + 1) - Math.max(...Object.values(hashMap)) > k) {
            hashMap[s[l]] = hashMap[s[l]] - 1
            l++
        }
        res = Math.max(res, r - l + 1)
    }
    return res
};