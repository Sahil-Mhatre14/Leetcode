/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

 /*
 1. if root == p || root == q {
    return root
 }
 2. l = lca(root.left)
    r = lca(root.right)
    if (l && r) {
        return root
    } else {
        return l || r
    }
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return null
    }
    
    if (root === p || root === q) {
        return root
    }

    var l = lowestCommonAncestor(root.left, p, q)
    var r = lowestCommonAncestor(root.right, p, q)

    if (l && r) {
        return root
    } else {
        return l || r
    }
};