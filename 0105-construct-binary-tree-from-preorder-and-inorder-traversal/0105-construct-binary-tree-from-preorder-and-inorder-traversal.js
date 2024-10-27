/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 /*
 first value in preorder becomes root
 find that value in inorder
 elements to left are in left subtree and
 elements at right are in right subtree

 recursive call builTree with new preorder and inorder

 1. if (!root) return null
 2. root = new Node(preorder[0])
    mid = inorder.indexOf(root)
    root.left = buildTree(preOrder[1: mid + 1], inOrder.slice(: mid))
    root.right = buildTree(preorder.slice(mid + 1), inorder(mid + 1))
 3. return root
 */
var buildTree = function(preorder, inorder) {
    if (!(preorder.length > 0 || inorder.length > 0)) {
        return null
    }
    var root = new TreeNode(preorder[0])
    var mid = inorder.indexOf(preorder[0])
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1))

    return root
};