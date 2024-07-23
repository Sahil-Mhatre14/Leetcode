/**
 * @param {string} s
 * @return {boolean}
 */

 /*
 1. iterate over chars in s
   if s[i] is an opening bracket,
     push char to stack
   else if s[i] is closing bracket
      if there is an opening bracket of same type in on top of stack,
        pop the top
      else
        return false
2. if stack is empty, return true
   else return false

 */
var isValid = function(s) {
    var stack = []

    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{' ) {
            stack.push(s[i])
        } else {
            
            if (s[i] == ')') {
                if (stack[stack.length - 1] == '(') {
                    stack.pop()
                } else {
                    return false
                }
            } else if (s[i] == ']') {
                if (stack[stack.length - 1] == '[') {
                    stack.pop()
                } else {
                    return false
                }
            } else if (s[i] == '}') {
                if (stack[stack.length - 1] == '{') {
                    stack.pop()
                } else {
                    return false
                }
            }
            else {
                return false
            }
        }
    }

    return stack.length === 0
};