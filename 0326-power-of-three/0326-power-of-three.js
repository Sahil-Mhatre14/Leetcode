/**
 * @param {number} n
 * @return {boolean}
 */

 /*
- t = 1
- while t<=n
  t = t * 3
  if (t == n) return true
- return false 
 */

var isPowerOfThree = function(n) {
    if (n === 1) {
        return true
    }
    
    var t = 1;
    while(t <= n) {
        t = t * 3;
        if (t === n) return true
    }
    return false
};