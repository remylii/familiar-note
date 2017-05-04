const path = require('path');

const webpack = require('webpack');
const wp_plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];


module.exports = {
  context: path.resolve(__dirname, 'src/scripts'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },

  plugins: process.env.NODE_ENV === 'production' ?
  wp_plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      compressor: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ])
  : wp_plugins,

  resolve: {
    modules: [
      path.resolve(__dirname, './src/scripts'),
      'node_modules'
    ]
  }
};
