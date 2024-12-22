/**
 * @param {number[]} stones
 * @return {number}
 */
 
 /*
 using MaxHeap
 1. add each stone in heap
 2. first = pop heap
 second = pop heap
 if (first!=second) {
    heap.insert(first-second)
 }
 3. return heap.front().element if size > 0 else 0
 */
var lastStoneWeight = function(stones) {
    var heap = new MaxPriorityQueue()
    for (var stone of stones) {
        heap.enqueue(stone)
    }
    while (heap.size() > 1) {
        var first = heap.dequeue().element
        var second = heap.dequeue().element
        if (first != second) {
            heap.enqueue(first - second)
        }
    }
    return heap.size() > 0 ? heap.front().element : 0
};