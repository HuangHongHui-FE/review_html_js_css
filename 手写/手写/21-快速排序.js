// function kp_core(li, left, right){  // left为列表最左边下标
//     let tmp = li[left]
//     while(left < right){
//         while(left < right && li[right] >= tmp){
//             right = right - 1  // 往左走一步
//         }
//         li[left] = li[right]  // 右边的值写道左边的空位上
//         while(left < right && li[left] <= tmp){
//             left = left + 1
//         }
//         li[right] = li[left]  // 左边的值写到右边的空位上
//     }
//     // 这时候left === right
//     li[left] = tmp  // 把tmp补到空位上
//     return left
// }


// function kp(li, left, right){
//     if(left < right){
//         mid = kp_core(li, left, right)
//         kp(li, left, mid - 1)
//         kp(li, mid+1, right)
//     }
// }


// // ls = [7,5,4,6,3,1,2,9,8]
// let ls = [
//     {
//         "name": 'a',
//         "info": {
//             "genera": 'nan',
//             "age": 10
//         }
//     },
//     {
//         "name": 'b',
//         "info": {
//             "genera": 'nan',
//             "age": 12
//         }
//     },
//     {
//         "name": 'c',
//         "info": {
//             "genera": 'nan',
//             "age": 9
//         }
//     }
// ]

// ls.sort((a, b) => {
//     return a.info.age - b.info.age
// })
// console.log(ls)
// kp(ls, 0, ls.length - 1)

// console.log(ls)


// 时间复杂度平均nlogn


