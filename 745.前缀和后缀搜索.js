/*
 * @lc app=leetcode.cn id=745 lang=javascript
 *
 * [745] 前缀和后缀搜索
 */

// @lc code=start
/**
 * @param {string[]} words
 */
// var WordFilter = function (words) {
//   this.arr = words;
// };

// /** 
//  * @param {string} pref 
//  * @param {string} suff
//  * @return {number}
//  */
// WordFilter.prototype.f = function (pref, suff) {
//   let n = this.arr.length;
//   let res = -1
//   for (let i = 0; i < n; i++) {
//     if (isPre(pref, this.arr[i]) && isSuff(suff, this.arr[i])) {
//       res = i;
//     }
//   }
//   return res
//   function isPre (a, b) {
//     let l = 0, n = 0;
//     while (l < a.length && n < b.length) {
//       if (a[l] !== b[n]) {
//         return false
//       }
//       l++;
//       n++;
//     }
//     return l === a.length
//   }
//   function isSuff (a, b) {
//     let l = a.length - 1, n = b.length - 1;
//     while (l > -1 && n > -1) {
//       if (a[l] !== b[n]) {
//         return false
//       }
//       l--;
//       n--;
//     }
//     return l === 0
//   };
// }
var WordFilter = function (words) {
  this.arr = words;
  this.map = new Map();
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let m = word.length;
    for (let preL = 1; preL < m; preL++) {
      for (let sufL = 1; sufL < m; sufL++) {
        this.map.set(word.substring(0, preL) + "#" + word.substring((m - sufL)), i);
      }
    }
  }
};


/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
  let str = pref + '#' + suff;
  return this.map.get(str) || -1;
}
/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
// @lc code=end

