class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        maxHeap = []
        res = 0
        
        for n in nums:
            maxHeap.append(n)

        heapq.heapify(maxHeap)

        while len(maxHeap) > k:
            heapq.heappop(maxHeap)
        
        return maxHeap[0]