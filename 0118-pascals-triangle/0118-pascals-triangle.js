/**
 * @param {number} numRows
 * @return {number[][]}
 */

 /*
 1. create res arr = []
 2. iterate row times,
   if row = 1, push [1] to res
   if row = 2, push [1,1] to res
   else
   i, j = 0,1
   point i & j to last item in res
3. while j,
  temp.push(i+j)
  i++,j++
4. push [1,[...temp],1] to res
5. return res
 */

// var generate = function(numRows) {
//     var res = []

//     for(var i = 0; i < numRows; i++) {
//         if (i === 0) {
//             res.push([1])
//         } else if (i === 1) {
//             res?.push([1,1])
//         } else {
//             var temp = []
//             var lastRes = res[res.length - 1]

//             for (var k = 1; k < lastRes.length; k++) {
//                 j = k-1
//                 temp?.push(lastRes[j] + lastRes[k])
//             }
//             res.push([1, ...temp, 1])
            
//         }
//     }
//     return res
// };

/*
1. create res = [[1]]
2. iterate n-1 times
3. create temp arr by adding 0s to extreme ends of last item in res
4. create new array by adding pair of nos from temp array
5. push new arr to res
6. return res
*/

var generate = function(numRows) {
   var res = [[1]]
   for (var i = 0; i < numRows - 1; i++) {
    var temp = [0, ...res[res.length-1], 0]
    var newRow = []
    for (var j = 0; j < res[res.length - 1].length + 1; j++) {
        newRow.push(temp[j] + temp[j+1])
    }
    res.push(newRow)
   }
   return res
};

// var generate = function(numRows) {
//     var res = [[1]]
//     if (numRows === 1) return res

//     for(var i = 1; i < numRows; i++) {
//         var temp = [0, ...res[i - 1], 0]
//         var row = []
//         for (var j = 0; j < temp.length - 1; j++) {
//             row.push(temp[j] + temp[j + 1])
//         }
//         res.push(row)
//     }
//     return res
// }