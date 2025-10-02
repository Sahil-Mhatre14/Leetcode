'''
1. adjMap = {}
2. iterate over edges
add entries in adjMap
for n1,n2 in edges:
    if dfs(n1,n2):
        return edge
3.
dfs(prev, node, target):
    if node = target:
        return True

    for neighbour of node:
        if neighbour is prev:
            continue
        if dfs(node, neighbour, target):
            return True
    return False
'''

class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        adjMap = {}

        for i in range(1, len(edges) + 1):
            adjMap[i] = []

        def dfs(prev, curr, target):
            if curr == target:
                return True

            for neighbour in adjMap[curr]:
                if neighbour == prev:
                    continue
                if (dfs(curr, neighbour, target)):
                    return True
            return False

        for a,b in edges:
            adjMap[a].append(b)
            adjMap[b].append(a)

            if dfs(a,b,a):
                return [a,b]