/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

 /*
 1. set output matrix of m*n order to all -1
 queue=[]
 2. iterate over mat {
    if element is 0 {
        push [row, col] to queue
        set output[row,col] to 0
    }
 }
 3. dequeue [row, col] from quque until it's not empty {
    - explore 4 sides of row,col maininting bounds
    - if -1 is present for explored row and col in output {
        output[explored_row][explore_col] = mat[row][col] + 1
        queue.push([explored row and col])
    }
 }
 4. return output
 */

var updateMatrix = function(mat) {
    var output = []
    var queue = []
    var m = mat.length
    var n= mat[0].length

    var output = new Array(m).fill().map(()=> new Array(n).fill(-1))

    for(var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (mat[i][j] == 0) {
                output[i][j] = 0
                queue.push([i,j])
            }
        }
    }

    var directions = [[0,1],[0,-1], [1,0], [-1,0]]

    while(queue.length > 0) {
        var [row, col] = queue.shift()
        
        for (var [dr, dc] of directions) {
            var newRow = row + dr
            var newCol = col + dc

            if (newRow >=0 && newCol >=0 &&
             newRow < m && newCol < n && 
             output[newRow][newCol] == -1) {
                output[newRow][newCol] = output[row][col] + 1
                queue.push([newRow, newCol])
            }
        }
    }
    console.log(output)
    return output
    
};