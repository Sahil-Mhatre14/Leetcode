class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        res = []
        board = []
        cols = set()
        posD = set()
        negD = set()

        for i in range (n):
            board.append(["."] * n)

        def backtrack(r):
            if r >= n:
                combination = []
                temp = board.copy()
                for r in temp:
                    combination.append("".join(r))
                res.append(combination)
                return

            for c in range(n):
                if c in cols or (r+c) in posD or (r-c) in negD:
                    continue

                board[r][c] = 'Q'
                cols.add(c)
                posD.add(r+c)
                negD.add(r-c)

                backtrack(r+1)

                board[r][c] = '.'
                cols.remove(c)
                posD.remove(r+c)
                negD.remove(r-c)

        backtrack(0)
        return res