/**
 * @param {string[]} logs
 * @return {string[]}
 */

 /*
 1. make 2 arrays to store digitLogs and letterLogs
 2. iterate over logs {
     if log.split(" ")[1] is Number {
        push to digitLogs
     } else {
        push to letterLogs
     }
 }
 3. letterLogs.sort(() => {
    join the words and sort on basis of string comparison
 })
 4. return [...letterLogs, digitLogs]
 */
var reorderLogFiles = function(logs) {
    let digitLogs = []
    let letterLogs = []

    for (let log of logs) {
        if (Number.isInteger(parseInt(log.split(" ")[1]))) {
            digitLogs.push(log)
        } else {
            letterLogs.push(log)
        }
    }

    letterLogs.sort((a, b) => {
        let word1 = a.split(" ").slice(1).join(" ")
        let word2 = b.split(" ").slice(1).join(" ")

        if (word1 > word2) {
            return 1
        } else if (word1 < word2) {
            return -1
        } else {
            return a > b ? 1 : -1
        }
    })

    return [...letterLogs, ...digitLogs]
};