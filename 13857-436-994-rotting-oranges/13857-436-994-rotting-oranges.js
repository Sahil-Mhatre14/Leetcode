/**
 * @param {number[][]} grid
 * @return {number}
 */

 /*
 1. minutes = 0
 rotten=[]
 2. iterate over grid and add rotten oranges to rotten
 3. apply multi source bfs
    while rooten not empty{
        var updated = false
        var currentRottenCount = roten.length

        for 0 to currentRottenCount {
            [row, col] = rotten.dequeue()
            check 4 directions around rotten for new oranges
            if new orange == 1 {
                grid(new row, rew col) set to 2
                rotten.push(new row, new col)
                updated = true
            }
        }
        updated && minutes++
    }
4. iterate over grid, if any fresh orange present {
    return -1
}
5. return minutes
 */
var orangesRotting = function(grid) {
    var minutes = 0
    var rotten = []

    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 2) {
                rotten.push([i, j])
            }
        }
    }

    while(rotten.length > 0) {
        var updated = false
        var currentRottenCount = rotten.length;

        for (var i = 0; i < currentRottenCount; i++) {
            var [row, col] = rotten.shift()

            var directions = [[0, 1], [-1, 0], [1, 0], [0 ,-1]]

            for (var [dr, dc] of directions) {
                var nr = row + dr
                var nc = col + dc

                if (nr >= 0 && nr < grid.length 
                && nc >= 0 && nc < grid[0].length
                && grid[nr][nc] == 1) {
                    updated = true
                    grid[nr][nc] = 2
                    rotten.push([nr, nc])
                }

            }
        }
        updated && minutes++
       

    }

    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                return -1
            }
        }
    }
    return minutes
};