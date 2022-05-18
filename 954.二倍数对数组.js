/*
 * @lc app=leetcode.cn id=954 lang=javascript
 *
 * [954] 二倍数对数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
    let hashMap = new Map();
    for (let k of arr) {
        hashMap.set(k, (hashMap.get(k) || 0) + 1)
    }
    if ((hashMap.get(0) || 0) % 2 !== 0) {
        return false
    }
    const vals = [];
    for (const x of hashMap.keys()) {
        vals.push(x);
    }
    vals.sort((a, b) => Math.abs(a) - Math.abs(b));

    for (const x of vals) {
        if ((hashMap.get(2 * x) || 0) < hashMap.get(x)) { // 无法找到足够的 2x 与 x 配对
            return false;
        }
        hashMap.set(2 * x, (hashMap.get(2 * x) || 0) - hashMap.get(x));
    }

    return true
};
// @lc code=end

