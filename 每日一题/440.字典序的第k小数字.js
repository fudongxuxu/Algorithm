/*
 * @lc app=leetcode.cn id=440 lang=javascript
 *
 * [440] 字典序的第K小数字
 */

// @lc code=start
/**
 * @param {number} n 13
 * @param {number} k  6
 * @return {number}
 */
var findKthNumber = function (n, k) {
    let cur = 1;
    k--;
    while (k > 0) {
        let step = getSteps(cur, n);
        if (step <= k) {
            k -= step;
            cur++;  
        } else {
            cur *= 10;
            k--;
        }
    }
    return cur
}

const getSteps = (curr, n) => {
    let step = 0, last = curr, first = curr;
    while (first <= n) {
        step += Math.min(last, n) - first + 1;
        first *= 10;
        last = last * 10 + 9;
    }
    return step;
};

// @lc code=end

