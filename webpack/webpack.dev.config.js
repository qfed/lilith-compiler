const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    hotUpdateChunkFilename: 'hot-update-chunk.js',
    hotUpdateMainFilename: 'hot-main.js'
  }
})
