class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        visited = set()
        num_of_islands = 0

        def dfs(i, j):
            if (i, j) in visited or i >= rows or i < 0 or j >= cols or j < 0 or grid[i][j] != "1":
                return

            visited.add((i, j))

            directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

            for xr, xc in directions:
                dr = i + xr
                dc = j + xc
                dfs(dr, dc)

        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == "1" and (i, j) not in visited:
                    dfs(i, j)
                    num_of_islands += 1

        return num_of_islands