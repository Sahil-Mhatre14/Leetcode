class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashMap = {}

        for s in strs:
            arr = [0] * 26
            for ch in s:
                arr[ord(ch) - ord('a')] += 1
        
            if not tuple(arr) in hashMap:
                hashMap[tuple(arr)] = [s]
            else:
                hashMap[tuple(arr)].append(s)
        
        return list(hashMap.values())

