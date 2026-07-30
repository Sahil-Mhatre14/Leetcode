'''
1. set = convert nums to set
longest = 0
2.
for each n in set:
    length = 0
    check if n-1 is present in set, if yes:
        continue
    else:
        while (n + length) in set:
            length = length + 1
    longest = max(longest, length)
3. return longest
    
'''

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        longest = 0

        for n in numSet:
            length = 0
            if n - 1 in numSet:
                continue
            else:
                while (n + length) in numSet:
                    length += 1
                longest = max(longest, length)
                
        return longest
