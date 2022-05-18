/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**                         
 * @param {number[]} nums1 
 * [5] k=3 
 *  [1, 2,3,4,6,7,8]
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let p1 = 0, p2 = 0;
    let len = nums1.length + nums2.length;
    function getKthEl(nums1, nums2, k) {
        let ni1 = 0, ni2 = 0;
        let len1 = nums1.length, len2 = nums2.length;
        while (true) {
            if (ni1 === len1) {

            }
            if (k === 1) {
                return Math.min(nums1[ni1], nums2[ni2]);
            }

            k = Math.floor(k / 2);
            if (nums1[ni1 + k - 1] >= nums2[ni2 + k - 1]) {
                ni2 +=
            }
        }

    }
};
// @lc code=end

