class TimeMap:

    def __init__(self):
        self.cache = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        entry = {
            "val": value,
            "timestamp": timestamp
        }

        if key in self.cache:
            self.cache[key].append(entry)
        else:
            self.cache[key] = []
            self.cache[key].append(entry)


    def get(self, key: str, timestamp: int) -> str:
        if key not in self.cache:
            return ""
        
        searchSpace = self.cache[key]
        l = 0
        r = len(searchSpace) - 1
        res = ""

        while (l <= r):
            mid = (l + r) // 2
            if searchSpace[mid]["timestamp"] <= timestamp:
                l = mid + 1
                res = searchSpace[mid]["val"]
            else:
                r = mid - 1
        
        return res


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)