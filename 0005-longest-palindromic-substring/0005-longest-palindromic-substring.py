class Solution:
    def longestPalindrome(self, s: str) -> str:
        resLength = 0
        res = ""

        for i in range(0, len(s)):
            l = i
            r = i

            while ((l >= 0 and r <= len(s) - 1) and (s[l] == s[r])):
                if len(s[l:r+1]) > resLength:
                    resLength = len(s[l:r+1])
                    res = s[l:r+1]

                l-=1
                r+=1
            
        
            l = i
            r = i + 1

            while ((l >= 0 and r <= len(s) - 1) and (s[l] == s[r])):
                if len(s[l:r+1]) > resLength:
                    resLength = len(s[l:r+1])
                    res = s[l:r+1]

                l-=1
                r+=1
        
        return res