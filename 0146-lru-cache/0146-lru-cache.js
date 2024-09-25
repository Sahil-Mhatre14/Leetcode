/**
 * @param {number} capacity
 */

 /*
 1. implement Node class
 2. cache={} //hashTable to store key and pointer to nodes as val
 capaicty = initialized capacity
 left and right will be dummy node in DLL form
 3. get(key)
 remove the node pointed by key in cache
 insert the node
 4. put(key, value)
 - insert new node
 - if (cache.size > capacity) {
    delete node pointed by left
 }
 5. insert(node) {
- insert between right and it's prev
 }

 */

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {
    this.cache = {};  // Hashmap to store key -> Node
    this.capacity = capacity;
    this.currentSize = 0; // Variable to track the current size of the cache
    this.left = new Node(null, null);  // Left dummy node (least recently used)
    this.right = new Node(null, null); // Right dummy node (most recently used)
    this.left.next = this.right;
    this.right.prev = this.left;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache[key]) {
        return -1;
    }
    // Move the accessed node to the most recently used position
    this.remove(this.cache[key]);
    this.insert(this.cache[key]);
    return this.cache[key].val;  // Return the value of the node
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache[key]) {
        // If the key already exists, remove it before updating
        this.remove(this.cache[key]);
        // this.currentSize--; // Decrease size since we're replacing the existing node
    }
    
    // Create a new node and insert it
    let newNode = new Node(key, value);
    this.cache[key] = newNode;
    this.insert(newNode);
    // this.currentSize++; // Increase size since a new node is added
    
    // If cache exceeds capacity, remove the least recently used node
    if (this.currentSize > this.capacity) {
        // Remove the least recently used node (left.next)
        let lru = this.left.next;
        this.remove(lru);
        delete this.cache[lru.key];  // Remove it from the cache
        // this.currentSize--; // Decrease size after removal
    }
};

// Insert node right before the right dummy node (most recent)
LRUCache.prototype.insert = function(node) {
    var prev = this.right.prev;
    var next = this.right;
    
    prev.next = node;
    next.prev = node;
    node.prev = prev;
    node.next = next;
    this.currentSize++
};

// Remove a node from the doubly linked list
LRUCache.prototype.remove = function(node) {
    var prev = node.prev;
    var next = node.next;
    
    prev.next = next;
    next.prev = prev;

    this.currentSize--
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
