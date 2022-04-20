# constelation

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

#### 跨域配置，vue.config.js里

跨域配置，以及eslint检查的关闭



安装这两个包   cnpm install --save axios qs



#### 文件夹

src / components / common是公共文件夹

src/data     存放循环遍历的数据，星座名称，错误码，导航栏

src / libs     工具函数

src / services     数据请求放在这里

src / assets / 两个css一个解决两倍border问题， 一个是初始化样式

**src / assets / common.js    js初始化的**   ！！！！rem配置，fastClick的配置， touchmove在移动端的双指。

#### 分开配置vuex文件store



##### 数据请求的封装libs / http.js 与 services/request.js  文件

