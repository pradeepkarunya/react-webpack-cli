const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      { test: /\.[jt]sx?$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/i, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 8 * 1024 } } // inline < 8kb
      },
      { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      inject: 'body'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'static/js/[name].[contenthash:8].js',
    assetModuleFilename: 'static/media/[hash][ext][query]'
  }
};
