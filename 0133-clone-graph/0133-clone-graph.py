"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        cloneMap = {}

        def clone(node):
            if node.val in cloneMap:
                return cloneMap[node.val]

            newNode = Node(node.val)
            cloneMap[node.val] = newNode

            for neighbour in node.neighbors:
                newNode.neighbors.append(clone(neighbour))
            
            return newNode
        if node:
            clone(node)
        return cloneMap[node.val] if node else None
        #return clone(node) if node else None