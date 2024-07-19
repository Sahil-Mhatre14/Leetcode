/**
 * @param {number[]} digits
 * @return {number[]}
 */

 /*
 1. join the digits arr
 2. convert joined string to big integer
 3. add 1 to integer,
 4. convert interger to string
 5. split the string to form res arr
 */
var plusOne = function(digits) {
    var inputString = digits.join('')
    const inputNum = BigInt(inputString)
    const temp = inputNum + BigInt(1)
    const resArr = temp.toString().split("")
    return resArr
};