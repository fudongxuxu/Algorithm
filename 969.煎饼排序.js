/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
    let len = arr.length, res = [];
    function getMaxIndex(arr, len) {
        let index = 0, max = -Infinity;
        for (let i = 0; i < len; i++) {
            if (max < arr[i]) {
                max = arr[i]
            }
        }
        for (let i = 0; i < len; i++) {
            if (max === arr[i]) {
                return i
            }
        }
    }
    function reverse(arr, end) {
        for (let i = 0, j = end; i < j; i++, j--) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    };
    while (len > 1) {
        let mIndex = getMaxIndex(arr, len);
        if (mIndex !== 0) {
            reverse(arr, mIndex )
            res.push(mIndex + 1)
            reverse(arr, len-1)
            res.push(len)
            len--;

        } else {
            reverse(arr, len-1)
            res.push(len)

            len--;
        }
    }
    return res
};
// @lc code=end

