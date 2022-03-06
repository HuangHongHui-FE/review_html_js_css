// 拓展运算符 ...解构赋值
function args(){
    console.log(arguments);
    // 1. 
    // let newArr = [...arguments];

    // 2.
    // let newArr = Array.from(arguments) 

    // 3. 
    // let newArr = []
    // for(let i = 0; i < arguments.length; i++){
    //     newArr.push(arguments[i])
    // }
    // console.log(newArr);

    // 4. 
    let newArr = [].slice.call(arguments)
    console.log(newArr)
}
args(1,2,3,23,2,42,34);