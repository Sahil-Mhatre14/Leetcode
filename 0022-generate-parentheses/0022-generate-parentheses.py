'''
At any time, push a parenthesis only if:
For opening: number of open parenthesis < n
For closing: number of closing parenthesis < number of opening parenthesis
1. res = []
stack = []
openN = 0
closeN = 0
2. backtrack(open, close):
    if open and close == n (base case), then join and return
    if (open == close == n):
       res.append("".join(stack))
    return

    if open < n:
        push ( in stack
        backtrack(openN + 1, close)
        pop from stack
    
    if close < open:
        similar to above
3. backtrack(0,0)
return res
'''

class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []
        stack = []
        openN = 0
        closeN = 0

        def backtrack(openN, closeN):
            if (openN == closeN == n):
                res.append("".join(stack))
                return

            if openN < n:
                stack.append("(")
                backtrack(openN + 1, closeN)
                stack.pop()

            if closeN < openN:
                stack.append(")")
                backtrack(openN, closeN + 1)
                stack.pop()

        backtrack(0,0)

        return res
