/**
 * @param {string} s
 * @return {boolean}
 */

 /*
 1. input = valid chars joined & converted to lowecase
 2. check whether input is palindrome
 */
var isPalindrome = function(s) {
    const filterNonAlphanumeric = (str) => {
        return str.replace(/[^a-z0-9]/gi, "")
    }

    var input = filterNonAlphanumeric(s).toLowerCase()

    var l = 0
    var r = input.length - 1

    while (l < r) {
        if(input[l] != input[r]) {
            return false
        }
        l++
        r--
    }
    return true
};