function demo(n, k) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    let res = [];
    function getAllOrder(arr, p, q) {
        if (p === q) {
            return res.push(arr.slice(0))
        }
        for (let i = p; i < q; i++) {
            swap(arr, i, p);
            getAllOrder(arr, p + 1, q);
            swap(arr, i, p)
        }
    }
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    getAllOrder(arr, 0, arr.length)
    console.log(res);

    return res[k].join('')
}
console.log(demo(3, 3));