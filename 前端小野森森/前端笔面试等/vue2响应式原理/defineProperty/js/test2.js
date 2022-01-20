function defineProperty(){
    var _obj = {}
    var a = 1;

    // 每一个属性定义的时候get, set机制
    Object.defineProperties(_obj, {
        a:{
            // value: 2,
            // writable: false,
            get(){

            },
            set(newVal){
                a = newVal;
                var op = document.getElementsByTagName('p')[0];
                op.innerHTML = a;
            }
        },

        b: {

        }
    })
    return _obj;
}

var obj = defineProperty();
obj.a = 1;