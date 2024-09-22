var TimeMap = function() {
    this.store = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.store[key]) {
        this.store[key] = [];
    }
    this.store[key].push({
        value: value,
        timestamp: timestamp  // Use lowercase "timestamp" consistently
    });
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.store[key]) return "";

    var res = "";
    var l = 0;
    var r = this.store[key].length - 1;

    while (l <= r) {
        var mid = Math.floor((l + r) / 2);  // Use Math.floor to get an integer index
        if (this.store[key][mid].timestamp <= timestamp) {
            res = this.store[key][mid].value;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
