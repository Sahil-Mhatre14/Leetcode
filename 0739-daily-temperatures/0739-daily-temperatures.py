class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        stack = []

        for i, temp in enumerate(temperatures):
            while len(stack) > 0 and stack[-1][1] < temp:
                stackTopIdx = stack[-1][0]
                res[stackTopIdx] = i - stackTopIdx
                stack.pop()
            stack.append((i, temp))

        return res