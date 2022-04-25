### 1. MDN文档
    https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview

### 3. HTTP请求报文
    1). 请求行:
        method url
        GET /product_detail?id=2
        POST /login 
    2). headers: 多个请求头
        Host: www.baidu.com
        Cookie: BAIDUID=AD3B0FA706E; BIDUPSID=AD3B0FA706;
        Content-Type: application/x-www-form-urlencoded 或者 application/json
    3). body: 请求体
        username=tom&pwd=123
        {"username": "tom", "pwd": 123}


​    
### 4. HTTP响应报文
    1). 响应状态码: 200/404
    2). 多个响应头
        Content-Type: text/html;charset=utf-8
        Set-Cookie: BD_CK_SAM=1;path=/
    3). 响应体
        html文本/json文本/js/css/图片...

### 5. post请求体参数格式
    1). Content-Type: application/x-www-form-urlencoded;charset=utf-8
        用于键值对参数，参数的键值用=连接, 参数之间用&连接
        例如: name=%E5%B0%8F%E6%98%8E&age=12
    2). Content-Type: application/json;charset=utf-8
        用于json字符串参数
        例如: {"name": "%E5%B0%8F%E6%98%8E", "age": 12}
    3). Content-Type: multipart/form-data
        用于文件上传请求

## 8. API的分类
    1). REST API:    restful
        发送请求进行CRUD哪个操作由请求方式来决定
        同一个请求路径可以进行多个操作
        请求方式会用到GET/POST/PUT/DELETE
    2). 非REST API:   restless
        请求方式不决定请求的CRUD操作
        一个请求路径只对应一个操作
        一般只有GET/POST

## 9. json-server是什么?
    用来快速搭建REST API的工具包

## 10. 使用json-server
    在线文档: https://github.com/typicode/json-server
    下载: npm install -g json-server
    目标根目录下创建数据库json文件: db.json
        {
          "posts": [
            { "id": 1, "title": "json-server", "author": "typicode" }
          ],
          "comments": [
            { "id": 1, "body": "some comment", "postId": 1 }
          ],
          "profile": { "name": "typicode" }
        }
    启动服务器
        执行命令: json-server --watch db.json

