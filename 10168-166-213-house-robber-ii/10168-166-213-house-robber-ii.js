/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
 Never consider first and last house together
 1. helper() {
    same as house robber 1
 }
 2. return max(helper(nums[1:], nums[:-1]))
 */
var rob = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    
    let helper = (homes) => {
        let rob1 = 0
        let rob2 = 0

        for (let home of homes) {
            let temp = Math.max(home + rob1, rob2)
            rob1 = rob2
            rob2 = temp
        }
        return rob2
    }

    return Math.max(helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)))
};