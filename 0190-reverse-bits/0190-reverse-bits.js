/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

 /*
 1. ans = 0
 2. for i from 0 to 31;
      - find last bit of n
      lastBit = (n >> i) & 1
      - or it with correct bit in ans
      ans = ans | (lastBit << (31 - i))
 3. return ans
 */

var reverseBits = function(n) {
    var res = 0;

    for (var i = 0; i < 32; i++) {
        var lastBit = (n >> i) & 1
        res = res | (lastBit << (31 - i))
    }
    return res >>> 0
};