/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    let sum = 0;
    for (let i = 0; i < stones.length; i++) {
        sum += stones[i]
    }
    let mid = Math.floor(sum / 2);
    let dp = new Array(mid + 1).fill(0);
    for (let i = 0; i < stones.length; i++) {
        for (let j = mid; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
        }
    }
    return sum - dp[mid] * 2
};
// @lc code=end

