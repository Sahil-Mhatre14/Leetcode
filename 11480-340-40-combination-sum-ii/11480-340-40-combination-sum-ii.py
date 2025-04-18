class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []

        candidates.sort()

        def dfs(curr, i, s):
            if s == target:
                res.append(curr.copy())
                return
            
            if i >= len(candidates) or s > target:
                return
            
            curr.append(candidates[i])
            dfs(curr, i + 1, s + candidates[i])
            curr.pop()

            while (i + 1 < len(candidates) and candidates[i] == candidates[i + 1]):
                i+=1

            dfs(curr, i + 1, s)
        
        dfs([], 0, 0)

        return res