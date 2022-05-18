/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) return nums[0]
    let notfirst = nums.slice(0).splice(1, nums.length - 1);

    let notLast = nums.slice(0).splice(0, nums.length - 1);
    console.log(notfirst, notLast);
    let getMaxG = function (arr) {
        let len = arr.length;
        let dp = new Array(len).fill(0);
        if (len === 1) return arr[0]
        if (len === 2) return Math.max(arr[0], arr[1]);
        dp[0] = arr[0];
        dp[1] = Math.max(arr[0], arr[1])
        for (let i = 2; i < len; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i])
        }
        return dp[len - 1]
    }
    return Math.max(getMaxG(notfirst), getMaxG(notLast))

};
// @lc code=end

