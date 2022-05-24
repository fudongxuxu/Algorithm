/*
 * @lc app=leetcode.cn id=436 lang=javascript
 *
 * [436] 寻找右区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  const n = intervals.length;

  let arrC = new Array(n).fill(0).map(() => new Array(2).fill(0));
  for (let i = 0; i < n; i++) {
    arrC[i][0] = intervals[i][0];
    arrC[i][1] = i;
  }
  arrC.sort((a, b) => a[0] - b[0]);
  let res = [];
  for (let i = 0; i < n; i++) {
    let target = -1;
    let left = 0;
    let right = n - 1;
    while (left <= right) {
      let mid = ~~((left + right) / 2);
      if (arrC[mid][0] >= intervals[i][1]) {
        right = mid - 1;
        target = i;

      } else {
        left = mid + 1;
      }
    }
    res.push(target)
  }
  return res
};
// @lc code=end

