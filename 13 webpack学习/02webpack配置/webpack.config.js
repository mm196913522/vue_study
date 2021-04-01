//先要在项目文件夹npm init初始化npm
//然后npm install自动安装已有依赖

//导入node模块用来动态获取绝对路径
const path = require('path');

//1、映射webpack入口和出口
module.exports = {
    entry : './src/main.js',
    output : {
        //path必须使用绝对路径
        //路径拼接
        path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js'
    }
}

//2、映射npm run命令
//    npm run命令可以运行package.json里面的scrpit设置