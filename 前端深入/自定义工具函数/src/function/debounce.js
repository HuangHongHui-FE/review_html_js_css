
export function debounce(callback, time){
    //定时器变量
    let timeId = null;
    //返回一个函数
    return function(e){
        //判断
        if(timeId !== null){
            //清空定时器
            clearTimeout(timeId);
        }
        //启动定时器
        timeId = setTimeout(() => {
            //执行回调
            callback.call(this, e);
            //重置定时器变量
            timeId = null;
        }, time);
    }
}


// 冒泡排序
// let ls = [2,5,8,0,4,7,9,1,2,4,3]

// for(let i=0; i < ls.length; i++){
//     for(let j = i+1; j < ls.length; j++){
//         if(ls[i] > ls[j]){
//             let middle = ls[i]
//             ls[i] = ls[j]
//             ls[j] = middle
//         }
//     }
// }

// console.log(ls)