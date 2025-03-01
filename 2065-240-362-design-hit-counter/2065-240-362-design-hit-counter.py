'''
1. make an array to store hits
hits = []
2. hit():
    hit.append(timestamp)
3. getHits():
    apply binary search
    target = timestamp - 300
    while (l<=r):
        if hits[mid] <= target:
            l+=1
        else:
            r-=1
    return len(hits) - l
'''

class HitCounter:

    def __init__(self):
        self.hits = []

    def hit(self, timestamp: int) -> None:
        self.hits.append(timestamp)

    def getHits(self, timestamp: int) -> int:
        target = timestamp - 300
        l = 0
        r = len(self.hits) - 1

        while (l <= r):
            mid = (l + r) // 2

            if self.hits[mid] <= target:
                l = mid + 1
            else:
                r = mid - 1
        
        return len(self.hits) - l


# Your HitCounter object will be instantiated and called as such:
# obj = HitCounter()
# obj.hit(timestamp)
# param_2 = obj.getHits(timestamp)