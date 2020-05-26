const merge = require('webpack-merge');
const common = require('./webpack/webpack.base.config.js/index.js.js.js');

module.exports = merge(common, {
  mode: 'production',
});