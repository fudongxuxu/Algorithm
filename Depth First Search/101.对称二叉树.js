/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let checkDFS = function (p, q) {
        if (!p && !q) return true
        if (p === null || q === null) return false
        return p.val === q.val && check(p.left, q.right) && check(p.right, q.left)
    }
    let checkBSf = function (root) {
        let queue = [];

        queue.push(root.left);
        queue.push(root.right);
        while (queue.length) {
            let u = queue.shift(), v = queue.shift();
            if (u === null && v === null) {
                continue;
            }
            if ((u === null || v === null) || u.val !== v.val) {
                return false
            }
            queue.push(u.left)
            queue.push(v.right)
            queue.push(u.right)
            queue.push(v.left)
        }
        return true
    }
    return checkBSf(root)
};
// @lc code=end

