/**
 * @param {number[]} nums
 * @return {number}
 */

/*
1. keep track of sum of money robbed from prev 2 houses
2. iterate over houses
3. rob from house[i] if sum of money robbed from house [i] & prev to prev house is more than
sum of money robbed from prev house
*/

var rob = function(nums) {
    var rob1= 0 
    var rob2 = 0

    for (var i = 0; i < nums.length; i++) {
        var temp = Math.max(nums[i] + rob1, rob2)
        rob1 = rob2
        rob2 = temp
    }
    return rob2
};