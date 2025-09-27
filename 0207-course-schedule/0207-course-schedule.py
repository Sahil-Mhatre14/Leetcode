class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        visited = set()
        prereqMap = {}

        for i in range(numCourses):
            prereqMap[i] = []

        for [course, pre] in prerequisites:
            prereqMap[course].append(pre)

        def dfs(i):
            if i in visited:
                return False

            if len(prereqMap[i]) == 0:
                return True

            visited.add(i)

            for pre in prereqMap[i]:
                if not dfs(pre):
                    return False
            
            visited.remove(i)
            prereqMap[i] = []
            return True

        
        for i in range(numCourses):
            if not dfs(i):
                return False

        return True