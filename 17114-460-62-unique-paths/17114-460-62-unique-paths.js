/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

 /*
 Use DP
 1. row[i][j] = right value + down value
2. last row will always be all 1s
 */
var uniquePaths = function(m, n) {
    let row = new Array(n).fill(1)

    for (let i = 0; i < m - 1; i++) {
        prevRow = row
        let newRow = new Array(n).fill(1)
        for (let j = n -2; j >=0; j--) {
            newRow[j] = newRow[j+1] + prevRow[j]
        }
        row = newRow
    }
    return row[0]
};