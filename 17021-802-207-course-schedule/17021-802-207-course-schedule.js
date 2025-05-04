/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

 /*
 detect loop in directed graph
 1. preMap = {}
 Set prerequisites of each course
 for all [course, pre] {
    set preMap[course] = pre
 }
 2. visitedSet = new Set()
 3. for each course,
      if !dfs(course)
        return false
    return true
 4. dfs(course) {
    if course is visited, return false
    if preMap[course] = [], return true
    visitedMap.add(course)
    for each prereq of this course,
        if !dfs(prereq)
            return false
    preMap[course] = []
    remove course from visitedSet
    visitedSet.delete(course)
    return true
 }

 */
var canFinish = function(numCourses, prerequisites) {
    var preMap = {}
    var visitedSet = new Set()

    for (var i = 0; i < numCourses; i++) {
        preMap[i] = []
    }

    for (var [course, pre] of prerequisites) {
        preMap[course].push(pre)
    }


    function dfs(course) {
        if (visitedSet.has(course)) {
            return false
        }
        if (preMap[course].length == 0) {
            return true
        }

        visitedSet.add(course)
    
        for(var pre of preMap[course]) {
            if (!dfs(pre)) {
                return false
            }
        }
        visitedSet.delete(course)
        preMap[course] = []
        return true
    }

    for (var i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false
        }
    }
    return true
};