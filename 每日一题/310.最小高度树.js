/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

var findMinHeightTrees = function (n, edges) {
    let ans = [];
    if (n === 1) {
        ans.push(0)
        return ans
    }
    let degree = new Array(edges.length).fill(0).map(()=>new Array());
    let map = new Map();
    for (let i = 0; i < edges.length; i++) {

    }
};
// @lc code=end

