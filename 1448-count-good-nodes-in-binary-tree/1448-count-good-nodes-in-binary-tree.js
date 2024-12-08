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
 * @return {number}
 */

 /*
 1. let good = 0
 2. dfs (node, max) {
    if (!node) return
    if (node.val >= max) {
        good++
    }
    dfs(node.left, Math.max(max, node.max))
    dfs(node.right, Math.max(max, node.max))
    }
3. dfs(root, root.val)
4. return good
 */

var goodNodes = function(root) {
    var good = 0

    var dfs = (node, max) => {
        if (!node) {
            return
        }
        if (node.val >= max) {
            good++
        }
        dfs(node.left, Math.max(max, node.val))
        dfs(node.right, Math.max(max, node.val))
    }
    dfs(root, root.val)
    return good
};