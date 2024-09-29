/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

 /*
 1. Initialize a cloneMap={}
 2. perform DFS,
 dfs(node) {
    if node is present in cloneMap {
        return node
    }
    - make a new node
    - for each neighnour n of node {
        newNode.neighbours.push(dfs(n))
    }
    return new node
 }
 */
var cloneGraph = function(node) {
    var cloneMap = {}

    var clone = (node) => {
        if (cloneMap[node.val]) {
            return cloneMap[node.val]
        }

        var newNode = new Node(node.val)
        cloneMap[node.val] = newNode 

        for(var neighbor of node.neighbors) {
            newNode.neighbors.push(clone(neighbor))
        }
        return newNode
    }

    console.log("clone map", cloneMap)

    return node ? clone(node) : null
};