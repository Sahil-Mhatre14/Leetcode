/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

 /*
 use bottom-up dp
 dp[i] represents whether word can be broken from s[i]

 1. initialize dp table to all false
 2. dp[s.length] = true
 3. iterate from end of str to 0 {
        for wach word w in dict {
            if (word is in bound && w == s(i + w.length)) {
                check if res is possible from i + len(word)
                dp[i] = dp[i + w.length]
            }
            if (dp[i]) {
                break
            }
        }
    }
 4. return dp[0]
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length).fill(false)

    dp[s.length] = true

    for (let i = s.length - 1; i >= 0; i--) {
        for (let w of wordDict) {
            if (i + w.length <= s.length && s.slice(i, i + w.length) == w) {
                dp[i] = dp[i + w.length]
            }
            if (dp[i]) {
                break
            }
        }
    }
    return dp[0]
};