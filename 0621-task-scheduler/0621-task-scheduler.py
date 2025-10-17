class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        freq = [0] * 26

        for task in tasks:
            freq[ord(task) - ord('A')] += 1

        freq.sort(reverse=True)

        gaps = freq[0] - 1
        idle = gaps * n

        for i in range(1,26):
            idle = idle - min(gaps, freq[i])

        return len(tasks) if idle <= 0 else idle + len(tasks) 