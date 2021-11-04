### 问题描述：文本内容里自带了换行，但是在前端没有展示出来

解决办法：增加如下属性即可。

```
white-space: pre-wrap;
```

或者：

```
white-space: pre-line;
```


### 2019-11-19-鼠标悬停时，弹出提示文字

参考链接：[css实现鼠标悬浮后的提示效果](https://www.cnblogs.com/zhaojian-08/p/10074660.html)


### 2020-03-26-通过CSS扩大点击热区

```css
.button {
	position: relative;
	/* [其余样式] */
}

.button::before {
	content: '';
	position: absolute;
	top: -10px;
	right: -10px;
	bottom: -10px;
	left: -10px;
}
```
### 2020-10-09-上下滚动，不显示滚动条

```css
.sku_list {
	margin-left: 25rpx;
	display: flex;
	flex-wrap: wrap;

	height: 617rpx;
	overflow: hidden;
	overflow-y: scroll;

	/* 去掉滚动条 */
	&::-webkit-scrollbar {
		display: none;
	}
}
```

注意，去掉滚动条的那行代码里，建议用`display: none;`，不要用`width: 0;`。因为，当你需要设置横向滚动的效果时，`display: none;`这个属性的效果更好，不会改变容易的size；`width: 0;`可能会改变容易的size。

参考链接：

- [html设置局部区域上下滚动，不显示滚动条](https://blog.csdn.net/weixin_42157001/article/details/90176510)


### 2021-05-06-设置页面的宽高，撑满屏幕

一般来说，我们在开发一个页面的时候，默认是希望这个页面的宽高能够撑满屏幕的。代码可以这样写：

```css
.app {
	width: 100vw;
	min-height: 100vh;
}
```

### 2021-09-13-JS中插入CSS

代码举例：

```js
new_element = document.createElement("style");
new_element.innerHTML =(".tucao-content p{font-size:18px;}");
document.body.appendChild(new_element);
```

[CSS实现鼠标悬停弹出微信二维码](https://www.hanost.com/637.html)

