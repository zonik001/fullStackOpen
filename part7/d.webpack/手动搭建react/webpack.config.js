const path = require('path')

const webpack = require('webpack')


const config = (env,argv) => {
  // 第二个参数argv可用于访问npm脚本中定义的mode
  console.log('argv', argv.mode)

  // 开发和生产的配置差别很大，把两者的配置分开到各自的文件中可能是个好主意
  const backend_url = argv.mode === 'production'
    ? 'https://obscure-harbor-49797.herokuapp.com/api/notes'
    : 'http://localhost:3001/notes'

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js'
    },
    // 安装 npm install --save-dev webpack-dev-server
    // 解决每次修改代码都需要build
    devServer: {
      static: path.resolve(__dirname, 'build'),
      compress: true,
      port: 3000,
    },
    devtool: 'source-map', //更改源码(更简单定位到错误代码位置)
    module: {
      // 不添加这些加载器 代码会转译失败
      rules: [
          // 配置加载器,用于解析jsx代码(webpack默认只能解析js代码)
          // 加载器及其需要的包安装 npm install @babel/core babel-loader @babel/preset-react --save-dev
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
              // 添加@babel/preset-env插件，它包含了使用所有最新特性的代码并将其转译为与ES5标准兼容的代码所需的一切
          },
        },
          //   css和style加载器
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    // 配置 使用webpack的DefinePlugin来定义全局默认常量
    plugins: [
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(backend_url)
      })
    ]
    // build目录下执行以下命令来检查本地捆绑的生产版本的应用 npx static-server
  }
}

module.exports = config