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
var isValidBST = function (root) {
    // let queue = []
    // queue?.push(root)

    // while (queue?.length != 0) {
    //     let currentNode = queue.shift()

    //     if (currentNode?.left) {
    //         if (currentNode?.left?.val > currentNode?.val || currentNode?.val === currentNode?.left?.val) {
    //             return false
    //         } else {
    //             queue?.push(currentNode?.left)
    //         }
    //     }

    //       if (currentNode?.right) {
    //         if (currentNode?.right?.val < currentNode?.val || currentNode?.val === currentNode?.right?.val) {
    //             return false
    //         } else {
    //             queue?.push(currentNode?.right)
    //         }
    //     }
    // }
    // return true

    function validate(node, min, max) {
        if (!node) {
            return true
        }

        if(!(node?.val > min && node?.val < max)) {
            return false
        }

        return validate(node?.left, min, node?.val) && validate(node?.right, node?.val, max)
    }

    return validate(root, -Infinity, Infinity)
};