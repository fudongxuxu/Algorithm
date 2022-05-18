/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    function build(str) {
        let res = ''
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '#') {
                if (res.length > 0) {
                    res = res.slice(0, -1);

                }
            } else {
                res += str[i]
            }
        }
        return res
    }
    return build(s) == build(t)
};

// @lc code=end

