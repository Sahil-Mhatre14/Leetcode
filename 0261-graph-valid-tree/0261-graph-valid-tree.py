class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        adjList = {}
        visited = set()

        for i in range(n):
            adjList[i] = []

        for [n1,n2] in edges:
            adjList[n1].append(n2)
            adjList[n2].append(n1)

        def dfs(i, prev):
            if i in visited:
                return False
            
            visited.add(i)

            for neighbour in adjList[i]:
                if (neighbour == prev):
                    continue
                else:
                    if not(dfs(neighbour, i)):
                        return False
            
            return True

        return dfs(0, -1) and len(visited) == n