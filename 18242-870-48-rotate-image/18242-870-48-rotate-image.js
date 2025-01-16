/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 /*
 1. l = 0
 r = 0
 2. while (l < r) {
    for i from 0 to cols - 1 {
        store top left in temp
        temp = matrix[t][l + i]
        matrix[top][left + 1] = matrix[bottom - i][left]
        matrix[bottom - i][left] = matrix[bottom][r - i]
        and so on..
        
    }
    l++
    r--
 }
 */
var rotate = function(matrix) {
    let l = 0
    let r = matrix.length - 1
    
    while (l < r) {
        for (let i = 0; i < r - l; i++) {
            let t = l
            let b = r

            let temp = matrix[t][l + i]
            matrix[t][l + i] = matrix[b - i][l]
            matrix[b - i][l] = matrix[b][r - i]
            matrix[b][r - i] = matrix[t + i][r]
            matrix[t + i][r] = temp
        }
        l++
        r--
    }
};