/**
 * @param {string} s
 * @return {number}
 */
 /*
 1. create a set, charSet
 res = 0
 l = 0
 2. r = 0 to s.length {
    while (s[r] in set) {
        remove s[l] from set
        charSet.delete(s[l])
        l++
    }
    Add s[r] to set
    res = max(res, r - l + 1)
 }
 3. return res
 */
var lengthOfLongestSubstring = function(s) {
    var charSet = new Set()
    var l = 0
    var res = 0

    for (var r = 0; r < s.length; r++) {
        while (charSet.has(s[r])) {
            charSet.delete(s[l])
            l++
        }
        charSet.add(s[r])
        res = Math.max(res, r - l + 1)
    }
    return res
};