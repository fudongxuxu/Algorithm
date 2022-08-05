/*
 * @lc app=leetcode.cn id=1217 lang=javascript
 *
 * [1217] 玩筹码
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  let even = 0, odd = 0;
  for (const pos of position) {
      if ((pos & 1) !== 0) {
          odd++;
      } else {
          even++;
      }
  }
  return Math.min(odd, even);
};
// @lc code=end

