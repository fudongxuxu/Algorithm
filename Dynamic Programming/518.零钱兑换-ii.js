/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]]
        }
    }
    return dp[amount]
};
change(5, [1, 2, 5])
// @lc code=end

