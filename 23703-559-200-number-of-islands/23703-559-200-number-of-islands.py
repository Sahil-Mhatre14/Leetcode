class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        numOfIslands = 0
        q = []
        visited = set()
        m = len(grid)
        n = len(grid[0])

        def bfs(i, j):
            q.append((i, j))
            visited.add((i, j))

            directions = [(0,1), (0,-1), (1, 0), (-1, 0)]

            while q:
                (r, c) = q.pop()
                
                for (dr, dc) in directions:
                    nr = r + dr
                    nc = c + dc

                    if (nr >= 0 and nr < m and nc >=0 and nc < n and (nr,nc) not in visited and grid[nr][nc] == "1"):
                        visited.add((nr, nc))
                        q.append((nr, nc))

            


        for i in range(m):
            for j in range(n):
                if grid[i][j] == '1' and (i, j) not in visited:
                    bfs(i, j)
                    numOfIslands += 1
                
        return numOfIslands