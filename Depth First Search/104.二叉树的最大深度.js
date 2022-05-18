/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
    let max = 0;
    let dp = function (root, d) {
        if (!root) {
            return
        }
        d++;
        max = Math.max(d, max)
        dp(root.left, d)
        dp(root.right, d)
    }
    let bfd = function (root) {
        if (root === null) return 0;
        let queue = [];
        queue.push(root)
        let res = 0
        while (queue.length) {
            let sc = queue.length;
            while (sc > 0) {
                let no = queue.shift();
                if (no.left) queue.push(no.left)
                if (no.right) queue.push(no.right)
                sc -= 1
            }
            res++;
        }
        return res
    }
    // dp(root, 0)
    return bfd(root)
};
// @lc code=end

