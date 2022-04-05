// let m = 0;
// function func1(){
//     setTimeout(() => {
//         console.log('func1')
//         m = 1;
//     }, 2000)
// }

// function func2(){
//     setTimeout(() => {
//         console.log('func2')
//         m = 2;
//     }, 1000)
// }


// function func3(){
//     console.log("func3")
//     m = 3;
// }








function task1 () {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('1', '我是第一个任务，必须第一个执行');
      resolve('done');
    }, 3000);
  });
}
function task2 () {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('2', '第二个任务');
      resolve('done');
    }, 1000)
  });
}
function task3 () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('3', '第三个任务');
      reject('error');
    }, 1000);
  });
}
function task4 () {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('4', '第四个任务');
      resolve('done');
    }, 2000);
  })
}
async function allTasks () {
  await task1();
  await task2();
  await task3();
  await task4();
}
allTasks();



