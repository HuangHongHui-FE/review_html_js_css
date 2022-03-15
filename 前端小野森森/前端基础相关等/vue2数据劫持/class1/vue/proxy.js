function proxyData(vm, target, key){
    Object.defineProperty(vm, key, {
        get() {
            // 就在这里做了拦截
            // console.log(vm[target][key])
            return vm[target][key]
        },
        set(newValue){
            vm[target][key] = newValue
        }
    })
}

export default proxyData;