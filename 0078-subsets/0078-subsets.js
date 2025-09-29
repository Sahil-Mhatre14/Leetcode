/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 /*
 1. res = []
    subsets = []
 2. dfs(i) {
    if (i >= nums,length) {
        res.push([...subsets])
        return
    }
    subsets.push(nums[i])
    dfs(i+1)
    subset.pop()
    dfs(i+1)
 }
 3. dfs(0)
 4. return res
 */
var subsets = function(nums) {
    var result = []
    var subsets = []

    function dfs(i) {
        if (i >= nums.length) {
            result.push([...subsets])
            return
        }
        subsets.push(nums[i])
        dfs(i+1)
        subsets.pop()
        dfs(i+1)
    }
    dfs(0)
    return result
};