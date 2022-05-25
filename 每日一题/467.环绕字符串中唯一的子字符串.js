/*
 * @lc app=leetcode.cn id=467 lang=javascript
 *
 * [467] 环绕字符串中唯一的子字符串
 */

// @lc code=start
/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
  let dp = new Array(26).fill(0);
  let k = 0
  for (let i = 0; i < p.length; i++) {
      if (i > 0 && (p[i].charCodeAt(0) - p[i - 1].charCodeAt(0) + 26) % 26 ===1) {
          k++;
      } else {
          k = 1;
      }
      dp[p[i].charCodeAt(0) - "a".charCodeAt(0)] = Math.max(dp[p[i].charCodeAt(0) - "a".charCodeAt(0)], k);
  }
  console.log(dp)
  let sum = 0;
  for (let j = 0; j < dp.length; j++) {
      sum += dp[j]
  }
  console.log(sum);
  return sum;
};

// @lc code=end

