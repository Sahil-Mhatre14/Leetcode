class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        # res= []
        
        # digitsMap = {
        #     "2": "abc",
        #     "3": "def",
        #     "4": "ghi",
        #     "5": "jkl",
        #     "6": "mno",
        #     "7": "qprs",
        #     "8": "tuv",
        #     "9": "wxyz",
        # }

        

        # def backtrack(i, currStr):
        #     if i >= len(digits):
        #         res.append(currStr)
        #         return
            
        #     chars = digitsMap[digits[i]]

        #     for char in chars:
        #         backtrack(i + 1, currStr + char)
            
        # if len(digits) > 0:
        #     backtrack(0, "")
            
        # return res

        res = []
        currStr = []

        charMap = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        def dfs(i, currStr):
            if i >= len(digits):
                res.append("".join(currStr))
                return

            for ch in charMap[digits[i]]:
                currStr.append(ch)
                dfs(i + 1, currStr)
                currStr.pop()

        if digits == "":
            return []

        dfs(0, [])
        return res
