class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        numOfIslands = 0
        visited = set()
        rows = len(grid)
        cols = len(grid[0])

        def bfs(i, j):
            q = collections.deque()
            q.append((i,j))

            while len(q) > 0:
                xr, xc = q.popleft()
                visited.add((xr,xc))

                directions = [(0,1), (0,-1), (1,0), (-1,0)]

                for (dx, dy) in directions:
                    r = xr + dx
                    c = xc + dy

                    if (r < rows and r >= 0 and c < cols and c >= 0
                    and grid[r][c] == "1" and (r,c) not in visited):
                        q.append((r,c))
                        visited.add((r,c))

        for i in range(rows):
            for j in range(cols):
                if (i,j) not in visited and grid[i][j] == "1":
                    bfs(i,j)
                    numOfIslands += 1
        
        return numOfIslands

                