/**
 * @param {number} num
 * @return {string}
 */

 /*
 1. make a list of mappings.
 Add special cases to list as well
 2. divide the number starting from largest symbol value
    check how many times division is possible
    update the result
    update num
 */
 
var intToRoman = function(num) {
    let symList = [["I", 1], ["IV", 4], ["V", 5], ["IX", 9], ["X", 10], ["XL", 40], ["L", 50], ["XC", 90], ["C", 100], ["CD", 400],["D", 500],["CM", 900],["M", 1000]]
    res = ""

    for (let [sym, val] of symList.reverse()) {
        if (Math.floor(num/val) > 0) {
            let t = Math.floor(num/val) 
            while (t > 0) {
                res = res + sym
                t--
            }
            num = num % val
        }
    }
    return res
};