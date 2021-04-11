const path = require('path');
//每个js文件加入版权信息
// const webpack = require('webpack');
//安装自动生成index.html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//安装压缩js的插件
const  uglifyjswebpackplugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry : './src/main.js',
    output : {
        //path必须使用绝对路径
        //路径拼接
        path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              "style-loader",
              "css-loader"
            ],
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  //当图片小于设置的值时，会将图片转换成base64
                  limit: 10,
                  //当图片大于设置的值时，安装file-loader，但是不要进行file-loader配置，不然就会生产两张图片，而且出错
                  name: 'img/[name]_[hash:8].[ext]'
                },
              },
            ],
          },
          {
          //ES6转ES5
          //npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          },
          {
            test: /\.vue$/,
            use: ['vue-loader']
          }
        ],
    },
    resolve:{
      alias:{
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    //配置插件
    plugins:[
      //版权信息
      //new webpack.BannerPlugin('最终版权归mary所有'),
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      //js压缩
      new uglifyjswebpackplugin()
    ],
    devServer:{
      contentBase:'./dist',
      //是否实时监听
      inline:true,
      //默认是8080端口
      // port:8080
    }
}