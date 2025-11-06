class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        res=0
        intervals.sort()
        prevEnd = intervals[0][1]

        for i in range(1, len(intervals)):
            currStart = intervals[i][0]
            if currStart < prevEnd:
                prevEnd = min(prevEnd, intervals[i][1])
                res+=1
            else:
                prevEnd = intervals[i][1]

        return res 