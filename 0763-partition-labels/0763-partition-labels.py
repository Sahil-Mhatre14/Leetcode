class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        lastOccurance= {}

        for (index, ch) in enumerate(s):
            lastOccurance[ch] = index
        
        
        size = 0
        res = []
        last = 0

        for i in range(len(s)):
            ch = s[i]
            last = max(last, lastOccurance[ch])
            size += 1
            if i == last:
                res.append(size)
                size = 0
        
        return res