/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
 1. let sum = x
 outlier = y
 therefore, array sum = 2x + y
2. In each iteration, assumer num[i] to be outlier {
    - calculate x
    - if x is presen in array {
        outlier = x
    }
}
3. return most recent outlier
 */
var getLargestOutlier = function(nums) {
   let sum = nums.reduce((acc, curr) => acc + curr) 

   let freqMap = {}
   let y = -Infinity

   for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1
   }

   for (let num of nums) {
    let temp = sum - num
    freqMap[num]--

    let x = temp / 2
    if (freqMap[x] > 0) {
        y = Math.max(y, num)
    }
    freqMap[num]++
   }

   return y
};