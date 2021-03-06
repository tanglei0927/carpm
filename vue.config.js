module.exports = {
    lintOnSave: false,
    chainWebpack: config => {//使打包后dist/index.html 中的链接添加上引号
        config.plugin("html").tap(args => {
          args[0].minify = false;
          return args;
        });
      },
    publicPath:"",
    css: { // 配置高于chainWebpack中关于css loader的配置
          // modules: true, // 是否开启支持‘foo.module.css’样式
          // extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
          sourceMap: false, // 是否在构建样式地图，false将提高构建速度
          loaderOptions: { // css预设器配置项
              sass: {
                  data: ''//`@import "@/assets/scss/mixin.scss";`
              }
          }
      },
      devServer: {
        open: true,   // 自动打开浏览器
        host: '0.0.0.0',
        port: 8080,
        // proxy:{  // 反向代理 
        //     "/": {
        //         target:"http://47.102.144.31:1901/",
        //         changeOrigin: true,
        //     }
        // }
    }
}