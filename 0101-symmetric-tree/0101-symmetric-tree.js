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
 * @return {boolean}
 */

 /*
1. check if root of lst & rst are equal
2. check if lst.left is symmetric with rst.right && lst.right is symmertric with rst.left
*/
var isSymmetric = function(root) {
    const dfs = (left, right) => {
        if (!left && !right) {
            return true
        }
        if (!left || !right) {
            return false
        }
        return left.val === right.val && dfs(left.left, right.right) && dfs(left.right, right.left)
    }
    return dfs(root.left, root.right)
    
};