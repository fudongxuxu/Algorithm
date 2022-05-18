/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function (root) {
    let max = -Infinity;
    function maxGrain(root) {
        if (!root) return 0;
        let leftGrain = Math.max(maxGrain(root.left), 0);
        let rightGrain = Math.max(maxGrain(root.right), 0);
        let sumMax = root.val + leftGrain + rightGrain;
        max = Math.max(sumMax, max);
        return root.val + Math.max(leftGrain, rightGrain);
    }
    maxGrain(root)
    return  max
};
// @lc code=end

