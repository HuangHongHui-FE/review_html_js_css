#### 项目配置：

1. vue create constelation-pro

2. Sass-node

3. package.json

4. vue add vue-next

5. npm i -S axios qs

   assets下面的border.css处理移动端两倍边框等的问题， reset.css就是处理标签默认初始化的问题

   ##### 课程里面出现的图片等尽可能的不要本地打包，应该远程拉取cdn

   

   ##### 

   ##### 

6. 

#### 跨域配置，vue.config.js里

跨域配置，以及eslint检查的关闭

安装这两个包 cnpm install --save axios qs

#### 文件夹

src / components / common是公共文件夹

src/data 存放循环遍历的数据，星座名称，错误码，导航栏

src / libs 工具函数

src / services 数据请求放在这里

src / assets / 两个css一个解决两倍border问题， 一个是初始化样式

**src / assets / common.js js初始化的** ！！！！rem配置，fastClick的配置， touchmove在移动端的双指。

#### 分开配置vuex文件store

##### 数据请求的封装libs / http.js 与 services/request.js 文件
