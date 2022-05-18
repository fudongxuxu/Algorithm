/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m  0
 * @param {number} n  1
 * @return {number}
 */
 var findMaxForm = function(strs, m, n) {
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    const length = strs.length;
    for (let i = 0; i < length; i++) {
        const zerosOnes = getZerosOnes(strs[i]);
        const zeros = zerosOnes[0], ones = zerosOnes[1];
        for (let j = m; j >= zeros; j--) {
            for (let k = n; k >= ones; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1);
            }
        }
    }
    return dp[m][n];
};

const getZerosOnes = (str) => {
    const zerosOnes = new Array(2).fill(0);
    const length = str.length;
    for (let i = 0; i < length; i++) {
        zerosOnes[str[i].charCodeAt() - '0'.charCodeAt()]++;
    }
    return zerosOnes;
}

// @lc code=end

