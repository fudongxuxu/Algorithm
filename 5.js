function demo(str) {
    let arr = str.split(' ')
    for (let i = 0, temp = 0; i < arr.length; i++) {
        if (i % 2 === 0 && arr[i] < arr[i + 1]) {
            temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }
        if (i % 2 === 1 && arr[i] > arr[i + 1]) {
            temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }
    }
    console.log(arr);
}
demo('4 1 3 5 2')