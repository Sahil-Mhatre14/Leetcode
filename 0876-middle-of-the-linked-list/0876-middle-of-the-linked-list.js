/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 /*
 1. n = count number of nodes
 2. if n is odd {
    return node at index Math.floor(n/2)
 } else {
    return node at index n/2
 }
 */
// var middleNode = function(head) {
//     var n = 0
//     var ptr = head
//     var targetNodeIndex = 0

//     while (ptr) {
//         n++
//         ptr = ptr.next
//     }
//     if (n % 2 != 0) {
//         targetNodeIndex = Math.floor(n/2) 
//     } else {
//         targetNodeIndex = n/2
//     }

//     var c = 0
//     ptr = head

//     while (c != targetNodeIndex) {
//         c++
//         ptr = ptr.next
//     }
//     return ptr
// };

/*
1.initialize slow and fast pointers to head
2. while(fast && fast.next) {
    slow = snow.next
    fast = fast.next.next
}
3.return slow
*/

var middleNode = function(head) {
    var slow = head
    var fast = head

    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}