/*
maintain an array and hashMap with reference to index
of array items

insert(item) {
    1. if (item is in hashMap) return false
       array.push(item)
       hashMap[item] = array.length - 1
       return true

remove(item)
    1. if item is not in arr, return false
        get index of item
        at that index, insert last element in arr
        update ref of last element in hashMap
        pop lastEl
        delete item
        return true

getRandom() {
    get random array index
    return that element
}
}
*/
var RandomizedSet = function() {
    this.hashMap = {}
    this.arr = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (val in this.hashMap) {
        return false
    }
    this.arr.push(val)
    this.hashMap[val] = this.arr.length - 1
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!(val in this.hashMap)) {
        return false
    }
    var idx = this.hashMap[val]
    var lastEl = this.arr[this.arr.length - 1]
    this.arr[idx] = lastEl
    this.arr.pop()
    this.hashMap[lastEl] = idx
    delete this.hashMap[val]

    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    var randomIdx = Math.floor(Math.random() * this.arr.length)
    return this.arr[randomIdx]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */