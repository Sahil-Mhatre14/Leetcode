class Solution:
    def findRedundantConnection(self, edges: list[list[int]]) -> list[int]:
        adjMap = {}

        def dfs(src,target,prev):
            if src == target:
                return True
            for neighbour in adjMap[src]:
                if neighbour == prev:
                    continue
                if dfs(neighbour, target, src):
                    return True
            return False 

        for [n1,n2] in edges:
            if n1 not in adjMap:
                adjMap[n1] = []
            if n2 not in adjMap:
                adjMap[n2] = []
                
            adjMap[n1].append(n2)
            adjMap[n2].append(n1)
            if dfs(n2,n1,n1):
                return [n1,n2]
        