/**
 * @param {string} s
 * @return {boolean}
 */
 /*
 1. leftMin = 0
 leftMax = 0
 2. for i from 0 to s.length {
    if s[i] = "(" {
        increment leftMin and leftmax
    } else if s[i] = ")" {
        decrement both
    } else {
        //it is a wildcard
        leftMax = leftMax + 1
        leftMin = leftMin - 1
    }

    if (leftMax is -ve) {
        return false
    }
    if leftMin is -ve {
        reset it to 0
        leftmin = 0
    }
 }
 3. return leftMin == 0
 */
var checkValidString = function(s) {
    let leftMax = 0
    let leftMin = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            leftMax = leftMax + 1
            leftMin++
        } else if (s[i] == ")") {
            leftMax--
            leftMin--
        } else {
            leftMax++
            leftMin--
        }

        if (leftMax < 0) {
            return false
        }
        if (leftMin < 0) {
            leftMin = 0
        }
    }
    return leftMin == 0
};