function demo(arr, m) {
    let dp = new Array(m + 1).fill(0)
    for (let i = 0; i < arr.length; i++)
        for (let j = m; j >= arr[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - arr[i]] + arr[i])
        }

    console.log(dp[m]);
}
demo([23,30,40], 26)