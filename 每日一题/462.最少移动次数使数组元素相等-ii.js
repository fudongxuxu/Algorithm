/*
 * @lc app=leetcode.cn id=462 lang=javascript
 *
 * [462] 最少移动次数使数组元素相等 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  let mid = nums[~~(nums.length / 2)];
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += Math.abs(nums[i] - mid);
  }
  return res
};
// @lc code=end

