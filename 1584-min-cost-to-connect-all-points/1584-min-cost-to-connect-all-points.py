class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        adj = defaultdict(list)
        v = set()
        res = 0

        for i in range(0, len(points)):
            for j in range(i+1, len(points)):
                p1 = points[i]
                p2 = points[j]
                dist = abs(p1[0] - p2[0]) + abs(p1[1] - p2[1])
                adj[i].append((dist, j))
                adj[j].append((dist, i))

        minHeap = []
        heapq.heapify(minHeap)
        heapq.heappush(minHeap, (0,0))

        while len(v) != len(points):
            p = heapq.heappop(minHeap)
            if p[1] in v:
                continue

            v.add(p[1])
            res += p[0]

            for neighbour in adj[p[1]]:
                if neighbour[1] not in v:
                    heapq.heappush(minHeap, (neighbour[0], neighbour[1]))
        
        return res
        