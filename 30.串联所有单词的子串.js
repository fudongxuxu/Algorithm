/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let n = words[0].length, m = s.length, wn = words.length;
  if (n * wn > m) {
    return []
  }
  let res = [];
  let map = new Map();
  for (let k of words) {
    map.set(k, (map.get(k) || 0) + 1);
  }
  for (let i = 0; i < m - (n * wn - 1); i++) {
    let cmap = new Map();
    let flag = false;
    for (let j = 0; j < wn; j++) {
      let word = s.substring(i + j * n, i + (j + 1) * n);
      if (!map.get(word)) {
        flag = true;
        break;
      }
      cmap.set(word, (cmap.get(word) || 0) + 1);
      if (cmap.get(word) > map.get(word)) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      res.push(i)
    }
  }
  return res
};
// @lc code=end

