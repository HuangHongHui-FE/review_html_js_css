import defineReactiveData from './reactive'

function Observer(data){
    if(Array.isArray(data)) {

    } else {
        this.walk(data);
    }
}

Observer.prototype.walk = function(data) {
    var keys = Object.keys(data);

    // console.log(keys);
    for(var i = 0; i<keys.length; i++){
        var key = keys[i],
            value = data[key];

        // 有了数据,数据
        defineReactiveData(data, key, value)
    }
}

// {}  defineProperty
// []  自己去写方法

export default Observer