/**
 * @param {string} s
 * @return {string[][]}
 */
 /*
 1. use backtracking
 res= []
 part = []
 2. dfs(i) {
    if i = length {
        push copy of part to res
    }
    for j from i to end of s {
        if (palindrome(i, j)) {
            explore more
            part.push(s[i, j+1])
            dfs(j+1)
            part.pop() //cleanup
        }
    }
 }
 3. dfs(0)
 4. return res
 */
var partition = function(s) {
    var part = []
    var res = []

    function isPalindrome(l, r) {
        while (l < r) {
            if(s[l] != s[r]) {
                return false
            }
            l++
            r--
        }
        return true
    }

    function dfs(i) {
        if (i == s.length) {
            res.push([...part])
            return
        }
        for (var j = i; j < s.length; j++) {
            if(isPalindrome(i, j)) {
                part.push(s.slice(i, j + 1))
                dfs(j+1)
                part.pop()
            }
        }
    }
    dfs(0)
    return res
};