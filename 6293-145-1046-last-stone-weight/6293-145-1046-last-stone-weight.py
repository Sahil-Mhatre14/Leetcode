class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        maxHeap = []

        for stone in stones:
            maxHeap.append(-stone)

        heapq.heapify(maxHeap)

        while len(maxHeap) > 1:
            y = -1 * heapq.heappop(maxHeap)
            x = -1 * heapq.heappop(maxHeap)

            if not x == y:
                heapq.heappush(maxHeap, -1 * (y - x))
        
        return -1 * maxHeap[0] if len(maxHeap) > 0 else 0