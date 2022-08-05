/*
 * @lc app=leetcode.cn id=623 lang=javascript
 *
 * [623] 在二叉树中增加一行
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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  // bfs
  let queue = [];
  queue.push(root);
  let dep = 1;
  if (depth === 1) {
    let nodeV = new TreeNode(val);
    nodeV.left = root;
    return nodeV
  }
  while (queue.length) {
    let n = queue.length;
    dep++;
    if (dep === depth) {
      break;
    }
    for (let i = 0; i < n; i++) {

      let node = queue.shift();
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }

    }
  }
  let fn = queue.length;
  for (let j = 0; j < fn; j++) {
    let fnode = queue.shift();
    if (fnode.left) {
      let lnode = new TreeNode(val);
      lnode.left = fnode.left;
      fnode.left = lnode
    } else {

      let lnode = new TreeNode(val);
      fnode.left = lnode
    }
    if (fnode.right) {
      let rnode = new TreeNode(val);
      rnode.right = fnode.right;
      fnode.right = rnode
    } else {
      let rnode = new TreeNode(val);
      fnode.right = rnode

    }
  }
  return root

  //dsf
  // if (!root) {
  //   return null;
  // }
  // if (depth === 1) {
  //   return new TreeNode(val, root, null);
  // }
  // if (depth === 2) {
  //   root.left = new TreeNode(val, root.left, null);
  //   root.right = new TreeNode(val, null, root.right);
  // } else {
  //   root.left = addOneRow(root.left, val, depth - 1);
  //   root.right = addOneRow(root.right, val, depth - 1);
  // }
  // return root;
};
// @lc code=end

