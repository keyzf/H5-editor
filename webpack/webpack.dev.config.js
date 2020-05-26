const merge = require('webpack-merge');
const common = require('./webpack.base.config.js.js');

module.exports = merge(common, {
  mode: 'development',
});