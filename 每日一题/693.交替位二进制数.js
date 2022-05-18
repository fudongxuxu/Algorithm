/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    let a = (n >> 1) ^ n;
    return ((a + 1) & a) === 0
};
// @lc code=end

