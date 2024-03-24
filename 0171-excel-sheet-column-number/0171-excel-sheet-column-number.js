/**
 * @param {string} columnTitle
 * @return {number}
 */

 /*
    1. calculate offset,
    offset = (colNum - 1) % 26
    2. calculate how far offset is from A to get the letter
    letter = charCode(A + offset)
    3. colNum = floor(colNum - 1/26)
    4. repeat until colNum > 0
 */

// var titleToNumber = function(columnTitle) {
//     var res = 0
//     for (var i = columnTitle.length - 1; i >= 0; i--) {
//         res = res + (columnTitle.charCodeAt(i) - 64) * Math.pow(26, columnTitle.length - i - 1)
//     } 
//     return res
// };


var titleToNumber = function(columnTitle) {
   var res=0;

   for(var i = columnTitle.length - 1; i>=0; i--) {
    var charOffset = columnTitle.charCodeAt(i) - 64
    res = res + (charOffset * Math.pow(26, columnTitle.length - i - 1))
   }

   return res
};