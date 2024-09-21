/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

 /*
 1. res = n
 l = 1
 r = n
 2. perform binary search
      mid = l + r /2
      if isBadVersion(mid) {
        res = mid
        r = mid - 1
      } else {
        l = mid + 1
      }
3. return res
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var l = 1
        var r = n
        res = n

        while (l <= r) {
            var mid = Math.floor((l + r) / 2)

            if (isBadVersion(mid)) {
                res = mid
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return res
    };
};