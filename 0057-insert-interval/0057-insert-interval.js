/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

 /*
 1. res = []
 2. iterate over all intervals, i
    - if newInterval lies to left of interval[i],
        add new interval to res
        return res and rest of intervals
      else if newInterval lies to right of interval[i],
        add interval[i] to res
      else
        intervals are overlapping, so, merge them
        newInterval = (min(x1,x2), max(x1,x2))
  3. add newInterval to res
  4. return res
 */

var insert = function(intervals, newInterval) {
    var res = []
    for(var i = 0; i < intervals.length; i++) {
        if (newInterval[1] < intervals[i][0]) {
            res.push(newInterval)
            return [...res, ...intervals.slice(i)]
        } else if (intervals[i][1] < newInterval[0]) {
            res.push(intervals[i])
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]),
            Math.max(newInterval[1], intervals[i][1])]
            console.log("new interval", newInterval)
        }
    }
    console.log("Res", res)
    res.push(newInterval)
    return res
};