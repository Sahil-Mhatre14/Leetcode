# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        resHead = None
        resTail = None

        def addNode(node):
            nonlocal resHead, resTail

            if not resHead and not resTail:
                resHead = node
                resTail = node
            else:
                resTail.next = node
                resTail = node
        
        ptr1 = list1
        ptr2 = list2

        while ptr1 and ptr2:
            if ptr1.val < ptr2.val:
                addNode(ListNode(ptr1.val))
                ptr1 = ptr1.next
            elif ptr2.val < ptr1.val:
                addNode(ListNode(ptr2.val))
                ptr2 = ptr2.next
            else:
                addNode(ListNode(ptr1.val))
                addNode(ListNode(ptr2.val))
                ptr1 = ptr1.next
                ptr2 = ptr2.next
                

        while ptr1:
            addNode(ListNode(ptr1.val))
            ptr1 = ptr1.next
        
        while ptr2:
            addNode(ListNode(ptr2.val))
            ptr2 = ptr2.next

        return resHead

        