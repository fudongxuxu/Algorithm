/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

var duplicateZeros = function (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);

    if (arr[i] === 0) {
      res.push(0)
      arr.pop();
    }
  }
  arr = res;
};
duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])
// @lc code=end

