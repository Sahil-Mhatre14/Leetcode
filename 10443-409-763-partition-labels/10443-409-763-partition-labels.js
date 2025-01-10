/**
 * @param {string} s
 * @return {number[]}
 */

 /*
1. let hashMap = hashMap storing last index of chars
2. res = []
end = 0
size = 0
3. for i from 0 to s.length {
    size++
    end = max(last occurance of s[i], end)

    if (i == end) {
        res.push(size)
        size=0
    }
}
4. return res 
 */
var partitionLabels = function(s) {
    let hashMap = {}

    for (let i = 0; i < s.length; i++) {
        hashMap[s[i]] = i 
    }

    res = []
    end = 0
    size = 0

    for (let i = 0; i < s.length; i++) {
        size++
        end = Math.max(end, hashMap[s[i]])
        
        if (i == end) {
            res.push(size)
            size = 0
        }
    }

    return res
};