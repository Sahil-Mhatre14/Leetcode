class Solution:
    def climbStairs(self, n: int) -> int:
        one = 1
        two = 1

        for i in range(1, n):
            temp = one + two
            two = one
            one = temp

        return one