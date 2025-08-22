class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}

        for idx, num in enumerate(nums):
            diff = target - num

            if diff in hashMap:
                return [idx, hashMap[diff]]
            
            hashMap[num] = idx

            