/*
 * @lc app=leetcode.cn id=522 lang=javascript
 *
 * [522] 最长特殊序列 II
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  let max = -1
  for (let i = 0; i < strs.length; i++) {
    let check = true
    for (let j = 0; j < strs.length; j++) {
      if (i != j && isSub(strs[i], strs[j])) {
        check = false;
        break;
      }
    }
    if (check) {
      max = Math.max(max, strs[i].length);
    }
  }

  function isSub (a, b) {
    let l = 0, t = 0;
    while (l < a.length && t < b.length) {
      if (a[l] === b[t]) {
        l++
      }
      t++;
    }
    return l === a.length;
  }
  return max
};
// @lc code=end

