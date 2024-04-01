/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var l = 0;
    var r = s.length - 1;
    while (l < r) {
        var temp = s[l]
        s[l] = s[r]
        s[r] = temp
        l++
        r--
    }
    return s
};