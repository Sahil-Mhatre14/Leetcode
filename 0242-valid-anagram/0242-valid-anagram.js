/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
1. If s.length != t.length, return false
2. iterate over t
3. if char of t is present in s, remove char of t from s
   else return false
4. if loop is over, return true

*/

// var isAnagram = function(s, t) {
//     if (s.length != t.length) {
//         return false
//     }
//     const removeChar = (char) => {
//         var arr = s.split('')
//         arr.splice(arr.indexOf(char), 1)
//         s = arr.join('')
//     }
//     for (var i = 0; i < t.length; i++) {
//         if (s.indexOf(t[i]) === -1) {
//             return false
//         }
//         removeChar(t[i])
//     }
//     return true
// };

/*
1. If s.length != t.length, return false
2. create a hashMap of chars in s
3. for each char of t,
  check if char is present in s with count > 0,
  if no, return false
4. return true on end of loop
*/

var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false
    }
    const hashMap = {}
    for (var i = 0; i < s.length; i++) {
         hashMap[s[i]] = (hashMap[s[i]] || 0) + 1
    }

    for (var i = 0; i < t.length; i++) {
        if (hashMap[t[i]] > 0) {
            hashMap[t[i]] = hashMap[t[i]] - 1
        } else {
            return false
        }
    }
    return true
};