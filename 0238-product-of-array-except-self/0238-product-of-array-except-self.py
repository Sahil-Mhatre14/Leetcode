'''
1. res = []
2. create a prefix array.
    Initialize to all 1s
    from i = 1 to end:
        prefix[i] = prefix[i - 1] * nums[i - 1]
3. create a suffix array
    Initialize to all 1s
    from i = end - 1 to start:
        suffix[i] = suffix[i + 1] * nums[i + 1]
4. res[i] = prefix[i] * suffix[i]
5. return res
'''

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res = [1] * n
        prefix = [1] * n
        suffix = [1] * n

        for i in range(len(nums)):
            prefix[i] = 1
            suffix[i] = 1
        
        for i in range(1, len(nums)):
            prefix[i] = prefix[i - 1] * nums[i - 1]

        for i in range(len(nums) - 2, -1, -1):
            suffix[i] = suffix[i + 1] * nums[i + 1]

        for i in range(0, len(nums)):
            res[i] = prefix[i] * suffix[i]

        return res
