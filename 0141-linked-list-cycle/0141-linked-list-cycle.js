/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

 /*
 1. initialize fast and slow pointers to 1st node
 2. traverse the linked list,
    increment slow by 1
    increment fast by 2
 3. if slow & fast meet again, return true
 4. if entire list is traversed, return false
 */
var hasCycle = function(head) {
    var f = head
    var s = head

    while(f && f.next) {
        s = s?.next;
        f = f?.next?.next
        if (s == f) return true
    }

    return false
};