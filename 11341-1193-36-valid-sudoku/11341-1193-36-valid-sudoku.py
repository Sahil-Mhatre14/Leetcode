class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        squareMap = {}
        rowMap = {}
        colMap = {}

        for r in range(9):
            for c in range(9):
                ele = board[r][c]

                if ele == '.':
                    continue
                
                squareKey = (r//3,c//3)
                if not r in rowMap:
                    rowMap[r] = {}
                if not c in colMap:
                    colMap[c] = {}
                if not squareKey in squareMap:
                    squareMap[squareKey] = {}


                if ele in rowMap[r] or ele in colMap[c] or ele in squareMap[squareKey]:
                    return False

                rowMap[r][ele] = ele
                colMap[c][ele] = ele
                squareMap[squareKey][ele] = ele

        return True 
        