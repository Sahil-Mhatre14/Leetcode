'''
1. Apply binary search to find correct row
compare target with first and last element of the row
2. in the correct row, apply binary search to find target
'''
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        l = 0
        r = len(matrix) - 1

        while (l < r):
            mid = (l + r) // 2

            if (matrix[mid][-1] < target):
                l = mid + 1
            elif (matrix[mid][0] > target):
                r = mid - 1
            else:
                break
        print(l, r)
        if (not(l <= r)):
            return False

        mid = (l + r) // 2
        row = matrix[mid]
        print(row)
        l = 0
        r = len(matrix[0]) - 1

        while (l <= r):
            mid = (l + r) // 2

            if row[mid] < target:
                l = mid + 1
            elif row[mid] > target:
                r = mid - 1
            else:
                return True

        return False
        
