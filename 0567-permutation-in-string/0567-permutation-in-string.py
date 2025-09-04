class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        map1 = {}
        map2 = {}

        if len(s1) > len(s2):
            return False

        for i in range(len(s1)):
            map1[s1[i]] = map1.get(s1[i], 0) + 1
            map2[s2[i]] = map2.get(s2[i], 0) + 1

        def areMapsEqual():
            # for char in map1.keys():
            #     if map1[char] != map2.get(char, 0):
            #         return False
            # return True
            return map1 == map2

        for i in range(0, len(s2) - len(s1)):
            if areMapsEqual():
                return True
            
            map2[s2[i]] = map2[s2[i]] - 1
            if map2[s2[i]] == 0:
                del map2[s2[i]]
                
            map2[s2[i + len(s1)]] = map2.get(s2[i + len(s1)], 0) + 1

        return True if areMapsEqual() else False
