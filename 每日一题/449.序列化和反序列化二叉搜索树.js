/*
 * @lc app=leetcode.cn id=449 lang=javascript
 *
 * [449] 序列化和反序列化二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return ''
  let queue = []
  queue.push(root);
  let str = ''
  while (queue.length) {
    let r = queue.shift();
    if (!r) {
      str += '#,';
      continue;
    }
    str += r.val + ',';
    queue.push(r.left);
    queue.push(r.right);
  }
  return queue;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === '') return []
  let arr = data.split(',');
  arr.pop();
  let queue = [];
  let c = 0;
  let head = new TreeNode((val - 0));
  queue.push(head);
  while (queue.length) {
    let root = queue.shift();
    if (arr[c + 1] === '#') {
      root.left = null;
    } else {
      root.left = new TreeNode((arr[c + 1] - 0));
      queue.push(root.left)
    }
    if (arr[c + 2] === "#") {
      root.right = null;
    } else {
      root.right = new TreeNode((arr[c + 2] - 0));
      queue.push(root.right)

    }
    c += 2;
  }
  return head;

};
console.log('2,1,3,#,#,#,#,'.split(','))
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

