const fs = require('fs');
const path = require('path');

// entry point
let entryList = {};
files = fs.readdirSync(path.resolve(__dirname, 'src/scripts'));
files.forEach(file => {
    if (/\.js$/.test(file)) {
      let tmp = file.match(/(.*)\.js$/);
      entryList[tmp[1]] = tmp[0];
    }
});

module.exports = {
  context: path.resolve(__dirname, 'src/scripts'),
  entry: entryList,
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].js'
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

  plugins: [
  ],

  resolve: {
    modules: [
      path.resolve(__dirname, './src/scripts'),
      'node_modules'
    ]
  }
};
