'''
Apply BFS
1.
Map target to top right 
x = abs(x)
y= abs(y)
2. search boundry is -2 <= new_x <= x+2 and -2 <= new_y <= y+2
because if we move 2 steps ahead, we can still come back
'''

class Solution:
    def minKnightMoves(self, x: int, y: int) -> int:
        x = abs(x)
        y = abs(y)

        directions = [(1,2), (2, 1), (2, -1), (-1, 2), (-1, -2), (-2, -1), (-2, 1), (1, -2)]
        visited = set()
        queue = collections.deque([(0,0)])
        steps = 0

        while queue:
            for _ in range(len(queue)):
                curr_x, curr_y = queue.popleft()
                

                if curr_x == x and curr_y == y:
                    return steps
                
                for (dx, dy) in directions:
                    new_x = curr_x + dx
                    new_y = curr_y + dy

                    if (new_x, new_y) not in visited and (-2 <= new_x <= x + 2 and -2 <= new_y <= y+2):
                        queue.append((new_x, new_y))
                        visited.add((new_x, new_y))

            steps = steps + 1

        return steps

        