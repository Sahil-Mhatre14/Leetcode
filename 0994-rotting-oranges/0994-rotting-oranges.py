class Solution:
    def orangesRotting(self, grid: list[list[int]]) -> int:
        minutes = 0
        rows = len(grid)
        cols = len(grid[0])
        visited = set()
        q = collections.deque()

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 2:
                    q.append((r,c))
                    visited.add((r,c))

        while len(q) > 0:
            lenq = len(q)
            changed = False
            for _ in range(lenq):
                r,c = q.popleft()
                directions = [(0,1), (0,-1), (-1,0), (1,0)]

                for (dr,dc) in directions:
                    nr = r + dr
                    nc = c + dc

                    if nr < 0 or nr >= rows or nc < 0 or nc >= cols or (nr,nc) in visited or grid[nr][nc] != 1:
                        continue
                    
                    changed = True
                    grid[nr][nc] = 2
                    q.append((nr,nc))
                    visited.add((nr,nc))
            if changed:
                minutes += 1

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1:
                    return -1
        
        return minutes
