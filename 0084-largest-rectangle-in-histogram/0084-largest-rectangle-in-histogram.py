class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        maxArea = 0
        s = [] #(idx, height)

        for idx, h in enumerate(heights):
            start = idx
            while len(s) > 0 and h < s[-1][1]:
                i, height = s.pop()
                maxArea = max(maxArea, height * (idx - i))
                start = i
            s.append((start, h))
        
        for idx, h in s:
            maxArea = max(maxArea, h * (len(heights) - idx))

        return maxArea
            

            
