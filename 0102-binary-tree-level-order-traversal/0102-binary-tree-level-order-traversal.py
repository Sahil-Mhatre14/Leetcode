# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        q = collections.deque()
        res = []

        if not root:
            return []

        q.append(root)

        while q:
            currLen = len(q)
            nodes = []
            for i in range(currLen):
                ele = q.popleft()
                nodes.append(ele.val)

                if ele.left:
                    q.append(ele.left)

                if ele.right:
                    q.append(ele.right)
            res.append(nodes)
        
        return res