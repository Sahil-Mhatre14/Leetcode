# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        s = []
        n = 0
        curr = root

        while len(s) > 0 or curr:
            while curr:
                s.append(curr)
                curr = curr.left
            
            curr = s.pop()
            n += 1

            if n == k:
                return curr.val

            curr = curr.right