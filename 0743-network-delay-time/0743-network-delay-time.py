class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        time = [float("inf")] * (n + 1)
        time[k] = 0

        for i in range(n):
            for [u,v,t] in times:
                if u == float("inf"):
                    continue
                if time[u] + t < time[v]:
                    time[v] = time[u] + t
        
        res = max(time[1:])
        return res if res != float("inf") else -1