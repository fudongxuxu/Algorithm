/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let dp = new Array(nums.length).fill(1);
    let max = 1
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
        }
        max = Math.max(dp[i], max)
    }
    console.log(max);

    return max
};

lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6])
// @lc code=end

