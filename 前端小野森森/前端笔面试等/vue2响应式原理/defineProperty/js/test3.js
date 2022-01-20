function DataArr(){
    var _val = null,  // obj
        _arr = [];

    Object.defineProperty(this, 'val', {
        get: function() {
            return _val;
        },
        set: function (newVal) {
            _val = newVal;
            _arr.push({val: _val});
            console.log('A new value' + _val + '"has been pushed to _arr')
        }
    })

    this.getArr = function () {
        return _arr;
    }
}

var dataArr = new DataArr();

dataArr.val = 123;
dataArr.val = 234;
console.log(dataArr.getArr());