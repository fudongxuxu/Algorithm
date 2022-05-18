function mergeSort (arr, left, right, temp) {

  if (left < right) {
    let mid = ~~((left + right) / 2);
    mergeSort(arr, left, mid, temp);
    mergeSort(arr, mid + 1, right, temp);
    let l = left, r = mid + 1, k = 0;
  
    while (l <= mid && r <= right) {
      if (arr[l] <= arr[r]) {
        temp[k] = arr[l];
        l++;
        k++;
      } else {
        temp[k] = arr[r];
        r++;
        k++;
      }
    }
  
    while (l <= mid) {
      temp[k] = arr[l];
      k++;
      l++;
    }
    while (r <= right) {
      temp[k] = arr[r];
      r++;
      l++;
    }
    k = 0;
    while (left <= right) {
      arr[left] = temp[k];
      k++;
      left++;
    }
    console.log(arr);
  }
 
}
function sort (arr) {
  let left = 0;
  let right = arr.length-1;
  let temp = [];
  mergeSort(arr, left, right, temp);
}
sort([1,56,4,3,2,1,5,9,5,4,12,5,4,56,5])