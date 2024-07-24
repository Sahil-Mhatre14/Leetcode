/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

 /*
 1. initial fast and slow pointers to head
 2. traverse the linked list,
      increment slow by 1 & fast by 2
 3. When fast reaches last node or null, slow is in mid
    reverse the list from slow to end
 4. compare chars by traversing first and second half  
 */

var isPalindrome = function(head) {
    var fast = head
    var slow = head

    while (fast && fast?.next) {
        slow = slow.next
        fast = fast?.next?.next
    }

    var curr = slow
    var next = curr.next
    curr.next = null

    while (next) {
        var temp = next.next
        next.next = curr
        curr = next
        next = temp
    }

    var f = head
    var l = curr

    while (f && l) {
        if (f.val != l.val) {
            return false
        }
        f = f.next
        l = l.next
    }

    return true
};