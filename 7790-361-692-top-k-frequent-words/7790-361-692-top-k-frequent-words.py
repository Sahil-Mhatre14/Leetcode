'''
use heap
1. make a frequency map
2. store (-frequency, word) in heap
heapify the heap
In python, heapify will check for frequency and then word while arranning
3. put k elements from heap in res by popping
'''

class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        freqMap = {}
        if not words or k <=0:
            return []
        

        for word in words:
            if word in freqMap:
                freqMap[word]+=1
            else:
                freqMap[word] = 1
        
        heap = [(-frequency, word) for (word, frequency) in freqMap.items()]
        heapq.heapify(heap)

        res = [heapq.heappop(heap)[1] for _ in range(k)]
        return res
        