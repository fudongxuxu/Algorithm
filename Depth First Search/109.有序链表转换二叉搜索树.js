/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    // let len = getLinkLength(head);

    function findMid(leftL, rightL) {
        let slow = leftL, fast = leftL;
        while (fast !== rightL && fast.next !== rightL) {
            slow = slow.next;
            fast = fast.next;
            fast = fast.next;
        }
        return slow
    }
    function buildTree(leftL, rightL) {
        if (leftL === rightL) return null
        let mid = findMid(leftL, rightL);
        let node = new TreeNode(mid.val);
        node.left = buildTree(leftL, mid);
        node.right = buildTree(mid.next, rightL);
        return node
    }

    // function getLinkLength(List) {
    //     let p = List;
    //     let count = 0;
    //     while (p.next !== null) {
    //         count++;
    //         p = p.next
    //     }
    //     return count
    // }

    return buildTree(head, null);

};

let obj = [{ math: 'A', english: "B", science: 'A', social: 'C' },
{ math: 'B', english: "A", science: 'A', social: 'B' },
{ math: 'C', english: "A", science: 'C', social: 'D' },
{ math: 'C', english: "D", science: 'A', social: 'B' }]

let ar = new Map({ math: 'A', english: "B", science: 'A', social: 'C' })
console.log(ar);
// @lc code=end

