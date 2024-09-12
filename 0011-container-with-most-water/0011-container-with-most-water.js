/**
 * @param {number[]} height
 * @return {number}
 */

 /*
 1. l = 0, r = last height
    area = 0
 2. while (l < r) {
    currentArea = (r - l) * Min(height[l], height[r])
    area = Max(area, currentArea)
    if (l < r) {
        l++
    } else {
        r--
    }
 }
 3. return area
 */
var maxArea = function(height) {
    var l = 0
    var r = height.length - 1
    var area = 0

    while(l < r) {
        var currentArea = (r - l) * Math.min(height[l], height[r])
        area = Math.max(area, currentArea)

        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return area
};