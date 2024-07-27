/**
 * @param {number} x
 * @return {number}
 */

 /*
 1. use binary search,
   if mid ^ 2 > x,
     r = mid - 1
   else if (mid ^ 2 < x),
     l = mid + 1
     res = mid
   else res = mid
   return res
 */
var mySqrt = function(x) {
    var res = 0
    var l = 0;
    var r = x

    while (l <= r) {
        var mid = Math.floor((l + r) / 2)

        if (mid * mid > x) {
            r = mid - 1
        } else if (mid * mid < x) {
            l = mid + 1
            res = mid
        } else {
            res = mid
            return res
        }
    }
    return res
};