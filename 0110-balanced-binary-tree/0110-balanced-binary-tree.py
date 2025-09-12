# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        
        def dfs(root):
            isNodeBalanced = [False, 0]
            if not root:
                return [True, 0]
            
            left = dfs(root.left)
            right = dfs(root.right)

            if left[0] and right[0] and abs(left[1] - right[1]) <= 1:
                isNodeBalanced[0] = True

            isNodeBalanced[1] = max(left[1], right[1]) + 1

            return isNodeBalanced

        return dfs(root)[0]