module.exports = {
  // 配置处理跨域问题
  devServer: {
    proxy: {
      "/api": {
        target: "http://web.juhe.cn:8080/",
        changeOrigin: true,
        ws: true,
        secure: false,  // 不检查https
        pathRewrite: {
          '^/api': ''
        }
      },
    },
    // 关掉eslint
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false
};