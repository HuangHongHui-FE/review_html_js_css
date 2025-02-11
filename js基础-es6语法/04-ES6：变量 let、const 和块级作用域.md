
### 3、const：定义常量

用 const 声明的常量，只在局部（块级作用域内）起作用；而且，用 const 声明常量时，必须赋值，否则报错。

### let 和 const 的特点【重要】

-   不属于顶层对象 Window

-   不允许重复声明

-   不存在变量提升

-   暂时性死区

-   支持块级作用域

相反， 用`var`声明的变量：存在变量提升、可以重复声明、**没有块级作用域**。





## for 循环举例（经典案例）

**代码 1**、我们先来看看如下代码：（用 var 定义变量 i）

```html
<!DOCTYPE html>
<html lang="">
    <head>
        <meta />
        <meta />
        <meta />
        <title>Document</title>
    </head>
    <body>
        <input type="button" value="aa" />
        <input type="button" value="bb" />
        <input type="button" value="cc" />
        <input type="button" value="dd" />

        <script>
            var myBtn = document.getElementsByTagName('input');

            for (var i = 0; i < myBtn.length; i++) {
                myBtn[i].onclick = function () {
                    alert(i);
                };
            }
        </script>
    </body>
</html>
```

上方代码中的运行效果如下：

![](http://img.smyhvae.com/20190904_1030.gif)

你可能会感到诧异，为何点击任何一个按钮，弹出的内容都是 4 呢？这是因为，我们用 var 定义的变量 i，是在全局作用域声明的。整个代码中，自始至终只有一个变量。

for 循环是同步代码，而 onclick 点击事件是异步代码。当我们还没点击按钮之前，同步代码已经执行完了，变量 i 已经循环到 4 了。

也就是说，上面的 for 循环，相当于如下代码：

```javascript
var i = 0;
myBtn[0].onclick = function () {
    alert(i);
};
i++;

myBtn[1].onclick = function () {
    alert(i);
};
i++;

myBtn[2].onclick = function () {
    alert(i);
};
i++;

myBtn[3].onclick = function () {
    alert(i);
};
i++; // 到这里，i 的值已经是4了。因此，当我们点击按钮时，i的值一直都是4
```

**代码 2**、上面的代码中，如果我们改为用 let 定义变量 i：

```html
<!DOCTYPE html>
<html lang="">
    <head>
        <meta />
        <meta />
        <meta />
        <title>Document</title>
    </head>
    <body>
        <input type="button" value="aa" />
        <input type="button" value="bb" />
        <input type="button" value="cc" />
        <input type="button" value="dd" />

        <script>
            var myBtn = document.getElementsByTagName('input');

            for (let i = 0; i < myBtn.length; i++) {
                myBtn[i].onclick = function () {
                    alert(i);
                };
            }
        </script>
    </body>
</html>
```

上方代码中的运行效果如下：

![](http://img.smyhvae.com/20190904_1040.gif)

上面这个运行结果，才是我们预期的效果。我们用 let 定义变量 i，在循环的过程中，每执行一次循环体，就会诞生一个新的 i。循环体执行 4 次，就会有四个 i。

## 补充知识

### 暂时性死区 DTC

ES6 规定：使用 let/const 声明的变量，会使区块形成封闭的作用域。若在声明之前使用变量，就会报错。

也就是说，在使用 let/const 声明变量时，**变量需要先声明，再使用**（声明语句必须放在使用之前）。这在语法上，称为 “暂时性死区”（ temporal dead zone，简称 TDZ）。

代码举例：

```js
const name = 'qianguyihao';

function foo() {
    console.log(name);
    const name = 'hello';
}

foo(); // 执行函数后，控制台报错：Uncaught ReferenceError: Cannot access 'name' before initialization
```

