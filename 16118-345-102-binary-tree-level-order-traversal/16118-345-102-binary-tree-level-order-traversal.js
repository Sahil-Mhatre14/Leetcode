/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

 /*
 Perform BFS
 1. q=[]
 var res = []
 if (!root) return [];
 q.push(root)
 2. while(q not empty) {
    var nodesAtLevel = q.length
    var nodes = []
    iterate from 1 to nodeasAtLevel {
        ele = q.deque()
        nodes.push(ele.val)
        ele.left && q.push(ele.left)
        ele.right && q.push(ele.right)
    }
    res.push(nodes)
 }
 3. return res
 */
var levelOrder = function(root) {
    var q = []
    var res = []

    if (!root) return [];

    q.push(root)

    while (q.length > 0) {
        var nodesAtLevel = q.length
        var nodes = []

        for (var i = 0; i < nodesAtLevel; i++) {
            var ele = q.shift()
            nodes.push(ele.val)
            if (ele.left) {
                q.push(ele.left)
            }
            if (ele.right) {
                q.push(ele.right)
            }
        }
        res.push(nodes)
    }
    return res
};