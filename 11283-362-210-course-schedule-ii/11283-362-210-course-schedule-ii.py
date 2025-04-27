class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        res = []
        cycle = set()
        visited = set()
        preReq = {}

        for i in range(numCourses):
            preReq[i] = []

        for [course, pre] in prerequisites:
            preReq[course].append(pre)

        def dfs(course):
            if course in cycle:
                return False
            
            if course in visited:
                return True

            cycle.add(course)

            for pre in preReq[course]:
                if (not dfs(pre)):
                    return False
            
            cycle.remove(course)
            visited.add(course)
            res.append(course)

            return True

        
        for i in range(numCourses):
            if (not dfs(i)):
                return []
        
        return res
