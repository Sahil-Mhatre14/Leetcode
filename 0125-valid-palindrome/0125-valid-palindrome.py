class Solution:
    def isPalindrome(self, s: str) -> bool:
        def filterAlphanumeric(s):
            return re.sub('[^a-z0-9]', '', s)
        
        cleanedStr = filterAlphanumeric(s.lower())

        l = 0
        r = len(cleanedStr) - 1

        print("cleaned string", cleanedStr)

        while (l < r):
            if cleanedStr[l] != cleanedStr[r]:
                return False
            l += 1
            r -= 1

        return True

