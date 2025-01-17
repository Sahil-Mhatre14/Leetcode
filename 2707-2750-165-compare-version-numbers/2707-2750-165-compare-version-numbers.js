/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

 /*
 1. split the versions and make an arr
 2. compare each element of array {
        if particular element is not present, treat it as 0
        if v1[i] > v2[i] {
            return 1
        } else if reverse {
            return -1
        }
 }
 3. return 0
 */

var compareVersion = function(version1, version2) {
    let v1 = version1.split(".")
    let v2 = version2.split(".")
    let i = 0
    while (i < v1.length || i < v2.length) {
        if (parseInt(v1?.[i] || 0) > parseInt(v2?.[i] || 0)) {
            return 1
        } else if (parseInt(v1?.[i] || 0) < parseInt(v2?.[i] || 0)) {
            return -1
        }
        i++
    }
    return 0
};