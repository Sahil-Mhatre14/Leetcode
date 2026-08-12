class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        s = []

        for (i, temp) in enumerate(temperatures):
            while (len(s) > 0 and temp > s[-1][1]):
                topIdx = s[-1][0]
                res[topIdx] = i - topIdx
                s.pop()
            s.append((i, temp))
        
        return res
