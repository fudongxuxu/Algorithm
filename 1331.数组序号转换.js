/*
 * @lc app=leetcode.cn id=1331 lang=javascript
 *
 * [1331] 数组序号转换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let map = new Map();
  let arr1 = arr.slice(0)
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], map.size + 1)
    }
  }
  let res = []
  for (let j = 0; j < arr1.length; j++) {
    let c = map.get(arr1[j]);
    res.push(c)
  }
  console.log(res)
  return res
};
// @lc code=end

