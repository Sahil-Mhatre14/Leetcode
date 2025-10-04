/**
 * @param {number[][]} grid
 * @return {number}
 */

 /*
 similar to number of islands, but
 1. set area = 0 when doing bfs
 2. when dequing element, area++
 */
var maxAreaOfIsland = function(grid) {
    var visited = new Set()
    var area = 0
    var rows = grid.length
    var cols = grid[0].length

    var bfs = (row, col) => {
        var currArea = 0
        var q = []
        if (row >= rows || col >= cols || row <0 || col < 0
        || grid[row][col] != 1 || visited.has(`${row}, ${col}`)) {
            return
        }

        q.push([row, col])
        visited.add(`${row},${col}`)

        var directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]

        while (q.length > 0) {
            var [r, c] = q.shift()
            currArea++

            for (var [dr, dc] of directions) {
                var nr = r + dr
                var nc = c + dc

                if (nr >= 0 && nc >=0
                && nr < rows && nc < cols
                && grid[nr][nc] == 1 && !visited.has(`${nr},${nc}`)) {
                    q.push([nr, nc])
                    visited.add(`${nr},${nc}`)
                }
            
            }
        }
        return currArea

    }


    

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (grid[i][j] == 1 && !visited.has(`${i},${j}`)) {
                area = Math.max(area, bfs(i, j))
            }
        }
    }
    return area
};