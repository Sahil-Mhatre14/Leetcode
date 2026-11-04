class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        res = nums[0]
        currSum = nums[0]

        for i in range(1, len(nums)):
            if currSum < 0:
                currSum = 0
            
            currSum += nums[i]
            res = max(res, currSum)

        return res