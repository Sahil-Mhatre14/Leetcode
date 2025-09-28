/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

 /*
 1. visited = new Set()
 res = 0
 2. adjList = create adj list
 2. for each n {
    if (n not in visited) {
        dfs(n)
        res++
    }
 }
 3. retrun res
 */
var countComponents = function(n, edges) {
    let res = 0
    let adj = []
    let visited = new Set()


    for (let i = 0; i < n; i++) {
        adj[i] = []
    }

    for (let [n1, n2] of edges) {
        adj[n1].push(n2)
        adj[n2].push(n1)
    }

    const dfs = (node) => {
        // if (visited.has(node)) {
        //     return
        // }
        visited.add(node)

        for (let neighbour of adj[node]) {
            if (visited.has(neighbour)) {
                continue
            }
            dfs(neighbour)
        }
        return
    }

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(i)
            res++
        }
    }
    return res
};