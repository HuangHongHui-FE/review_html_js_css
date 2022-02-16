function Parent(name){
    this.name = name
}

Parent.prototype.eat = function(){
    console.log(this.name + ' is eating')
}

function Child(name, age){
    Parent.call(this, name)
    this.age = age
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.contructor = Child

Child.prototype.study = function(){
    console.log(this.name + ' is studying')
}


// 测试
let Child1 = new Child('xiaoming', 16)
console.log(Child1.name)  // xiaoming
Child1.eat()  //  xiaoming is eating
Child1.study() // xiaoming is studying
