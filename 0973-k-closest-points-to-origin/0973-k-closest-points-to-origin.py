class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        res = []
        minHeap = []
        heapq.heapify(minHeap)

        for [x, y] in points:
            distance = math.sqrt(x ** 2 + y ** 2)
            heapq.heappush(minHeap, (distance, [x,y]))

        for i in range(0, k):
            res.append(heapq.heappop(minHeap)[1])

        return res

       