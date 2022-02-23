class Parent{
    constructor(name){
        this.name = name
    }

    eat(){
        console.log(this.name + ' is eating')
    }
}


class Child extends Parent {
    constructor(name, age){
        super(name)
        this.age = age
    }
}


// 测试
let xm = new Child('xiaoming', 12)

console.log(xm.name)
console.log(xm.age)
xm.eat()