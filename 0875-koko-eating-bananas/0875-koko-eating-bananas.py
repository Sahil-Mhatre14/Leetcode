'''
1. Use binary search from min eating speed to max eating speed
min eating speed (l) = 1
max eating speed (r) = max(piles)
'''

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        piles.sort()
        l = 1
        r = piles[-1]
        res = r

        while (l <= r):
            mid = (l + r) // 2
            hours = 0

            for pile in piles:
                hours = hours + math.ceil(pile / mid)

            if hours <= h:
                res = min(res, mid)
                r = mid - 1
            else:
                l = mid + 1

        return res

        