主线程上，创建进程

## 起因

一个线程负责绘制所有资源并且执行js程序

用户长时间看不到内容

### 注意！

一般浏览器是不允许使用本地webworker文件的

Worker线程执行代码中不能包含任何DOM/BOM元素

操作网页DOM/BOM只能交给UI主线程

1. 同源限制
   worker线程执行的脚本文件必须和主线程的脚本文件同源，这是当然的了，总不能允许worker线程到别人电脑上到处读文件吧
2. 文件限制
   为了安全，worker线程无法读取本地文件，它所加载的脚本必须来自网络，且需要与主线程的脚本同源
3. DOM操作限制
   worker线程在与主线程的window不同的另一个全局上下文中运行，其中无法读取主线程所在网页的DOM对象，也不能获取 `document`、`window`等对象，但是可以获取`navigator`、`location(只读)`、`XMLHttpRequest`、`setTimeout族`等浏览器API。
4. 通信限制
   worker线程与主线程不在同一个上下文，不能直接通信，需要通过`postMessage`方法来通信。
5. 脚本限制
   worker线程不能执行`alert`、`confirm`，但可以使用 `XMLHttpRequest` 对象发出ajax请求。



### 主要属性

主线程中的api，`worker`表示是 Worker 的实例：

- `worker.postMessage`: 主线程往worker线程发消息，消息可以是任意类型数据，包括二进制数据
- `worker.terminate`: 主线程关闭worker线程
- `worker.onmessage`: 指定worker线程发消息时的回调，也可以通过`worker.addEventListener('message',cb)`的方式
- `worker.onerror`: 指定worker线程发生错误时的回调，也可以 `worker.addEventListener('error',cb)`





为便于处理数据，Web Worker 本身也是一个最小化的运行环境，其可以访问或使用如下数据：

- 最小化的 `navigator` 对象 包括 `onLine`, `appName`, `appVersion`, `userAgent` 和 `platform` 属性
- 只读的 `location` 对象
- `setTimeout()`, `setInterval()`, `clearTimeout()`, `clearInterval()` 方法
- `XMLHttpRequest` 构造函数

Worker线程中全局对象为 `self`，代表子线程自身，这时 `this`指向`self`，其上有一些api：

- `self.postMessage`: worker线程往主线程发消息，消息可以是任意类型数据，包括二进制数据
- `self.close`: worker线程关闭自己
- `self.onmessage`: 指定主线程发worker线程消息时的回调，也可以`self.addEventListener('message',cb)`
- `self.onerror`: 指定worker线程发生错误时的回调，也可以 `self.addEventListener('error',cb)`

注意，`w.postMessage(aMessage, transferList)` 方法接受两个参数，`aMessage` 是可以传递任何类型数据的，包括对象，这种通信是拷贝关系，即是传值而不是传址，Worker 对通信内容的修改，不会影响到主线程。事实上，浏览器内部的运行机制是，先将通信内容串行化，然后把串行化后的字符串发给 Worker，后者再将它还原。一个可选的 [Transferable](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/zh-CN/docs/Web/API/Transferable)对象的数组，用于传递所有权。如果一个对象的所有权被转移，在发送它的上下文中将变为不可用（中止），并且只有在它被发送到的worker中可用。可转移对象是如ArrayBuffer，MessagePort或ImageBitmap的实例对象，`transferList`数组中不可传入null。



### 终止

html中主线程

```
worker.terminate();
```

webworker.js进程中

```
self.close();
```



### worker线程中加载脚本的api：

```
importScripts('script1.js')	// 加载单个脚本
importScripts('script1.js', 'script2.js')	// 加载多个脚本
```

浏览器加载并运行每一个列出的脚本。每个脚本中的全局对象都能够被 worker 使用。如果脚本无法加载，将抛出 `NETWORK_ERROR` 异常，接下来的代码也无法执行。而之前执行的代码(包括使用 `window.setTimeout()` 异步执行的代码)依然能够运行。`importScripts()` 之后的函数声明依然会被保留，因为它们始终会在其他代码之前运行。

> 注意： 脚本的下载顺序不固定，但执行时会按照传入 `importScripts()` 中的文件名顺序进行。这个过程是同步完成的；直到所有脚本都下载并运行完毕， `importScripts()` 才会返回。

### 错误处理

### Worker 的错误处理机制

具体来说，Worker 内部的 js 在执行过程中只要遇到错误，就会触发 `error` 事件。发生 `error` 事件时，事件对象中包含三个属性：`filename`, `lineno` 和 `message`，分别表示发生错误的文件名、代码行号和完整的错误消息。

```js
worker.addEventListener('error', function (e) {
  console.log('MAIN: ', 'ERROR', e);
  console.log('filename:' + e.filename + '-message:' + e.message + '-lineno:' + e.lineno);
});
```





### 应用

**3. 实战场景**

个人觉得，Web Worker我们可以当做计算器来用，需要用的时候掏出来摁一摁，不用的时候一定要收起来~

1. 加密数据
   有些加解密的算法比较复杂，或者在加解密很多数据的时候，这会非常耗费计算资源，导致UI线程无响应，因此这是使用Web Worker的好时机，使用Worker线程可以让用户更加无缝的操作UI。
2. 预取数据
   有时候为了提升数据加载速度，可以提前使用Worker线程获取数据，因为Worker线程是可以是用 `XMLHttpRequest` 的。
3. 预渲染
   在某些渲染场景下，比如渲染复杂的canvas的时候需要计算的效果比如反射、折射、光影、材料等，这些计算的逻辑可以使用Worker线程来执行，也可以使用多个Worker线程，这里有个[射线追踪的示例](https://link.zhihu.com/?target=https%3A//nerget.com/rayjs-mt/rayjs.html)。
4. 复杂数据处理场景
   某些检索、排序、过滤、分析会非常耗费时间，这时可以使用Web Worker来进行，不占用主线程。
5. 预加载图片
   有时候一个页面有很多图片，或者有几个很大的图片的时候，如果业务限制不考虑懒加载，也可以使用Web Worker来加载图片，可以参考一下[这篇文章的探索](https://link.zhihu.com/?target=https%3A//juejin.im/post/5a0875fcf265da431f4a8ddc)，这里简单提要一下。



在实战的时候注意

- 虽然使用worker线程不会占用主线程，但是启动worker会比较耗费资源
- 主线程中使用XMLHttpRequest在请求过程中浏览器另开了一个异步http请求线程，但是交互过程中还是要消耗主线程资源

在 Webpack 项目里面使用 Web Worker 请参照：[怎么在 ES6+Webpack 下使用 Web Worker](https://link.zhihu.com/?target=https%3A//juejin.im/post/5acf348151882579ef4f5a77)

## webpack中使用webworker

### 安装及使用 worker-loader

安装依赖

```
$ npm install -D worker-loader
# 或
$ yarn add worker-loader --dev
```

### 代码中直接使用 worker-loader

### 在 webpack 的配置文件中引入 `worker-loader`

```
{
  module: {
    rules: [
      {
        // 匹配 *.worker.js
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: {
            name: '[name]:[hash:8].js',
            // inline: true,
            // fallback: false
            // publicPath: '/scripts/workers/'
          }
        }
      }
    ]
  }
}
```

其中配置，可以设置 `inline` 属性为 `true` 将 worker 作为 blob 进行内联； 要注意，内联模式将额外为浏览器创建 `chunk`，即使对于不支持内联 worker 的浏览器也是如此；若这种浏览器想要禁用这种行为，只需要将 `fallback` 参数设置为 `false` 即可。

### 同源策略

#### 1. 

通过设置 `worker-loader` 的选项参数 `inline` 把 worker 内联成 blob 数据格式，而不再是通过下载脚本文件的方式来使用 worker：

**App.js**

```
import Worker from './file.worker.js';
```

**webpack.config.js**

```
{
  loader: 'worker-loader'
  options: { inline: true }
}
```

#### 2. 

通过设置 `worker-loader` 的选项参数 `publicPath` 来重写掉 worker 脚本的下载 url，当然脚本也要存放到同样的位置：

**App.js**

```
// This will cause the worker to be downloaded from `/workers/file.worker.js`
import Worker from './file.worker.js';
```

**webpack.config.js**

```
{
  loader: 'worker-loader'
  options: { publicPath: '/workers/' }
}
```

### devServer 模式下报错 "window is not defined"

若使用了 `webpack-dev-server` 启动了本地调试服务器，则有可能会在控制台报错: "Uncaught ReferenceError: window is not defined"

只需要在 webpack 的配置文件下的 output 下，加一个属性对：`globalObject: 'this'`

```
output: {
  path: DIST_PATH,
  publicPath: '/dist/',
  filename: '[name].bundle.[hash:8].js',
  chunkFilename: "[name].chunk.[chunkhash:8].js",
  globalObject: 'this',
}
```

