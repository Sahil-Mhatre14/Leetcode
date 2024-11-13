/**
 * @param {character[][]} grid
 * @return {number}
 */
 /*
 1. visited = []
 2. traverse the grid,
 if element is 1 and not in visited {
    bfs(element)
    numberOfIslands++
 }
 3. bfs(element) {
    add element index to visited
    q= []
    add element index to q

    while (q is not empty) {
        x = dequeue
        add x to visited
        for 4 elements around x,
           if element not visited and equals to 1,
            add elements in visited
            add elements in q
    }
 }
 4. return numberOfIslands
 */
// var numIslands = function(grid) {
//     var visited = new Set()
//     var rows = grid.length;
//     var cols = grid?.[0]?.length
//     var numberOfIslands = 0

//     var bfs = (row, col) => {
//         var q = []
//         q.push([row, col])
//         visited.add(`${newRow}, ${newCol}`)
//         var directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]


//         while (q.length !== 0) {
//             var [xr, xc] = q.shift()

//             for (var [dr, dc] of directions) {
//                 var newRow = xr + dr
//                 var newCol = xc + dc

//                 if (newRow >=0 && newRow <rows && newCol >=0 && newCol <cols
//                 && grid[newRow][newCol] == "1" &&
//                  !(visited.has(`${newRow}, ${newCol}`)) ) {
//                     q.push([newRow, newCol])
//                     visited.add(`${newRow}, ${newCol}`)
//                 }
//             }
//         }
//     }

//     for (var i = 0; i < rows; i++) {
//         for (var j = 0; j < cols; j++) {
//             if (!(visited.has(`${i}, ${j}`)) && grid[i][j] == "1") {
//                 bfs(i, j)
//                 numberOfIslands++
//             }
//         }
//     }
//     return numberOfIslands
// };

var numIslands = function(grid) {
    var rows = grid.length;
    var cols = grid[0].length;
    var visited = Array.from({ length: rows }, () => Array(cols).fill(0));
    var islandCount = 0;

    function dfs(r, c) {
        // Mark current cell as visited
        visited[r][c] = 1;

        // Define directions for traversal
        var directions = [[0,1], [1,0], [0,-1], [-1,0]];

        for (var [dr, dc] of directions) {
            var nr = r + dr;
            var nc = c + dc;

            // Perform DFS on neighboring cells if they are part of an island and not visited
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols &&
                grid[nr][nc] === "1" && visited[nr][nc] === 0) {
                dfs(nr, nc);
            }
        }
    }

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            // If cell is "1" and not visited, start a DFS to mark the entire island
            if (grid[i][j] === "1" && visited[i][j] === 0) {
                islandCount++;
                dfs(i, j);
            }
        }
    }

    return islandCount;
};
