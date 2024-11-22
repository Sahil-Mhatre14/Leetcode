/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

 /*
 1. make a arr = [[pos, speed]]
 2. stack = []
 3. sort the arr in descending order
 4. for each element in arr {
        push(time to reach target) to stack
        if (stack.length >=2 && stackTop time <= stackTop - 1 time) {
            they become fleet
            remove faster car (latest)
            stack.pop()
        }
 5. return stack.length
 }
 */
var carFleet = function(target, position, speed) {
  var arr = []
  var stack = []

  for (var i = 0; i < position.length; i++) {
    arr[i] = []
    arr[i].push(position[i])
    arr[i].push(speed[i])
  }

  arr.sort((a, b) => b[0] - a[0])

  for (var [position, speed] of arr) {
    stack.push((target - position) / speed)
    if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length -2]) {
        stack.pop()
    }
  }

  return stack.length
};