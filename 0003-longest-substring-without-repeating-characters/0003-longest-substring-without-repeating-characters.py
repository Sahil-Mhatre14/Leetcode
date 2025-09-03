'''
1. l = 0
r = 0
charSet = set to track seen characters
res = 0
2. 
while r < len(string):
    while s[r] is seen:
        charSet.remove(s[l])
        l += 1
    res = max(res, r - l + 1)
    add s[r] in set
'''

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        res = 0
        charSet = set()
        l = 0
        r = 0

        for r in range(0, len(s)):
            while s[r] in charSet:
                charSet.remove(s[l])
                l+=1
            
            res = max(res, r - l + 1)

            charSet.add(s[r])

        return res
            