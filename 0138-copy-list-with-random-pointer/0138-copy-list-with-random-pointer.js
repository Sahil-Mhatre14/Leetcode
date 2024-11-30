/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */

 /*
1. use 2 passes
in 1st pass, construct hashMap of all the copies
in 2nd pass assign pointers
2. hashMap = {null: null} // to handle edge case
 */
var copyRandomList = function(head) {
    var hashMap = new Map()
    var curr = head

    hashMap.set(null, null)

    while(curr) {
        var newNode = new _Node(curr.val, curr.next, curr.random)
        hashMap.set(curr, newNode)
        curr = curr.next
    }

    curr = head
    while(curr) {
        var newNode = hashMap.get(curr)
        newNode.next = hashMap.get(curr.next)
        newNode.random = hashMap.get(curr.random)
        curr = curr.next
    }
    return hashMap.get(head)
};