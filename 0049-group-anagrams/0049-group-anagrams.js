/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 /*
1. var hashMap = {}
    var res = []
2. iterate over strs
    for str of strs {
        var pairFound = false
        iterate over keys of hashMap
        for key in hashMap {
            if isAnagram(key, str) {
                hashMap[key].push(str)
                pairFound = true
                break
            }
        }
        if !pairFound {
            hashMap[str] = str
        }

    }
 3. for value of hashMap {
    res.push(value)
 }
 4. return res
 */

// var groupAnagrams = function(strs) {
//     var hashMap = {}
//     var res = []

//     var isAnagram = (s1, s2) => {
//         if (s1.length != s2.length) {
//             return false
//         }
//         var mapOne = {}
//         for (var ch of s1) {
//             mapOne[ch] = (mapOne[ch] || 0) + 1
//         }
//         for (var ch of s2) {
//             if (!mapOne[ch]) {
//                 return false
//             }
//             mapOne[ch] = mapOne[ch] - 1
//         }
//         for (var ch of s2) {
//             if (mapOne[ch] < 0) {
//                 return false
//             }
//         }
//         return true
//     }

//     for (var str of strs) {
//         var anagramFound = false

//         for (var key in hashMap) {
//             if (isAnagram(str, key)) {
//                 hashMap[key].push(str)
//                 anagramFound = true
//                 break
//             }
//         }
//         if (!anagramFound) {
//             hashMap[str] = [str]
//         }
//     }

//     for (var value of Object.values(hashMap)) {
//         res.push(value)
//     }

//     return res
// };

var groupAnagrams = function(strs) {
    var hashMap = {};

    for (var str of strs) {
        // Sort each string to use it as a key
        var sortedStr = str.split('').sort().join('')

        if (!hashMap[sortedStr]) {
            hashMap[sortedStr] = [];
        }
        hashMap[sortedStr].push(str);
    }

   return Object.values(hashMap);
};

// var groupAnagrams = function(strs) {

// }
