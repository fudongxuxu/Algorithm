/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return null
    let queue = [];
    queue.push(root)
    while (queue.length > 0) {
        let count = queue.length;

        while (count > 0) {
            count--
            let pre = queue.shift();
            pre.next = count === 0 ? null : queue[0];
            if (pre.left) {
                queue.push(pre.left)
                queue.push(pre.right)
            }
        }
    }
    return root
};
// @lc code=end

