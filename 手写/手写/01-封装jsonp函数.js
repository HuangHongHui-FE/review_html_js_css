function jsonp({url, params, callback}){
    return new Promise((resolve, reject) => {
        // 创建临时script标签用于发起请求
        const script = document.createElement('script')
        // 将回调函数临时绑定到window对象，回调函数执行完就移除script
        window[callback] = data =>{
            resolve(data);
            document.body.removeChild(script);
        };

        // 构造get请求函数，key=value&callback=callback
        const formatParams = { ...params, callback };
        const requestParams = Object.keys(formatParams)
            .reduce((acc, cur) => {
                return acc.concat([`${cur}=${formatParams[cur]}`]);
            }, [])
            .join("&");

        // console.log(requestParams)

        // 构造get请求的url地址
        const src = `${url}?${requestParams}`;
        script.setAttribute('src', src);
        document.body.appendChild(script);
    })
}

// 调用
jsonp({
    url: 'https://xxx.xxx',
    params: {data: 'ooo'},
    callback: 'func'
})