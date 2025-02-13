'''
1. use a stack
2. iterate over asteroids:
    while stack is not empty and stack top's sign and current asteroid's sign are opp:
        t = stack.pop()
        if abs(current ast) > abs(t):
            stack.push(current ast)
        else if abs(current ast) < abs(t):
            stack.push(t)
3. return stack 
'''
# class Solution:
#     def asteroidCollision(self, asteroids: List[int]) -> List[int]:
#         stack = []

#         for i, asteroid in enumerate(asteroids):
#             if not stack or (not(((stack[-1] >= 0 and asteroid < 0) or (stack[-1] < 0 and asteroid >=0)))):
#                 stack.append(asteroid)
#             else:
#                 while stack and ((stack[-1] >= 0 and asteroid < 0) or (stack[-1] < 0 and asteroid >=0)):
#                     t = stack.pop()
#                     if abs(asteroid) > abs(t):
#                         stack.append(asteroid)
#                     elif abs(asteroid) < abs(t):
#                         stack.append(t)
#             print("stack", stack)
        
#         return stack

'''
1. stack = []
2. iterate over asteroids:
    if stack is not empty and stack top is positive and current asteroid is -ve:
        difference = stack top - asteroid
        if diffeence is > 0:
            asteroid = 0
        elif difference < 0:
            stack.pop()
        else:
            stack.pop()
            asteroid = 0
        if asteroid not 0:
            stack.push(asteroid)
3. return stack
'''
class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []

        for asteroid in asteroids:
            while stack and stack[-1] > 0 and asteroid < 0:
                diff = stack[-1] + asteroid

                if diff > 0:
                    asteroid = 0
                elif diff < 0:
                    stack.pop()
                else:
                    asteroid = 0
                    stack.pop()
            
            if not asteroid == 0:
                stack.append(asteroid)
        
        return stack

        