const path = require('path');

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
            use: ["style-loader", "css-loader"],
          },
        ],
      }
}