class Solution:
    def kClosest(self, points: list[list[int]], k: int) -> list[list[int]]:
        maxHeap = []
        res = []

        heapq.heapify(maxHeap)

        for (x,y) in points:
            d = x ** 2 + y ** 2
            heapq.heappush(maxHeap, [-1 * d, [x, y]])

            if len(maxHeap) > k:
                heapq.heappop(maxHeap)

        for i in range(k):
            res.append(heapq.heappop(maxHeap)[1])

        return res
