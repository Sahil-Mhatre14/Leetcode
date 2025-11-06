class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        ongoing = []
        intervals.sort()
        ongoing.append(intervals[0])

        for i in range(1, len(intervals)):
            currStart, currEnd = intervals[i]

            found = False
            for j in range(0, len(ongoing)):
                if currStart >= ongoing[j][1]:
                    ongoing[j] = intervals[i]
                    found = True
                    break
            
            if not found:
                ongoing.append(intervals[i])

        return len(ongoing)
