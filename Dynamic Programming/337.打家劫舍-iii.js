/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function (root) {
    let g = new Map();//选
    let t = new Map();//不选
    function postOrder(root) {
        if (!root) return;
        postOrder(root.left);
        postOrder(root.right);
        g.set(root, root.val + (t.get(root.left) || 0) + (t.get(root.right) || 0));
        t.set(root, Math.max(g.get(root.left) || 0, t.get(root.left) || 0) + Math.max(g.get(root.right) || 0, t.get(root.right) || 0))
    }
    postOrder(root)
    return Math.max(g.get(root) || 0, t.get(root) || 0);
};
// @lc code=end

