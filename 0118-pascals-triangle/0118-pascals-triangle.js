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
   i, j = 0,0
   point i & j to last item in res
3. while j,
  temp.push(i+j)
  i++,j++
4. push [1,[...temp],1] to res
5. return res
 */

var generate = function(numRows) {
    var res = []

    for(var i = 0; i < numRows; i++) {
        if (i === 0) {
            res.push([1])
        } else if (i === 1) {
            res?.push([1,1])
        } else {
            var temp = []
            var lastRes = res[res.length - 1]

            for (var k = 1; k < lastRes.length; k++) {
                j = k-1
                temp?.push(lastRes[j] + lastRes[k])
            }
            res.push([1, ...temp, 1])
            
        }
    }
    return res
};