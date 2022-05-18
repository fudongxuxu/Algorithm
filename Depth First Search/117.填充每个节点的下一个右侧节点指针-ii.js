/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
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
 * @param {Node} root 0
 *                  1   2
 *                0   1   2
 * @return {Node}
 */
var connect = function (root) {

    let cur = root;
    while (cur !== null) {
        let dummy = new Node(0);
        let pre = dummy;
        while (cur !== null) {
            if (cur.left) {
                pre.next = cur.left
                pre = pre.next
            }
            if (cur.right) {
                pre.next = cur.right
                pre = pre.next
            }
            cur = cur.next
        }
        cur = dummy.next
    }
    return root
};

// @lc code=end

