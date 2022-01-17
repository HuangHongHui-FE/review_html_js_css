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
let Child = new Child('xiaoming', 16)
console.log(Child.name)  // xiaoming
Child.eat()  //  xiaoming is eating
Child.study() // xiaoming is studying
