/**
 * @param {number} n
 * @return {number}
 */
// var hammingWeight = function(n) {
//     const binaryNumber = n.toString(2);
//     var res = 0;
//     console.log(binaryNumber)
//     for (var ch of binaryNumber) {
//         if (ch == '1') {
//             res = res + 1
//         }
//     }
//     return res
// };

var hammingWeight = function(n) {
   var res = 0;

   for(var i = 0; i < 32; i++) {
        if ((n >> i) & 1) {
            res = res + 1
        }
   }
   return res
};