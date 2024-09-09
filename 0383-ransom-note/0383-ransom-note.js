/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

 /*
 1. create a hashMap of chars in magazine
 2. iterate over chars in ransomNote
      if ransomNode[i] not in hashMap,
        return false
      else
        reduce frequency by 1
 3. iterate over frequencies in hashMap,
      if negative frequency found,
        return false
    return true
 */

var canConstruct = function(ransomNote, magazine) {
    var hashMap = {}

    for (var i = 0; i < magazine.length; i++) {
        hashMap[magazine[i]] = (hashMap?.[magazine[i]] || 0) + 1
    }
    
    for (var i = 0; i < ransomNote.length; i++) {
        if (!(ransomNote[i] in hashMap) || hashMap[ransomNote[i]] == 0) {
            return false
        }
        hashMap[ransomNote[i]] = hashMap[ransomNote[i]] - 1
    }

    return true
};