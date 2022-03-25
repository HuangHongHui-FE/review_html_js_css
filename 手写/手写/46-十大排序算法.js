// 1. 冒泡 O(n**2)。
// let ls = [1,4,3,8,6,7,2,5]

// function bubble(ls){
//     for(let i = 0; i < ls.length - 1; i++){
//         for(let j = 0; j < ls.length - i - 1; j++){
//             if(ls[j] > ls[j+1]){
//                 let temp = ls[j+1];
//                 ls[j+1] = ls[j];
//                 ls[j] = temp
//             }
//         }
//     }
//     return ls
// }
// ls = bubble(ls);
// console.log(ls);



// 2. 选择排序。
// let ls = [1,4,3,8,6,7,2,5]
// function select(ls){
//     var index, temp;
//     for(let i = 0; i < ls.length-1; i++){
//         index = i
//         for(let j = i+1; j<ls.length; j++){
//             if(ls[j] < ls[index]){
//                 index = j
//             }
//         }
//         temp = ls[i];
//         ls[i] = ls[index];
//         ls[index] = temp;
//     }
//     return ls
// }

// ls = select(ls)
// console.log(ls)




// 插入排序。






// 快排
function quickSort (arr, s, t) {
  let i = s, j = t
  if (s < t) {
    let tmp = arr[s]
    while (i != j) {
      while (j > i && arr[j] <= tmp)
        j--
      arr[i] = arr[j]
      while (i < j && arr[i] >= tmp)
        i++
      arr[j] = arr[i]
    }
    arr[i] = tmp
    quickSort(arr, s, i-1)
    quickSort(arr, i+1, t)
  }
  return arr
}




