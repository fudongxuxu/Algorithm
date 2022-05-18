/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let len = nums.length;
  if (nums.length == 1) {
    return nums;
  }
  let count = 0
  for (let i = 0; i < len; i++) {
    if (nums[count] % 2 !== 0) {
      console.log(nums[count]);
      let a = nums[count];
      nums.splice(count, 1);
      nums.push(a)
      count--;
    }
    count++;

  }

  return nums
};
sortArrayByParity([1,5,7,4,2,3,1])
// @lc code=end

