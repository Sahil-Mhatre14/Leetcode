/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

 /*
 1. Iterate till sqrt(n)
 keep 2 arrays
 2. if i is factor then
    n / i is also a factor.
 3. For perfect squares,
        last element of both arrays will be same
        so, remove one
 4. join both arrays
 5. return k-1th element
 */
var kthFactor = function(n, k) {
    let arr1 = []
    let arr2 = []

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            arr1.push(i)
            arr2.push(Math.floor(n / i))
        }
        
    }

    if (arr1[arr1.length - 1] == arr2[arr2.length - 1]) {
        arr2.pop()
    }

    let res = arr1.concat(arr2.reverse())

    return k > res.length ? - 1: res[k - 1]
};