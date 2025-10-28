class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        prevMax = nums[0]
        prevMin = nums[0]
        res = nums[0]

        for i in range(1, len(nums)):
            currMax = max(nums[i], nums[i] * prevMax, nums[i] * prevMin)
            currMin = min(nums[i], nums[i] * prevMax, nums[i] * prevMin)

            res = max(res, currMax)
            prevMax = currMax
            prevMin = currMin

        return res