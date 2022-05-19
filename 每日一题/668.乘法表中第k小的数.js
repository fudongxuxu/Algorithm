/*
 * @lc app=leetcode.cn id=668 lang=javascript
 *
 * [668] 乘法表中第k小的数
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  let left = 1, right = m * n;
  while (left <= right) {
    let count = 0;
    let mid = ~~((left + right) / 2);
    let c = ~~(mid / n) * n;
    for (let i = ~~(mid / n) + 1; i <= m; i++) {
      c += ~~(mid / i)
    }
    if (c >= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

  }
  return left;
};
findKthNumber(3, 3, 5)
// @lc code=end

