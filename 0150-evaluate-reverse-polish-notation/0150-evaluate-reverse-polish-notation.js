/**
 * @param {string[]} tokens
 * @return {number}
 */
 /*
 1. iterate over token from i = 0 to token.length - 1
 2. if token[i] is digit {
    push to stack
    } else {
        op1 = stack.pop()
        op2 = stack.pop()
        stack.push(op2 token[i] op1)
    }
 3. return stack.pop()
 */
var evalRPN = function(tokens) {
    let stack = []

    for (let token of tokens) {
        if (Number.isInteger(parseInt(token))) {
            stack.push(parseInt(token))
        } else {
            let op1 = stack.pop()
            let op2 = stack.pop()

            if (token === "+") {
                stack.push(op2 + op1)
            } else if (token === "-") {
                stack.push(op2 - op1)
            } else if (token === "*") {
                stack.push(op2 * op1)
            } else if (token === "/") {
                stack.push(Math.trunc(op2 / op1))
            }
        }
    }
    return stack.pop()
};