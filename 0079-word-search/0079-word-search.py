class Solution:
    def exist(self, board: list[list[str]], word: str) -> bool:
        row = len(board)
        col = len(board[0])
        visited = set()

        def dfs(r,c,k):
            if k >= len(word):
                return True

            if r >= row or r < 0 or c >= col or c < 0 or board[r][c] != word[k] or (r,c) in visited:
                return False

            visited.add((r,c))
            
            res = dfs(r+1, c, k+1) or dfs(r-1,c,k+1) or dfs(r, c+1, k+1) or dfs(r, c-1, k+1)
            visited.remove((r,c))
            return res

        for i in range(row):
            for j in range(col):
                if dfs(i,j,0):
                    return True
        
        return False