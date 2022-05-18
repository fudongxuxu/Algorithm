let arr = [1, 2, 3, 4, 5];
let b = []
function dp(arr, count1, count2, len) {
    if (count2 === len) {
        console.log(b);
    } else {
        for (let i = count1; i < arr.length; i++) {
            b[count2] = arr[i];
            dp(arr, i + 1, count2 + 1, len);
        }
    }
}

// function dp1(arr, i, p) {
//     if (i)
// }
// dp(arr, 0, 0, 3)
dp1(arr, true, [], 0)