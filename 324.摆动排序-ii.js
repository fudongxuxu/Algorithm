/*
 * @lc app=leetcode.cn id=324 lang=javascript
 *
 * [324] 摆动排序 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  let arr = [];
  nums.sort((a, b) => a - b)
  arr.push(nums[0])
  let i = 0;
  let p = Math.floor((nums.length + 1) / 2) - 1;
  for (let j = p + i; j < nums.length;) {
    if (j < nums.length - 1) {
      arr.push(nums[j])
      arr.push(nums[i])
      i++;
      j = i + p;
    } else {
      break;
    }

  }
  console.log(arr);
  return arr
};
wiggleSort([1, 5, 1, 1, 6, 4])
// @lc code=end

