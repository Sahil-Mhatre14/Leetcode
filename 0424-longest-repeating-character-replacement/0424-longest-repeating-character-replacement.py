'''
1. l = 0, r = 0, res = 0
charMap = {}
2.
for i from 0 to end:
    charMap[s[i]] ++
    while (r - l + 1 ) - max frequence > k:
        decerement frequency of s[l]
        l += 1
    update result
    res = max(res, current window size)
3. return res
'''

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        l = 0
        r = 0
        res = 0
        charMap = {}

        for r in range(0, len(s)):
            charMap[s[r]] = charMap.get(s[r], 0) + 1
    
            while ((r - l + 1) - max(charMap.values()) > k):
                charMap[s[l]] -= 1
                l += 1
            
            res = max(res, r - l + 1)
        
        return res