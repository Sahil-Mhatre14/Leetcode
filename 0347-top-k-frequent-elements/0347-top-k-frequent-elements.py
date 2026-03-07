'''
1. create a hashMap to count frequency of elements in nums
res = []
2. bucket = create a new array and initialize it with len(nums) + 1 empty arrays
3. for key, value in hashMap:
        if len(bucket[value]) > 0:
            bucket[value].push(key)
        else:
            bucket[value] = [key]
4. Loop in reverse order over bucket:
        put elements from bucket while k > 0
'''

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashMap = {}
        res = []

        bucket = []

        for i in range (len(nums) + 1):
            bucket.append([])
        
        for n in nums:
            hashMap[n] = hashMap.get(n, 0) + 1
        
        for key, val in hashMap.items():
                bucket[val].append(key)

        for i in range(len(bucket) - 1, -1, -1):
            if(len(bucket[i]) > 0):
                for n in bucket[i]:
                    res.append(n)
                    k-=1
                    if k == 0:
                        return res

        return res
                
                
