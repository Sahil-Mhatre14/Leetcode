
/*
1.
initialize 2 stacks s1 and s2 
push
push to s1
2. pop()
if (s2 is not empty) {
    return s2.pop
} else {
    copy all elements from s1 and push to s2 in rev order
    return s2.pop
}
3. peek
similar to pop
4. isempty
check if both s1 and s2 are empty
*/

var MyQueue = function() {
    this.s1 = []
    this.s2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.s2.length != 0) {
        return this.s2.pop()
    } else {
        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop())
        }
        return this.s2.pop()
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.s2.length != 0) {
        return this.s2[this.s2.length - 1]
    } else {
        while (this.s1.length > 0) {
            this.s2.push(this.s1.pop())
        }
        return this.s2[this.s2.length - 1]
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length == 0 && this.s2.length == 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */