/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let res = [];
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let c = Math.abs(arr[i] - arr[j])
      if (min > c) {
        res = [];
        min = c
      }
      if (min < c) {
        continue
      }
      if (arr[i] > arr[j]) {
        let a = [];
        a.push(arr[j])
        a.push(arr[i])
        res.push(a)
      } else {
        let a = [];
        a.push(arr[i])
        a.push(arr[j])
        res.push(a)
      }
    }

  }
  res.sort((a, b) => {
    return a[0] - b[0]
  })
  return res
};
// @lc code=end

