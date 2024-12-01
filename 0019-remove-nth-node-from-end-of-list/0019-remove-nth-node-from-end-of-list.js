/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 /*
 1. make a dummy node and it's next will be head
 2. from head move right ptr n times
 3. initilize left to dummy node
 4. while (right) {
    increment l & r by 1
 }
 //now right is null and left is towards left of target node
 5. left.next = left.next.next
 6. return dummy.next
 */

var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(0, head)
    var r = head
    var l = dummy

    while (n > 0) {
        r = r.next
        n = n - 1
    }

    while (r) {
        l = l.next
        r = r.next
    }
    l.next = l.next.next

    return dummy.next
};