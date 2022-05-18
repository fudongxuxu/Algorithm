/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let l = nums.length;
    let dp = new Array(l).fill(1);
    let max = 1
    for (let i = 1; i < l; i++) {
        if (nums[i - 1] < nums[i]) {
            dp[i] = dp[i - 1] + 1;
        }
        max = Math.max(dp[i], max)
    }
    return max
};
// @lc code=end

