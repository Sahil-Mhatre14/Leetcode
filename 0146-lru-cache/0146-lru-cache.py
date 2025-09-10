class Node:
    def __init__(self, key=0, val=0, prev=None, next=None):
        self.key = key
        self.val = val
        self.prev = prev
        self.next = next

class LRUCache:

    def __init__(self, capacity: int):
        self.l = Node()
        self.r = Node()
        self.l.next = self.r
        self.r.prev = self.l
        self.cache = {}
        self.capacity = capacity
        self.currSize = 0

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1

        self.delete(self.cache[key])
        self.insert(self.cache[key])

        return self.cache[key].val

        

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.delete(self.cache[key])

        newNode = Node(key, value)
        self.insert(newNode)
        self.cache[key] = newNode

        if (self.currSize > self.capacity):
            lru = self.l.next
            self.delete(lru)

            del self.cache[lru.key]
    
    def delete(self, node):
        prevNode = node.prev
        nextNode = node.next

        nextNode.prev = prevNode
        prevNode.next = nextNode

        self.currSize -= 1

    def insert(self, node):
        newNode = node
        currRight = self.r.prev
        newNode.prev = currRight
        currRight.next = newNode
        self.r.prev = newNode
        newNode.next = self.r

        self.currSize += 1




# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)