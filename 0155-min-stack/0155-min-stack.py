class MinStack:

    def __init__(self):
        self.elements = []

    def push(self, val: int) -> None:
        self.elements.append({
            "val": val,
            "minimum": val if len(self.elements) == 0 else min(self.elements[-1]["minimum"], val)
        })

    def pop(self) -> None:
        return self.elements.pop()["val"]

    def top(self) -> int:
        return self.elements[-1]["val"]

    def getMin(self) -> int:
        return self.elements[-1]["minimum"]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()