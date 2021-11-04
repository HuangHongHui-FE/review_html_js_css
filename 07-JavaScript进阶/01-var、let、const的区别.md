
## var、let、const 的区别

### 1、var 声明的变量会挂载在 window 对象上，而 let 和 const 声明的变量不会

### 2、var 声明的变量存在变量提升，let 和 const 声明的变量不存在变量提升

### 3、var 声明不存在块级作用域，let 和 const 声明存在块级作用域

### 4、同一作用域下，var 可以重复声明变量，let 和 const 不能重复声明变量

### 5、let 和 const 的暂时性死区（DTC）

**举例 2**：（报错）

```js
const name = 'qianguyihao';

function foo() {
    console.log(name);
    const name = 'hello';
}

foo(); // 执行函数后，控制台报错：Uncaught ReferenceError: Cannot access 'name' before initialization
```


### 6、const：一旦声明必须赋值；声明后不能再修改

## const 常量到底能不能被修改

举例 3：（可以修改）

```js
const obj = {
    name: 'qianguyihao',
    age: 28,
};
obj.name = 'vae'; // 对象里的 name 属性可以被修改
```

因为 变量名 obj 是保存在**栈内存**中的，它代表的是对象的引用地址，它是基本数据类型，无法被修改。但是 obj 里面的内容是保存在**堆内存**中的，它是引用数据类型，可以被修改。

