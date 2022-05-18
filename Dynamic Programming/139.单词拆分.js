/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let len = s.length;
    let dp = new Array(len + 1).fill(false);
    let myset = new Set(wordDict);
    dp[0] = true
    for (let i = 1; i <= len; i++) {
        for (let j = 0; j < i; j++) {
            let nWord = s.substr(j, i - j);
            if (myset.has(nWord) && dp[j]) {
                dp[i] = true
            }
        }
        console.log(dp);
    }
    return dp[len]
};
// @lc code=end

