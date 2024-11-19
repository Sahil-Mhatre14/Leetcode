/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

 /*
 1. res = []  
 2.helper (arr, depth) 
    iterate over arr
    if arr[i] is an array && depth < n {
        helper(arr[i], depth + 1)
    } else {
    res.push(arr[i])
    }
    return res
 3. return helper (arr, n)
 */
var flat = function (arr, n) {
    var res = []

    var helper = (arr, depth) => {
        for (var val of arr) {
            if (Array.isArray(val) && depth < n) {
                helper(val, depth + 1)
            } else {
                res.push(val)
            }
        }
        return res
    }

    return helper(arr, 0)
};