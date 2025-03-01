# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

'''
Use level order BFS
Label nodes with index and store node and ndex in queue
label as idx - min to prevent overflow
1. q = [[root, 0]]
w = 0
2. while q:
    l = q[0][1]
    r = q[-1][1]
    w = max(w, r - l + 1)
    min = l
    length = len(q)

    for _ in range (length):
        node, idx = q.pop
        if node.left:
            q.append([node.left, 2 * (idx - min) + 1])
        if node.right:
            q.append([node.left, 2 * (idx - min) + 2])
3. return w

'''

class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        
        q = collections.deque([])
        w = 0
        q.append([root, 0])

        while q:
            l = q[0][1]
            r = q[-1][1]
            minimum = l
            w = max(w, r - l + 1)
            level_length = len(q)

            for _ in range(level_length):
                node, idx = q.popleft()

                if node.left:
                    q.append([node.left, 2 * (idx - minimum) + 1])
                if node.right:
                    q.append([node.right, 2 * (idx - minimum) + 2])
            
        return w