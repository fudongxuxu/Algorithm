/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
  const MOD = 1000000007;
  let count = 1;
  if (n === 1) {
      return 1
  }
  if (n === 2) {
      return 1
  }
  for (let i = 3; i <= n; i++) {
      for (let j = 2; j <= Math.floor(i / 2); j++) {
          if ((i % j) === 0) {
              count++
              break
          }

      }

  }

  let res = 1;
  res = BigInt(jc(count)) * BigInt(jc(n - count))

  function jc(a) {
      let res = 1;
      for (let i = 1; i <= a; i++) {
          res *= i;
          res %= MOD;
      }
      return res;
  }
  res = res % BigInt(MOD)
  return res
};
// @lc code=end

