class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        res = []
        visited = set()
        cycle = set()
        preMap = {}

        for i in range(numCourses):
            preMap[i] = []

        for [course, pre] in prerequisites:
            preMap[course].append(pre)

        def dfs(i):
            if i in visited:
                return True
            
            if i in cycle:
                return False

            cycle.add(i)

            for pre in preMap[i]:
                if not(dfs(pre)):
                    return False
            
            cycle.remove(i)
            visited.add(i)
            res.append(i)
            return True

        for course in range(numCourses):
            if not(dfs(course)):
                return []

        return res