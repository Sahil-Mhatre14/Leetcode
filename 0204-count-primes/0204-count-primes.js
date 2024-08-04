/**
 * @param {number} n
 * @return {number}
 */

 /*
 1. create an array of composites and set all to false. Array size is n
 2. find limt = sqrt(n) rounded down
 3. for i = 1 to limit,
      if composites[i] == false,
        set all multiples of i to true // first multiple starts from i * i
 4. ans = number of false in composite arrays
 */
var countPrimes = function(n) {

    if (n == 0 || n == 1) {
        return false
    } 

    var composites = [true, true]

    for (var i = 2; i < n; i++) {
        composites[i] = false
    }

    var limit = Math.floor(Math.sqrt(n))

    for (var i = 2; i <= limit; i++) {
        if (composites[i] === false) {
            for (var j = i * i; j < n; j+=i) {
                composites[j] = true
            }
        }
    }

    var counter = 0
    for (var i = 0; i < composites.length; i++) {
        if (composites[i] === false) {
            counter = counter + 1
        }
    }

    return counter
};