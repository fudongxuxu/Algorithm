/*
 * @lc app=leetcode.cn id=2024 lang=javascript
 *
 * [2024] 考试的最大困扰度
 */

// @lc code=start
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
    let maxLen = function (answerKey, ch) {
        let ans = 0
        let sum = 0;
        for (let l = 0, r = 0; r < answerKey.length; r++) {
            sum += answerKey[r] === ch ? 0 : 1;
            while (sum > k) {
                sum -= answerKey[l] === ch ? 0 : 1;
                l++
            }
            ans = Math.max(ans, r - l + 1)
        }
        return ans
    }
    return Math.max(maxLen(answerKey, 'T'), maxLen(answerKey, 'F'))
};
// @lc code=end

