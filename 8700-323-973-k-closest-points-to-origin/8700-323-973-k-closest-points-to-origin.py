class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        res = []
        minHeap = []
        heapq.heapify(minHeap)

        for point in points:
            dist = math.sqrt((point[0] - 0) ** 2 + (point[1] - 0) ** 2)
            heapq.heappush(minHeap, (dist, point))
        
        while k > 0:
            res.append(heapq.heappop(minHeap)[1])
            k-=1
        
        return res
       