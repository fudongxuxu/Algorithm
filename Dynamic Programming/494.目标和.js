/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let res = 0;
    let backTrack = function (nums, i, sum) {
        if (i === nums.length) {
            if (sum === target) {
                res++
            }
        } else {
            backTrack(nums, i + 1, sum + nums[i])
            backTrack(nums, i + 1, sum - nums[i])
        }
    }
    backTrack(nums, 0, 0)
    return res
};
// @lc code=end

