// 1、v-for 正确设置key值
// 2、封装复用的模块（http请求）、组件（ui库）
// 3、路由懒加载：component：() = import(./xxx.vue)
// 4、productionSourceMap: false  // 在build/config/index.js 生成map文件，定位源码
// 5、productionGzip: true; 启用gzip压缩，打包体积更小   // 在build/config/index.js
// 6、keep-alive 缓存不活跃组件
//    如在app.vue中,缓存list组件
        // <keep-alive include="List">
        //     <route-view />
        // </keep-alive>
// 7、插件CDN方式引入，减小项目体积
// 8、图片使用远程CDN地址，图片懒加载
// 9. 组件按需导入