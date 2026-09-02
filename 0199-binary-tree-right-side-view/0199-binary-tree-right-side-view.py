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

        while len(q) > 0:
            nodesAtLevel = len(q)
            nodes = []
            for i in range(0, nodesAtLevel):
                node = q.popleft()
                nodes.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            res.append(nodes[-1])
        
        return res