class Solution:
    def maxAreaOfIsland(self, grid: list[list[int]]) -> int:
        res = 0
        visited = set()
        rows = len(grid)
        cols = len(grid[0])

        def bfs(i,j, currArea):
            q = []
            q.append((i,j))
            visited.add((i,j))

            directions = [(0,1), (0,-1), (1,0), (-1,0)]

            while (len(q) > 0):
                xr, xc = q.pop(0)
                currArea += 1

                for (dr, dc) in directions:
                    nr = xr + dr
                    nc = xc + dc

                    if nr >=0 and nr < rows and nc >= 0 and nc < cols and (nr, nc) not in visited and grid[nr][nc] == 1:
                        q.append((nr, nc))
                        visited.add((nr, nc))
                        
            return currArea
                
                

        for i in range(rows):
            for j in range(cols):
                if grid[i][j] not in visited and grid[i][j] == 1:
                    res = max(res, bfs(i, j, 0))

        return res