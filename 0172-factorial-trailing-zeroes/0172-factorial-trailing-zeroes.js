/**
 * @param {number} n
 * @return {number}
 */

 /*
 1. fact = factorial(n)
    counter = 0
 2. for each char in fact,
   if char = 0 && no non-zero present after,
     counter++
 3. return counter
 */

var trailingZeroes = function(n) {
    var count = 0;

    while(n >= 5) {
        count = count + Math.floor(n/5)
        n = n/5
    }

    return count

}

// var trailingZeroes = function(n) {
//     var counter = 0
//     var fact = BigInt(1)

//     if (n === 0) {
//         return 0
//     }

//     const factorial = () => {
//         for (var i = n; i >= 1; i--) {
//             fact = fact * BigInt(i)
//         }
//         return fact
//     }

//     fact = factorial(n).toString()

//     const isNonZeroPresent = (s) => {
//         for (var j = 0; j < s.length; j++) {
//             if (s[j] != 0) {
//                 return true
//             }
//         }
//         return false
//     }

//     console.log("fact", fact)
//     for(var i = 0; i < fact.length; i++) {
//         if (fact[i] === '0' && !isNonZeroPresent(fact.substring(i))) {
//             counter++
//         }
//     }

//     return counter;
// };