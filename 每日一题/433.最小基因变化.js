/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  let set = new Set(bank);
  let queue = [];
  let hashMap = new Map();
  let r = ["A", "C", "G", "T"];
  hashMap.set(start, 0);
  queue.push(start)
  while (queue.length > 0) {
    let len = queue.length;
    while (len > 0) {
      let c = queue.shift();
      let step = hashMap.get(c);
      for (let i = 0; i < 8; i++) {
        for (let k of r) {
          if (k === c[i]) continue;
          let strArr = c.split('');
          strArr[i] = k;
          let str = strArr.join('');
          console.log(str);
          if (!set.has(str)) continue;
          if (hashMap.has(str)) continue;
          if (str === end) return step + 1;
          hashMap.set(str, step + 1);
          queue.push(str);
        }
      }
      len--;
    }
  }
  return -1;

};

console.log(minMutation("AAAAACCC", "AACCCCCC", ["AAAACCCC","AAACCCCC","AACCCCCC"]));
// @lc code=end

