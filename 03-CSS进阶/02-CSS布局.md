（2）`position` 确定元素的位置：

- static：默认属性值。

- relative：相对定位。相对于元素本身进行偏移，**不会改变它所占据的空间**。

- absolute：绝对定位。相对于父元素中最近的 relative/absolute 进行偏移


### 常见的布局方法

1、**table 表格布局**：早期使用的布局，如今用得很少。

2、**float 浮动 + margin**：为了兼容低版本的IE浏览器，很多网站（比如腾讯新闻、网易新闻、淘宝等）都会采用 float 布局。

3、**inline-block 布局**：对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。

4、**flex 布局**：为布局而生，非常灵活，是最为推荐的布局写法。

![](http://img.smyhvae.com/20191005_1200.png)

上图中可以看到， flex 布局不支持 IE9 及以下的版本。

5、响应式布局。

## float 布局

是 CSS 中一种比较麻烦的属性，涉及到 BFC 和清除浮动（面试的重点）。

### float 属性的特点

- **脱离文档流，但不脱离文本流**

这正是 float 属性的作用。float 本身是用来做图文混排、文字环绕的效果。

### float 所带来的影响

**1、对自身的影响**：

- 形成“块”（BFC）


下面这两个并列的`div1`和`div2`，设置为浮动之后的效果：（都是尽量靠左显示的）

![](http://img.smyhvae.com/20191005_2130.png)

在上方代码的基础之上，增加 `div2`的宽度之后，会发现，`div2`掉下来了：

![](http://img.smyhvae.com/20191005_2135.png)

**3、对父级元素的影响**：

- 造成父级元素的高度塌陷：父级元素撑开 div1 之后（父级元素里没有其他元素的情况下），如果设置 div1 为 float 之后，，会让父级元素的高度变为0。

## inline-block 布局

**存在的问题**：需要处理间隙。代码举例如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<style>
	.container{
		width: 300px;
		height: 300px;
		background: pink;
	}

	.div1{
		width: 100px;
		height: 100px;
		background: green;
		display: inline-block;
	}

	.div2{
		width: 100px;
		height: 100px;
		background: yellowgreen;
		display: inline-block;
	}

	.div3{
		background: yellow;
	}
</style>

<body>
	<div class="container">
		<div class="div1">div1的inline-block 属性</div>
		<div class="div2">div2的inline-block 属性</div>
		<div class="div3">
			琴棋书画不会，洗衣做饭嫌累。
		</div>
	</div>
</body>

</html>
```

![](http://img.smyhvae.com/20191005_2200.png)

上面的代码，存在两个问题。
