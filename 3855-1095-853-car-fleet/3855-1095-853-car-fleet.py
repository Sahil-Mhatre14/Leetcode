class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        arr = []
        stack = []

        for i in range(len(position)):
            arr.append((position[i], speed[i]))

        arr.sort(reverse=True)


        for car in arr:
            (pos, v) = car
            t = (target - pos)/v
            stack.append(t)

            if (len(stack) > 1 and stack[-1] <= stack[-2]):
                stack.pop()
            
        return len(stack)