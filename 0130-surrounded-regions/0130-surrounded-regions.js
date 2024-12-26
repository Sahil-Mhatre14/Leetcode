/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

 /*
 1. Use reverse thinking
 Connect everything except border regions
    - Find border cell and apply dfs
    - Mark the cells as 'T'
2. Iterate over board {
    mark all non T 0s to X
}
3. Iterate over board {
    convert all Ts to 0
}
 */
var solve = function(board) {
    var rows = board.length
    var cols = board[0].length

    const capture = (r, c) => {
        if (r >= rows || r < 0 || c >= cols || c < 0
        || board[r][c] != 'O') {
            return
        }
        board[r][c] = 'T'
        capture(r+1, c)
        capture(r-1, c)
        capture(r, c+1)
        capture(r, c-1)
    }

    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            if (([0, rows - 1].includes(r) || [0, cols - 1].includes(c))
            && board[r][c] == 'O') {
                capture(r,c)
            }
        }
    }

    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            if (board[r][c] == 'O') {
                board[r][c] = 'X'
            }
        }
    }

    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            if (board[r][c] == 'T') {
                board[r][c] = 'O'
            }
        }
    }
};