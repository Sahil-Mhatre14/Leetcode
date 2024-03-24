/**
 * @param {string} s
 * @return {number}
 */

 /*
 1. create a hashMap with count of each char in s along with it's index
 2. loop over hashMap
 3. if count of a char = 1, return index of that char
 4. if loop is over, return -1 
 */
var firstUniqChar = function(s) {
    const hashMap = {}
   for (var i = 0; i < s.length; i++) {
    hashMap[s[i]] = {
        index: (hashMap[s[i]]?.index || i),
        count: (hashMap[s[i]]?.count || 0) + 1
    }
   }
   for (char in hashMap) {
    if (hashMap[char].count === 1) {
        return hashMap[char].index
    }
   }
    return -1
};