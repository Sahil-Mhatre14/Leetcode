/**
 * @param {number[][]} board
 * @return {number[][]}
 */

 /*
 1. crush rows
    use sliding window of length 3
 2. crush cols
 3. gravity
     similar to moivng zeroes
 */
var candyCrush = function(board) {
    let isDone = true
    let r = board.length
    let c = board[0].length

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c - 2; j++) {
            let num1 = Math.abs(board[i][j])
            let num2 = Math.abs(board[i][j+1])
            let num3 = Math.abs(board[i][j+2])

            if (num1 == num2 && num2 == num3 && num1 != 0) {
                isDone = false
                board[i][j] = -num1
                board[i][j+1] = -num2
                board[i][j+2] = -num3
            }

        }
    }

    for (let col = 0; col < c; col++) {
        for (let row = 0; row < r - 2; row++) {
            let num1 = Math.abs(board[row][col])
            let num2 = Math.abs(board[row+1][col])
            let num3 = Math.abs(board[row+2][col])

            if (num1 == num2 && num2 == num3 && num1 != 0) {
                isDone = false
                board[row][col] = -num1
                board[row+1][col] = -num2
                board[row+2][col] = -num3
            }

        }
    }

    // for (let i = 0; i < c; i++) {
    //     let idx = c - 1
    //     for (let j = c-1; j>=0; j--) {
    //         if (board[i][j] > 0) {
    //             board[idx][j] = board[i][j]
    //             idx--
    //         }
    //     }
    //     for (let j = idx; j>=0; j--) {
    //         board[j][i] = 0
    //     }
    // }
    
    for (let col = 0; col < c; col++) {
    let idx = r - 1  // Start from the last row
    for (let row = r - 1; row >= 0; row--) {
        if (board[row][col] > 0) {
            board[idx][col] = board[row][col]  // Move valid candies down
            idx--
        }
    }
    for (let row = idx; row >= 0; row--) {
        board[row][col] = 0  // Fill empty spaces with zero
    }
}

    return isDone ? board : candyCrush(board)
};