/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  let obj = {
    'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, "E": 1, 'I': 1, "O": 1, 'U': 1
  }
  let arr = sentence.split(' ')


  for (let i = 0; i < arr.length; i++) {
    let strArr = arr[i].split('');
    if (!obj[strArr[0]]) {
      let s = strArr.splice(0, 1);
      console.log(123,i);
      strArr.push(...s);
      strArr.push('ma');
    }else{
      strArr.push('ma');
      console.log(321,i);
    }
   
  
    for(let k=0;k<(i+1);k++){
      strArr.push('a')
    }
    arr.splice(i, 1, strArr.join(''))
  }
  return arr.join(' ')
};
toGoatLatin('The quick brown fox jumped over the lazy dog')
// @lc code=end

