/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

 /*
1. res = []
pMap={}
sMap={}
var l = 0
2. count chars in p and store in pMap
   at same time, make sMap similarly
   if both maps are equal, add 0 to res
3. for r from p.length to s.length {
    sMap[r] = (sMap[r] || 0) + 1
    decrement s[l] count from sMap
    if sMap[s[l]] == 0,
      delete it
    l = l + 1
    isAnagram() && res.push(l)
}
4. isAnagram(str) {
    check if sMap equals to pMap
}
5. return res

 */
// var findAnagrams = function(s, p) {
//     var res = []
    
//     var hashMap = {}
//     for (var i = 0; i < p.length; i++) {
//         hashMap[p[i]] = (hashMap[p[i]] || 0) + 1
//     }

//     console.log("hashMap", hashMap)

//     var isAnagram = (str) => {
//         console.log("str", str)
//         var tempHashMap = {}
//         for (var i = 0; i < p.length; i++) {
//             tempHashMap[p[i]] = (tempHashMap[p[i]] || 0) + 1
//         }
//         if (str.length != p.length) return false
//         for (var i = 0; i < str.length; i++) {
//             if (tempHashMap?.[str[i]] && tempHashMap?.[str[i]] > 0) {
//                 tempHashMap[str[i]] = tempHashMap[str[i]] - 1
//             } else {
//                 return false
//             }
//         }
//         console.log("tempHashMap", tempHashMap)
//         for (var i = 0; i < str.length; i++) {
//             if (tempHashMap?.[str[i]] != 0) {
//                 return false
//             }
//         }
//         return true
//     }

//     for (var i = 0; i < s.length; i++) {
//         var currString = s.slice(i, i + p.length)
//         if (isAnagram(currString)) {
//             res.push(i)
//         }
//     }

//     return res
// };

var findAnagrams = function(s,p) {
    var sMap={}
    var pMap={}
    var res= []

    var isAnagram = () => {
        for (var key in pMap) {
            if (sMap[key] !== pMap[key]) {
                return false;
            }
        }
        return true;
    };

    for (var i = 0; i <  p.length; i++) {
        pMap[p[i]] = (pMap[p[i]] || 0) + 1
        sMap[s[i]] = (sMap[s[i]] || 0) + 1
    }

    isAnagram() && res.push(0)

    var l = 0

    for (var r = p.length; r < s.length; r++) {
        sMap[s[r]] = (sMap[s[r]] || 0) + 1
        sMap[s[l]] = sMap[s[l]] - 1

        if (sMap[s[l]] == 0) {
            delete sMap[s[l]]
        }
        l = l + 1
        isAnagram() && res.push(l)

    }

    return res
    
}