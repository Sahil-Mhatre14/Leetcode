class Solution:
    def pacificAtlantic(self, heights: list[list[int]]) -> list[list[int]]:
        rows = len(heights)
        cols = len(heights[0])
        pac = set()
        atl = set()
        res = []

        def dfs(r, c, visited, prevHeight):
            if r < 0 or r >= rows or c < 0 or c >= cols or (r,c) in visited or heights[r][c] < prevHeight:
                return

            visited.add((r,c))
            directions = [(0,1), (0,-1), (1,0), (-1,0)]

            for (dx, dy) in directions:
                nr = r + dx
                nc = c + dy

                dfs(nr, nc, visited, heights[r][c])



        for r in range(0, rows):
            dfs(r, 0, pac, heights[r][0])
            dfs(r, cols - 1, atl, heights[r][cols-1])

        for c in range(0, cols):
            dfs(0, c, pac, heights[0][c])
            dfs(rows - 1, c, atl, heights[rows-1][c])

        for r in range(rows):
            for c in range(cols):
                if (r,c) in pac and (r,c) in atl:
                    res.append([r,c])

        return res
