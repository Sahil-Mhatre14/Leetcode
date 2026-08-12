class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        arr = []
        s = []

        for i in range(len(position)):
            arr.append((position[i], speed[i]))
        
        arr.sort(reverse=True)

        for i in range(len(arr)):
            time = (target - arr[i][0]) / arr[i][1]
            s.append(time)
            if len(s) >= 2 and (s[-1] <= s[-2]):
                s.pop()
        
        return len(s)

        
        
            