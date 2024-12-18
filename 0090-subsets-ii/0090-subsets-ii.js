/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
1. res = []
2. nums.sort()
3. dfs (i, subset) {
    if (i > nums.length) {
        res.push([...subset])
        return
    }
    dfs(i + 1, subset)
    subset.pop()
    if (i + 1 < nums.length && nums[i+1] == nums[i]) {
        i = i + 1
    }
    dfs(i + 1, subset)
}
4. dfs(0,[])
5. return res
*/

var subsetsWithDup = function(nums) {
    var res = []

    nums.sort()

    function dfs(i, subset) {
        if (i == nums.length) {
            res.push([...subset])
            return
        }
        subset.push(nums[i])
        dfs(i+1, subset)
        subset.pop()

        while (i + 1 < nums.length && nums[i+1] === nums[i]) {
            i++
        }
        dfs(i+1, subset)
    }

    dfs(0, [])
    return res
};