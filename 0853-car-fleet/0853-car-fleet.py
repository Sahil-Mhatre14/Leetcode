class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        # stack = []
        # arr = []

        # for i in range(len(position)):
        #     arr.append((position[i], speed[i]))

        # arr.sort(reverse=True)


        # for car in arr:
        #     (pos, v) = car
        #     t = (target - pos)/v
        #     stack.append(t)

        #     if (len(stack) > 1 and stack[-1] <= stack[-2]):
        #         stack.pop()
            
        # return len(stack)

        stack = []
        arr = []
        
        for i in range(len(position)):
            arr.append((position[i], speed[i]))

        arr.sort(reverse=True)

        timeArr = []

        for car in arr:
            t = (target - car[0]) / car[1]
            timeArr.append(t)

            if len(timeArr) > 1 and t <= timeArr[-2]:
                timeArr.pop()

        return len(timeArr)
            