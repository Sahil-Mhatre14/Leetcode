class Solution:
    def wallsAndGates(self, rooms: List[List[int]]) -> None:
        """
        Do not return anything, modify rooms in-place instead.
        """
        q = collections.deque()
        visited = set()
        dist = 0
        rows = len(rooms)
        cols = len(rooms[0])

        for i in range(rows):
            for j in range(cols):
                if rooms[i][j] == 0:
                    q.append((i,j))
                    visited.add((i,j))
                    

        while (len(q) > 0):
            size = len(q)

            for i in range(size):
                (x, y) = q.popleft()
                rooms[x][y] = dist
                visited.add((x,y))

                directions = [(0,1), (0,-1), (1,0), (-1,0)]

                for (dx,dy) in directions:
                    nx = x + dx
                    ny = y + dy

                    if (nx >=0 and nx < rows and ny >=0 and ny < cols
                    and (nx,ny) not in visited and rooms[nx][ny] != -1):
                        q.append((nx,ny))
                        visited.add((nx,ny))
                
            dist += 1

            