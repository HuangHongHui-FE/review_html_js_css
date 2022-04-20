module.exports = {
    devServe: {
        proxy: {
            "/api": {
                target: 'http://web.juhe.cn:8080/',
                changeOrigin: true,  // 换源
                ws: true,  // websocket也开启代理
                secure: false,   // 检查https
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        // eslint检查错误的关闭
        overlay: {
            warning: false,
            errors: false
        }
    },
    // 关闭eslint检查
    lintOnSave: false
}