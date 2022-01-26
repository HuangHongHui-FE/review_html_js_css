<!-- 建koa2项目 -->
<!-- npm i koa-generator -g -->
## koa2 project-name
## cd project-name
## npm install
## npm i koa2-cors -S
## npm run dev

## 路由权限
    1. uid -> 后端API -> 路由权限API
    2. 后端 -> 用户对应路由权限列表  -> 前端 -> JSON
    3. JSON -> 树形结构化
    4. 树形结构化的数据 -> vue路由结构
    5. 路由结构动态 -> 静态路由
    6. 树形结构法的数据 -> 菜单组件

[
    {
        id: 2,
        pid: ,
        path: ,
        name: ,
        link: ,
        title: 
    },
    {
        id: 3,
        pid: ,
        path: ,
        name: ,
        link: ,
        title: 
    },
    {
        id: 4,
        pid: 3,  -> parentId
        path: ,
        name: ,
        link: ,
        title: 
    }
]