// 1. js接受数据
onmessage = function(event){
    console.log("UI发送数据：" + event.data);
}


// 2. js发数据
postMessage('456');


// 3. 让html去操作DOM
postMessage('执行完成');
