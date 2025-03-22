'''
1. maintain 2 stacks
2. iterate over s and t:
    if curr char is # :
        if stack length > 0:
            pop from stack
    else:
        push to stack
3. return true if content of stacks are same else return false
'''

class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        s2 = []
        s1 = []

        for ch in s:
            if ch != '#':
                s1.append(ch)
            elif len(s1) > 0 and ch == "#":
                s1.pop()

        for ch in t:
            if ch != '#':
                s2.append(ch)
            elif len(s2) > 0 and ch == "#":
                s2.pop()
        
        return "".join(s1) == "".join(s2)


