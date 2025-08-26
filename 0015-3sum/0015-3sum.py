'''
1. res = []
2. sort nums to prevent duplicate triplets
3. fix ith element and run 2sum on next elements
for i in range (len(nums)):
    if i > 0 & ith elemnt and i-1 th elemnt are same:
        continue
    fix ith element
    l = i + 1
    r = len(nums) -1
    while (l < r):
        sum = nums[i] + nums[l] + nums[r]
        if (sum > 0):
            r--
        else (sum < 0):
            l++
        else:
            res.append([nums[i], nums[l], nums[r]])
            r--
            increment l in same manner as above
    return res
'''

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()

        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            
            l = i + 1
            r = len(nums) - 1

            while (l < r):
                threeSum = nums[i] + nums[l] + nums[r]
                if (threeSum > 0):
                    r -= 1
                elif (threeSum < 0):
                    l += 1
                    while (l < r and nums[l] == nums[l - 1]):
                        l += 1
                else:
                    res.append([nums[i], nums[l], nums[r]])
                    l += 1
                    r -= 1

                    while (l < r and nums[l] == nums[l - 1]):
                        l += 1

        return res

