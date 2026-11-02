class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        visited = set()
        num_of_islands = 0

        def bfs(i, j):
            if (i,j) in visited or i >= rows or i < 0 or j >=cols or j < 0 or grid[i][j] != "1" :
                return
            
            visited.add((i,j))

            q = []
            q.append((i, j))
            while len(q) > 0:
                (r, c) = q.pop(0)

                directions = [(0,1), (0, -1), (1,0), (-1,0)]

                for (xr, xc) in directions:
                    dr = r + xr
                    dc = c + xc

                    if (dr, dc) not in visited and dr >= 0 and dr < rows and dc >= 0 and dc < cols  and grid[dr][dc] == "1":
                        visited.add((dr, dc))
                        q.append((dr, dc))


        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == "1" and (i,j) not in visited:
                    bfs(i, j)
                    num_of_islands += 1
        
        return num_of_islands