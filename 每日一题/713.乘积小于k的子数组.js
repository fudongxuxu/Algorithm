/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let pre = 1, i = 0;
  let res = 0
  for (let j = 0; j < nums.length; j++) {
    pre *= nums[j];
    while (i <= j && pre >= k) {
      pre /= nums[i];
      i++;
    }
    res += j - i + 1
  }
  return res
};
// @lc code=end

