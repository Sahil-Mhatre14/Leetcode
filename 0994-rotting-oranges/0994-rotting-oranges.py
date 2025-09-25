class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q = collections.deque()
        rows = len(grid)
        cols = len(grid[0])
        t = 0

        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 2:
                    q.append((i,j))

        while (len(q) > 0):
            l = len(q)
            updated = False
            for i in range(l):
                (x,y) = q.popleft()
                

                directions = [(0,1),(0,-1),(1,0),(-1,0)]

                for dx,dy in directions:
                    nx = x + dx
                    ny = y + dy

                    if (nx >= 0 and nx < rows and ny >= 0 and ny < cols
                    and grid[nx][ny] == 1):
                        grid[nx][ny] = 2
                        q.append((nx,ny))
                        updated = True
            
            if updated:          
                t += 1

        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1:
                    return -1

        return t