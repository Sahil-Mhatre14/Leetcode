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
 * @return {TreeNode}
 */

 /*
 1. swap left and right children
 apply recursive DFS
 if (!root) {
    return null // base case
 }
 swap
 invertTree(root.left)
 invertTree(root.right)
 */
var invertTree = function(root) {
    if (!root) {
        return null
    }

    var temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
};