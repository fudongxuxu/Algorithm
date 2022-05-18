function buildHeap(arr) {
    if (arr.length === 0) {
        return []
    }
    let len = arr.length;
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        heapfiy(arr, i)
    }
    console.log(arr);
}
function heapfiy(arr, i) {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let largest = i;
    let len = arr.length;
    if (left < len && arr[i] < arr[left]) {
        largest = left;
    }
    if (right < len && arr[largest] < arr[right]) {
        largest = right;
    }
    if (largest !== i) {
        swap(arr, i, largest);
        heapfiy(arr, largest);
    }
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

buildHeap([1, 5, 7, 14, 12, 1, 2, 6, 0, 1, 2, 4, 8, 9]);