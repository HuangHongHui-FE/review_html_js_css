ls = [2,1,5,6,7,4,3,8,9,0]

// function xuan(ls){
//     let minIndex;
//     for(let i = 0; i < ls.length - 1; i++){
//         minIndex = i
//         for(let j = i + 1; j < ls.length; j++){
//             if(ls[minIndex] > ls[j]){
//                 minIndex = j
//             }
//         }
//         let temp = ls[i]
//         ls[i] = ls[minIndex]
//         ls[minIndex] = temp
//     }
//     return ls
// }
// console.log(xuan(ls))



// function maopao(ls){
//     for(let i = 0; i < ls.length; i++){
//         for(let j = i; j < ls.length; j++){
//             if(ls[j] < ls[i]){
//                 let temp = ls[j]
//                 ls[j] = ls[i]
//                 ls[i] = temp
//             }
//         }
//     }
//     return ls
// }
// console.log(maopao(ls))
