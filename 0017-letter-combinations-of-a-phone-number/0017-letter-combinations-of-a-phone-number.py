class Solution:
    def letterCombinations(self, digits: str) -> list[str]:
        digitsMap = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        res = []
        currStr = []

        def backtrack(i):
            if i >= len(digits):
                res.append("".join(currStr))
                return

            for ch in digitsMap[digits[i]]:
                currStr.append(ch)
                backtrack(i+1)
                currStr.pop()

        backtrack(0)
        return res