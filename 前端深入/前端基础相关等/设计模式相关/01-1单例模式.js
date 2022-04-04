// 确保一个类只有一个实例对象。
// 实现的方法为先判断实例存在与否，如果存在则直接返回，如果不存在就创建了再返回

// 弹窗，无论点击多少次，弹窗只应该被创建一次

class CreateUser{
    constructor(name){
        this.name = name;
        this.getName();
    }
    getName() {
        return this.name
    }
}

// 代理实现单例模式

var ProxyMode = (function() {
    var instance = null;
    return function(name){
        if(!instance) {
            instance = new CreateUser(name);
        }

        return instance;
    }
})();

// 测试单例模式的实例
var a = new ProxyMode('aaa');
var b = new ProxyMode('bbb');

// 因为单例模式只实例化一次，所以下面的实例是相等的
console.log(a === b);   // true


