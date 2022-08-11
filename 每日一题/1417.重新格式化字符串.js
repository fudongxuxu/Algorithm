/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 var reformat = function (s) {
  let arr1 = [], arr2 = [];
  for (let i = 0; i < s.length; i++) {
      if (isDigt(s[i])) {
          arr1.push(s[i])
      } else {
          arr2.push(s[i])
      }
  }
  let n = Math.abs(arr1.length - arr2.length);
  if (n >= 2) {
      return ''
  }
  let res = [], c = 0;
  while (c < arr1.length && c < arr2.length) {
      if (arr2.length < arr1.length) {
          res.push(arr1[c])
          res.push(arr2[c])
      } else {
          res.push(arr2[c])
          res.push(arr1[c])
      }
      c++;
  }
  if (arr2.length < arr1.length) {
      res.push(arr1[c])
  } else {
      res.push(arr2[c])
  }
  return res.join('')
  function isDigt(a) {
      return parseFloat(a).toString() == 'NaN' ? false : true;
  }
};
// @lc code=end

