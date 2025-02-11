function limirRequest(urls = [], limit = 3){
    return new Promise((resolve, reject) => {
        const len = urls.length;
        let count = 0;

        // 同步启动limit个任务
        while(limit > 0){
            start()
            limit -= 1
        }

        function start(){
            const url = urls.shift()  // 拿到第一个任务
            if(url){
                axios.post(url).finally(()=>{
                    if(count == len - 1){
                        // 最后一个任务完成
                        resolve()
                    } else {
                        // 完成之后，启动下一个任务
                        count++
                        start() 
                    }
                })
            }
        }
    })
}


// 测试
limirRequest(['http://xxa', 'http://xxb','http://xxc','http://xxd','http://xxe',])
