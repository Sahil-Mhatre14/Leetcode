/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

 /*
1. for each point,
    calculate the distance
    add to heap
2. pop k times from heap and store in res
3. return res
 */
var kClosest = function(points, k) {
    var heap = new MinPriorityQueue()
    var res = []

    for (var [x, y] of points) {
        var distance = Math.pow(x, 2) + Math.pow(y, 2)
        heap.enqueue([x,y], distance)
    }

    while (k > 0) {
        res.push(heap.dequeue().element)
        k--
    }
    return res
};