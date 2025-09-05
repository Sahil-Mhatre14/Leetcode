# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        f = head.next
        s = head

        while (f and f.next):
            f = f.next.next
            s = s.next

        curr = s.next
        s.next = None
        prev = None

        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
            
        s = prev
        f = head

        while (s):
            temp1 = f.next
            temp2 = s.next

            f.next = s
            s.next = temp1

            f = temp1
            s = temp2
        
        return head
        