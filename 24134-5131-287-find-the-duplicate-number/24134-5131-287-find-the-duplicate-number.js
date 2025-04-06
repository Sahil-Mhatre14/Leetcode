/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var f = 0
    var s = 0

    do {
        s = nums[s]
        f = nums[nums[f]]
    }while (f != s)

    var slow2 = 0

    while (s != slow2) {
        s = nums[s]
        slow2 = nums[slow2]
    }
    return s
}