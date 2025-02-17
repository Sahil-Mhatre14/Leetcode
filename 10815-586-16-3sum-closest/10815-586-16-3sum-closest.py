'''
Similar to 3Sum
- compare distance from current sum to target and that of res and target
if abs(tempSum - target) < abs(res - target):
    res = tempSum
'''

class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()

        l = 0
        res = float('inf')

        for l in range(0, len(nums)):
            if l > 0 and nums[l] == nums[l-1]:
                continue
            
            num1 = nums[l]
            l = l+1
            r = len(nums) - 1

            while l < r:
                tempSum = num1 + nums[l] + nums[r]

                if abs(tempSum - target) < abs(res - target):
                    res = tempSum

                if tempSum > target:
                    r = r - 1
                else:
                    l = l + 1
                    while (l < len(nums) and nums[l] == nums[l-1]):
                        l = l + 1
        
        return res
        