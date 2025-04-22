class Solution:
    def wallsAndGates(self, rooms: List[List[int]]) -> None:
        """
        Do not return anything, modify rooms in-place instead.
        """
        
        q = deque()
        visited = set()
        r = len(rooms)
        c = len(rooms[0])
        dist = 0

        for i in range(r):
            for j in range(c):
                if rooms[i][j] == 0:
                    q.append((i,j))
                    visited.add((i,j))
        
        while q:
            l = len(q)
            for _ in range(l):
                (i, j) = q.popleft()
                rooms[i][j] = dist

        
                
                directions = [(0, 1), (0, -1), (-1, 0), (1, 0)]

                for (dr, dc) in directions:
                    nr = i + dr
                    nc = j + dc

                    if (nr < 0 or nr >= r or nc < 0 or nc >= c or (nr, nc) in visited or rooms[nr][nc] == -1):
                        continue
                    
                    visited.add((nr, nc))
                    q.append((nr, nc))
            dist += 1
                    

