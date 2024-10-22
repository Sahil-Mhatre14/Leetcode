/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 /*
perform inorder traversal to get sorted arr of nodes
return kth element
1. s=[]
n=0
curr=root
2. while (stack.length > 0 || curr) {
    while (curr) {
        stack.push(curr)
        curr = curr.left
    }
    curr = stack.pop()
    n++
    if (n == k) return curr.val
    curr = curr.right
}
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var curr = root
    var n = 0
    var stack = []

    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        n++

        if (n == k) {
            return curr.val
        }

        curr = curr.right
    }
};