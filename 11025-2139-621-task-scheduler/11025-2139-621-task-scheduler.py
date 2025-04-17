class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        freqArr = [0]*26

        for char in tasks:
            freqArr[ord(char) - ord('A')] += 1

        freqArr.sort(reverse=True)

        gaps = freqArr[0] - 1
        idle = gaps * n

        for i in range(1,26):
            idle = idle - min(gaps, freqArr[i])

        return len(tasks) if idle <= 0 else len(tasks) + idle
        