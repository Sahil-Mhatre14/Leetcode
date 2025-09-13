# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []

        q = collections.deque()
        res = []
        q.append(root)

        while q:
            nodesAtLevel = []
            lenLevel = len(q)

            for i in range(0, lenLevel):
                node = q.popleft()
                nodesAtLevel.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            res.append(nodesAtLevel[-1])

        return res
