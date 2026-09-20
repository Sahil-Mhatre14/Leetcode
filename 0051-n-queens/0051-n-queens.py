class Solution:
    def solveNQueens(self, n: int) -> list[list[str]]:
        res = []
        board = []
        col = set()
        posD = set()
        negD = set()

        for r in range(n):
                board.append(["."] * n)

        def backtrack(r):
            if r >= n:
                temp = []
                for r in range(n):
                    temp.append("".join(board[r]))
                res.append(temp)
                return

            for c in range(0, n):
                if c in col or (r+c) in posD or (r-c) in negD:
                    continue
                
                col.add(c)
                posD.add(r+c)
                negD.add(r-c)
                board[r][c] = 'Q'

                backtrack(r+1)

                col.remove(c)
                posD.remove(r+c)
                negD.remove(r-c)
                board[r][c] = '.'

        backtrack(0)
        return res
