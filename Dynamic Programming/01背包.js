
var weight = [1, 3, 4];
var value = [15, 20, 30];
function weightBag(weight, val, bag) {
    // 二维dp
    // let len = weight.length;
    // let dp = new Array(len + 1).fill(0).map(item => new Array(bag + 1).fill(0))
    // for (let k = bag; k >= weight[0]; k--) {
    //     dp[0][k] = val[0]
    // }
    // for (let i = 1; i < len; i++) {
    //     for (let j = 1; j <= bag; j++) {
    //         if (j - weight[i] >= 0) {
    //             dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + val[i])
    //         }
    //     }
    // }
    // console.log(dp[len - 1][bag]);
    // return dp[len][bag]


    //一维滚动数组
    let dp = new Array(bag + 1).fill(0)
    for (let i = 0; i < weight.length; i++) {
        for (let j = bag; j >= weight[i]; j--) {
            dp[j] = Math.max(dp[j - weight[i]] + val[i], dp[j])
        }
        console.log(dp);

    }
}
weightBag(weight, value, 4)