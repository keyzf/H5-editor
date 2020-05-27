const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/dist/',
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.(eot|svg|ttf|woff|woff2|png|ico)\w*/, use: 'file-loader'},
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      filename:'index.html',
      favicon:'./public/favicon.ico'
    })
  ]
}