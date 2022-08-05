/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);
  for (const index of indices) {
      rows[index[0]]++;
      cols[index[1]]++;
  }
  console.log(rows,cols)

  let oddx = 0, oddy = 0;
  for (let i = 0; i < m; i++) {
      if ((rows[i] & 1) !== 0) {
          oddx++;
      }
  }
  for (let i = 0; i < n; i++) {
      if ((cols[i] & 1) !== 0) {
          oddy++;
      }
  }
  console.log(oddx * (n - oddy) + (m - oddx) * oddy)

  return oddx * (n - oddy) + (m - oddx) * oddy;

};
oddCells(2,3,[[0,1],[1,1]])
// @lc code=end

