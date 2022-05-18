/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length, n = nums2.length;
  if (m > n) {
  return findMedianSortedArrays(nums2, nums1);
  }
  let left = 0, right = m;
  while (left <= right) {
    let i = ~~((left + right) / 2);
    let j = ~~((m + n + 1) / 2) - i;
    let m_left = (i == 0 ? -Infinity : nums1[i - 1]);
    let m_right = (i == m ? Infinity : nums1[i]);
    let n_left = (j == 0 ? -Infinity : nums2[j - 1]);
    let n_right = (j == n ? Infinity : nums2[j]);
    if (m_left <= n_right) {
      var median1 = Math.max(m_left, n_left);
      var median2 = Math.min(m_right, n_right);
      left = i + 1;
    } else {
      right = i - 1;
    }
  }
  console.log(median1);
  return (m + n) % 2 === 0 ? (median1 + median2) / 2 : median1;
};

  console.log(findMedianSortedArrays(
    [2],
    []));
// @lc code=end

