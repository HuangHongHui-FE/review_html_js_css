import observe from "./observe";

function defineReactiveData (data, key, value){
    // 递归完成，队对象的处理响应式
    observe(value)
    Object.defineProperty(data, key, {
        get() {
            console.log('响应式数据: 获取', value)
            return value;
        },
        set(newValue) {
            console.log('响应式数据: 设置', newValue);
            if(newValue === value) return;
            observe(newValue)  // 如果是个对象就再进行观察
            value = newValue;
        }
    })
}

export default defineReactiveData;