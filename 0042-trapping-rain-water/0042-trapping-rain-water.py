class Solution:
    def trap(self, height: List[int]) -> int:
        res = 0
        l = 0
        r = len(height) - 1
        lMax = height[l]
        rMax = height[r]

        while (l < r):
            if (lMax <= rMax):
                l += 1
                lMax = max(lMax, height[l])
                res = res + (lMax - height[l])
            else:
                r -= 1
                rMax = max(rMax, height[r])
                res = res +(rMax - height[r])
        
        return res