class Solution:
    def findOrder(self, numCourses: int, prerequisites: list[list[int]]) -> list[int]:
        taken = []
        visited = set()
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
            taken.append(course)
            return True
            


        for i in range(numCourses):
            if not dfs(i):
                return []
        
        return taken