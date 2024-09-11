/**
 * @param {string} s
 * @return {number}
 */
 /*
 1. build a hashtable of frequency count, call it hashMap
    res=0
    hasOdd=false
 2. iterate over frequencies,
      if count is event,
        res = res + count
      else
        res = res + count - 1 // odd number can contribute with it's max even part
        hasOdd = true
 3. return hasOdd ? res + 1 : res
 */
var longestPalindrome = function(s) {
    var hashTable = {}
    var res = 0
    var hasOdd = false

    for(var i = 0; i < s.length; i++) {
        hashTable[s[i]] = (hashTable[s[i]] || 0) + 1
    }

    for (var char in hashTable) {
        if (hashTable[char] % 2 == 0 ) {
            res = res + hashTable[char]
        } else {
            res = res + hashTable[char] - 1
            hasOdd = true
        }
    }
    return hasOdd ? res + 1 : res
};