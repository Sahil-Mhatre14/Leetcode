# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        s = []
        curr = root
        n = 0

        while len(s) > 0 or curr:
            while curr:
                s.append(curr)
                curr = curr.left

            node = s.pop()
            n += 1

            if n == k:
                return node.val
    
            curr = node.right
