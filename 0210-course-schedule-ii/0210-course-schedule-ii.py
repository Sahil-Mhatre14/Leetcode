class Solution:
    def findOrder(self, numCourses: int, prerequisites: list[list[int]]) -> list[int]:
        taken = set()
        visited = set()
        res = [] 
        prereq = {}

        for i in range(numCourses):
            prereq[i] = []

        for [course, pre] in prerequisites:
            prereq[course].append(pre)

        def dfs(course):
            if course in taken:
                return True
            
            if course in visited:
                return False

            visited.add(course)

            for pre in prereq[course]:
                if not dfs(pre):
                    return False

            visited.remove(course)
            res.append(course)
            taken.add(course)
            return True
            


        for i in range(numCourses):
            if not dfs(i):
                return []
        
        return res