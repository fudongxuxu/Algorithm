/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let res = []
    function getPath(root, target, path) {
        if (!root) return;
        path.push(root.val);
        if (target - root.val === 0 && root.left === null && root.right === null) {
            res.push([...path])
        }
        getPath(root.left, target - root.val, path)
        getPath(root.right, target - root.val, path)
        path.pop();
    }
    getPath(root, targetSum, [])
    return res
};
// @lc code=end

