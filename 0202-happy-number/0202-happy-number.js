/**
 * @param {number} n
 * @return {boolean}
 */

 /*

 */
// var isHappy = function(n) {
//     var sum = 0
//     var hashMap = {}

//     var sumOfSquares = (number) => {
//         var sum = 0
//         while(number>0) {
//             var temp = number % 10
//             sum = sum + Math.pow(temp, 2)
//             number = Math.floor(number / 10)
//         }
//         return sum
//     }

//     while (!(n in hashMap)) {
//         hashMap[n] = n
//         var sum = sumOfSquares(n)
//         if (sum === 1) {
//             return true
//         }
//         n = sum
//     } 
//     return false
   
// };

var isHappy = function(n) {
    var hashMap = {}

    var findSum = (num) => {
        var res = 0;
        while (num > 0) {
            var unit = num % 10;
            res = res + Math.pow(unit, 2)
            num = Math.floor(num / 10)
        }
        n = res
        return res
    }

    while (true) {
        var sum = findSum(n)
        if (sum === 1) {
            return true
        } else if (hashMap[sum]) {
            return false
        } else {
            hashMap[sum] = sum
        }
    }
}