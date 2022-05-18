/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let map = new Map();
    for (let k of prerequisites) {
        if (map.has(k[0])) {
            if (map.get(k[0]) === k[1]) {
                return false
            }
        } else {
            map.set(k[1], k[0])

        }
    }

    return true
};
// @lc code=end

