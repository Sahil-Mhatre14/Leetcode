/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

 /*
 1. visited = set to track all visited courses (in output)
 2. cycle = set to track all courses in the current cycle
 3. use dfs {
    if course in visited {
        return true
    }
    if course in cycle {
        return false
    }
    apply dfs to all prereq
 }
 */
var findOrder = function(numCourses, prerequisites) {
    var res = []
    var visited = new Set()
    var cycle = new Set()
    var prereqMap = {}

    for (let i = 0; i < numCourses; i++) {
        prereqMap[i] = []
    }

    for (let [course, pre] of prerequisites) {
        prereqMap[course].push(pre)
    }

    let dfs = (course) => {
        if (cycle.has(course)) {
            return false
        }
        if (visited.has(course)) {
            return true
        }
        cycle.add(course)

        for (let pre of prereqMap[course]) {
            if (!dfs(pre)) {
                return false
            }
        }
        cycle.delete(course)
        visited.add(course)
        res.push(course)
        return true
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return []
        }
    }
    return res   
};