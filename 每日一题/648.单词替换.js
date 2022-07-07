/*
 * @lc app=leetcode.cn id=648 lang=javascript
 *
 * [648] 单词替换
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
 var replaceWords = function(dictionary, sentence) {
  const dictionarySet = new Set();
  for (const root of dictionary) {
      dictionarySet.add(root);
  }
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
      const word = words[i];
      for (let j = 0; j < word.length; j++) {
          if (dictionarySet.has(word.substring(0, 1 + j))) {
              words[i] = word.substring(0, 1 + j);
              break;
          }
      }
  }
  return words.join(' ');
};
// @lc code=end

