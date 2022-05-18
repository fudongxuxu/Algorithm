/*
 * @lc app=leetcode.cn id=388 lang=javascript
 *
 * [388] 文件的最长绝对路径
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number}
 */
function countT (str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '\t') {
      count++;
    }
  }
  return count
}
var lengthLongestPath = function (input) {
  let arr = input.split('\n');
  let res = 0;
  let map = new Map();
  map.set(-1, 0)
  for (let k of arr) {
    let t = countT(k);
    map.set(t, map.get(t - 1) + k.length - t + 1);
    if (k.includes('.')) {
      res = Math.max(res, map.get(t))
    }

  }
  return res - 1
};
lengthLongestPath('file1.txt\nfile2.txt\nlongfile.txt')
// @lc code=end

