/*
1. maintain count of points in a hashMap
2. detect(px, py) {
    - Find diagonal point
    - find points with (x, py) & (px, y)
    - res = res + multiplicatio of counts of those points
    - return res
}
*/
var DetectSquares = function() {
    this.points=[]
    this.pointsMap = new Map()
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    let key = point.toString()
    this.points.push(point)
    this.pointsMap.set(key, (this.pointsMap.get(key) || 0) + 1)
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    let [px, py] = point
    let res = 0

    for ([x, y] of this.points) {
        if ((Math.abs(x - px) != Math.abs(y - py)) || (x == px) || (y == py)) {
            continue
        }

        const p1 = `${px},${y}`;
        const p2 = `${x},${py}`;

        const count1 = this.pointsMap.get(p1) || 0;
        const count2 = this.pointsMap.get(p2) || 0;

        res = res + (count1 * count2)

    }
    return res
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */