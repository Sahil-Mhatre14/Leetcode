/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 /*
 Prevent cycle, don't detect it
1. make adjList
while adding an edge from i to j{
    check if we can reach j to i
    if true {
        return [i,j]
    }
}
2. dfs(curr, target, prev) {
    if (curr == target) {
        return true
    }
    for every neighnour of current {
        if (neighbour != prev) {
            return dfs(neighbour, target, curr)
        }
        
    }
    return false
}
 */
var findRedundantConnection = function(edges) {
    let adjList = {}

    const dfs = (curr, target, prev) => {
        if (curr == target) {
            return true
        }
        for (let neighbour of adjList[curr]) {
            if (neighbour != prev) {
                if (dfs(neighbour, target, curr)) {
                    return true
                }
            }
        }
        return false
    }

    for (let [n1, n2] of edges) {
        if (!adjList[n1]) adjList[n1] = [];
        if (!adjList[n2]) adjList[n2] = [];
        adjList[n1].push(n2);
        adjList[n2].push(n1);


        if (dfs(n2, n1, n1)) {
            return [n1, n2]
        }
    }
};