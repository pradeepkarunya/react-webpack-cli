const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      // override CSS to use style-loader (already in common)
    ]
  },
  devServer: {
    static: { directory: path.join(__dirname, 'public') },
    hot: true,
    historyApiFallback: true,
    port: 3000,
    open: true
  },
  plugins: [new ReactRefreshWebpackPlugin()]
});
