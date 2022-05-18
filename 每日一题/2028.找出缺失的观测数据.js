/*
 * @lc app=leetcode.cn id=2028 lang=javascript
 *
 * [2028] 找出缺失的观测数据
 */

// @lc code=start
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
    let rLen = rolls.length, toal = (rLen + n) * mean;
    let rSum = 0;
    for (let i = 0; i < rLen; i++) {
        rSum += rolls[i]
    }
    let remain = toal - rSum;
    if (remain < n || remain > n * 6) {
        return [];
    }
    let q = Math.floor(remain / n), r = remain % n;
    let res = [];
    for (let i = 0; i < n; i++) {
        if (i < r) {
            res.push(q + 1)
        } else {
            res.push(q)
        }
    }
    return res

};
// @lc code=end

