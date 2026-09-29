class Solution:
    def leastInterval(self, tasks: list[str], n: int) -> int:
        freq = [0] * 26

        for task in tasks:
            freq[ord(task) - ord('A')] += 1

        freq.sort(reverse=True)

        gaps = max(freq) - 1
        idle = gaps * n

        for i in range(1, 26):
            idle = idle - min(freq[i], gaps)
        
        return len(tasks) + idle if idle > 0 else len(tasks)