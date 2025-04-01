# class Solution:
#     def majorityElement(self, nums: List[int]) -> List[int]:
#         hashMap = {}
#         res= []

#         for n in nums:
#             if n in hashMap:
#                 hashMap[n]+=1
#             else:
#                 hashMap[n] = 1

#         for (key, val) in hashMap.items():
#             if val > (len(nums) // 3):
#                 res.append(key)

#         return res

'''
1. build a hashMap whose size will never exceed 2 so O(1)
hashMap = {}
for n in nums:
    hashMap[n]+=1
    if len(hashMap) > 2:
        newMap = {}
        for key, val in hashMap:
            if val > 1:
                put key in new map
        hashMap = newMap
2.
res = [] 
for remaing elements in hashMap
which will be at the most 2,
    check if og_val of element in nums > n/3, if yes {
        push to res
    }
3. return res
'''

class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        hashMap = collections.defaultdict(int)
        res = []

        for n in nums:
            hashMap[n] += 1
            if len(hashMap) > 2:
                newMap = collections.defaultdict(int)
                for key, val in hashMap.items():
                    if val > 1:
                        newMap[key] = val - 1
                hashMap = newMap   
        
        for key, val in hashMap.items():
            if nums.count(key) > (len(nums) // 3):
                res.append(key)
        return res 