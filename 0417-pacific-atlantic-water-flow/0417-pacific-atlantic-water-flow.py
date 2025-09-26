class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        pac = set()
        atl = set()
        res = []
        rows = len(heights)
        cols = len(heights[0])

        def bfs(r,c,visited,prevHeight):
            if (r < 0 or r >= rows or c < 0 or c >= cols
            or (r,c) in visited or heights[r][c] < prevHeight ):
                return

            visited.add((r,c))

            bfs(r, c+1, visited, heights[r][c])
            bfs(r, c-1, visited, heights[r][c])
            bfs(r+1, c, visited, heights[r][c])
            bfs(r-1, c, visited, heights[r][c])


        for c in range(cols):
            bfs(0, c, pac, heights[0][c])
            bfs(rows - 1, c, atl, heights[rows-1][c])

        for r in range(rows):
            bfs(r, 0, pac, heights[r][0])
            bfs(r, cols - 1, atl, heights[r][cols-1])

        for r in range(rows):
            for c in range(cols):
                if (r,c) in pac and (r,c) in atl:
                    res.append((r,c))

        return res
