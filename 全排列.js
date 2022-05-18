function demo(arr) {
    function getAllOrder(arr, p, q) {
        if (p === q) {
            return console.log(arr);
        }
        for (let i = p; i <= q; i++) {
            swap(arr, i, p);
            getAllOrder(arr, p + 1, q)
            swap(arr, i, p)
        }
    }
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    getAllOrder(arr, 0, arr.length - 1)
}
demo([1,2,3,4])