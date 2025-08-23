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
        res = []
        hashMap = {}

        for num in nums:
            hashMap[num] = hashMap.get(num, 0) + 1

        bucket = []

        for i in range(len(nums) + 1):
            bucket.append([])

        for key, val in hashMap.items():
            if len(bucket[val]) > 0:
                bucket[val].append(key)
            else:
                bucket[val] = [key]
        
        for i in range(len(bucket) - 1, -1, -1):
            b = bucket[i]
            if len(b) > 0 and k > 0:
                for n in b:
                    res.append(n)
                    k -= 1
                    if k == 0:
                        break
        
        return res
                
