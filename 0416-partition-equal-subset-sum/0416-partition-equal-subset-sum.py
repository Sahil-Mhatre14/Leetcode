class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        dp = set()
        dp.add(0)
        total = sum(nums)

        if (total % 2 != 0):
            return False

        target = (total / 2)

        for i in range(len(nums) - 1, -1, -1):
            nextDp = set()

            for item in dp:
                if (nums[i] + item) == target:
                    return True
                
                nextDp.add(nums[i] + item)
                nextDp.add(item)
            
            dp = nextDp

        return True if target in dp else False