/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (intervals.length == 0) {
        return true
    }
    
    intervals.sort((a, b) => a[0] - b[0])
    let prevEndTime = intervals[0][1]

    for (let i = 1; i < intervals.length; i++) {
        let [start, end] = intervals[i]
        if (start < prevEndTime) {
            return false
        } else {
            prevEndTime = end
        }
    }
    return true
};