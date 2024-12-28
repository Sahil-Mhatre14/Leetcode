/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

 /*
 1. A tree is a graph with no cycles and 
 all nodes are connected
 2. visited = new Set()
 apply dfs
 dfs(i, prev) {
   - if i in visited {
        return false
    }
   - visited.add(i)
   - apply dfs to neighbours
        if neighbour == i then skip
 }
 3. return dfs(root, -1) && visited.size() ==  ? true : false

 */
var validTree = function(n, edges) {
    if (n == 0) {
        return true
    }

    let visited = new Set()
    let adjList = {}

    for (let i = 0; i < n; i++) {
        adjList[i] = []
    }

    for (let [n1, n2] of edges) {
        adjList[n1].push(n2)
        adjList[n2].push(n1)
    }


    function dfs (i, prev) {
        if (visited.has(i)) {
            return false
        }
        visited.add(i)

        for (let neighbour of adjList[i]) {
            if (neighbour == prev) {
                continue
            }
            if (!dfs(neighbour, i)) {
                return false
            }
        }
        return true
    }

    return dfs(0, -1) && visited.size == n
};