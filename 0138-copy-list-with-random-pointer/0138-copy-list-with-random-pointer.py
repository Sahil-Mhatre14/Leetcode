"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        nodeMap = {None: None}

        curr = head
        while curr:
            nodeMap[curr] = Node(curr.val, curr.next, curr.random)
            curr = curr.next
        
        curr = head
        while curr:
            newNode = nodeMap.get(curr)
            newNode.next = nodeMap.get(curr.next)
            newNode.random = nodeMap.get(curr.random)
            curr = curr.next
        
        return nodeMap[head]