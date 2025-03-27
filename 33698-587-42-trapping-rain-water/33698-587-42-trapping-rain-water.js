/**
 * @param {number[]} height
 * @return {number}
 */

 /*
Use 2 pointers
1. l = 0, r = end
leftMax
rightMax
res = 0
2. min(l,r) - curr height
    while (l<r) {
        if (leftMax <= rightMax) {
            l++
            update leftMax
            res = res + (leftMax - height[l])
        } else {
            same as above
        }
    }
3. return res
 */

var trap = function(height) {
    let res = 0
    let l = 0;
    let r = height.length - 1
    let leftMax = height[l]
    let rightMax = height[r]

    while (l < r) {
        if (leftMax <= rightMax) {
            l+=1
            leftMax = Math.max(leftMax, height[l])
            res += leftMax - height[l]
        } else {
            r--
            rightMax = Math.max(rightMax, height[r])
            res += rightMax - height[r]
        }
    }

    return res

};