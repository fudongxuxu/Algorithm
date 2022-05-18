/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // 迭代
    // let preHead = new ListNode(-1);
    // let pre = preHead
    // while (list1 && list2) {
    //     if (list1.val <= list2.val) {
    //         pre.next = list1;
    //         list1 = list1.next
    //     } else {
    //         pre.next = list2
    //         list2 = list2.next
    //     }
    //     pre = pre.next
    // }
    // pre.next = list1 === null ? list2 : list1
    // return preHead.next
    // 递归
    if (list1 === null) {
        return list2
    }
    if (list2 === null) {
        return list1
    }
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
    }
};
// @lc code=end

