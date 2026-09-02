# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        res = 0

        def dfs(root, maxSoFar):
            nonlocal res

            if not root:
                return
            
            if root.val >= maxSoFar:
                maxSoFar = root.val
                res += 1
            
            if root.left:
                dfs(root.left, maxSoFar)
            if root.right:
                dfs(root.right, maxSoFar)

        dfs(root, root.val)
        return res