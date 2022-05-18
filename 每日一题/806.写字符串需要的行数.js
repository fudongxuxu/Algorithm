/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let map = new Map();
    let res = []
    for (let i = 0; i < widths.length; i++) {
        map.set(letters[i], widths[i])
    }
    let row = 1, sum = 0;
    for (let j = 0; j < s.length; j++) {
        if ((sum + map.get(s[j])) <= 100) {
            sum += map.get(s[j])
        } else {
            row++;
            sum = 0;
            sum += map.get(s[j])
        
    }
    return [row, sum]
};
// @lc code=end

