/**
 * @param {string} s
 * @return {string}
 */

 /*
 1. res = ""
    resLength = 0
2. for each char i in s {
    for odd {
        l = i
        r = i
        work outwards. other method of checking palindrome
        while if l & i are equal & in bouds {
            if s[l, r+1].length > resLength {
                res = s[l, r+1]
                resLength = res.length
            }
            l--
            r++
        }
    }

    for even {
        l = i
        r = i + 1
        check for palindrome in same way as odd
    }
 }
3. return res
 */
var longestPalindrome = function(s) {
    var res = ""
    var resLength = 0

    for (var i = 0; i < s.length; i++) {
        var l = i
        var r = i

        while(l >=0 && r < s.length && s[l] == s[r]) {
            if (r - l + 1 > resLength) {
                res = s.slice(l, r + 1)
                resLength = r - l + 1
                
            }
            l--
            r++
        }

        var l = i
        var r = i + 1

        while(l >=0 && r < s.length && s[l] == s[r]) {
            if (r - l + 1 > resLength) {
                res = s.slice(l, r + 1)
                resLength = r - l + 1
            }
            l--
            r++
        }
    }
    return res
};