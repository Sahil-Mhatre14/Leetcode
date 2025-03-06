# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

'''
1. traverse to tail and prev to tail
2. while k > 0:
    tail.next = head
    head = tail
    prev.next = null
    tail = prev
    k--
3. return head
'''

# class Solution:
#     def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
#         curr = head
#         c = 0
#         while curr and curr.next:
#             c+=1
#             curr = curr.next
#         tail = curr

#         prev = head
#         while c - 1 > 0:
#             prev = prev.next
#             c-=1

#         print("tail", tail)
#         print("prev", prev)
        
#         while (k > 0):
#             tail.next = head
#             head = tail
#             prev.next = None
#             tail = prev
#             k-=1
        
#         return head

'''
1. go to length - k - 1th node
    mark it's next as null
    before that,
    newHead = that node's next
2. tail.next = head
3. return newHead
4. use modulo to find k to do rotations efficiently
k = k % length
'''        

class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head:
            return head
        
        curr = head
        tail = head
        length = 0

        while curr:
            tail = curr
            curr = curr.next
            length+=1

        k = k % length
        if (k == 0):
            return head

        curr = head
        
        for i in range (length - k - 1):
            curr = curr.next
        
        newHead = curr.next
        curr.next = None

        tail.next = head
        return newHead
            
    
        
        