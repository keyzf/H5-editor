const merge = require('webpack-merge');
const common = require('./webpack.base.config.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  watch:true,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    hot:true,
    compress: true,
    open:"Chrome",
    openPage:'index.html'
  },
});