'''
1. q = []
   res = []
2. heapq.heapify(q)
3. for element in arr:
    dist = x - element
    heapq.heappush(q, (-distance, -element))
    if heap.size > k:
        pop from heap
4. iterate over heap and push in res
5. return sorted res
'''

class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        res = []
        q = []

        heapq.heapify(q)

        for ele in arr:
            dist = abs(x - ele)

            heapq.heappush(q, (-dist, -ele))
            if len(q) > k:
                heapq.heappop(q)
        
        for _ in range(len(q)):
            res.append(-1 * heapq.heappop(q)[1])
        
        return sorted(res)
