/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let res = 0, c;
  for (let i = 0; i < strs[0].length; i++) {
    c = strs[0][i];
    for (let j = 1; j < strs.length; j++) {

      if (c.charCodeAt(0) > strs[j][i].charCodeAt(0)) {
        res++;
        break;
      } else {
        c = strs[j][i]
      }

    }
  }
  return res
};
console.log(minDeletionSize(["rrjk","furt","guzm"]));


// @lc code=end

