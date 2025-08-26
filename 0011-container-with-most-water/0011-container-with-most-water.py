class Solution:
    def maxArea(self, height: List[int]) -> int:
        l = 0
        r = len(height) - 1
        area = 0

        while (l < r):
            base = r - l
            h = min(height[l], height[r])
            tempArea = base * h
            area = max(area, tempArea)

            if (height[l] <= height[r]):
                l += 1
            elif (height[r] < height[l]):
                r -= 1

        return area