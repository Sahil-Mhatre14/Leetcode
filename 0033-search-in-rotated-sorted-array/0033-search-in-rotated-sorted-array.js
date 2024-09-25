/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 /*
 Divide into cases & use Binary Search
 1. l=0
 r=nums.length - 1

 2.while(l<=r) {
    mid = l+r/2
    if(mid is target) return mid

    Check if u are in left portion
    if (nums[l] <= nums[mid]) {
        if (target > nums[mid] or target < nums[l]) {
            target is in right portion
            l = mid + 1
        } else {
            r = mid - 1
        }
    } else {
        In right portion
        if (target < nums[mid] or target >nums[r]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
 }

 3. return -1
 */

var search = function(nums, target) {
    var l = 0
    var r = nums.length - 1

    while (l<=r) {
        var mid = Math.floor((l + r) / 2)

        if (nums[mid] === target) {
            return mid
        }

        if (nums[l] <= nums[mid]) {
            if (target > nums[mid] || target < nums[l]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        } else {
            if (target < nums[mid] || target > nums[r]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }
    return -1
};