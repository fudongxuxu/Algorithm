let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },

]
// function demo (arr) {
//   let map = new Map();
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     let obj = arr[i];
//     obj.children = [];
//     map.set(arr[i].id, obj);
//     if (map.has(arr[i].pid)) {
//       map.get(arr[i].pid).children.push(obj);
//     } else {
//       res.push(obj)
//     }
//   }
//   console.log(res);
//   return map.get(0)
// }
// demo(arr)
let arr1 = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext".split('\n');

console.log(arr1);