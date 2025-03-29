'''
Use recursion and cache
top down approach
1. build a cache to store square lengths
cache = {}
2. helper(r, c){
    Base Case
    if r and c out of bounds {
        return 0
    }
    if (r,c) in cache {
        return cached val
    }
    compute right, bottom, diag
    cache[(r,c)] = 0
    if matrix[r,c] == '1':
        cache[(r,c)] = 1 + min(top, right, diag)
    return cache[(r,c)]
}
3. helper(0,0) 
   return max(cache.values() ** 2)
'''

class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        cache = {}
        rows = len(matrix)
        cols = len(matrix[0])

        def helper(r, c):
            if r >= rows or c >= cols:
                return 0
            
            if (r,c) in cache:
                return cache[(r,c)]
           
            right = helper(r, c+1)
            diag = helper(r+1, c+1)
            bottom = helper(r+1, c)

            cache[(r,c)] = 0

            if matrix[r][c] == '1':
                cache[(r,c)] = 1 + min(right, diag, bottom)

            return cache[(r,c)]

        helper(0,0)

        return max(cache.values()) ** 2