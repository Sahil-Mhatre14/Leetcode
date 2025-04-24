class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        pac = set()
        atl = set()
        res = []

        rows = len(heights)
        cols = len(heights[0])

        def dfs(r, c, visited, prevHeight):
            if (r < 0 or r >= rows or c < 0 or c >= cols or
            (r,c) in visited or heights[r][c] < prevHeight):
                return

            visited.add((r,c))
            
            dfs(r+1, c, visited, heights[r][c])
            dfs(r - 1, c, visited, heights[r][c])
            dfs(r, c+1, visited, heights[r][c])
            dfs(r, c-1, visited, heights[r][c])


        for i in range(0, cols):
            dfs(0, i, pac, heights[0][i])
            dfs(rows - 1, i, atl, heights[rows - 1][i])
        
        for r in range(0, rows):
            dfs(r, 0, pac, heights[r][0])
            dfs(r, cols - 1, atl, heights[r][cols - 1])

        for r in range(rows):
            for c in range(cols):
                if (r,c) in pac and (r,c) in atl:
                    res.append([r, c])

        return res