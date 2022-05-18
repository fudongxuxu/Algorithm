/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var trailingZeroes = function (n) {
     return n === 0 ? 0 : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5))
};
// @lc code=end

