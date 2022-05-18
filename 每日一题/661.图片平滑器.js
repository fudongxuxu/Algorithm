/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
    let directionArr = [
        [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]
    ];
    let res = []
    for (let i = 0; i < img.length; i++) {
        let item = []
        for (let j = 0; j < img[i].length; j++) {
            let count = 1, sum = img[i][j];
            for (let k = 0; k < directionArr.length; k++) {
                let x = i + directionArr[k][0], y = j + directionArr[k][1]
                if (x >= 0 && x <= img.length - 1 && y >= 0 && y <= img[i].length - 1) {
                    count++;
                    sum += img[x][y];
                }

            }
            item.push(Math.floor(sum / count))
        }
        res.push(item)
    }
    return res
};
// @lc code=end

