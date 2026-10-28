class Solution:
    def canFinish(self, numCourses: int, prerequisites: list[list[int]]) -> bool:
        prereq = {}
        visited = set()

        for i in range(0, numCourses):
            prereq[i] = []

        for (course, pre) in prerequisites:
            prereq[course].append(pre)

        def dfs(i):
            if i in visited:
                return False

            if len(prereq[i]) == 0:
                return True

            visited.add(i)

            for pre in prereq[i]:
                if not dfs(pre):
                    return False
            
            visited.remove(i)
            prereq[i] = []
            
            return True


        for i in range(numCourses):
            if not dfs(i):
                return False
        
        return True