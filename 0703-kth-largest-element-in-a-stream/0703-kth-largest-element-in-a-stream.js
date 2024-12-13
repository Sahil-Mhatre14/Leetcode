/**
 * @param {number} k
 * @param {number[]} nums
 */

 /*
 use MinPriorityQueue library
 maintain a minHeap of size k
 1. initialization {
    this.k = k
    this.minHeap = new MinPriorityQueue()
    add each number in nums
 }
 2. add(num) {
    minHeap.enqueue(num)
    if (minHeap.size > k) {
        deqqueue front
    }
    return front
 }
 */
var KthLargest = function(k, nums) {
    this.k = k
    this.minHeap = new MinPriorityQueue()
    for (var num of nums) {
        this.add(num)
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.minHeap.enqueue(val)
    if (this.minHeap.size() > this.k) {
        this.minHeap.dequeue(this.minHeap.front())
    }
    return this.minHeap.front().element
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */