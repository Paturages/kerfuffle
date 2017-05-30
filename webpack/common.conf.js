const webpack = require('webpack'); // eslint-disable-line
const path = require('path');

module.exports = {
  target: 'web',
  stats: {
    chunks: false,
    colors: true,
  },
  context: path.resolve(__dirname, '..', 'src'),
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '..', 'node_modules'),
      path.resolve(__dirname, '..', 'src'),
    ],
  },
  entry: {
    polyfills: ['es5-shim', 'es6-shim'],
    bundle: 'main.jsx',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          query: {
            name: '[name].html',
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|ogg|mp4|webm)(\?.+)?$/,
        exclude: /node_modules/,
        use: 'url-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            query: {
              includePaths: [
                path.resolve(__dirname, '..', 'src'),
              ],
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
