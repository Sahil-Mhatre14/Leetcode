/**
 * @param {number[][]} intervals
 * @return {number}
 */

 /*
 1. sort the intervals
 2. iterate over intervals {
    if interval overlaps {
        remove the interval with bigger end value
    }
 }
 */
var eraseOverlapIntervals = function(intervals) {
    let res = 0

    intervals.sort((a,b) => a[0] - b[0])

    let prevEnd = intervals[0][1]

    for (let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0]
        let end = intervals[i][1]

        if (start < prevEnd) {
            res++
            prevEnd = Math.min(end, prevEnd)
        } else {
            prevEnd = end
        }
    }
    return res
};