/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
    let l1 = nums1.length, l2 = nums2.length;
    let dp = new Array(l1 + 1).fill(0).map(() => new Array(l2 + 1).fill(0));
    let max = 0
    for (var i = 1; i <= l1; i++) {
        for (var j = 1; j <= l2; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }
            max = Math.max(max, dp[i][j])
        }
    }
    return max
};
findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])
// @lc code=end

