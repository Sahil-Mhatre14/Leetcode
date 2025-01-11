/**
 * @param {string} s
 * @return {string}
 */

 /*
 1. backTrack(str, i) {
    if (i >= s.length) {
        return str
    }
    if (str.length > 1 && s[i] == str[i-1]) {
        return
    }
    for j from i to s.length {
        backTrack(str.push(s[j]), i+1)
        str.pop()
    }
 }
 */

 /*
 1. make a freq count map
 2. sort the map in descending order
 3. Base case 
    if most frq char count > floor((s.length + 1) / 2) {
        return ""
    }
 4. start from most frequent
    place it in even positions
    res = new Array(s.length).fill(null)
    i = 0
    for (char of sortedChars) {
        for (j from 0 to freqCount[char]) {
            if (i >=s.length) {
                i = 1
            }
            res[i] = char
            i+=2
        }
    }
  5. return res.join("")
 */
var reorganizeString = function(s) {
    let freqMap = {}

    for (let i = 0; i < s.length; i++) {
        freqMap[s[i]] = (freqMap[s[i]] || 0) + 1
    }

    let sortedChars = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a])

    if (freqMap[sortedChars[0]] > (Math.floor((s.length + 1) / 2))) {
        return ""
    }

    let i = 0
    let res = new Array(s.length)

    for (let char of sortedChars) {
        for (let j = 0; j < freqMap[char]; j++) {
            if(i >= s.length) {
                i = 1
            }
            res[i] = char
            i = i + 2
        }
    }

    return res.join("")
};