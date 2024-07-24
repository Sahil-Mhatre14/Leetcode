/*
1. maintain min so far at each node in stack'
2. when element is pushed,
        compare element and min of top, store min in that element
3. getMin()
        return min of top element
*/
var MinStack = function() {
    this.elements = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.elements.push({
        val: val,
        min: this.elements.length === 0 ? val : Math.min(val, this.getMin())
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.elements.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.elements[this.elements.length - 1]?.val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.elements[this.elements.length - 1].min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */