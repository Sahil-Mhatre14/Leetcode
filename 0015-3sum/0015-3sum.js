/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 /*
1. res = []
2. sort the array to prevent duplicate triplets
3. iterate over array i,
     if i > 0 && nums[i] == nums[i-1],
       continue
     fix ith element, problem is now reduced to 2Sum
     l = i+1
     r = last element
     3sum = l + r
     if 3sum > 0,
       r = r-1
     else if 3sum < 0,
       l = l+1
     else
       res.push([ith element, l, r])
       l = l + 1
       while l != prev l and l < r,
         l = l + 1
4. return res
 */
var threeSum = function(nums) {
    var res = []

    nums.sort((a,b) => a - b)

    for (var i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue
        }
        l = i + 1
        r = nums.length - 1

        while (l < r) {
            sum = nums[i] + nums[l] + nums[r]
            if (sum > 0) {
                r--
            } else if (sum < 0) {
                l++
            } else {
                res.push([nums[i], nums[l], nums[r]])
                l++
                while (nums[l] == nums[l-1] && l < r) {
                    l++
                }
            }
        }
    }
    return res
};