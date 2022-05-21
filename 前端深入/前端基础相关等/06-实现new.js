// class Test{
//     constructor() {

//     }

//     add(){

//     }
// }

// // 相当于 

;(function() {
    // 构造器
    function Test(a, b){
        this.a = a;
        this.b = b;
    }
    Test.prototype.add = function() {
        return this.a + this.b;
    }

    const test = new Test(1, 2);
    console.log(test);
})

