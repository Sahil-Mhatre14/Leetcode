/**
 * @param {number} n
 * @return {number}
 */
 
// var climbStairs = function(n) {
//     var one = 1;
//     var two = 1;

//     for (var i = 0; i < n - 1; i++) {
//         var temp = one
//         one = one + two
//         two = temp
//     }
//     return one
// };






var climbStairs = function(n) {
  var one = 1;
  var two = 1;
  for (i=1; i <= n-1; i++) {
    var temp = one + two
    two = one
    one = temp
  }
  return one
};