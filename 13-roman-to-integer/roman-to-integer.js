/**
 * @param {string} s
 * @return {number}
 */

 /*
    1. Maintain hashMap of char & values
    2. For each char in s,
        if hashMap(nextChar) <= hashMap(char),
         res = res + hashMap(char)
        else
         res  res - hashMap(char)
    3. return res
         
 */
var romanToInt = function(s) {
    const hashMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    var res = 0;

    for (var i = 0; i < s.length; i++) {
        if (!hashMap[s?.[i+1]]) {
            res = res + hashMap[s?.[i]]
        } else if (hashMap[s?.[i+1]] <= hashMap[s?.[i]]) {
            res = res + hashMap[s?.[i]]
        } else {
            res = res - hashMap[s?.[i]]
        }
    }
    return res
};