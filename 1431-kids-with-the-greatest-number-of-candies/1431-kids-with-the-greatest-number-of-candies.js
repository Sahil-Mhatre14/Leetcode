/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 /*
 1. maxCandies = max(candies)
 res = []
 2. for i from 0 to end {
    if candies[i] + extraCandies >= maxCandies {
        res.push(true)
    } else {
        res.push(false)
    }
    }
3. return res
 */
var kidsWithCandies = function(candies, extraCandies) {
    var res = []
    var maxCandies = Math.max(...candies)

    for (var i = 0; i< candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
            res.push(true)
        } else {
            res.push(false)
        }
    }
    return res
};