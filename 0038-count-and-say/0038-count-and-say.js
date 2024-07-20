/**
 * @param {number} n
 * @return {string}
 */

/* 
1. handle base case for n = 1 & n = 2
2. s="11", res = ""
3. for i = 3 to n
4. set c = 1
5. s = s + "$"
6. for s[1] to end.
        if(s[j] === s[j-1]) {
            c++
        } else {
            res = res + c + s[j-1]
        }
    s = res
7. return s
*/

// var countAndSay = function(n) {
//   if (n === 1) {
//     return "1"
//   } else if (n === 2) {
//     return "11"
//   }
//   var s="11"

//   for (var i = 3; i <=n; i++) {
//     s = s + "$"
//     var count = 1
//     var res = ""

//     for (var j = 1; j < s.length; j++) {
//         if (s[j] === s[j-1]) {
//             count = count + 1
//         } else {
//             res = res + count + s[j-1]
//             count = 1
//         }
//     }
//     s = res
//   }
//   return s

// };

var countAndSay = function(n) {

    const RLE = (num) => {
        console.log("num", num)
        var s = num.toString()
        var chunks = []
        var j = 0
        var res = ""
        for(var i = 0; i < s.length; i++) {
            if (s[i] != s[i+1]) {
                chunks.push(s.substring(j, i+1))
                j = i + 1
            }
        }
        console.log("chunks", chunks)
        for(var i = 0; i < chunks.length; i++) {
            res = res + chunks[i].length + chunks[i][0]
        }
        return res
    }

    if (n === 1) return "1"
    return RLE(countAndSay(n-1))
}