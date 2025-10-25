class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
            
        def helper(homes):
            rob1 = 0
            rob2 = 0

            for i in range(0, len(homes)):
                temp = max(homes[i] + rob1, rob2) 
                rob1 = rob2
                rob2 = temp

            return rob2

        return max(helper(nums[:-1]), helper(nums[1:]))